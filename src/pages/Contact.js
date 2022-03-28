import React from "react";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import PageHeading from "../components/typography/PageHeading";

function Contact() {
  return (
    <div>
      <PageHeading>Contact</PageHeading>
      <ContactDetails />
      <ContactForm />
    </div>
  );
}

export default Contact;
