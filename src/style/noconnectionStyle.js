import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({

    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    nowifiImg: {
        width: wp('15%'),
        height: hp('15%'),
    },

    internetText: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        textAlign: 'center',
    },
});
