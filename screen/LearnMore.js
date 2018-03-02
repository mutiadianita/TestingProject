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
export default class LearnMore extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <View>
        <Text style={{textAlign:"center",color:"#FEFEFE", fontSize:32, marginTop:20, fontWeight:"bold"}}>Rp200.000,00</Text>
        <Text style={{textAlign:"center",color:"#FEFEFE", fontSize:16, marginBottom:20}}>Your monthly installment saving</Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1, elevation:3, flexDirection:"column", backgroundColor:"white", margin:10, justifyContent:"center", alignItems:"center", padding:20}}>
          <Text style={{fontSize:26, fontWeight:"bold", color:"#3393D0"}}>Xdana</Text>
          <Text style={{fontSize:40, fontWeight:"bold", color:"#3393D0", marginTop:20}}>0%</Text>
          <Text style={{fontSize:14, color:"#3393D0"}}>Free tax</Text>
          <Text style={{fontSize:12,color:"#3393D0", fontWeight:"bold", marginTop:20}}>Up to 21%</Text>
          <Text style={{fontSize:14, color:"#3393D0"}}>Interest</Text>
        </View>
        <View style={{flex:1, elevation:3, flexDirection:"column", backgroundColor:"white", margin:10, justifyContent:"center", alignItems:"center", padding:20}}>
          <Text style={{fontSize:26, fontWeight:"bold", color:"#3393D0"}}>Bank</Text>
          <Text style={{fontSize:40, fontWeight:"bold", color:"#3393D0", marginTop:20}}>10%</Text>
          <Text style={{fontSize:14, color:"#3393D0"}}>Free tax</Text>
          <Text style={{fontSize:12,color:"#3393D0", fontWeight:"bold", marginTop:20}}>2%</Text>
          <Text style={{fontSize:14, color:"#3393D0"}}>Interest</Text>
        </View>
      </View>
      <View>
        <Text style={{textAlign:"center",color:"#FEFEFE", fontSize:16, marginTop:20}}>By the end of the year, you will save</Text>
        <Text style={{textAlign:"center",color:"#FEFEFE", fontSize:28, marginBottom:20}}>Rp1.000.000,00</Text>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: '#3393D0',
    flex: 1,
    flexDirection:'column',
    padding:20
  },
  ContentBox:{
    height:80,
    width: 320,
    elevation:3,
    marginBottom:10,
    backgroundColor: "white",
    flexDirection:"row",
    borderRadius:3
  }
})
