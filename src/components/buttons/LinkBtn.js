import React from "react";
import styles from "./Button.module.css";

function LinkBtn(props) {
  const myLink = props.myLink;
  return (
    <a
      className={styles.btn}
      href={myLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

export default LinkBtn;
