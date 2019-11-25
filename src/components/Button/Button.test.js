import React from 'react';
import { render } from '@testing-library/react';

import Button from './';

describe('Button Component', () => {
  const label = 'Sample text';

  it('Button Renders without crashing', () => {
    render(<Button>{label}</Button>);
  });

  it('Check if Button content is present', () => {
    const { getByText } = render(<Button>{label}</Button>);
    expect(getByText(label)).toBeInTheDocument();
  });
});
