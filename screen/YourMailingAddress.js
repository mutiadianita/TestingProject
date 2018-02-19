import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  CheckBox
}  from 'react-native';

const util = require('util');
export default class YourMailingAddress extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Where is your mailing address?
        </Text>
        <ScrollView>
        <Text style={styles.label}>
        ADDRESS
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        />
        <Text style={styles.label}>
        PROVINCE
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>
        KOTA/KABUPATEN
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>
        KECAMATAN
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>
        KELURAHAN
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
        <Text style={styles.label}>
        POSTAL CODE
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        keyboardType="numeric"
        maxLength={5}
        />
    </ScrollView>
      <View style={{width: 300, marginTop: 20, marginBottom:20}}>
        <Button
            title= "Next"
            color="#086BB3"
            onPress = {() => navigate("ConfirmData")} >
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
    marginRight: 30,
    color: 'black'
  },
  label: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
  check: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    fontSize:12
  }
});
