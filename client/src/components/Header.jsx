
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Search />
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
