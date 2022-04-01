import React from "react";
import portrait from "../../../img/portrait.jpg";
import styles from "./AboutImg.module.css";

function AboutImg() {
  return (
    <div>
      <img className={styles.image} src={portrait} alt="self-portrait" />
    </div>
  );
}

export default AboutImg;
