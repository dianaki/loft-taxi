import React from 'react';
import Profile from './Profile';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const mockStore = {
  getState: () => ({ auth: { isLoggedIn: true } }),
  subscribe: () => { },
  dispatch: () => { }
}

describe('Profile', () => {
  it('render profile', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Profile />
        </Provider>
      </BrowserRouter>
    );
    expect(getByLabelText('Номер карты')).toHaveAttribute('name', 'cardNumber');
    expect(getByLabelText('MM/YY')).toHaveAttribute('name', 'expiryDate');
    expect(getByLabelText('Имя владельца')).toHaveAttribute('name', 'cardName');
    expect(getByLabelText('CVC')).toHaveAttribute('name', 'cvc');
  })
})