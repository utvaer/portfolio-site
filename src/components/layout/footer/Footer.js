import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Current location: <br />
        Trondheim
      </p>
      <p>Copyright @Tiffany Linn Utv&aelig;r Gasser</p>
      <div className={styles.links}>
        <a
          href="https://github.com/utvaer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tiffany-utv%C3%A6r-gasser-023336115/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
