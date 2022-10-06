/* eslint-disable react/prop-types */
import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import NavBar from './NavBar';
import '../App.css';
import '../index.css';

const Header = ({ year }) => (
  <header>
    <NavBar />
    <h2 className="year">{year}</h2>
    <h2 className="page-title">COUNTRIES OF THE WORLD STATISTICS</h2>
    <div className="head-icons">
      <FaMicrophone className="icon1" />
      <AiOutlineSetting className="icon1" />
    </div>
  </header>
);

Header.defaultProps = {
  year: '2022',
};

export default Header;
