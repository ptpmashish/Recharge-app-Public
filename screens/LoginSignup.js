/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity,TextInput,Alert, ActivityIndicator } from "react-native";
import CustomButton from '../components/CustomButton';
import firebase from 'firebase';
import 'firebase/auth';

class LoginSignup extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            phoneNumber:'',
            name:'',
            // isLoading:false
        }
    }
    onSignUp = async()=>{
        if(this.state.email && this.state.password){
         
        try{
            console.log("try block is being executed")
            const response= await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
            if(response){
                this.onLogin(this.state.email,this.state.password)

            }
        }
        catch(error){
            console.log(error)
            // this.setState({isLoading:false})
            
            switch(error.code){
            case 'auth/email-already-in-use':
                alert('User already exists, try logging in');
                break;
            case 'auth/invalid-email':
                alert('invalid email, try entering complete email address');
                break;
            case 'auth/weak-password':
                alert('Password should be atleast 6 characters');
            
            }    

        }
    }
        
    else {
        alert('please enter email and password');
    }
    };
    onLogin = async()=>{
        if(this.state.email && this.state.password){
         
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
                if(response){
                    this.props.navigation.navigate('Loading')
                }
            }
            catch(error){
                console.log(error)
                switch(error.code){
                    case 'auth/user-not-found':
                        alert('no such user signed up, please sign up')
                        break;
                    case 'auth/invalid-email':
                        alert('invalid email, try entering complete email address');       
                }

            }
        }
        else {
        alert('please enter email and password');
        }
    };

    render() {
        return(
            <View style={{flex:1,flexDirection:"column", alignItems:'center',justifyContent:'center'}}>
                <Text style={{padding:10}}>Enter your details</Text>
                <TextInput style={styles.textInput}
                placeholder='Full name'
                onChangeText={(name)=> this.setState({name:name})}
                />
                <TextInput style={styles.textInput}
                placeholder='Email'
                onChangeText={(email)=> this.setState({email:email})}
                />
                <TextInput style={styles.textInput}
                placeholder='Phone Number'
                onChangeText={(phoneNumber)=> this.setState({phoneNumber:phoneNumber})}
                />
                <TextInput style={styles.textInput}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password)=> this.setState({password:password})}
                />
                <CustomButton onPress={()=>this.onSignUp()} >
                    <Text style={{fontSize:20,color:'#85209a'}}>Signup</Text>
                </CustomButton>
                <CustomButton onPress={()=>this.onLogin()} >
                    <Text style={{fontSize:20,color:'#85209a'}}>Login</Text>
                </CustomButton>

                
            </View>
        )

    }
}
export default LoginSignup


const styles=StyleSheet.create({
    container:{
    },
    textInput:{
        height:50,
        width:300,
        borderWidth:1,
        borderColor:'#7fe7e4',
        marginHorizontal:40,
        marginBottom:10,
        borderRadius:10,
        padding:10
    },
    button:{
        borderWidth:0.5,
        borderRadius:10,
    }
})

/* {this.state.isLoading? (
                    <View style={[StyleSheet.absoluteFill,{alignItems:'center',justifyContent:'center',zIndex:1000,elevation:1000}]}>
                        <ActivityIndicator size='large'/>
                    </View>)
                :null} */