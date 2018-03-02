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
export default class MainMenu extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate("Option1")} >
        <View style={{flexDirection:"row", height:110, width: 320, backgroundColor: "#3393D0", padding: 20}}>
          <Text style={styles.ContentTitle}>Retirement</Text>
          <Image source={require('./asset/ic_retirement.png')} style={{flex:1,width: 40, height: 40}}/>
        </View>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate("Option2")} >
        <View style={{flexDirection:"row",height:110, width: 320, backgroundColor: "#00A99E", padding: 20}}>
          <Text style={styles.ContentTitle}>Life Improvement</Text>
          <Image source={require('./asset/ic_retirement.png')} style={{flex:1,width: 40, height: 40}}/>
        </View>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate("Option3")} >
        <View style={{flexDirection:"row",height:110, width: 320, backgroundColor: "#F5841F", padding: 20}}>
          <Text style={styles.ContentTitle}>Asset Improvement</Text>
          <Image source={require('./asset/ic_asset.png')} style={{flex:1,marginTop:20,width: 40, height: 40}}/>
        </View>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
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
    padding:20
  },
  ContentBox:{
    height:160,
    width: 320,
    elevation:3,
    marginBottom:20,
    backgroundColor: "white"
  },
  ContentText: {
    fontSize:14,
    color:"#58595B",
    margin:5,
    marginLeft:20
  },
  ContentTitle: {
    flex:4,
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  }
})
