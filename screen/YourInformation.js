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
        <Image source={require('./asset/ic_profile_blue.png')} style={{width: 30, height: 30}}/>
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
        <Image source={require('./asset/ic_loc_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={styles.Title}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Province</Text>
        <Picker style={{marginLeft:30, width:280}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = 'Banten' value = '1' />
           <Picker.Item label = 'DKI Jakarta' value = '2' />
           <Picker.Item label = 'Jawa Barat' value = '3' />
           <Picker.Item label = 'Jawa Tengah' value = '4' />
        </Picker>
        <Text style={styles.Label}>Kabupaten/Kota</Text>
        <Picker style={{marginLeft:30, width:280}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:30, width:280}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown' >
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
        <View style={{ flexDirection: 'row', height: 40, width:270, marginLeft:30}}>
          <CheckBox title='Click Here'/>
          <Text style={styles.Check}>My mailing address is the same as my address as on KTP</Text>
        </View>
        </ScrollView>
        <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('YourMailingAddress')}>
            <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginTop:10, marginLeft:25}}>></Text>
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
    paddingTop: 30,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Title: {
    fontSize:16,
    fontFamily:'TitilliumWeb-Bold',
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 35,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 5,
    fontSize:14,
    width:230,
    fontFamily:'Roboto-Regular'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginTop: 5,
    backgroundColor:'#3393D0',
    elevation:5,
    marginRight:30,
    marginBottom:30
  },
  TextInput: {
    marginLeft:30,
    width: 280,
    color:'black',
    fontFamily:'Roboto-Light'}
});
