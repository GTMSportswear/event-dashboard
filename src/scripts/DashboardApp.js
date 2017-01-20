import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayBlock from './DisplayBlock/DisplayBlock';

class DashboardApp extends Component {
  constructor() {
    super();
    this.state = {
      displayItems: [{
        eventDate: 'Today'
      }, {
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