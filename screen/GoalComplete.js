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
export default class GoalComplete extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <View style={{flex:2, flexDirection:"column",backgroundColor:"#3393D0"}}>
        <View style={{flex:7,justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:32,fontWeight:"bold",color:"#FFFFFF"}}>Congratulation!</Text>
          <Text style={{fontSize:14,color:"#FFFFFF"}}>You have achieved your dream for:</Text>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#FFFFFF"}}>New House</Text>
          <Text style={{fontSize:14,color:"#FFFFFF"}}>Achieved </Text>
          <Text style={{fontSize:24,fontWeight:"bold",color:"#FFFFFF"}}>Rp 201.000.000,00</Text>
          <Text style={{fontSize:14,fontWeight:"bold",color:"#FFFFFF"}}>out of Rp200.000.000,00</Text>
        </View>
        <View style={{flex:1,justifyContent:"center", alignItems:"center",height:40, backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
          <Text style={{color:"white", fontSize:14}}>View detail</Text>
        </View>
      </View>

      <View style={{flex:1, backgroundColor:"white", justifyContent:"center",alignItems:"center", elevation:3}}>
        <Text style={{textAlign:"center", width:200,fontSize:14,color:"#58595B"}}>I’m done viewing this dream. Delete this dream from my list.</Text>
        <View style={{borderWidth:3, borderColor:"#3393D0", height:40,width:150, marginTop:20}}>
          <TouchableOpacity onPress = {() => navigate("DeleteDream")}>
            <Text style={{color:"#3393D0", fontSize:18, textAlign:"center", fontWeight:"200"}}> DELETE </Text>
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
    flexDirection:'column'
  }
})
