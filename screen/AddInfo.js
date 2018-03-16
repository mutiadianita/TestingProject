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
export default class YourMailingAddress extends Component {
  state = {Education: ''}
   updateEducation = (Education) => {
      this.setState({ Education: Education })
    }
  state = {Fund: ''}
   updateFund = (Fund) => {
      this.setState({ Fund: Fund })
    }
  state = {MIncome: ''}
   updateMIncome = (MIncome) => {
      this.setState({ MIncome: MIncome })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
        <Text style={styles.Detail}>Please provide some additional information about you</Text>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_loc_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={styles.Title}>Information</Text>
        </View>
        <Text style={styles.Label}>Last Education</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.Education} onValueChange = {this.updateEducation} mode='dropdown' >
           <Picker.Item label = 'Bachelor' value = '1' />
           <Picker.Item label = 'Bachelor' value = '2' />
        </Picker>
        <Text style={styles.Label}>Source of Fund</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.Fund} onValueChange = {this.updateFund} mode='dropdown'>
           <Picker.Item label = 'Salary' value = '1' />
           <Picker.Item label = 'Salary' value = '2' />
        </Picker>
        <Text style={styles.Label}>Net Monthly Income</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.MIncome} onValueChange = {this.updateMIncome} mode='dropdown'>
           <Picker.Item label = 'Rp 0 - Rp 10.000.000,00' value = '1' />
           <Picker.Item label = 'Rp 10.000.000 - Rp 20.000.000,00' value = '2' />
        </Picker>
      </ScrollView>
      <View style={{alignItems:'flex-end', marginRight:30, marginBottom:30}}>
        <TouchableOpacity
        style={styles.RoundButton}
          onPress = {() => navigate('Step2')}>
          <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
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
    paddingTop: 10,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    marginTop:15,
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Title: {
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 35,
    fontSize:14,
    fontFamily: 'Roboto-Light'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginTop: 20,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
