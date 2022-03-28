import React from "react";
import styles from "./AboutText.module.css";

function AboutText(props) {
  return <p className={styles.about}>{props.children}</p>;
}

export default AboutText;
