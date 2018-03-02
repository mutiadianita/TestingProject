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

const util = require('util');
export default class ConfirmForm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <ScrollView>
        <View style={{flex: 1,backgroundColor:'#3393D0'}}>
          <View style={{flexDirection:"row",padding:20}}>
            <Image source={require('./asset/ic_asset.png')} style={{width: 50, height: 50}}/>
          </View>
          <Text style={{fontSize:14, color:"white",paddingLeft:30}}>Dream for</Text>
          <Text style={{fontSize:20, fontWeight:"bold",color:"white",paddingLeft:30}}>New House</Text>
          <Text style={{fontSize:14, color:"white", marginTop:20,paddingLeft:30}}>Achieved</Text>
          <Text style={{fontSize:24, fontWeight:"bold", color:"white",paddingLeft:30}}>Rp110.000.000,00</Text>
          <Text style={{fontSize:14, color:"white",paddingLeft:30}}>out of Rp200.000.000,00</Text>
          <Slider style={{ width: 300, marginLeft:20}}
             step={1}
             minimumValue={0}
             maximumValue={200000000}
             thumbTintColor={"orange"}
             minimumTrackTintColor={"white"}
            />
          <Text style={{fontSize:12, color:"white",paddingLeft:30, marginBottom:20}}>You are behind of your plan to reach your dream by Rp3.000.000,00.</Text>
          <View style={{backgroundColor:"rgba(0,0,0,0.2)",height:100, marginTop:10, alignItems:"center"}}>
            <Text style={{color:"white", fontSize:14, marginTop:15}}>Waiting for your proof of payment</Text>
            <TouchableOpacity style={{backgroundColor:"#3393D0", borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:"center", justifyContent:"center"}}>
              <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>Confirm Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:"row", marginTop:20}}>
          <Image source={require('./asset/ic_strategy_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Your investment strategy</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontFamily:"TitilliumWeb-SemiBold",fontSize:20, fontWeight:"100", marginLeft:65}}>Normal Risk</Text>
          <Text style={{fontFamily:"Roboto-Light",fontSize:16, marginLeft:75}}>Moderate</Text>
        </View>
        <Text style={{fontSize:16, color:"#58595B", marginLeft:65, marginTop:10, marginRight:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
        <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:20, marginBottom:20}}></View>
        <View style={{marginLeft:30,flexDirection:"row"}}>
          <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:10}}>Your portofolio</Text>
        </View>
        <View style={{width:320}}>
          <Text style={{marginLeft:65,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>Maybank fixed income</Text>
          <Text style={{marginLeft:65,textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100,  marginBottom:20}}>View Detail ></Text>
        </View>

        <View style={{width: 320, height:1, marginLeft:40,backgroundColor:"#D8D8D8", marginTop:20, marginBottom:20}}></View>

        <View style={{width:320}}>
          <Text style={{marginLeft:65,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>BCA fixed income</Text>
          <Text style={{marginLeft:65,textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100,  marginBottom:20}}>View Detail ></Text>
        </View>

        <View style={{width: 320, height:1, marginLeft:40,backgroundColor:"#D8D8D8", marginTop:20, marginBottom:20}}></View>

        <View style={{width:320}}>
          <Text style={{marginLeft:65,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>BCA fixed income</Text>
          <Text style={{marginLeft:65,textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100,  marginBottom:20}}>View Detail ></Text>
        </View>

        <View style={{width: 320, height:1, marginLeft:40,backgroundColor:"#D8D8D8", marginTop:20, marginBottom:20}}></View>
        <View style={{flexDirection:"row", marginTop:20}}>
          <Image source={require('./asset/ic_strategy_blue.png')} style={{marginLeft:30,width: 30, height: 30}}/>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Your transaction history</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontFamily:"TitilliumWeb-SemiBold",fontSize:16, fontWeight:"100", marginLeft:65, color:"#58595B"}}>Monthly Saving</Text>
          <Text style={{fontFamily:"Roboto-Light",fontSize:14, marginLeft:75, color:"#8FC196"}}>+Rp1000.000,00</Text>
        </View>
        <Text style={{fontSize:14, color: "rgba(0,0,0,0.40)", marginLeft:65, marginTop:10, marginRight:30, marginBottom:20}}>12 Sept 2017</Text>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontFamily:"TitilliumWeb-SemiBold",fontSize:16, fontWeight:"100", marginLeft:65, color:"#58595B"}}>Monthly Saving</Text>
          <Text style={{fontFamily:"Roboto-Light",fontSize:14, marginLeft:75, color:"#8FC196"}}>+Rp1000.000,00</Text>
        </View>
        <Text style={{fontSize:14, color: "rgba(0,0,0,0.40)", marginLeft:65, marginTop:10, marginRight:30, marginBottom:20}}>12 Sept 2017</Text>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontFamily:"TitilliumWeb-SemiBold",fontSize:16, fontWeight:"100", marginLeft:65, color:"#58595B"}}>Monthly Saving</Text>
          <Text style={{fontFamily:"Roboto-Light",fontSize:14, marginLeft:75, color:"#8FC196"}}>+Rp1000.000,00</Text>
        </View>
        <Text style={{fontSize:14, color: "rgba(0,0,0,0.40)", marginLeft:65, marginTop:10, marginRight:30, marginBottom:20}}>12 Sept 2017</Text>
        <Text style={{textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 20,  marginBottom:20}}>View all transaction ></Text>
        <View style={{ flexDirection: 'column', backgroundColor:"#EDF0F2", padding:20}}>
          <View style={{marginRight:20, width:300, height:50}}>
          <Text style={{textAlign: 'left',color: '#58595B',fontSize:14}}>Done with your investment?</Text>
          <Text style={{textAlign: 'left',color: '#58595B',fontSize:14}}>Cancel your dream and withdraw your money.</Text>
          </View>
          <TouchableOpacity  onPress = {() => navigate("TopUp_Process")} style={{height: 40, width:180, borderWidth:2, borderColor:"#3393D0", backgroundColor:"rgba(0,0,0,0)"}}>
            <Text style={{padding:5, color:"#3393D0", fontSize:18}}> Cancel & Withdraw </Text>
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
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    marginLeft:30,
    color: '#58595B'
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
  }
});
