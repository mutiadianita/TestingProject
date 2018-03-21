import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
}  from 'react-native';

const util = require('util');
export default class SignUp_Password extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
          Please fill in the data below to create an Xdana account.
        </Text>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_pass_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={{fontSize:Size.TEXT_LABELS, fontWeight:'bold', color:'#3393D0', marginBottom:Size.PADDING_MID, fontFamily:'TitilliumWeb-Bold', marginTop:Size.PADDING/6}}>Your password
        </Text>
        </View>
        <Text style={styles.Label}>Password
        </Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        secureTextEntry
        />
        <Text style={styles.Label}>Re-type Password
        </Text>
        <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        />
        <View style={styles.ButtonView}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('Step1')}>
            <Image source={require('./asset/ic_next_white.png')} style={styles.ButtonIcon}/>
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
    paddingLeft: Size.PADDING,
    paddingRight: Size.PADDING,
    paddingTop: Size.PADDING_SMALL,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING_MID,
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    marginTop: Size.PADDING_MID,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  },
  TextInput: {
    width: Size.TI_WIDTH,
    marginLeft:Size.PADDING_TI,
    color:'#58595B',
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Regular'
  },
  ButtonView: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginBottom:Size.PADDING_LONG
  },
  ButtonIcon: {
    width: Size.BUTTON_ICON,
    height: Size.BUTTON_ICON
  },
});
