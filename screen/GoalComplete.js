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
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{paddingTop:50, flex:7, flexDirection:'column'}}>
        <View style={{flex:7,justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./asset/graphic_congratulate_white.png')} style={{ width: 120, height:120, marginBottom:20}}/>
          <Text style={{fontSize:32,fontFamily:'TitilliumWeb-Bold',color:'#FFFFFF'}}>Congratulation!</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Light',color:'#FFFFFF'}}>You have achieved your dream for:</Text>
          <Text style={{fontSize:20,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>New House</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Light',color:'#FFFFFF'}}>Achieved </Text>
          <Text style={{fontSize:24,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>Rp 201.000.000,00</Text>
          <Text style={{fontSize:14,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>out of Rp200.000.000,00</Text>
        </View>
        <View style={{flex:1,justifyContent:'center', alignItems:'center',height:40, backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
          <Text style={{color:'white',fontFamily:'TitilliumWeb-Bold', fontSize:14}}>View detail</Text>
        </View>
      </LinearGradient>
      <View style={{flex:3, backgroundColor:'white', justifyContent:'center',alignItems:'center', elevation:3}}>
        <Text style={{fontFamily:'TitilliumWeb-Regular',textAlign:'center', width:200,fontSize:14,color:'#58595B'}}>I’m done viewing this dream. Delete this dream from my list.</Text>
        <View style={{borderWidth:3, borderColor:'#3393D0', height:40,width:150, marginTop:20}}>
          <TouchableOpacity onPress = {() => navigate('DeleteDream')}>
            <Text style={{color:'#3393D0', fontSize:18, textAlign:'center', fontFamily:'TitilliumWeb-SemiBold'}}> DELETE </Text>
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
