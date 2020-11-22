import React from 'react';
import Menu from './Menu';

const Header = ({ changePage }) => {
  return (
    <header>
      <Menu change={changePage} />
    </header>
  );
}

export default Header;