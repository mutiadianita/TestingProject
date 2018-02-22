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
export default class ReviewID extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Please Confirm the image you’ve taken</Text>
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: '#58595B'
  },
  label: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 30,
    marginLeft: 5,
    fontSize: 14
  },
  details: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 5,
    fontSize:10
  }
});
