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
export default class Request extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
      <View style={styles.Container}>
        <Text style={{fontSize: 36, color: "#3393D0", fontWeight:"bold"}}>Request in Progress</Text>
        <Text style={{fontSize: 16, color: "#58595B", marginLeft:20, marginRight:20, textAlign:"center"}}>
        Your dream has been cancelled and we are currently in process of returning your investment to your bank account.</Text>
      </View>
      <View style={{flexDirection: 'row', backgroundColor: "white", paddingBottom: 30}}>
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginBottom:30, marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("TopUp_Amount")}>
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
