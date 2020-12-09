import React from 'react';
import SignUp from './SignUp';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

const mockStore = {
  getState: () => ({ auth: { isLoggedIn: true } }),
  subscribe: () => { },
  dispatch: () => { }
}

describe('SignUp', () => {
  it('render signUp', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <SignUp />
        </Provider>
      </BrowserRouter>
    );
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Как вас зовут?*:')).toHaveAttribute('name', 'userName');
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password');
  })
})