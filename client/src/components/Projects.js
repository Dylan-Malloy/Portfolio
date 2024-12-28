import React from "react";
import Weather from "../images/Weather.png";
import Data from "../images/Data.png";

import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects" className="dots">
        <div className="row center">
          <h1 className="blue-1">Projects</h1>
        </div>

        <div className="row">
          <div className="column ">
            <img src={Weather} alt="Wether" className="icon" />
            <h3 className="blue-1">Weather App</h3>
            <p className="text">
              A python app that uses Weather API to show temperature, along with
              the maximum and minimum temperature within the week.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/Dylan-Malloy/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
              alt="project-name"
            >
              Project Link
            </a>
          </div>
          <div className="column ">
            <img src={Data} alt="Data" className="icon" />
            <h3 className="blue-1">CRUD App</h3>
            <p className="text">
              This is a CRUD app that uses firebase to perform basic CRUD
              applications
            </p>
            <a
              className="button button-disabled"
              href="/#"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
            >
              Coming Soon...
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
