import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ViewPagerAndroid,
  TouchableOpacity
}  from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class RiskResult extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
    <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:1, paddingTop:30}}>
      <ViewPagerAndroid pageMargin={10} style={{flex: 1, margin:30}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flex:2}}> <Text style={styles.Risk}>Low risk</Text> </View>
          <View style={{flex:1}}> <Text style={styles.Recommended}>RECOMMENDED</Text> </View>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <View style={{flexDirection:'row', marginTop:32}}>
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
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Moderate Conservative</Text>
          <View style={{flexDirection:'row', marginTop:32}}>
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
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>Normal risk</Text>
          </View>
          <Text style={styles.Type}>Moderate</Text>
          <View style={{flexDirection:'row', marginTop:32}}>
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
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Aggresive</Text>
          <View style={{flexDirection:'row', marginTop:32}}>
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
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Moderate Aggresive</Text>
          <View style={{flexDirection:'row', marginTop:32}}>
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
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
      </ViewPagerAndroid>
      <View style={{justifyContent:'center', alignItems:'center', width: 320, height: 50, padding:10, marginLeft:20, marginBottom: 30}}>
        <Text style={{color:'white', fontFamily:'Roboto-Regular'}}> Swipe to see other Investment Strategies</Text>
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
    marginLeft:Size.PADDING_MID,
    borderRadius:3,
    padding:Size.PADDING_MID
  },
  Risk:{
    fontSize: Size.TEXT_TITLEM,
    color: '#58595B',
    fontFamily:'TitilliumWeb-Bold'
  },
  Recommended: {
    fontSize: Size.TEXT_DETAILM,
    color: '#DE6157',
    textAlign:'right',
    marginTop:10,
    fontFamily:'Roboto-Black'
  },
  Type: {
    fontSize: 16,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Detail: {
    fontSize: 16,
    color: '#58595B',
    marginTop: 32,
    fontFamily:'SourceSansPro-Regular'
  },
  TextButton: {
    textAlign:'center',
    fontSize:18,
    color:'#FFFFFF',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Button: {
    borderRadius:2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#3393D0',
    width: 260,
    height:48,
    marginBottom: 30,
    marginTop:30
  },
  ChartText: {
    fontSize:14,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:24
  }
})
