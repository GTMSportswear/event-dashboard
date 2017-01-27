import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class DisplayItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      props: this.props.data
    }
  }
  
  getDateDisplay(date) {
    const daysAgo = moment(date).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'YYYY/MM/DD'
    });
    console.log(daysAgo);
    
    return {
      relativeDate: daysAgo,
      specificDate: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    };
  }

  render() {
    const longestStatusBar = this.props.maxValue * 1.15;
    const statusBarPercentageWidth = this.props.data.numberOfOrdersPlaced / longestStatusBar * 100;
    const styleString = 'width: ' + statusBarPercentageWidth + '%;';
    console.log(statusBarPercentageWidth);

    const dateValues = this.getDateDisplay(this.props.data.eventDate);

    return (
      <li>
        <table>
          <tbody>
            <tr>
              <td className="date-display" title={dateValues.specificDate}>{dateValues.relativeDate}</td>
              <td className="accounting-number">{this.props.data.numberOfOrdersPlaced}</td>
              <td className="status-bar-container"><div className="status-bar" style={{width: statusBarPercentageWidth + '%'}}></div></td>
            </tr>
          </tbody>
        </table>
      </li>
    );
  }
}

export default DisplayItem;