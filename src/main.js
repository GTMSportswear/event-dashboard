import { React } from 'react';
import { ReactDOM } from 'react-dom';
import { DashboardApp } from 'DashboardApp';

const container = document.getElementById('main-page-container');

if (container)
  ReactDOM.render(<DashboardApp />, container);