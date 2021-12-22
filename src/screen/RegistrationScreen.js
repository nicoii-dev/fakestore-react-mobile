import React, {useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import registrationStyle from '../style/registrationStyle';
import {checkEmailValid} from '../library/helpers/emailValidator/checkEmailValid';
import FirebaseAuthentication from '../library/helpers/firebase/auth/Authentication';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {UserRegister} from '../redux/user/actions';

const Registration = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await FirebaseAuthentication.createUser(
        data.email,
        data.password,
      );
      if (response && response !== undefined) {
        Toast.show('Registration is Successful', Toast.SHORT, [
          'UIAlertController',
        ]);
        navigation.replace('DrawerScreen');
        await AsyncStorage.setItem('USER_DATA', JSON.stringify(response));
        await dispatch(
            UserRegister(
              {
                userId: response?.user?.uid,
                token: response?.token,
                email: response?.user?.email,
              })
        );
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const password = useRef({});
  password.current = watch('password', '');

  const onFooterLinkPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Image style={registrationStyle.logo} />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This is required',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={registrationStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name"
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && (
        <Text style={registrationStyle.errorText}>{errors.name?.message}</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This is required',
          },
          pattern: {
            value: checkEmailValid(),
            message: 'Invalid email',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={registrationStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && (
        <Text style={registrationStyle.errorText}>{errors.email?.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This is required.',
          },
          minLength: {
            value: 6,
            message: 'Password must be atleast 6 characters.',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={registrationStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            placeholder="Password"
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && (
        <Text style={registrationStyle.errorText}>
          {errors.password?.message}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This is required.',
          },
          minLength: {
            value: 6,
            message: 'Password must be atleast 6 characters.',
          },
          validate: value =>
            value === password.current ? null : 'Password did not match.',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={registrationStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            placeholder="Confirm Password"
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      {errors.confirmPassword && (
        <Text style={registrationStyle.errorText}>
          {errors.confirmPassword?.message}
        </Text>
      )}

      <TouchableOpacity
        style={registrationStyle.button}
        onPress={handleSubmit(onSubmit)}>
        <Text style={registrationStyle.buttonTitle}>Sign up</Text>
      </TouchableOpacity>
      <View style={registrationStyle.footerView}>
        <Text style={registrationStyle.footerText}>
          Already have an account?{' '}
          <Text
            onPress={onFooterLinkPress}
            style={registrationStyle.footerLink}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Registration;
