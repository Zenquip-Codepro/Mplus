import { useState } from "react";
import "../src/styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="Navbar-Container">
        <div className="Nav-Left">
          <img
            src="https://www.logodee.com/wp-content/uploads/2022/10/logo-maker-free-vector-file-download.jpg"
            alt="logo"
            style={{
              height: "40px",
              width: "80px",
            }}
          />
          <span>Nexcent</span>
        </div>

        <div className="Nav-Toggle" onClick={toggleMenu}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>

        <div className={`Navbar-Head ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="Button-Div">
          <button className="Button-First">Login</button>
          <button className="Button-Second">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
