import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock("./pages/Login", () => ({ Login: () => <div>Login content</div> }));
// jest.mock("./pages/Map", () => ({ Map: () => <div>Map content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login content");
  });
});