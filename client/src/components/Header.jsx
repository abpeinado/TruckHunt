import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
// import { connect } from 'react-redux';
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
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Search />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
