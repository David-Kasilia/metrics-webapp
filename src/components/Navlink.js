import React from 'react';
import { Link } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

const NavLink = () => (
  <nav>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/"><FaLessThan /></Link>
      </li>
    </ul>
  </nav>
);

export default NavLink;
