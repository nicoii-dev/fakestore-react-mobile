import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: hp('7%'),
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        color:'black',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#990099',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        width: wp('85%'),
        height: hp('7%'),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    forgotPass: {
        alignItems:'flex-end',
        width: wp('90%'),
    },
    footerView: {
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#990099",
        fontWeight: "bold",
        fontSize: 16
    },
    errorText: {
        marginLeft: 30,
        color: 'red',
    },
    socialAuth: {
        alignSelf: 'center',
       
        bottom: -100,
        padding: 50
    },
})