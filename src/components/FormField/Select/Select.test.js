import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react';

import Select from './';

describe('Select Component', () => {
  afterEach(cleanup);

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

  it('renders label using name prop', async () => {
    const { getByText } = render(<Select {...props} />);
    await (() => {
      expect(getByText('Field')).toBeInTheDocument();
    });
  });

  it("doesn't render options list by default", async () => {
    const { container } = render(<Select {...props} />);

    await (() => expect(container.querySelector('.Select__list').toBeNull()));
  });

  it('renders options list after wrapper click', async () => {
    const { container } = render(<Select {...props} />);

    fireEvent.click(container.querySelector('.Select'));

    await (() => expect(container.querySelector('.Select__list').toBeInTheDocument()));
  });

  it('change action should fire onChange and onBlur actions', async () => {
    const { container } = render(<Select {...props} />);
    fireEvent.click(container.querySelector('.Select'));

    const items = await waitForElement(() => container.querySelectorAll('.Select__list-item'));
    fireEvent.click(items[0]);

    expect(props.onChange).toHaveBeenCalled();
    expect(props.onBlur).toHaveBeenCalled();
  });
});
