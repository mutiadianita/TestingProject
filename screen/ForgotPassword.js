import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet
}  from 'react-native';

export default class SignUp_Phone extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Forgot password.
        </Text>
        <Text style={styles.phone}>
        EMAIL
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        />
        <Text style={styles.details}>
        Enter your registered email address to get reset password link.
        </Text>
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Next"
                color="#3498db"
                onPress = {() => navigate("-")}
                >
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 30,
    marginRight:30,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 30,
    color: 'black'
  },
  phone: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
  details: {
    textAlign: 'left',
    color: 'grey',
    marginTop: 5,
    marginLeft: 5,
  },
});
