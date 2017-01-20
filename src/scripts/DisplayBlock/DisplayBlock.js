import React from 'react';
import ReactDOM from 'react-dom';
import DisplayItem from './DisplayItem/DisplayItem';

class DisplayBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const displayItems = this.props.data.map((item, index) => {
      return <DisplayItem key={index} data={item} />
    });
    return (
      <div className="display-block">{displayItems}</div>
    );
  }
}

export default DisplayBlock;