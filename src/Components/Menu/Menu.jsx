import { useState } from "react";
import "./menu.css";
import "animate.css";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header">
        <div
          className={`animate__animated animate__fadeIn header__logo ${
            isMenuOpen ? "open" : ""
          }`}
        >
          IRON MAN
        </div>
        <div
          className={`animate__animated animate__fadeIn header__menu-btn ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="btn-top"></span>
          <span className="btn-middle"></span>
          <span className="btn-bottom"></span>
        </div>
      </header>

      <div
        className={`animate__animated animate__fadeIn animate__faster header__menu-list ${
          isMenuOpen ? "show" : ""
        }`}
      >
        <ul>
          <li
            style={{ animationDelay: "0.1s" }}
            className={`animate__animated ${
              isMenuOpen ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <a href="#">Home</a>
          </li>
          <li
            style={{ animationDelay: isMenuOpen ? "0.3s" : "0s" }}
            className={`animate__animated ${
              isMenuOpen ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <a href="#">About</a>
          </li>
          <li
            style={{ animationDelay: isMenuOpen ? "0.6s" : "0s" }}
            className={`animate__animated ${
              isMenuOpen ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <a href="#">Contact</a>
          </li>
          <li
            style={{ animationDelay: isMenuOpen ? "0.9s" : "0s" }}
            className={`animate__animated ${
              isMenuOpen ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <a href="#">Services</a>
          </li>
          <li
            style={{ animationDelay: isMenuOpen ? "1.1s" : "0s" }}
            className={`animate__animated ${
              isMenuOpen ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
