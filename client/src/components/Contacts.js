import React from "react";

const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="center blue-1">
          <h1>Contacts</h1>
        </div>

        <div>
          <p className="center text">
            The button below is a link to my LinkedIn, for other purposes,
            please contact me at dylantmalloy1@gmail.com
          </p>
        </div>
        <div className="row center">
          <div style={{ display: "flex", gap: "8px" }}>
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/dylan-malloy-333426343/"
              target="_blank"
              rel="noopener noreferrer"
              alt="project-name"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
