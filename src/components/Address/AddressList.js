import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList} from 'react-native';
import addressStyle from '../../style/addressStyle';
import IonIcons from 'react-native-vector-icons/Ionicons'

const addressList = 
    [
        {
           "id":1,
           "name":"Home",
           "latitude":8.491263722638715,
           "longitude":124.60118126124145
        },
        {
           "id":2,
           "name":"Workplace",
           "latitude":8.478296579725388,
           "longitude":124.642545953393
        },
        {
            "id":3,
            "name":"Others",
            "latitude":8.478296579725388,
            "longitude":124.642545953393
        },
        {
            "id":4,
            "name":"Others",
            "latitude":8.478296579725388,
            "longitude":124.642545953393
        },
        {
            "id":5,
            "name":"Others",
            "latitude":8.478296579725388,
            "longitude":124.642545953393
        }
     ]


const AddressList = ({ 
            selectedAddress,
            addNewAddress,
        }) => {

    return (
        <View style={addressStyle.container}>
            <Text style={{fontSize:30, marginTop:10, marginBottom: 10}}>Address list</Text>
                <TouchableOpacity style={{
                                marginTop:10, 
                                marginBottom:10, 
                                borderRadius:5, 
                                borderWidth:1,
                                padding:5,
                                borderColor:"#990099"
                                }}
                                onPress={() => addNewAddress(true)}>
                    <Text style={{fontSize:15, fontFamily: "Poppins-SemiBoldItalic", }}>
                        add new address <IonIcons name="add-circle-outline" size={20}/>
                    </Text>
                </TouchableOpacity>
            <FlatList
                data={addressList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity 
                            onPress = {()=>selectedAddress(item)}
                            style={addressStyle.FlatListButton}
                        >
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default AddressList