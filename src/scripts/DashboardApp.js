import React from 'react';
import ReactDOM from 'react-dom';
import DisplayBlock from './DisplayBlock/DisplayBlock';

class DashboardApp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayItems: [{
        eventDate: new Date(),
        numberOfOrdersPlaced: 14
      }, {
        eventDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24),
        numberOfOrdersPlaced: 112
      }, {
        eventDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
        numberOfOrdersPlaced: 6
      }, {
        eventDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3),
        numberOfOrdersPlaced: 32
      }, {
        eventDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 4),
        numberOfOrdersPlaced: 68
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>GTM Dashboard App</h1>
        <DisplayBlock title="Ordering Trend" data={this.state.displayItems} />
      </div>
    )
  }
}

export default DashboardApp;