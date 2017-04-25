/* eslint-disable operator-assignment */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    this.handleLogout = this.handleLogout.bind(this);
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

  handleLogout(){
    console.log('inside handleLogout');
    this.props.setUserID(0);
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
    const currentTime = new Date();
    let hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    let ampm = '';
    let timeFormatted = `${hour}:${min} ${ampm}`;
    if (hour > 12) {
      ampm = 'PM';
      timeFormatted = `${hour - 12}:${min} ${ampm}`;
    } else {
      ampm = 'AM';
      timeFormatted = `${hour}:${min} ${ampm}`;
    }
    if (min < 10) {
      timeFormatted = `${hour}:0${min} ${ampm}`;
    }

    console.log('hour', hour);
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
            <Datetime value={this.state.inputValue} onChange={this.timeChange} defaultValue={`Searching @ ${timeFormatted}`} />
          </Menu.Item>
          <Menu.Item >
            {this.props.setUserID === 0 ?
              (<Link to="/auth" className="NavBarFoodTruck">
                  Login
              </Link>) :
             (<Link to="/" onClick={this.handleLogout} className="NavBarFoodTruck">
                  Logout
              </Link>)
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapDate: state.mapDate,
    mapCenter: state.mapCenter,
    setUserID: state.setUserID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapDateUpdate: (date) => dispatch(mapDateUpdate(date)),
    truckListFetchData: (url, location, locationDate) => dispatch(truckListFetchData(url, location, locationDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
