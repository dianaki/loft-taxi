import React, { Component } from 'react';
import { withAuth } from '../AuthContext';

import { Link, Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    userName: '',
    password: ''
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
    <Redirect to='/map' />
  }


  render() {

    const { email, userName, password } = this.state;

    return (
      <>
        <h2>Регистрация</h2>
        <form onSubmit={this.authenticate}>
          <label htmlFor='email'>Email*
            <input
              id='email'
              type='email'
              name='email'
              size='28'
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </label>
          <label htmlFor='userName'>Как вас зовут?*:
            <input
              id='userName'
              name='userName'
              size='28'
              value={userName}
              onChange={event => this.setState({ userName: event.target.value })}
            />
          </label>
          <label htmlFor='password'>Придумайте пароль*
            <input
              id='password'
              type='password'
              name='password'
              size='28'
              value={password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </label>
          <button type='submit'>Зарегестрироваться</button>
        </form>
        <div>Уже зарегестрированы?</div>
        <Link to='/'>Войти</Link>
      </>
    );
  }
}

export default withAuth(SignUp);