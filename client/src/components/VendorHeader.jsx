/* eslint-disable prefer-const */
/* eslint-disable operator-assignment */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import Logo from './Logo.jsx';

class VendorHeader extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout() {
    console.log('inside handleLogout');
    this.props.setUserID(0);
  }

  render() {
    return (
      <Menu size="large" borderless>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item >
            <Link to="/vendor">
              Current Orders
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Link to="pastOrders">
              Past Orders
            </Link>
          </Menu.Item>
          <Menu.Item >
            <Link to="/analytics">
              Analytics
            </Link>
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
    setUserID: state.setUserID
  };
};


export default connect(mapStateToProps, null)(VendorHeader);

// import React from 'react';
// import { Navbar, NavItem, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Logo from './Logo.jsx';

// const VendorHeader = () => (
//   <div className="NavbarStyled" >
//     <Navbar>
//       <Navbar.Header>
//         <Logo />
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Nav bsStyle="pills" className="NavbarVendor" pullRight navbar>
//         <NavItem eventKey={1} title="CurrentOrders">
//           <Link to="/vendor">
//             Current Orders
//           </Link>
//         </NavItem>
//         <NavItem eventKey={2} title="MenuSelection">
//           <Link to="/menuSelection">
//           Menu Selection
//           </Link>
//         </NavItem>
//         <NavItem eventKey={3} title="PastOrders">
//           <Link to="pastOrders">
//             Past Orders
//           </Link>
//         </NavItem>
//         <NavItem eventKey={4} title="Analytics">
//           <Link to="/analytics">
//             Analytics
//           </Link>
//         </NavItem>
//       </Nav>
//     </Navbar>
//   </div>
// );

// export default VendorHeader;

// <Nav bsStyle="pills" activeKey={1} className="NavbarVendor" pullRight navbar>
