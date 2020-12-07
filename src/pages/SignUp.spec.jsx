import React from 'react';
import SignUp from './SignUp';
import { render } from '@testing-library/react';

describe('SignUp', () => {
  it('render signUp', () => {
    const { getByLabelText } = render(<SignUp />)

    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Как вас зовут?*:')).toHaveAttribute('name', 'userName');
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password');
  })
})