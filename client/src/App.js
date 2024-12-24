import Navbar from "./components/Navbar";
import "./styles/App.css"
function App() {
  return (
    <>
      <Navbar/>
      <section id="hero">
        <h1>Hero</h1>
      </section>

      <section id="about">
        <h1>About</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </>
  );
}

export default App;
