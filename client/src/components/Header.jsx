import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, TimePicker } from 'antd';
import { Menu } from 'semantic-ui-react';
import moment from 'moment';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleClick(e, { name }) {
    this.setState({
      activeItem: name
    });
  }

  timeChange(time, timeString) {
    console.log(time, timeString);
  }


  render() {
    const { activeItem } = this.state;
    moment.locale('en');
    const time = 'HH:mm A';
    const date = 'MM/DD/YYYY';
    const currentTime = new Date();
    let hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    // if (hour > 12) {
    //   hour = hour - 12;
    // }
    const timeFormatted = `${hour}:${min}`;
    console.log('moment time', moment()._d);

    return (
      <Menu size='large' borderless>
        <Menu.Item>
          <Logo/>
        </Menu.Item>
        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <Search />
              <i className='search link icon' />
            </div>
          </div>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item >
            <DatePicker defaultValue={moment('01-01-2017', date)} format={date} />
            <TimePicker defaultValue={moment(timeFormatted, time)} format={time} />

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

export default Header;

// import React from 'react';
// import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

// const Header = () => {
//   return (
//     <div className="NavbarStyled">
//       <Navbar fluid>
//         <Navbar.Header>
//           <Logo />
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Nav>
//           <NavItem>
//             <Search />
//           </NavItem>
//         </Nav>
//         <Nav pullRight>
//           <NavItem>
//             <Link to="/auth" className="NavBarFoodTruck">
//               <Button bsSize="large" bsStyle="primary">
//                 Login
//               </Button>
//             </Link>
//           </NavItem>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
