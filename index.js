/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationConfig from './src/library/helpers/firebase/pushNotifications/';
import {fcmService }from './src/library/helpers/firebase/fcm/';

fcmService.getPermission();
PushNotificationConfig();

AppRegistry.registerComponent(appName, () => App);
