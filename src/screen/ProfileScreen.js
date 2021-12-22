import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native'
import NiloApi from '../library/api/NiloApi';



function ProfileScreen(){
    const [data, setData] = useState([]);


    useEffect( async () => {
       const response = await NiloApi.getData();
       setData(response.data);
    },[])


    return (
        <View>
            <FlatList
                contentContainerStyle={{
                    alignSelf: 'flex-start',
                  }}

                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.hash}</Text>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text>{item.name}</Text>
                        </View>
                        <Text>{item.link}</Text>
        
                    </View>
                )}
            />
        </View>
    )
}

export default ProfileScreen;