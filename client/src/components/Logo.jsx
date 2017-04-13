import React from 'react';
import { Navbar } from 'react-bootstrap';

const Logo = () => (
  <Navbar.Brand>
    <div className="logo-inline">
      <a href="/" >
        <img className="logo-img" src={'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'} alt="logo" />
      </a>
      <h2 className="logo-text">Fuego Trucks</h2>
    </div>
  </Navbar.Brand>
);

export default Logo;
