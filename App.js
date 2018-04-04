import React, { Component } from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
//00
import Intro from "./screen/Intro";
//01
import SignUp_Email from "./screen/SignUp-Email";
import SignUp_Phone from "./screen/SignUp-Phone";
import SignUp_Verify from "./screen/SignUp-Verify";
import SignUp_Password from "./screen/SignUp-Password";
import Step1 from "./screen/Step1";
import ReviewID from "./screen/ReviewID";
import YourInformation from "./screen/YourInformation";
import YourMailingAddress from "./screen/YourMailingAddress";
import AddInfo from "./screen/AddInfo";
import ReviewSelfie from "./screen/ReviewSelfie";
import Step3 from "./screen/Step3";
import Question1 from "./screen/Question1";
import Question2 from "./screen/Question2";
import Question3 from "./screen/Question3";
import Question4 from "./screen/Question4";
import Question5 from "./screen/Question5";
import Statement from "./screen/Statement";
import RiskResult from "./screen/RiskResult";
import Strategy from "./screen/Strategy";
import Success from "./screen/Success";
//02
import Login from "./screen/Login";
//03
import Home from "./screen/Home";
import MainMenu from "./screen/MainMenu";
import Step2 from "./screen/Step2";
import Option from "./screen/Option";
import GoalAmount from "./screen/GoalAmount";
import Confirm from "./screen/Confirm";
import ConfirmForm from "./screen/ConfirmForm";
import LearnMore from "./screen/LearnMore";
import Bank from "./screen/Bank";
import ChooseBank from "./screen/ChooseBank";
import BankAccount from "./screen/BankAccount";
import Done from "./screen/Done";
//04
import HomeStatus from "./screen/HomeStatus";
//05
import GoalAhead from "./screen/GoalAhead";
import GoalBehind from "./screen/GoalBehind";
import GoalComplete from "./screen/GoalComplete";
import DeleteDream from "./screen/DeleteDream";
import Transaction from "./screen/Transaction";
//06
import CancelWithdraw from "./screen/CancelWithdraw";
import CancelWithdrawForm from "./screen/CancelWithdrawForm";
import Request from "./screen/Request";
//07
import TopUp_Amount from "./screen/TopUp_Amount";
import TopUp_Payment from "./screen/TopUp_Payment";
import TopUp_Process from "./screen/TopUp_Process";
import TopUp_Done from "./screen/TopUp_Done";
//08
import Product from "./screen/Product";
import Profile from "./screen/Profile";
import EditProfile from "./screen/EditProfile";
import MyBank from "./screen/MyBank";
import ChangePasswordForm from "./screen/ChangePasswordForm";
import About from "./screen/About";
import FAQ from "./screen/FAQ";
import Feedback from "./screen/Feedback";
//09
import WhyInvest from "./screen/WhyInvest";
import Healthcare from "./screen/Healthcare";
import Notification from "./screen/Notification";

