import React from 'react'
import {View, Text, useWindowDimensions, Image, StyleSheet,ScrollView, TextInput } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm, Controller} from 'react-hook-form';


const SignInScreen = () => {
     const {height} = useWindowDimensions();
    const navigation=useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm();

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
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be between 8 and 24 characters',},
            maxLength: {
              value: 24,
              message: 'Password must be between 8 and 24 characters',
            },
          }}
        />                    
            <CustomButton text = "Sign In" onPress={handleSubmit(onSignInPressed)} />

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