import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
// import LoginButton from './LoginButton.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsSignup: false
    };
    this.handleWantsSignup = this.handleWantsSignup.bind(this);
  }

  handleWantsSignup() {
    console.log('inside wants signup');
  }

  render() {
    return (
      <div className="NavbarStyled">
        <Navbar fluid>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav >
            <NavItem>
              <Search />
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <Link to="/authenticate" className="NavBarFoodTruck">
                <Button bsStyle="large" bsStyle="primary">
                  Login
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

    );
  }
}

export default Header;

// <div className="NavbarStyled">
//   <Navbar>
//     <Navbar.Header>
//       <Logo />
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Nav>
//       <Search />
//       <NavItem >
//         <Link to="/vendorManagement" className="NavBarFoodTruck">
//           <Button>
//             Food Vendor?
//           </Button>
//         </Link>
//       </NavItem>
//       <NavItem>
//         <Link to="/authenticate" className="NavBarFoodTruck">
//           <Button>
//             Sign Up / Login
//         </Button>
//         </Link>
//       </NavItem>
//     </Nav>
//   </Navbar>
// </div>
