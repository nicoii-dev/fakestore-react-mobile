import { StyleSheet } from 'react-native';


// TRIAL AND ERROR
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'

    },
    welcome: {
        fontFamily: 'Poppins-BlackItalic',
        fontSize: 50,
        marginTop: 50
    },
    image: {
        marginTop: 5,
        paddingTop: 0,
        aspectRatio: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        height: 380
    },
    button: {
        marginTop: 100,
        borderRadius: 30,
        width: 50,
        height: 50,
        backgroundColor: '#99004C',
        alignItems: "center",
        justifyContent: 'center'
    },
    indicator: {
        color: '#FFFFFF',
    }
});
