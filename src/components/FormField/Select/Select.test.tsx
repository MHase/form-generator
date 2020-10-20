import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Select from '.';

describe('Select Component', () => {
  const dependantProps = {
    name: 'Test',
    dependantValue: 'it',
    dependant: 'Field',
    options: {
      it: [{ label: 'IT', value: 'it' }],
      product: [{ label: 'Product', value: 'product' }],
      content: [{ label: 'Content', value: 'content' }],
    },
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };

  const props = {
    name: 'Field',
    options: [
      { label: 'IT', value: 'it' },
      { label: 'Product', value: 'product' },
      { label: 'Content', value: 'content' },
    ],
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };

  it('renders without crashing', () => {
    render(<Select {...props} />);
  });

  it('renders label using name prop', () => {
    const { getByText } = render(<Select {...props} />);
    expect(getByText('Field')).toBeInTheDocument();
  });

  it("doesn't render options list by default", () => {
    const { queryByTestId } = render(<Select {...props} />);

    expect(queryByTestId('options-wrapper')).toBeNull();
  });

  it('renders options list after wrapper click', () => {
    const { container } = render(<Select {...props} />);

    fireEvent.click(container.querySelector('.Select')!);

    expect(container.querySelector('.Select__list')).toBeInTheDocument();
  });

  it('change action should fire onChange and onBlur actions', () => {
    const { container } = render(<Select {...props} />);
    fireEvent.click(container.querySelector('.Select')!);

    const items = container.querySelectorAll('.Select__list-item');
    fireEvent.click(items[0]);

    expect(props.onChange).toHaveBeenCalled();
    expect(props.onBlur).toHaveBeenCalled();
  });

  it('fires onChange and onBlur actions to clear on props on change', async () => {
    render(<Select {...props} />);
    const { rerender } = render(<Select {...dependantProps} />);

    expect(dependantProps.onChange).toHaveBeenCalledTimes(1);
    expect(dependantProps.onBlur).toHaveBeenCalledTimes(1);

    rerender(<Select {...dependantProps} dependantValue="content" />);

    expect(dependantProps.onChange).toHaveBeenCalledTimes(2);
    expect(dependantProps.onBlur).toHaveBeenCalledTimes(2);
  });
});
