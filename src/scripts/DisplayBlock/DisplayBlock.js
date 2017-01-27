import React from 'react';
import ReactDOM from 'react-dom';
import DisplayItem from './DisplayItem/DisplayItem';

class DisplayBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const maxValue = this.props.data.reduce((currentMaxValue, currentItem) => {
      if (currentItem.numberOfOrdersPlaced > currentMaxValue)
        currentMaxValue = currentItem.numberOfOrdersPlaced;
      
      return currentMaxValue;
    }, 0);
    
    const displayItems = this.props.data.map((item, index) => {
      return <DisplayItem key={index} data={item} maxValue={maxValue} />
    });
    return (
      <div className="display-block">
        <h2>{this.props.title}</h2>
        <ul>{displayItems}</ul>
      </div>
    );
  }
}

export default DisplayBlock;