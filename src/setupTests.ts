import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
  jest.resetAllMocks();
  cleanup();
});
