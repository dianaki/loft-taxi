import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';

export const Login = ({ changeLogin, isLoggedIn, logIn }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (!isLoggedIn) {
      return null;
  }

  return (
    <div>
      <form>
        <h2>Войти</h2>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' size='28' value={email} onChange={e => setEmail(e.target.value)} placeholder='mail@mail.ru' />
        <label htmlFor='password'>Пароль</label>
        <input id='password' type='password' name='password' size='28' value={password} onChange={e => setPassword(e.target.value)} placeholder='********' />
        <a href='/'>Забыли пароль?</a>
        <a href="" onClick={(event) => {
          logIn(email, password);
          changeLogin(event, 'profile')}
        }>Войти</a>
        <div>Новый пользователь?</div>
        <a href="/" onClick={(event) => changeLogin(event, 'signUp')}>Зарегистрируйтесь</a>
      </form>
    </div>
  )
}

export const LoginWithAuth =  withAuth(Login);