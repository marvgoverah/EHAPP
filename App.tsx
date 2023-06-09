/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,} from 'react-native';
  import SignInScreen from './src/screens/SignInScreen/SignInScreen';
  import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
  import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
  import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
  import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
  import HomeScreen from './src/screens/HomeScreen/HomeScreen';
  import Navigation from './src/navigation';
  import HelpMeScreen from './src/screens/HelpMeScreen/HelpMeScreen';
  import ResourcesScreen from './src/screens/ResourcesScreen/ResourcesScreen';
  import SupportScreen from './src/SupportScreen/SupportScreen';
import { withAuthenticator } from 'aws-amplify-react-native';
  import  {Amplify}  from 'aws-amplify';
 
  import config from './src/aws-exports';
  
    Amplify.configure({
    ...config,
    Analytics: {
      disabled: true,
    },
  });
  

const App = () => {
 //Auth.signOut();
  return (
    <SafeAreaView style ={styles.root} >
     <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});


export default App;
