import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe("Header", () => {
  it("renders header", () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).toMatch("Карта");
    expect(container.innerHTML).toMatch("Профиль");
    expect(container.innerHTML).toMatch("Выйти");
  })
});