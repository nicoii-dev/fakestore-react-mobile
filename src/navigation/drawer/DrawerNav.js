import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screen/HomeScreen';
import IonIcons from 'react-native-vector-icons/Ionicons'
import CartScreen from '../../screen/CartScreen';
import NotificationsScreen from '../../screen/NotificationScreen';
import SettingsScreen from '../../screen/SettingsScreen';
import CustomDrawerContent from './CustomDrawerContent';
import AddressScreen from '../../screen/AddressScreen';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '../../components/Cart/ShoppingCartIcon';
import { TouchableOpacity } from 'react-native';
//import PaymentDetailsScreen from '../../screen/PaymentDetailsScreen';

const Drawer = createDrawerNavigator();

function DrawerNav({ navigation }) {
    const userData = useSelector(state => state.userData.user)
    
    return (
        <Drawer.Navigator initialRouteName="Fakestore" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="Fakestore"
                component={Home}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="home-outline" size={30} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductScreenStack', {
                                    screen: 'CartScreen'
                                });
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                    ),
                    title:"Fake Store",
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
                }}
            />
            {userData.length > 0 ?  
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="notifications-outline" size={30} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductScreenStack', {
                                    screen: 'CartScreen'
                                });
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
            }} /> : null }
            {userData.length > 0 ?  
            <Drawer.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="cart-outline" size={30} />
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
            }} /> : null}
            {userData.length > 0 ?  
            <Drawer.Screen
                name="Address"
                component={AddressScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="location-outline" size={30} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductScreenStack', {
                                    screen: 'CartScreen'
                                });
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
            }} /> : null}
            {userData.length > 0 ?  
            <Drawer.Screen
                name="PaymentDetails"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="card-outline" size={30} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductScreenStack', {
                                    screen: 'CartScreen'
                                });
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
            }} /> : null }        
             <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="settings-outline" size={30}/>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductScreenStack', {
                                    screen: 'CartScreen'
                                });
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
            }} />
            <Drawer.Screen
                name="About"
                component={CartScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IonIcons name="information-circle-outline" size={30}/>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductScreenStack', {
                                    screen: 'CartScreen'
                                });
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                    drawerActiveTintColor:"#990099",
                    drawerLabelStyle:{color:"#990099", fontFamily:"Poppins-ExtraLight"}
            }} />                      
        </Drawer.Navigator>
    );
}

export default DrawerNav;