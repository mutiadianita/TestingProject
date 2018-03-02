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
export default class AddInfo extends Component {
  state = {education: ''}
   updateEducation = (education) => {
      this.setState({ education: education })
    }
  state = {fund: ''}
   updateFund = (fund) => {
      this.setState({ fund: fund })
    }
  state = {income: ''}
   updateIncome = (income) => {
      this.setState({ income: income })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please enter your current mailing address</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Information</Text>
        </View>
        <Text style={styles.Label}>Last education</Text>
        <Picker style={styles.Picker} selectedValue = {this.state.education} onValueChange = {this.updateEducation} mode='dropdown'>
           <Picker.Item Label = "Senior High School" value = "1" />
           <Picker.Item Label = "Diploma" value = "2" />
           <Picker.Item Label = "Bachelor" value = "3" />
           <Picker.Item Label = "Master" value = "4" />
        </Picker>
        <Text style={styles.Label}>Source of fund</Text>
        <Picker style={styles.Picker} selectedValue = {this.state.fund} onValueChange = {this.updateFund} mode='dropdown'>
           <Picker.Item Label = "Salary" value = "1" />
           <Picker.Item Label = "Parents" value = "2" />
        </Picker>
        <Text style={styles.Label}>Net monthly income</Text>
        <Picker style={styles.Picker} selectedValue = {this.state.income} onValueChange = {this.updateIncome} mode='dropdown'>
           <Picker.Item Label = "Rp 0 - Rp 10.000.000,00" value = "1" />
           <Picker.Item Label = "Rp 10.000.001,00 - Rp 50.000.000,00" value = "2" />
           <Picker.Item Label = "Rp 50.000.001,00 - Rp 100.000.000,00" value = "3" />
           <Picker.Item Label = ">Rp. 100.000.000,00 " value = "4" />
        </Picker>
    </ScrollView>
    <TouchableOpacity
    style={styles.Button}
      onPress = {() => navigate("Step2")}>
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
    marginBottom: 30,
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
