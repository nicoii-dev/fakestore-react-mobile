import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height * .5
    },
    exitButton: {
        alignSelf:"flex-end",
        marginRight: 10,
        marginTop: 10
    },
    addressHeader: {
        alignItems: 'center',
        justifyContent:'center', 
    },
    addressListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1, 
        marginTop:10
    },
    currentAddBtnContainer: {
        alignSelf:"flex-end", 
        justifyContent:'center', 
        marginRight:5, 
        marginTop:5,
    },
    addAddressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
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
        marginTop: 10,
        height: 48,
        width:250,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    addAddressButton: {
        backgroundColor: '#990099',
        marginLeft: 30,
        marginRight: 30,
        marginBottom:10,
        height: 48,
        width:250,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        position:'relative'
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
    FlatListButton:{
        marginTop: 5,
        height: 48,
        width:350,
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#990099',
        alignItems: "center",
        justifyContent: 'center'
    }
})