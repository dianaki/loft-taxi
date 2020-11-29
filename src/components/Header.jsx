import React from 'react';
import Menu from './Menu';
import { Logo } from 'loft-taxi-mui-theme';

const Header = ({ changePage }) => {
  return (
    <header>
      <Menu change={changePage} />
    </header>
  );
}

export default Header;