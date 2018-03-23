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
export default class MainMenu extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={styles.ContentHeader}>
          <Text style={styles.ContentTitle}>Retirement</Text>
          <Image source={require('./asset/ic_retirement.png')} style={{flex:1,width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
        </LinearGradient>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#8FC196', '#00A99E']} style={styles.ContentHeader}>
          <Text style={styles.ContentTitle}>Life Improvement</Text>
          <Image source={require('./asset/ic_life.png')} style={{flex:1,width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
        </LinearGradient>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('Option')} >
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#F5841F', '#DE6157']} style={styles.ContentHeader}>
          <Text style={styles.ContentTitle}>Asset Improvement</Text>
          <Image source={require('./asset/ic_asset.png')} style={{flex:1,width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
        </LinearGradient>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
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
    padding:Size.PADDING_MID
  },
  ContentHeader: {
    borderTopLeftRadius: Size.PADDING_SMALL,
    borderTopRightRadius: Size.PADDING_SMALL,
    flexDirection:'row',
    height:Size.CONTENT_HEADER, width: Size.PAGER_WIDTH,
    padding: Size.PADDING_MID
  },
  ContentBox:{
    height:Size.CONTENT_HEIGHT,
    width: Size.PAGER_WIDTH,
    elevation:Size.PADDING_SMALL,
    marginBottom:Size.PADDING/2,
    borderRadius:Size.PADDING_SMALL,
    backgroundColor: 'white'
  },
  ContentText: {
    fontSize:Size.TEXT_DETAILL,
    color:'#58595B',
    marginLeft:Size.PADDING_MID,
    fontFamily:'Roboto-Regular'
  },
  ContentTitle: {
    flex:4,
    fontSize:Size.TEXT_LABELL,
    color:'white',
    fontFamily:'TitilliumWeb-Bold'
  }
})
