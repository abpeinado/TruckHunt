import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Header from './HeaderLimited.jsx';
import AuthModal from '../containers/AuthModal.jsx';


const AuthenticationPortal = () => {
  return (
    <div>
      <Header />
      <AuthModal className="authModal" />
    </div>
  );
};

export default AuthenticationPortal;
