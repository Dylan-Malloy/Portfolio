import React from "react";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="row">
          <div className="column center">
            <h1>Hey, I'm Dylan</h1>
            <p className="text">
              I'm a First-year Computer Science student at Miami University with
              a strong enthusiasm for technology and a keen interest in
              learning. Eager to build a solid foundation in programming and
              problem-solving,{" "}
            </p>
            <div style={{ display: "flex", gap: "8px"}}>
              <button className="button">About Me</button>
              <button className="button">Projects</button>
            </div>
          </div>
          <div className="column">
            <div id="box" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
