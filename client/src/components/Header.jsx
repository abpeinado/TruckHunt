import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { DatePicker, TimePicker } from 'antd';
import Datetime from 'react-datetime';
import { Menu } from 'semantic-ui-react';
import moment from 'moment';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import { truckListFetchData } from '../actions/truckListActions.js';
import { mapDateUpdate } from '../actions/mapActions.js';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    console.log('time event', e);
    const date = moment(e).format('llll');
    console.log('date format', date);
    const dateArr = JSON.stringify(date).split(' ');
    console.log('og date', dateArr);
    const AMPMparse = dateArr[5].split('').splice(0, 2).join('');
    const timeParsed = `${dateArr[4]} ${AMPMparse}`;
    const dateParsed = dateArr[0].split('').splice(1, 3).join('');
    console.log('timeParsed', timeParsed);
    console.log('dateParsed', dateParsed);

    const dateIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    const dateObj = {
      time: timeParsed,
      dayOfWeek: dateIndex[dateParsed]
    };

    console.log('dateObj', dateObj);
    this.props.mapDateUpdate(dateObj);
    console.log('---------------mapcenter', this.props.mapCenter);
    console.log('---------------mapdate', this.props.mapDate);
    this.props.truckListFetchData('/search', this.props.mapCenter, this.props.mapDate);
  }

 // {
  //   "time": "11:56 AM",
  //   "dayOfWeek": 1
  // }

 // {
  //   "time": "15",
  //   "dayOfWeek": 1
  // }

  render() {
    // const { activeItem } = this.state;
    moment.locale('en');
    // const time = 'HH:mm A';
    // const date = 'MM/DD/YYYY';
    // const currentTime = new Date();
    // const hour = currentTime.getHours();
    // const min = currentTime.getMinutes();
    // if (hour > 12) {
    //   hour = hour - 12;
    // }
    // const timeFormatted = `${hour}:${min}`;
    // console.log('moment time', moment()._d);

    return (
      <Menu size="large" borderless>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <Search />
              <i className="search link icon" />
            </div>
          </div>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item >
            <Datetime value={this.state.inputValue} onChange={this.timeChange} defaultValue={'Select Pickup Time'} />
          </Menu.Item>
          <Menu.Item >
            <Link to="/auth" className="NavBarFoodTruck">
                Login
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    mapDate: state.mapDate,
    mapCenter: state.mapCenter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapDateUpdate: (date) => dispatch(mapDateUpdate(date)),
    truckListFetchData: (url, location, locationDate) => dispatch(truckListFetchData(url, location, locationDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


// export default Header;

            // <DatePicker defaultValue={moment('01-01-2017', date)} format={date} />
            // <TimePicker defaultValue={moment(timeFormatted, time)} format={time} onChange={this.timeChange} value={this.state.time} />
