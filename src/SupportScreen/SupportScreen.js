import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import { TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput/CustomInput';
import { Linking } from 'react-native';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SupportScreen = () => {

  const navigation = useNavigation();

  
  const {control, handleSubmit, watch} = useForm();
  const onSubmit = data => console.log(data);

  const onDonatePressed = () => {
    Linking.openURL('https://www.paypal.com/donate');
  };

    const onBackPressed = () => {
    navigation.navigate('Home');
  };
 
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.pageContainer}>
      
        <Text style={styles.title}>Offer Support</Text>

        <Text style={styles.subTitle}>How can you help?</Text>

        <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.inspirationText}>
            To donate money towards any of our causes click here.
          </Text>
        </View>
        <View>
        <CustomButton
          text="Donate Cash"
          onPress={onDonatePressed}
        />
        </View>
      </View>

        <Text style={styles.inspirationText}>If you would like to volunteer your services to assist in any way you can, please fill in your details and our agents will get in touch with you.</Text>

        <View style={{flexDirection: 'column'}}>
          <CustomInput
            placeholder="Fullname"
            name="Fullname"
            control={control}
            rules={{required: 'Fullname is required'}}
            style={styles.customInput}
          />
          <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
            style={styles.customInput}
          />

          <CustomInput
            placeholder="Address"
            name="address"
            control={control}
            rules={{required: 'Address is required'}}
            style={[styles.customInput, {height: 80}]}
          />
          <CustomInput
            placeholder="Comment"
            name="comment"
            control={control}
            rules={{required: 'Comment is required'}}
            style={[styles.customInput, {height: 150}]}
          />
        </View>
          
           <CustomButton
            text="Submit"
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}
          />
          <TouchableOpacity style={styles.backButton} onPress={onBackPressed}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
           
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  textContainer: {
    flex: 2,
    paddingRight: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    textAlign: 'center', // center the title
    
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  inspirationText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  pageContainer: {
    marginHorizontal: 15,
  },
  backButton: {
    padding: 10,
    marginTop: 20,
    alignSelf: 'center'
  },
  submitButton: {
    alignSelf: 'center',
    marginHorizontal: 70,
    marginTop: 20,
  },
});


export default SupportScreen;