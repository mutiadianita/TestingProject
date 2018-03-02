import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
  Image
}  from 'react-native';

const util = require('util');
export default class GoalAmount extends Component {
  state = {years: ''}
   updateYears = (years) => {
      this.setState({ years:years })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Enter your target amount and target year</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Dream Information</Text>
        </View>
        <Text style={styles.Label}>IDR Amount</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.Label}>Years</Text>
        <Picker style={styles.Picker} selectedValue = {this.state.years} onValueChange = {this.updateYears} mode='dropdown'>
           <Picker.Item label = "1" value = "1" />
           <Picker.Item label = "2" value = "2" />
           <Picker.Item label = "3" value = "3" />
           <Picker.Item label = "4" value = "4" />
           <Picker.Item label = "5" value = "5" />
        </Picker>
    </ScrollView>
    <TouchableOpacity
    style={styles.Button}
      onPress = {() => navigate("Strategy")}>
      <Text style={styles.ButtonText}>></Text>
    </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    marginTop:15,
    marginRight: 30,
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 35,
    fontSize:14
  },
  Picker: {
    marginLeft:27,
    width:280
  },
  Button:{
    width: 60,
    height: 60,
    borderRadius:30,
    marginBottom: 20,
    marginLeft:250,
    backgroundColor:"#3393D0"
  },
  ButtonText: {
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    marginTop:10,
    marginLeft:25
  }
});
