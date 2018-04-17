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
    <View style={styles.Shade}>
      <View style={styles.Header}>
        <TouchableOpacity onPress = {() => navigate('Step1') }>
          <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={style.IconClose}/>
        </TouchableOpacity>
      </View>
      <View style={styles.Title}>
        <Text style={styles.TextTitle}>Please take a picture of your KTP Resi</Text>
      </View>
      <View style={styles.SideContainer}>
        <View style={styles.Side}/>
        <View style={styles.Side}/>
      </View>
      <View style={styles.Footer}>
        <TouchableOpacity onPress = {() => navigate('ReviewID')} style={styles.Button}>
          <View style={styles.ButtonBig}>
            <View style={styles.ButtonSmall}/>
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
  preview: {
    height:Size.DEVICE_HEIGHT,
    width:Size.DEVICE_WIDTH
  },
  Shade: {
    zIndex:100,
    height:Size.DEVICE_HEIGHT,
    width:Size.DEVICE_WIDTH,
    position:'absolute'
  },
  Header: {
    height:Size.HEADER_SELFIE_H,
    width:Size.DEVICE_WIDTH,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Title: {
    height:Size.TITLE_RESI_H,
    width:Size.DEVICE_WIDTH,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  IconClose: {
    height:Size.IMAGE_ICON,
    width:Size.IMAGE_ICON,
    alignSelf:'flex-start',
    marginTop:Size.MARGIN_CAMERA,
    marginLeft:Size.MARGIN_CAMERA
  },
  TextTitle: {
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Regular'
  },
  SideContainer: {
    flexDirection:'row',
    width:Size.DEVICE_WIDTH,
    justifyContent:'space-between'
  },
  Side: {
    height:Size.SIDE_RESI_H,
    width:Size.SIDE_RESI_W,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Footer: {
    height:Size.FOOTER_RESI_H,
    width:Size.DEVICE_WIDTH,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:Size.BUTTON_ICON
  },
  ButtonBig: {
    justifyContent:'center',
    alignSelf:'center',
    height:Size.PADDING_CONFIRM,
    width:Size.PADDING_CONFIRM,
    borderRadius:Size.PADDING_CONFIRM/2,
    backgroundColor:'white'
  },
  ButtonSmall: {
    justifyContent:'center',
    alignSelf:'center',
    height:Size.BUTTON_ROUND,
    width:Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    borderColor:'black',
    borderWidth:2,
    backgroundColor:'white'
  }
})
