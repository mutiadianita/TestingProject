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
export default class ChangeBankAccount extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <Image source={require('./asset/ic_close_blue.png')} style={{width: 30, height: 30}}/>
      <Text style={{fontSize:24, fontWeight:"bold",textAlign:"left", color:"#58595B", marginTop:20, width:150}}>Change Bank Account</Text>
      <Text style={{fontSize:16, textAlign:"left", color:"#333333", marginTop:150}}>We will contact you if you want to change your email address.</Text>
      <TouchableOpacity onPress = {() => navigate("MyBank")}>
      <View style={{height:50, width:250, marginTop:30, backgroundColor:"#3393D0", borderRadius:2, elevation:2, justifyContent:"center", alignItems:"center"}}>
      <Text style={{textAlign:"center", fontSize:18, color:"white"}}>OK</Text>
      </View>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    flexDirection:'column',
    paddingTop: 100,
    paddingBottom:100,
    paddingLeft:50,
    paddingRight:50
  }
})
