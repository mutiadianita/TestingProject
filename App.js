import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity}  from 'react-native';

import { StackNavigator } from 'react-navigation';
import Intro from './screen/Intro';
import Splash from './screen/Splash';
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
import MainMenu from './screen/MainMenu';
import Step2 from './screen/Step2';
import Option1 from './screen/Option1';
import GoalAmount from './screen/GoalAmount';
import Confirm from './screen/Confirm';

const Navigation = StackNavigator({

  Intro: {
    screen: Intro,
    navigationOptions:
    {
      header:null
    }
  },
  SignUp_Email: {
    screen: SignUp_Email,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  SignUp_Phone: {
    screen: SignUp_Phone,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  SignUp_Verify: {
    screen: SignUp_Verify,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  SignUp_Password: {
    screen: SignUp_Password,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Password"
    }
  },
  Login: {
    screen: Login,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Login"
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      }
    }
  },
  Step1: {
    screen: Step1,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      }
    }
  },
  Step2: {
    screen: Step2,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      }
    }
  },
  ReviewID: {
    screen: ReviewID,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  YourInformation: {
    screen: YourInformation,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
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
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  AddInfo: {
    screen: AddInfo,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  ReviewSelfie: {
    screen: ReviewSelfie,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
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
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  Question2: {
    screen: Question2,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  Question3: {
    screen: Question3,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  Question4: {
    screen: Question4,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  Question5: {
    screen: Question5,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Register"
    }
  },
  Statement: {
    screen: Statement,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
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
        shadowColor:'transparent',
        elevation:0
      },
      headerTitleStyle: {color:'white'}
    }
  },
  Strategy: {
    screen: Strategy,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      }
    }
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
  },
  MainMenu: {
    screen: MainMenu,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Choose Your Dream Category"
    }
  },
  Option1: {
    screen: Option1,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        height:100,
        backgroundColor:"#F5841F"
      },
      title:"Asset Improvement",
      headerTitleStyle: {color:'white'},
      headerRight: (
        <Image source={require('./screen/asset/ic_asset.png')} style={{width: 40, height: 40, marginRight:20}}/>
        ),
      headerLeft: (
          <Image source={require('./screen/asset/ic_close_white.png')} style={{width: 20, height: 20, marginLeft:20}}/>
      )
    }
  },
  GoalAmount: {
    screen: GoalAmount,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Dream Target"
    }
  },
  Confirm: {
    screen: Confirm,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Your Monthly Investment"
    }
  }
});
export default Navigation;
