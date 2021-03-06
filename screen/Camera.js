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
export default class Step1 extends Component {
  state = {
   ratio: '16:9',
   ratios: []
 };
 componentDidMount () {
   Orientation.lockToLandscape();
 }

 componentWillUnmount () {
   Orientation.lockToPortrait();
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
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
  render() {
    var {navigate} = this.props.navigation;

    return (
  <View style={{flex:1}}>
    <View style={{flex:1, padding:5,alignItems:'center', height:Size.DEVICE_HEIGHT, zIndex:0,width:Size.DEVICE_HEIGHT, backgroundColor:'black', position:'absolute'}}>
    <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={{height:Size.IMAGE_ICON, width:Size.IMAGE_ICON, alignSelf:'flex-start'}}/>
      <Text style={{color:'#FFFFFF', marginBottom:10}}>Please scan your ID card into the space below.</Text>

    </View>
    <View style={{flex:1, zIndex:1, alignItems:'center'}}>
      <View style={{marginTop:50,height:240, width:360, borderWidth:2, borderColor:'white', justifyContent: 'flex-end', alignItems: 'center'}}>
        <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style = {styles.preview}
                ratio={this.state.ratio}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
            />

      </View>
      <TouchableOpacity onPress= {() => navigate('ScanResi')} style={{justifyContent:'center', alignSelf:'center', marginTop:10}}>
        <View style={{justifyContent:'center', alignSelf:'center',height:30, width:200, borderRadius:5, borderColor:'white', borderWidth:1, backgroundColor:'black'}}>
          <Text style={{color:'#FFFFFF', textAlign:'center'}}>I’m still waiting for my KTP</Text>
        </View>
      </TouchableOpacity>
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
    height:234,
    width:356,
    marginTop:10,
    borderWidth:3,
    borderColor:'white',
    borderRadius:10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})
