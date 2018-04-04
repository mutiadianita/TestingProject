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
  ImageBackground,
  Slider
}  from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';
import ModalDropdown from 'react-native-modal-dropdown';
const util = require('util');
const percentage= 0.25;
export default class GoalAhead extends Component {
  render() {
    const data = [  {
                value: 5000, date:19
            },
            {
                value: 5500, date: 20
            },
            {
                value: 5200, date: 21
            },
            {
                value: 5300, date:22
            },
            {
                value: 5500, date: 23
            }];
    const contentInset = { top: Size.PADDING_MID, bottom: Size.PADDING_MID };
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <ScrollView>
        <View style={{flex: 1}}>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']}>
          <View style={styles.Header}>
            <TouchableOpacity onPress = {() => navigate('Profile')}>
              <Image source={{uri: 'ic_close_white'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            </TouchableOpacity>
            <ModalDropdown
              options={['Prospectus', 'Fund Fact Sheet']}
              style={{flex: 1,marginLeft:Size.PICKER_WIDTH, borderRadius:Size.PADDING_SMALL}}
              textStyle={{fontSize:Size.TEXT_LABELS, fontFamily:'Roboto-Regular', color:'black'}}
              dropdownStyle={{ width: Size.MARGIN_LONG, height: Size.TEXT_TITLEL*2, elevation:Size.ELEVATION}}>
              <Image source={{uri: 'ic_more_white'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            </ModalDropdown>
          </View>
          <Text style={{fontFamily:'TitilliumWeb-Bold',fontSize:Size.TEXT_TITLEM,color:'#FFFFFF', marginLeft:Size.TEXT_LABELS}}> Maybank Fixed income</Text>
          <View style={ { height: Size.IMAGE_NW, flexDirection:'row'} }>
          <LineChart
              style={ {flex:1} }
              data={ data }
              yAccessor={({ item }) => item.value}
              xAccessor={({ item }) => item.date}
              svg={{ stroke: '#FFFFFF', strokeWidth:Size.BORDER }}
              numberOfTicks={2}
              contentInset={contentInset}
          />
          <YAxis
            data={data}
            contentInset={ contentInset }
            svg={{fill: '#FFFFFF', fontSize: Size.TEXT_DETAILS,}}
            yAccessor={({ item }) => item.value}
            numberOfTicks={3}
            formatLabel={ value => `${value}` }
          />
          </View>
          <XAxis
              style={{marginRight:Size.PADDING}}
              data={ data }
              numberOfTicks={5}
              xAccessor={({ item }) => item.date}
              contentInset={{ left: 5, right: 5 }}
              svg={{ fill: '#FFFFFF',fontSize: Size.TEXT_DETAILS }}
          />
          <View style={{height:Size.DELETE_HEIGHT, marginTop:Size.PADDING_SMALL, alignItems:'flex-start', flexDirection:'row'}}>
          <View style={{height:Size.PADDING_CONFIRML, width:Size.BANK_WIDTH, padding:Size.ELEVATION, backgroundColor:'rgba(0,0,0,0.2)', marginLeft:8}}>
            <Text style={{fontSize:Size.TEXT_DETAILM, fontFamily:'Roboto-Regular',color:'#FFFFFF'}}>Current NAV:</Text>
            <Text style={{fontSize:Size.TEXT_LABELL, fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>Rp5.359,21</Text>
            <Text style={{fontSize:Size.TEXT_DETAILM, fontFamily:'Roboto-Regular',color:'#FFFFFF'}}>as of 17 Nov 2017</Text>
          </View>
          <View style={{height:Size.PADDING_CONFIRML, width:Size.PADDING_CONFIRML, padding:Size.ELEVATION, backgroundColor:'rgba(0,0,0,0.2)', marginLeft:Size.PADDING_SMALL}}>
            <View style={styles.Triangle}/>
            <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_DETAILL, fontFamily:'Roboto-Medium'}}>+ 20%</Text>
            <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_DETAILL, fontFamily:'Roboto-Medium'}}>+ 268.21</Text>
          </View>
          </View>
          </LinearGradient>
        </View>
        <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
          <Image source={{uri: 'ic_percentage'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Funds Distribution</Text>
        </View>
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
        <View style={styles.LongLine}/>
        <View style={{marginLeft:Size.PADDING,flexDirection:'row'}}>
          <Image source={{uri: 'ic_top5'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Top 5</Text>
        </View>
        <View style={{width:Size.PAGER_WIDTH, marginBottom:Size.PADDING_MID}}>
          <Text style={styles.Company}>Arwana Citramulia Tbk, PT</Text>
          <Text style={styles.Company}>Puradelta lestari Tbk, PT</Text>
          <Text style={styles.Company}>SBSN PBS012</Text>
          <Text style={styles.Company}>Telekomunikasi Tbk, PT</Text>
          <Text style={styles.Company}>Unilever Indonesia Tbk, PT</Text>
        </View>
        <View style={styles.LongLine}/>
        <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
          <Image source={{uri: 'ic_doc'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>About</Text>
        </View>
        <Text style={styles.AboutTitle}>Fund Type</Text>
        <Text style={styles.AboutDetails}>Maybank Fixed Income</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Bank Custody</Text>
        <Text style={styles.AboutDetails}>Maybank</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Launch Date</Text>
        <Text style={styles.AboutDetails}>24 Jan 2011</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Currency</Text>
        <Text style={styles.AboutDetails}>IDR</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Custody Cost</Text>
        <Text style={styles.AboutDetails}>Up to 0.25% / year</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Fund Manager Cost</Text>
        <Text style={styles.AboutDetails}>Up To 0.15% / year</Text>
        <View style={styles.Line}/>
        <Text style={styles.AboutTitle}>Assets Under Management</Text>
        <Text style={styles.AboutDetails}>Rp 2.21 Billion</Text>
        <View style={styles.Line}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'white',
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  Header: {
    paddingLeft: Size.PADDING_MID,
    paddingTop:Size.PADDING_MID,
    paddingRight:Size.PADDING_MID,
    flexDirection:'row'
  },
  LongLine: {
    width: Size.DEVICE_WIDTH,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  Line: {
    width: Size.PICKER_WIDTH,
    height:1,
    marginLeft:Size.BUTTON_ROUND,
    backgroundColor:'#D8D8D8',
    marginBottom:Size.PADDING_MID,
    marginRight:Size.PADDING_MID
  },
  Company: {
    marginLeft:Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    fontFamily:'Roboto-Regular'
  },
  AboutDetails: {
    fontFamily:'Roboto-Regular',
    fontSize:16,
    marginLeft:Size.PADDING_CONFIRM,
    color:'rgba(0,0,0,0.60)'
  },
  AboutTitle: {
    fontFamily:'Roboto-Light',
    fontSize:Size.DETAILL,
    marginLeft:Size.PADDING_CONFIRM,
    color:'rgba(88,89,91,0.80)'
  },
  ButtonConfirm: {
    backgroundColor:'#3393D0',
    borderRadius:Size.BORDER,
    width: Size.PICKER_WIDTH,
    height: Size.PADDING_LONG,
    marginTop:Size.PADDING_SMALL,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:Size.DETAILL,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:Size.IMAGE_ICON
  },
  Triangle: {
  width: 0,
  height: 0,
  borderLeftWidth: Size.TEXT_DETAILM,
  borderRightWidth: Size.TEXT_DETAILM,
  borderBottomWidth: Size.MID_WIDTH,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#5DC6C9',
  marginBottom:Size.ELEVATION
}
});
