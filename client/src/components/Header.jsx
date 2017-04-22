import React, { Component, is } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

const Header = () => {
  return (
    <div className="NavbarStyled">
      <Navbar fluid>
        <Navbar.Header>
          <Logo />
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Search />
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            <Link to="/auth" className="NavBarFoodTruck">
              <Button bsSize="large" bsStyle="primary">
                Login
              </Button>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
