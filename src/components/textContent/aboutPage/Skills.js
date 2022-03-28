import React from "react";
import styles from "./List.module.css";

function List() {
  return (
    <ul className={styles.list}>
      <li>Html, Css</li>
      <li>Javascript</li>
      <li>Wordpress</li>
      <li>Sass</li>
      <li>React</li>
      <li>Bootstrap</li>
    </ul>
  );
}

export default List;
