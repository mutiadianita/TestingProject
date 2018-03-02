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
      <View style={{justifyContent:"center", alignItems:"center", marginBottom:48}}>
          <View style={{height:80, width: 80, borderRadius:40, backgroundColor:"grey"}}>
          </View>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop:8}}>Stanley Santoso</Text>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_profile_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>My Account
        </Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <View>
            <Text style={styles.Label}>Email</Text>
            <Text style={{width:230, fontSize:16, marginLeft:65, marginTop:3}}>Stanley@gmail.com</Text>
          </View>
          <View>
          <Image source={require('./asset/ic_next_black.png')} style={{marginTop:10,width: 30, height: 30}}/>
          </View>
        </View>
        <View style={{flexDirection:"row", marginTop:26, marginBottom:32}}>
          <View>
            <Text style={styles.Label}>Password</Text>
            <Text style={{width:230, fontSize:16, marginLeft:65, marginTop:3}}>********</Text>
          </View>
          <View>
          <Image source={require('./asset/ic_next_black.png')} style={{marginTop:10,width: 30, height: 30}}/>
          </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_loc_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.Label}>Province</Text>
        <Picker style={{marginLeft:60, width:280}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = "Banten" value = "1" />
           <Picker.Item label = "DKI Jakarta" value = "2" />
           <Picker.Item label = "Jawa Barat" value = "3" />
           <Picker.Item label = "Jawa Tengah" value = "4" />
        </Picker>
        <Text style={styles.Label}>Kabupaten/Kota</Text>
        <Picker style={{marginLeft:60, width:280}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown' >
           <Picker.Item label = "Jakarta Barat" value = "1" />
           <Picker.Item label = "Jakarta Pusat" value = "2" />
           <Picker.Item label = "Jakarta Selatan" value = "3" />
           <Picker.Item label = "Jakarta Timur" value = "4" />
           <Picker.Item label = "Jakarta Utara" value = "5" />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:60, width:280}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown' >
           <Picker.Item label = "Jakarta Barat" value = "1" />
           <Picker.Item label = "Jakarta Pusat" value = "2" />
           <Picker.Item label = "Jakarta Selatan" value = "3" />
           <Picker.Item label = "Jakarta Timur" value = "4" />
           <Picker.Item label = "Jakarta Utara" value = "5" />
        </Picker>
        <Text style={styles.Label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        </ScrollView>
        <View style={{justifyContent:"center", alignItems: "center"}}>
          <TouchableOpacity
          style={{borderRadius:2,width: 328, height: 48,marginTop: 20, marginBottom: 30, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("YourMailingAddress")}>
            <Text style={{color:"white", fontSize:18, margin:10, textAlign:"center"}}>Save Changes</Text>
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
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:14
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 5,
    fontSize:14,
    width:230
  }
});
