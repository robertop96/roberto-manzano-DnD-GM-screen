import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/Images/Logo.png';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <figure className="navbar__logo">
          <Link className="navbar__logo--wrapper" to="/">
            <img className="navbar__logo--img" src={logo} alt="logo" />
            <h1 className="navbar__logo--text">Adventurer</h1>
          </Link>
        </figure>
        <ul className="navbar__list">
          <Link className="navbar__list--link" to="/sign/in">
            Login
          </Link>
          <Link className="navbar__list--link" to="/sign/up">
            Register
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
