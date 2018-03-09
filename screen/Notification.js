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
            <View style={styles.NotifSign}/>
          </View>
          <View style={{width:310}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: 210}}>
              <Text style={styles.NotifTitle}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:'flex-end', width:80, marginRight:20}}>
              <Text style={styles.NotifTime}>2 hr ago</Text>
            </View>
            </View>
            <Text style={styles.NotifDetail}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
            <View style={styles.NotifSign}/>
          </View>
          <View style={{width:310}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: 210}}>
              <Text style={styles.NotifTitle}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:'flex-end', width:80, marginRight:20}}>
              <Text style={styles.NotifTime}>2 hr ago</Text>
            </View>
            </View>
            <Text style={{fontSize:16, color:'#58595B'}}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50, alignItems:'center'}}>
            <View style={{width:10, height:10, marginTop:10, borderRadius:5, backgroundColor:'#FFFFFF'}}/>
          </View>
          <View style={{width:310}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: 210}}>
              <Text style={styles.NotifTitle}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:'flex-end', width:80, marginRight:20}}>
              <Text style={styles.NotifTime}>1 week ago</Text>
            </View>
            </View>
            <Text style={{fontSize:16, color:'#58595B'}}>Your top up of Rp100.000,00 has been successfully received </Text>
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
  NotifTitle: {
    fontSize:16,
    color:'#58595B',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  NotifTime: {
    fontSize:14,
    color:'color: rgba(0,0,0,0.20)',
    textAlign:'right',
    fontFamily: 'Roboto-Light'
  },
  NotifDetail: {
    fontSize:16,
    color:'#58595B',
    fontFamily:'SourceSansPro-Light'
  },
  Line: {
    width: 290,
    height:1,
    marginLeft:50,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:20,
    marginBottom:20
  },
  NotifSign: {
    width:10,
    height:10,
    marginTop:10,
    borderRadius:5,
    backgroundColor:'#DE6157'
  }
});
