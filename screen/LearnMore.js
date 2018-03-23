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
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class LearnMore extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={styles.Container}>
      <View>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:Size.TEXT_TITLE, marginTop:Size.PADDING_MID, fontFamily:'Roboto-Bold'}}>Rp200.000,00</Text>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:Size.TEXT_LABELS, marginBottom:Size.PADDING_MID, fontFamily:'SourceSansPro-Regular'}}>Your monthly installment saving</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1, elevation:Size.BORDER, flexDirection:'column', backgroundColor:'white', margin:Size.PADDING_SMALL, justifyContent:'center', alignItems:'center', padding:Size.PADDING_MID}}>
          <Text style={{fontSize:Size.TEXT_TITLEM, fontFamily:'TitilliumWeb-Bold', color:'#3393D0'}}>Xdana</Text>
          <Text style={{fontSize:Size.TEXT_TITLEXL, fontFamily:'Roboto-Medium', color:'#3393D0', marginTop:Size.PADDING_MID}}>0%</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Free tax</Text>
          <Text style={{fontSize:Size.TEXT_DETAILM,fontFamily:'Roboto-Black',color:'#3393D0',marginTop:Size.PADDING_MID}}>Up to 21%</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Interest</Text>
        </View>
        <View style={{flex:1, elevation:Size.BORDER, flexDirection:'column', backgroundColor:'white', margin:Size.PADDING_SMALL, justifyContent:'center', alignItems:'center', padding:Size.PADDING_MID}}>
          <Text style={{fontSize:Size.TEXT_TITLEM,fontFamily:'TitilliumWeb-Bold', color:'#3393D0'}}>Bank</Text>
          <Text style={{fontSize:Size.TEXT_TITLEXL, fontFamily:'Roboto-Medium', color:'#3393D0', marginTop:Size.PADDING_MID}}>10%</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Free tax</Text>
          <Text style={{fontSize:Size.TEXT_DETAILM,fontFamily:'Roboto-Black',color:'#3393D0', marginTop:Size.PADDING_MID}}>2%</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Interest</Text>
        </View>
      </View>
      <View>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:Size.TEXT_LABELS, marginTop:Size.PADDING_MID, fontFamily:'SourceSansPro-Regular'}}>By the end of the year, you will save</Text>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:Size.TEXT_TITLEE, marginBottom:Size.PADDING_MID, fontFamily:'Roboto-Regular'}}>Rp1.000.000,00</Text>
      </View>
      </LinearGradient>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    flex: 1,
    flexDirection:'column',
    paddingLeft:Size.PADDING_MID,
    paddingRight:Size.PADDING_MID,
    paddingTop:Size.CONTENT_HEADER,
  },
  ContentBox:{
    height:Size.OPTION_HEIGHT,
    width: Size.PAGER_WIDTH,
    elevation:Size.BORDER,
    marginBottom:Size.PADDING_SMALL,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:Size.BORDER
  }
})
