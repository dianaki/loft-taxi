import React from 'react';
import { Menu } from './Menu';

export const Header = ({ changePage }) => {
  return (
    <header>
      <Menu change={changePage} />
    </header>
  );
}