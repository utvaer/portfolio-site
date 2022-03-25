import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">Tiffany Linn Utv&aelig;r Gasser</NavLink>
      </div>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className={styles.link}>
            <FaLinkedinIn />
          </li>
          <li className={styles.link}>
            <FaGithub />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
