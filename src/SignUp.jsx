import React from 'react';

export const SignUp = ({ formSubmit }) => {
  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2>Регистрация</h2>
        <label htmlFor='email'>Email*</label>
        <input id='email' type='email' name='email' size='28' />
        <label htmlFor='userName'>Как вас зовут?*:</label>
        <input id='userName' name='userName' size='28' />
        <label htmlFor='password'>Придумайте пароль*</label>
        <input id='password' type='password' name='password' size='28' />
        <button type='submit'>Зарегистрироваться</button>
        <div>Уже зарегистрированы?
          <a href='/'>Войти</a>
        </div>
      </form>
    </div>
  )
}