import React, { Component } from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import { withAuth } from '../AuthContext';

import { Link } from 'react-router-dom';

class Header extends Component {

  unauthenticate = () => {
    this.props.logOut();
  }

  render() {
    return (
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to='/map'>Карта</Link>
            </li>
            <li>
              <Link to='/profile'>Профиль</Link>
            </li>
            <li>
            <Link to='/'>Выйти</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withAuth(Header);