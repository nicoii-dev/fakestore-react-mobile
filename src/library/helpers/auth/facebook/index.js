import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  Settings,
} from 'react-native-fbsdk-next';

const FacebookLogin = ({onFacebook}) => {
  const onLogin = async () => {
    // * Initialize FBSDK for IOS
    Settings.initializeSDK();

    // Attempt a login using the Facebook login dialog asking for default permissions.
    await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      async function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          // * Auth token request based on platform
          let accessToken;
          if (Platform.OS === 'ios') {
            const result =
              await AuthenticationToken.getAuthenticationTokenIOS();
            accesToken = result?.authenticationToken;
          }
          if (Platform.OS === 'android') {
            const result = await AccessToken.getCurrentAccessToken();
            accessToken = result?.accessToken;
          }
          //Create response callback.
          const _responseInfoCallback = (error, userInfo) => {
            if (error) {
              console.log('Error fetching data: ' + error.toString());
            } else {
              console.log('Success fetching data: ' + result.toString());
              onFacebook({user: userInfo, token: accessToken});
            }
          };

          // Create a graph request asking for user information with a callback to handle the response.
          const infoRequest = new GraphRequest(
            `/me?fields=id,first_name,last_name,email,birthday,picture.width(300).height(300)&access_token=${accessToken}`,
            null,
            _responseInfoCallback,
          );
          // Start the graph request.
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          justifyContent: 'flex-start',
          padding: 10,
          backgroundColor: '#0080FF',
          marginTop: 5,
          width: wp('85%'),
          height: hp('7%'),
          borderRadius: 5,
        }}
        onPress={onLogin}>
        <IonIcons 
          name="logo-facebook" 
          size={30}
          style={{
            color:'white'
          }} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: -30,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Continue with Facebook
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FacebookLogin;
