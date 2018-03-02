import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ViewPagerAndroid,
  ScrollView
}  from 'react-native';
const util = require('util');
export default class Strategy extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
    <View style={{flex:1, backgroundColor:"#3393D0"}}>
      <ViewPagerAndroid style={{flex: 1, margin:20}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>Low risk</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: "#DE6157", textAlign:"right", marginTop:10, marginLeft:80}}>RECOMMENDED</Text>
          </View>
          <Text style={{marginLeft:20,fontSize: 16, color: "#58595B"}}>Conservative</Text>
          <Text style={{marginLeft:20, marginRight:20,fontSize: 16, color: "#58595B", marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:10, marginBottom:10}}></View>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:"row"}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:10}}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={{marginLeft:55,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>Maybank fixed income</Text>
          <Text style={{textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100, marginLeft: 5, marginBottom:20}}>View details ></Text>
          </View>
          </ScrollView>
          <View style={{marginLeft:30, marginBottom:20,marginTop:10,width: 260}}>
              <Button
                  title= "Use this Investment Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Confirm")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>Low risk</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: "#DE6157", textAlign:"right", marginTop:10, marginLeft:80}}>RECOMMENDED</Text>
          </View>
          <Text style={{marginLeft:20,fontSize: 16, color: "#58595B"}}>Moderate Conservative</Text>
          <Text style={{marginLeft:20, marginRight:20,fontSize: 16, color: "#58595B", marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:10, marginBottom:10}}></View>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:"row"}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:10}}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={{marginLeft:55,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>Maybank fixed income</Text>
          <Text style={{textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100, marginLeft: 5, marginBottom:20}}>View details ></Text>
          </View>
          </ScrollView>
          <View style={{marginLeft:30, marginBottom:20,marginTop:10,width: 260}}>
              <Button
                  title= "Use this Investment Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Confirm")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>Normal risk</Text>
          </View>
          <Text style={{marginLeft:20,fontSize: 16, color: "#58595B"}}>Conservative</Text>
          <Text style={{marginLeft:20, marginRight:20,fontSize: 16, color: "#58595B", marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:10, marginBottom:10}}></View>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:"row"}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:10}}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={{marginLeft:55,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>Maybank fixed income</Text>
          <Text style={{textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100, marginLeft: 5, marginBottom:20}}>View details ></Text>
          </View>
          </ScrollView>
          <View style={{marginLeft:30, marginBottom:20,marginTop:10,width: 260}}>
              <Button
                  title= "Use this Investment Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Confirm")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>High risk</Text>
          </View>
          <Text style={{marginLeft:20,fontSize: 16, color: "#58595B"}}>Aggresive</Text>
          <Text style={{marginLeft:20, marginRight:20,fontSize: 16, color: "#58595B", marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:10, marginBottom:10}}></View>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:"row"}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:10}}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={{marginLeft:55,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>Maybank fixed income</Text>
          <Text style={{textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100, marginLeft: 5, marginBottom:20}}>View details ></Text>
          </View>
          </ScrollView>
          <View style={{marginLeft:30, marginBottom:20,marginTop:10,width: 260}}>
              <Button
                  title= "Use this Investment Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Confirm")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{marginLeft:20,flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>High risk</Text>
          </View>
          <Text style={{marginLeft:20,fontSize: 16, color: "#58595B"}}>Moderate Aggresive</Text>
          <Text style={{marginLeft:20, marginRight:20,fontSize: 16, color: "#58595B", marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:10, marginBottom:10}}></View>
          <ScrollView>
          <View style={{marginLeft:20,flexDirection:"row"}}>
            <Image source={require('./asset/ic_strategy_blue.png')} style={{width: 30, height: 30}}/>
            <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:10}}>Your portofolio</Text>
          </View>
          <View style={{width:320}}>
          <Text style={{marginLeft:55,fontSize:16, fontWeight:"bold", color:"#58595B", marginTop: 5, marginBottom:20}}>Maybank fixed income</Text>
          <Text style={{textAlign:"center",fontSize:12, fontWeight:"bold", color:"#3393D0", marginTop: 100, marginLeft: 5, marginBottom:20}}>View details ></Text>
          </View>
          </ScrollView>
          <View style={{marginLeft:30, marginBottom:20,marginTop:10,width: 260}}>
              <Button
                  title= "Use this Investment Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Confirm")}
                  >
              </Button>
          </View>
        </View>
      </ViewPagerAndroid>
      <View style={{justifyContent:"center", alignItems:"center", width: 320, height: 50,marginLeft:20, marginBottom: 10}}>
        <Text style={{color:"white"}}> Swipe to see other Investment Strategies</Text>
      </View>
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
    borderRadius:3,
    paddingTop:20,
    height:600,
    marginRight: 10
  }
})
