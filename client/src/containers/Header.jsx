/* eslint-disable prefer-const */
/* eslint-disable operator-assignment */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { Menu, Button } from 'semantic-ui-react';
import moment from 'moment';
import Logo from '../components/Logo.jsx';
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
    const date = moment(e).format('llll');
    const dateArr = JSON.stringify(date).split(' ');
    const AMPMparse = dateArr[5].split('').splice(0, 2).join('');
    const timeParsed = `${dateArr[4]} ${AMPMparse}`;
    const dateParsed = dateArr[0].split('').splice(1, 3).join('');

    const dateIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    const dateObj = {
      time: timeParsed,
      dayOfWeek: dateIndex[dateParsed]
    };

    this.props.mapDateUpdate(dateObj);
    this.props.truckListFetchData('/search', this.props.mapCenter, this.props.mapDate);
  }

  handleLogout() {
    console.log('inside handleLogout');
    this.props.setUserID(0);
  }

  render() {
    moment.locale('en');
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let ampm = '';
    let timeFormatted = `${hour}:${min} ${ampm}`;
    if (hour > 12) {
      ampm = 'PM';
      if (min < 10) {
        timeFormatted = `${hour - 12}:0${min} ${ampm}`;
      } else {
        timeFormatted = `${hour - 12}:${min} ${ampm}`;
      }
    } else if (hour === 12) {
      ampm = 'PM';
      if (min < 10) {
        timeFormatted = `${hour}:0${min} ${ampm}`;
      } else {
        timeFormatted = `${hour}:${min} ${ampm}`;
      }
    } else if (hour < 12) {
      ampm = 'AM';
      if (min < 10) {
        timeFormatted = `${hour}:0${min} ${ampm}`;
      } else {
        timeFormatted = `${hour}:${min} ${ampm}`;
      }
    }

    return (
      <Menu size="large" borderless>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <i className="search link icon" />
            <div className="flexbox ui transparent icon input">
              <Search className="stretch" />
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
                <Button>Login</Button>
              </Link>) :
              (<Link to="/" onClick={this.handleLogout} className="NavBarFoodTruck">
                <Button>Logout</Button>
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
