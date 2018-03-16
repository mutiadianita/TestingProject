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
        <Text style={styles.Detail}>Please enter your current mailing address</Text>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_loc_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={styles.Title}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:'black'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Province</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = 'Banten' value = '1' />
           <Picker.Item label = 'DKI Jakarta' value = '2' />
           <Picker.Item label = 'Jawa Barat' value = '3' />
           <Picker.Item label = 'Jawa Tengah' value = '4' />
        </Picker>
        <Text style={styles.Label}>Kabupaten</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown'>
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown'>
           <Picker.Item label = 'Kebayoran' value = '1' />
           <Picker.Item label = 'Kebon Jeruk' value = '2' />
        </Picker>
        <Text style={styles.Label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:'black'}}
        secureTextEntry={true}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
      </ScrollView>
      <View style={{alignItems:'flex-end', alignItems:'flex-end', marginBottom:30, marginRight:25}}>
      <TouchableOpacity
      style={styles.RoundButton}
        onPress = {() => navigate('AddInfo')}>
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
    marginRight: 30,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Title : {
    fontSize:16,
    color:'#3393D0',
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
    fontFamily:'Roboto-Light'
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
