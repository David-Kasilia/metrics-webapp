import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/"><FaLessThan /></NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
