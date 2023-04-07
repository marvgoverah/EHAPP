import React from 'react'
import {View, Text, useWindowDimensions, Image, StyleSheet,ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation=useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('Home');
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
           };

    
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
            };

    return (
        <ScrollView showsVerticalScrollIndicator ={false} >
        <View style = {styles.root}>
            <Image
            source ={logo}
            style ={[styles.logo, {height: height*0.3}]}
            resizeMode = 'contain' 
            /> 
            <CustomInput
             placeholder = "Username"
             value = {username}
             setValue={setUsername}/>
            <CustomInput 
            placeholder = "Password"
            value = {password} 
            setValue={setPassword}
            secureTextEntry />

            <CustomButton text = "Sign In" onPress={onSignInPressed} />

            <CustomButton
             text = "Forgot Password" 
             onPress={onForgotPasswordPressed}
             type = 'TERTIARY'/> 

            <SocialSignInButtons />
                    
            <CustomButton
            text= "Dont have an account? Create one"
            onPress={onSignUpPressed}
            type='TERTIARY' 
            />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
          },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
         },
});

export default SignInScreen