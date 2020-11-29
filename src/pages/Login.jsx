import React from 'react';

import { Logo } from 'loft-taxi-mui-theme';

const Login = ({ changeLogin }) => {

  return (
    <div>
      <Logo />
      <form>
        <h2>Войти</h2>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' size='28' placeholder='mail@mail.ru' />
        <label htmlFor='password'>Пароль</label>
        <input id='password' type='password' name='password' size='28' placeholder='********' />
        <a href='/'>Забыли пароль?</a>
        <a href="" onClick={(event) => changeLogin(event, 'map')}>Войти</a>
        <div>Новый пользователь?</div>
        <a href="/" onClick={(event) => changeLogin(event, 'signUp')}>Зарегистрируйтесь</a>
      </form>
    </div>
  )
}

export default Login;