import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ViewPagerAndroid,
  TouchableOpacity,
  ScrollView
}  from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class Strategy extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:1, paddingTop:40}}>
      <ViewPagerAndroid pageMargin={10} style={{flex: 1, margin:20}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:5, marginLeft:30}}>
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
          <Text style={styles.More}>View details ></Text>
          </View>
          </ScrollView>
          <View>
              <TouchableOpacity style={styles.Button} onPress = {() => navigate('Confirm')}>
                  <Text style={{fontFamily:'TitilliumWeb-SemiBold', color:'#FFFFFF', fontSize:18}}>Use this Investment Strategy</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Moderate Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:5, marginLeft:30}}>
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
          <Text style={styles.More}>View details ></Text>
          </View>
          </ScrollView>
          <View>
            <TouchableOpacity style={styles.Button} onPress = {() => navigate('Confirm')}>
                <Text style={{fontFamily:'TitilliumWeb-SemiBold', color:'#FFFFFF', fontSize:18}}>Use this Investment Strategy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
          <Text style={styles.Risk}>Normal risk</Text>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:5, marginLeft:30}}>
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
          <Text style={styles.More}>View details ></Text>
          </View>
          </ScrollView>
          <View>
            <TouchableOpacity style={styles.Button} onPress = {() => navigate('Confirm')}>
                <Text style={{fontFamily:'TitilliumWeb-SemiBold', color:'#FFFFFF', fontSize:18}}>Use this Investment Strategy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Aggresive</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:5, marginLeft:30}}>
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
          <Text style={styles.More}>View details ></Text>
          </View>
          </ScrollView>
          <View>
            <TouchableOpacity style={styles.Button} onPress = {() => navigate('Confirm')}>
                <Text style={{fontFamily:'TitilliumWeb-SemiBold', color:'#FFFFFF', fontSize:18}}>Use this Investment Strategy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Moderate Aggresive</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:5, marginLeft:30}}>
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
          <Text style={styles.More}>View details ></Text>
          </View>
          </ScrollView>
          <View>
            <TouchableOpacity style={styles.Button} onPress = {() => navigate('Confirm')}>
                <Text style={{fontFamily:'TitilliumWeb-SemiBold', color:'#FFFFFF', fontSize:18}}>Use this Investment Strategy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ViewPagerAndroid>
      <View style={{justifyContent:'center', alignItems:'center', width: 320, height: 20,marginLeft:20, marginBottom: 10}}>
        <Text style={{color:'white'}}> Swipe to see other Investment Strategies</Text>
      </View>
      </LinearGradient>
    </View>

    );
  }
}
const styles = StyleSheet.create({
  Pager:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'white',
    borderRadius:10,
    paddingTop:15,
    height:650,
    marginRight: 10
  },
  Risk: {
    fontSize: 24,
    fontFamily:'TitilliumWeb-Bold',
    color: '#58595B'
  },
  Recommended: {
    fontSize: 12,
    color: '#DE6157',
    textAlign:'right',
    marginTop:10,
    marginLeft:80,
    fontFamily:'Roboto-Black'
  },
  Type: {
    marginLeft:20,
    fontSize: 16,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Detail: {
    marginLeft:20,
    marginRight:20,
    fontSize: 16,
    color: '#58595B',
    marginTop: 10,
    fontFamily:'SourceSansPro-Regular'
  },
  Title: {
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    fontFamily:'TitilliumWeb-Bold',
    marginBottom:10
  },
  Income: {
    marginLeft:55,
    fontSize:16,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#58595B',
    marginTop: 5,
    marginBottom:20
  },
  More: {
    textAlign:'center',
    fontSize:12,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#3393D0',
    marginTop: 10,
    marginLeft: 5
  },
  Line: {
    width: 360,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:10,
    marginBottom:10
  },
  Button: {
    marginLeft:30,
    marginBottom:20,
    marginTop:10,
    backgroundColor:'#3393D0',
    borderRadius:3,
    width: 260,
    height:56,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:14,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:24
  }
})
