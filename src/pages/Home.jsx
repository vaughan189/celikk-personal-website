import React from "react";
import Hero from "../components/Hero";
import CenteredText from "../components/CenteredText";
import ImageExperience from "../components/ImageExperience";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.css";
import {
  whyDeveloperBackground,
  skillsBackground,
  projectsBackground,
  ongoingProjectsBackground,
  contactBackground,
  footerBackground,
  paddingDefault,
  paddingBottom,
  marginBottomLarge,
  heroBackground,
  spanView
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Resume from "../data/resume/celikresume.pdf";
import Wall from "../data/images/wall.jpg";
import Contact from "../components/Contact";

const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const ongoingProjects = require("../data/ongoingProjects");
const projects = require("../data/projects");
const contact = require("../data/contact");

const Home = () => {
  return (
    <React.Fragment>
      <div
        id={content.heroReference}
        style={{ backgroundImage: `url(${Wall})` }}
        className={`${heroBackground} ${spanView}`}
      >
        <div className="container">
          <Hero
            imageLink={hero.imageLink}
            imageAlt={hero.imageAlt}
            button1Link={Resume}
            button1Text={hero.button1Text}
            button2Link={hero.button2Link}
            button2Text={hero.button2Text}
            subtitle={hero.subtitle}
            title={hero.title}
          />
        </div>
      </div>

      <div className={`${whyDeveloperBackground} ${paddingDefault}`}>
        <Heading className={paddingBottom} text={content.introTitle} />
        <Container>
          <CenteredText title={content.introTitle} text={content.introText} />
        </Container>
      </div>

      <div
        id={content.projectsReference}
        className={`${projectsBackground} ${paddingDefault}`}
      >
        <Heading className={paddingBottom} text={content.projectsTitle} />
        <Container title={content.projectsTitle}>
          {projects.map(project => (
            <ProjectCard
              imageLink={project.imageLink}
              imageAlt={project.imageAlt}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </Container>
      </div>

      <div
        id={content.skillsReference}
        className={`${skillsBackground} ${paddingDefault}`}
      >
        <Heading className={paddingBottom} text={content.skillsTitle} />
        <Container>
          {personalSkills.map(personalSkill => (
            <ImageExperience
              className={`${paddingDefault} ${marginBottomLarge}`}
              imageLink={personalSkill.imageLink}
              imageAlt={personalSkill.imageAlt}
              title={personalSkill.title}
              subtitle={personalSkill.subtitle}
              text={personalSkill.text}
            />
          ))}
        </Container>
      </div>

      <div
        id={content.ongoingProjectsReference}
        className={`${ongoingProjectsBackground} ${paddingDefault}`}
      >
        <Heading
          className={paddingBottom}
          text={content.ongoingProjectsTitle}
        />
        <Container>
          {ongoingProjects.map(project => (
            <ProjectCard
              imageLink={project.imageLink}
              imageAlt={project.imageAlt}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </Container>
      </div>

      <div
        id={content.contactReference}
        className={`${contactBackground} ${paddingDefault}`}
      >
        <Container>
          <Contact
            name={contact.name}
            title={contact.title}
            contactTitle={contact.contactTitle}
            addressLine1={contact.addressLine1}
            addressLine2={contact.addressLine2}
            addressLine3={contact.addressLine3}
            imageLink={contact.imageLink}
            imageAlt={contact.imageAlt}
          />
        </Container>
      </div>

      <div className={`${footerBackground} ${paddingDefault}`}>
        <Container>
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
