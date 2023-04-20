import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Linking, Platform, PermissionsAndroid } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import now from '../../../assets/images/now.png';
import logo from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from 'aws-amplify';
import Geolocation from 'react-native-geolocation-service'; // import geolocation library


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
  const [currentCoords, setCurrentCoords] = useState(null); // initialize state for current coordinates

  useEffect(() => {
    // ask for location permission when the component mounts
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then((result) => {
        if (result === 'granted') {
          // if permission is granted, get current coordinates
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setCurrentCoords({ latitude, longitude });
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        }
      });

      // ask for permission to make a phone call
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      ).then((result) => {
        if (result !== 'granted') {
          console.log('You need to grant permission to make phone calls');
        }
      });
    } else {
      // if not on Android, get current coordinates
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentCoords({ latitude, longitude });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    }
  }, []);

  const handleHelpMeNowPress = () => {
    if (!currentCoords) {
      console.log('Current coordinates not available');
      return;
    }
  
    // on clicking the "help me now" image, call emergency number and send text message with current coordinates
    const emergencyNumber = 'tel:790276688';
    const textNumber = 'sms:+48790276688';
    const textMessage = `Help! I need emergency assistance. My current coordinates are: ${currentCoords.latitude}, ${currentCoords.longitude}`;
  
    // check if phone call permission has been granted before making a call
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CALL_PHONE).then((result) => {
        if (result) {
          Linking.openURL(emergencyNumber); // open phone app to call emergency number
        } else {
          console.log('You need to grant permission to make phone calls');
        }
      });
    } else {
      Linking.openURL(emergencyNumber); // open phone app to call emergency number
    }
  
    Linking.openURL(textNumber + `?body=${textMessage}`); // open messaging app with pre-filled text message
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


  <Text style={styles.helpText} onPress={handleHelpMeNowPress}>Help me now</Text>
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
    helpText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 10,
    },
  
 });

export default HomeScreen;

