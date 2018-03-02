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
export default class Success extends Component {
  state = {answer: ''}
   updateAnswer = (answer) => {
      this.setState({ answer: answer })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <View>
      <ImageBackground source={require('./images/watch.jpg')} style={{alignItems:"flex-start",width: 360, height: 230}}>
      <Image  source={require('./asset/ic_back_black.png')} style={{alignItems:"flex-start",marginTop:42, marginLeft:20, marginBottom:20, width: 40, height: 40}}/>
      </ImageBackground>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Title}>Healthcare Costs can add up in Retirement
        </Text>
        <Text style={styles.Label}>
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus. Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
        </Text>
        </ScrollView>
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
    marginBottom: 5,
    color: '#58595B',
    marginLeft:24,
    marginTop:27
  },
  Label: {
    textAlign: 'left',
    fontSize:16,
    color: '#58595B',
    marginTop: 18,
    marginLeft: 24,
    marginRight:22,
    marginBottom:30
  }
});
