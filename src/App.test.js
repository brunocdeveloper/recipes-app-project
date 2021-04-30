import React from 'react';
import { render } from '@testing-library/react';
import Login from './components/Login';

test('Farewell, front-end', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});
