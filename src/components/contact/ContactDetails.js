import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./ContactDetails.module.css";

function ContactDetails() {
  return (
    <div className={styles.container}>
      <div>
        <FaEnvelope />
        <span>tiffany.u.gasser@gmail.com</span>
      </div>

      <div>
        <FaPhone />
        <span>+47 930 304 63</span>
      </div>
      <p>I always love a call or an email, or just message me here directly:</p>
    </div>
  );
}

export default ContactDetails;
