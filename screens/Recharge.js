/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React from 'react';
import { View, Text, StyleSheet,TextInput } from "react-native";
import axios from 'axios';
import md5 from 'md5';
import CustomButton from '../components/CustomButton';

// eslint-disable-next-line prettier/prettier
let mdtext:'';
let params='';
class Recharge extends React.Component{
    constructor(props) {
        super();
        this.state={
            phoneNumber:'',
            network:'',
            stateIndia:'',
            rechargeAmount:''
        }
        //this.rechargeConfirm=this.rechargeConfirm.bind(this)
        // this.params = this.params.bind(this)
    }

    rechargeConfirm = () => {
        mdtext = md5('XXXXXXX');
        params = {
        "CorporateId":"XXXX",
        "SecurityKey":"XXXXX",
        "AuthKey":"XXXXXXXXXX",
        "Mobile":this.state.phoneNumber,
        "Provider":this.state.network,
        "Location":this.state.stateIndia,
        "Amount":this.state.rechargeAmount,
        "ServiceType":"M",
        "SystemReference":"123456787",
        "IsPostpaid":"N",
        "APIChkSum":"s",
        "NickName":"airtel50"};
        axios.post('https://webhook.site/a2db8380-dd73-49fe-bd16-b224f9ef92bd', params,{
            "headers": {
            "content-type": "application/json",
            },     
          })
          .then(function(response) {     
              console.log(response);
          })
          .catch(function(error) {
              console.log(error);
              

          })
        
      };
    
      
      
  render() {
    return (
        <View style={{flex:1,flexDirection:"column", alignItems:'center',justifyContent:'center'}}>
            <TextInput style={styles.textInput}
                placeholder='10 digit Phone number'
                keyboardType='number-pad'
                onChangeText={(text)=>this.setState({phoneNumber:text})}
            />
            <TextInput style={styles.textInput}
                placeholder='Network eg. Airtel, Jio'
                onChangeText={(text)=>this.setState({network:text})}

            />
            <TextInput style={styles.textInput}
                placeholder='State eg Maharashtra'
                onChangeText={(text)=>this.setState({stateIndia:text})}

            />
            <TextInput style={styles.textInput}
                placeholder='Recharge Amount eg 10, 50, 300'
                onChangeText={text=>this.setState({rechargeAmount:text})}

            />

            {/* <Button
                onpress={()=>this.rechargeConfirm}
                title ='Recharge Confirm'
                color="#1cb8c0"
            /> */}
             <CustomButton onPress={this.rechargeConfirm}> 
            <Text style={{fontSize:20, color:'#85209a'}}>Recharge Now</Text>
            </CustomButton> 
            
        </View>
    
    ) 
  }
};
export default Recharge





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
