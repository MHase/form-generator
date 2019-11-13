import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Input from './';

describe('Input Component', () => {
  afterEach(cleanup);

  const props = {
    name: 'Nickname',
    type: 'text',
    onBlur: () => {},
    onChange: () => {},
  };

  it('renders in isolation without crashing', () => {
    render(<Input {...props} />);
  });

  it('renders label using name prop', async () => {
    const { getByText } = render(<Input {...props} />);
    await (() => {
      expect(getByText('Nickname')).toBeInTheDocument();
    });
  });
});