const Navigation = StackNavigator({
  //00
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },

  //  Camera: {
  //    screen: Camera,
  //    navigationOptions:
  //    {
  //      header:null
  //    }
  //  },
  //01
  SignUp_Email: {
    screen: SignUp_Email,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      portraitOnlyMode: true,
      orientation: "portrait",
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  SignUp_Phone: {
    screen: SignUp_Phone,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  SignUp_Verify: {
    screen: SignUp_Verify,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  SignUp_Password: {
    screen: SignUp_Password,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Password",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Step1: {
    screen: Step1,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      }
    }
  },
  Step2: {
    screen: Step2,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      }
    }
  },
  ReviewID: {
    screen: ReviewID,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  YourInformation: {
    screen: YourInformation,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  YourMailingAddress: {
    screen: YourMailingAddress,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  AddInfo: {
    screen: AddInfo,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  ReviewSelfie: {
    screen: ReviewSelfie,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Step3: {
    screen: Step3,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      }
    }
  },
  Question1: {
    screen: Question1,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      },
      headerRight: (
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: Size.TEXT_LABELS,
            marginRight: Size.PADDING_MID
          }}
        >
          {" "}
          1/5{" "}
        </Text>
      )
    }
  },
  Question2: {
    screen: Question2,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      },
      headerRight: (
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: Size.TEXT_LABELS,
            marginRight: Size.PADDING_MID
          }}
        >
          {" "}
          2/5{" "}
        </Text>
      )
    }
  },
  Question3: {
    screen: Question3,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      },
      headerRight: (
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: Size.TEXT_LABELS,
            marginRight: Size.PADDING_MID
          }}
        >
          {" "}
          3/5{" "}
        </Text>
      )
    }
  },
  Question4: {
    screen: Question4,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      },
      headerRight: (
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: Size.TEXT_LABELS,
            marginRight: Size.PADDING_MID
          }}
        >
          {" "}
          4/5{" "}
        </Text>
      )
    }
  },
  Question5: {
    screen: Question5,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Register",
      headerTitleStyle: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      },
      headerRight: (
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: Size.TEXT_LABELS,
            marginRight: Size.PADDING_MID
          }}
        >
          {" "}
          5/5{" "}
        </Text>
      )
    }
  },
  Statement: {
    screen: Statement,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Statement",
      headerTitleStyle: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  RiskResult: {
    screen: RiskResult,
    navigationOptions: {
      title: "Investment Strategy",
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "normal",
        color: "white",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Strategy: {
    screen: Strategy,
    navigationOptions: {
      title: "Investment Strategy",
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "normal",
        color: "white",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Success: {
    screen: Success,
    navigationOptions: {
      header: null
    }
  },
  //02
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Login",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  //03
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Choose Your Dream Category",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Option: {
    screen: Option,
    navigationOptions: {
      header: null
    }
  },
  GoalAmount: {
    screen: GoalAmount,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Dream Target",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Confirm: {
    screen: Confirm,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Your Monthly Investment",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  ConfirmForm: {
    screen: ConfirmForm,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Confirm your dream",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  LearnMore: {
    screen: LearnMore,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "normal",
        color: "white",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Bank: {
    screen: Bank,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      }
    }
  },
  ChooseBank: {
    screen: ChooseBank,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Bank Account",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  BankAccount: {
    screen: BankAccount,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Bank Account",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Done: {
    screen: Done,
    navigationOptions: {
      header: null
    }
  },
  //04
  HomeStatus: {
    screen: HomeStatus,
    navigationOptions: {
      header: null
    }
  },
  //05
  GoalAhead: {
    screen: GoalAhead,
    navigationOptions: {
      header: null
    }
  },
  GoalBehind: {
    screen: GoalBehind,
    navigationOptions: {
      header: null
    }
  },
  GoalComplete: {
    screen: GoalComplete,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "white"
    }
  },
  DeleteDream: {
    screen: DeleteDream,
    navigationOptions: {
      header: null
    }
  },
  Transaction: {
    screen: Transaction,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Transaction"
    }
  },
  //06
  CancelWithdraw: {
    screen: CancelWithdraw,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      }
    }
  },
  CancelWithdrawForm: {
    screen: CancelWithdrawForm,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Cancel & Withdraw",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Request: {
    screen: Request,
    navigationOptions: {
      header: null
    }
  },
  //07
  TopUp_Amount: {
    screen: TopUp_Amount,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Top Up",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  TopUp_Payment: {
    screen: TopUp_Payment,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Top Up",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  TopUp_Process: {
    screen: TopUp_Process,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Top Up",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  TopUp_Done: {
    screen: TopUp_Done,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "white"
    }
  },
  //08
  Product: {
    screen: Product,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "normal",
        color: "white",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      }
    }
  },
  MyBank: {
    screen: MyBank,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Bank Account",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        zIndex: 100,
        elevation: 0,
        top: 0,
        left: 0,
        right: 0
      },
      title: "About Us",
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "normal",
        color: "white",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  ChangePasswordForm: {
    screen: ChangePasswordForm,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Change Password",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  FAQ: {
    screen: FAQ,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "FAQ",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Live Chat",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  },
  //09
  Healthcare: {
    screen: Healthcare,
    navigationOptions: {
      header: null
    }
  },
  WhyInvest: {
    screen: WhyInvest,
    navigationOptions: {
      header: null
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      title: "Notification",
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: Size.TEXT_LABELL
      }
    }
  }
});
export default Navigation;
