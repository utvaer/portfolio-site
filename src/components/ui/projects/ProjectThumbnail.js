import React from "react";
import styles from "./ProjectThumbnail.module.css";

function ProjectThumbnail(props) {
  return (
    <div className={styles.projects}>
      <div className={styles.thumbnail}>{props.children}</div>
    </div>
  );
}

export default ProjectThumbnail;
