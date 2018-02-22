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
      <View style={styles.container}>

        <Text style={styles.title}>
          Enter your Mobile number.
        </Text>
        <View style={{flexDirection: 'row'}}>
        <View style={{width:30, paddingTop:13}}>
        <Text style={{color:"#3393D0", fontWeight:"bold", fontSize:16}}>+62</Text>
        </View>
        <TextInput
        style={{width: 275, color:"#58595B", fontWeight:"bold", fontSize:16}}
        placeholderTextColor="#58595B"
        underlineColorAndroid="#58595B"
        autoFocus={true}
        keyboardType="numeric"
        />
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 100, marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("SignUp_Verify")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    color: '#58595B'
  }
});
