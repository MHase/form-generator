import React from 'react';
import { render } from '@testing-library/react';
import FormField from './FormField';
import Input from './Input/Input';
import Select from './Select/Select';

describe('Input Component', () => {
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
