import React from "react";

import { GoogleLogin } from "react-google-login";
import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

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
      clientId='12032474523-j8qabilh90gi615h4luvhc608aq4ar8n.apps.googleusercontent.com'
      buttonText='Connect to Google'
      onSuccess={onLogin}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      scope='profile email https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/forms.responses.readonly'
      render={(renderProps) => (
        // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        <Flex
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          cursor='pointer'
          alignItems='center'
          justifyContent='center'
          maxW='sm'
          p='3'
          borderWidth='2px'
          rounded='md'
          mt='4'
        >
          <Icon as={FcGoogle} mr={4} w={10} h={10} />
          <Heading size='md'>Connect to Google</Heading>
        </Flex>
      )}
    />
  );
};

export default GoogleLoginBtn;
// scope="https://www.googleapis.com/auth/forms"
// scope='https://www.googleapis.com/auth/forms.body.readonly'
// scope="profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"

// Get list of responses
// https://forms.googleapis.com/v1beta/forms/{formId}/responses
