import { useState, useEffect, useContext } from "react";
import "./styles/Header.css";
import logo from "../../assets/Layout/Header/logo.png";
import navBarLinks from "./utils/Header";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Manejar el scroll para agregar clase "scrolled" al header
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="left-section">
          <Link to="/inicio">
            <img src={logo} alt="Logo ODS9" className="figma-icon" />
          </Link>
        </div>
        <div className="right-section">
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            {navBarLinks.map((link, index) => (
              <Link className="no-decoration" to={link.path} key={index}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <div className={`auth-buttons ${isMenuOpen ? "open" : ""}`}>
            {user ? (
              <>
                <p className="logedin-username">Bienvenido, {user}!</p>
                <button className="auth-button logout-button" onClick={logout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="auth-button login">Log in</button>
                </Link>
                <Link to="/registro">
                  <button className="auth-button register">Registro</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
