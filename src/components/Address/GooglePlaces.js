import React from 'react';
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlaces = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBfWNTsRb7Vq-p1_bkuhQKVyjzgcbE4AXA',
        language: 'en',
      }}
      styles={{
        container: {alignSelf:'flex-start', position: 'absolute', width: '90%', zIndex: 1,},
      }}
    />

  );
};

export default GooglePlaces;