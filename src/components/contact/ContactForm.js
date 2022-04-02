import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
import Title from "../typography/Title";
import { Col, Row } from "react-grid-system";
import Message from "./Message";

function ContactForm(props) {
  const form = useRef();

  const [message, showMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sw1vz2f",
        "template_vkc2mlg",
        form.current,
        "uCITeDmFZokrnOooa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showMessage(true);
  };
  return (
    <Row>
      <Col xs={12} md={5} offset={{ md: 6 }}>
        <Title>Get in Touch.</Title>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <div className={styles.input}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles.input}>
            <label htmlFor="email">Email*</label>
            <input type="email" required id="email" name="email" />
          </div>

          <div className={styles.input}>
            <label htmlFor="message">Message*</label>
            <textarea
              type="text"
              required
              id="message"
              name="message"
              rows="5"
            />
          </div>

          <button className={styles.btn} type="submit" value="Send">
            Send
          </button>
          <div>{message ? <Message /> : null}</div>
        </form>
      </Col>
    </Row>
  );
}

export default ContactForm;
