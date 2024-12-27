import React from "react";
import Gear from "../images/Gear.png";
import Lightbulb from "../images/Lightbulb.png";
import People from "../images/People.png";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="center blue-1">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="column column-3">
            <img src={Lightbulb} className="icon" alt="lightbulb" />
            <h3 className="blue-1">Curious</h3>
            <p className="text">
              Curiosity has always been a core part of who I am, driving me to
              ask questions and constantly seek deeper understanding. In
              Computer Science, this desire to learn is continually fueled by
              new technologies and complex challenges.
            </p>
          </div>
          <div className="column column-3">
            <img src={People} className="icon" alt="people" />
            <h3 className="blue-1">Collaboration</h3>
            <p className="text">
              While I once focused solely on completing my tasks independently,
              I now recognize the value of teamwork and strive to maintain clear
              communication and ensure everyone is aligned on project goals.
              Collaboration has become essential to my approach in both academic
              and professional settings.
            </p>
          </div>
          <div className="column column-3">
            <img src={Gear} className="icon" alt="gear" />
            <h3 className="blue-1">Inspired</h3>
            <p className="text">
              My initial fascination with numbers led me toward statistics, but
              it was discovering Computer Science in high school that truly
              sparked my passion. My brother, a graduate of my current
              university, played a key role in inspiring me to pursue this
              field.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
