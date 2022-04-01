import React from "react";
import LinkBtn from "../buttons/LinkBtn";
import Title from "../typography/Title";
import styles from "./ProjectIndividual.module.css";

function ProjectIndividual(props) {
  return (
    <li>
      <Title>{props.title}</Title>
      <div className={styles.project}>
        <img
          src={require("../../img/" + props.image + ".png")}
          alt={props.short}
          className={styles.img}
        />
        <div className={styles.text}>
          <p className={styles.tools}>{props.tools}</p>
          <p>{props.description}</p>
        </div>
        <div className={styles.action}>
          <LinkBtn myLink={props.site}>Live site</LinkBtn>
          <LinkBtn myLink={props.github}>Github</LinkBtn>
        </div>
      </div>
    </li>
  );
}

export default ProjectIndividual;
