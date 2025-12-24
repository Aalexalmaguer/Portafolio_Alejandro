import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Helper to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Alejandro Almaguer</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/academic-achievements')}`} to="/academic-achievements">Academics</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/professional-achievements')}`} to="/professional-achievements">Professional</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/certifications')}`} to="/certifications">Certifications</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/interests')}`} to="/interests">Interests</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
