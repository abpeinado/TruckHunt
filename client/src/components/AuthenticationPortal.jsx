import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Header from './Header.jsx';
import UniversalModal from './AuthenticationPortalUniversal.jsx';


const AuthenticationPortal = () => {
  return (
    <div>
      <Header />
      <UniversalModal className="authModal" />
    </div>
  );
};

export default AuthenticationPortal;
