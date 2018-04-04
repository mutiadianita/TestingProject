import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
  Image
}  from 'react-native';

const util = require('util');
export default class BankAccount extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please enter your bank account information</Text>
        <ScrollView>
          <View style={{flexDirection:'row'}}>
          <Image source={{uri: 'ic_bank'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={{fontSize:Size.TEXT_LABELS,  color:'#3393D0', marginTop: Size.ELEVATION, marginLeft: Size.ELEVATION, marginBottom:Size.PADDING_MID, fontFamily:'TitilliumWeb-Bold'}}>Your Bank Account</Text>
          </View>
          <Text style={styles.Label}>Account number</Text>
          <TextInput
          style={{marginLeft:Size.PADDING,width: Size.TI_WIDTH, color:'rgba(0,0,0,0.60)', fontFamily:'Roboto-Regular'}}
          placeholderTextColor='black'
          underlineColorAndroid='black'
          keyboardType={'numeric'}
          />
          <Text style={styles.Label}>Account Holder</Text>
          <TextInput
          style={{marginLeft:Size.PADDING,width: Size.TI_WIDTH, color:'rgba(0,0,0,0.60)', fontFamily:'Roboto-Regular'}}
          placeholderTextColor='black'
          underlineColorAndroid='black'
          />
        </ScrollView>
        <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
          <TouchableOpacity style={styles.RoundButton} onPress = {() => navigate('Done')}>
            <Image source={{uri: 'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Size.PADDING_SMALL,
    paddingLeft: Size.PADDING,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING/2,
    marginTop:Size.PADDING/2,
    marginRight: Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.ELEVATION,
    marginLeft: Size.TEXT_TITLEL,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  Picker: {
    marginLeft:Size.PADDING,
    width:Size.PICKER_WIDTH
  },
  RoundButton:{
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    marginBottom: Size.PADDING_LONG,
    marginRight:Size.PADDING,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
