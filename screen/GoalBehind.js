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
import LinearGradient from 'react-native-linear-gradient';
import { StackedBarChart } from 'react-native-svg-charts';
const util = require('util');
export default class GoalBehind extends Component {
  render() {
    const data = [
            {
                plan:100000000,
                gap:10000000,
                goal:90000000,
            }
          ];
    const colors = [ '#3393D0', '#F5841F', 'rgba(0,0,0,0.20)'];
    const keys   = [ 'plan', 'gap', 'goal'];
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <ScrollView>
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#F5841F', '#DE6157']} style={{paddingTop:Size.PADDING_SMALL}}>
          <View style={{width:Size.DEVICE_WIDTH,justifyContent:'space-between', flexDirection:'row'}}>
            <Image source={{uri: 'ic_back_white'}} style={{height:Size.PADDING, width:Size.PADDING, marginLeft:Size.PADDING_MID}}/>
            <Image
              source={{uri: 'ic_asset'}} resizeMode="contain"
              style={{
                width: Size.PADDING_LONG,
                height: Size.PADDING_LONG,
                marginRight: Size.PADDING_MID
              }}
            />
          </View>
          <Text style={{fontSize:Size.TEXT_TITLEL, color:'#FFFFFF',paddingLeft:Size.PADDING, marginBottom:Size.TEXT_LABELS,  fontFamily:'TitilliumWeb-SemiBold'}}>New House</Text>
          </LinearGradient>
          <View style={{backgroundColor:'#FFFFFF', flex: 1}}>
          <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B', marginTop:Size.PADDING_MID,paddingLeft:Size.PADDING, fontFamily:'Roboto-Regular'}}>You have achieved </Text>
          <Text style={{fontSize:Size.TEXT_TITLEM, color:'#58595B',paddingLeft:Size.PADDING, fontFamily:'Roboto-Bold'}}>Rp110.000.000,00</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING, fontFamily:'Roboto-Bold'}}>out of Rp200.000.000,00</Text>
          <StackedBarChart
                style={ { height: Size.PADDING_SMALL, width:Size.BUTTON_WIDTH, marginLeft:Size.PADDING, marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                horizontal={true}
            />
          <Text style={{fontSize:Size.TEXT_DETAILM, color:'#000000',paddingLeft:Size.PADDING, marginBottom:Size.PADDING_MID, fontFamily:'Roboto-Regular'}}>You are behind of your plan to reach your dream by Rp3.000.000,00.</Text>
          <View style={{backgroundColor:'rgba(0,0,0,0.2)',height:Size.DELETE_HEIGHT, marginTop:Size.PADDING_SMALL, alignItems:'center'}}>
            <Text style={{color:'#000000', fontSize:Size.TEXT_DETAILL, marginTop:15, fontFamily:'SourceSansPro-Regular'}}>Top up to reach your dream faster.</Text>
            <TouchableOpacity style={styles.ButtonConfirm}>
              <Text style={{color:'white', fontSize:Size.TEXT_LABELS, fontFamily:'TitilliumWeb-Bold'}}>One Time Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
          <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Your investment strategy</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',fontSize:Size.PADDING_MID,marginLeft:Size.PADDING_CONFIRM}}>Normal</Text>
          <Text style={{fontFamily:'Roboto-Light',fontSize:Size.TEXT_LABELS, marginLeft:Size.DELETE_HEIGHT}}>Middle risk</Text>
        </View>
        <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', marginLeft:Size.PADDING_CONFIRM, marginTop:Size.PADDING_SMALL, marginRight:Size.PADDING, fontFamily:'Roboto-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
        <View style={styles.LongLine}></View>
        <View style={{marginLeft:Size.PADDING,flexDirection:'row'}}>
          <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Your portofolio</Text>
        </View>
        <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.BankIncome}>Maybank fixed income</Text>
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
          <Text style={styles.BankIncome}>BCA fixed income</Text>
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
          <Text style={styles.BankIncome}>BCA fixed income</Text>
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
        <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
          <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Your transaction history</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.HistoryTitle}>Monthly Saving</Text>
          <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
        </View>
        <Text style={styles.HistoryDate}>12 Sept 2017</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.HistoryTitle}>Monthly Saving</Text>
          <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
        </View>
        <Text style={styles.HistoryDate}>12 Sept 2017</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.HistoryTitle}>Monthly Saving</Text>
          <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
        </View>
        <Text style={styles.HistoryDate}>12 Sept 2017</Text>
        <TouchableOpacity onPress = {() => navigate('Transaction')}>
          <Text style={{textAlign:'center',fontSize:Size.TEXT_DETAILM, fontFamily:'TitilliumWeb-SemiBold', color:'#3393D0', marginTop: Size.PADDING_MID,  marginBottom:Size.PADDING_MID}}>
            View all transaction >
          </Text>
        </TouchableOpacity>
        <View style={{alignItems:'center', flexDirection: 'column', backgroundColor:'#EDF0F2', paddingTop:Size.PADDING_MID, paddingBottom:Size.PADDING_MID}}>
          <Text style={{textAlign: 'center',color: '#58595B',fontSize:Size.TEXT_DETAILL, fontFamily:'TitilliumWeb-Regular'}}>Change your mind?</Text>
          <Text style={{textAlign: 'center',color: '#58595B',fontSize:Size.TEXT_DETAILL, fontFamily:'TitilliumWeb-Regular'}}>Change your dream to something else.</Text>
          <TouchableOpacity  onPress = {() => navigate('CancelWithdraw')}>
            <Text style={{textAlign:'center',fontFamily:'TitilliumWeb-SemiBold', color:'#3393D0', fontSize:Size.TEXT_LABELM, marginTop:Size.TEXT_DETAILL}}>Switch Dream </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress = {() => navigate('CancelWithdraw')}>
          <Text style={{textAlign: 'center',color: '#58595B',fontSize:Size.TEXT_DETAILL, fontFamily:'TitilliumWeb-Regular', marginTop:Size.TEXT_TITLEL}}>or, you can delete this dream</Text>
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
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILL
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:Size.TEXT_DETAILM,
    marginLeft: Size.PADDING_CONFIRM,
    width:Size.CHECK
  },
  LongLine: {
    width: Size.DEVICE_WIDTH,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  Line: {
    width: Size.PAGER_WIDTH,
    height:1,
    marginLeft:Size.PADDING_LONG,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  BankIncome: {
    marginLeft:Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    marginTop: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  More: {
    marginLeft:Size.PADDING_CONFIRM,
    textAlign:'center',
    fontSize:Size.TEXT_DETAILM,
    color:'#3393D0',
    marginTop: Size.PADDING_MID,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  HistoryTitle: {
    fontFamily:'TitilliumWeb-SemiBold',
    fontSize:Size.TEXT_LABELS,
    marginLeft:Size.PADDING_CONFIRM,
    color:'#58595B'
  },
  HistoryAmount: {
    fontFamily:'Roboto-Light',
    fontSize:Size.TEXT_DETAILL,
    marginLeft:Size.PADDING_CONFIRML,
    color:'#8FC196'
  },
  HistoryDate: {
    fontFamily:'Roboto-Light',
    fontSize:Size.TEXT_DETAILL,
    color: 'rgba(0,0,0,0.40)',
    marginLeft:Size.PADDING_CONFIRM,
    marginTop:Size.PADDING_SMALL,
    marginRight:Size.PADDING,
    marginBottom:Size.PADDING_MID
  },
  ButtonConfirm: {
    backgroundColor:'#3393D0',
    borderRadius:4,
    width: Size.PICKER_WIDTH,
    height: Size.PADDING_LONG,
    marginTop:Size.PADDING_SMALL,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:Size.TEXT_TITLEM
  }
});
