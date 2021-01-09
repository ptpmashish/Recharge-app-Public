import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity,TextInput,Alert, ActivityIndicator } from "react-native";
import CustomButton from '../components/CustomButton';
import firebase from 'firebase';
import 'firebase/auth';

class Loading extends React.Component{

    
    
    render(){
        return(
            <View style={{flex:1,flexDirection:"column", alignItems:'center',justifyContent:'center'}}>
             <Text>coming soon</Text>
            </View>
        )
    }
}
export default Loading;