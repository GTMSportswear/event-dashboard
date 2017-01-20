import React from 'react';
import ReactDOM from 'react-dom';
import DisplayItem from './DisplayItem/DisplayItem';

class DisplayBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      displayItems: [{
        name: 'item'
      }, {
        name: 'item2'
      }]
    }
  }
  
  render() {
    const displayItems = this.state.displayItems.map((item, index) => {
      return <DisplayItem key={index} />
    });
    return (
      <div>{displayItems}</div>
    );
  }
}

export default DisplayBlock;