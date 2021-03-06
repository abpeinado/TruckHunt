import React from 'react';
import Header from './HeaderLimited.jsx';
import AuthModal from '../containers/AuthModal.jsx';

const AuthenticationPortal = () => (
  <div>
    <Header />
    <AuthModal className="authModal" />
  </div>
);

export default AuthenticationPortal;
