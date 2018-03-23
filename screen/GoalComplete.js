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
export default class GoalComplete extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
    <View style={styles.Container}>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{paddingTop:Size.DELETE_WIDTH, flex:7, flexDirection:'column'}}>
        <View style={{flex:7,justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./asset/graphic_congratulate_white.png')} style={{ width: Size.MARGIN_LONG, height:Size.MARGIN_LONG, marginBottom:Size.PADDING_MID}}/>
          <Text style={{fontSize:Size.TEXT_TITLE,fontFamily:'TitilliumWeb-Bold',color:'#FFFFFF'}}>Congratulation!</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Light',color:'#FFFFFF'}}>You have achieved your dream for:</Text>
          <Text style={{fontSize:Size.TEXT_LABELL,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>New House</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Light',color:'#FFFFFF'}}>Achieved </Text>
          <Text style={{fontSize:Size.TEXT_TITLEM,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>Rp 201.000.000,00</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>out of Rp200.000.000,00</Text>
        </View>
        <TouchableOpacity onPress = {() => navigate('GoalCompleteDetail')}>
          <View style={{flex:1,justifyContent:'center', alignItems:'center',height:Size.PADDING_LONG, backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
            <Text style={{color:'white',fontFamily:'TitilliumWeb-Bold', fontSize:Size.TEXT_DETAILL}}>View detail</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{flex:3, backgroundColor:'white', justifyContent:'center',alignItems:'center', elevation:3}}>
        <Text style={{fontFamily:'TitilliumWeb-Regular',textAlign:'center', width:Size.IMAGE_NW,fontSize:Size.TEXT_DETAILL,color:'#58595B'}}>I’m done viewing this dream. Delete this dream from my list.</Text>
        <View style={{borderWidth:3, borderColor:'#3393D0', height:Size.PADDING_LONG,width:Size.DELETE_WIDTH*3, marginTop:Size.PADDING_MID}}>
          <TouchableOpacity onPress = {() => navigate('DeleteDream')}>
            <Text style={{color:'#3393D0', fontSize:Size.TEXT_LABELM, textAlign:'center', fontFamily:'TitilliumWeb-SemiBold'}}> DELETE </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    flexDirection:'column'
  }
})
