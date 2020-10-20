import React from 'react';
import { renderWithRedux } from 'utils/tests-utils';
import Results from './Results';

describe('Input Component', () => {
  it('renders in isolation without crashing', () => {
    renderWithRedux(<Results />);
  });
});
