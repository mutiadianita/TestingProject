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
      <View style={styles.container}>

        <Text style={styles.title}>Please confirm the data below as it is on your KTP</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_profile_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Profile
        </Text>
        </View>
        <Text style={styles.label}>Full Name as on KTP</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>Place of birth</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_loc_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Mailing Address</Text>
        </View>
        <Text style={styles.label}>Address</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>Province</Text>
        <Picker style={{marginLeft:30, width:280}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = "Banten" value = "1" />
           <Picker.Item label = "DKI Jakarta" value = "2" />
           <Picker.Item label = "Jawa Barat" value = "3" />
           <Picker.Item label = "Jawa Tengah" value = "4" />
        </Picker>
        <Text style={styles.label}>Kabupaten/Kota</Text>
        <Picker style={{marginLeft:30, width:280}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown' >
           <Picker.Item label = "Jakarta Barat" value = "1" />
           <Picker.Item label = "Jakarta Pusat" value = "2" />
           <Picker.Item label = "Jakarta Selatan" value = "3" />
           <Picker.Item label = "Jakarta Timur" value = "4" />
           <Picker.Item label = "Jakarta Utara" value = "5" />
        </Picker>
        <Text style={styles.label}>Kelurahan</Text>
        <Picker style={{marginLeft:30, width:280}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown' >
           <Picker.Item label = "Jakarta Barat" value = "1" />
           <Picker.Item label = "Jakarta Pusat" value = "2" />
           <Picker.Item label = "Jakarta Selatan" value = "3" />
           <Picker.Item label = "Jakarta Timur" value = "4" />
           <Picker.Item label = "Jakarta Utara" value = "5" />
        </Picker>
        <Text style={styles.label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <View style={{ flexDirection: 'row', height: 40, width:270, marginLeft:30}}>
          <CheckBox title='Click Here'/>
          <Text style={styles.check}>My mailing address is the same as my address as on KTP</Text>
        </View>
        </ScrollView>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginBottom: 30, marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("YourMailingAddress")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    color: '#58595B'
  },
  label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 35,
    fontSize:14
  },
  check: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 5,
    fontSize:14,
    width:230
  }
});
