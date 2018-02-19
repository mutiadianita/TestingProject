import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class ReviewSelfie extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Review your selﬁe with your ID.
        </Text>
        <Text style={styles.textpassword}>
        Please check whether your face & ID is clearly visible.
        </Text>
        <Image source={require('./images/idcard.png')} />
        <View style={{flexDirection: 'row'}}>
        <View style={{width: 150, padding:10}}>
            <Button
                title= "Retake"
                color= "#086BB3"
                onPress = {() => navigate("PicKTP")}
                >
            </Button>
        </View>
        <View style={{width: 150, padding:10}}>
            <Button
                title= "Confirm"
                color= "#086BB3"
                onPress = {() => navigate("Step3")}
                >
            </Button>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: 'black'
  },
  textpassword: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:30
  },
  password: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5
  },
  confirm: {
    textAlign: 'center',
    color: 'black',
    marginTop: 25,
    fontSize:13
  }
});
