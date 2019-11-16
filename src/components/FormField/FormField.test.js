import React from 'react';
import { act, cleanup, render, fireEvent } from '@testing-library/react';

import FormField from './';
import Input from './Input';
import Select from './Select';

describe('Input Component', () => {
  afterEach(cleanup);

  const props = {
    name: 'Nickname',
    type: 'text',
    onBlur: jest.fn(),
    onChange: jest.fn(),
  };

  it('renders in isolation without crashing', () => {
    render(<FormField {...props} />);
  });

  it('renders Input when type="text" or "email" is passed', () => {
    const { container } = render(<FormField {...props} />);
    const { container: inputContainer } = render(<Input {...props} />);

    expect(container).toStrictEqual(inputContainer);
  });

  it('renders Select when type="select" is passed', () => {
    const selectProps = {
      ...props,
      type: 'select',
      options: [],
    };

    const { container } = render(<FormField {...selectProps} />);
    const { container: selectContainer } = render(<Select {...selectProps} />);

    expect(container).toStrictEqual(selectContainer);
  });
});
