import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

// setup
import Setup from './src/boot/Setup';

// redux
import store from './src/redux/store'
import { Provider } from 'react-redux';

// notification
import messaging from '@react-native-firebase/messaging';
import {fcmService} from './src/library/helpers/firebase/fcm/';

function App() {

  useEffect(() => {
    
    fcmService.createChannel();

    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    // Register foreground handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      fcmService.showNotification(remoteMessage.notification)
    });

    return unsubscribe;

  }, []);

  return (
    <Provider store = {store}>
      <Setup/>
    </Provider>
  )
}

export default App;