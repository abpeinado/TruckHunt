
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Logo />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

// part of App
// contains:
//   -Logo,
//   -Search,
//   -OwnerLoginLink,
//   -UserLoginLink,
