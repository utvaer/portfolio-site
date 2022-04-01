import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <Link to="/projects" className={styles.btn}>
      {props.children}
    </Link>
  );
}

export default Button;
