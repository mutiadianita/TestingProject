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
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:32, marginTop:20, fontFamily:'Roboto-Bold'}}>Rp200.000,00</Text>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:16, marginBottom:20, fontFamily:'SourceSansPro-Regular'}}>Your monthly installment saving</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1, elevation:3, flexDirection:'column', backgroundColor:'white', margin:10, justifyContent:'center', alignItems:'center', padding:20}}>
          <Text style={{fontSize:26, fontFamily:'TitilliumWeb-Bold', color:'#3393D0'}}>Xdana</Text>
          <Text style={{fontSize:40, fontFamily:'Roboto-Medium', color:'#3393D0', marginTop:20}}>0%</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Free tax</Text>
          <Text style={{fontSize:12,fontFamily:'Roboto-Black',color:'#3393D0',marginTop:20}}>Up to 21%</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Interest</Text>
        </View>
        <View style={{flex:1, elevation:3, flexDirection:'column', backgroundColor:'white', margin:10, justifyContent:'center', alignItems:'center', padding:20}}>
          <Text style={{fontSize:26,fontFamily:'TitilliumWeb-Bold', color:'#3393D0'}}>Bank</Text>
          <Text style={{fontSize:40, fontFamily:'Roboto-Medium', color:'#3393D0', marginTop:20}}>10%</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Free tax</Text>
          <Text style={{fontSize:12,fontFamily:'Roboto-Black',color:'#3393D0', marginTop:20}}>2%</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Regular', color:'#3393D0'}}>Interest</Text>
        </View>
      </View>
      <View>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:16, marginTop:20, fontFamily:'SourceSansPro-Regular'}}>By the end of the year, you will save</Text>
        <Text style={{textAlign:'center',color:'#FEFEFE', fontSize:28, marginBottom:20, fontFamily:'Roboto-Regular'}}>Rp1.000.000,00</Text>
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
    paddingLeft:20,
    paddingRight:20,
    paddingTop:100,
  },
  ContentBox:{
    height:80,
    width: 320,
    elevation:3,
    marginBottom:10,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:3
  }
})
