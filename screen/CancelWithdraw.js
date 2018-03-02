import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ViewPagerAndroid
}  from 'react-native';
const util = require('util');
export default class CancelWithdraw extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
  <View style={{flex:1}}>

    <View style={styles.Container}>
      <Text style={{fontSize: 36, color: "#3393D0", fontWeight:"bold"}}>Cancel & Withdraw</Text>
      <Text style={{fontSize: 16, color: "#58595B", marginLeft:20, marginRight:20, textAlign:"center"}}>
      Are you sure you want to cancel your dream and withdraw all your investment of Rp 145.000.000,00 that you have been investing in the past 17 month?</Text>
    </View>
    <View style={{flexDirection: 'row', backgroundColor: "white", paddingBottom: 30}}>
    <View style={{flex:1}}>
      <TouchableOpacity
      style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginBottom:30, marginLeft:250, backgroundColor:"#3393D0"}}
        onPress = {() => navigate("CancelWithdrawForm")}>
        <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})