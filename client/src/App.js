import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <section>
        <div className="row">
          <div className="column scrollable">
            <section id="about">
              <h1>About</h1>
              <p>Content for the about section...</p>
            </section>

            <section id="projects">
              <h1>Projects</h1>
              <p>Content for the projects section...</p>
            </section>

            <section id="contact">
              <h1>Contact</h1>
              <p>Content for the contact section...</p>
            </section>
          </div>
          <div className="column sticky">
            <h1>Right Column</h1>
            <p>This content stays fixed while the left side scrolls.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
