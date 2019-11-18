import React from 'react';
import { cleanup } from '@testing-library/react';

import { renderWithRedux } from '../../utils/tests-utils';

import App from './';

describe('Input Component', () => {
  afterEach(cleanup);

  it('renders in isolation without crashing', () => {
    renderWithRedux(<App />);
  });
});
