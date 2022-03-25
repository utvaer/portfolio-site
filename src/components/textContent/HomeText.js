import React from "react";
import styles from "./HomeText.module.css";

function HomeText(props) {
  return <p className={styles.description}>{props.children}</p>;
}

export default HomeText;
