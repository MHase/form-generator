import React from 'react';

import { renderWithRedux } from '../../utils/tests-utils';

import App from './';

describe('Input Component', () => {
  it('renders in isolation without crashing', () => {
    renderWithRedux(<App />);
  });
});
