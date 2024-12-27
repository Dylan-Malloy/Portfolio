import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="center">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="column column-3">
            <p>ICON</p>
            <h3>Curious</h3>
            <p className="text">
              I have always asked many questions throughout my life. When I am
              passionate about something, I always want to know more, and with
              Computer Science, my curiosity is never satisfied.
            </p>
          </div>
          <div className="column column-3">
            <p>ICON</p>
            <h3>Team Player</h3>
            <p className="text">
              For a decent part of my life, I was always a person who just
              wanted to do my part and nothing more. This was always something
              that affected me, and eventually I realized life is so much more
              than the bare minimum. I now always try to keep in touch with my
              team in projects, and I attempt to keep everyone on track.
            </p>
          </div>
          <div className="column column-3">
            <p>ICON</p>
            <h3>Inspired</h3>
            <p className="text">
              When I was younger, what I wanted to be was a Statistician.
              Numbers have always fascinated me, and I enjoyed math a ton. This
              all changed in my Junior year, where I first caught glimpses of
              what Computer Science was like. It hooked me in instantly, and I
              owe a lot of that to my brother, who graduated from the same
              university that I am in right now. He helped a ton with my love
              for Computer Science, and I don't think I'd be here without him.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
