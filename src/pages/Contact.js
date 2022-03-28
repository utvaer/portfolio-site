import React from "react";
import PageHeading from "../components/typography/PageHeading";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <PageHeading>Contact</PageHeading>
      <div>
        <FaEnvelope />
        <span>tiffany.u.gasser@gmail.com</span>

        <FaPhone />
        <span>+47 930 304 63</span>
        <p>
          I always love a call or an email, or just message me here directly:
        </p>
      </div>
      <h2>Get in Touch</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email*</label>
        <input type="text" required id="email" />

        <label htmlFor="message">Message*</label>
        <textarea type="text" required id="message" rows="5" />

        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
