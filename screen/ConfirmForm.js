{Size.PROGRESS_BORDER}import React, { Component } from 'react';
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
import ProgressCircle from 'react-native-progress/Circle';
const util = require('util');
export default class ConfirmForm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please Confirm the following document based on the data that you have entered.</Text>
        <ScrollView>
          <View style={{flexDirection:'row'}}>
            <Image source={{uri: 'ic_dream_small'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.SubTitle}>Your dream </Text>
          </View>
          <Text style={styles.Label}>Dream Target Amount</Text>
          <TextInput style={styles.TextInput} placeholderTextColor='black' underlineColorAndroid='black'/>
          <Text style={styles.Label}>Reached in</Text>
          <TextInput style={styles.TextInput} placeholderTextColor='black' underlineColorAndroid='black'/>
          <Text style={styles.Label}>Monthly investment</Text>
          <TextInput style={styles.TextInput} placeholderTextColor='black' underlineColorAndroid='black'/>
          <Text style={styles.Check}>By investing in XDANA, you save up to </Text>
          <Text style={styles.Check}>Rp1.000.000,00 per year compared to saving in the bank </Text>
          <TouchableOpacity onPress = {() => navigate('LearnMore')}>
            <Text style={styles.LearnMore}>Learn more</Text>
          </TouchableOpacity>
          <View style={styles.LongLine}/>
          <View style={{flexDirection:'row'}}>
            <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.SubTitle}>Your investment strategy</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontFamily:'TitilliumWeb-SemiBold',fontSize:Size.TEXT_LABELL, marginLeft:Size.PADDING_CONFIRM}}>Normal Risk</Text>
            <Text style={{fontFamily:'Roboto-Light',fontSize:Size.TEXT_LABELS, marginLeft:Size.PADDING_CONFIRML}}>Moderate</Text>
          </View>
          <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', marginLeft:Size.PADDING_CONFIRM, marginTop:Size.PADDING_SMALL, marginRight:Size.PADDING, fontFamily:'SourceSansPro-Regular'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.
          </Text>
          <View style={styles.LongLine}/>
          <View style={{marginLeft:Size.PADDING,flexDirection:'row'}}>
            <Image source={{uri: 'ic_percentage'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.SubTitle}>Your portofolio</Text>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
            <Text style={styles.Bank}>Maybank fixed income</Text>
            <View style={{flexDirection:'row', marginLeft:Size.PADDING_CONFIRM, marginRight:Size.PADDING}}>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Funds</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Bonds </Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Shares</Text>
              </View>
            </View>
            <TouchableOpacity onPress = {() => navigate('Product')}>
              <Text style={styles.More}>View Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}/>
          <View style={{width:Size.PAGER_WIDTH}}>
            <Text style={styles.Bank}>BCA fixed income</Text>
            <View style={{flexDirection:'row', marginLeft:Size.PADDING_CONFIRM, marginRight:Size.PADDING}}>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Funds</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Bonds </Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Shares</Text>
              </View>
            </View>
            <TouchableOpacity onPress = {() => navigate('Product')}>
              <Text style={styles.More}>View Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}/>
          <View style={{width:Size.PAGER_WIDTH}}>
            <Text style={styles.Bank}>BCA fixed income</Text>
            <View style={{flexDirection:'row', marginLeft:Size.PADDING_CONFIRM, marginRight:Size.PADDING}}>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Funds</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Bonds </Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
                <Text style={styles.ChartText}>Shares</Text>
              </View>
            </View>
            <TouchableOpacity onPress = {() => navigate('Product')}>
              <Text style={styles.More}>View Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}/>
          <View style={{ flexDirection: 'row', marginLeft:Size.PADDING}}>
            <CheckBox title='Click Here'/>
            <View style={{marginRight:Size.PADDING_MID, width:Size.PICKER_WIDTH, height:Size.PADDING_TI*2}}>
            <Text style={{textAlign: 'left',color: '#58595B',fontSize:Size.TEXT_DETAILM, marginLeft: Size.ELEVATION, fontFamily:'SourceSansPro-Regular'}}>
              I agree to allow XDANA to automatically take money every month from my bank account to reach my dream on time.
            </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft:Size.PADDING}}>
            <CheckBox title='Click Here'/>
            <View style={{marginRight:Size.PADDING_MID, width:Size.PICKER_WIDTH, height:Size.PADDING_TI*2}}>
            <Text style={{alignItems:'flex-end', justifyContent:'flex-end', textAlign: 'left',color: '#58595B',fontSize:Size.TEXT_DETAILM, marginLeft: Size.ELEVATION, fontFamily:'SourceSansPro-Regular'}}>
              I agree and have read the prospectus documents of Fund A, Fund B, and Fund C
            </Text>
            </View>
          </View>
        <View style={{marginBottom:Size.PADDING_LONG,marginTop:Size.PADDING_MID,justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Bank')}>
            <Text style={styles.ButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
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
  Title: {
    fontSize: Size.TEXT_LABELS,
    textAlign: 'left',
    marginBottom: Size.PADDING,
    marginRight:Size.PADDING,
    marginLeft:Size.PADDING,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Light'
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:Size.TEXT_DETAILM,
    marginLeft: Size.PADDING_CONFIRM,
    width:Size.CHECK,
    fontFamily:'Roboto-Regular'
  },
  Bank: {
    marginLeft:Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    marginTop: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Line: {
    width: Size.PAGER_WIDTH,
    height:1,
    marginLeft:Size.PADDING_LONG,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  LongLine: {
    width: Size.DEVICE_WIDTH,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  More: {
    marginLeft:Size.PADDING_CONFIRM,
    textAlign:'center',
    fontSize:Size.TEXT_DETAILM,
    color:'#3393D0',
    marginTop: Size.TEXT_LABELS,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  TextInput: {
    marginLeft:Size.BUTTON_ROUND,
    width: Size.TI_WIDTH,
    color:'black',
    fontFamily:'Roboto-Regular'
  },
  SubTitle: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-Bold'
  },
  LearnMore: {
    fontSize:Size.TEXT_DETAILM,
    color:'#3393D0',
    marginLeft:Size.PADDING_CONFIRM,
    fontFamily:'Roboto-Bold'
  },
  Button: {
    backgroundColor:'#3393D0',
    height:Size.BUTTON_HEIGHT,
    width:Size.BUTTON_WIDTH,
    justifyContent:'center',
    borderRadius:2
  },
  ButtonText: {
    color:'#FFFFFF',
    fontSize:Size.TEXT_LABELS,
    textAlign:'center',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  ChartText: {
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:Size.PADDING_MID
  }
});
