/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native"

const CustomButton = ({children,onPress,style}) => (
    <TouchableOpacity onPress={onPress} >
        <View style={[styles.button,style]}>
            {children}
        </View>
    </TouchableOpacity>
);
export default CustomButton;

const styles= StyleSheet.create({
    button: {

        width:200,
        height:50,
        backgroundColor:'#5ec7cc',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:5



    }
})