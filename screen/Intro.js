import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ViewPagerAndroid
}  from 'react-native';
const util = require('util');
export default class Intro extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={{flex:1}}>
    <View style={{justifyContent: 'flex-end', height:50, backgroundColor:'white'}}>
    <View style={styles.Contact}>
    <Text onPress = {() => navigate("ForgotPassword")} style={{ fontSize:20, textAlign:"center", color: "white"}}> C </Text>
    </View>
    </View>
      <ViewPagerAndroid style={styles.Pager} initialPage={0}>
        <View style={styles.Pager}>
          <Image source={require('./images/icon.png')} />
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#086BB3"}}> XDANA </Text>
          <Text style={{fontSize: 20, color: "#086BB3"}}> Invest Now, Invest The Future </Text>
        </View>
        <View style={styles.Pager}>
          <Image source={require('./images/icon.png')} />
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#086BB3"}}> XDANA </Text>
          <Text style={{fontSize: 20, color: "#086BB3"}}> Invest Now, Invest The Future </Text>
        </View>
        <View style={styles.Pager}>
          <Image source={require('./images/icon.png')} />
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#086BB3"}}> XDANA </Text>
          <Text style={{fontSize: 20, color: "#086BB3"}}> Invest Now, Invest The Future </Text>
        </View>
      </ViewPagerAndroid>
      <View style={{flexDirection: 'row', backgroundColor: "white", paddingBottom: 30}}>
      <View style={{width: 150, padding:10, marginLeft:30}}>
          <Button
              title= "Login"
              color= "#086BB3"
              onPress = {() => navigate("Login")}
              >
          </Button>
      </View>
      <View style={{width: 150, padding:10}}>
          <Button
              title= "Sign Up"
              color= "#086BB3"
              onPress = {() => navigate("SignUp")}
              >
          </Button>
      </View>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Pager:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Contact:{
    paddingTop:5,
    width: 40,
    height: 40,
    marginLeft: 300,
    borderRadius: 40/2,
    backgroundColor: '#086BB3'
  }
})
