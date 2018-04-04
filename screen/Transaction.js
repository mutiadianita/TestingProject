'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
}  from 'react-native';

const util = require('util');
export default class Success extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
        <Text style={styles.Label}>
          Below it the list of transactions that you have done to reach your dream for a new house:
        </Text>
          <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
            <Image source={{uri: 'ic_bank'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.Title}>Your transaction history</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.HistoryTitle}>Monthly Saving</Text>
            <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
          </View>
          <Text style={styles.HistoryDate}>12 Sept 2017</Text>
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
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'

  },
  Label: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginLeft: Size.PADDING,
    marginRight: Size.BUTTON_ROUND,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  HistoryTitle: {
    fontFamily:'TitilliumWeb-SemiBold',
    fontSize:Size.TEXT_LABELS,
    marginLeft:Size.PADDING_CONFIRM,
    color:'#58595B'
  },
  HistoryAmount: {
    fontFamily:'Roboto-Light',
    fontSize:Size.TEXT_DETAILL,
    marginLeft:Size.PADDING_CONFIRML,
    color:'#8FC196'
  },
  HistoryDate: {
    fontFamily:'Roboto-Light',
    fontSize:Size.TEXT_DETAILL,
    color: 'rgba(0,0,0,0.40)',
    marginLeft:Size.PADDING_CONFIRM,
    marginTop:Size.PADDING_SMALL,
    marginRight:Size.PADDING,
    marginBottom:Size.PADDING_MID
  },
});
