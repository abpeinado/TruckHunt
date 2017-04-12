// Main Logo, redirects to homepage
import React from 'react';
import { Navbar } from 'react-bootstrap';

const Logo = () => (
  <Navbar.Brand>
    <a href="/">
      <img className="img-logo" src={'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'} alt="logo" />
    </a>
  </Navbar.Brand>
);

export default Logo;
