import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class ReviewID extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Review your ID Card number.
        </Text>
        <ScrollView>
        <Text style={styles.subtitle}>
        Please check your ID Card and conﬁrm your ID Card number.
        </Text>
        <Image source={require('./images/idcard.png')} />
        <Text style={styles.label}>
        ID CARD NUMBER
        </Text>
        <TextInput
        style={{width: 300, fontSize: 20, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        secureTextEntry={true}
        />
        <Text style={styles.label}>
        By clicking conﬁrm, I agree the information above is correct.
        </Text>
        </ScrollView>
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
                onPress = {() => navigate("YourInformation")}
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
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: 'black'
  },
  subtitle: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:30,
    marginRight:30
  },
  label: {
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
