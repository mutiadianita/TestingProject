import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ViewPagerAndroid,
  Image,
  ImageBackground
}  from 'react-native';
import Size from "../style/Size";
import Orientation from 'react-native-orientation';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class Intro extends Component {
  componentDidMount () {
    Orientation.lockToPortrait();
  }

  componentWillUnmount () {
    Orientation.lockToPortrait();
  }
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ViewPagerAndroid style={styles.Pager} initialPage={0}>
        <View>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:1}}>
          <ImageBackground source={require('./asset/bg_xdana_logo.png')} style={styles.Pager}>
            <Text style={styles.Title}>Welcome to XDANA </Text>
            <Image source={require('./asset/ic_retirement.png')} style={{marginTop:Size.MARGIN_LONG, width:Size.BUTTON_HEIGHT, height:Size.BUTTON_HEIGHT}}/>
            <Text style={styles.Subtitle}>Retirement </Text>
            <Text style={styles.Details}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
            </ImageBackground>
          </LinearGradient>
        </View>
        <View>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#8FC196', '#00A99E']} style={{flex:1}}>
          <ImageBackground source={require('./asset/bg_xdana_logo.png')} style={styles.Pager}>
            <Text style={styles.Title}>Welcome to XDANA </Text>
            <Image source={require('./asset/ic_life.png')} style={{marginTop:Size.MARGIN_LONG, width:Size.BUTTON_HEIGHT, height:Size.BUTTON_HEIGHT}}/>
            <Text style={styles.Subtitle}>Life Improvement</Text>
            <Text style={styles.Details}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
            </ImageBackground>
          </LinearGradient>
        </View>
        <View>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#F5841F', '#DE6157']} style={{flex:1}}>
          <ImageBackground source={require('./asset/bg_xdana_logo.png')} style={styles.Pager}>
            <Text style={styles.Title}>Welcome to XDANA </Text>
            <Image source={require('./asset/ic_asset.png')} style={{marginTop:Size.MARGIN_LONG, width:Size.BUTTON_HEIGHT, height:Size.BUTTON_HEIGHT}}/>
            <Text style={styles.Subtitle}>Asset investment </Text>
            <Text style={styles.Details}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
            </ImageBackground>
          </LinearGradient>
        </View>
        </ViewPagerAndroid>
        <View style={{justifyContent:'flex-end', alignItems:'center', zIndex:2, position:'absolute',marginLeft:Size.PADDING, marginRight:Size.PADDING}}>
        <TouchableOpacity
        style={{width: Size.BUTTON_WIDTH, height:Size.BUTTON_HEIGHT, backgroundColor:'white', alignItems:'center', justifyContent:'center', elevation:3 , borderRadius:2}}
        onPress = {() => navigate('Login')}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',color:'#3393D0', fontSize:Size.TEXT_LABELM, textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{width: Size.BUTTON_WIDTH, height:Size.BUTTON_HEIGHT, marginBottom:Size.PADDING_LONG, marginTop:Size.PADDING_SMALL, backgroundColor:'rgba(0,0,0,0)', alignItems:'center', justifyContent:'center', elevation:3 }}
        onPress = {() => navigate('SignUp_Email')}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',color:'white', fontSize:Size.TEXT_LABELM, textAlign:'center'}}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    zIndex:0,
    position:'absolute',
    width:Size.DEVICE_WIDTH,
    height:Size.DEVICE_HEIGHT,
    backgroundColor:'#3393D0',
    justifyContent:'flex-end'
  },
  Pager:{
    flex: 1,
    zIndex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:Size.PADDING
  },
  Title: {
    fontSize: Size.TEXT_TITLEL,
    color: 'white',
    fontFamily: 'TitilliumWeb-Bold'
  },
  Subtitle: {
    fontSize: Size.TEXT_TITLES,
    color: 'white',
    marginTop: Size.PADDING_SMALL,
    fontFamily:'TitilliumWeb-Bold'
  },
  Details: {
    fontSize: Size.TEXT_LABELS,
    color: 'white',
    marginTop: Size.PADDING_MID,
    fontFamily:'Roboto-Light'
  }
});
