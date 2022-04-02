import React from "react";
import styles from "./Button.module.css";
import additionalStyles from "./AdditionalStyles.module.css";

function LinkBtn(props) {
  const myLink = props.myLink;
  let extraClass = null;

  if (props.variant === "btn2") {
    extraClass = additionalStyles.btn2;
  }
  return (
    <a
      className={`${styles.btn} ${extraClass}`}
      href={myLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

export default LinkBtn;
