import React from "react";
import LinkBtn from "../buttons/LinkBtn";
import Title from "../typography/Title";
import styles from "./ProjectIndividual.module.css";

function ProjectIndividual(props) {
  return (
    <li className={styles.project}>
      <div>
        <Title>{props.title}</Title>
        <p>{props.description}</p>
        <p>{props.tools}</p>
      </div>
      <div className={styles.action}>
        <LinkBtn myLink={props.site}>Live site</LinkBtn>
        <LinkBtn myLink={props.github}>Github</LinkBtn>
      </div>
    </li>
  );
}

export default ProjectIndividual;
