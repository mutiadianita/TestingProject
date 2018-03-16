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
export default class TopUp_Amount extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Detail}>Enter your one-time top up amount to reach your dream faster.</Text>
        <ScrollView>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
        <Text style={styles.Title}>Top up detail
        </Text>
        </View>
        <Text style={styles.Label}>IDR amount</Text>
        <TextInput
        style={{marginLeft:65,width: 250, color:'black', fontSize:28, fontFamily:'TitilliumWeb-SemiBold'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        keyboardType={'numeric'}
        />
        </ScrollView>
        <View style={{marginBottom:40,marginRight:30,justifyContent:'flex-end', alignItems:'flex-end'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('TopUp_Payment')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
          </TouchableOpacity>
        </View>
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
  Detail: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B',
    fontFamily:'SourceSansPro-Light'
  },
  Title: {
    fontSize:16,
    fontFamily: 'TitilliumWeb-Bold',
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:12,
    fontFamily:'Roboto-Light'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
