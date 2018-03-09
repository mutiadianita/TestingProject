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
        <View style={{marginTop:20, alignItems:'center', justifyContent:'center'}}>
        <Image style={{width:312, height:342}} source={require('./images/bapak.png')} />
        </View>
        </ScrollView>
        <TouchableOpacity style={{backgroundColor:'#FFFFFF', width: 304, padding:10, height:48}} onPress = {() => navigate('Step2')}>
          <Text style={{textAlign:'center', fontSize:16, color:'#2775C0', fontFamily:'TitilliumWeb-SemiBold'}}>
            Retake Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#2775C0', width: 304, padding:10, marginBottom:40,height:48, borderRadius:2}} onPress = {() => navigate('Step3')}>
          <Text style={{textAlign:'center',fontSize:18, color:'#FFFFFF', fontFamily:'TitilliumWeb-SemiBold'}}>
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
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  }
});
