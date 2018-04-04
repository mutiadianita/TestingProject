import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
}  from 'react-native';

const util = require('util');
export default class ChangePasswordForm extends Component {
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
          <Image source={{uri: 'ic_close_blue'}} resizeMode="contain" style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM}}/>
          <Text style={{fontSize:Size.TEXT_TITLEM, fontFamily:'TitilliumWeb-Bold',textAlign:'left', color:'#58595B', marginTop:Size.PADDING_MID, marginRight:Size.PADDING}}>Password Has Successfully Changed!</Text>
            <TouchableOpacity onPress = {() => { this.setModalVisible(!this.state.modalVisible);}}>
              <View style={{height:Size.DELETE_WIDTH, width:Size.CHECK, marginTop:Size.BUTTON_HEIGHT, backgroundColor:'#3393D0', borderRadius:Size.BORDER,justifyContent:'center', alignItems:'center'}}>
                <Text style={{textAlign:'center', fontFamily:'TitilliumWeb-SemiBold', fontSize:Size.TEXT_LABELM, color:'white'}}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{flex:1}}>
        <Text style={styles.Label}>Current Password</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        secureTextEntry
        />
        <Text style={styles.Label}>New Password</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        secureTextEntry
        />
        <Text style={styles.Label}>Re-type Password</Text>
        <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        />
        </View>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', paddingBottom:Size.PADDING_LONG}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress={() => { this.setModalVisible(true);}}>
            <Image source={{uri: 'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
    paddingTop: Size.PADDING,
    paddingLeft: Size.PADDING_MID,
    paddingRight:Size.PADDING,
    backgroundColor:'white'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  TextInput: {
    width: Size.PICKER_WIDTH,
    marginLeft:Size.PADDING,
    color:'#58595B',
    fontWeight:'bold',
    fontSize:Size.TEXT_LABELS
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
});
