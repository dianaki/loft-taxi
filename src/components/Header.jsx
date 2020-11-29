import React from 'react';
import Menu from './Menu';
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';

const Header = ({ changePage }) => {
  return (
    <header>
      <Logo />
      <Menu change={changePage} />
    </header>
  );
}

export default Header;