import { useState } from 'react';
import React from "react";
import {View, Text, StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';


const SignUpScreen = () => {

    const[username, setUsername] =useState ('');
    const[email, setEmail] =useState ('');
    const[password, setPassword] =useState ('');
    const[passwordRepeat, setPasswordRepeat] =useState ('');

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
            placeholder = "Username"
            value={username}
            setValue={setUsername}
            />
            <CustomInput
            placeholder = "Email"
            value={email}
            setValue={setEmail}
            />
            <CustomInput
            placeholder = "Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
            />
            <CustomInput
            placeholder = "Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
            />
            <CustomButton
            text = "Register"
            onPress={onRegisterPressed}
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