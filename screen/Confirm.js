import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
}  from 'react-native';

const util = require('util');
export default class Confirm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
        Based on your dream amount, target date, and your investment strategy, your monthly investment to reach your dream wil be:
        </Text>
        <Text style={styles.Label}>IDR200,000.00
        </Text>
        <View style={{flex:1}}>
          <TouchableOpacity
            onPress = {() => navigate("MainMenu")}>
            <Text style={{color:"#2775C0", fontSize:16, fontWeight:"bold", marginTop:100, textAlign:'center'}}>Change My Dream Information</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => navigate("Strategy")}>
            <Text style={{color:"#2775C0", fontSize:16, fontWeight:"bold", marginTop:20, marginBottom:50, textAlign:'center'}}>Change My Investment Strategy</Text>
          </TouchableOpacity>
            <Button style={{backgroundColor:"#2775C0"}}
              onPress = {() => navigate("ConfirmForm")}
              title="Continue"
              color= "#086BB3"
              height={200}
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
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight:30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    color: '#58595B'
  },
  Label: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#58595B',
    marginTop: 100,
    fontSize:24,
    fontWeight:'bold'
  }
});
