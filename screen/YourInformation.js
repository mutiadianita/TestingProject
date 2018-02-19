import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class YourInformation extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Hello. Please tell us about you?
        </Text>
        <ScrollView>
        <Text style={styles.email}>
        FULL NAME
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.email}>
        PLACE OF BIRTH
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.email}>
        DATE OF BIRTH
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.email}>
        OCCUPATION
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        </ScrollView>
        <View style={{width: 300, marginTop: 20, marginBottom:20}}>
            <Button
                title= "Next"
                color="#086BB3"
                onPress = {() => navigate("YourAddress")}
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
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 30,
    marginRight:30,
    color: 'black'
  },
  email: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
});
