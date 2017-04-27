import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './Logo.jsx';

const Header = () => (
  <div className="NavbarStyled">
    <Navbar>
      <Navbar.Header>
        <Logo />
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  </div>
);

export default Header;
