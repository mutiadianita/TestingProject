import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal
}  from 'react-native';

const util = require('util');
export default class MyBank extends Component {
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
          <Text style={{fontSize:Size.TEXT_TITLEM, fontFamily:'TitilliumWeb-Bold',textAlign:'left', color:'#58595B', marginTop:Size.PADDING_MID, marginRight:Size.PADDING}}>Change Bank Account</Text>
          <Text style={{fontSize:Size.TEXT_LABELS, textAlign:'left', color:'#333333', marginTop:Size.DELETE_HEIGHT, fontFamily:'SourceSansPro-Regular'}}>We will contact you if you want to change your bank account.</Text>
            <TouchableOpacity onPress = {() => { this.setModalVisible(!this.state.modalVisible);}}>
              <View style={{height:Size.DELETE_WIDTH, width:Size.CHECK, marginTop:Size.BUTTON_HEIGHT, backgroundColor:'#3393D0', borderRadius:Size.BORDER,justifyContent:'center', alignItems:'center'}}>
                <Text style={{textAlign:'center', fontFamily:'TitilliumWeb-SemiBold', fontSize:Size.TEXT_LABELM, color:'white'}}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <Image source={{uri: 'bca'}} resizeMode="contain" style={{marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL,marginLeft:Size.BUTTON_ROUND ,width: Size.PADDING_CONFIRML, height: Size.PADDING_TI}}/>
        <Text style={styles.Details}>123-123-12345-1 </Text>
        <Text style={styles.Details}>a/n Stanley Santoso</Text>
        <View style={styles.Line}/>
        <View style={{flex:1,marginBottom:Size.PADDING_LONG,marginTop:Size.PADDING_MID,justifyContent:'flex-end', alignItems:'center'}}>
          <View style={{width:Size.BUTTON_WIDTH}}>
            <TouchableOpacity style={styles.Button} onPress = {() => { this.setModalVisible(true);}}>
              <Text style={styles.ButtonText}> Request to change bank account</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor:'white'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Regular'
  },
  Line: {
    width: Size.BUTTON_WIDTH,
    height:1,
    marginLeft:Size.BUTTON_ROUND,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  Button: {
    backgroundColor:'#3393D0',
    width:Size.BUTTON_WIDTH,
    height:Size.BUTTON_HEIGHT,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:Size.BORDER
  },
  ButtonText: {
    fontSize:Size.TEXT_LABELM,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#FFFFFF'
  }
});
