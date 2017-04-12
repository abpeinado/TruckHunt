
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

class Header extends Component {
  render() {
    return (
      <div className='NavbarStyled'>
        <Navbar>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Search />
          </Navbar.Collapse>
        </Navbar>
      </div>
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
