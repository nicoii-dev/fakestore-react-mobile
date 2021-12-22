import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    footer: {
      justifyContent: 'space-between',
      marginBottom:10
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom:5,
      fontWeight:"bold",
      marginLeft:10
    },
    image: {
      marginTop:5,
      paddingTop:0,
      aspectRatio: 1,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
    },
    price: {
      textAlign:"right",
      fontSize:18,
      fontWeight:"bold",
      marginRight:10,
      marginTop:5
    },
    description: {
        marginTop:15,
        marginLeft:10,
    },
    button: {
        backgroundColor: '#990099',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 25,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    quantityContainer:{
      flex:1,
      marginTop:30,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    addQtyButton: {
      borderWidth: 1,
      borderColor: '#cccccc',
      justifyContent:'center',
      alignItems:'center',
      width:40,
      height:40,
    },
    addQtyText:{
        width:20,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    subQtyButton: {
        borderWidth: 1,
        borderColor: '#cccccc',
        justifyContent:'center',
        alignItems:'center',
        width:40,
        height:40,
    },
    subQtyText: {
        width:20,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    itemQtyContainer: {
      borderBottomWidth: .5,
      borderTopWidth: .5,
      alignItems:'center',
      justifyContent:'center',
      width:40,
      height:40,
    },
    itemQty: {
        color: '#cccccc',
        color: '#000000',
        fontSize:20,
    },
    indicator: {
      color: '#FFFFFF',
  }
  });
