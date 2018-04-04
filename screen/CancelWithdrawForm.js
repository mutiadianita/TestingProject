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
        <Image source={{uri: 'ic_dream_small'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={styles.Title}>Your dream
        </Text>
        </View>
        <Text style={styles.Label}>The following amount</Text>
        <Text style={styles.Sublabel}>Rp145.000.000,00</Text>
        <Text style={styles.LabelBold}>Will be returned to your bank account:</Text>
        <Image source={{uri: 'bca'}} resizeMode="contain" style={{marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL,marginLeft:Size.BUTTON_ROUND ,width: Size.BOX_HEIGHT, height: Size.PADDING_TI}}/>
        <Text style={styles.Details}>123-123-12345-1 </Text>
        <Text style={styles.Details}>a/n Stanley Santoso</Text>
        <View style={{width: Size.BUTTON_WIDTH, height:1, marginLeft:Size.BUTTON_ROUND, backgroundColor:'rgba(216,216,216,0.60)', marginTop:Size.PADDING_SMALL, marginBottom:Size.PADDING_SMALL}}/>
        <Text style={styles.Check}>The process of returning your money may take up to 3 business days. we will notify you when transaction has been completed. </Text>
        </ScrollView>
        <View style={{marginBottom:Size.PADDING,marginTop:Size.PADDING_SMALL,justifyContent:'center', alignItems:'center'}}>
          <View style={{width:Size.BUTTON_WIDTH}}>
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
    paddingTop: Size.PADDING,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING_SMALL,
    marginRight:Size.PADDING,
    marginLeft:Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILM,
    fontFamily:'Roboto-Light'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Light'
  },
  Check: {
    textAlign: 'left',
    color: 'rgba(88,89,91,0.60)',
    fontSize:Size.TEXT_DETAILL,
    marginLeft: Size.PADDING_CONFIRM,
    width:Size.CHECK
  },
  Sublabel:{
    textAlign: 'left',
    color: 'rgba(0,0,0,0.60)',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_TITLEE,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  LabelBold:{
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_MID,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILM,
    fontFamily:'Roboto-Bold'
  },
  Button: {
    backgroundColor:'#3393D0',
    width:Size.BUTTON_WIDTH,
    height:Size.BUTTON_HEIGHT,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:Size.BORDER
  },
  ButtonText: {
    fontSize:Size.TEXT_LABELM,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#FFFFFF'
  }
});
