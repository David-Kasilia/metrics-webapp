import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import '../App.css';
import '../index.css';

const NavBar = () => (
  <nav>
    <NavLink to="/"><FaLessThan className="homeLink" /></NavLink>
  </nav>
);

export default NavBar;
