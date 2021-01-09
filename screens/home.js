/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native";
import CustomButton from '../components/CustomButton';


const App = ({navigation}) => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex:1}}>
        <SafeAreaView style={{backgroundColor:'#14cdd1'}} />

        <View style={{height:70, backgroundColor: '#14cdd1', alignItems: 'center', justifyContent:'center'}}>
          <Text style={[styles.setFont]}>LagaShop</Text>
        </View>

        <View style={{flex:1,backgroundColor:'#fff', alignItems:'center',justifyContent:'center'}}>
            
            <CustomButton 
            onPress={() => navigation.navigate('Recharge')} >
            <Text style={{fontSize:20,color:'#85209a'}}>Recharge</Text>
            </CustomButton>    
            <CustomButton 
            onPress={() => navigation.navigate('BillPay')} >
            <Text style={{fontSize:20,color:'#85209a'}}>Pay Bills</Text>
            </CustomButton>      
        </View>
        <View style={{height:70, backgroundColor:'#14cdd1'}}>
        </View>
        <SafeAreaView style={{backgroundColor:'black'}} />
        </View>
    )
  };
export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  setFont: {
    fontSize:24,
    fontWeight : 'bold',
    color:'#574f52'
  }
});

//<SafeAreaView style={{backgroundColor:'black'}} />
//</View><SafeAreaView style={{backgroundColor:'black'}} />

