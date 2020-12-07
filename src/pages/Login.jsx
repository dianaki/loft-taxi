import React, { Component } from 'react';
import { withAuth } from '../AuthContext';

import { Link, Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        {this.props.isLoggedIn && <Redirect to='/map' />}
        <h2>Войти</h2>
        <form onSubmit={this.authenticate}>
          <label htmlFor='email'>Email
                <input
              id='email'
              type='email'
              name='email'
              size='28'
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
              placeholder='mail@mail.ru'
            />
          </label>
          <label htmlFor='password'>Пароль
                <input
              id='password'
              type='password'
              name='password'
              size='28'
              value={password}
              onChange={event => this.setState({ password: event.target.value })}
              placeholder='********'
            />
          </label>
          <a href='/'>Забыли пароль?</a>
          <button type='submit'>Войти</button>
        </form>
        <div>Новый пользователь?</div>
        <Link to='/signUp'>Зарегистрируйтесь</Link>
      </>
    );
  }
}

export default withAuth(Login);