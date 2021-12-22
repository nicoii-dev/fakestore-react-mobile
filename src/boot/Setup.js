import React, {useEffect, useState} from 'react';

// screens
import NoInternetScreen from '../screen/NoInternetScreen';
import MainScreenStack from '../navigation/stack/MainScreenStack';

import NetInfo from "@react-native-community/netinfo";

const Setup = ({ navigation }) => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(()=>{
        checkConnectivity();
    },[])

    const checkConnectivity  = async () => {
       await NetInfo.fetch().then(state => {
            if (state.isConnected) {
                setIsConnected(true)
            } else {
                setIsConnected(false)
            }
        });
    }

    if(isConnected){
        return <MainScreenStack/>
    } else {
        return <NoInternetScreen />
    }
}

export default Setup;