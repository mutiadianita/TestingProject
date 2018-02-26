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
      <View style={styles.container}>
        <Text style={styles.title}>Please enter your current mailing address</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Information</Text>
        </View>
        <Text style={styles.label}>Last education</Text>
        <Picker style={styles.picker} selectedValue = {this.state.education} onValueChange = {this.updateEducation} mode='dropdown'>
           <Picker.Item label = "Senior High School" value = "1" />
           <Picker.Item label = "Diploma" value = "2" />
           <Picker.Item label = "Bachelor" value = "3" />
           <Picker.Item label = "Master" value = "4" />
        </Picker>
        <Text style={styles.label}>Source of fund</Text>
        <Picker style={styles.picker} selectedValue = {this.state.fund} onValueChange = {this.updateFund} mode='dropdown'>
           <Picker.Item label = "Salary" value = "1" />
           <Picker.Item label = "Parents" value = "2" />
        </Picker>
        <Text style={styles.label}>Net monthly income</Text>
        <Picker style={styles.picker} selectedValue = {this.state.income} onValueChange = {this.updateIncome} mode='dropdown'>
           <Picker.Item label = "Rp 0 - Rp 10.000.000,00" value = "1" />
           <Picker.Item label = "Rp 10.000.001,00 - Rp 50.000.000,00" value = "2" />
           <Picker.Item label = "Rp 50.000.001,00 - Rp 100.000.000,00" value = "3" />
           <Picker.Item label = ">Rp. 100.000.000,00 " value = "4" />
        </Picker>
    </ScrollView>
    <TouchableOpacity
    style={styles.button}
      onPress = {() => navigate("Step2")}>
      <Text style={styles.buttonText}>></Text>
    </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    marginTop:15,
    marginRight: 30,
    color: '#58595B'
  },
  label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 35,
    fontSize:14
  },
  picker: {
    marginLeft:27,
    width:280
  },
  button:{
    width: 60,
    height: 60,
    borderRadius:30,
    marginBottom: 30,
    marginLeft:250,
    backgroundColor:"#3393D0"
  },
  buttonText: {
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    marginTop:10,
    marginLeft:25
  }
});
