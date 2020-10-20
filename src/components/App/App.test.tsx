import React from 'react';
import { renderWithRedux } from 'utils/tests-utils';
import App from './App';

describe('Input Component', () => {
  it('renders in isolation without crashing', () => {
    renderWithRedux(<App />);
  });
});
