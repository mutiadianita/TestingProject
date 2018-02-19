import React, { Component } from 'react';
import { Text, View}  from 'react-native';

import { StackNavigator } from 'react-navigation';
import Intro from './screen/Intro';
import SignUp from './screen/SignUp';
import SignUp_Email from './screen/SignUp-Email';
import SignUp_Phone from './screen/SignUp-Phone';
import SignUp_Verify from './screen/SignUp-Verify';
import SignUp_Password from './screen/SignUp-Password';
import Login from './screen/Login';
import ForgotPassword from './screen/ForgotPassword';
import Step1 from './screen/Step1';
import ReviewID from './screen/ReviewID';
import YourInformation from './screen/YourInformation';
import YourAddress from './screen/YourAddress';
import YourMailingAddress from './screen/YourMailingAddress';
import ConfirmData from './screen/ConfirmData';
import ReviewSelfie from './screen/ReviewSelfie';
import Step3 from './screen/Step3';
import Question1 from './screen/Question1';
import Question2 from './screen/Question2';
import Question3 from './screen/Question3';
import Strategy from './screen/Strategy';
import Success from './screen/Success';

const Navigation = StackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions:
    {
      header:null
    }
  },
  SignUp: {
    screen: SignUp
  },
  SignUp_Email: {
    screen: SignUp_Email
  },
  SignUp_Phone: {
    screen: SignUp_Phone
  },
  SignUp_Verify: {
    screen: SignUp_Verify
  },
  SignUp_Password: {
    screen: SignUp_Password,
    navigationOptions:
    {
      header:null
    }
  },
  Login: {
    screen: Login
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  Step1: {
    screen: Step1,
    navigationOptions:
    {
      header:null
    }
  },
  ReviewID: {
    screen: ReviewID
  },
  YourInformation: {
    screen: YourInformation
  },
  YourAddress: {
    screen: YourAddress
  },
  YourMailingAddress: {
    screen: YourMailingAddress
  },
  ConfirmData: {
    screen: ConfirmData,
    navigationOptions:
    {
      header:null
    }
  },
  ReviewSelfie: {
    screen: ReviewSelfie,
    navigationOptions:
    {
      header:null
    }
  },
  Step3: {
    screen: Step3,
    navigationOptions:
    {
      header:null
    }
  },
  Question1: {
    screen: Question1
  },
  Question2: {
    screen: Question2
  },
  Question3: {
    screen: Question3
  },
  Strategy: {
    screen: Strategy
  },
  Success: {
    screen: Success,
    navigationOptions:
    {
      header:null
    }
  }
});
export default Navigation;
