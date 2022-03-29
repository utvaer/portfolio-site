import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function LinkBtn(props) {
  const myLink = props.myLink;
  return (
    <Link className={styles.btn} href={myLink}>
      {props.children}
    </Link>
  );
}

export default LinkBtn;
