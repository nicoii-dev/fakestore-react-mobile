import auth from '@react-native-firebase/auth';

const FireBaseResetPassword = {
    resetPassword: async (email) => {
        return auth().sendPasswordResetEmail(email)
        //return email
      },
}

export {FireBaseResetPassword}