import React from "react";
import styles from "./ContactForm.module.css";
import Title from "../typography/Title";
import Button from "../buttons/Button";

function ContactForm() {
  return (
    <div>
      <Title>Get in Touch</Title>
      <form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div className={styles.input}>
          <label htmlFor="email">Email*</label>
          <input type="text" required id="email" />
        </div>

        <div className={styles.input}>
          <label htmlFor="message">Message*</label>
          <textarea type="text" required id="message" rows="5" />
        </div>

        <Button>Send</Button>
      </form>
    </div>
  );
}

export default ContactForm;
