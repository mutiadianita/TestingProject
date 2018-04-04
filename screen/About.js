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
          <Image source={{uri:'ic_logo_white'}} resizeMode="contain" style={{marginBottom:Size.PADDING_MID,width: Size.DELETE_HEIGHT, height: Size.DELETE_HEIGHT}}/>
        </View>
        <View style={{flexDirection:'row', marginTop:Size.PADDING_SMALL}}>
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
    paddingLeft: Size.PADDING_LONG,
    paddingRight: Size.PADDING_LONG,
    paddingTop: Size.PADDING_LONG*2,
    paddingRight:Size.PADDING,
    backgroundColor:'#3393D0'
  },
  title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    marginRight:Size.PADDING,
    marginLeft:Size.PADDING,
    color: '#58595B'
  },
  Label: {
    color:'#FFFFFF',
    fontSize:Size.TEXT_LABELS,
    marginTop:Size.PADDING,
    fontFamily:'TitilliumWeb-Regular'
  },
  Detail: {
    textAlign: 'left',
    color: '#FFFFFF',
    marginRight:Size.IMAGE_NW,
    fontSize:Size.TEXT_LABELS,
    fontFamily:'TitilliumWeb-Bold'
  },
  Details: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'TitilliumWeb-Regular'
  },
  Check: {
    color:'#FFFFFF',
    fontSize:Size.TEXT_DETAILL,
    marginTop:Size.PADDING,
    fontFamily:'SourceSansPro-Regular'
  },
  Line: {
    width: Size.PICKER_WIDTH,
    height:1,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:Size.PADDING_SMALL
  }
});
