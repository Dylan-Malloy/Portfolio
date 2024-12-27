import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Projects/>

      <section id="contact">
        
      </section>
    </>
  );
}

export default App;
