import React from "react";
import portraitmask from "../img/portraitmask.png";

function Home() {
  return (
    <>
      <h1>Hi, my name is Tiffany</h1>
      <p>
        A multicultural frontend developer with a background in research and
        writing.
      </p>
      <div>
        <button>Projects</button>
      </div>
      <img src={portraitmask} alt="self-portrait" />
    </>
  );
}

export default Home;
