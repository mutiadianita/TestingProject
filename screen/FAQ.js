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
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
          <Image source={require('./asset/ic_faq_decrease.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={styles.Question}>Apa yang dimaksud dengan reksa dana?</Text>
              <Text backfaceVisibility={'visible'} style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={styles.Question}>Siapa yang bisa berinvestasi di reksa dana?</Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={styles.Question}>Manfaat investasi di reksa dana?</Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={styles.Question}>Apa saja jenis - jenis reksa dana?</Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
          <Image source={require('./asset/ic_faq_increase.png')} style={{width: 24, height: 24}}/>
          </View>
          <View style={{width:310}}>
              <Text style={styles.Question}>Apa itu manajer investasi?</Text>
          </View>
        </View>
        <View style={styles.Line}/>
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
  Question: {
    fontSize:14,
    color:'#000000',
    fontFamily:'Roboto-Regular'
  },
  Answer: {
    fontSize:16,
    color:'#58595B',
    marginTop:16,
    fontFamily:'SourceSansPro-Light'
  },
  Line: {
    width: 290,
    height:1,
    marginLeft:50,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:20,
    marginBottom:20
  }
});
