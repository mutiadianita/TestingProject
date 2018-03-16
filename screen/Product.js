import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  CheckBox,
  TouchableOpacity,
  Picker,
  ImageBackground,
  Slider
}  from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
const percentage= 0.25;
export default class GoalAhead extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <ScrollView>
        <View style={{flex: 1}}>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']}>
          <View style={styles.Header}>
            <TouchableOpacity onPress = {() => navigate('Profile')}>
              <Image source={require('./asset/ic_close_white.png')} style={{width: 24, height: 24}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Notification')}>
              <Image source={require('./asset/ic_more_white.png')} style={{marginLeft:280,width: 24, height: 24}}/>
            </TouchableOpacity>
          </View>
          <Text style={{fontFamily:'TitilliumWeb-Bold',fontSize:24,color:'#FFFFFF', marginLeft:16}}> Maybank Fixed income</Text>
          <View style={{height:100, marginTop:200, alignItems:'flex-start', flexDirection:'row'}}>
          <View style={{height:72, width:125, padding:8, backgroundColor:'rgba(0,0,0,0.2)', marginLeft:8}}>
            <Text style={{fontSize:12, fontFamily:'Roboto-Regular',color:'#FFFFFF'}}>Current NAV:</Text>
            <Text style={{fontSize:20, fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>Rp5.359,21</Text>
            <Text style={{fontSize:12, fontFamily:'Roboto-Regular',color:'#FFFFFF'}}>as of 17 Nov 2017</Text>
          </View>
          <View style={{height:72, width:72, padding:8, backgroundColor:'rgba(0,0,0,0.2)', marginLeft:8}}>
            <View style={styles.Triangle}/>
            <Text style={{color:'#FFFFFF', fontSize:14, fontFamily:'Roboto-Medium'}}>+ 20%</Text>
            <Text style={{color:'#FFFFFF', fontSize:14, fontFamily:'Roboto-Medium'}}>+ 268.21</Text>
          </View>
          </View>
          </LinearGradient>
        </View>
        <View style={{flexDirection:'row', marginTop:20}}>
          <Image source={require('./asset/ic_percentage.png')} style={{marginLeft:30,width: 30, height: 30}}/>
          <Text style={styles.Title}>Funds Distribution</Text>
        </View>
        <View style={{flexDirection:'row', marginLeft:65, marginRight:30}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
            <Text style={styles.ChartText}>Funds</Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.5} size={80} style={{marginRight:10}}/>
            <Text style={styles.ChartText}>Bonds </Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
            <Text style={styles.ChartText}>Shares</Text>
          </View>
        </View>
        <View style={styles.LongLine}/>
        <View style={{marginLeft:30,flexDirection:'row'}}>
          <Image source={require('./asset/ic_top5.png')} style={{width: 30, height: 30}}/>
          <Text style={styles.Title}>Top 5</Text>
        </View>
        <View style={{width:320, marginBottom:20}}>
          <Text style={styles.Company}>Arwana Citramulia Tbk, PT</Text>
          <Text style={styles.Company}>Puradelta lestari Tbk, PT</Text>
          <Text style={styles.Company}>SBSN PBS012</Text>
          <Text style={styles.Company}>Telekomunikasi Tbk, PT</Text>
          <Text style={styles.Company}>Unilever Indonesia Tbk, PT</Text>
        </View>
        <View style={styles.LongLine}/>
        <View style={{flexDirection:'row', marginTop:20}}>
          <Image source={require('./asset/ic_doc.png')} style={{marginLeft:30,width: 30, height: 30}}/>
          <Text style={styles.Title}>About</Text>
        </View>
        <Text style={styles.AboutTitle}>Fund Type</Text>
        <Text style={styles.AboutDetails}>Maybank Fixed Income</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Bank Custody</Text>
        <Text style={styles.AboutDetails}>Maybank</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Launch Date</Text>
        <Text style={styles.AboutDetails}>24 Jan 2011</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Currency</Text>
        <Text style={styles.AboutDetails}>IDR</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Custody Cost</Text>
        <Text style={styles.AboutDetails}>Up to 0.25% / year</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Fund Manager Cost</Text>
        <Text style={styles.AboutDetails}>Up To 0.15% / year</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Assets Under Management</Text>
        <Text style={styles.AboutDetails}>Rp 2.21 Billion</Text>
        <View style={styles.Line}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'white',
  },
  Title: {
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Header: {
    paddingLeft: 20,
    paddingTop:20,
    paddingRight:20,
    flexDirection:'row'
  },
  LongLine: {
    width: 360,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:20,
    marginBottom:20
  },
  Line: {
    width: 288,
    height:1,
    marginLeft:56,
    backgroundColor:'#D8D8D8',
    marginBottom:20,
    marginRight:20
  },
  Company: {
    marginLeft:65,
    fontSize:16,
    color:'#58595B',
    fontFamily:'Roboto-Regular'
  },
  AboutDetails: {
    fontFamily:'Roboto-Regular',
    fontSize:16,
    marginLeft:65,
    color:'rgba(0,0,0,0.60)'
  },
  AboutTitle: {
    fontFamily:'Roboto-Light',
    fontSize:14,
    marginLeft:65,
    color:'rgba(88,89,91,0.80)'
  },
  ButtonConfirm: {
    backgroundColor:'#3393D0',
    borderRadius:4,
    width: 280,
    height: 40,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:14,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:24
  },
  Triangle: {
  width: 0,
  height: 0,
  borderLeftWidth: 12,
  borderRightWidth: 12,
  borderBottomWidth: 15,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#5DC6C9',
  marginBottom:4
}
});
