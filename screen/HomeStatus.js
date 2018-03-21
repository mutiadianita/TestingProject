import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewPagerAndroid,
  ScrollView,
  ImageBackground
}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackedBarChart } from 'react-native-svg-charts';
const util = require('util');
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
export default class HomeStatus extends Component {
  heightmargin = 40;
  render() {
    const data = [
            {
                plan:100000000,
                gap:10000000,
                goal:90000000,
            }
          ];
    const keys   = [ 'plan', 'gap', 'goal'];
    var { navigate } = this.props.navigation;
    return (
      <View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:1}}>
      <View style={styles.Header}>
      <TouchableOpacity onPress = {() => navigate('Profile')}>
        <Image source={require('./asset/ic_account.png')} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigate('Notification')}>
        <Image source={require('./asset/ic_notif_white.png')} style={{ marginLeft:window.width-100 ,width: 30, height: 30}}/>
      </TouchableOpacity>
      </View>
        <View style={{flex: 1, zIndex:2}}>
          <View style={{padding: 20, height: 475}}>
          <View style={{width: (window.width)-40, flexDirection:'row', marginBottom:10}}>
            <View style={{flex:4}}>
            <Text style={{fontSize:36, color:'#FFFFFF', fontFamily:'TitilliumWeb-SemiBold'}}>My Dreams </Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <TouchableOpacity
                style={styles.RoundButton}
                onPress = {() => navigate('GoalAhead')}>
                <Image source={require('./asset/ic_add_blue.png')} style={{width: 24, height: 24}}/>
              </TouchableOpacity>
              </View>
          </View>
            <ViewPagerAndroid pageMargin={10} peekEnabled={true} style={{padding: 20, height: 348, elevation:10}}>
              <View key='1' style={styles.PagerLeft}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200}}>
                  <Text style={{fontSize:14, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:20, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: 24, height: 24, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>You have achieved</Text>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#58595B',paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <StackedBarChart
                      style={ { height: 10, width:280, marginLeft:20, marginTop:10,marginBottom:10 } }
                      keys={ keys }
                      colors={ [ '#3393D0', '#F5841F', 'rgba(0,0,0,0.20)'] }
                      data={ data }
                      svg={{ rx:5,ry:5 }}
                      showGrid={ false }
                      horizontal={true}
                  />
                <Text style={{fontSize:12, color:'#58595B',paddingLeft:20}}>You are behind of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:120, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:'center'}}>
                  <Text style={{color:'#58595B', fontSize:14, marginTop:15}}>Top up to reach your dream faster.</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('TopUp_Amount')}>
                    <Text style={{color:'#FFFFFF', fontSize:16, fontWeight:'bold'}}>One Time Top Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View key='2' style={styles.PagerLeft}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200}}>
                  <Text style={{fontSize:14, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:20, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: 24, height: 24, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>You have achieved</Text>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#58595B',paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <StackedBarChart
                      style={ { height: 10, width:280, marginLeft:20, marginTop:10,marginBottom:10 } }
                      keys={ keys }
                      colors={[ '#3393D0', '#5DC6C9', 'rgba(0,0,0,0.20)']}
                      data={ data }
                      showGrid={ false }
                      horizontal={true}
                  />
                <Text style={{fontSize:12, color:'#58595B',paddingLeft:20}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:120, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:'center'}}>
                  <Text style={{color:'#58595B', fontSize:14, marginTop:15}}>Top up to reach your dream faster.</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('TopUp_Amount')}>
                    <Text style={{color:'#FFFFFF', fontSize:16, fontWeight:'bold'}}>One Time Top Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View key='3' style={styles.PagerLeft}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200}}>
                  <Text style={{fontSize:14, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:20, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: 24, height: 24, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>You have achieved</Text>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#58595B',paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <StackedBarChart
                      style={ { height: 10, width:280, marginLeft:20, marginTop:10,marginBottom:10 } }
                      keys={ keys }
                      colors={[ '#3393D0', '#5DC6C9', 'rgba(0,0,0,0.20)']}
                      data={ data }
                      showGrid={ false }
                      horizontal={true}
                  />
                <Text style={{fontSize:12, color:'#58595B',paddingLeft:20}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:120, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:'center'}}>
                  <Text style={{color:'#58595B', fontSize:14, marginTop:15}}>Waiting for your proof of payment</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('TopUp_Amount')}>
                    <Text style={{color:'#FFFFFF', fontSize:16, fontWeight:'bold'}}>Confirm Payment</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View key='4' style={styles.PagerCenter}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{width:200, height:75,marginLeft:50, justifyContent:'center', alignItems:'center'}}>
                  <Image source={require('./asset/graphic_congratulate_color.png')} style={{width: 76, height: 76}}/>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: 24, height: 24}}/>
                </View>
                <Text style={{fontSize:24, color:'#58595B',textAlign:'center', fontWeight:'bold'}}>Congratulation!</Text>
                <Text style={{fontSize:14, fontWeight:'bold', color:'#58595B',textAlign:'center'}}>You have achieved your dream for:</Text>
                <Text style={{fontSize:20, color:'#58595B',textAlign:'center', fontWeight:'bold'}}>New House</Text>
                <Text style={{fontSize:14, color:'#58595B',textAlign:'center'}}>Achieved </Text>
                <Text style={{fontSize:24, color:'#58595B',textAlign:'center', fontWeight:'bold'}}>Rp201.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',textAlign:'center'}}>out of Rp200.000.000,00</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('GoalComplete')}>
                    <Text style={{color:'#FFFFFF', fontSize:16, fontWeight:'bold'}}>Start another Dream?</Text>
                  </TouchableOpacity>
              </View>
            </ViewPagerAndroid>
          </View>
        </View>
        </LinearGradient>
        <View style={{zIndex:2, backgroundColor:'white', paddingTop:20, paddingLeft:20}}>
          <Text style={{fontSize:18, color:'#4D4D4C', marginBottom:24}}>Knowledge Center</Text>
          <View style={{flexDirection:'row', flex:1}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress = {() => navigate('WhyInvest')}>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
              <Text style={{fontSize:16, color:'#58595B', margin:10}}>Why is it better to start investing early?</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
              <Text style={{fontSize:16, color:'#58595B', margin:10}}>Healthcare Costs Can Add Up in Retirement</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
            </View>
            </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
</ScrollView>
</View>

    );
  }
}

const styles = StyleSheet.create({
  Container: {
    zIndex:0,
    flex: 1,
    backgroundColor:'white',
     position: 'absolute'
  },
  Title: {
    fontWeight:'bold',
    fontSize:20,
    color:'#58595B'
  },
  Subtitle: {
    fontSize:16,
    color:'#58595B'
  },
  Header: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    zIndex:2,
    width: window.width
  },
  ContentBox: {
    marginRight:20,
    marginBottom:30,
    width:200,
    height:250,
    elevation:5,
    backgroundColor:'white',
    borderRadius:10,
  },
  ImageBox: {
    width:200,
    height:180,
    backgroundColor:'grey',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  PagerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'#FFFFFF',
    marginLeft:20,
    borderRadius:10
  },
  RoundButton:{
    marginLeft:20,
    width: 32,
    height: 32,
    borderRadius:16,
    backgroundColor:'#FFFFFF',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  PagerCenter: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    borderRadius:10
  }
});
