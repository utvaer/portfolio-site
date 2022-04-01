import React from "react";
import AboutImg from "../components/ui/imageDisplay/AboutImg";
import PageHeading from "../components/typography/PageHeading";
import Title from "../components/typography/Title";
import BookCover from "../components/ui/imageDisplay/BookCover";
import Skills from "../components/textContent/aboutPage/Skills";
import SoftSkills from "../components/textContent/aboutPage/SoftSkills";
import AboutText from "../components/textContent/aboutPage/AboutText";
import AboutLayout from "../components/layout/AboutLayout";
import styles from "../components/layout/AboutLayout.module.css";
import CV from "../docs/CV-Gasser.pdf";
import LinkBtn from "../components/buttons/LinkBtn";
import { Col, Container, Row } from "react-grid-system";

function About() {
  return (
    <Container>
      <AboutLayout>
        <PageHeading>About me.</PageHeading>
        <div className={styles.banner}>
          <Row>
            <Col xs={12} md={4}>
              <AboutImg />
            </Col>
            <Col xs={12} md={8}>
              <div>
                <AboutText>
                  I’m a social anthropologist turned frontend developer.
                  Familiar with technologies such as html, css, javascript,
                  react, sass, bootstrap. Recently, I’m exploring sky
                  technologies, web3 and everything nfts.
                </AboutText>
                <AboutText>
                  My interest in web dev stems from a curiosity on how people
                  really use the web. I have a systemic approach, and with a
                  background in research, I love to combine my backgrounds to
                  approach new challenges.
                </AboutText>
              </div>
            </Col>
          </Row>
        </div>

        <LinkBtn myLink={CV}>View CV</LinkBtn>

        <section className={styles.right}>
          <Row>
            <Col xs={12} md={4} offset={{ md: 8 }}>
              <Title>Skills.</Title>
              <Skills />
            </Col>
          </Row>
        </section>

        <section>
          <Title>Soft Skills.</Title>
          <SoftSkills />
        </section>

        <section className={styles.right}>
          <Title>Interests.</Title>
          <AboutText>
            Constantly looking to learn more, wether about algorithms or
            skincare, I'm spontaneous and curious. Home is where my family is,
            from Egypt to Northern Norway.
          </AboutText>
        </section>

        <Title>Academic Background.</Title>
        <section className={styles.academic}>
          <Row>
            <Col xs={12} md={8}>
              <AboutText>
                As an anthropologist, I have worked on a collaborative project
                on Islam, radicalization and why most young Muslims are not
                radicalized. The findings were published (in Norwegian). I
                personally looked into how online tools are actively used in
                defining one’s religiousness.
              </AboutText>
            </Col>
            <Col xs={12} md={4}>
              <BookCover />
            </Col>
          </Row>
        </section>
      </AboutLayout>
    </Container>
  );
}

export default About;
