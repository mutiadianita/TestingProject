import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
}  from 'react-native';

export default class SignUp_Phone extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>
          Enter your Mobile number.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width:Size.PADDING_LONG, paddingTop:Size.PADDING/2}}>
            <Text style={styles.Label}>+62</Text>
          </View>
          <TextInput
          style={{width: Size.TI_PHONE, color:'#58595B', fontFamily:'Roboto-Bold', fontSize:Size.TEXT_LABELS}}
          placeholderTextColor='#58595B'
          underlineColorAndroid='#58595B'
          keyboardType='numeric'
          />
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:Size.PADDING_LONG}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('SignUp_Verify')}>
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
    paddingLeft: Size.PADDING,
    paddingRight: Size.PADDING,
    paddingTop: Size.PADDING_SMALL,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    marginTop: Size.PADDING_MID,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  },
  Label: {
    color:'#3393D0',
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Bold'
  }
});
