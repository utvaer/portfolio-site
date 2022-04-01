import React from "react";
import { Row, Col } from "react-grid-system";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./ContactDetails.module.css";

function ContactDetails() {
  return (
    <Row>
      <Col xs={12} md={5} className={styles.container}>
        <div className={styles.contact}>
          <FaEnvelope />
          <span>tiffany.u.gasser@gmail.com</span>
        </div>

        <div className={styles.contact}>
          <FaPhone />
          <span>+47 930 304 63</span>
        </div>
        <p className={styles.contact}>
          I always love a call or an email, or just message me here directly:
        </p>
      </Col>
    </Row>
  );
}

export default ContactDetails;
