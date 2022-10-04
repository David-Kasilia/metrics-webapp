/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import NavBar from './NavBar';

const Header = ({ year }) => {
  const DetailsPageTitle = () => (
    <h2> Country Details</h2>
  );

  const HomePageTitle = () => (
    <h2>Countries</h2>
  );

  const Title = (props) => {
    const isTitle = props.isTitle;
    if (isTitle) {
      return <DetailsPageTitle />;
    }
    return <HomePageTitle />;
  };

  return (
    <header>
      <NavBar />
      <h2>{year}</h2>
      <Title isTitle={false} />
      <FaMicrophone />
      <AiOutlineSetting />
    </header>
  );
};

Header.defaultProps = {
  year: '2022',
};

export default Header;
