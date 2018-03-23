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
          <Image source={require('./asset/ic_dream_small.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={{fontSize:Size.TEXT_LABELS, color:'#3393D0', marginBottom:Size.PADDING_MID, fontFamily:'TitilliumWeb-Bold'}}>Dream Information</Text>
          </View>
          <Text style={styles.Label}>IDR Amount</Text>
          <TextInput
          style={{marginLeft:Size.PADDING,width: Size.TI_WIDTH, color:'black', fontFamily: 'TitilliumWeb-SemiBold'}}
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
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:Size.PADDING_LONG, marginRight:Size.PADDING}}>
          <TouchableOpacity
          style={styles.Button}
            onPress = {() => navigate('Strategy')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
    paddingTop: Size.PADDING_SMALL,
    paddingLeft: Size.PADDING,
    backgroundColor:'white'
  },
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING/2,
    marginTop:Size.PADDING/2,
    marginRight: Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL/2,
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  Picker: {
    marginLeft:Size.PADDING,
    width:Size.PICKER_WIDTH
  },
  Button:{
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
