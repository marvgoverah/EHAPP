import React from 'react'
import {View, Text, useWindowDimensions, Image, StyleSheet,ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.png';

const HomeScreen = () => {
    const {height} = useWindowDimensions();

    return (
        <ScrollView showsVerticalScrollIndicator ={false} >
        <View style = {styles.root}>
            <Image
            source ={logo}
            style ={[styles.logo, {height: height*0.3}]}
            resizeMode = 'contain' 
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


    export default HomeScreen;