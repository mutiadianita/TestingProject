'use strict';
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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const util = require('util');
export default class Question5 extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
        How much do you know about mutual fund?
        </Text>
        <View style={{alignItems:'flex-start', justifyContent:'flex-start', paddingRight:30}}>
        <RadioForm style={{alignItems:'flex-start', justifyContent:'flex-start'}}
          radio_props={ [
          {label: 'Do not know at all', value: 1 },
          {label: 'Less knowledge especially about return on investment', value: 2 },
          {label: 'Have good Knowledge (Result and Risk)', value: 3 },
          {label: 'Have good knowledge and i have used Mutual Friend', value: 4 },
          {label: 'Really understand about mutual fund and its invesment strategy', value: 5 }
          ]}
          buttonSize={8}
          buttonOuterSize={20}
          initial={0}
          radioStyle={{paddingTop: 20}}
          labelStyle={{fontSize:16, fontFamily:'Roboto-Regular', color:'rgba(0,0,0,0.60)'}}
          buttonInnerColor={'#3393D0'}
          buttonOuterColor={'#3393D0'}
          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end', paddingRight:30,paddingBottom:40, backgroundColor:'#FFFFFF'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('Statement')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight:'bold',
    color: '#58595B',
    fontFamily:'Roboto-Bold',
    marginRight:30
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
