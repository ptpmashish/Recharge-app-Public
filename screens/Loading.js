import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity,TextInput,Alert, ActivityIndicator } from "react-native";
import CustomButton from '../components/CustomButton';
import * as firebase from 'firebase';
import 'firebase/auth';

class Loading extends React.Component{

    componentDidMount(){
        this.checkIfLoggedIn();
    };
    checkIfLoggedIn=()=>{
         firebase.auth().onAuthStateChanged((user) => {
             console.log(user)
            if(user){
                this.props.navigation.replace('home',{user})
            }
            else {
                this.props.navigation.navigate('LoginSignup')
            }
        }); 
    };
    // componentWillUnmount=()=> {
    //     this.unsubscribe(); 
    // };
    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
             <ActivityIndicator size='large'/>
            </View>
        )
    }
}
export default Loading;