import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import addressStyle from '../../style/addressStyle';
const AddAddress = ({
    latitude,
    longitude,
}) => {

    const addAddress = () => {
        alert(latitude + " " + longitude)
    }

    return (
        <View>
            <TouchableOpacity style={addressStyle.addAddressButton} onPress={() => {addAddress()}}>
                <Text style={addressStyle.buttonTitle}>
                    add this address
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddAddress;