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
const util = require('util');
export default class TopUp_Payment extends Component {
  render() {
    console.log('this.props.navigation =' + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
    <View style={styles.Container}>
      <Text style={{color:'#58595B', fontSize:14, marginBottom:20, fontFamily:'SourceSansPro-Light'}}>Choose top up method to reach your dream faster. </Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('TopUp_Process')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Bank transfer</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('TopUp_Process')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>BCA Klikpay</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('TopUp_Process')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Credit Card</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    flexDirection:'column',
    padding:20
  },
  ContentBox:{
    height:80,
    width: 320,
    elevation:3,
    marginBottom:10,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:3
  },
  ContentText: {
    fontSize:14,
    color:'#58595B',
    marginLeft:20,
    marginBottom:20
  },
  ContentTitle: {
    flex:4,
    fontSize:22,
    color:'#58595B',
    fontFamily:'TitilliumWeb-Bold',
    marginLeft:20,
    marginTop:20
  },
  Flag: {
    height:80,
    width: 10,
    backgroundColor: '#58595B',
    borderTopLeftRadius:3,
    borderBottomLeftRadius:3
   }
})
