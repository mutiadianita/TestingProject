import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity
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
          <View style={{width:30, paddingTop:13}}>
            <Text style={styles.Label}>+62</Text>
          </View>
          <TextInput
          style={{width: 275, color:'#58595B', fontFamily:'Roboto-Bold', fontSize:16}}
          placeholderTextColor='#58595B'
          underlineColorAndroid='#58595B'
          autoFocus={true}
          keyboardType='numeric'
          />
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:30}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('SignUp_Verify')}>
            <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginTop:10, marginLeft:25}}>></Text>
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
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginTop: 20,
    backgroundColor:'#3393D0',
    elevation:5
  },
  Label: {
    color:'#3393D0',
    fontSize:16,
    fontFamily:'Roboto-Bold'
  }
});
