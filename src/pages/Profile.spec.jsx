import React from 'react';
import Profile from './Profile';
import { render } from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

const mockStore = {
  getState: () => ({auth: {isLoggedIn: false}}),
  subscribe: () => {},
  dispatch: () => {}
} 

describe('Profile', () => {
  it('renders correctly', () => {
    const {container} = render(
      <BrowserRouter>
          <Provider store={mockStore}>
              <Profile />
          </Provider>
      </BrowserRouter>
  );
    expect(container.innerHTML).toMatch('Профиль');
  })
})