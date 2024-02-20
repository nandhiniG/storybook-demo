import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TimePicker from "./TimePicker/TimePicker";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <TimePicker timeFormat='12' id={'test'} onChange={function (time: number): void {
      throw new Error('Function not implemented.');
    } }></TimePicker>
  </React.StrictMode>
);
