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
        <Image source={{uri:'ic_loc_blue'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
        <Text style={styles.Title}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={{marginLeft:Size.PADDING_TI,width: Size.PICKER_WIDTH, color:'black'}}
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
        <Text style={styles.Label}>Kabupaten</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown'>
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown'>
           <Picker.Item label = 'Kebayoran' value = '1' />
           <Picker.Item label = 'Kebon Jeruk' value = '2' />
        </Picker>
        <Text style={styles.Label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:Size.PADDING_TI, width:Size.PICKER_WIDTH, color:'black'}}
        secureTextEntry={true}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
      </ScrollView>
      <View style={{alignItems:'flex-end', alignItems:'flex-end', marginBottom:Size.PADDING_LONG, marginRight:Size.PADDING}}>
      <TouchableOpacity
      style={styles.RoundButton}
        onPress = {() => navigate('AddInfo')}>
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
    paddingLeft: Size.PADDING,
    backgroundColor:'white'
  },
  Detail: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING/2,
    marginTop:Size.PADDING_SMALL,
    marginRight: Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Title : {
    fontSize:16,
    color:'#3393D0',
    marginBottom:Size.PADDING_SMALL,
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL/2,
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    marginTop: Size.PADDING_SMALL,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
