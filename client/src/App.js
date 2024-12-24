import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/App.css"

function App() {
   const [count, setCount] = useState(0);

  const [open, setOpen ] = useState(false);


  return (
    <>
      <Navbar/>
      
      <Hero/>

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
