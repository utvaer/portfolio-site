import React from "react";
import styles from "./AboutLayout.module.css";

function AboutLayout(props) {
  return <div className={styles.about}>{props.children}</div>;
}

export default AboutLayout;
