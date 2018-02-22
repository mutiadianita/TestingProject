import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet
}  from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
const util = require('util');
export default class SignUp_Verify extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Please enter the 4 digits code that has been sent to your phone.
        </Text>
        <View style={{flex:1, flexDirection: 'column'}}>
          <View>
            <CodeInput
              ref="codeInputRef"
              secureTextEntry
              activeColor="#3393D0"
              inactiveColor="#3393D0"
              autoFocus={true}
              ignoreCase={true}
              inputPosition='left'
              size={50}
              space={10}
              codeLength={4}
              keyboardType="numeric"
              onFulfill={() => navigate("SignUp_Password")}
              containerStyle={{ marginTop: 30, marginBottom:30 }}
              codeInputStyle={{ borderWidth: 1.5, fontSize: 32 }}
            />
          </View>
          <View>
            <Text style={styles.details}>
              Resend code in 00:25
            </Text>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity
            style={{width: 60, height: 60, borderRadius:30, marginTop: 70, marginLeft:250, backgroundColor:"#3393D0"}}
              onPress = {() => navigate("SignUp_Password")}>
              <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    color: '#58595B'
  },
  details: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 30,
    marginLeft: 5
  },
});
