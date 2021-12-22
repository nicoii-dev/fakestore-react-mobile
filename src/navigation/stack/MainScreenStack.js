import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreenStack from './AuthScreenStack';
import DrawerNav from '../drawer/DrawerNav';
import ProductScreenStack from './ProductScreenStack';
import SplashScreen from '../../screen/SplashScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const Stack = createNativeStackNavigator();

function MainScreenStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AuthScreenStack" component={AuthScreenStack} options={{ headerShown: false }} />
        <Stack.Screen name="ProductScreenStack" component={ProductScreenStack} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerScreen" component={DrawerNav} options={{ headerShown: false }} />
        <Stack.Screen 
          name="ProfileScreenStack" 
          component={ProfileScreen}
          options={{                    
            title:"Profile",
            headerTitleAlign: 'center',
            headerTintColor:"#990099",
            headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default MainScreenStack;