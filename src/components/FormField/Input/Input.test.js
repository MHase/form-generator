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

  it('Default Input renders in isolation without crashing', () => {
    render(<Input {...props} />);
  });

  it('Default Input renders label using name prop', async () => {
    const { getByText } = render(<Input {...props} />);
    await (() => {
      expect(getByText('Nickname')).toBeInTheDocument();
    });
  });

  it('Default Input renders label with * when required', async () => {
    const { getByText } = render(<Input {...props} required={true} />);
    await (() => {
      expect(getByText('Nickname*')).toBeInTheDocument();
    });
  });
});
