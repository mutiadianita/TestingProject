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
  <View style={{flex:1}}>
    <View style={{flexDirection: 'row', backgroundColor: "white", paddingTop:50}}>
      <View style={styles.Circle}>
      <Text style={{justifyContent: "center", fontSize:20, textAlign:"center", color: "#086BB3"}}> 1 </Text>
      </View>
      <View style={styles.Circle}>
      <Text style={{justifyContent: "center", fontSize:20, textAlign:"center", color: "#086BB3"}}> 2 </Text>
      </View>
      <View style={styles.CircleSelected}>
      <Text style={{justifyContent: "center", fontSize:20, textAlign:"center", color: "white"}}> 3 </Text>
      </View>

    </View>
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: "#086BB3"}}> More About You </Text>
      <Text style={{fontSize: 16, color: "#086BB3", marginLeft:20, marginRight:20, textAlign:"center"}}> Please answer some questions so we can help you invest the best way for you. </Text>
    </View>
    <View style={{flexDirection: 'row', backgroundColor: "white", paddingBottom: 30}}>
      <View style={{width: 300, padding:10, marginLeft:30}}>
        <Button
            title= "OK"
            color= "#086BB3"
            onPress = {() => navigate("Question1")}
            >
        </Button>
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
