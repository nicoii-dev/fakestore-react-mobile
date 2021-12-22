import React, {useEffect, useState} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import splashStyle from '../style/splashStyle';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_LOGIN} from '../redux/user/actionTypes';

function SplashScreen({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let userData = [];
    try {
      userData = await AsyncStorage.getItem('USER_DATA');
      console.log(userData);
      navigation.replace('DrawerScreen');
    } catch (error) {
      console.log(error);
    }
    if (userData !== null) {
      await dispatch({
        type: USER_LOGIN,
        payload: {
          userId: JSON.parse(userData)?.user?.id,
          token: JSON.parse(userData)?.token,
          email: JSON.parse(userData)?.user?.email,
        },
      });
    }
  };

  return (
    <View style={splashStyle.container}>
      <View>
        <Text style={splashStyle.welcome}>Welcome</Text>
      </View>

      <Image
        source={require('../../assets/images/intro.jpg')}
        style={splashStyle.image}
        resizeMode="contain"
      />
      <ActivityIndicator
        style={splashStyle.indicator}
        size="large"
        color="#99004C"
      />
    </View>
  );
}

export default SplashScreen;
