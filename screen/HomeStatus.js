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

const util = require('util');
export default class Home extends Component {
  heightmargin = 40;
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View>
      <View style={styles.Header}>
        <Image source={require('./asset/ic_account.png')} style={{width: 30, height: 30}}/>
        <Text style={styles.HeaderText}>Xdana</Text>
        <Image source={require('./asset/ic_notif_white.png')} style={{marginLeft:180,width: 30, height: 30}}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Box}>
          <View>
            <Text style={styles.Title}>Create a New Dream</Text>
            <Text style={styles.Subtitle}>Tap here to create a new Dream</Text>
          </View>
          <TouchableOpacity
            style={styles.Button}
            onPress = {() => navigate("GoalAhead")}>
            <Text style={styles.ButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, zIndex:2}}>
          <View style={{backgroundColor:"#3393D0", padding: 20, height: 475}}>
            <ViewPagerAndroid style={{padding: 20, height: 400}}>
              <View style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'rgba(0,0,0,0.1)',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:"row",padding:20}}>
                  <Image source={require('./asset/ic_asset.png')} style={{width: 50, height: 50}}/>
                  <ImageBackground source={require('./asset/ic_info_solid.png')} style={{width: 30, height: 30, marginLeft:200}}>
                  <Text style={{color:"#3393D0", fontSize:18, textAlign:"center", fontWeight:"bold"}}>i</Text>
                  </ImageBackground>
                </View>
                <Text style={{fontSize:14, color:"white",paddingLeft:20}}>Dream for</Text>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",paddingLeft:20}}>New House</Text>
                <Text style={{fontSize:14, color:"white", marginTop:20,paddingLeft:20}}>Achieved</Text>
                <Text style={{fontSize:24, fontWeight:"bold", color:"white",paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:"white",paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <Slider style={{ width: 300 }}
                   step={1}
                   minimumValue={0}
                   maximumValue={200000000}
                   thumbTintColor={"orange"}
                   minimumTrackTintColor={"white"}
                  />
                <Text style={{fontSize:12, color:"white",paddingLeft:20}}>You are behind of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:"rgba(0,0,0,0.2)",height:100, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:"center"}}>
                  <Text style={{color:"white", fontSize:14, marginTop:15}}>Top up to reach your dream faster.</Text>
                  <TouchableOpacity style={{backgroundColor:"#3393D0", borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>One Time Top Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'rgba(0,0,0,0.1)',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:"row",padding:20}}>
                  <Image source={require('./asset/ic_asset.png')} style={{width: 50, height: 50}}/>
                  <ImageBackground source={require('./asset/ic_info_solid.png')} style={{width: 30, height: 30, marginLeft:200}}>
                  <Text style={{color:"#3393D0", fontSize:18, textAlign:"center", fontWeight:"bold"}}>i</Text>
                  </ImageBackground>
                </View>
                <Text style={{fontSize:14, color:"white",paddingLeft:20}}>Dream for</Text>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",paddingLeft:20}}>New House</Text>
                <Text style={{fontSize:14, color:"white", marginTop:20,paddingLeft:20}}>Achieved</Text>
                <Text style={{fontSize:24, fontWeight:"bold", color:"white",paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:"white",paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <Slider style={{ width: 300 }}
                   step={1}
                   minimumValue={0}
                   maximumValue={200000000}
                   thumbTintColor={"#5DC6C9"}
                   minimumTrackTintColor={"white"}
                  />
                <Text style={{fontSize:12, color:"white",paddingLeft:20}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:"rgba(0,0,0,0.2)",height:100, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:"center"}}>
                  <Text style={{color:"white", fontSize:14, marginTop:15}}>Top up to reach your dream faster.</Text>
                  <TouchableOpacity style={{backgroundColor:"#3393D0", borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>One Time Top Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'rgba(0,0,0,0.1)',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:"row",padding:20}}>
                  <Image source={require('./asset/ic_asset.png')} style={{width: 50, height: 50}}/>
                  <ImageBackground source={require('./asset/ic_info_solid.png')} style={{width: 30, height: 30, marginLeft:200}}>
                  <Text style={{color:"#3393D0", fontSize:18, textAlign:"center", fontWeight:"bold"}}>i</Text>
                  </ImageBackground>
                </View>
                <Text style={{fontSize:14, color:"white",paddingLeft:20}}>Dream for</Text>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",paddingLeft:20}}>New House</Text>
                <Text style={{fontSize:14, color:"white", marginTop:20,paddingLeft:20}}>Achieved</Text>
                <Text style={{fontSize:24, fontWeight:"bold", color:"white",paddingLeft:20}}>Rp110.000.000,00</Text>
                <Text style={{fontSize:14, color:"white",paddingLeft:20}}>out of Rp200.000.000,00</Text>
                <Slider style={{ width: 300 }}
                   step={1}
                   minimumValue={0}
                   maximumValue={200000000}
                   thumbTintColor={"#5DC6C9"}
                   minimumTrackTintColor={"white"}
                  />
                <Text style={{fontSize:12, color:"white",paddingLeft:20}}>You are ahead of your plan to reach your dream by Rp3.000.000,00.</Text>
                <View style={{backgroundColor:"rgba(0,0,0,0.2)",height:100, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:"center"}}>
                  <Text style={{color:"white", fontSize:14, marginTop:15}}>Waiting for your proof of payment</Text>
                  <TouchableOpacity style={{backgroundColor:"#3393D0", borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>Confirm Payment</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-start',alignItems: 'flex-start',backgroundColor:'rgba(0,0,0,0.1)',marginLeft:20,  borderRadius:10}}>
                <View style={{flexDirection:"row",padding:20}}>

                  <ImageBackground source={require('./asset/ic_info_solid.png')} style={{width: 30, height: 30, marginLeft:250}}>
                  <Text style={{color:"#3393D0", fontSize:18, textAlign:"center", fontWeight:"bold"}}>i</Text>
                  </ImageBackground>
                </View>
                <View style={{justifyContent:"center", alignItems:"center", width:320, height:20}}>
                  <Text style={{fontSize:28, fontWeight:"bold",color:"white"}}>Congratulation!</Text>
                  <Text style={{fontSize:14, color:"white"}}>You have achieved your dream for:</Text>
                  <Text style={{fontSize:20, fontWeight:"bold",color:"white"}}>New House</Text>
                  <Text style={{fontSize:14, color:"white", marginTop:20}}>Achieved</Text>
                  <Text style={{fontSize:24, fontWeight:"bold", color:"white"}}>Rp201.000.000,00</Text>
                  <Text style={{fontSize:14, color:"white"}}>out of Rp200.000.000,00</Text>
                </View>
                <View style={{backgroundColor:"rgba(0,0,0,0.2)",height:100, width:320, borderBottomLeftRadius: 10,borderBottomRightRadius:10, marginTop:10, alignItems:"center"}}>
                  <Text style={{color:"white", fontSize:14, marginTop:15}}>Waiting for your proof of payment</Text>
                  <TouchableOpacity style={{backgroundColor:"#3393D0", borderRadius:4, width: 280, height: 40, marginTop:10, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>Start another Dream?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ViewPagerAndroid>
          </View>
        </View>
        <View style={{zIndex:2, height:500, backgroundColor:"white", paddingTop:60, paddingLeft:20}}>
          <Text style={{fontSize:18, color:"#4D4D4C"}}>Knowledge Center</Text>
          <View style={{flexDirection:'row', flex:1}}>
          <ScrollView horizontal={true}>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
              <Text style={{fontSize:16, color:"#58595B", margin:10}}>Why is it better to start investing early?</Text>
            </View>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
              <Text style={{fontSize:16, color:"#58595B", margin:10}}>Healthcare Costs Can Add Up in Retirement</Text>
            </View>
            <View style={styles.ContentBox}>
              <View style={styles.ImageBox}>
              </View>
            </View>
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
    backgroundColor:"white",
    elevation:5,
    padding:10
  },
  Title: {
    fontWeight:"bold",
    fontSize:20,
    color:"#58595B"
  },
  Subtitle: {
    fontSize:16,
    color:"#58595B"
  },
  Button:{
    marginLeft:20,
    width: 50,
    height: 50,
    borderRadius:25,
    backgroundColor:"#00A99E"
  },
  ButtonText: {
    color:"white",
    fontSize:36,
    marginLeft:15
  },
  Header: {
    padding:20,
    flexDirection:"row",
    backgroundColor:"#3393D0",
    zIndex:2
  },
  HeaderText: {
    marginLeft:20,
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },
  ContentBox: {
    marginTop:20,
    marginRight:20,
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
