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
          <View style={{flexDirection:'row'}}>
          <Image source={require('./asset/ic_dream_small.png')} style={{width: 30, height: 30}}/>
          <Text style={{fontSize:16, color:'#3393D0', marginLeft: 5, marginBottom:20, fontFamily:'TitilliumWeb-Bold'}}>Dream Information</Text>
          </View>
          <Text style={styles.Label}>IDR Amount</Text>
          <TextInput
          style={{marginLeft:30,width: 280, color:'black', fontFamily: 'TitilliumWeb-SemiBold'}}
          placeholderTextColor='black'
          underlineColorAndroid='black'
          />
          <Text style={styles.Label}>Years</Text>
          <Picker style={styles.Picker} labelStyle={{fontFamily: 'TitilliumWeb-SemiBold'}} selectedValue = {this.state.years} onValueChange = {this.updateYears} mode='dropdown'>
             <Picker.Item label = '1' value = '1' />
             <Picker.Item label = '2' value = '2' />
             <Picker.Item label = '3' value = '3' />
             <Picker.Item label = '4' value = '4' />
             <Picker.Item label = '5' value = '5' />
          </Picker>
        </ScrollView>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:40, marginRight:30}}>
          <TouchableOpacity
          style={styles.Button}
            onPress = {() => navigate('Strategy')}>
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
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    marginTop:15,
    marginRight: 30,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 35,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  Picker: {
    marginLeft:27,
    width:280
  },
  Button:{
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  ButtonText: {
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    marginTop:10,
    marginLeft:25
  }
});
