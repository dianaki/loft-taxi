import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

const mockStore = {
  getState: () => ({ auth: { isLoggedIn: true } }),
  subscribe: () => { },
  dispatch: () => { }
}

describe('Login', () => {
  it('render login', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(getByLabelText('Email')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
  })
})