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
export default class About extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={{justifyContent:"center", alignItems:"center"}}>
          <Image source={require('./asset/ic_logo_white.png')} style={{marginBottom:20,width: 100, height: 100}}/>
        </View>
        <View style={{flexDirection:"row", marginTop:10}}>
          <Text style={styles.Details}>Version</Text>
          <Text style={styles.Details}>1.01</Text>
        </View>
        <Text style={{color:"#FFFFFF", fontSize:16, marginTop:32}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.
        </Text>
        <Text style={{color:"#FFFFFF", fontSize:16, marginTop:32}}>
        Email : cs@xdana.com
        </Text>
        <View style={{width: 280, height:1, backgroundColor:"rgba(216,216,216,0.60)", marginTop:8}}></View>
        <Text style={{color:"#FFFFFF", fontSize:16, marginTop:50}}>
        Terms & Condition
        </Text>
        <View style={{width: 280, height:1, backgroundColor:"rgba(216,216,216,0.60)", marginTop:8}}></View>
        <Text style={{color:"#FFFFFF", fontSize:16, marginTop:16}}>
        Privacy policy
        </Text>
        <View style={{width: 280, height:1, backgroundColor:"rgba(216,216,216,0.60)", marginTop:8}}></View>
        <View style={{marginBottom:40,marginTop:20,justifyContent:"center", alignItems:"center"}}>
          <View style={{width:300, marginTop:300}}>
          <Button style={{backgroundColor:"#2775C0", width:300}}
            onPress = {() => navigate("ChangePasswordForm")}
            title="Request to change bank account"
            color= "#086BB3"
            >
          </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
    paddingRight:24,
    backgroundColor:'#3393D0'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B'
  },
  label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:12
  },
  Details: {
    textAlign: 'left',
    color: '#FFFFFF',
    marginRight:175,
    fontSize:20,
    fontWeight: "bold"
  },
  check: {
    textAlign: 'left',
    color: 'rgba(88,89,91,0.60)',
    fontSize:14,
    marginLeft: 65,
    width:230
  },
  Sublabel:{
    textAlign: 'left',
    color: 'rgba(0,0,0,0.60)',
    marginTop: 10,
    marginLeft: 65,
    fontSize:28
  },
  LabelBold:{
    textAlign: 'left',
    fontWeight:'bold',
    color: '#58595B',
    marginTop: 20,
    marginLeft: 65,
    fontSize:12
  }
});
