'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image
}  from 'react-native';

const util = require('util');
export default class WhyInvest extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <View>
      <ImageBackground source={require('./images/chess.jpg')} style={styles.HeaderImage}>
      <Image  source={require('./asset/ic_back_black.png')} style={styles.BackButton}/>
      <Text style={styles.HeaderTitle}>Why Invest?</Text>
      <Text style={styles.HeaderDetail}>Xdana is the first independent online investment adviser in Indonesia.</Text>
      </ImageBackground>
      </View>
        <Text style={styles.Title}>Invest vs Savings
        </Text>
        <Text style={styles.Label}>
        Xdana provides its customers with the opportunity to make regular monthly investments of just IDR 100,000 in Indonesia’s best mutual funds</Text>
        <View style={{marginLeft:24, height:292, width:312, backgroundColor:'white', elevation:4}}>
          <View style={{ height:72, width:312, backgroundColor:'#3393D0', alignItems:'center'}}>
            <View style={{flexDirection:'row', marginTop:10}}>
              <Text style={{color:'#FFFFFF', marginRight:50, fontFamily:'Roboto-Regular'}}>Monthly Investment</Text>
              <Text style={{color:'#FFFFFF', fontWeight:'bold', fontFamily:'Roboto-Medium'}}>Rp100.000,00</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', padding:16}}>
            <Text style={styles.Year}>In 1 year</Text>
            <Text style={styles.Money}>Rp1.000.000,00</Text>
          </View>
          <View style={{flexDirection:'row', padding:16}}>
            <Text style={styles.Year}>In 5 year</Text>
            <Text style={{color:'#58595B', fontWeight:'bold'}}>Rp3.300.000,00</Text>
          </View>
          <View style={{flexDirection:'row', padding:16}}>
            <Text style={styles.Year}>In 5 year</Text>
            <Text style={{color:'#58595B', fontWeight:'bold'}}>Rp6.000.000,00</Text>
          </View>
          <View style={{flexDirection:'row', padding:16}}>
            <Text style={styles.Year}>In 10 year</Text>
            <Text style={{color:'#58595B', fontWeight:'bold'}}>Rp14.000.000,00</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#FFFFFF'
  },
  Title: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'left',
    color: '#58595B',
    marginLeft:24,
    marginTop:8,
    fontFamily: 'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    fontSize:16,
    color: '#58595B',
    marginTop: 8,
    marginLeft: 24,
    marginRight:22,
    marginBottom:17,
    fontFamily: 'Roboto-Regular'
  },
  Year: {
    color:'#58595B',
    width:180,
    fontFamily:'Roboto-Regular'
  },
  Money: {
    color:'#58595B',
    fontWeight:'bold',
    fontFamily:'Roboto-Medium'
  },
  HeaderImage:{
    alignItems:'flex-start',
    width: 360,
    height: 181
  },
  BackButton: {
    alignItems:'flex-start',
    marginTop:42,
    marginLeft:20,
    marginBottom:20,
    width: 40,
    height: 40
  },
  HeaderTitle: {
    marginLeft:20,
    fontSize:20,
    fontWeight:'bold',
    color:'#FFFFFF',
    fontFamily:'TitilliumWeb-Bold'
  },
  HeaderDetail: {
    marginLeft:20,
    fontSize:16,
    color:'#FFFFFF'
  }
});
