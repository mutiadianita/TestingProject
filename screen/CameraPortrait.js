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
   Orientation.lockToPortrait();
 }
 componentWillUnmount() {
   Orientation.lockToLandscape();
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
    <View style={{padding:10,flex:1, alignItems:'center', height:Size.DEVICE_HEIGHT, zIndex:0,width:Size.DEVICE_WIDTH, backgroundColor:'black', position:'absolute'}}>
    <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={{height:Size.IMAGE_ICON, width:Size.IMAGE_ICON, alignSelf:'flex-start'}}/>
      <Text style={{fontFamily:'Roboto-Regular', fontSize:Size.TEXT_LABELS, textAlign:'center', color:'#FFFFFF', marginTop:10}}>Please take a picture of your KTP Resi</Text>
    </View>
    <View style={{flex:1, zIndex:1, alignItems:'center'}}>
      <View style={{marginTop:Size.PADDING_CONFIRML,height:405, width:275, borderWidth:2, borderColor:'white', justifyContent: 'flex-end', alignItems: 'center'}}>
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
      <TouchableOpacity onPress = {() => navigate('ReviewID')} style={{justifyContent:'center', alignSelf:'center', marginTop:Size.BUTTON_ICON}}>
        <View style={{justifyContent:'center', alignSelf:'center',height:Size.PADDING_CONFIRM, width:Size.PADDING_CONFIRM, borderRadius:Size.PADDING_CONFIRM/2, backgroundColor:'white'}}>
        <View style={{justifyContent:'center', alignSelf:'center',height:Size.BUTTON_ROUND, width:Size.BUTTON_ROUND, borderRadius:Size.BUTTON_ROUND/2, borderColor:'black', borderWidth:2, backgroundColor:'white'}}/>
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
    height:400,
    width:270,
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
