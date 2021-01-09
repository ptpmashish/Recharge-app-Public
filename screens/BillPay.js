/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity,Alert } from "react-native";
import CustomButton from '../components/CustomButton';

const BillPay = ({navigation}) => {
    return (
        <View style={{flex:1,flexDirection:"column", alignItems:'center',justifyContent:"center"}}>
        
            <CustomButton 
            onPress={() => alert('Coming Soon')} >
            <Text style={{fontSize:20,color:'#85209a'}}>Pay Bill</Text>
            </CustomButton> 
        </View>
    )
};
export default BillPay
