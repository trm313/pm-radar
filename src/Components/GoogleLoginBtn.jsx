import React from 'react';

import { GoogleLogin } from 'react-google-login';

/*
Resources:
https://github.com/anthonyjgrove/react-google-login
https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
*/

const responseGoogle = (response) => {
  console.log(response);
};

const GoogleLoginBtn = ({ onLogin }) => {
  return (
    <GoogleLogin
      clientId="12032474523-j8qabilh90gi615h4luvhc608aq4ar8n.apps.googleusercontent.com"
      buttonText="Connect to Google"
      onSuccess={onLogin}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      scope="profile email https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/forms.responses.readonly"
    />
  );
};

export default GoogleLoginBtn;
// scope="https://www.googleapis.com/auth/forms"
// scope='https://www.googleapis.com/auth/forms.body.readonly'
// scope="profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"

// Get list of responses
// https://forms.googleapis.com/v1beta/forms/{formId}/responses
