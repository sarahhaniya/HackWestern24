import React from 'react';
import UnauthNavbar from '../components/UnauthNavbar';
import Footer from '../components/GeneralFooter';
import LoginBox from '../components/LoginBox';

const LoginView = ({ setIsAuthenticated }) => {
  return (
    <div>
      <UnauthNavbar />
      <LoginBox setIsAuthenticated={setIsAuthenticated} />
      <Footer />
    </div>
  );
};

export default LoginView;
