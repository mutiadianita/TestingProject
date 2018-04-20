import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground
}  from 'react-native';
import { RNCamera } from 'react-native-camera';
const util = require('util');
export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      ratio: '16:9',
      ratios: [],
    };
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
  var {navigate} = this.props.navigation;
  const { imageUri } = this.state;
  if (imageUri) {
    return (
      <View style={styles.ImageContainer}>
        <Text style={styles.ImageTitle}>Please Confirm the image you’ve taken</Text>
        <ScrollView>
          <View style={styles.ImageFrame}>
            <Image style={styles.Image} source={{uri:imageUri}} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.ButtonRetake} onPress onPress={() => this.setState({ imageUri: null })}>
          <Text style={styles.TextRetake}>
            Retake Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonConfirm} onPress = {() => navigate('Step3')}>
          <Text style={styles.TextConfirm}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View> );
    }
    return (
  <View style={{flex:1}}>
    <View style={styles.Shade}>
      <View style={styles.Header}>
        <TouchableOpacity onPress = {() => navigate('Step2') }>
          <Image source={{uri:'ic_close_white'}} resizeMode='contain' style={styles.IconClose}/>
        </TouchableOpacity>
      </View>
      <View style={styles.Title}>
        <Text style={styles.TextTitle}>Please take a picture of yourself along with your ID</Text>
      </View>
      <View style={styles.SideSelfieContainer}>
        <View style={styles.SideSelfie}/>
        <View style={styles.SideSelfie}/>
      </View>
      <View style={styles.Mid}/>
      <View style={styles.SideKTPContainer}>
        <View style={styles.SideKTP}/>
        <View style={styles.SideKTP}/>
      </View>
      <View style={styles.Footer}>
        <TouchableOpacity  onPress={this.takePicture.bind(this)} style={styles.Button}>
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
  ImageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Size.PADDING_SMALL,
    paddingLeft: Size.PADDING,
    paddingRight: Size.PADDING,
    backgroundColor:'white'
  },
  ImageFrame: {
    marginTop:Size.PADDING_MID,
    alignItems:'center',
    justifyContent:'center'
  },
  Image:{
    width:Size.IMAGE_IDW,
    height:Size.IMAGE_IDH,
    borderRadius:Size.PADDING_SMALL,
    borderWidth:1,
    borderColor:'#3393D0'
  },
  preview: {
    height:Size.DEVICE_HEIGHT,
    width:Size.DEVICE_WIDTH
  },
  ImageTitle: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  ButtonRetake: {
    backgroundColor:'#FFFFFF',
    width: Size.BUTTON_WIDTH,
    padding:Size.PADDING_SMALL,
    height:Size.BUTTON_HEIGHT
  },
  ButtonConfirm: {
    backgroundColor:'#2775C0',
    width: Size.BUTTON_WIDTH,
    padding:Size.PADDING_SMALL,
    marginBottom:Size.PADDING_LONG,
    height:Size.BUTTON_HEIGHT,
    borderRadius:2
  },
  TextRetake: {
    textAlign:'center',
    fontSize:Size.TEXT_LABELS,
    color:'#2775C0',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  TextConfirm: {
    textAlign:'center',
    fontSize:Size.TEXT_LABELM,
    color:'#FFFFFF',
    fontFamily:'TitilliumWeb-SemiBold'
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
  IconClose: {
    height:Size.IMAGE_ICON,
    width:Size.IMAGE_ICON,
    alignSelf:'flex-start',
    marginTop:Size.MARGIN_CAMERA,
    marginLeft:Size.MARGIN_CAMERA
  },
  Title: {
    height:Size.TITLE_SELFIE_H,
    width:Size.DEVICE_WIDTH,
    backgroundColor:'rgba(0,0,0,0.8)',
    paddingLeft:Size.PADDING_CAMERA,
    paddingRight:Size.PADDING_CAMERA
  },
  TextTitle: {
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Regular'
  },
  SideSelfieContainer: {
    flexDirection:'row',
    width:Size.DEVICE_WIDTH,
    justifyContent:'space-between'
  },
  SideSelfie: {
    height:Size.SIDE_SELFIE_H,
    width:Size.SIDE_SELFIE_W,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Mid: {
    height:Size.MID_SELFIE_H,
    width:Size.DEVICE_WIDTH,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  SideKTPContainer: {
    flexDirection:'row',
    width:Size.DEVICE_WIDTH,
    justifyContent:'space-between'
  },
  SideKTP: {
    height:Size.SIDE_KTP_H,
    width:Size.SIDE_KTP_W,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Footer: {
    height:Size.FOOTER_SELFIE_H,
    width:Size.DEVICE_WIDTH,
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  Button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:Size.PADDING
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
