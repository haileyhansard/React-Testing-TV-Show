import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import Dropdown from './App';
import { fetchShow } from './api/fetchShow';

test("App component renders", () => {
    render(<App />);
});

test("Dropdown component renders", () => {
    render(<Dropdown />);
});

// test("Check to see if state is showing up in Dropdown component", () => {
//     const { getByLabelText }
//     render(<Dropdown />);
//     expect(screen.getByText(/select a season/i)
// })