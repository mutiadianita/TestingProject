'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Slider
}  from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
const util = require('util');
export default class WhyInvest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100000,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseInt(value),
      };
    });
  }
  render() {
    const {value} = this.state;
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      <View>
      <ImageBackground source={{uri: 'chess'}} resizeMode="cover" style={styles.HeaderImage}>
      <Image  source={{uri: 'ic_back_white'}} resizeMode="contain" style={{alignItems:'flex-start',marginTop:Size.PADDING_LONG, marginLeft:Size.PADDING_MID, marginBottom:Size.PADDING_MID, width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
      <Text style={styles.HeaderTitle}>Why Invest?</Text>
      <Text style={styles.HeaderDetail}>Xdana is the first independent online investment adviser in Indonesia.</Text>
      </ImageBackground>
      </View>
      <ScrollView>
        <Text style={styles.Title}>Invest vs Savings
        </Text>
        <Text style={styles.Label}>
        Xdana provides its customers with the opportunity to make regular monthly investments of just IDR 100,000 in Indonesia’s best mutual funds</Text>
        <View style={{marginLeft:Size.PADDING_MID, height:Size.BUTTON_WIDTH, width:Size.PAGER_WIDTH, backgroundColor:'white', elevation:Size.ELEVATION, borderRadius:Size.PADDING_SMALL, marginBottom:Size.PADDING_SMALL}}>
          <View style={{ height:Size.BOX_HEIGHT, width:Size.PAGER_WIDTH, backgroundColor:'#3393D0', alignItems:'center', borderTopLeftRadius:Size.PADDING_SMALL, borderTopRightRadius:Size.PADDING_SMALL}}>
          <View style={{justifyContent:'space-between', paddingRight:Size.MID_WIDTH,flexDirection:'row', paddingLeft:Size.PADDING, paddingTop:Size.OPTION_HEIGHT/10, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <Text style={{width:Size.IMAGE_STEP,color:'#FFFFFF', fontFamily:'Roboto-Regular'}}>Monthly Investment</Text>
              <Text style={{width:Size.WIDTH_MID,color:'#FFFFFF', fontWeight:'bold', fontFamily:'Roboto-Medium'}}>Rp {String(value)}</Text>
            </View>
            <View>
              <Slider onValueChange={this.change.bind(this)} value={value} minimumValue={100000} maximumValue={5000000} thumbTintColor={'#FFFFFF'} maximumTrackTintColor={'rgba(0,0,0,0.20)'} minimumTrackTintColor={'#FFFFFF'} style={{width:Size.BUTTON_WIDTH, marginBottom:Size.PADDING_SMALL}}/>
            </View>
          </View>
          <View style={{justifyContent:'space-between', paddingRight:Size.MID_WIDTH,flexDirection:'row', paddingLeft:Size.MID_WIDTH, paddingTop:Size.OPTION_HEIGHT/10, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <Text style={styles.Year}>In 1 year</Text>
            <Text style={styles.Money}>Rp1.000.000,00</Text>
          </View>
          <View style={{marginLeft:Size.MID_WIDTH}}>
            <ProgressBar progress={0.05} width={Size.PICKER_WIDTH} height={Size.OPTION_HEIGHT/10} color={'#5DC6C9'} borderColor={'transparent'} unfilledColor={'rgba(179,184,195,0.50)'}/>
          </View>
          <View style={{justifyContent:'space-between', paddingRight:Size.MID_WIDTH,flexDirection:'row', padding:Size.MID_WIDTH}}>
            <Text style={styles.Year}>In 5 year</Text>
            <Text style={styles.Money}>Rp3.300.000,00</Text>
          </View>
          <View style={{marginLeft:Size.MID_WIDTH, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <ProgressBar progress={0.165} width={Size.PICKER_WIDTH} height={Size.OPTION_HEIGHT/10} color={'#5DC6C9'} borderColor={'transparent'} unfilledColor={'rgba(179,184,195,0.50)'}/>
          </View>
          <View style={{justifyContent:'space-between', paddingRight:Size.MID_WIDTH,flexDirection:'row', paddingLeft:Size.MID_WIDTH, paddingTop:Size.OPTION_HEIGHT/10, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <Text style={styles.Year}>In 5 year</Text>
            <Text style={styles.Money}>Rp6.000.000,00</Text>
          </View>
          <View style={{marginLeft:Size.MID_WIDTH, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <ProgressBar progress={0.3} width={Size.PICKER_WIDTH} height={Size.OPTION_HEIGHT/10} color={'#5DC6C9'} borderColor={'transparent'} unfilledColor={'rgba(179,184,195,0.50)'}/>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row', paddingLeft:Size.MID_WIDTH,paddingRight:Size.MID_WIDTH, paddingTop:Size.OPTION_HEIGHT/10, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <Text style={styles.Year}>In 10 year</Text>
            <Text style={styles.Money}>Rp14.000.000,00</Text>
          </View>
          <View style={{marginLeft:Size.MID_WIDTH, paddingBottom:Size.OPTION_HEIGHT/10}}>
            <ProgressBar progress={0.7} width={Size.PICKER_WIDTH} height={Size.OPTION_HEIGHT/10} color={'#5DC6C9'} borderColor={'transparent'} unfilledColor={'rgba(179,184,195,0.50)'}/>
          </View>

        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#FFFFFF'
  },
  Title: {
    fontSize: Size.TEXT_LABELL,
    fontWeight:'bold',
    textAlign: 'left',
    color: '#58595B',
    marginLeft:Size.PADDING_MID,
    marginTop:Size.OPTION_HEIGHT/10,
    fontFamily: 'TitilliumWeb-Bold'
  },
  Label: {
    textAlign: 'left',
    fontSize:Size.TEXT_LABELS,
    color: '#58595B',
    marginTop: Size.OPTION_HEIGHT/10,
    marginLeft: Size.PADDING_MID,
    marginBottom:Size.PADDING_SMALL,
    fontFamily: 'Roboto-Regular'
  },
  Year: {
    color:'#58595B',
    width:Size.MARGIN_LONG,
    fontFamily:'Roboto-Regular'
  },
  Money: {
    color:'#58595B',
    fontWeight:'bold',
    fontFamily:'Roboto-Medium',
    marginRight:Size.MID_WIDTH
  },
  HeaderImage:{
    alignItems:'flex-start',
    width: Size.DEVICE_WIDTH,
    height: Size.IMAGE_NH
  },
  BackButton: {
    alignItems:'flex-start',
    marginTop:Size.PADDING_LONG,
    marginLeft:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID,
    width: Size.PADDING_LONG,
    height: Size.PADDING_LONG
  },
  HeaderTitle: {
    marginLeft:Size.PADDING_MID,
    fontSize:Size.TEXT_LABELL,
    fontWeight:'bold',
    color:'#FFFFFF',
    fontFamily:'TitilliumWeb-Bold'
  },
  HeaderDetail: {
    marginLeft:Size.PADDING_MID,
    fontSize:Size.TEXT_LABELS,
    color:'#FFFFFF'
  }
});
