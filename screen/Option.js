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
export default class Option3 extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={{flex:1}}>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#F5841F', '#DE6157']} style={{flex:1}}>
      <View style={{flexDirection:'row', paddingTop:Size.PADDING, paddingLeft:Size.PADDING_SMALL, paddingRight:Size.PADDING}}>
      <Image source={require('./asset/ic_close_white.png')} style={{height: Size.PADDING_TI, width:Size.PADDING_TI}}/>
      <Text style={{fontSize:Size.TEXT_LABELL, fontFamily:'TitilliumWeb-Bold', color:'#FFFFFF', marginLeft:Size.PADDING_TI}}>Asset Improvement</Text>
      <Image source={require('./asset/ic_asset.png')} style={{height: Size.BUTTON_HEIGHT, width:Size.BUTTON_HEIGHT, marginLeft:Size.BUTTON_ROUND}}/>
      </View>
      </LinearGradient>
      <View style={styles.Container}>
      <Text style={{color:'#58595B', fontSize:Size.TEXT_DETAILL, marginBottom:Size.PADDING_MID, fontFamily:'Roboto-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Cars </Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_back_orange.png')} style={styles.BackIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>House </Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_back_orange.png')} style={styles.BackIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Phone</Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_back_orange.png')} style={styles.BackIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Other</Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_back_orange.png')} style={styles.BackIcon}/>
      </TouchableOpacity>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 3,
    flexDirection:'column',
    padding:Size.PADDING_MID
  },
  ContentBox:{
    height:Size.OPTION_HEIGHT,
    width: Size.PAGER_WIDTH,
    elevation:Size.BORDER,
    marginBottom:Size.PADDING_SMALL,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:Size.BORDER
  },
  ContentText: {
    fontSize:Size.TEXT_DETAILL,
    color:'#58595B',
    marginLeft:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID,
    fontFamily:'Roboto-Light'
  },
  ContentTitle: {
    flex:4,
    fontSize:Size.TEXT_LABELL,
    color:'#F5841F',
    marginLeft:Size.PADDING_MID,
    marginTop:Size.PADDING_SMALL,
    fontFamily:'TitilliumWeb-Bold'
  },
  Flag: {
    height:Size.OPTION_HEIGHT,
    width: Size.PADDING_SMALL,
    backgroundColor: '#F5841F',
    borderTopLeftRadius: Size.BORDER,
    borderBottomLeftRadius: Size.BORDER
  },
  BackIcon: {
    alignItems:'center',
    marginTop:Size.PADDING_MID,
    marginLeft:Size.PADDING_LONG,
    marginBottom:Size.PADDING_MID,
    width: Size.PADDING_LONG,
    height: Size.PADDING_LONG
  }
})
