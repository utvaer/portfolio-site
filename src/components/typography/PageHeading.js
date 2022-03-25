import React from "react";
import styles from "./PageHeading.module.css";

function PageHeading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}

export default PageHeading;
