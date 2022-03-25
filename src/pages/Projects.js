import React from "react";
import PageHeading from "../components/typography/PageHeading";

function Projects() {
  return (
    <div>
      <PageHeading>Projects</PageHeading>
      <div>
        <div>
          <h3>Urban Feet</h3>
          <p>E-commerce platform</p>
        </div>
        <div>
          <h3>Passport Tales</h3>
          <p>Personal blog</p>
        </div>
        <div>
          <h3>++</h3>
          <p>Work in progress</p>
        </div>
      </div>
      <div>
        <div>
          <h2>Urban Feet</h2>
          <p>
            Personal project of an e-commerce platform for sneakers, with a
            login access in order to alternate the products’ database.
          </p>
          <p>HTML, CSS / Javascript / Strapi / Bootstrap / Sass</p>
          <div>
            <button>Live site</button>
            <button>Github</button>
          </div>
        </div>
        <div>
          <h2>Passport Tales</h2>
          <p>Personal blog</p>
          <p>HTML, CSS / Javascript / Wordpress </p>
          <div>
            <button>Live site</button>
            <button>Github</button>
          </div>
        </div>
        <div>
          <h2>++</h2>
          <p>Current work in progress, more to come soon..</p>
          <div>
            <button>Live site</button>
            <button>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
