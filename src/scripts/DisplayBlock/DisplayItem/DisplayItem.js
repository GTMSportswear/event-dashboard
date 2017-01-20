import React from 'react';
import ReactDOM from 'react-dom';

class DisplayItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      props: this.props.data
    }
  }

  render() {
    return (
      <p>DisplayItem: {this.props.data.name}</p>
    );
  }
}

export default DisplayItem;