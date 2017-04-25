import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const VendorHeader = () => (
  <div className="NavbarStyled" >
    <Navbar>
      <Navbar.Header>
        <Logo />
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav bsStyle="pills" activeKey={1} className="NavbarVendor" pullRight navbar>
        <NavItem eventKey={1} title="CurrentOrders">
          <Link to="/vendor">
            Current Orders
          </Link>
        </NavItem>
        <NavItem eventKey={2} title="MenuSelection">
          <Link to="/menuSelection">
          Menu Selection
          </Link>
        </NavItem>
        <NavItem eventKey={3} title="PastOrders">
          <Link to="pastOrders">
            Past Orders
          </Link>
        </NavItem>
        <NavItem eventKey={4} title="Analytics">
          <Link to="/analytics">
            Analytics
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default VendorHeader;
