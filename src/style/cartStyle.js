import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        marginBottom: 2,
        height: 120
    },
    selectorView: {
        justifyContent: 'center',
        alignItems: 'center',
        width:60
    },
    selector: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'center'
    },
    image: {
        height: 60,
        width: 60, 
        backgroundColor:"#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
    },
    itemDetails: {
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'center'
    },
    itemTitle: {
        fontSize:15,
    },
    itemPrice: {
        color: '#333333',
        marginBottom: 10
    },
    addQtyButton: {
        borderWidth: 1,
        borderColor: '#cccccc' 
    },
    addQtyText:{
        width:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    subQtyButton: {
        borderWidth: 1,
        borderColor: '#cccccc' 
    },
    subQtyText: {
        width:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    itemQty: {
        borderTopWidth: .5,
        borderBottomWidth: .5,
        color: '#cccccc',
        paddingHorizontal: 7,
        paddingTop: 3,
        color: '#000000',
        fontSize: 13,
    },
    deleteView: {
        justifyContent: 'center',
        alignItems: 'center',
        width:60
    },
    deleteButton: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteIcon: {
        fontSize:25,
        color:"#ee4d2d" 
    },
    subTotalView: {
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    subTotalText: {
        flexDirection: 'row',
        paddingRight: 20, 
        alignItems: 'center'
    },
    checkoutView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 40,
        paddingRight: 20,
        alignItems: 'center'

    },
    checkoutButton: {
        backgroundColor: '#0faf9a', 
        width: 100, 
        height: 30, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    }
});