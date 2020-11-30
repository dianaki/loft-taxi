import React, { Component } from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';

class Header extends Component {

  static propTypes = {
    changePage: PropTypes.func
  }

  unauthenticate = () => {
    this.props.logOut();
    this.props.changePage('login');
  }

  render() {
    return (
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <button onClick={() => { this.props.changePage('map') }}>Карта</button>
            </li>
            <li>
              <button onClick={() => { this.props.changePage('profile') }}>Профиль</button>
            </li>
            <li>
              <button onClick={this.unauthenticate}>Выйти</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withAuth(Header);