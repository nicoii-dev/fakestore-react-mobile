import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    item: {
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
      width:175
    },
    title: {
      fontSize: 10,
      marginBottom:5,
      fontWeight:"bold",
      width:100,
    },
    image: {
      marginTop:20,
      paddingTop:0,
      aspectRatio: 1,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
      width:70,
      height:70
    },
    price: {
      marginTop:5,
      textAlign:"right",
      fontSize:11,
      fontWeight:"bold",
    }
  });
