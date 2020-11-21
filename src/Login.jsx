import React from 'react';

export const Login = ({ formSubmit }) => {

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2>Войти</h2>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' size='28' placeholder='mail@mail.ru' />
        <label htmlFor='password'>Пароль</label>
        <input id='password' type='password' name='password' size='28' placeholder='********' />
        <a href='/'>Забыли пароль?</a>
        <button type='submit'>Войти</button>
        <div>Новый пользователь?
          <a href="/">Зарегистрируйтесь</a>
        </div>
      </form>
    </div>
  )
}