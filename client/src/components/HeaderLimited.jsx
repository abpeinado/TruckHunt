import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavbarStyled">
        <Navbar>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
