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
export default class YourInformation extends Component {
  state = {province: ''}
   updateProvince = (province) => {
      this.setState({ province: province })
    }
  state = {kabupaten: ''}
   updateKabupaten = (kabupaten) => {
      this.setState({ kabupaten: kabupaten })
    }
  state = {kelurahan: ''}
   updateKelurahan = (kelurahan) => {
      this.setState({ kelurahan: kelurahan })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
        <Text style={styles.Detail}>Please confirm the data below as it is on your KTP</Text>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri:'ic_profile_blue'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={styles.Title}>Profile
        </Text>
        </View>
        <Text style={styles.Label}>Full Name as on KTP</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Place of birth</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Date of Birth</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <View style={{flexDirection:'row'}}>
        <Image source={{uri:'ic_loc_blue'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={styles.Title}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Province</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = 'Banten' value = '1' />
           <Picker.Item label = 'DKI Jakarta' value = '2' />
           <Picker.Item label = 'Jawa Barat' value = '3' />
           <Picker.Item label = 'Jawa Tengah' value = '4' />
        </Picker>
        <Text style={styles.Label}>Kabupaten/Kota</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kode Pos</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <View style={{ flexDirection: 'row', height:Size.PADDING_LONG, width:Size.PICKER_WIDTH, marginLeft:Size.PADDING}}>
          <CheckBox title='Click Here'/>
          <Text style={styles.Check}>My mailing address is the same as my address as on KTP</Text>
        </View>
        </ScrollView>
        <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('YourMailingAddress')}>
            <Image source={{uri:'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
    paddingLeft:Size.PADDING,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    marginRight:Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    fontFamily:'TitilliumWeb-Bold',
    color:'#3393D0',
    marginBottom:Size.PADDING_MID
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:Size.TEXT_DETAILL,
    width:Size.CHECK,
    fontFamily:'Roboto-Regular'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    marginRight:Size.PADDING,
    marginBottom:Size.PADDING_LONG,
    justifyContent:'center',
    alignItems:'center'
  },
  TextInput: {
    marginLeft:Size.PADDING_TI,
    width: Size.PICKER_WIDTH,
    color:'black',
    fontFamily:'Roboto-Light'}
});
