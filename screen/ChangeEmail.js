import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ViewPagerAndroid
}  from 'react-native';
const util = require('util');
export default class ChangeEmail extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
    <Image source={require('./asset/ic_close_blue.png')} style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM}}/>
      <Text style={{fontSize:Size.TEXT_TITLEM, fontFamily:'TitilliumWeb-Bold',textAlign:'left', color:'#58595B', marginTop:Size.PADDING_MID, marginRight:Size.PADDING}}>Change Email Address</Text>
      <Text style={{fontSize:Size.TEXT_LABELS, fontFamily:'SourceSansPro-Regular', textAlign:'left', color:'#333333', marginTop:Size.DELETE_WIDTH*3}}>We will contact you if you want to change your email address.</Text>
      <TouchableOpacity onPress = {() => navigate('EditProfile')}>
      <View style={{height:Size.DELETE_WIDTH, width:Size.CBOX_HEIGHT, marginTop:Size.PADDING, backgroundColor:'#3393D0', borderRadius:Size.BORDER, elevation:Size.BORDER, justifyContent:'center', alignItems:'center'}}>
      <Text style={{textAlign:'center', fontFamily:'TitilliumWeb-SemiBold', fontSize:Size.TEXT_LABELM, color:'white'}}>OK</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    flexDirection:'column',
    paddingTop: Size.DELETE_HEIGHT,
    paddingBottom:Size.DELETE_HEIGHT,
    paddingLeft:Size.DELETE_WIDTH,
    paddingRight:Size.DELETE_WIDTH
  }
})
