import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from 'utils/tests-utils';
import Form from '.';

describe('Form page', () => {
  it('renders in isolation without crashing', () => {
    const { container } = renderWithRedux(<Form />);
    expect(container).toBeInTheDocument();
  });

  it("won't redirect with default values on form submit", () => {
    const { container, getByText } = renderWithRedux(<Form />);
    const submitButton = getByText('submit');

    fireEvent.click(submitButton);

    expect(container.querySelector('form')).toBeInTheDocument();
  });
});
