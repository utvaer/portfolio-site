import React from "react";
import PageHeading from "../components/typography/PageHeading";
import { ProjectData } from "../projectsData/ProjectsData";
import ProjectList from "../components/projects/ProjectList";
import { Container } from "react-grid-system";

function Projects() {
  return (
    <Container>
      <PageHeading>Projects</PageHeading>
      <ProjectList projects={ProjectData} />
    </Container>
  );
}

export default Projects;
