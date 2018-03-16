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
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class About extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={styles.Container}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./asset/ic_logo_white.png')} style={{marginBottom:20,width: 100, height: 100}}/>
        </View>
        <View style={{flexDirection:'row', marginTop:10}}>
          <Text style={styles.Detail}>Version</Text>
          <Text style={styles.Details}>1.01</Text>
        </View>
        <Text style={styles.Check}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.
        </Text>
        <Text style={styles.Label}>Email : cs@xdana.com</Text>
        <View style={styles.Line}/>
        <Text style={styles.Label}>Terms & Condition</Text>
        <View style={styles.Line}/>
        <Text style={styles.Label}>Privacy policy</Text>
        <View style={styles.Line}/>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 80,
    paddingRight:24,
    backgroundColor:'#3393D0'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B'
  },
  Label: {
    color:'#FFFFFF',
    fontSize:16,
    marginTop:32,
    fontFamily:'TitilliumWeb-Regular'
  },
  Detail: {
    textAlign: 'left',
    color: '#FFFFFF',
    marginRight:200,
    fontSize:16,
    fontFamily:'TitilliumWeb-Bold'
  },
  Details: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize:14,
    fontFamily:'TitilliumWeb-Regular'
  },
  Check: {
    color:'#FFFFFF',
    fontSize:14,
    marginTop:32,
    fontFamily:'SourceSansPro-Regular'
  },
  Line: {
    width: 280,
    height:1,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:8
  }
});
