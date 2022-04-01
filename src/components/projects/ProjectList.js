import React from "react";
import ProjectIndividual from "./ProjectIndividual";
import styles from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <ul className={styles.projects}>
      {props.projects.map((project) => (
        <ProjectIndividual
          key={project.id}
          id={project.id}
          title={project.title}
          short={project.short}
          description={project.description}
          tools={project.tools}
          image={project.image}
          github={project.github}
          site={project.site}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
