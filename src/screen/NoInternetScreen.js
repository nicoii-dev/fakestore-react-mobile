import React from 'react';
import { View, Text, Modal, Image } from 'react-native';
import noconnectionStyle from '../style/noconnectionStyle';

const NoInternetScreen = (props) => {
    return (
            <View style={noconnectionStyle.mainContainer}>
                <Image
                    source={require('../../assets/images/noWifi.png')}
                    style={noconnectionStyle.nowifiImg}
                    resizeMethod="scale"
                    resizeMode="contain"
                />
                <Text style={noconnectionStyle.internetText}>
                    NO INTERNET CONNECTION...
                </Text>
            </View>
    )

}

export default NoInternetScreen;