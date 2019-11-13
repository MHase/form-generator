import React from 'react';
import { cleanup, render } from '@testing-library/react';

import withFieldClasses from './';

const TestComponent = () => <h1>hello</h1>;

describe('withFieldClasses enhancer', () => {
  afterEach(cleanup);
  const props = {
    name: 'Street',
    required: true,
    error: 'This field is required',
  }

  const Component = withFieldClasses(TestComponent);

  it('renders in isolation without crashing', () => {
    render(<Component {...props} />);
  });

  it('renders label with * when required', async () => {
    const { getByText } = render(<Component {...props} />);
    expect(getByText('Street*')).toBeInTheDocument();
  });

  it('renders error message when required prop is passed', async () => {
    const { getByText } = render(<Component {...props} />);
    expect(getByText('This field is required')).toBeInTheDocument();
  });
});
