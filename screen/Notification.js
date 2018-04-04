import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  StyleSheet,
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
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
            <View style={styles.NotifSign}/>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: Size.IMAGE_NW}}>
              <Text style={styles.NotifTitle}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:'flex-end', width:Size.OPTION_HEIGHT, marginRight:Size.PADDING_MID}}>
              <Text style={styles.NotifTime}>2 hr ago</Text>
            </View>
            </View>
            <Text style={styles.NotifDetail}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
            <View style={styles.NotifSign}/>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: Size.IMAGE_NW}}>
              <Text style={styles.NotifTitle}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:'flex-end', width:Size.OPTION_HEIGHT, marginRight:Size.PADDING_MID}}>
              <Text style={styles.NotifTime}>2 hr ago</Text>
            </View>
            </View>
            <Text style={styles.NotifDetail}>Your top up of Rp100.000,00 has been successfully received </Text>
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
            <View style={{width:Size.PADDING_SMALL, height:Size.PADDING_SMALL, marginTop:Size.PADDING_SMALL, borderRadius:Size.PADDING_SMALL/2, backgroundColor:'#FFFFFF'}}/>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: Size.IMAGE_NW}}>
              <Text style={styles.NotifTitle}>One Time Top up Received </Text>
            </View>
            <View style={{alignItems:'flex-end', width:Size.OPTION_HEIGHT, marginRight:Size.PADDING_MID}}>
              <Text style={styles.NotifTime}>1 week ago</Text>
            </View>
            </View>
            <Text style={styles.NotifDetail}>Your top up of Rp100.000,00 has been successfully received </Text>
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
    paddingTop: Size.PADDING,
    backgroundColor:'white'
  },
  NotifTitle: {
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  NotifTime: {
    fontSize:Size.TEXT_DETAILL,
    color:'color: rgba(0,0,0,0.20)',
    textAlign:'right',
    fontFamily: 'Roboto-Light'
  },
  NotifDetail: {
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    fontFamily:'SourceSansPro-Light'
  },
  Line: {
    width: Size.BUTTON_WIDTH,
    height:1,
    marginLeft:Size.BUTTON_HEIGHT,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  NotifSign: {
    width:Size.PADDING_SMALL,
    height:Size.PADDING_SMALL,
    marginTop:Size.PADDING_SMALL,
    borderRadius:Size.PADDING_SMALL/2,
    backgroundColor:'#DE6157'
  }
});
