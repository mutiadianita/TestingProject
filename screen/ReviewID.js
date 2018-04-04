import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class ReviewID extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>Please confirm your card and the ID Card number below.</Text>
        <ScrollView>
        <Image source={{uri:'idcard'}} resizeMode="contain" style={{width:Size.IMAGE_IDW, height:Size.IMAGE_NW, borderRadius:Size.PADDING_SMALL}}/>
        <Text style={styles.Label}>Your ID Card Number</Text>
        <TextInput
        style={{width: Size.BUTTON_WIDTH, fontSize: Size.TEXT_LABELL, color:'black', fontFamily:'Roboto-Medium'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        secureTextEntry={true}
        />
        <Text style={styles.Details}>
        * You can correct your ID Card number
        </Text>
        </ScrollView>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:Size.PADDING_LONG, marginRight:Size.PADDING}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('YourInformation')}>
          <Image source={{uri:'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height:Size.BUTTON_ICON}}/>
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
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#333333',
    marginTop: Size.PADDING,
    fontSize: Size.TEXT_DETAILL,
    fontFamily:'Roboto-Regular'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:Size.TEXT_DETAILS,
    fontFamily:'Roboto-Italic'
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
  }
});
