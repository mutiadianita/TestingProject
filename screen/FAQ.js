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
  Picker
}  from 'react-native';

const util = require('util');
export default class Notification extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
          <Image source={require('./asset/ic_faq_decrease.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={{fontSize:14, color:"#000000"}}>Apa yang dimaksud dengan reksa dana?</Text>
              <Text style={{fontSize:16, color:"#58595B", marginTop:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={{fontSize:14, color:"#000000"}}>Siapa yang bisa berinvestasi di reksa dana?</Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={{fontSize:14, color:"#000000"}}>Manfaat investasi di reksa dana?</Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={{fontSize:14, color:"#000000"}}>Apa saja jenis - jenis reksa dana?</Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        <View style={{flexDirection:"row"}}>
          <View style={{width: 50, alignItems:"center"}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={{fontSize:14, color:"#000000"}}>Apa itu manajer investasi?</Text>
          </View>
        </View>
        <View style={{width: 290, height:1, marginLeft:50, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 30,
    fontSize:12
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 30,
    fontSize:16
  },
  Check: {
    textAlign: 'left',
    color: 'rgba(88,89,91,0.60)',
    fontSize:14,
    marginLeft: 30,
    width:230,
    marginTop:20
  },
  Sublabel:{
    textAlign: 'left',
    color: 'rgba(0,0,0,0.60)',
    marginTop: 10,
    marginLeft: 30,
    fontSize:28
  },
  LabelBold:{
    textAlign: 'left',
    color: '#58595B',
    marginTop: 20,
    marginLeft: 30,
    fontSize:14
  }
});
