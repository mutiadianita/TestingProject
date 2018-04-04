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
export default class Notification extends Component {
  constructor(){
    super();
    this.state ={
      status1:false,
      status2:false,
      status3:false,
      status4:false,
      status5:false,
      button1:'ic_faq_increase',
      button2:'ic_faq_increase',
      button3:'ic_faq_increase',
      button4:'ic_faq_increase',
      button5:'ic_faq_increase'
    }
  }
  ShowHideFAQ1 = () =>{
    if(this.state.status1 == true)
    {
      this.setState({status1: false, button1:"ic_faq_increase"})
    }
    else
    {
      this.setState({status1: true , button1:"ic_faq_decrease"})
    }
  }
  ShowHideFAQ2 = () =>{
    if(this.state.status2 == true)
    {
      this.setState({status2: false, button2:"ic_faq_increase"})
    }
    else
    {
      this.setState({status2: true , button2:"ic_faq_decrease"})
    }
  }
  ShowHideFAQ3 = () =>{
    if(this.state.status3 == true)
    {
      this.setState({status3: false, button3:"ic_faq_increase"})
    }
    else
    {
      this.setState({status3: true , button3:"ic_faq_decrease"})
    }
  }
  ShowHideFAQ4 = () =>{
    if(this.state.status4 == true)
    {
      this.setState({status4: false, button4:"ic_faq_increase"})
    }
    else
    {
      this.setState({status4: true , button4:"ic_faq_decrease"})
    }
  }
  ShowHideFAQ5 = () =>{
    if(this.state.status5 == true)
    {
      this.setState({status5: false, button5:"ic_faq_increase"})
    }
    else
    {
      this.setState({status5: true , button5:"ic_faq_decrease"})
    }
  }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
          <TouchableOpacity onPress={this.ShowHideFAQ1}>
          <Image source={{uri: this.state.button1}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
          </TouchableOpacity>
          </View>
          <View style={{width:Size.BUTTON_WIDTH}}>
              <Text style={styles.Question}>Apa yang dimaksud dengan reksa dana?</Text>
              { this.state.status1 ? <Text style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text> :null }
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
          <TouchableOpacity onPress={this.ShowHideFAQ2}>
          <Image source={{uri: this.state.button2}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
          </TouchableOpacity>
          </View>
          <View style={{width:Size.BUTTON_WIDTH}}>
              <Text style={styles.Question}>Siapa yang bisa berinvestasi di reksa dana?</Text>
              { this.state.status2 ? <Text style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text> :null }
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
          <TouchableOpacity onPress={this.ShowHideFAQ3}>
          <Image source={{uri: this.state.button3}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
          </TouchableOpacity>
          </View>
          <View style={{width:Size.BUTTON_WIDTH}}>
              <Text style={styles.Question}>Manfaat investasi di reksa dana?</Text>
              { this.state.status3 ? <Text style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text> :null }
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
          <TouchableOpacity onPress={this.ShowHideFAQ4}>
          <Image source={{uri: this.state.button4}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
          </TouchableOpacity>
          </View>
          <View style={{width:Size.BUTTON_WIDTH}}>
              <Text style={styles.Question}>Apa saja jenis - jenis reksa dana?</Text>
              { this.state.status4 ? <Text style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text> :null }
          </View>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row'}}>
          <View style={{width: Size.BUTTON_HEIGHT, alignItems:'center'}}>
          <TouchableOpacity onPress={this.ShowHideFAQ5}>
          <Image source={{uri: this.state.button5}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
          </TouchableOpacity>
          </View>
          <View style={{width:Size.BUTTON_WIDTH}}>
              <Text style={styles.Question}>Apa itu manajer investasi?</Text>
              { this.state.status5 ? <Text style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text> :null }
          </View>
        </View>
        <View style={styles.Line}/>
        </ScrollView>
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
  Question: {
    fontSize:Size.TEXT_DETAILL,
    color:'#000000',
    fontFamily:'Roboto-Regular'
  },
  Answer: {
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    marginTop:Size.PADDING_TI,
    marginRight:Size.PADDING,
    fontFamily:'SourceSansPro-Light'
  },
  Line: {
    width: Size.PICKER_WIDTH,
    height:1,
    marginLeft:Size.BUTTON_HEIGHT,
    backgroundColor:'rgba(216,216,216,0.60)',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  }
});
