import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Progress from './Progress/Progress';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
   <Progress value={100}/>
  </React.StrictMode>
);
