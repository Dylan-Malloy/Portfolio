import "../styles/Navbar.css"
function Navbar() {
  return (
    <>
      <div id="navbar">
        <div className="navbar-left">
          <p>Logo</p>
        </div>
        <div className="navbar-right">
          <p>About Me</p>
          <p>Projects</p>
          <p>Contacts</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
