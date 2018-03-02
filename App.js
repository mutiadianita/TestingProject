import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity}  from 'react-native';

import { StackNavigator } from 'react-navigation';
//00
import Intro from './screen/Intro';
//01
import SignUp_Email from './screen/SignUp-Email';
import SignUp_Phone from './screen/SignUp-Phone';
import SignUp_Verify from './screen/SignUp-Verify';
import SignUp_Password from './screen/SignUp-Password';
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
//02
import Login from './screen/Login';
//03
import Home from './screen/Home';
import MainMenu from './screen/MainMenu';
import Step2 from './screen/Step2';
import Option1 from './screen/Option1';
import Option2 from './screen/Option2';
import Option3 from './screen/Option3';
import GoalAmount from './screen/GoalAmount';
import Confirm from './screen/Confirm';
import ConfirmForm from './screen/ConfirmForm';
import LearnMore from './screen/LearnMore';
import Bank from './screen/Bank';
import HowToPay from './screen/HowToPay';
import ChooseBank from './screen/ChooseBank';
import BankAccount from './screen/BankAccount';
import Done from './screen/Done';
//04
import HomeStatus from './screen/HomeStatus';
//05
import GoalAhead from './screen/GoalAhead';
import GoalComplete from './screen/GoalComplete';
import DeleteDream from './screen/DeleteDream';
//06
import CancelWithdraw from './screen/CancelWithdraw';
import CancelWithdrawForm from './screen/CancelWithdrawForm';
import Request from './screen/Request';
//07
import TopUp_Amount from './screen/TopUp_Amount';
import TopUp_Payment from './screen/TopUp_Payment';
import TopUp_Process from './screen/TopUp_Process';
import TopUp_Done from './screen/TopUp_Done';
//08
import EditProfile from './screen/EditProfile';
import ChangeEmail from './screen/ChangeEmail';
import ChangeBankAccount from './screen/ChangeBankAccount';
import ChangePassword from './screen/ChangePassword';
import MyBank from './screen/MyBank';
import ChangePasswordForm from './screen/ChangePasswordForm';
import About from './screen/About';
import FAQ from './screen/FAQ';
//09
import Healthcare from './screen/Healthcare';
import Notification from './screen/Notification';

const Navigation = StackNavigator({
//00
  Intro: {
    screen: Intro,
    navigationOptions:
    {
      header:null
    }
  },
//01
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
      title:"Investment Strategy",
      headerStyle: {
        backgroundColor: '#3393D0',
        shadowColor:'transparent',
        elevation:0
      },
      headerTitleStyle: {color:'white'}
    }
  },
  Success: {
    screen: Success,
    navigationOptions:
    {
      header:null
    }
  },
//02
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
//03
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
        backgroundColor:"#3393D0"
      },
      title:"Retirement",
      headerTitleStyle: {color:'white'},
      headerRight: (
        <Image source={require('./screen/asset/ic_retirement.png')} style={{width: 40, height: 40, marginRight:20}}/>
        ),
      headerLeft: (
          <Image source={require('./screen/asset/ic_close_white.png')} style={{width: 20, height: 20, marginLeft:20}}/>
      )
    }
  },
  Option2: {
    screen: Option2,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        height:100,
        backgroundColor:"#00A99E"
      },
      title:"Life Improvement",
      headerTitleStyle: {color:'white'},
      headerRight: (
        <Image source={require('./screen/asset/ic_retirement.png')} style={{width: 40, height: 40, marginRight:20}}/>
        ),
      headerLeft: (
          <Image source={require('./screen/asset/ic_close_white.png')} style={{width: 20, height: 20, marginLeft:20}}/>
      )
    }
  },
  Option3: {
    screen: Option3,
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
  },
  ConfirmForm: {
    screen: ConfirmForm,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Confirm your dream"
    }
  },
  LearnMore: {
    screen: LearnMore,
    navigationOptions:
    {
      headerStyle: {
        backgroundColor: '#3393D0',
        elevation:0
      },
      headerLeft: (
          <Image source={require('./screen/asset/ic_close_white.png')} style={{width: 20, height: 20, marginLeft:20}}/>
      ),
      headerTitleStyle: {color:'white'}
    }
  },
  Bank: {
    screen: Bank,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
    }
  },
  HowToPay: {
    screen: HowToPay,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
    }
  },
  ChooseBank: {
    screen: ChooseBank,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Bank Account"
    }
  },
  BankAccount: {
    screen: BankAccount,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Bank Account"
    }
  },
  Done: {
    screen: Done,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        backgroundColor: '#3393D0'
      }
    }
  },
//04
  HomeStatus: {
    screen: HomeStatus,
    navigationOptions:
    {
      header:null
    }
  },
//05
  GoalAhead: {
    screen: GoalAhead,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        backgroundColor: '#3393D0'
      },
      title:"Goal Detail",
      headerTitleStyle: {color:'white'}
    }
  },
  GoalComplete: {
    screen: GoalComplete,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        backgroundColor: '#3393D0'
      }
    }
  },
  DeleteDream: {
    screen: DeleteDream,
    navigationOptions:
    {
      header:null
    }
  },
//06
  CancelWithdraw: {
    screen: CancelWithdraw,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
    }
  },
  CancelWithdrawForm: {
    screen: CancelWithdrawForm,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Cancel & Withdraw"
    }
  },
  Request: {
    screen: Request,
    navigationOptions:
    {
      header:null
    }
  },
//07
  TopUp_Amount: {
    screen: TopUp_Amount,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Top Up"
    }
  },
  TopUp_Payment: {
    screen: TopUp_Payment,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Top Up"
    }
  },
  TopUp_Process: {
    screen: TopUp_Process,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Top Up"
    }
  },
  TopUp_Done: {
    screen: TopUp_Done,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        backgroundColor: '#3393D0'
      }
    }
  },
//08
  EditProfile: {
    screen: EditProfile,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      }
    }
  },
  ChangeEmail: {
    screen: ChangeEmail,
    navigationOptions:
    {
      header:null
    }
  },
  ChangeBankAccount: {
    screen: ChangeBankAccount,
    navigationOptions:
    {
      header:null
    }
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions:
    {
      header:null
    }
  },
  MyBank: {
    screen: MyBank,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Bank Account"
    }
  },
  About: {
    screen: About,
    navigationOptions:
    {
      headerStyle: {
        elevation:0,
        backgroundColor: '#3393D0'
      },
      title:"About Us",
      headerTitleStyle: {color:'white'}
    }
  },
  ChangePasswordForm: {
    screen: ChangePasswordForm,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Change Password"
    }
  },
  FAQ: {
    screen: FAQ,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"FAQ"
    }
  },
//09
  Healthcare: {
    screen: Healthcare,
    navigationOptions:
    {
        header:null
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions:
    {
      headerStyle: {
        elevation:0
      },
      title:"Notification"
    }
  }
});
export default Navigation;
