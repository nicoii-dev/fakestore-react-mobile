import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GoogleLogin = ({onGoogle}) => {

  const onGoogleButtonPress = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Get the users data
      const userData = await GoogleSignin.getCurrentUser();

      // sending data
      onGoogle(userData);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          padding: 10,
          backgroundColor: '#FFFFFF',
          marginTop: 5,
          width: wp('85%'),
          height: hp('7%'),
          borderRadius: 5,
        }}
        onPress={onGoogleButtonPress}>
          <IonIcons 
            name="logo-google" 
            size={30} 
            alignSelf={'flex-start'}/>
        <View
          style={{
            alignItems:'center',
            justifyContent:'center',
          }}>
          <Text
            style={{
              marginTop: -30,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Continue with Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleLogin;
