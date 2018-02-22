import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
}  from 'react-native';

const util = require('util');
export default class Home extends Component {
  state = {answer: ''}
   updateAnswer = (answer) => {
      this.setState({ answer: answer })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{flex:1, backgroundColor:"black"}}>
          </View>
          <View style={{flex:4, backgroundColor:"white", padding: 30}}>
            <Text>Hi Nick,</Text>
            <Text>Welcome to Xdana. Start by creating your ﬁrst investment.</Text>
            <View style={{width:100, borderRadius: 5}}>
              <Button
              title= "Start Investing"
              color="#086BB3"
              onPress = {() => navigate("Home")} >
              </Button>
            </View>
            <Text style={{textDecorationLine:"underline"}} onPress = {() => navigate("Login")} >Learn more</Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor:"grey"}}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white'
  }
});
