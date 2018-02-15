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

const Navigation = StackNavigator({
  Intro: {
    screen: Intro,
    header:null
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
    screen: SignUp_Password
  },
  Login: {
    screen: Login
  }
});
export default Navigation;
