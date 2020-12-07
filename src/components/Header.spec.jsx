import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("renders header", () => {
    const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(container.innerHTML).toMatch("Карта");
    expect(container.innerHTML).toMatch("Профиль");
    expect(container.innerHTML).toMatch("Выйти");
  })
});