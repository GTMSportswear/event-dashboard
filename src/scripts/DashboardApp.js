import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayBlock from './DisplayBlock/DisplayBlock';

class DashboardApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Orders Placed</h1>
        <DisplayBlock />
      </div>
    )
  }
}

export default DashboardApp;