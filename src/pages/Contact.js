import React from "react";
import { Container } from "react-grid-system";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import PageHeading from "../components/typography/PageHeading";

function Contact() {
  return (
    <Container>
      <PageHeading>Contact.</PageHeading>
      <ContactDetails />
      <ContactForm />
    </Container>
  );
}

export default Contact;
