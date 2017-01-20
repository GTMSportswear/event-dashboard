import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayBlock from './DisplayBlock/DisplayBlock';

class DashboardApp extends Component {
  constructor() {
    super();
    this.state = {
      displayItems: [{
        eventDate: new Date(),
        numberOfOrdersPlaced: '14'
      }, {
        eventDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24),
        numberOfOrdersPlaced: '10'
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>Orders Placed</h1>
        <DisplayBlock data={this.state.displayItems} />
      </div>
    )
  }
}

export default DashboardApp;