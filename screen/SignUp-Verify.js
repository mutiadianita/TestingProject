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
              size={50}
              space={10}
              codeLength={4}
              keyboardType='numeric'
              onFulfill={() => navigate('SignUp_Password')}
              containerStyle={{ marginTop: 30, marginBottom:30 }}
              codeInputStyle={{ borderWidth: 1.5, fontSize: 32 }}
            />
          </View>
          <View>
            <Text style={styles.Details}>
              Resend code in 00:25
            </Text>
          </View>
          <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:30}}>
            <TouchableOpacity
            style={styles.RoundButton}
              onPress = {() => navigate('SignUp_Password')}>
              <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
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
    padding: 25,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 30,
    marginLeft: 5,
    fontFamily: 'Roboto-Light'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginTop: 20,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
