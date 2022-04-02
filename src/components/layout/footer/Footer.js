import React from "react";
import { Col, Row } from "react-grid-system";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Row>
        <Col xs={12} md={4}>
          <div className={styles.footerItem}>
            <GoLocation />
            <span>
              Current location: <br />
              Trondheim, Norway
            </span>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={styles.footerItem}>
            <p>
              Copyright <br />
              Made with love by Tiffany Linn Utv&aelig;r Gasser
            </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={styles.footerItem}>
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
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
