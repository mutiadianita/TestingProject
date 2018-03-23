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
export default class TopUp_Process extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please transfer the amount below to the following bank account to process your one-time top up to reach your dream for a new car of Rp145.000.000,00.</Text>
        <ScrollView>
        <Text style={styles.Label}>Top up amount</Text>
        <Text style={styles.Sublabel}>Rp15.000.000,00</Text>
        <Text style={styles.LabelBold}>Need to be transfered to:</Text>
        <Image source={require('./asset/BCA.png')} style={{marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL,marginLeft:Size.PADDING ,width: Size.PADDING_CONFIRM, height: Size.PADDING_TI}}/>
        <Text style={styles.Details}>123-123-12345-1 </Text>
        <Text style={styles.Details}>a/n Stanley Santoso</Text>
        <Text style={styles.Check}>Please upload your proof of payment before Jan 21st, 2018 to confirm the top up.</Text>
        </ScrollView>
        <View style={{marginBottom:Size.PADDING_MID,marginTop:Size.PADDING_MID,justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#3393D0', width:Size.BUTTON_WIDTH+Size.ELEVATION, height:Size.BUTTON_HEIGHT}}
            onPress = {() => navigate('TopUp_Done')}>
            <Text style={styles.ButtonTextWhite}>Upload Proof of Payment</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:Size.PADDING_SMALL}}>
            <TouchableOpacity style={{width:Size.DELETE_WIDTH*3, height: Size.BUTTON_HEIGHT, backgroundColor:'white', borderColor:'#3393D0', borderWidth:Size.BORDER, marginRight:Size.PROGRESS_BORDER}}
            onPress = {() => navigate('Home')}>
              <Text style={styles.ButtonTextBlue}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:Size.DELETE_WIDTH*3, height: Size.BUTTON_HEIGHT, backgroundColor:'#3393D0'}}>
              <Text style={styles.ButtonTextWhite}>OK, I&apos;ll do it later</Text>
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
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    marginRight:Size.PADDING,
    marginLeft:Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILM,
    fontFamily:'Roboto-Light'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Regular'
  },
  Check: {
    textAlign: 'left',
    color: 'rgba(88,89,91,0.60)',
    fontSize:14,
    marginLeft: Size.PADDING,
    width:Size.CHECK,
    marginTop:Size.PADDING_MID,
    fontFamily:'Roboto-Regular'
  },
  Sublabel:{
    textAlign: 'left',
    color: 'rgba(0,0,0,0.60)',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING,
    fontSize:28,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  LabelBold:{
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_MID,
    marginLeft: Size.PADDING,
    fontSize:14,
    fontFamily:'Roboto-Regular'
  },
  ButtonTextWhite:{
    color:'white',
    fontSize:18,
    textAlign:'center',
    padding:5,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  ButtonTextBlue: {
    color:'#3393D0',
    fontSize:18,
    textAlign:'center',
    padding:5,
    fontFamily:'TitilliumWeb-SemiBold'
  }
});
