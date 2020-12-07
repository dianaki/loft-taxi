import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

describe('Login', () => {
  it('render login', () => {
    const { getByLabelText } = render(<BrowserRouter><Login /></BrowserRouter>)

    expect(getByLabelText('Email')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
  })
})