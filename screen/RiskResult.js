import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ViewPagerAndroid
}  from 'react-native';
const util = require('util');
export default class RiskResult extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1, backgroundColor:"#3393D0"}}>
      <ViewPagerAndroid style={{flex: 1, margin:30}} initialPage={0}>
        <View style={styles.Pager}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>Low risk</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: "#DE6157", textAlign:"right", marginTop:10, marginLeft:80}}>RECOMMENDED</Text>
          </View>
          <Text style={{fontSize: 16, color: "#58595B"}}>Conservative</Text>
          <Text style={{fontSize: 16, color: "#58595B", marginTop: 150}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 260, marginBottom: 30, marginTop:30}}>
              <Button
                  title= "Use This Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Success")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>Low risk</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: "#DE6157", textAlign:"right", marginTop:10, marginLeft:80}}>RECOMMENDED</Text>
          </View>
          <Text style={{fontSize: 16, color: "#58595B"}}>Moderate Conservative</Text>
          <Text style={{fontSize: 16, color: "#58595B", marginTop: 150}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 260, marginBottom: 30, marginTop:30}}>
              <Button
                  title= "Use This Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Success")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>Normal risk</Text>
          </View>
          <Text style={{fontSize: 16, color: "#58595B"}}>Moderate</Text>
          <Text style={{fontSize: 16, color: "#58595B", marginTop: 150}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 260, marginBottom: 30, marginTop:30}}>
              <Button
                  title= "Continue"
                  color= "#086BB3"
                  onPress = {() => navigate("Success")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>High risk</Text>
          </View>
          <Text style={{fontSize: 16, color: "#58595B"}}>Aggresive</Text>
          <Text style={{fontSize: 16, color: "#58595B", marginTop: 150}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 260, marginBottom: 30, marginTop:30}}>
              <Button
                  title= "Use This Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Success")}
                  >
              </Button>
          </View>
        </View>
        <View style={styles.Pager}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#58595B"}}>High risk</Text>
          </View>
          <Text style={{fontSize: 16, color: "#58595B"}}>Moderate Aggresive</Text>
          <Text style={{fontSize: 16, color: "#58595B", marginTop: 150}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
          <View style={{width: 260, marginBottom: 30, marginTop:30}}>
              <Button
                  title= "Use This Strategy"
                  color= "#086BB3"
                  onPress = {() => navigate("Success")}
                  >
              </Button>
          </View>
        </View>
      </ViewPagerAndroid>
      <View style={{justifyContent:"center", alignItems:"center", width: 320, height: 50, padding:10, marginLeft:20, marginBottom: 30}}>
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
    marginLeft:20,
    borderRadius:3,
    padding:20
  }
})
