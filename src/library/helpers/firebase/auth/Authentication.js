import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

const FireBaseAuthentication = {
  createUser: async (email, password) => {
    let data;
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userData => {
          data = userData;
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast.show('That email address is already in use', Toast.LONG, [
              'UIAlertController',
            ]);
          }

          if (error.code === 'auth/invalid-email') {
            Toast.show('That email address is invalid', Toast.LONG, [
              'UIAlertController',
            ]);
          }
        });

      // getting JWT token of current auth user
      const idTokenResult = await auth().currentUser.getIdToken();
      // returning user_data and token as object
      return {user: data.user, token: idTokenResult};
    } catch (error) {
      console.log(error);
    }
  },

  signinUser: async (email, password) => {
    let data;
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(userData => {
          data = userData;
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
            console.log('Invalid email or password!');
            Toast.showWithGravity(
              'Invalid email or password!',
              Toast.SHORT,
              Toast.CENTER,
            );
          }

          if (error.code === 'auth/too-many-requests') {
            Toast.showWithGravity(
              'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
              Toast.LONG,
              Toast.CENTER,
            );
          }
          console.log(error);
        });

      // getting JWT token of current auth user
      const idTokenResult = await auth().currentUser.getIdToken();
      // returning user_data and token as object
      return {user: data.user, token: idTokenResult};
    } catch (error) {
      console.log(error);
    }
  },
};

export default FireBaseAuthentication;
