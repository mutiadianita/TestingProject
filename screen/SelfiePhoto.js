import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ScrollView
}  from 'react-native';
import { RNCamera } from 'react-native-camera';
const util = require('util');
export default class Step1 extends Component {
  state = {
   ratio: '16:9',
   ratios: [],
   path: null,
 };
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
   try {
     const data = await this.camera.takePictureAsync();
     this.setState({ path: data.uri });
     // this.props.updateImage(data.uri);
     // console.log('Path to image: ' + data.uri);
   } catch (err) {
     console.log('err: ', err);
   }
 };
 render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
 renderImage() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please Confirm the image you’ve taken</Text>
        <ScrollView>
        <View style={{marginTop:Size.PADDING_MID, alignItems:'center', justifyContent:'center'}}>
        <Image style={{width:Size.IMAGE_IDW, height:Size.IMAGE_IDH, borderRadius:Size.PADDING_SMALL, borderWidth:1,borderColor:'#3393D0'}} resizeMode="contain" source={{ uri: this.state.path }} />
        </View>
        </ScrollView>
        <TouchableOpacity style={{backgroundColor:'#FFFFFF', width: Size.BUTTON_WIDTH, padding:Size.PADDING_SMALL, height:Size.BUTTON_HEIGHT}} onPress={() => this.setState({ path: null })}>
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
  renderCamera() {
    var {navigate} = this.props.navigation;
    return (
  <View style={{flex:1}}>
    <View style={{zIndex:100, height:Size.DEVICE_HEIGHT, width:Size.DEVICE_WIDTH, position:'absolute'}}>
      <View style={{height:Size.HEADER_SELFIE_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)'}}>
      <TouchableOpacity onPress = {() => navigate('Step2') }>
        <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={{height:Size.IMAGE_ICON, width:Size.IMAGE_ICON, alignSelf:'flex-start', marginTop:Size.MARGIN_CAMERA, marginLeft:Size.MARGIN_CAMERA}}/>
      </TouchableOpacity>
      </View>
      <View style={{height:Size.TITLE_SELFIE_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)', paddingLeft:Size.PADDING_CAMERA, paddingRight:Size.PADDING_CAMERA}}>
        <Text style={{color:'#FFFFFF', textAlign:'center', fontSize:Size.TEXT_LABELS, fontFamily:'Roboto-Regular'}}>Please take a picture of yourself along with your ID</Text>
      </View>
      <View style={{flexDirection:'row', width:Size.DEVICE_WIDTH, justifyContent:'space-between'}}>
        <View style={{height:Size.SIDE_SELFIE_H, width:Size.SIDE_SELFIE_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
        <View style={{height:Size.SIDE_SELFIE_H, width:Size.SIDE_SELFIE_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
      </View>
      <View style={{height:Size.MID_SELFIE_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)'}}/>
      <View style={{flexDirection:'row', width:Size.DEVICE_WIDTH, justifyContent:'space-between'}}>
        <View style={{height:Size.SIDE_KTP_H, width:Size.SIDE_KTP_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
        <View style={{height:Size.SIDE_KTP_H, width:Size.SIDE_KTP_W, backgroundColor:'rgba(0,0,0,0.8)'}}/>
      </View>
      <View style={{height:Size.FOOTER_SELFIE_H, width:Size.DEVICE_WIDTH, backgroundColor:'rgba(0,0,0,0.8)'}}>
      <TouchableOpacity onPress = {() => navigate('ReviewSelfie')} style={{justifyContent:'center', alignItems:'center', marginTop:Size.PADDING}}>
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
                type={RNCamera.Constants.Type.front}
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
    flex: 1
  },
  preview: {
    height:Size.DEVICE_HEIGHT,
    width:Size.DEVICE_WIDTH
  }
})
