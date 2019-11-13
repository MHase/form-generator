import React from 'react';
import { cleanup } from '@testing-library/react';

import { renderWithRedux } from '../../utils/tests-utils';

import Form from './';

describe('Form page', () => {
  afterEach(cleanup);

  it('renders in isolation without crashing', () => {
    const { container } = renderWithRedux(<Form />);
    expect(container).toBeInTheDocument();
  });
});
