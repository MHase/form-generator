import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Button from './';

describe('Button Component', () => {
  afterEach(cleanup);

  const label = 'Sample text';

  it('Button Renders without crashing', () => {
    render(<Button>{label}</Button>);
  });

  it('Check if Button content is present', async () => {
    const { getByText } = render(<Button>{label}</Button>);
    await (() => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });
});
