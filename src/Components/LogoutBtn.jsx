import React from 'react';
import { GoogleLogout } from 'react-google-login';

const LogoutBtn = ({ onLogout }) => {
  return (
    <GoogleLogout
      clientId="12032474523-j8qabilh90gi615h4luvhc608aq4ar8n.apps.googleusercontent.com"
      buttonText="Disconnect from Google"
      onLogoutSuccess={onLogout}
    ></GoogleLogout>
  );
};

export default LogoutBtn;
