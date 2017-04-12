
import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import LoginButton from './LoginButton.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsSignup: false
    };
    this.handleWantsSignup = this.handleWantsSignup.bind(this);
  }

  handleWantsSignup() {
    this.setState({
      wantsSignup: !this.state.wantsSignup
    });
  }

  render() {
    return (
      <div className="NavbarStyled">
        <Navbar>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Search />
          </Navbar.Collapse>
          <Navbar.Collapse>
            <LoginButton onClick={this.handleWantsSignup} />
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
