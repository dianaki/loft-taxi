import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));

jest.mock("./pages/Login", () => (() => <div>Login content</div>));

const mockStore = {
  getState: () => ({ auth: { isLoggedIn: false } }),
  subscribe: () => { },
  dispatch: () => { }
}

describe("App", () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Login content");
  });
});