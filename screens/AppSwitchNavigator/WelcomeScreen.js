/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity, Alert } from "react-native";
import CustomButton from '../../components/CustomButton';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1,flexDirection:"column"}}>
        <View style={{flex:1,backgroundColor:'#7acedb', alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:35,color:'#85209a'}}>LagaShop</Text>
        </View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            
            <CustomButton 
            onPress={() => navigation.navigate('LoginSignup')} >
            <Text style={{fontSize:20,color:'#85209a'}}>Login</Text>
            </CustomButton>  
            <CustomButton 
            onPress={() => navigation.navigate('LoginSignup')} >
            <Text style={{fontSize:20,color:'#85209a'}}>Sign Up</Text>
            </CustomButton>    
        </View>
        </View>
    )
    
};
export default WelcomeScreen



// export default class WelcomeScreen extends React.Component{
//     constructor(props) {
//         super(props);
        
//     }
//     render(){
//         return(
            // <View style={{flex:1,flexDirection:"column"}}>
            // <View style={{flex:1,backgroundColor:'#7acedb', alignItems:'center',justifyContent:'center'}}>
            //     <Text style={{fontSize:50}}>LagaShop</Text>
            // </View>
            // <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            //     <Button
            //           onPress={() => navigation.navigate('home')}                      
            //         title ='Login'
            //         color="#841584"
            //         marginBottom='10'>
            //     </Button>
            //     <Button 
                    
            //         title ='Sign up'
            //         color="#841584">
            //     </Button>
            //     <CustomButton> 
                                  
            //     </CustomButton>

                
                        
            // </View>
            // </View>
//         )
//     }
// }

// //const style=