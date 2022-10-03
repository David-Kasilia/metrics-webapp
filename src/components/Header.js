import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import NavLink from './NavLink';

const Header = () => (
  <header>
    <NavLink />
    <h2>2022</h2>
    <FaMicrophone />
    <AiOutlineSetting />
  </header>
);

export default Header;
