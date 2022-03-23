import React from "react";
import portraitmask from "../img/portraitmask.png";

function Home() {
  return (
    <div>
      <h1>Hi, my name is Tiffany</h1>
      <p>
        A multicultural frontend developer with a background in research and
        writing.
      </p>
      <button>Projects</button>
      <img src={portraitmask} alt="self-portrait" />
    </div>
  );
}

export default Home;
