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
        <View style={{alignItems:'flex-start', justifyContent:'flex-start', paddingRight:Size.PADDING}}>
        <RadioForm style={{alignItems:'flex-start', justifyContent:'flex-start'}}
          radio_props={ [
          {label: 'Do not know at all', value: 1 },
          {label: 'Less knowledge especially about return on investment', value: 2 },
          {label: 'Have good Knowledge (Result and Risk)', value: 3 },
          {label: 'Have good knowledge and i have used Mutual Friend', value: 4 },
          {label: 'Really understand about mutual fund and its invesment strategy', value: 5 }
          ]}
          buttonSize={Size.TEXT_LABELS/2}
          buttonOuterSize={Size.PADDING_MID}
          initial={0}
          radioStyle={{paddingTop: Size.PADDING}}
          labelStyle={{fontSize:Size.TEXT_LABELS, fontFamily:'Roboto-Regular', color:'rgba(0,0,0,0.60)'}}
          buttonInnerColor={'#3393D0'}
          buttonOuterColor={'#3393D0'}
          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end', paddingRight:Size.PADDING, paddingBottom:Size.PADDING_LONG, backgroundColor:'#FFFFFF'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('Statement')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: Size.BUTTON_ICON, height:Size.BUTTON_ICON}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: Size.PADDING_MID,
    paddingLeft: Size.PADDING,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    fontWeight:'bold',
    color: '#58595B',
    fontFamily:'Roboto-Bold'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
