import { StyleSheet } from "react-native";

const page1= StyleSheet.create({
    container: {
        backgroundColor:"orange",
        flex: 1,
        gap:10,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      title: {
        fontSize: 40,
        color:"black",
        marginBottom: 30,
        marginTop:100,
      },
      input: {
        width: '80%',
        padding: 15,
        paddingRight:120,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 0,
      },
      resultContainer: {
        width: '80%',
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      resultText: {
        fontSize: 20,
        color: '#fff',
        paddingBottom:40,
      },
      button:{
        backgroundColor:"transparent",
        width:'80%',
        borderRadius: 20,
        borderWidth:1,
        padding: 15,
        alignItems:"center",
        marginTop:10,
      }
})


export {page1};