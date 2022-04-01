import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../../img/logo.svg";
import styles from "./MainNav.module.css";

function MainNav() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink className={styles.logo} to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        <div onClick={handleClick} className={styles.icon}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>

        <ul className={open ? styles.navLinks.active : styles.navLinks}>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/projects"
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/contact"
              onClick={closeMenu}
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
              <FaLinkedinIn onClick={closeMenu} />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://github.com/utvaer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub onClick={closeMenu} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
