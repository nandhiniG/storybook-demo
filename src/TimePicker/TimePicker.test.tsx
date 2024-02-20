import React from 'react';
import { render, screen } from '@testing-library/react';
import TimePicker from './TimePicker';

test('render product component', () => {
  render(<TimePicker  type='12' variant='default'/>);
  const descElement = screen.getByText(/test description/i);
  expect(descElement).toBeInTheDocument();
});
