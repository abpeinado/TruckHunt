/* eslint-disable operator-assignment */

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from './Logo.jsx';


class Header extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Menu size="large" borderless>
        <Menu.Item>
          <Logo />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
