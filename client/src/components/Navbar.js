import "../styles/Navbar.css"
import Logo from "../images/Logo.png"
function Navbar() {
  return (
    <>
      <div id="navbar">
        <div className="navbar-left">
          <img src={Logo} id="logo" alt="logo" />
        </div>
        <div className="navbar-right">
          <a href="#about">About Me</a>  
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
