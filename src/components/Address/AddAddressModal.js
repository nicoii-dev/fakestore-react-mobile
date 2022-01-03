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
    _latitudeDelta,
    setLatitudeDelta,
    _longitudeDelta,
    setLongitudeDelta,
    pin,
    setPin,
    getCurrentLocation}) => {
        console.log(currentLatitude)
        console.log(currentLongitude)
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
                            <IonIcons name="locate" size={30} />
                        </TouchableOpacity>
                    </View>
                    <GooglePlaces />
                    <MapView 
                        style={addressStyle.map}  
                        zoomEnabled={true}
                        maxZoomLevel={18}
                        initialRegion={{
                            latitude: parseFloat(currentLatitude) ? parseFloat(currentLatitude) : 0,
                            longitude: parseFloat(currentLongitude) ? parseFloat(currentLongitude) : 0,
                            latitudeDelta: 0.0222,
                            longitudeDelta: 0.0121,
                        }}
                        region={{
                            latitude: parseFloat(currentLatitude) ? parseFloat(currentLatitude) : 0,
                            longitude: parseFloat(currentLongitude) ? parseFloat(currentLongitude) : 0,
                            latitudeDelta: _latitudeDelta ? _latitudeDelta : 0.0222,
                            longitudeDelta: _longitudeDelta ? _longitudeDelta : 0.0121
                        }}
                        onRegionChangeComplete={(e)=>{
                            setLatitudeDelta(e.latitudeDelta)
                            setLongitudeDelta(e.longitudeDelta)
                            setCurrentLatitude(e.latitude)
                            setCurrentLongitude(e.longitude)
                        }}
                        onPress={(e)=>{
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                            setCurrentLatitude(parseFloat(e.nativeEvent.coordinate.latitude))
                            setCurrentLongitude(parseFloat(e.nativeEvent.coordinate.longitude))
                        }}
                        // for clicking landmarks on the map
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