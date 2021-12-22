import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux';

function ShoppingCartIcon() {
    const items = useSelector(state => state.cartData.items) //cartData is from root reducer
    return (
        <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
            <View style={{
                position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: '#990099', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

            }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{items.length < 0 ? 0 : items.length}</Text>
            </View>
            <Icon name="cart-outline" size={30} />
         
        </View>
    )
}


export default ShoppingCartIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});
