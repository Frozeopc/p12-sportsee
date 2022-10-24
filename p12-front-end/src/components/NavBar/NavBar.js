import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";



function NavBar() {
  return (
    <nav className="horizontal-nav">
      <Link to="/" className="navbar-logo">
      <img src={logo} alt="Logo-image" className="logo" />
      </Link>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            Profil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Réglage
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;