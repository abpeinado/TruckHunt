/* eslint-disable operator-assignment */

import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from './Logo.jsx';

const Header = () => (
  <Menu size="large" borderless>
    <Menu.Item>
      <Logo />
    </Menu.Item>
  </Menu>
);

export default Header;
