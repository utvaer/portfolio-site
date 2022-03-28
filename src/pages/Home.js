import React from "react";
import Button from "../components/buttons/Button";
import HomeImg from "../components/ui/imageDisplay/HomeImg";
import HomeLayout from "../components/layout/HomeLayout";
import HomeText from "../components/textContent/HomeText";
import PageHeading from "../components/typography/PageHeading";
import styles from "../components/layout/HomeLayout.module.css";

function Home() {
  return (
    <HomeLayout>
      <div className={styles.column1}>
        <PageHeading>
          Hi, my name is <br /> Tiffany.
        </PageHeading>
        <HomeText>
          A multicultural frontend developer with a background in research and
          writing.
        </HomeText>
        <Button>Projects</Button>
      </div>
      <div className={styles.column2}>
        <HomeImg />
      </div>
    </HomeLayout>
  );
}

export default Home;
