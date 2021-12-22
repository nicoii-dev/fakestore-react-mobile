import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import productStyle from "../../style/productStyle";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { FETCH_USER } from "../../redux/user/actionTypes";
import { AddToCart } from "../../redux/cart/actions";
import Toast from 'react-native-simple-toast';

function AddToCartButton({
    item,
    priceTimesQty,
    isLoading,
    setIsLoading
}) {
    const user = useSelector(state => state.userData.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    function navigateToSignin() {
        navigation.navigate("AuthScreenStack");
    }

    const addToCart = async (item) => {
        setIsLoading(true);
        try {
            if (user.length > 0) {
              await dispatch(AddToCart(item))
            } else {
                navigateToSignin();
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
            //console.log("1")
        }

        
    }


    return (
        <View>
            <TouchableOpacity style={productStyle.button} onPress={() => addToCart(item)}>
                <Text style={productStyle.buttonTitle}>ADD TO CART (${priceTimesQty?.toFixed(2)})</Text>
            </TouchableOpacity>
        </View>
    );
}


export default AddToCartButton;
