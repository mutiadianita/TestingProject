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
  heightmargin = Size.PADDING_LONG;
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
        <Image source={require('./asset/ic_account.png')} style={{width: Size.PADDING, height: Size.PADDING}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigate('Notification')}>
        <Image source={require('./asset/ic_notif_white.png')} style={{ marginLeft:window.width-100 ,width: Size.PADDING, height: Size.PADDING}}/>
      </TouchableOpacity>
      </View>
        <View style={{flex: 1, zIndex:2}}>
          <View style={{padding: Size.PADDING_MID, height: 475}}>
          <View style={{width: (window.width)-40, flexDirection:'row', marginBottom:Size.PADDING_SMALL}}>
            <View style={{flex:4}}>
            <Text style={{fontSize:36, color:'#FFFFFF', fontFamily:'TitilliumWeb-SemiBold'}}>My Dreams </Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <TouchableOpacity
                style={styles.RoundButton}
                onPress = {() => navigate('GoalAhead')}>
                <Image source={require('./asset/ic_add_blue.png')} style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM}}/>
              </TouchableOpacity>
              </View>
          </View>
            <ViewPagerAndroid pageMargin={Size.PADDING_SMALL} peekEnabled={true} style={{padding: Size.PADDING_MID, height: 348, elevation:Size.PADDING_SMALL}}>
              <View key='1' style={styles.PagerLeft}>
                <View style={{flexDirection:'row',padding:Size.PADDING_MID}}>
                  <View style={{flexDirection:'column', width:Size.IMAGE_NW}}>
                  <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:Size.PADDING_MID, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING_MID}}>You have achieved</Text>
                <Text style={{fontSize:Size.TEXT_TITLEM, fontWeight:'bold', color:'#58595B',paddingLeft:Size.PADDING_MID}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING_MID}}>out of Rp200.000.000,00</Text>
                <StackedBarChart
                      style={ { height: Size.PADDING_SMALL, width:Size.TI_WIDTH, marginLeft:Size.PADDING_MID, marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL } }
                      keys={ keys }
                      colors={ [ '#3393D0', '#F5841F', 'rgba(0,0,0,0.20)'] }
                      data={ data }
                      svg={{ rx:5,ry:5 }}
                      showGrid={ false }
                      horizontal={true}
                  />
                <Text style={{fontSize:Size.TEXT_DETAILM, color:'#58595B',paddingLeft:Size.PADDING_MID}}>You are behind of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:120, width:320, borderBottomLeftRadius: Size.PADDING_SMALL,borderBottomRightRadius:Size.PADDING_SMALL, marginTop:Size.PADDING_SMALL, alignItems:'center'}}>
                  <Text style={{color:'#58595B', fontSize:Size.TEXT_DETAILL, marginTop:15}}>Top up to reach your dream faster.</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:Size.ELEVATION, width: Size.TI_WIDTH, height: Size.PADDING_LONG, marginTop:Size.PADDING_SMALL, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('TopUp_Amount')}>
                    <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_LABELS, fontWeight:'bold'}}>One Time Top Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View key='2' style={styles.PagerLeft}>
                <View style={{flexDirection:'row',padding:Size.PADDING_MID}}>
                  <View style={{flexDirection:'column', width:Size.IMAGE_NW}}>
                  <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:Size.PADDING_MID, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING_MID}}>You have achieved</Text>
                <Text style={{fontSize:Size.TEXT_TITLEM, fontWeight:'bold', color:'#58595B',paddingLeft:Size.PADDING_MID}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING_MID}}>out of Rp200.000.000,00</Text>
                <StackedBarChart
                      style={ { height: Size.PADDING_SMALL, width:Size.TI_WIDTH, marginLeft:Size.PADDING_MID, marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL } }
                      keys={ keys }
                      colors={[ '#3393D0', '#5DC6C9', 'rgba(0,0,0,0.20)']}
                      data={ data }
                      showGrid={ false }
                      horizontal={true}
                  />
                <Text style={{fontSize:Size.TEXT_DETAILM, color:'#58595B',paddingLeft:Size.PADDING_MID}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:120, width:320, borderBottomLeftRadius: Size.PADDING_SMALL,borderBottomRightRadius:Size.PADDING_SMALL, marginTop:Size.PADDING_SMALL, alignItems:'center'}}>
                  <Text style={{color:'#58595B', fontSize:Size.TEXT_DETAILL, marginTop:15}}>Top up to reach your dream faster.</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:Size.ELEVATION, width: Size.TI_WIDTH, height: Size.PADDING_LONG, marginTop:Size.PADDING_SMALL, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('TopUp_Amount')}>
                    <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_LABELS, fontWeight:'bold'}}>One Time Top Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View key='3' style={styles.PagerLeft}>
                <View style={{flexDirection:'row',padding:Size.PADDING_MID}}>
                  <View style={{flexDirection:'column', width:Size.IMAGE_NW}}>
                  <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:Size.PADDING_MID, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING_MID}}>You have achieved</Text>
                <Text style={{fontSize:Size.TEXT_TITLEM, fontWeight:'bold', color:'#58595B',paddingLeft:Size.PADDING_MID}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',paddingLeft:Size.PADDING_MID}}>out of Rp200.000.000,00</Text>
                <StackedBarChart
                      style={ { height: Size.PADDING_SMALL, width:Size.TI_WIDTH, marginLeft:Size.PADDING_MID, marginTop:Size.PADDING_SMALL,marginBottom:Size.PADDING_SMALL } }
                      keys={ keys }
                      colors={[ '#3393D0', '#5DC6C9', 'rgba(0,0,0,0.20)']}
                      data={ data }
                      showGrid={ false }
                      horizontal={true}
                  />
                <Text style={{fontSize:Size.TEXT_DETAILM, color:'#58595B',paddingLeft:Size.PADDING_MID}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:120, width:320, borderBottomLeftRadius: Size.PADDING_SMALL,borderBottomRightRadius:Size.PADDING_SMALL, marginTop:Size.PADDING_SMALL, alignItems:'center'}}>
                  <Text style={{color:'#58595B', fontSize:Size.TEXT_DETAILL, marginTop:15}}>Waiting for your proof of payment</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:Size.ELEVATION, width: Size.TI_WIDTH, height: Size.PADDING_LONG, marginTop:Size.PADDING_SMALL, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('TopUp_Amount')}>
                    <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_LABELS, fontWeight:'bold'}}>Confirm Payment</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View key='4' style={styles.PagerCenter}>
                <View style={{flexDirection:'row',padding:Size.PADDING_MID}}>
                  <View style={{width:Size.IMAGE_NW, height:Size.PADDING_TI*3,marginLeft:Size.PADDING_TI*2, justifyContent:'center', alignItems:'center'}}>
                  <Image source={require('./asset/graphic_congratulate_color.png')} style={{width: Size.PADDING_TI*3, height: Size.PADDING_TI*3}}/>
                  </View>
                  <Image source={require('./asset/ic_info_blue.png')} style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM}}/>
                </View>
                <Text style={{fontSize:Size.TEXT_TITLEM, color:'#58595B',textAlign:'center', fontWeight:'bold'}}>Congratulation!</Text>
                <Text style={{fontSize:Size.TEXT_DETAILL, fontWeight:'bold', color:'#58595B',textAlign:'center'}}>You have achieved your dream for:</Text>
                <Text style={{fontSize:Size.TEXT_LABELL, color:'#58595B',textAlign:'center', fontWeight:'bold'}}>New House</Text>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',textAlign:'center'}}>Achieved </Text>
                <Text style={{fontSize:Size.TEXT_TITLEM, color:'#58595B',textAlign:'center', fontWeight:'bold'}}>Rp201.000.000,00</Text>
                <Text style={{fontSize:Size.TEXT_DETAILL, color:'#58595B',textAlign:'center'}}>out of Rp200.000.000,00</Text>
                  <TouchableOpacity
                  style={{backgroundColor:'#3393D0', borderRadius:Size.ELEVATION, width: Size.TI_WIDTH, height: Size.PADDING_LONG, marginTop:Size.PADDING_SMALL, alignItems:'center', justifyContent:'center'}}
                  onPress = {() => navigate('GoalComplete')}>
                    <Text style={{color:'#FFFFFF', fontSize:Size.TEXT_LABELS, fontWeight:'bold'}}>Start another Dream?</Text>
                  </TouchableOpacity>
              </View>
            </ViewPagerAndroid>
          </View>
        </View>
        </LinearGradient>
        <View style={{zIndex:2, backgroundColor:'white', paddingTop:Size.PADDING_MID, paddingLeft:Size.PADDING_MID}}>
          <Text style={{fontSize:Size.TEXT_LABELM, color:'#4D4D4C', marginBottom:Size.TEXT_TITLEM}}>Knowledge Center</Text>
          <View style={{flexDirection:'row', flex:1}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress = {() => navigate('WhyInvest')}>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
              <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', margin:Size.PADDING_SMALL}}>Why is it better to start investing early?</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
              <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', margin:Size.PADDING_SMALL}}>Healthcare Costs Can Add Up in Retirement</Text>
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
    fontSize:Size.TEXT_LABELL,
    color:'#58595B'
  },
  Subtitle: {
    fontSize:Size.TEXT_LABELS,
    color:'#58595B'
  },
  Header: {
    paddingTop:Size.PADDING_MID,
    paddingLeft:Size.PADDING_MID,
    paddingRight:Size.PADDING_MID,
    flexDirection:'row',
    zIndex:2,
    width: window.width
  },
  ContentBox: {
    marginRight:Size.PADDING_MID,
    marginBottom:Size.PADDING,
    width:Size.IMAGE_NW,
    height:Size.CBOX_HEIGHT,
    elevation:Size.ELEVATION,
    backgroundColor:'white',
    borderRadius:Size.PADDING_SMALL,
  },
  ImageBox: {
    width:Size.IMAGE_NW,
    height:Size.IMAGE_NH,
    backgroundColor:'grey',
    borderTopLeftRadius:Size.PADDING_SMALL,
    borderTopRightRadius:Size.PADDING_SMALL
  },
  PagerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'#FFFFFF',
    marginLeft:Size.PADDING_MID,
    borderRadius:Size.PADDING_SMALL
  },
  RoundButton:{
    marginLeft:Size.PADDING_MID,
    width: Size.PADDING,
    height: Size.PADDING,
    borderRadius:Size.PADDING/2,
    backgroundColor:'#FFFFFF',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  },
  PagerCenter: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    borderRadius:Size.PADDING_SMALL
  }
});
