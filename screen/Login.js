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
import Size from "../style/Size";
const util = require('util');
export default class Login extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>
          Please fill in the data below to Login to your Xdana account.
        </Text>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri: 'ic_profile_blue'}} resizeMode="contain" style={{width: Size.PADDING, height:Size.PADDING}}/>
        <Text style={{fontSize:Size.TEXT_LABELS,  color:'#3393D0',marginBottom:Size.PADDING_MID, fontFamily:'TitilliumWeb-Bold',marginTop:Size.PADDING/6}}>Account info
        </Text>
        </View>
        <Text style={styles.Label}>Name
        </Text>
        <TextInput style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        />
        <Text style={styles.Label}>Password
        </Text>
        <TextInput style={styles.TextInput}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        />
        <View style={styles.ButtonView}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('HomeStatus')}>
            <Image source={{uri: 'ic_next_white'}} resizeMode="contain" style={styles.ButtonIcon}/>
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
    padding: Size.PADDING,
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
  TextInput: {
    width: Size.TI_WIDTH,
    marginLeft:Size.PADDING_TI,
    color:'#58595B',
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Regular'
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
  ButtonIcon: {
    width: Size.BUTTON_ICON,
    height: Size.BUTTON_ICON
  },
  ButtonView: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginBottom:Size.PADDING_SMALL
  }
});
