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
      <Text style={{color:'#58595B', fontSize:Size.TEXT_DETAILL, marginBottom:Size.PADDING_MID, fontFamily:'SourceSansPro-Light'}}>Choose top up method to reach your dream faster. </Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('TopUp_Process')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Bank transfer</Text>
        </View>
        <Image source={{uri: 'ic_next_black'}} resizeMode="contain" style={styles.NextIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('TopUp_Process')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>BCA Klikpay</Text>
        </View>
        <Image source={{uri: 'ic_next_black'}} resizeMode="contain" style={styles.NextIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('TopUp_Process')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Credit Card</Text>
        </View>
        <Image source={{uri: 'ic_next_black'}} resizeMode="contain" style={styles.NextIcon}/>
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
  ContentBox:{
    height:Size.OPTION_HEIGHT,
    width: Size.PAGER_WIDTH,
    elevation:Size.BORDER,
    marginBottom:Size.PADDING_SMALL,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:Size.PADDING_SMALL
  },
  ContentText: {
    fontSize:Size.TEXT_DETAILL,
    color:'#58595B',
    marginLeft:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  ContentTitle: {
    flex:4,
    fontSize:Size.TEXT_TITLES,
    color:'#58595B',
    fontFamily:'TitilliumWeb-Bold',
    marginLeft:Size.PADDING_MID,
    marginTop:Size.PADDING_MID
  },
  Flag: {
    height:Size.OPTION_HEIGHT,
    width: Size.PADDING_SMALL,
    backgroundColor: '#58595B',
    borderTopLeftRadius:Size.PADDING_SMALL,
    borderBottomLeftRadius:Size.PADDING_SMALL
  },
  NextIcon: {
    alignItems:'center',
    marginTop:Size.PADDING,
    marginLeft:Size.PADDING_LONG,
    marginBottom:Size.PADDING,
    width: Size.TEXT_TITLEM,
    height: Size.TEXT_TITLEM,
    marginRight:Size.PADDING_SMALL
  }
})
