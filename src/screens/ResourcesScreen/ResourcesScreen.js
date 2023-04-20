import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../../components/CustomButton/CustomButton';
import { PermissionsAndroid } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Geolocation from '@react-native-community/geolocation';


const ResourcesScreen = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState(null);
  const [error, setError] = useState(null);

  const getCurrentPosition = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setRegion({
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          },
          error => {
            console.log(error);
            setError('Failed to get current location.');
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      } else {
        setError('Location permission denied.');
      }
    } catch (err) {
      console.log(err);
      setError('Failed to request location permission.');
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Resources Landing Area</Text>

        {region ? (
          <MapView style={styles.map} region={region}>
            <Marker coordinate={region} />
          </MapView>
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <Text>Loading...</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={getCurrentPosition}>
          <Text style={styles.buttonText}>Show My Location</Text>
        </TouchableOpacity>

        <CustomButton text="Back" onPress={onSubmitPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    height: 300,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  error: {
    color: '#FF0000',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ResourcesScreen;
