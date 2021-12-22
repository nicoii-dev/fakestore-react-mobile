import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../../screen/SigninScreen';
import Registration from '../../screen/RegistrationScreen';

const Stack = createNativeStackNavigator();

function AuthScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="SigninScreen">
            <Stack.Screen
                name="RegistrationScreen"
                component={Registration}
                options={{
                    title: "Sign up",
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                }}
            />
            <Stack.Screen
                name="SigninScreen"
                component={Signin}
                options={{
                    title: "Sign in",
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthScreenStack;
