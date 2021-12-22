import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import { USER_LOGOUT } from '../../redux/user/actionTypes';
import { REMOVE_ALL_ITEMS } from '../../redux/cart/actionTypes';

const Logout = (dispatch, navigation) => {
    Alert.alert('Are you sure you want to logout?', '', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {
            text: 'Logout',
        onPress: async () => {
            try {
                await auth()._user ? auth().signOut() : null;
                await GoogleSignin.getCurrentUser ? GoogleSignin.signOut() : null; //signing out the previous google authenticated user.
                await dispatch({type: USER_LOGOUT});
                await dispatch({type: REMOVE_ALL_ITEMS});
                AsyncStorage.getAllKeys()
                    .then(keys => AsyncStorage.multiRemove(keys))
                    .then(() =>
                        Toast.show('Logout', Toast.SHORT, ['UIAlertController']),
                    );
                navigation.replace('AuthScreenStack');
            } catch (error) {
            console.log(error);
            }
        },
        },
    ]);
};

export {Logout};
