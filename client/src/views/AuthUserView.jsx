import React from "react";
import AuthNavbar from '../components/AuthNavbar';


const AuthUserView = () => {
  return (
    <div>
      <AuthNavbar />
      <h1>Welcome, User!</h1>
      <p>This is the dashboard for regular users.</p>
    </div>
  );
};

export default AuthUserView;
