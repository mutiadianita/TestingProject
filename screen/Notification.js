import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  CheckBox,
  TouchableOpacity,
  Picker
}  from 'react-native';

const util = require('util');
export default class Notification extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
            <View style={{width:10, height:10, marginTop:10, borderRadius:5, backgroundColor:"#DE6157"}}/>
          </View>
          <View style={{width:310}}>
            <View style={{flexDirection:"row"}}>
            <View style={{width: 210}}>
              <Text style={{fontSize:16, color:"#58595B", fontWeight:"bold"}}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:"flex-end", width:80, marginRight:20}}>
              <Text style={{fontSize:14, color:"color: rgba(0,0,0,0.20)", textAlign:"right"}}>2 hr ago</Text>
            </View>
            </View>
            <Text style={{fontSize:16, color:"#58595B"}}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
            <View style={{width:10, height:10, marginTop:10, borderRadius:5, backgroundColor:"#DE6157"}}/>
          </View>
          <View style={{width:310}}>
            <View style={{flexDirection:"row"}}>
            <View style={{width: 210}}>
              <Text style={{fontSize:16, color:"#58595B", fontWeight:"bold"}}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:"flex-end", width:80, marginRight:20}}>
              <Text style={{fontSize:14, color:"color: rgba(0,0,0,0.20)", textAlign:"right"}}>2 hr ago</Text>
            </View>
            </View>
            <Text style={{fontSize:16, color:"#58595B"}}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
            <View style={{width:10, height:10, marginTop:10, borderRadius:5, backgroundColor:"#FFFFFF"}}/>
          </View>
          <View style={{width:310}}>
            <View style={{flexDirection:"row"}}>
            <View style={{width: 210}}>
              <Text style={{fontSize:16, color:"#58595B", fontWeight:"bold"}}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:"flex-end", width:80, marginRight:20}}>
              <Text style={{fontSize:14, color:"color: rgba(0,0,0,0.20)", textAlign:"right"}}>1 week ago</Text>
            </View>
            </View>
            <Text style={{fontSize:16, color:"#58595B"}}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 30,
    fontSize:12
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 30,
    fontSize:16
  },
  Check: {
    textAlign: 'left',
    color: 'rgba(88,89,91,0.60)',
    fontSize:14,
    marginLeft: 30,
    width:230,
    marginTop:20
  },
  Sublabel:{
    textAlign: 'left',
    color: 'rgba(0,0,0,0.60)',
    marginTop: 10,
    marginLeft: 30,
    fontSize:28
  },
  LabelBold:{
    textAlign: 'left',
    color: '#58595B',
    marginTop: 20,
    marginLeft: 30,
    fontSize:14
  }
});
