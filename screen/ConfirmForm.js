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
            <Image source={require('./asset/ic_dream_small.png')} style={{marginLeft:30,width: 30, height: 30}}/>
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
            <Image source={require('./asset/ic_strategy_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
            <Text style={styles.SubTitle}>Your investment strategy</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontFamily:'TitilliumWeb-SemiBold',fontSize:20, marginLeft:65}}>Normal Risk</Text>
            <Text style={{fontFamily:'Roboto-Light',fontSize:16, marginLeft:75}}>Moderate</Text>
          </View>
          <Text style={{fontSize:16, color:'#58595B', marginLeft:65, marginTop:10, marginRight:30, fontFamily:'SourceSansPro-Regular'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.
          </Text>
          <View style={styles.LongLine}/>
          <View style={{marginLeft:30,flexDirection:'row'}}>
            <Image source={require('./asset/ic_percentage.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.SubTitle}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
            <Text style={styles.Bank}>Maybank fixed income</Text>
            <View style={{flexDirection:'row', marginLeft:65, marginRight:30}}>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Funds</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.5} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Bonds </Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Shares</Text>
              </View>
            </View>
            <TouchableOpacity onPress = {() => navigate('Product')}>
              <Text style={styles.More}>View Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}/>
          <View style={{width:320}}>
            <Text style={styles.Bank}>BCA fixed income</Text>
            <View style={{flexDirection:'row', marginLeft:65, marginRight:30}}>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Funds</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.5} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Bonds </Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Shares</Text>
              </View>
            </View>
            <TouchableOpacity onPress = {() => navigate('Product')}>
              <Text style={styles.More}>View Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}/>
          <View style={{width:320}}>
            <Text style={styles.Bank}>BCA fixed income</Text>
            <View style={{flexDirection:'row', marginLeft:65, marginRight:30}}>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Funds</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.5} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Bonds </Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center'}}>
                <ProgressCircle showsText={true} borderWidth={6} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={6} progress={0.25} size={80} style={{marginRight:10}}/>
                <Text style={styles.ChartText}>Shares</Text>
              </View>
            </View>
            <TouchableOpacity onPress = {() => navigate('Product')}>
              <Text style={styles.More}>View Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}/>
          <View style={{ flexDirection: 'row', marginLeft:30}}>
            <CheckBox title='Click Here'/>
            <View style={{marginRight:20, width:280, height:50}}>
            <Text style={{textAlign: 'left',color: '#58595B',fontSize:12, marginLeft: 5, fontFamily:'SourceSansPro-Regular'}}>
              I agree to allow XDANA to automatically take money every month from my bank account to reach my dream on time.
            </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft:30}}>
            <CheckBox title='Click Here'/>
            <View style={{marginRight:20, width:280, height:50}}>
            <Text style={{alignItems:'flex-end', justifyContent:'flex-end', textAlign: 'left',color: '#58595B',fontSize:12, marginLeft: 5, fontFamily:'SourceSansPro-Regular'}}>
              I agree and have read the prospectus documents of Fund A, Fund B, and Fund C
            </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{marginBottom:40,marginTop:20,justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Bank')}>
            <Text style={styles.ButtonText}>Continue</Text>
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
    paddingTop: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:12,
    marginLeft: 65,
    width:230,
    fontFamily:'Roboto-Regular'
  },
  Bank: {
    marginLeft:65,
    fontSize:16,
    color:'#58595B',
    marginTop: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Line: {
    width: 320,
    height:1,
    marginLeft:40,
    backgroundColor:'#D8D8D8',
    marginTop:20,
    marginBottom:20
  },
  LongLine: {
    width: 360,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:20,
    marginBottom:20
  },
  More: {
    marginLeft:65,
    textAlign:'center',
    fontSize:12,
    color:'#3393D0',
    marginTop: 16,
    marginBottom:20,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  TextInput: {
    marginLeft:60,
    width: 280,
    color:'black',
    fontFamily:'Roboto-Regular'
  },
  SubTitle: {
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-Bold'
  },
  LearnMore: {
    fontSize:12,
    color:'#3393D0',
    marginLeft:65,
    fontFamily:'Roboto-Bold'
  },
  Button: {
    backgroundColor:'#3393D0',
    height:48,
    width:300,
    justifyContent:'center',
    borderRadius:2
  },
  ButtonText: {
    color:'#FFFFFF',
    fontSize:16,
    textAlign:'center',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  ChartText: {
    fontSize:14,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:24
  }
});
