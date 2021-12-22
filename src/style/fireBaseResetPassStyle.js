import { StyleSheet, Dimensions } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        borderColor: '#990099'
    },
    modalContainer: {
        alignItems:'center',
        width: wp('90%'),
        height: hp('30%'),
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        borderColor: '#ee82ee',
        borderWidth: 1
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#990099',
        marginTop: 10
    },
    closeIconContainer: {
        alignSelf:'flex-start',
        flexDirection: 'row',
    },
    closeIconText: {
        marginTop: 9,
        marginLeft: 5,
        fontFamily: 'Poppins-BoldItalic',
        fontSize: 15,
        color: 'black'
    },
    closeIcon: {
        marginLeft: 5,
        marginTop: 5,
        color:'#990099'
    },
    input: {
        width: wp('70%'),
        height: hp('5%'),
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        color:'black',
        marginTop: 50,
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#990099',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        width: wp('70%'),
        height: hp('5%'),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    errorText: {
        marginLeft: 35,
        color: 'red',
        alignSelf:'flex-start'
    },
})