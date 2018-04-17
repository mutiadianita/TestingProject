import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ImageBackground
}  from 'react-native';
import Orientation from 'react-native-orientation';
import { RNCamera } from 'react-native-camera';
const util = require('util');
var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath ;
export default class Step1 extends Component {
  state = {
   ratio: '16:9',
   ratios: [],
   imageUri:null
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

 takePicture = async () => {
    const { uri } = await this.camera.takePictureAsync();
    this.setState({ imageUri: uri });
 }

  render() {
    return (
      <View style={styles.container}>
        {this.state.imageUri ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
  renderImage() {
    const { imageUri } = this.state;
    var {navigate} = this.props.navigation;
    return(
    this.props.navigation.navigate('ReviewID',{imageUri})
    );
  }
  renderCamera() {
    return (
    <View style={{flex:1}}>
      <View style={styles.Shade}>
        <View style={styles.Header}>
          <View style={{width:Size.PADDING_LONG}}>
          <TouchableOpacity onPress = {() => navigate('Step1') }>
            <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={styles.ButtonClose}/>
          </TouchableOpacity>
          </View>
          <View style={{width:Size.TEXT_CAMERA_W}}>
            <Text style={styles.Title}>Please scan your ID card into the space below.</Text>
          </View>
          <View style={{width:Size.PADDING}}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={styles.SideCamera}/>
          <View style={styles.SideCameraContent}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.ButtonCapture}>
            <View style={styles.BigCapture}>
            <View style={styles.SmallCapture}/>
            </View>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Footer}>
        <TouchableOpacity onPress = {() => navigate('ScanResi')}>
          <View style={styles.Button}>
            <Text style={styles.TextButton}>I’m still waiting for my KTP</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Camera}>
        <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style = {styles.Preview}
                ratio={this.state.ratio}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
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
  Preview: {
    height:Size.DEVICE_WIDTH,
    width:Size.DEVICE_HEIGHT,
    zIndex:0,
    position:'absolute'
  },
  Shade: {
    height:Size.DEVICE_WIDTH,
    zIndex:100,
    width:Size.DEVICE_HEIGHT,
    position:'absolute'
  },
  Camera: {
    zIndex:0,
    position:'absolute',
    height:Size.DEVICE_WIDTH,
    width:Size.DEVICE_HEIGHT
  },
  TextButton: {
    fontSize: Size.TEXT_DETAILS,
    color:'#FFFFFF',
    textAlign:'center'
  },
  Button: {
    justifyContent:'center',
    alignSelf:'center',
    height:Size.PADDING,
    width:Size.IMAGE_NW,
    borderRadius:Size.ELEVATION,
    borderColor:'white',
    borderWidth:1,
    backgroundColor:'black',
    alignSelf:'center',
    marginTop:Size.PADDING_SMALL
  },
  Header: {
    flexDirection:'row',
    height:Size.HEADER_CAMERA_H,
    width:Size.DEVICE_HEIGHT,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Footer: {
    height:Size.HEADER_CAMERA_H,
    width:Size.DEVICE_HEIGHT,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  ButtonCapture: {
    justifyContent:'center',
    alignItems:'center'
  },
  BigCapture: {
    justifyContent:'center',
    alignSelf:'center',
    height:Size.PADDING_CONFIRM,
    width:Size.PADDING_CONFIRM,
    borderRadius:Size.PADDING_CONFIRM/2,
    backgroundColor:'white'
  },
  SmallCapture: {
    justifyContent:'center',
    alignSelf:'center',
    height:Size.BUTTON_ROUND,
    width:Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    borderColor:'black',
    borderWidth:2,
    backgroundColor:'white'
  },
  SideCamera: {
    height:Size.SIDE_CAMERA_H,
    width:Size.SIDE_CAMERA_W,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  SideCameraContent: {
    height:Size.SIDE_CAMERA_H,
    width:Size.SIDE_CAMERA_W,
    backgroundColor:'rgba(0,0,0,0.8)',
    justifyContent:'center',
    alignItems:'center'
  },
  Title: {
    color:'#FFFFFF',
    margin:Size.TEXT_LABELS,
    textAlign:'center',
    fontSize:Size.LABELS,
    fontFamily:'Roboto-Regular'
  },
  ButtonClose: {
    height:Size.IMAGE_ICON,
    width:Size.IMAGE_ICON,
    alignSelf:'flex-start',
    marginTop:Size.MARGIN_CAMERA,
    marginLeft:Size.MARGIN_CAMERA
  }
})
