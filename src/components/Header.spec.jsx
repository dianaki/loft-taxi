import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';

const mockStore = {
  getState: () => ({ auth: { isLoggedIn: false } }),
  subscribe: () => { },
  dispatch: () => { }
}

describe('Header', () => {
  it("renders header", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Карта");
    expect(container.innerHTML).toMatch("Профиль");
    expect(container.innerHTML).toMatch("Выйти");
  })
});