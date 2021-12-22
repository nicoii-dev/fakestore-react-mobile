import React, { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import signinStyle from '../style/signinStyle';
import {useDispatch} from 'react-redux';
import {UserLogin} from '../redux/user/actions';
import FirebaseAuthentication from '../library/helpers/firebase/auth/Authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FacebookLogin from '../library/helpers/auth/facebook';
import GoogleLogin from '../library/helpers/firebase/auth/GoogleLogin';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import FireBaseResetPassModal from '../components/Auth/FireBaseResetPassModal';
import { SafeAreaView } from 'react-native-safe-area-context';

function Signin({navigation}) {

  const { control, handleSubmit, formState: {errors} } = useForm();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // for google signin
  GoogleSignin.configure({
    webClientId:
      '287872613962-5dvbmpnmn772o6j48650ln99voddldlc.apps.googleusercontent.com',
  });

  // secured login
  const onSubmit = async data => {
    try {
      const response = await FirebaseAuthentication.signinUser(
        data.email,
        data.password,
      );
      if (response && response !== undefined) {
        await AsyncStorage.setItem('USER_DATA', JSON.stringify(response));
        await dispatch(
          UserLogin({
            userId: response?.user.uid,
            token: response?.token,
            email: response?.user?.email,
          }),
        );
        navigation.replace('DrawerScreen');
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // facebook signin
  const onFacebook = async data => {
    if (data !== undefined || data !== null) {
      await AsyncStorage.setItem('USER_DATA', JSON.stringify(data));
      await dispatch(
        UserLogin({
          userId: data?.user?.id,
          token: data?.token,
          email: data?.user?.email,
          firstName: data?.user?.first_name.split(' ')[0],
          lastName: data?.user?.last_name.split(' ')[1],
          image: data?.user?.picture?.data?.url,
        }),
      );
      navigation.replace('DrawerScreen');
    }
  };

  // google signin
  const onGoogle = async (data) => {
    if (data !== undefined || data !== null) {
      await AsyncStorage.setItem('USER_DATA', JSON.stringify(data));
      await dispatch(
        UserLogin({
          userId: data?.user?.id,
          token: data?.idToken,
          email: data?.user?.email,
          firstName: data?.user?.givenName,
          lastName: data?.user?.familyName,
          image: data?.user?.photo,
        }),
      );
      navigation.replace('DrawerScreen');
    }
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex: 1, marginTop: 50}}>
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
              style={signinStyle.input}
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
          <Text style={signinStyle.errorText}>{errors.email?.message}</Text>
        )}

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
              style={signinStyle.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={signinStyle.errorText}>{errors.password?.message}</Text>
        )}
        <View style={signinStyle.forgotPass}>
          <Text>
            Forgot password?{' '}
            <Text
              onPress={() => {
                setShowModal(true)
              }}
              style={signinStyle.footerLink}>
              Reset
            </Text>
          </Text>

          <FireBaseResetPassModal 
            showModal={showModal}
            setShowModal={setShowModal}
            /> 

        </View>

        <TouchableOpacity
          style={signinStyle.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={signinStyle.buttonTitle}>Sign in</Text>
        </TouchableOpacity>

        <View style={signinStyle.footerView}>
          <Text style={signinStyle.footerText}>
            Don't have an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('RegistrationScreen');
              }}
              style={signinStyle.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>

        <View style={signinStyle.socialAuth}>
          <FacebookLogin onFacebook={onFacebook} />
          <GoogleLogin onGoogle={onGoogle} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Signin;
