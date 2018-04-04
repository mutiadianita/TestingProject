import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class Home extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:6}}>
          <View style={styles.Header}>
            <TouchableOpacity onPress = {() => navigate('Profile')}>
              <Image source={{uri:'ic_account'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
            </TouchableOpacity>
              <Text style={styles.HeaderText}>Xdana</Text>
            <TouchableOpacity onPress = {() => navigate('Notification')}>
              <Image source={{uri:'ic_notif_white'}} resizeMode="contain" style={{marginLeft:Size.IMAGE_STEP,width: Size.PADDING, height: Size.PADDING}}/>
            </TouchableOpacity>
          </View>
          <View style={{padding: Size.PADDING_MID}}>
            <Text style={{fontSize:Size.TEXT_TITLEL, color:'white', fontFamily:'TitilliumWeb-SemiBold'}}>Hi Stanley,</Text>
            <Text style={{fontSize:Size.TEXT_LABELS, color:'#FEFEFE',marginTop:Size.PADDING_SMALL, fontFamily: 'Roboto-Regular'}}>Start investing now and reach your dream.</Text>
          </View>
          <View style={styles.Box}>
            <View>
              <Text style={styles.Title}>Create a New Dream</Text>
              <Text style={styles.Subtitle}>Tap here to create a new Dream</Text>
            </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
              style={styles.Button}
              onPress = {() => navigate('MainMenu')}>
              <Image source={{uri:'ic_add_white'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
            </TouchableOpacity>
            </View>
          </View>
          </LinearGradient>
        <View style={{flex:7, backgroundColor:'white', paddingTop:Size.TEXT_TITLEM, paddingLeft:Size.PADDING_MID}}>
          <Text style={{fontSize:Size.TEXT_LABELM, color:'#4D4D4C', fontFamily:'TitilliumWeb-SemiBold'}}>Knowledge Center</Text>
          <View style={{flexDirection:'row', flex:1}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress = {() => navigate('WhyInvest')}>
              <View style={styles.ContentBox}>
                <Image source={{uri:'chess'}} resizeMode="cover" style={styles.ImageBox}/>
                <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', margin:Size.PADDING_SMALL}}>Why is it better to start investing early?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
              <View style={styles.ContentBox}>
                <Image source={{uri:'watch'}} resizeMode="cover" style={styles.ImageBox}/>
                <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', margin:Size.PADDING_SMALL}}>Healthcare Costs Can Add Up in Retirement</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
            <View style={styles.ContentBox}>
              <Image source={{uri:'watch'}} resizeMode="cover" style={styles.ImageBox}/>
              <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', margin:Size.PADDING_SMALL}}>Healthcare Costs Can Add Up in Retirement</Text>
            </View>
            </TouchableOpacity>
          </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'white'
  },
  Box: {
    flexDirection:'row',
    height: Size.BOX_HEIGHT,
    width:Size.PAGER_WIDTH,
    marginLeft:Size.PADDING_MID,
    borderRadius:Size.PADDING_SMALL,
    backgroundColor:'white',
    elevation:Size.ELEVATION,
    padding:Size.PADDING_SMALL
  },
  Title: {
    fontSize:Size.TEXT_LABELL,
    color:'#58595B',
    fontFamily:'TitilliumWeb-Bold'
  },
  Subtitle: {
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    fontFamily:'Roboto-Regular'
  },
  Button:{
    marginLeft:Size.PADDING_MID,
    width: Size.PADDING_LONG,
    height: Size.PADDING_LONG,
    borderRadius:Size.PADDING_MID,
    backgroundColor:'#00A99E',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  },
  Header: {
    paddingLeft: Size.PADDING_MID,
    paddingTop:Size.PADDING_MID,
    paddingRight:Size.PADDING_MID,
    flexDirection:'row'
  },
  HeaderText: {
    marginLeft:Size.PADDING_MID,
    fontSize:Size.TEXT_LABELL,
    color:'white',
    fontFamily:'TitilliumWeb-Bold'
  },
  ContentBox: {
    marginTop:Size.PADDING_MID,
    marginRight:Size.PADDING_MID,
    width:Size.IMAGE_NW,
    height:Size.CBOX_HEIGHT,
    elevation:Size.ELEVATION,
    backgroundColor:'white',
    borderRadius:Size.PADDING_SMALL
  },
  ImageBox: {
    width:Size.IMAGE_NW,
    height:Size.IMAGE_NH,
    borderTopLeftRadius:Size.PADDING_SMALL,
    borderTopRightRadius:Size.PADDING_SMALL
  }
});
