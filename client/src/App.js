import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Projects/>

      <Contacts />

    </>
  );
}

export default App;
