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
export default class DeleteDream extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <Image source={require('./asset/ic_close_blue.png')} style={{width: 30, height: 30}}/>
      <Text style={{fontSize:24, fontWeight:"bold",textAlign:"left", color:"#58595B", marginTop:20}}>Delete Completed Dream</Text>
      <Text style={{fontSize:16, textAlign:"left", color:"#333333", marginTop:150}}>Are you sure you want to delete the completed dream? This action cannot be undone.</Text>
      <View style={{height:50, width:250, marginTop:30, backgroundColor:"#3393D0", borderRadius:2, elevation:2, justifyContent:"center", alignItems:"center"}}>
      <Text style={{textAlign:"center", fontSize:18, color:"white"}}>Yes, Delete the dream</Text>
      </View>
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
