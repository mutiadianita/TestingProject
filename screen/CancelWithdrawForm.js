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

        <Text style={styles.Detail}>Please confirm the following information based on the data you have entered</Text>
        <ScrollView>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
        <Text style={styles.Title}>Your dream
        </Text>
        </View>
        <Text style={styles.Label}>The following amount</Text>
        <Text style={styles.Sublabel}>Rp145.000.000,00</Text>
        <Text style={styles.LabelBold}>Will be returned to your bank account:</Text>
        <Image source={require('./asset/BCA.png')} style={{marginTop:10,marginBottom:10,marginLeft:60 ,width: 70, height: 25}}/>
        <Text style={styles.Details}>123-123-12345-1 </Text>
        <Text style={styles.Details}>a/n Stanley Santoso</Text>
        <View style={{width: 300, height:1, marginLeft:60, backgroundColor:'rgba(216,216,216,0.60)', marginTop:20, marginBottom:20}}></View>
        <Text style={styles.Check}>The process of returning your money may take up to 3 business days. we will notify you when transaction has been completed. </Text>
        </ScrollView>
        <View style={{marginBottom:40,marginTop:20,justifyContent:'center', alignItems:'center'}}>
          <View style={{width:300}}>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Request')}>
            <Text style={styles.ButtonText}>Continue</Text>
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
  Detail: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Title: {
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:12,
    fontFamily:'Roboto-Light'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 65,
    fontSize:16,
    fontFamily:'Roboto-Light'
  },
  Check: {
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
    fontSize:28,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  LabelBold:{
    textAlign: 'left',
    color: '#58595B',
    marginTop: 20,
    marginLeft: 65,
    fontSize:12,
    fontFamily:'Roboto-Bold'
  },
  Button: {
    backgroundColor:'#3393D0',
    width:300,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:2
  },
  ButtonText: {
    fontSize:18,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#FFFFFF'
  }
});
