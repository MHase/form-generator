import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input Component', () => {
  const props = {
    name: 'Nickname',
    type: 'text',
    onBlur: jest.fn(),
    onChange: jest.fn(),
  };

  it('renders in isolation without crashing', () => {
    render(<Input {...props} />);
  });

  it('renders label using name prop', () => {
    const { getByText } = render(<Input {...props} />);
    expect(getByText('Nickname')).toBeInTheDocument();
  });

  it('handles onChange and onBlur props properly', () => {
    const { container } = render(<Input {...props} />);
    const inputElement = container.querySelector('input')!;

    fireEvent.change(inputElement, {
      target: {
        value: 'new value',
      },
    });
    expect(props.onChange).toHaveBeenCalled();

    fireEvent.blur(inputElement);
    expect(props.onBlur).toHaveBeenCalled();
  });

  it('focuses and blurs properly', () => {
    const { container } = render(<Input {...props} />);
    const inputElement = container.querySelector('input')!;

    inputElement.focus();
    expect(inputElement).toHaveFocus();

    inputElement.blur();
    expect(inputElement).not.toHaveFocus();
  });
});
