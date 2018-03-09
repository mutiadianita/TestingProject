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
      <View style={{justifyContent:'center', alignItems:'center', marginBottom:48}}>
        <View style={{height:80, width: 80, borderRadius:40, backgroundColor:'grey'}}>
        </View>
        <Text style={styles.Name}>Stanley Santoso</Text>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_profile_blue.png')} style={styles.Icon}/>
        <Text style={styles.Title}>My Account</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={styles.Label}>Email</Text>
            <Text style={{width:230, fontSize:16, marginLeft:65, marginTop:3}}>Stanley@gmail.com</Text>
          </View>
          <View>
          <TouchableOpacity onPress= {() => navigate('ChangeEmail')}>
            <Image source={require('./asset/ic_next_black.png')} style={styles.Arrow}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:26, marginBottom:32}}>
          <View>
            <Text style={styles.Label}>Password</Text>
            <Text style={{width:230, fontSize:16, marginLeft:65, marginTop:3}}>********</Text>
          </View>
          <View>
          <TouchableOpacity onPress= {() => navigate('ChangePasswordForm')}>
            <Image source={require('./asset/ic_next_black.png')} style={styles.Arrow}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_loc_blue.png')} style={styles.Icon}/>
        <Text style={styles.Title}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:'black'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Province</Text>
        <Picker style={{marginLeft:60, width:280}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = 'Banten' value = '1' />
           <Picker.Item label = 'DKI Jakarta' value = '2' />
           <Picker.Item label = 'Jawa Barat' value = '3' />
           <Picker.Item label = 'Jawa Tengah' value = '4' />
        </Picker>
        <Text style={styles.Label}>Kabupaten</Text>
        <Picker style={{marginLeft:60, width:280}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:60, width:280}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:'black'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        </ScrollView>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <TouchableOpacity
          style={styles.Button}
            onPress = {() => navigate('Profile')}>
            <Text style={styles.ButtonText}>Save Changes</Text>
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
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B',
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  Name: {
    fontSize:16,
    color:'#3393D0',
    marginTop:8,
    fontFamily:'SourceSansPro-Bold'
  },
  Title: {
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-Bold'
  },
  Icon: {
    marginLeft:30,
    width: 30,
    height: 30
  },
  Arrow: {
    marginTop:10,
    width: 30,
    height: 30
  },
  ButtonText: {
    color:'white',
    fontSize:18,
    margin:10,
    textAlign:'center',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Button: {
    borderRadius:2,
    width: 328,
    height: 48,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor:'#3393D0'
  }
});
