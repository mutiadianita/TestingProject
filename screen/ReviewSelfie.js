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
export default class ReviewSelfie extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please Confirm the image you’ve taken</Text>
        <ScrollView>
        <View style={{marginTop:Size.PADDING_MID, alignItems:'center', justifyContent:'center'}}>
        <Image style={{width:Size.IMAGE_IDW, height:Size.IMAGE_IDH, borderRadius:Size.PADDING_SMALL, borderWidth:1,borderColor:'#3393D0'}} source={require('./images/bapak.png')} />
        </View>
        </ScrollView>
        <TouchableOpacity style={{backgroundColor:'#FFFFFF', width: Size.BUTTON_WIDTH, padding:Size.PADDING_SMALL, height:Size.BUTTON_HEIGHT}} onPress = {() => navigate('Step2')}>
          <Text style={{textAlign:'center', fontSize:Size.TEXT_LABELS, color:'#2775C0', fontFamily:'TitilliumWeb-SemiBold'}}>
            Retake Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#2775C0', width: Size.BUTTON_WIDTH, padding:Size.PADDING_SMALL, marginBottom:Size.PADDING_LONG,height:Size.BUTTON_HEIGHT, borderRadius:2}} onPress = {() => navigate('Step3')}>
          <Text style={{textAlign:'center',fontSize:Size.TEXT_LABELM, color:'#FFFFFF', fontFamily:'TitilliumWeb-SemiBold'}}>
            Confirm
          </Text>
        </TouchableOpacity>
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
    paddingRight: Size.PADDING,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    color: '#58595B',
    fontFamily:'Roboto-Light'
  }
});
