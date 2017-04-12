import React from 'react';
import { Navbar } from 'react-bootstrap';

const Logo = () => (
  <Navbar.Brand>
    <a href="/" >
      <div className="logo-inline">
        <img className="logo-img" src={'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'} alt="logo" />
        <h2 className="logo-text">Fuego Trucks</h2>
      </div>
    </a>
  </Navbar.Brand>
);

export default Logo;
