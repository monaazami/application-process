import React from 'react';
import logo from '../../logo-cyf.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">
      <img src={logo} alt="logo" width="170" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/">Application Form </Link>
        </li>
        <li className="nav-item">
          <Link to="/applicant-dashboard">Applicant Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/applicants">Admin</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
