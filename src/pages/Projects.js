import React from "react";
import PageHeading from "../components/typography/PageHeading";
import { ProjectData } from "../projectsData/ProjectsData";
import ProjectList from "../components/projects/ProjectList";

function Projects() {
  return (
    <>
      <PageHeading>Projects</PageHeading>
      <ProjectList projects={ProjectData} />
    </>
  );
}

export default Projects;
