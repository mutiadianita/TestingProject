import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
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
    <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:1, paddingTop:Size.PADDING}}>
      <ViewPagerAndroid pageMargin={Size.PADDING_SMALL} style={{flex: 12, margin:Size.PADDING}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
           <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <View style={{flexDirection:'row', marginTop:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{flexDirection:'row', marginTop:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{flexDirection:'row', marginTop:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{flexDirection:'row', marginTop:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{flexDirection:'row', marginTop:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.PADDING_LONG*2} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Shares</Text>
            </View>
          </View>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <TouchableOpacity style={styles.Button} onPress = {() => navigate('Success')}>
              <Text style={styles.TextButton}> Use This Strategy </Text>
          </TouchableOpacity>
        </View>
      </ViewPagerAndroid>
      <View style={{justifyContent:'center', alignItems:'center',flex:1, padding:Size.PADDING_SMALL, marginLeft:Size.PADDING_MID, marginBottom: Size.PADDING}}>
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
    padding:Size.PADDING_MID,
    height:Size.PAGER_HEIGHT
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
    marginTop:Size.PADDING_SMALL,
    marginLeft:Size.PADDING_LONG*2,
    fontFamily:'Roboto-Black'
  },
  Type: {
    fontSize: Size.TEXT_LABELS,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Detail: {
    fontSize: Size.TEXT_LABELS,
    color: '#58595B',
    marginTop: Size.PADDING,
    fontFamily:'SourceSansPro-Regular'
  },
  TextButton: {
    textAlign:'center',
    fontSize:Size.TEXT_LABELM,
    color:'#FFFFFF',
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Button: {
    borderRadius:2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#3393D0',
    width: Size.BUTTON_RISK,
    height:Size.BUTTON_HEIGHT,
    marginBottom: Size.PADDING,
    marginTop:Size.PADDING_MID
  },
  ChartText: {
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:Size.PADDING_SMALL
  }
})
