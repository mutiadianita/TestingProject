import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ViewPagerAndroid,
  CheckBox
}  from 'react-native';
const util = require('util');
export default class Statement extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
  <View style={{flex:1}}>

    <View style={styles.Container}>
      <Text style={{fontSize: 16, color: "#58595B"}}>1. I am fully aware and understand about my investment risk profile</Text>
      <Text style={{fontSize: 16, color: "#58595B", textAlign:"left", marginTop:20}}>2. The purchase of mutual fund i do solely is my own decision and desire without
           any coercion from other parties</Text>
           <View style={{ flexDirection: 'row', height: 40, width:270, marginTop:30}}>
             <CheckBox title='Click Here'/>
             <Text style={styles.Check}>I Agree</Text>
           </View>
    </View>

    <View style={{flexDirection: 'row', backgroundColor: "white", paddingBottom: 30}}>
    <View style={{flex:1}}>
      <TouchableOpacity
      style={{width: 60, height: 60, borderRadius:30, marginBottom:60, marginLeft:280, backgroundColor:"#3393D0"}}
        onPress = {() => navigate("RiskResult")}>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:40
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 5,
    marginTop:7,
    fontSize:14,
    width:230
  }
})
