import React from "react";
import portraitmask from "../../../img/self-bw.jpg";
import styles from "./HomeImg.module.css";

function HomeImg() {
  return (
    <div>
      <img className={styles.image} src={portraitmask} alt="self-portrait" />
    </div>
  );
}

export default HomeImg;
