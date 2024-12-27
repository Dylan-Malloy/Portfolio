import React from "react";
import Weather from "../images/Weather.png";

import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="row center">
          <h1 className="blue-1">Projects</h1>
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <img src={Weather} alt="Wether" className="icon" />
              <h3 className="blue-1">Weather App</h3>
              <p className="text">
                This is a weather app that uses a weather API to display weather
                data on a website
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
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
