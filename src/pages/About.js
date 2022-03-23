import React from "react";
import portrait from "../img/portrait.png";
import book from "../img/book.jpeg";

function About() {
  return (
    <div>
      <h1>About me</h1>
      <img src={portrait} alt="portrait" />
      <p>
        I’m an anthropologist turned frontend developer. I’m familiar with
        technologies such as html, css, javascript, react, sass, bootstrap.
        Further, I’m exploring ++
      </p>
      <p>
        My interest in web dev stems from a curiosity on how people really use
        the web. I have a systemic approach, and with a background in research,
        I love to combine my backgrounds to approach new challenges.
      </p>
      <h2>Skills</h2>
      <h2>Soft Skills</h2>
      <ul>
        <li>Collaborative work</li>
        <li>Cultural sensitivity</li>
        <li>User first, always</li>
        <li>Qualitative research</li>
        <li>Project-based work</li>
        <li>Public speaking</li>
        <li>Methodological approach</li>
      </ul>
      <h2>Interests</h2>
      <p>
        I’m constantly looking to learn more, wether about algorithms or
        skincare. I love great food, great coffee, great people and new places!
      </p>
      <h2>Academic Background</h2>
      <p>
        As an anthropologist, I have worked on a collaborative project on Islam,
        radicalization and why most young Muslims are not radicalized. The
        findings were published (in Norwegian). I personally looked into how
        online tools are actively used in defining one’s religiousness.
      </p>
      <img src={book} alt="book cover" />
      <a href="/">Unge muslimske stemmer. Om tro og ekstremisme</a>
    </div>
  );
}

export default About;
