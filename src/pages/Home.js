import React from "react";
import Button from "../components/buttons/Button";
import HomeImg from "../components/buttons/imageDisplay/HomeImg";
import HomeLayout from "../components/layout/HomeLayout";
import HomeText from "../components/textContent/HomeText";
import PageHeading from "../components/typography/PageHeading";

function Home() {
  return (
    <>
      <HomeLayout>
        <div>
          <PageHeading>Hi, my name is Tiffany.</PageHeading>
          <HomeText>
            A multicultural frontend developer with a background in research and
            writing.
          </HomeText>
          <Button>Projects</Button>
        </div>
        <div>
          <HomeImg />
        </div>
      </HomeLayout>
    </>
  );
}

export default Home;
