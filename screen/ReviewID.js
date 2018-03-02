import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class ReviewID extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>Please confirm your card and the ID Card number below.</Text>
        <ScrollView>
        <Image source={require('./images/idcard.png')} />
        <Text style={styles.Label}>Your ID Card Number</Text>
        <TextInput
        style={{width: 300, fontSize: 20, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        secureTextEntry={true}
        />
        <Text style={styles.Details}>
        * You can correct your ID Card number
        </Text>
        </ScrollView>
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30,marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("YourInformation")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
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
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 30,
    marginLeft: 5,
    fontSize: 14
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 5,
    fontSize:10
  }
});
