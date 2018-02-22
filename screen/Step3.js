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
export default class Step3 extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
  <View style={{flex:1}}>

    <View style={styles.container}>
      <Text style={{fontSize: 36, color: "#3393D0", fontWeight:"bold"}}>Last step</Text>
      <Text style={{fontSize: 16, color: "#58595B", marginLeft:20, marginRight:20, textAlign:"center"}}>Last, we also need to ask you a few questions to best guide you in reaching your dream.</Text>
    </View>
    <View style={{flexDirection: 'row', backgroundColor: "white", paddingBottom: 30}}>
    <View style={{flex:1}}>
      <TouchableOpacity
      style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginBottom:30, marginLeft:250, backgroundColor:"#3393D0"}}
        onPress = {() => navigate("Question1")}>
        <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CircleSelected:{
    paddingTop:5,
    marginLeft: 40,
    marginRight: 40,
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#086BB3'
  },
  Circle:{
    paddingTop:5,
    marginLeft: 40,
    marginRight: 40,
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#EEEEEE'
  }
})
