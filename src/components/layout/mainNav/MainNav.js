import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../img/logo.svg";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.linkedin.com/in/tiffany-utv%C3%A6r-gasser-023336115/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://github.com/utvaer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
