import React from 'react';

import { renderWithRedux } from '../../utils/tests-utils';

import Results from './';

describe('Input Component', () => {
  it('renders in isolation without crashing', () => {
    renderWithRedux(<Results />);
  });
});
