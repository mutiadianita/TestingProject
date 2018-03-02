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

        <Text style={styles.Title}>Enter your one-time top up amount to reach your dream faster.</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Top up detail
        </Text>
        </View>
        <Text style={styles.Label}>IDR amount</Text>
        <TextInput
        style={{marginLeft:65,width: 250, color:"black", fontSize:28}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        keyboardType={"numeric"}
        />
        </ScrollView>
        <View style={{marginBottom:40,marginTop:20,justifyContent:"center", alignItems:"center"}}>
        <View style={{width:300}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginBottom:30, marginLeft:230, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("TopUp_Payment")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:12
  }
});
