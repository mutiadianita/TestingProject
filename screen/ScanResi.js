import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
}  from 'react-native';
import Orientation from 'react-native-orientation';
import { RNCamera } from 'react-native-camera';
const util = require('util');
export default class Step1 extends Component {
  state = {
   ratio: '16:9',
   ratios: []
 };
 componentDidMount () {
   Orientation.lockToPortrait();
 }
 componentWillUnmount() {
   Orientation.unlockAllOrientations();
 }
 onBackButtonPressed() {
    return true;
  }
 getRatios = async function() {
   const ratios = await this.camera.getSupportedRatios();
   return ratios;
 };
 setRatio(ratio) {
   this.setState({
     ratio,
   });
 }
  render() {
    var {navigate} = this.props.navigation;
    return (
  <View style={{flex:1}}>
    <View style={{zIndex:100, height:Size.DEVICE_HEIGHT, width:Size.DEVICE_WIDTH, position:'absolute'}}>
      <View style={{height:Size.HEADER_SELFIE_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)'}}>
      <TouchableOpacity onPress = {() => navigate('Step1') }>
        <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={{height:Size.IMAGE_ICON, width:Size.IMAGE_ICON, alignSelf:'flex-start', marginTop:Size.MARGIN_CAMERA, marginLeft:Size.MARGIN_CAMERA}}/>
      </TouchableOpacity>
      </View>
      <View style={{height:Size.TITLE_RESI_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)'}}>
        <Text style={{color:'#FFFFFF', textAlign:'center', fontSize:Size.TEXT_LABELS, fontFamily:'Roboto-Regular'}}>Please take a picture of your KTP Resi</Text>
      </View>
      <View style={{flexDirection:'row', width:Size.DEVICE_WIDTH, justifyContent:'space-between'}}>
        <View style={{height:Size.SIDE_RESI_H, width:Size.SIDE_RESI_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
        <View style={{height:Size.SIDE_RESI_H, width:Size.SIDE_RESI_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
      </View>
      <View style={{height:Size.FOOTER_RESI_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)'}}>
      <TouchableOpacity onPress = {() => navigate('ReviewID')} style={{justifyContent:'center', alignItems:'center', marginTop:Size.BUTTON_ICON}}>
        <View style={{justifyContent:'center', alignSelf:'center',height:Size.PADDING_CONFIRM, width:Size.PADDING_CONFIRM, borderRadius:Size.PADDING_CONFIRM/2, backgroundColor:'white'}}>
        <View style={{justifyContent:'center', alignSelf:'center',height:Size.BUTTON_ROUND, width:Size.BUTTON_ROUND, borderRadius:Size.BUTTON_ROUND/2, borderColor:'black', borderWidth:2, backgroundColor:'white'}}/>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    <View style={{zIndex:0, position:'absolute'}}>
      <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style = {styles.preview}
                ratio={this.state.ratio}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
            />
      </View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  preview: {
    height:Size.DEVICE_HEIGHT,
    width:Size.DEVICE_WIDTH
  }
})
