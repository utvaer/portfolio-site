import React from "react";
import styles from "./HomeLayout.module.css";

function HomeLayout(props) {
  return <div className={styles.home}>{props.children}</div>;
}

export default HomeLayout;
