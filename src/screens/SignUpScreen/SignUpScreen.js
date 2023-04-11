import { useState } from 'react';
import React from "react";
import {View, Text, StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const{control,handleSubmit,watch} =useForm();
    const pwd =watch('password');
    const navigation =useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };
    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
      };
      const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
      };
      const onSignInPressed = () => {
        navigation.navigate('SignIn');
      };

    return (
        <ScrollView showsVerticalScrollIndicator ={false} >
        <View style = {styles.root}>
           <Text style= {styles.title}> Create an Account </Text>

           <CustomInput
          name="Name"
          control={control}
          placeholder="name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

            <CustomButton
            text = "Register"
            onPress={handleSubmit(onRegisterPressed)}
            />

            <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
                Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>
                Privacy Policy
            </Text>
            </Text>

        <SocialSignInButtons />

        <CustomButton
        text="Have an account? Sign in here"
        onPress={onSignInPressed}  
        type = "TERTIARY"
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
    text: {
        color: 'gray',
        marginVertical: 10,
          },
    link: {
         color: '#FDB075',
          },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10, 
    }
});

export default SignUpScreen