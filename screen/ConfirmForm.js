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

const util = require('util');
export default class ConfirmForm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>Please Confirm the following document based on the data that you have entered.</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_goal_dream.png')} style={{marginLeft:30,width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Your dream
        </Text>
        </View>
        <Text style={styles.Label}>Dream Target Amount</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.Label}>Reached in</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.Label}>Monthly investment</Text>
        <TextInput
        style={{marginLeft:60,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.Check}>By investing in XDANA, you save up to </Text>
        <Text style={styles.Check}>Rp1.000.000,00 per year compared to saving in the bank </Text>
        <TouchableOpacity onPress = {() => navigate("LearnMore")}>
        <Text style={{fontSize:12, color:"#3393D0", fontWeight:"bold", marginLeft:65}}>Learn more</Text>
        </TouchableOpacity>
        <View style={{width: 360, height:1, backgroundColor:"#D8D8D8", marginTop:20, marginBottom:20}}></View>
        <View style={{flexDirection:"row"}}>
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

        <View style={{ flexDirection: 'row', marginLeft:30}}>
          <CheckBox title='Click Here'/>
          <View style={{marginRight:20, width:280, height:50}}>
          <Text style={{textAlign: 'left',color: '#58595B',fontSize:12, marginLeft: 5}}>I agree to allow XDANA to automatically take money every month from my bank account to reach my dream on time.</Text>
          </View>
        </View>
        </ScrollView>
        <View style={{marginBottom:40,marginTop:20,justifyContent:"center", alignItems:"center"}}>
          <View style={{width:300}}>
          <Button style={{backgroundColor:"#2775C0", width:300}}
            onPress = {() => navigate("Bank")}
            title="Continue"
            color= "#086BB3"
            >
          </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
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
