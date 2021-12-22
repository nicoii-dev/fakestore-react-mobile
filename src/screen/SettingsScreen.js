import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import settingsStyle from '../style/settingsStyle';
import AddToCartButton from '../components/Cart/AddToCartButton';

function SettingsScreen(){
    return (
        <View style={settingsStyle.container}>
            <TouchableOpacity>
                <Text>
                    Update Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Change Password
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Receive Push Notification
                </Text>
            </TouchableOpacity>
            <AddToCartButton />
        </View>
    )
}

export default SettingsScreen;