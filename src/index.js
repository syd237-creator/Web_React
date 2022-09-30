import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import './default.scss'
import { StateProvider } from './components/stateManagement/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider>
    <Router />
  </StateProvider>
);