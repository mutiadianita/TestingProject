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
  Picker,
  Modal
}  from 'react-native';

const util = require('util');
export default class EditProfile extends Component {
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
  state = {
   modalVisible: false,
    };

 setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);}}>
          <View style={{flex:1,elevation:Size.PADDING_SMALL, borderRadius:Size.PADDING_SMALL,backgroundColor: 'white', marginTop:Size.DELETE_HEIGHT,marginBottom:Size.DELETE_HEIGHT, marginLeft:Size.PADDING, marginRight:Size.PADDING, padding:Size.PADDING}}>
            <TouchableOpacity onPress = {() => { this.setModalVisible(!this.state.modalVisible);}}>
            <Image source={{uri: 'ic_close_blue'}} resizeMode="contain" style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM}}/>
            </TouchableOpacity>
            <Text style={{fontSize:Size.TEXT_TITLEM, fontFamily:'TitilliumWeb-Bold',textAlign:'left', color:'#58595B', marginTop:Size.PADDING_MID, marginRight:Size.PADDING}}>Change Email Address</Text>
            <Text style={{fontSize:Size.TEXT_LABELS, fontFamily:'SourceSansPro-Regular', textAlign:'left', color:'#333333', marginTop:Size.DELETE_WIDTH*2}}>We will contact you if you want to change your email address.</Text>
            <TouchableOpacity onPress = {() => { this.setModalVisible(!this.state.modalVisible);}}>
              <View style={{height:Size.DELETE_WIDTH, width:Size.CHECK, marginTop:Size.PADDING, backgroundColor:'#3393D0', borderRadius:Size.BORDER, elevation:Size.BORDER, justifyContent:'center', alignItems:'center'}}>
                <Text style={{textAlign:'center', fontFamily:'TitilliumWeb-SemiBold', fontSize:Size.TEXT_LABELM, color:'white'}}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
      </Modal>
      <View style={{justifyContent:'center', alignItems:'center', marginBottom:Size.PADDING_SMALL}}>
        <Image source={{uri:'bapak'}} resizeMode="cover" style={{height:Size.OPTION_HEIGHT, width: Size.OPTION_HEIGHT, borderRadius:Size.OPTION_HEIGHT/2}}/>
        <Text style={styles.Name}>Stanley Santoso</Text>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri: 'ic_profile_blue'}} resizeMode="contain" style={styles.Icon}/>
        <Text style={styles.Title}>My Account</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={styles.Label}>Email</Text>
            <Text style={{width:Size.CHECK, fontSize:Size.LABELS, marginLeft:Size.PADDING_CONFIRM, marginTop:Size.BORDER}}>Stanley@gmail.com</Text>
          </View>
          <View>
          <TouchableOpacity onPress={() => { this.setModalVisible(true);}}>
            <Image source={{uri: 'ic_next_black'}} resizeMode="contain" style={styles.Arrow}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:Size.PADDING, marginBottom:Size.PADDING}}>
          <View>
            <Text style={styles.Label}>Password</Text>
            <Text style={{width:Size.CHECK, fontSize:Size.TEXT_LABELS, marginLeft:Size.PADDING_CONFIRM, marginTop:Size.BORDER}}>********</Text>
          </View>
          <View>
          <TouchableOpacity onPress= {() => navigate('ChangePasswordForm')}>
            <Image source={{uri: 'ic_next_black'}} resizeMode="contain" style={styles.Arrow}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri: 'ic_loc_blue'}} resizeMode="contain" style={styles.Icon}/>
        <Text style={styles.Title}>Mailing Address</Text>
        </View>
        <Text style={styles.Label}>Address</Text>
        <TextInput
        style={{marginLeft:Size.PADDING*2,width: Size.PICKER_WIDTH, color:'black'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        />
        <Text style={styles.Label}>Province</Text>
        <Picker style={{marginLeft:Size.PADDING*2, width:Size.PICKER_WIDTH}} selectedValue = {this.state.province} onValueChange = {this.updateProvince} mode='dropdown' >
           <Picker.Item label = 'Banten' value = '1' />
           <Picker.Item label = 'DKI Jakarta' value = '2' />
           <Picker.Item label = 'Jawa Barat' value = '3' />
           <Picker.Item label = 'Jawa Tengah' value = '4' />
        </Picker>
        <Text style={styles.Label}>Kabupaten</Text>
        <Picker style={{marginLeft:Size.PADDING*2, width:Size.PICKER_WIDTH}} selectedValue = {this.state.kabupaten} onValueChange = {this.updateKabupaten} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kelurahan</Text>
        <Picker style={{marginLeft:Size.PADDING*2, width:Size.PICKER_WIDTH}} selectedValue = {this.state.kelurahan} onValueChange = {this.updateKelurahan} mode='dropdown' >
           <Picker.Item label = 'Jakarta Barat' value = '1' />
           <Picker.Item label = 'Jakarta Pusat' value = '2' />
           <Picker.Item label = 'Jakarta Selatan' value = '3' />
           <Picker.Item label = 'Jakarta Timur' value = '4' />
           <Picker.Item label = 'Jakarta Utara' value = '5' />
        </Picker>
        <Text style={styles.Label}>Kode Pos</Text>
        <TextInput
        style={{marginLeft:Size.PADDING*2,width: Size.PICKER_WIDTH, color:'black'}}
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
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    marginRight:Size.PADDING,
    marginLeft:Size.PADDING,
    color: '#58595B',
    fontFamily:'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  Name: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop:Size.PADDING_SMALL,
    fontFamily:'SourceSansPro-Bold'
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-Bold'
  },
  Icon: {
    marginLeft:Size.PADDING,
    width: Size.PADDING,
    height: Size.PADDING
  },
  Arrow: {
    marginTop:Size.PADDING_SMALL,
    width: Size.PADDING,
    height: Size.PADDING
  },
  ButtonText: {
    color:'white',
    margin:Size.PADDING_SMALL,
    fontSize:Size.TEXT_LABELM,
    textAlign:'center',
    justifyContent:'center',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Button: {
    borderRadius:Size.BORDER,
    width: Size.PAGER_WIDTH,
    height: Size.BUTTON_HEIGHT,
    marginTop: Size.PADDING_SMALL,
    marginBottom: Size.PADDING,
    backgroundColor:'#3393D0'
  }
});
