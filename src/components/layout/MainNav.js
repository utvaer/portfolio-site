import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function MainNav() {
  return (
    <header>
      <div>
        <NavLink to="/">Tiffany Linn Utv&aelig;r Gasser</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaGithub />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
