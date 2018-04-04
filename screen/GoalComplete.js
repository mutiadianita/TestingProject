import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ViewPagerAndroid,
  ScrollView,
  Modal
}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress/Circle';
const util = require('util');
export default class GoalComplete extends Component {
 setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }
  constructor(){
    super();
    this.state ={
      status:false,
      textDetail:'View Detail',
      modalVisible: false,
    }
  }
ShowHideTextComponentView = () =>{
  if(this.state.status == true)
  {
    this.setState({status: false,textDetail: "View Detail"})
  }
  else
  {
    this.setState({status: true ,textDetail: "Hide Detail"})
  }
}
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
    <View style={styles.Container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!this.state.modalVisible);}}>
        <View style={{flex:1,elevation:Size.PADDING_SMALL, borderRadius:Size.PADDING_SMALL,backgroundColor: 'white', marginTop:Size.DELETE_HEIGHT,marginBottom:Size.DELETE_HEIGHT, marginLeft:Size.PADDING, marginRight:Size.PADDING, padding:Size.PADDING}}>
        <TouchableOpacity onPress = {() => { this.setModalVisible(!this.state.modalVisible);}}>
          <Image source={{uri: 'ic_close_blue'}} resizeMode="contain" style={{width: Size.TEXT_TITLEM, height: Size.TEXT_TITLEM}}/>
        </TouchableOpacity>
        <Text style={{fontSize:Size.TEXT_TITLEM, textAlign:'left', color:'#58595B', marginTop:Size.PADDING_MID, width:Size.BUTTON_WIDTH/2, fontFamily:'TitilliumWeb-Bold'}}>Delete Dream</Text>
        <Text style={{fontSize:Size.TEXT_LABELS, textAlign:'left', color:'#333333', marginTop:Size.MARGIN_LONG, fontFamily:'SourceSansPro-Regular'}}>Are you sure you want to delete the completed dream? This action cannot be undone.</Text>
          <TouchableOpacity onPress = {() => { this.setModalVisible(!this.state.modalVisible);}}>
            <View style={{height:Size.DELETE_WIDTH, width:Size.CHECK, marginTop:Size.BUTTON_HEIGHT, backgroundColor:'#3393D0', borderRadius:Size.BORDER,justifyContent:'center', alignItems:'center'}}>
              <Text style={{textAlign:'center', fontFamily:'TitilliumWeb-SemiBold', fontSize:Size.TEXT_LABELM, color:'white'}}>Yes, Delete the dream</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    <ScrollView>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{paddingTop:Size.DELETE_WIDTH, flex:7, flexDirection:'column'}}>
        <View style={{alignItems:'center'}}>
          <Image source={{uri: 'graphic_congratulate_white'}} resizeMode="contain" style={{ width: Size.MARGIN_LONG, height:Size.MARGIN_LONG, marginBottom:Size.PADDING_MID}}/>
          <Text style={{fontSize:Size.TEXT_TITLE,fontFamily:'TitilliumWeb-Bold',color:'#FFFFFF'}}>Congratulation!</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Light',color:'#FFFFFF'}}>You have achieved your dream for:</Text>
          <Text style={{fontSize:Size.TEXT_LABELL,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>New House</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Light',color:'#FFFFFF'}}>Achieved </Text>
          <Text style={{fontSize:Size.TEXT_TITLEM,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>Rp 201.000.000,00</Text>
          <Text style={{fontSize:Size.TEXT_DETAILL,fontFamily:'Roboto-Bold',color:'#FFFFFF'}}>out of Rp200.000.000,00</Text>
          <TouchableOpacity onPress={this.ShowHideTextComponentView}>
            <View style={{justifyContent:'center', alignItems:'center',height:Size.BUTTON_HEIGHT, width:Size.DEVICE_WIDTH, marginTop:Size.PADDING_LONG,backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
              <Text style={{color:'white',fontFamily:'TitilliumWeb-Bold', fontSize:Size.TEXT_DETAILL}}>{this.state.textDetail}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      { this.state.status ?
      <View>
        <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
          <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Your investment strategy</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',fontSize:Size.PADDING_MID,marginLeft:Size.PADDING_CONFIRM}}>Normal</Text>
          <Text style={{fontFamily:'Roboto-Light',fontSize:Size.TEXT_LABELS, marginLeft:Size.DELETE_HEIGHT}}>Middle risk</Text>
        </View>
        <Text style={{fontSize:Size.TEXT_LABELS, color:'#58595B', marginLeft:Size.PADDING_CONFIRM, marginTop:Size.PADDING_SMALL, marginRight:Size.PADDING, fontFamily:'Roboto-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.</Text>
        <View style={styles.LongLine}/>
        <View style={{marginLeft:Size.PADDING,flexDirection:'row'}}>
          <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Your portofolio</Text>
        </View>
        <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.BankIncome}>Maybank fixed income</Text>
          <View style={{flexDirection:'row', marginLeft:Size.PADDING_CONFIRM, marginRight:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Shares</Text>
            </View>
          </View>
          <TouchableOpacity onPress = {() => navigate('Product')}>
            <Text style={styles.More}>View Detail ></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}/>
        <View style={{width:Size.PAGER_WIDTH}}>
          <Text style={styles.BankIncome}>BCA fixed income</Text>
          <View style={{flexDirection:'row', marginLeft:Size.PADDING_CONFIRM, marginRight:Size.PADDING}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Funds</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="counter-clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.5} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Bonds </Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <ProgressCircle showsText={true} borderWidth={Size.PROGRESS_BORDER} borderColor={'rgba(216,216,216,0.30)'} direction="clockwise" color={'#3393D0'} unfilledColor={'rgba(216,216,216,0.10)'}thickness={Size.PROGRESS_BORDER} progress={0.25} size={Size.OPTION_HEIGHT} style={{marginRight:Size.PADDING_SMALL}}/>
              <Text style={styles.ChartText}>Shares</Text>
            </View>
          </View>
          <TouchableOpacity onPress = {() => navigate('Product')}>
            <Text style={styles.More}>View Detail ></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}/>
        <View style={{flexDirection:'row', marginTop:Size.PADDING_MID}}>
          <Image source={{uri: 'ic_strategy_blue'}} resizeMode="contain" style={{marginLeft:Size.PADDING,width: Size.PADDING, height: Size.PADDING}}/>
          <Text style={styles.Title}>Your transaction history</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.HistoryTitle}>Monthly Saving</Text>
          <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
        </View>
        <Text style={styles.HistoryDate}>12 Sept 2017</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.HistoryTitle}>Monthly Saving</Text>
          <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
        </View>
        <Text style={styles.HistoryDate}>12 Sept 2017</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.HistoryTitle}>Monthly Saving</Text>
          <Text style={styles.HistoryAmount}>+Rp1000.000,00</Text>
        </View>
        <Text style={styles.HistoryDate}>12 Sept 2017</Text>
        <TouchableOpacity onPress = {() => navigate('Transaction')}>
          <Text style={{textAlign:'center',fontSize:Size.TEXT_DETAILM, fontFamily:'TitilliumWeb-SemiBold', color:'#3393D0', marginTop: Size.PADDING_MID,  marginBottom:Size.PADDING_MID}}>
            View all transaction >
          </Text>
        </TouchableOpacity>
      </View> :null
    }
      <View style={{flex:3, paddingTop:Size.PADDING_LONG,backgroundColor:'white', justifyContent:'center',alignItems:'center', elevation:3}}>
        <Text style={{fontFamily:'TitilliumWeb-Regular',textAlign:'center', fontSize:Size.TEXT_DETAILL,color:'#58595B'}}>I’m done viewing this dream. </Text>
        <View style={{height:Size.PADDING_LONG, marginTop:Size.PADDING_MID}}>
          <TouchableOpacity onPress = {() => { this.setModalVisible(true);}}>
            <Text style={{color:'#3393D0', fontSize:Size.TEXT_LABELM, textAlign:'center', fontFamily:'TitilliumWeb-SemiBold'}}> Archive This Dream </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1
  },
  Title: {
    fontSize:Size.TEXT_LABELS,
    color:'#3393D0',
    marginTop: Size.ELEVATION,
    marginLeft: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'

  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: Size.PADDING_SMALL,
    marginLeft: Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_DETAILL
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:Size.TEXT_DETAILM,
    marginLeft: Size.PADDING_CONFIRM,
    width:Size.CHECK
  },
  LongLine: {
    width: Size.DEVICE_WIDTH,
    height:1,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  Line: {
    width: Size.PAGER_WIDTH,
    height:1,
    marginLeft:Size.PADDING_LONG,
    backgroundColor:'#D8D8D8',
    marginTop:Size.PADDING_MID,
    marginBottom:Size.PADDING_MID
  },
  BankIncome: {
    marginLeft:Size.PADDING_CONFIRM,
    fontSize:Size.TEXT_LABELS,
    color:'#58595B',
    marginTop: Size.ELEVATION,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  More: {
    marginLeft:Size.PADDING_CONFIRM,
    textAlign:'center',
    fontSize:Size.TEXT_DETAILM,
    color:'#3393D0',
    marginTop: Size.PADDING_MID,
    marginBottom:Size.PADDING_MID,
    fontFamily:'TitilliumWeb-SemiBold'
  },
  HistoryTitle: {
    fontFamily:'TitilliumWeb-SemiBold',
    fontSize:Size.TEXT_LABELS,
    marginLeft:Size.PADDING_CONFIRM,
    color:'#58595B'
  },
  HistoryAmount: {
    fontFamily:'Roboto-Light',
    fontSize:Size.TEXT_DETAILL,
    marginLeft:Size.PADDING_CONFIRML,
    color:'#8FC196'
  },
  HistoryDate: {
    fontFamily:'Roboto-Light',
    fontSize:Size.TEXT_DETAILL,
    color: 'rgba(0,0,0,0.40)',
    marginLeft:Size.PADDING_CONFIRM,
    marginTop:Size.PADDING_SMALL,
    marginRight:Size.PADDING,
    marginBottom:Size.PADDING_MID
  },
  ButtonConfirm: {
    backgroundColor:'#3393D0',
    borderRadius:4,
    width: Size.PICKER_WIDTH,
    height: Size.PADDING_LONG,
    marginTop:Size.PADDING_SMALL,
    alignItems:'center',
    justifyContent:'center'
  },
  ChartText: {
    fontSize:Size.TEXT_DETAILL,
    fontFamily:'Roboto-Medium',
    color:'#58595B',
    marginTop:Size.TEXT_TITLEM
  }
})
