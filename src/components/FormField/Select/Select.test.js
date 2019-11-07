import React from 'react';
import {
  cleanup,
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
    onChange: () => {},
    onBlur: () => {},
  };

  it('Default Select renders without crashing', () => {
    render(<Select {...props} />);
  });

  it('Default Select renders label using name prop', async () => {
    const { getByText } = render(<Select {...props} />);
    await (() => {
      expect(getByText('Field')).toBeInTheDocument();
    });
  });

  it("Default Select doesn't render options list by default", async () => {
    const { container } = render(<Select {...props} />);

    await (() => expect(container.querySelector('.Select__list').toBeNull()));
  });

  it('Default Select renders options list after wrapper click', async () => {
    const { container } = render(<Select {...props} />);

    fireEvent.click(container.querySelector('.Select'));

    await (() =>
      expect(container.querySelector('.Select__list').toBeInTheDocument()));
  });

  it('Default Select change state value after item click', async () => {
    const { container } = render(<Select {...props} />);
    fireEvent.click(container.querySelector('.Select'));

    const items = await waitForElement(() =>
      container.querySelectorAll('.Select__list-item')
    );

    let selectedItems = null;
    selectedItems = await waitForElement(() =>
      container.querySelectorAll('.Select__list-item--selected')
    );
    expect(items).toHaveLength(3);
    expect(selectedItems).toHaveLength(0);

    fireEvent.click(items[0]);
    fireEvent.click(container.querySelector('.Select'));

    selectedItems = await waitForElement(() =>
      container.querySelectorAll('.Select__list-item--selected')
    );
    expect(selectedItems).toHaveLength(1);
  });
});
