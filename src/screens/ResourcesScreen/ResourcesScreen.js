import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../../components/CustomButton/CustomButton';
import { PermissionsAndroid } from 'react-native';

Geolocation.setRNConfiguration({
  authorizationLevel: 'auto',
  skipPermissionRequests: true,
});

const ResourcesScreen = () => {
  const navigation = useNavigation();

  const { handleSubmit, control, errors } = useForm();

  const [region, setRegion] = useState(null);

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const handlePress = () => {
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
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  useEffect(() => {
    handlePress();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Resources Landing Area</Text>

        {region ? (
          <MapView style={styles.map} region={region}>
            <Marker coordinate={region} />
          </MapView>
        ) : (
          <Text>Loading...</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Show My Location</Text>
        </TouchableOpacity>

        <CustomButton text="Back" onPress={onSubmitPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  button: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ResourcesScreen;
