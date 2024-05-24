import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Header.css';

const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">ГОЛОВНА</Link></li>
            <li className="nav-item"><Link to="/about">ПРО НАС</Link></li>
            <li className="nav-item"><Link to="/profile">Профіль</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;