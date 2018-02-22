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
    <View style={{flex:1, backgroundColor:"#3393D0"}}>
      <ViewPagerAndroid style={styles.Pager} initialPage={0}>
        <View style={styles.Pager}>
          <Text style={{fontSize: 36, fontWeight: "bold", color: "white"}}>Welcome to XDANA </Text>
          <Image source={require('./asset/ic_retirement.png')} style={{marginTop:120, width: 50, height: 50}}/>
          <Text style={{fontSize: 22, color: "white", marginTop: 20, fontWeight:"bold"}}>Retirement </Text>
          <Text style={{fontSize: 16, color: "white", marginTop: 20}}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
        </View>
        <View style={styles.Pager}>
        <Text style={{fontSize: 36, fontWeight: "bold", color: "white"}}>Welcome to XDANA </Text>
        <Image source={require('./asset/Ic_asset.png')} style={{marginTop:120, width: 50, height: 50}}/>
        <Text style={{fontSize: 22, color: "white", marginTop: 20, fontWeight:"bold"}}>Life Improvement</Text>
        <Text style={{fontSize: 16, color: "white", marginTop: 20}}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
        </View>
        <View style={styles.Pager}>
        <Text style={{fontSize: 36, fontWeight: "bold", color: "white"}}>Welcome to XDANA </Text>
        <Image source={require('./asset/Ic_asset.png')} style={{marginTop:120, width: 50, height: 50}}/>
        <Text style={{fontSize: 22, color: "white", marginTop: 20, fontWeight:"bold"}}>Asset investment </Text>
        <Text style={{fontSize: 16, color: "white", marginTop: 20}}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
        </View>
      </ViewPagerAndroid>
      <View style={{width: 320, padding:10, marginLeft:20}}>
          <Button
              title= "Login"
              color= "#086BB3"
              height={200}
              onPress = {() => navigate("Question1")}
              >
          </Button>
      </View>
      <View style={{width: 320, padding:10, marginLeft:20, marginBottom: 30}}>
          <Button
              title= "Register"
              color= "#086BB3"
              onPress = {() => navigate("SignUp_Email")}
              >
          </Button>
      </View>
    </View>

    );
  }
}
const styles = StyleSheet.create({
  Pager:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:30
  }
})
