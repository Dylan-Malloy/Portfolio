import "../styles/Navbar.css"
function Navbar() {
  return (
    <>
      <div id="navbar">
        <div className="navbar-left">
          <p>Logo</p>
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
