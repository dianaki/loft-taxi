import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { signUp } from '../actions';

class SignUp extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, firstName, lastName, password } = event.target;
    this.props.signUp(email.value, firstName.value, lastName.value, password.value);
  }


  render() {

    const { email, firstName, lastName, password } = this.state;

    return (
      <div>
        {this.props.isLoggedIn && < Redirect to='/map' />}
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
          <label htmlFor='firstName'>Как вас зовут?(Имя)*:
            <input
              id='firstName'
              name='firstName'
              size='28'
              value={firstName}
              onChange={event => this.setState({ firstName: event.target.value })}
            />
          </label>
          <label htmlFor='lastName'>Как вас зовут?(Фамилия)*:
            <input
              id='lastName'
              name='lastName'
              size='28'
              value={lastName}
              onChange={event => this.setState({ lastName: event.target.value })}
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
      </div>
    );
  }
}

export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn
}),
  { signUp })(SignUp);