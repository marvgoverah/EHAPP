import React, { useRef, useEffect } from 'react';
import { View, Text, useWindowDimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import now from '../../../assets/images/now.png';
import logo from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from 'aws-amplify';


const HomeScreen = () => {
  const navigation = useNavigation();

  const signOut = () => {
    Auth.signOut();
  };

  const onResourcesPressed = () => {
    navigation.navigate('Resources');
  };

  const onSupportPressed = () => {
    navigation.navigate('Support');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>
       Emergency App, Help on your fingertips
        </Text>

        <Text style={styles.body}>
        Whether it's reporting an incident, checking for updates, or reaching out to a neighbor in need, every action you take makes a difference. So join us in building a stronger, more resilient community. Let's stand together and face any challenge that comes our way.
        </Text>
        <View style={styles.container}>
  <CustomButton
    text="Resources"
    onPress={onResourcesPressed}
    type="SECONDARY"    
  />
  <CustomButton
    text="Support"
    onPress={onSupportPressed}
    type="SECONDARY"
  
  />
</View>

  <Text style={styles.body}>
    In case of Emergency please press on "Help Me" button to call for assistance.
    Please remember its an offence to call for help when its npt an emergency.
  </Text>  
  <Image source={now} style={styles.now} resizeMode="contain" />

    <View>
    <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 8,
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign out
      </Text>
    </View>

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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#051C60',
    marginRight: 2,
  },
  body: {
    fontSize: 13,
    marginVertical: 10,
    fontStyle: 'italic',
    textAlign: 'left',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 60,
    marginTop: 20,
       
    },
   bottomContainer: {
      marginHorizontal: 3,
      marginVertical: 10,
    },
    now: {
      width: '50%',
      maxWidth: 300,
      maxHeight: 200,
    },
  
 });

export default HomeScreen;

