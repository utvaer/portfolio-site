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
      <p>Copyright @Utvaer</p>
      <div>
        <FaGithub /> <FaLinkedinIn />
      </div>
    </footer>
  );
}

export default Footer;
