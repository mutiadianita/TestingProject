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
        <Image source={require('./asset/ic_loc_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={styles.Title}>Information</Text>
        </View>
        <Text style={styles.Label}>Last Education</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.Education} onValueChange = {this.updateEducation} mode='dropdown' >
           <Picker.Item label = 'Bachelor' value = '1' />
           <Picker.Item label = 'Bachelor' value = '2' />
        </Picker>
        <Text style={styles.Label}>Source of Fund</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.Fund} onValueChange = {this.updateFund} mode='dropdown'>
           <Picker.Item label = 'Salary' value = '1' />
           <Picker.Item label = 'Salary' value = '2' />
        </Picker>
        <Text style={styles.Label}>Net Monthly Income</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.MIncome} onValueChange = {this.updateMIncome} mode='dropdown'>
           <Picker.Item label = 'Rp 0 - Rp 10.000.000,00' value = '1' />
           <Picker.Item label = 'Rp 10.000.000 - Rp 20.000.000,00' value = '2' />
        </Picker>
      </ScrollView>
      <View style={{alignItems:'flex-end', marginRight:Size.PADDING, marginBottom:Size.PADDING_LONG}}>
        <TouchableOpacity
        style={styles.RoundButton}
          onPress = {() => navigate('Step2')}>
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
    paddingLeft: Size.PADDING,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING/2,
    marginTop:Size.PADDING/2,
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILL,
    fontFamily: 'Roboto-Light'
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
  }
});
