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
      <ViewPagerAndroid pageMargin={Size.PADDING_SMALL} style={{flex: 1, margin:Size.PADDING_MID}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:Size.ELEVATION, marginLeft:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true}borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Shares</Text>
            </View>
          </View>
          <TouchableOpacity onPress = {() => navigate('Product')}>
            <Text style={styles.More}>View Detail ></Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
          <View>
              <TouchableOpacity style={styles.Button} onPress = {() => navigate('Confirm')}>
                  <Text style={{fontFamily:'TitilliumWeb-SemiBold', color:'#FFFFFF', fontSize:18}}>Use this Investment Strategy</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
          <Text style={styles.Risk}>Low risk</Text>
          <Text style={styles.Recommended}>RECOMMENDED</Text>
          </View>
          <Text style={styles.Type}>Moderate Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:Size.ELEVATION, marginLeft:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true}borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
          <Text style={styles.Risk}>Normal risk</Text>
          </View>
          <Text style={styles.Type}>Conservative</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:Size.ELEVATION, marginLeft:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true}borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Aggresive</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:Size.ELEVATION, marginLeft:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true}borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
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
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
          <Text style={styles.Risk}>High risk</Text>
          </View>
          <Text style={styles.Type}>Moderate Aggresive</Text>
          <Text style={styles.Detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={styles.Line}/>
          <ScrollView>
          <View style={{marginLeft:Size.PADDING_MID,flexDirection:'row'}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
            <Text style={styles.Title}>Your portofolio</Text>
          </View>
          <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.Income}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginTop:Size.ELEVATION, marginLeft:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true}borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
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
      <View style={{justifyContent:'center', alignItems:'center', width: Size.PAGER_WIDTH, height: Size.PADDING_MID,marginLeft:Size.PADDING_MID, marginBottom: Size.PADDING_SMALL}}>
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
    borderRadius:Size.PADDING_SMALL,
    paddingTop:Size.PADDING/2,
    marginRight: Size.PADDING_SMALL
  },
  Risk: {
    fontSize: Size.TEXT_TITLEM,
    fontFamily:'TitilliumWeb-Bold',
    color: '#58595B'
  },
  Recommended: {
    fontSize: Size.TEXT_DETAILM,
    color: '#DE6157',
    textAlign:'right',
    marginTop:Size.PADDING_SMALL,
    marginLeft:Size.OPTION_HEIGHT,
    fontFamily:'Roboto-Black'
  },
  Type: {
    marginLeft:Size.PADDING_MID,
    fontSize: Size.TEXT_LABELS,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Detail: {
    marginLeft:Size.PADDING_MID,
    marginRight:Size.PADDING_MID,
    fontSize: Size.TEXT_LABELS,
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    fontFamily:'SourceSansPro-Regular'
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    fontFamily:'TitilliumWeb-Bold',
    marginBottom:Size.PADDING_SMALL
  },
  Income: {
    marginLeft:Size.BUTTON_ROUND-Size.ELEVATION,
    fontSize:Size.TEXT_LABELS,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#58595B',
    marginTop: Size.ELEVATION,
    marginBottom:Size.PADDING_MID
  },
  More: {
    textAlign:'center',
    fontSize:Size.TEXT_DETAILM,
    fontFamily:'TitilliumWeb-SemiBold',
    color:'#3393D0',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.ELEVATION
  },
  Line: {
    width: Size.DEVICE_WIDTH,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_SMALL,
    marginBottom:Size.PADDING_SMALL
  },
  Button: {
    marginLeft:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID,
    marginTop:Size.PADDING_SMALL,
    backgroundColor:'#3393D0',
    borderRadius:3,
    width: Size.TI_WIDTH,
    height:Size.BUTTON_HEIGHT,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:Size.TEXT_TITLEM
  }
})
