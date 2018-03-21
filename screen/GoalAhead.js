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
}  from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
import { StackedBarChart } from 'react-native-svg-charts';
const util = require('util');
export default class GoalAhead extends Component {
  render() {
    const data = [
            {
                plan:100000000,
                gap:10000000,
                goal:90000000,
            }
          ];
    const colors = [ '#3393D0', '#5DC6C9', 'rgba(0,0,0,0.20)'];
    const keys   = [ 'plan', 'gap', 'goal'];
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <ScrollView>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{paddingTop:50}}>
          <Text style={{fontSize:36, color:'#FFFFFF',paddingLeft:30, marginBottom:16,  fontFamily:'TitilliumWeb-SemiBold'}}>Retirement</Text>
          </LinearGradient>
          <View style={{backgroundColor:'#FFFFFF', flex: 1}}>
          <Text style={{fontSize:14, color:'#58595B', marginTop:20,paddingLeft:30, fontFamily:'Roboto-Regular'}}>You have achieved </Text>
          <Text style={{fontSize:24, color:'#58595B',paddingLeft:30, fontFamily:'Roboto-Bold'}}>Rp110.000.000,00</Text>
          <Text style={{fontSize:14, color:'#58595B',paddingLeft:30, fontFamily:'Roboto-Bold'}}>out of Rp200.000.000,00</Text>
          <StackedBarChart
                style={ { height: 10, width:300, marginLeft:30, marginTop:10,marginBottom:10 } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                horizontal={true}
            />
          <Text style={{fontSize:12, color:'#000000',paddingLeft:30, marginBottom:20, fontFamily:'Roboto-Regular'}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
          <View style={{backgroundColor:'rgba(0,0,0,0.2)',height:100, marginTop:10, alignItems:'center'}}>
            <Text style={{color:'#000000', fontSize:14, marginTop:15, fontFamily:'SourceSansPro-Regular'}}>Top up to reach your dream faster.</Text>
            <TouchableOpacity style={styles.ButtonConfirm}>
              <Text style={{color:'white', fontSize:16, fontFamily:'TitilliumWeb-Bold'}}>One Time Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:20}}>
          <Image source={require('./asset/ic_strategy_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
          <Text style={styles.Title}>Your investment strategy</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',fontSize:20,marginLeft:65}}>Normal</Text>
          <Text style={{fontFamily:'Roboto-Light',fontSize:16, marginLeft:100}}>Middle risk</Text>
        </View>
        <Text style={{fontSize:16, color:'#58595B', marginLeft:65, marginTop:10, marginRight:30, fontFamily:'Roboto-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
        <View style={styles.LongLine}></View>
        <View style={{marginLeft:30,flexDirection:'row'}}>
          <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
          <Text style={styles.Title}>Your portofolio</Text>
        </View>
        <View style={{width:320}}>
          <Text style={styles.BankIncome}>Maybank fixed income</Text>
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
          <Text style={styles.BankIncome}>BCA fixed income</Text>
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
          <Text style={styles.BankIncome}>BCA fixed income</Text>
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
        <View style={{flexDirection:'row', marginTop:20}}>
          <Image source={require('./asset/ic_strategy_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
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
          <Text style={{textAlign:'center',fontSize:12, fontFamily:'TitilliumWeb-SemiBold', color:'#3393D0', marginTop: 20,  marginBottom:20}}>
            View all transaction >
          </Text>
        </TouchableOpacity>
        <View style={{alignItems:'center', flexDirection: 'column', backgroundColor:'#EDF0F2', paddingTop:20, paddingBottom:20}}>
          <Text style={{textAlign: 'center',color: '#58595B',fontSize:14, fontFamily:'TitilliumWeb-Regular'}}>Change your mind?</Text>
          <Text style={{textAlign: 'center',color: '#58595B',fontSize:14, fontFamily:'TitilliumWeb-Regular'}}>Change your dream to something else.</Text>
          <TouchableOpacity  onPress = {() => navigate('CancelWithdraw')}>
            <Text style={{textAlign:'center',fontFamily:'TitilliumWeb-SemiBold', color:'#3393D0', fontSize:18, marginTop:14}}>Switch Dream </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress = {() => navigate('CancelWithdraw')}>
          <Text style={{textAlign: 'center',color: '#58595B',fontSize:14, fontFamily:'TitilliumWeb-Regular', marginTop:36}}>or, you can delete this dream</Text>
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
    fontSize:16,
    color:'#3393D0',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-SemiBold'

  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 65,
    fontSize:14
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:12,
    marginLeft: 65,
    width:230
  },
  LongLine: {
    width: 360,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:20,
    marginBottom:20
  },
  Line: {
    width: 320,
    height:1,
    marginLeft:40,
    backgroundColor:'#D8D8D8',
    marginTop:20,
    marginBottom:20
  },
  BankIncome: {
    marginLeft:65,
    fontSize:16,
    color:'#58595B',
    marginTop: 5,
    marginBottom:20,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  More: {
    marginLeft:65,
    textAlign:'center',
    fontSize:12,
    color:'#3393D0',
    marginTop: 20,
    marginBottom:20,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  HistoryTitle: {
    fontFamily:'TitilliumWeb-SemiBold',
    fontSize:16,
    marginLeft:65,
    color:'#58595B'
  },
  HistoryAmount: {
    fontFamily:'Roboto-Light',
    fontSize:14,
    marginLeft:75,
    color:'#8FC196'
  },
  HistoryDate: {
    fontFamily:'Roboto-Light',
    fontSize:14,
    color: 'rgba(0,0,0,0.40)',
    marginLeft:65,
    marginTop:10,
    marginRight:30,
    marginBottom:20
  },
  ButtonConfirm: {
    backgroundColor:'#3393D0',
    borderRadius:4,
    width: 280,
    height: 40,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:14,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:24
  }
});
