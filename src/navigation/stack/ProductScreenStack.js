import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import CartScreen from '../../screen/CartScreen';
import ShoppingCartIcon from '../../components/Cart/ShoppingCartIcon'

const Stack = createNativeStackNavigator();

function ProductScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="ProductScreen">
            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
                options={{
                    title: "",
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('CartScreen');
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>

                    ),
                }}
            />
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    title: "Cart",
                    headerTitleAlign: 'center',
                    headerTintColor:"#990099",
                    headerTitleStyle:{fontFamily:"Poppins-SemiBold"},
                }} 
                />

        </Stack.Navigator>
    );
}

export default ProductScreenStack;
