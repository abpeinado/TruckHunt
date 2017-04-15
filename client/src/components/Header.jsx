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
        <Navbar>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <Search />
            <NavItem >
              <Link to="/truckManagement" className="NavBarFoodTruck">
                Food Vendor?
              </Link>
            </NavItem>
            <NavItem>
              <Button>
                <h3>Login</h3>
              </Button>
              <Button>
                <h3>Signup</h3>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
