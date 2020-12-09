import React, { Component } from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { logOut } from '../actions';


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
              <Link to='/' onClick={this.unauthenticate}>Выйти</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  { logOut }
)(Header);