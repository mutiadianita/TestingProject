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
      <View style={styles.container}>
        <Text style={styles.title}>Please enter your current mailing address</Text>
        <ScrollView>
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
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = "Banten" value = "1" />
           <Picker.Item label = "DKI Jakarta" value = "2" />
           <Picker.Item label = "Jawa Barat" value = "3" />
           <Picker.Item label = "Jawa Tengah" value = "4" />
        </Picker>
        <Text style={styles.label}>Kabupaten</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown'>
           <Picker.Item label = "Jakarta Barat" value = "1" />
           <Picker.Item label = "Jakarta Pusat" value = "2" />
           <Picker.Item label = "Jakarta Selatan" value = "3" />
           <Picker.Item label = "Jakarta Timur" value = "4" />
           <Picker.Item label = "Jakarta Utara" value = "5" />
        </Picker>
        <Text style={styles.label}>Kelurahan</Text>
        <Picker style={{marginLeft:27, width:280}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown'>
           <Picker.Item label = "Kebayoran" value = "1" />
           <Picker.Item label = "Kebon Jeruk" value = "2" />
        </Picker>
        <Text style={styles.label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
    </ScrollView>
    <TouchableOpacity
    style={{width: 60, height: 60, borderRadius:30, marginBottom: 30, marginLeft:250, backgroundColor:"#3393D0"}}
      onPress = {() => navigate("AddInfo")}>
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
  check: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    fontSize:12
  }
});
