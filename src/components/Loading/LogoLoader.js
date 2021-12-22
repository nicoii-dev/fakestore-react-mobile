import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';

const LogoLoader = () => {
    return (
        <View 
            style={{
                flex:1, 
                alignItems:'center', 
                justifyContent:'center'}}>
            <Modal 
                visible={true}
                transparent={true} 
                style={{ 
                    borderWidth:1, 
                    borderColor:'green', 
                    alignSelf:'center', 
                    backgroundColor:'gray',
                    width:200
                    }}>
                <View 
                    style={{
                        flex:1, 
                        justifyContent:'center', 
                        alignSelf:'center',
                        }}>
                    <View 
                        style={{
                            alignItems:'center',
                            width: '100%',
                            height: '100%',
                            }}>
                        <ActivityIndicator 
                            size="large" 
                            color="#99004C" 
                            />
                    </View>
                </View>
            </Modal>
        </View>

    )
}



export default LogoLoader;