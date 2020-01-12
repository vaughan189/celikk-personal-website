import React, { useEffect, useState } from "react";
import storage from "local-storage-fallback";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import {
  blogPost,
  blogPostBackground,
  box,
  blogPostDark
} from "../stylesheets/BlogPost.module.sass";
import ImageCarousel from "../components/ImageCarousel";
import { folders, getInitialTheme, mapFileNameToId } from "../utils/FileManager.utils";

import signatureImage from "../data/images/signature.svg";
import DarkModeToggle from "../components/DarkModeToggle";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Footer/HorizontalRuler";

const blogNavbar = require("../data/blogNavbar");
const footer = require("../data/footer");

const BlogPost = ({ match }) => {
  const [post, setPost] = useState("");
  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    window.scrollTo(0, 0);

    storage.setItem("theme", isDark.toString());

    fetch(`/static/media/${mapFileNameToId(match.params.blogPost, folders.blogFiles)}`)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  }, [match.params.blogPost, isDark]);

  return (
    <div className={`${isDark ? blogPostDark : null} ${blogPost}`}>
      <Container className={`col-lg-6 col-md-8 py-4 rounded-top  ${blogPostBackground}`}>
        <Row className="py-lg-5 pb-4 pt-2 justify-content-between">
          <Link to={blogNavbar.blogLink} className={box}>
            {blogNavbar.goBackLabel}
          </Link>
          <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} setIsDark={setIsDark} />
          <Link to={blogNavbar.homeLink} className={box}>
            {blogNavbar.homeLabel}
          </Link>
        </Row>

        <Markdown
          options={{
            overrides: {
              ImageCarousel: {
                component: ImageCarousel,
                props: {
                  isDark
                }
              }
            }
          }}
        >
          {post}
        </Markdown>
        <HorizontalRuler isDark={isDark}/>
        <BlogFooter content={footer} signatureImage={signatureImage} isDark={isDark} />
      </Container>
    </div>
  );
};

BlogPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      blogPost: PropTypes.string.isRequired
    })
  }).isRequired
};

export default BlogPost;
