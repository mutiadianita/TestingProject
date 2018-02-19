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
          Enter mobile phone number.
        </Text>
        <Text style={styles.phone}>
        MOBILE PHONE NO.
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        keyboardType="numeric"
        />
        <Text style={styles.details}>
        We&rsquo;re gonna need your mobile phone number for veriﬁcation purpose.
        </Text>
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Next"
                color="#086BB3"
                onPress = {() => navigate("SignUp_Verify")}
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
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
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
