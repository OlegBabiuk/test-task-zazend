import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer container-wrapper">
    <div className="container">
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
