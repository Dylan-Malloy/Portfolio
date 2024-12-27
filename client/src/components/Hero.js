import React from "react";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="row">
          <div className="column center">
            <h1>I'm Dylan</h1>
            <p className="text">
              First-year Computer Science student at Miami University with a
              strong enthusiasm for technology and a keen interest in learning.
              Eager to build a solid foundation in programming and
              problem-solving,{" "}
            </p>
          </div>
          <div className="column">
            <div id="box"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
