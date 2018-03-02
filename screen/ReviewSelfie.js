import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class ReviewSelfie extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={stylesContainer}>

        <Text style={styles.Title}>Please Confirm the image you’ve taken</Text>
        <ScrollView>
        <View style={{marginTop:20, alignItems:'center', justifyContent:'center'}}>
        <Image style={{width:300, height:350}} source={require('./images/bapak.png')} />
        </View>
        </ScrollView>
        <View style={{width: 300, padding:10}}>
            <Button
                title= "Retake Image"
                color= "#086BB3"
                height={200}
                onPress = {() => navigate("Step2")}
                >
            </Button>
        </View>
        <View style={{width: 300, padding:10,marginBottom: 30}}>
            <Button
                title= "Confirm"
                color= "#086BB3"
                onPress = {() => navigate("Step3")}
                >
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: '#58595B'
  }
});
