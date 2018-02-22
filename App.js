import React, { Component } from 'react';
import { Text, View}  from 'react-native';

import { StackNavigator } from 'react-navigation';
import Intro from './screen/Intro';
import Splash from './screen/Splash';
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
import AddInfo from './screen/AddInfo';
import ConfirmData from './screen/ConfirmData';
import ReviewSelfie from './screen/ReviewSelfie';
import Step3 from './screen/Step3';
import Question1 from './screen/Question1';
import Question2 from './screen/Question2';
import Question3 from './screen/Question3';
import Question4 from './screen/Question4';
import Question5 from './screen/Question5';
import Statement from './screen/Statement';
import RiskResult from './screen/RiskResult';
import Strategy from './screen/Strategy';
import Success from './screen/Success';
import Home from './screen/Home';
import Step2 from './screen/Step2';

const Navigation = StackNavigator({
  Splash: {
    screen: Intro,
    navigationOptions:
    {
      header:null
    }
  },
  Intro: {
    screen: Intro,
    navigationOptions:
    {
      header:null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions:
    {
      title:"Register"
    }
  },
  SignUp_Email: {
    screen: SignUp_Email,
    navigationOptions:
    {
      title:"Register"
    }
  },
  SignUp_Phone: {
    screen: SignUp_Phone,
    navigationOptions:
    {
      title:"Register"
    }
  },
  SignUp_Verify: {
    screen: SignUp_Verify,
    navigationOptions:
    {
      title:"Register"
    }
  },
  SignUp_Password: {
    screen: SignUp_Password,
    navigationOptions:
    {
      title:"Password"
    }
  },
  Login: {
    screen: Login,
    navigationOptions:
    {
      title:"Login"
    }
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  Step1: {
    screen: Step1
  },
  Step2: {
    screen: Step2
  },
  ReviewID: {
    screen: ReviewID,
    navigationOptions:
    {
      title:"Register"
    }
  },
  YourInformation: {
    screen: YourInformation,
    navigationOptions:
    {
      title:"Register"
    }
  },
  YourAddress: {
    screen: YourAddress
  },
  YourMailingAddress: {
    screen: YourMailingAddress,
    navigationOptions:
    {
      title:"Register"
    }
  },
  AddInfo: {
    screen: AddInfo,
    navigationOptions:
    {
      title:"Register"
    }
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
      title:"Register"
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
    screen: Question1,
    navigationOptions:
    {
      title:"Register"
    }
  },
  Question2: {
    screen: Question2,
    navigationOptions:
    {
      title:"Register"
    }
  },
  Question3: {
    screen: Question3,
    navigationOptions:
    {
      title:"Register"
    }
  },
  Question4: {
    screen: Question4,
    navigationOptions:
    {
      title:"Register"
    }
  },
  Question5: {
    screen: Question5,
    navigationOptions:
    {
      title:"Register"
    }
  },
  Statement: {
    screen: Statement,
    navigationOptions:
    {
      title:"Statement"
    }
  },
  RiskResult: {
    screen: RiskResult,
    navigationOptions:
    {
      title:"Investment Strategy",
      headerStyle: {
        backgroundColor: '#3393D0',
        shadowColor:'transparent'
      },
      headerTitleStyle: {color:'white'}
    }
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
  },
  Home: {
    screen: Home,
    navigationOptions:
    {
      header:null
    }
  }
});
export default Navigation;
