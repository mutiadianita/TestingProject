import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image
}  from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
const util = require('util');
export default class SignUp_Verify extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
          Please enter the 4 digits code that has been sent to your phone.
        </Text>
        <View style={{flex:1, flexDirection: 'column'}}>
          <View>
            <CodeInput
              ref='codeInputRef'
              activeColor='#3393D0'
              inactiveColor='rgba(88,89,91,0.40)'
              autoFocus={true}
              ignoreCase={true}
              inputPosition='left'
              size={Size.BUTTON_HEIGHT}
              space={Size.PADDING_SMALL}
              codeLength={4}
              keyboardType='numeric'
              onFulfill={() => navigate('SignUp_Password')}
              containerStyle={{ marginTop: Size.PADDING, marginBottom:Size.PADDING }}
              codeInputStyle={{ borderWidth: 1.5, fontSize: Size.TEXT_TITLE}}
            />
          </View>
          <View>
            <Text style={styles.Details}>
              Resend code in 00:25
            </Text>
          </View>
          <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:Size.PADDING_SMALL}}>
            <TouchableOpacity
            style={styles.RoundButton}
              onPress = {() => navigate('SignUp_Password')}>
              <Image source={{uri:'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: Size.PADDING,
    paddingTop: Size.PADDING_SMALL,
    paddingRight: Size.PADDING,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING,
    fontFamily: 'Roboto-Light'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    marginTop: Size.PADDING_MID,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
