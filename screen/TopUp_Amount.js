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
        <Image source={{uri: 'ic_more_blue'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={styles.Title}>Top up detail
        </Text>
        </View>
        <Text style={styles.Label}>IDR amount</Text>
        <TextInput
        style={{marginLeft:Size.PADDING_CONFIRM,width: Size.CBOX_HEIGHT, color:'black', fontSize:Size.TEXT_TITLEE, fontFamily:'TitilliumWeb-SemiBold'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        keyboardType={'numeric'}
        />
        </ScrollView>
        <View style={{marginBottom:Size.PADDING_LONG,marginRight:Size.PADDING,justifyContent:'flex-end', alignItems:'flex-end'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('TopUp_Payment')}>
            <Image source={{uri: 'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
    paddingTop: Size.PADDING,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    marginRight:Size.PADDING,
    marginLeft:Size.PADDING,
    color: '#58595B',
    fontFamily:'SourceSansPro-Light'
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    fontFamily: 'TitilliumWeb-Bold',
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILM,
    fontFamily:'Roboto-Light'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.PADDING,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
