import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Navbar.Brand>
    <Link to="/" >
      <div className="logo-inline">
        <img className="logo-img" src={'https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/LogoV2.png'} alt="logo" />
      </div>
    </Link>
  </Navbar.Brand>
);

export default Logo;
