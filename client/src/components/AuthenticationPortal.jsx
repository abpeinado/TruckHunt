import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Header from './HeaderLimited.jsx';
import UniversalModal from './AuthenticationPortalUniversal.jsx';


class AuthenticationPortal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <UniversalModal />
      </div>
    );
  }
}

export default AuthenticationPortal;
