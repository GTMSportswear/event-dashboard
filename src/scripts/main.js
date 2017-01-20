import React from 'react';
import ReactDOM from 'react-dom';
import DashboardApp from './DashboardApp';
import '../styles/main.scss';

const container = document.getElementById('main-page-container');

console.log(React);

if (container)
  ReactDOM.render(<DashboardApp />, container);