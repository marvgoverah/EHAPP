import React, { useRef } from 'react';
import { View, Text, useWindowDimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import EarthQuake from '../../../assets/images/EarthQuake.jpg';
import Evac from '../../../assets/images/Evac.jpg';
import Fire from '../../../assets/images/Fire.jpg';
import Hurricane from '../../../assets/images/Hurricane.jpg';
import Tornado from '../../../assets/images/Tornado.jpg';
import Tornado1 from '../../../assets/images/Tornado1.jpg';
import Volcano from '../../../assets/images/Volcano.jpg';
import Volcano1 from '../../../assets/images/Volcano1.jpg';
import logo from '../../../assets/images/logo.png';

const imageList = [Evac, EarthQuake, Fire, Hurricane, Tornado1, Volcano, Tornado];

const ImageReel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: true,
  });

  const windowWidth = useWindowDimensions().width;
  const imageWidth = windowWidth - 40;
  const imageHeight = 150;

  return (
    <View style={styles.imageReelContainer}>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={imageWidth}
        decelerationRate="fast"
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingLeft: 20 }}
      >
        {imageList.map((image, index) => (
          <Image key={index} source={image} style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>
          Relief Emergency App, Help is just a Click Away
        </Text>

        <Text style={styles.body}>
          Get help when you need it most. Our emergency relief app connects you with local resources and aid in times of crisis. Whether it's natural disasters, accidents, or medical emergencies, our app provides quick access to the help you need to stay safe and secure.
        </Text>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Help')}>
          <Text style={styles.linkText}>Help Me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Resources')}>
          <Text style={styles.linkText}>Resources</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Support')}>
          <Text style={styles.linkText}>Support</Text>
        </TouchableOpacity>

        <ImageReel />
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
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  link: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  imageReelContainer: {
    height: 150,
    marginTop: 20,
  },
  image: {
    height: '100%',
    width: 200,
    marginRight: 20,
    borderRadius: 10,
  },
  imageReelContainer: {
    height: 150,
    marginTop: 20,
  },
  
});

export default HomeScreen;

