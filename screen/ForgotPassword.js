import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet
}  from 'react-native';

export default class ForgotPassword extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
          Forgot password.
        </Text>
        <Text style={styles.Phone}>
        EMAIL
        </Text>
        <TextInput
        style={{width: 300, color:'black'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        autoFocus={true}
        />
        <Text style={styles.Details}>
        Enter your registered email address to get reset password link.
        </Text>
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= 'Next'
                color='#086BB3'
                onPress = {() => navigate('-')}
                >
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 30,
    color: 'black'
  },
  Phone: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
  Details: {
    textAlign: 'left',
    color: 'grey',
    marginTop: 5,
    marginLeft: 5,
  },
});
