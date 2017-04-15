import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import Logo from './Logo.jsx';

const VendorHeader = () => (
  <div className="NavbarStyled" >
    <Navbar>
      <Navbar.Header>
        <Logo />
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav bsStyle="pills" activeKey={1} className="NavbarVendor" pullRight navbar>
        <NavItem eventKey={1} title="CurrentOrders">Current Orders</NavItem>
        <NavItem eventKey={2} title="MenuSelection">Menu Selection</NavItem>
        <NavItem eventKey={3} title="PastOrders">Past Orders</NavItem>
        <NavItem eventKey={4} title="Analytics">Analytics</NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default VendorHeader;
