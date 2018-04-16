import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity
}  from 'react-native';
import Orientation from 'react-native-orientation';
import { RNCamera } from 'react-native-camera';
const util = require('util');
var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath ;
export default class Step1 extends Component {
  state = {
   ratio: '16:9',
   ratios: []
 };
 componentDidMount () {
   Orientation.lockToLandscape();
 }

 componentWillUnmount () {
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
 takePicture = async function() {
   if (this.camera) {
     this.camera.takePictureAsync().then(data => {
       console.log('data: ', data);
     });
   }
 };
  render() {
    var {navigate} = this.props.navigation;
    return (
  <View style={{flex:1}}>
    <View style={{height:Size.DEVICE_WIDTH, zIndex:100,width:Size.DEVICE_HEIGHT, position:'absolute'}}>
      <View style={{flexDirection:'row',height:Size.HEADER_CAMERA_H, width:Size.DEVICE_HEIGHT, backgroundColor:'rgba(0,0,0,0.8)'}}>
        <View style={{width:Size.PADDING_LONG}}>
        <TouchableOpacity onPress = {() => navigate('Step1') }>
          <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={{height:Size.IMAGE_ICON, width:Size.IMAGE_ICON, alignSelf:'flex-start', marginTop:Size.MARGIN_CAMERA, marginLeft:Size.MARGIN_CAMERA}}/>
        </TouchableOpacity>
        </View>
        <View style={{width:Size.TEXT_CAMERA_W}}>
          <Text style={{color:'#FFFFFF', margin:Size.TEXT_LABELS, textAlign:'center', fontSize:Size.LABELS, fontFamily:'Roboto-Regular'}}>Please scan your ID card into the space below.</Text>
        </View>
        <View style={{width:Size.PADDING}}/>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{height:Size.SIDE_CAMERA_H, width:Size.SIDE_CAMERA_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
        <View style={{height:Size.SIDE_CAMERA_H, width:Size.SIDE_CAMERA_W, backgroundColor:'rgba(0,0,0,0.8)', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress = {this.takePicture.bind(this)} style={{justifyContent:'center', alignItems:'center', marginTop:Size.BUTTON_ICON}}>
          <View style={{justifyContent:'center', alignSelf:'center',height:Size.PADDING_CONFIRM, width:Size.PADDING_CONFIRM, borderRadius:Size.PADDING_CONFIRM/2, backgroundColor:'white'}}>
          <View style={{justifyContent:'center', alignSelf:'center',height:Size.BUTTON_ROUND, width:Size.BUTTON_ROUND, borderRadius:Size.BUTTON_ROUND/2, borderColor:'black', borderWidth:2, backgroundColor:'white'}}/>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{height:Size.HEADER_CAMERA_H, width:Size.DEVICE_HEIGHT, backgroundColor:'rgba(0,0,0,0.8)'}}>
      <TouchableOpacity onPress = {() => navigate('ReviewID')} style={{justifyContent:'center', alignSelf:'center', marginTop:Size.PADDING_SMALL}}>
        <View style={{justifyContent:'center', alignSelf:'center',height:Size.PADDING, width:Size.IMAGE_NW, borderRadius:Size.ELEVATION, borderColor:'white', borderWidth:1, backgroundColor:'black'}}>
          <Text style={{fontSize: Size.TEXT_DETAILS, color:'#FFFFFF', textAlign:'center'}}>I’m still waiting for my KTP</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    <View style={{zIndex:0, position:'absolute',height:Size.DEVICE_WIDTH, width:Size.DEVICE_HEIGHT}}>
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
    height:Size.DEVICE_WIDTH,
    width:Size.DEVICE_HEIGHT,
    zIndex:0,
    position:'absolute'
  },
})
