import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ViewPagerAndroid,
  TouchableOpacity
}  from 'react-native';
const util = require('util');
export default class RiskResult extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1, backgroundColor:'#3393D0'}}>
      <ViewPagerAndroid pageMargin={10} style={{flex: 1, margin:30}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Moderate Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>Normal risk</Text>
          </View>
          <Text style={styles.Type}>Moderate</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Aggresive</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Moderate Aggresive</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
      </ViewPagerAndroid>
      <View style={{justifyContent:'center', alignItems:'center', width: 320, height: 50, padding:10, marginLeft:20, marginBottom: 30}}>
        <Text style={{color:'white', fontFamily:'Roboto-Regular'}}> Swipe to see other Investment Strategies</Text>
      </View>
    </View>

    );
  }
}
const styles = StyleSheet.create({
  Pager:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'white',
    marginLeft:20,
    borderRadius:3,
    padding:20
  },
  Risk:{
    fontSize: 24,
    color: '#58595B',
    fontFamily:'TitilliumWeb-Bold'
  },
  Recommended: {
    fontSize: 12,
    color: '#DE6157',
    textAlign:'right',
    marginTop:10,
    marginLeft:80,
    fontFamily:'Roboto-Black'
  },
  Type: {
    fontSize: 16,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Detail: {
    fontSize: 16,
    color: '#58595B',
    marginTop: 150,
    fontFamily:'SourceSansPro-Regular'
  },
  TextButton: {
    textAlign:'center',
    fontSize:18,
    color:'#FFFFFF',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Button: {
    borderRadius:2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#3393D0',
    width: 260,
    height:48,
    marginBottom: 30,
    marginTop:30
  }
})
