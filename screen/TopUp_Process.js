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
export default class CancelWithdrawForm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>Please transfer the amount below to the following bank account to process your one-time top up to reach your dream for a new car of Rp145.000.000,00.</Text>
        <ScrollView>
        <Text style={styles.Label}>Top up amount</Text>
        <Text style={styles.Sublabel}>Rp15.000.000,00</Text>
        <Text style={styles.LabelBold}>Need to be transfered to:</Text>
        <Image source={require('./asset/BCA.png')} style={{marginTop:10,marginBottom:10,marginLeft:30 ,width: 70, height: 25}}/>
        <Text style={styles.Details}>123-123-12345-1 </Text>
        <Text style={styles.Details}>a/n Stanley Santoso</Text>
        <Text style={styles.Check}>Please upload your proof of payment before Jan 21st, 2018 to confirm the top up.</Text>
        </ScrollView>
        <View style={{marginBottom:20,marginTop:20,justifyContent:"center", alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"#3393D0", width:312, height:48}}
            onPress = {() => navigate("Request")}>
            <Text style={{color:"white", fontSize:18, textAlign:"center", padding:5}}>Upload Proof of Payment</Text>
          </TouchableOpacity>
          <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:10}}>
            <TouchableOpacity style={{width:150, height: 48, backgroundColor:"white", borderColor:"#3393D0", borderWidth:3, marginRight:6}}>
              <Text style={{color:"#3393D0", fontSize:18, textAlign:"center", padding:5}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:150, height: 48, backgroundColor:"#3393D0"}}>
              <Text style={{color:"white", fontSize:18, textAlign:"center", padding:5}}>OK, I&apos;ll do it later</Text>
            </TouchableOpacity>
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
