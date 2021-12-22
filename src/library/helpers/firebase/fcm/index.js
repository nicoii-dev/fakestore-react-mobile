import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const fcmService = { 

    getPermission: async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    },

    createChannel: () => {
        PushNotification.createChannel({
            channelId: "channelId",
            channelName: "channelName"
        })
    },

    //foreground notification
    showNotification: (notification, data = {}, options = {}) => {
        PushNotification.localNotification({ 
            channelId: "channelId",
            autoCancel: true,
            title: notification?.title ?? '',
            message: notification?.message
                ? notification.message
                : notification?.body
                ? notification.body
                : '',
            playSound: true,
            soundName: 'default',
        });
    },

}
export {fcmService};