import React, { useState }  from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { Logout } from '../../library/helpers/Logout';
import LogoLoader from '../../components/Loading/LogoLoader';

const CustomDrawerContent = props => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.user);
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{justifyContent: 'flex-start'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileScreenStack');
          }}>
          <View
            style={{alignContent: 'center', alignItems: 'center', padding: 20}}>
            <Image
              source={ userData[0]?.image ? {uri:userData[0]?.image} : require('../../../assets/images/intro.jpg')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150 / 2,
                borderWidth: 2,
                borderColor: '#990099',
              }}
            />
            <Text
              style={{fontFamily: 'Poppins-ExtraLightItalic', marginTop: 10}}>
              {userData[0]?.email}
            </Text>
          </View>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </View>
      <DrawerItem
        style={{color: '#990099', fontFamily: 'Poppins-ExtraLight'}}
        label={userData.length > 0 ? 'Log out' : 'Sign in'}
        onPress={
          userData.length > 0
            ? () => {Logout(dispatch, navigation)}
            : () => {
                navigation.navigate('AuthScreenStack');
              }
        }
        icon={({focused, color, size}) => (
          <IonIcons
            name={userData.length > 0 ? 'log-out-outline' : 'log-in-outline'}
            size={30}
          />
        )}
        labelStyle={{color: '#990099', fontFamily: 'Poppins-ExtraLight'}}
      />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
