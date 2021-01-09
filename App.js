/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native";
// import {createAppContainer, , createDrawerNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';

// //const AppSwitchNavigator = createSwitchNavigator

// const App = () => <AppContainer/>;

// const AppSwitchNavigator = createSwitchNavigator({
//   WelcomeScreen
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);
// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import home from './screens/home';
import BillPay from './screens/BillPay';
import Recharge from './screens/Recharge';
import * as firebase from 'firebase';
import {firebaseConfig} from './config/Config';
import LoginSignup from './screens/LoginSignup';
import Loading from './screens/Loading';
import Settings from './screens/Settings';


// if (firebase.apps.lenght===0){
//   firebase.initializeApp(firebaseConfig)
// }
firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();
//const Switch = createSwitchNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerShown: false
      }}>
        
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
          
        />
      
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="Recharge" component={Recharge} />
        <Stack.Screen name="BillPay" component={BillPay} />
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Settings" component={Loading} />




        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;


