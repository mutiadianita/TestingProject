import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
}  from 'react-native';

const util = require('util');
export default class Confirm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>
        Based on your dream amount, target date, and your investment strategy, your monthly investment to reach your dream wil be:
        </Text>
        <Text style={styles.Label}>IDR200,000.00
        </Text>
        <View style={{flex:1}}>
          <TouchableOpacity
            onPress = {() => navigate('GoalAmount')}>
            <Text style={{color:'#2775C0', fontSize:Size.TEXT_LABELS, marginTop:Size.MARGIN_LONG, textAlign:'center', fontFamily:'TitilliumWeb-SemiBold'}}>Change My Dream Information</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => navigate('Strategy')}>
            <Text style={{color:'#2775C0', fontSize:Size.TEXT_LABELS, marginTop:Size.PADDING_MID, marginBottom:Size.BUTTON_HEIGHT, textAlign:'center', fontFamily:'TitilliumWeb-SemiBold'}}>Change My Investment Strategy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#3393D0', height:Size.BUTTON_HEIGHT, width:Size.BUTTON_WIDTH, justifyContent:'center', borderRadius:2}}
            onPress = {() => navigate('ConfirmForm')}>
            <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_LABELS,textAlign:'center', fontFamily:'TitilliumWeb-SemiBold'}}>Continue</Text>
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
    paddingRight:Size.PADDING,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#58595B',
    marginTop: Size.MARGIN_LONG,
    fontSize:Size.TEXT_TITLEM,
    fontFamily:'TitilliumWeb-SemiBold'
  }
});
