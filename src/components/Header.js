/* eslint-disable react/prop-types */
import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import NavBar from './NavBar';

const Header = ({ year }) => (
  <header>
    <NavBar />
    <h2>{year}</h2>
    <h2>COUNTRIES</h2>
    <FaMicrophone />
    <AiOutlineSetting />
  </header>
);

Header.defaultProps = {
  year: '2022',
};

export default Header;
