import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dropdown from './App';


test("App component renders", () => {
  render(<App />);
});

test("Dropdown component renders", () => {
  render(<Dropdown />);
});

