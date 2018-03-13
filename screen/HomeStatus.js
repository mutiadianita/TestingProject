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
  Slider,
  ImageBackground
}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class Home extends Component {
  heightmargin = 40;
  render() {
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
        <Image source={require('./asset/ic_notif_white.png')} style={{marginLeft:250,width: 30, height: 30}}/>
      </TouchableOpacity>
      </View>
        <View style={{flex: 1, zIndex:2}}>

          <View style={{padding: 20, height: 475}}>
          <Text style={{fontSize:30, color:'#FFFFFF', marginBottom:10}}>My Dreams </Text>
            <ViewPagerAndroid pageMargin={10} peekEnabled={true} style={{padding: 20, height: 348, elevation:10}}>
              <View key='1' style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'#FFFFFF',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200}}>
                  <Text style={{fontSize:14, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:20, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_about.png')} style={{width: 30, height: 30, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>You have achieved</Text>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#58595B',paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <Slider style={{ width: 300 }}
                   step={1}
                   minimumValue={0}
                   maximumValue={200000000}
                   thumbTintColor={'#F5841F'}
                   minimumTrackTintColor={'#3393D0'}
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
              <View key='2' style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'#FFFFFF',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200}}>
                  <Text style={{fontSize:14, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:20, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_about.png')} style={{width: 30, height: 30, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>You have achieved</Text>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#58595B',paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <Slider style={{ width: 300 }}
                   step={1}
                   minimumValue={0}
                   maximumValue={200000000}
                   thumbTintColor={'#5DC6C9'}
                   minimumTrackTintColor={'#3393D0'}
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
              <View key='3' style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'#FFFFFF',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200}}>
                  <Text style={{fontSize:14, color:'#58595B'}}>Dream for</Text>
                  <Text style={{fontSize:20, fontWeight:'bold',color:'#58595B'}}>New House</Text>
                  </View>
                  <Image source={require('./asset/ic_about.png')} style={{width: 30, height: 30, marginLeft:50}}>
                  </Image>
                </View>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>You have achieved</Text>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#58595B',paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:'#58595B',paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <Slider style={{ width: 300 }}
                   step={1}
                   minimumValue={0}
                   maximumValue={200000000}
                   thumbTintColor={'#5DC6C9'}
                   minimumTrackTintColor={'#3393D0'}
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
              <View key='4' style={{flex: 1,justifyContent: 'flex-start',alignItems: 'center',backgroundColor:'#FFFFFF',borderRadius:10}}>
                <View style={{flexDirection:'row',padding:20}}>
                  <View style={{flexDirection:'column', width:200, height:75}}>
                  </View>
                  <Image source={require('./asset/ic_about.png')} style={{width: 30, height: 30, marginLeft:50}}>
                  </Image>
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
  Box: {
    flexDirection:'row',
    position: 'absolute',
    marginTop:440,
    zIndex:3,
    height: 70,
    width:320,
    marginLeft:20,
    borderRadius:3,
    backgroundColor:'white',
    elevation:5,
    padding:10
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
  Button:{
    marginLeft:20,
    width: 50,
    height: 50,
    borderRadius:25,
    backgroundColor:'#00A99E'
  },
  ButtonText: {
    color:'white',
    fontSize:36,
    marginLeft:15
  },
  Header: {
    padding:20,
    flexDirection:'row',
    zIndex:2
  },
  ContentBox: {
    marginRight:20,
    marginBottom:30,
    width:200,
    height:250,
    elevation:5,
    backgroundColor:'white'
  },
  ImageBox: {
    width:200,
    height:180,
    backgroundColor:'grey'
  }
});
