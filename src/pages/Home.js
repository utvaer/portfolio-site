import React from "react";
import Button from "../components/buttons/Button";
import HomeImg from "../components/ui/imageDisplay/HomeImg";
import HomeLayout from "../components/layout/HomeLayout";
import HomeText from "../components/textContent/HomeText";
import PageHeading from "../components/typography/PageHeading";
import { Col, Container, Row } from "react-grid-system";

function Home() {
  return (
    <Container>
      <HomeLayout>
        <Row>
          <Col xs={12} md={8}>
            <PageHeading>
              Hi, my name is <br /> Tiffany.
            </PageHeading>
            <HomeText>
              A multicultural frontend developer with a background in research
              and writing.
            </HomeText>
          </Col>

          <Col xs={12} md={4}>
            {" "}
            <HomeImg />
          </Col>
        </Row>
        <Button>Projects</Button>
      </HomeLayout>
    </Container>
  );
}

export default Home;
