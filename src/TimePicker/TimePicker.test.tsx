
import { render, screen } from '@testing-library/react';
import TimePicker from './TimePicker';

test('render product component', () => {
  render(<TimePicker  timeFormat='12' variant='none' id='sa' onChange={()=>console.log("h")}/>);
  const descElement = screen.getByText(/test description/i);
  expect(descElement).toBeInTheDocument();
});
