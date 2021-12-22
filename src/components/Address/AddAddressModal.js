import React from 'react';
import { View, Text, Modal, TouchableOpacity} from 'react-native'
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import IonIcons from 'react-native-vector-icons/Ionicons'
import GooglePlaces from './GooglePlaces';
import AddAddress from './AddAddress';
import addressStyle from '../../style/addressStyle';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';

const AddAddressModal = ({ 
    showModal, 
    setShowModal,
    currentLatitude,
    setCurrentLatitude,
    currentLongitude,
    setCurrentLongitude,
    pin,
    setPin,
    getCurrentLocation}) => {

    return (
        <View>
            <Modal visible ={showModal}>
                <View style={addressStyle.exitButton}>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                        <IonIcons name="close-circle-outline" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={addressStyle.addressHeader}>
                    <Text>
                        Find your address
                    </Text>
                </View>
                <View>
                    <View style={addressStyle.currentAddBtnContainer}>
                        <TouchableOpacity onPress = { () => {getCurrentLocation()}}>
                            <IonIcons name="locate-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                    <GooglePlaces />
                    <MapView 
                        style={addressStyle.map}  
                        initialRegion={{
                            latitude: parseFloat(currentLatitude) ? parseFloat(currentLatitude) : 0,
                            longitude: parseFloat(currentLongitude) ? parseFloat(currentLongitude) : 0,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        region={{
                            latitude: parseFloat(currentLatitude) ? parseFloat(currentLatitude) : 0,
                            longitude: parseFloat(currentLongitude) ? parseFloat(currentLongitude) : 0,
                            latitudeDelta: pin ? 0.0222 : 0.0922,
                            longitudeDelta: pin ? 0.0121 : 0.0421
                        }}
                        onPress={(e)=>{
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                            setCurrentLatitude(parseFloat(e.nativeEvent.coordinate.latitude))
                            setCurrentLongitude(parseFloat(e.nativeEvent.coordinate.longitude))
                        }}
                        provider={PROVIDER_GOOGLE}
                
                        onPoiClick={(e)=>{
                            Toast.show(e.nativeEvent.name, Toast.SHORT, [
                                'UIAlertController',
                              ]);
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                            setCurrentLatitude(parseFloat(e.nativeEvent.coordinate.latitude))
                            setCurrentLongitude(parseFloat(e.nativeEvent.coordinate.longitude))
                        }}
                    >
                        <Marker
                            coordinate={pin ? pin : {latitude:0, longitude:0}}
                            pinColor="black"
                            draggable={true}
                            onDragEnd={(e) => {
                                setPin({
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude: e.nativeEvent.coordinate.longitude
                                })
                                setCurrentLatitude(parseFloat(e.nativeEvent.coordinate.latitude))
                                setCurrentLongitude(parseFloat(e.nativeEvent.coordinate.longitude))
                            }}
                        >
                            <Callout>
                                <Text>
                                    I'm here
                                </Text>
                            </Callout>
                        </Marker>
                    </MapView>
                </View>
                <View>
                    <TextInput 
                        placeholder = "Address"
                        style={{padding:10, marginBottom:10}}
                    />
                    <View style={{alignContent:'flex-start'}}>
                        <Text>Latitude</Text>
                    </View>
                    <TextInput 
                        placeholder = "Address"
                        style={{padding:5}}
                        value={String(currentLatitude)}
                    />
                </View>
                <View>

                    <View style={{alignContent:'flex-start'}}>
                        <Text>Latitude</Text>
                    </View>
                    <TextInput 
                        placeholder = "Address"
                        style={{padding:5}}
                        value={String(currentLongitude)}
                    />
                </View>
                <View style={addressStyle.addAddressContainer}>
                    <AddAddress 
                        latitude = {currentLatitude}
                        longitude = {currentLongitude}
                    />
                </View>
            </Modal>
        </View>
    )

}

export default AddAddressModal;