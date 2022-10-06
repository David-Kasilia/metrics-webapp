import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <NavLink className="homeLink" to="/"><FaLessThan /></NavLink>
  </nav>
);

export default NavBar;
