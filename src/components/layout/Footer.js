import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>Current location: Trondheim</p>
      <p>Copyright @Utvaer</p>
      <div>
        <FaGithub /> <FaLinkedinIn />
      </div>
    </footer>
  );
}

export default Footer;
