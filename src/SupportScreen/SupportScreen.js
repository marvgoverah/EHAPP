import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import { TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const SupportScreen = () => {

  const navigation = useNavigation();

  const {register, handleSubmit, formState: {errors}} = useForm();
  const [selectedOption, setSelectedOption] = useState('');
  
  const onSubmit = data => console.log(data);

  const onSubmitPressed = () => {
    console.log('Option selected:', selectedOption);
  };

  const onOptionPress = option => {
    setSelectedOption(option);
  };
 
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>Offer Support</Text>

        <Text style={styles.subTitle}>How can you help?</Text>

        <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.option, selectedOption === 'money' && styles.selectedOption]} onPress={() => onOptionPress('money')}>
            <Text style={styles.optionText}>Donate money</Text>
          </TouchableOpacity>

          <CustomButton text="Donate" onPress={onSubmitPressed} type="PRIMARY" />

          <TouchableOpacity style={[styles.option, selectedOption === 'supplies' && styles.selectedOption]} onPress={() => onOptionPress('supplies')}>
            <Text style={styles.optionText}>Donate supplies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.option, selectedOption === 'volunteer' && styles.selectedOption]} onPress={() => onOptionPress('volunteer')}>
            <Text style={styles.optionText}>Volunteer your time</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Share your message of support</Text>

        <View style={styles.messageContainer}>
          <TextInput 
            style={styles.messageInput} 
            placeholder="Type your message here" 
            multiline={true}
            {...register('message', {required: true})}
          />

          <TouchableOpacity style={styles.postButton} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Inspiration board</Text>

        <ScrollView horizontal={true} style={styles.inspirationBoard}>
          <TouchableOpacity style={styles.inspirationCard}>
            <Text style={styles.inspirationText}>"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inspirationCard}>
            <Text style={styles.inspirationText}>"We make a living by what we get, but we make a life by what we give." - Winston Churchill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inspirationCard}>
            <Text style={styles.inspirationText}>"The most important thing in life is to stop saying 'I wish' and start saying 'I will.' Consider nothing impossible, then treat possibilities as probabilities." - Charles Dickens</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.backButton} onPress={onSubmitPressed}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  option: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    height: 100,
    width: '70%',
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: '#FDB075',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '25%',
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inspirationBoard: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  inspirationCard: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: 300,
  },
  inspirationText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default SupportScreen;