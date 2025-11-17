
import { StyleSheet } from "react-native"; 



export const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#F8F8F8',
        paddingTop: 30, 
    },

    icone:{
        paddingTop: 30, 
        marginLeft: 20,
        alignItems: 'flex-start',
        width:'90%',

    },

    title: {
        width: '90%',
        fontSize: 30,
        marginLeft: 20,
        alignItems: 'flex-start',
        paddingTop: 20,
        marginBlock:5,
        fontFamily: 'Nunito-ExtraBold' , 

    },
    

    subtitle:{
        fontSize: 15,
        marginLeft: 20,
        marginBlock:10 
        
    },

    input:{
        marginBlock: 6,
        width:'90%',
        backgroundColor: '#fff',
        color: '#282828',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        fontSize: 20,
        borderRadius:8,
        padding:10,
        paddingTop: 20, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },

    cabecalho:{
        fontSize: 13,
        color: '#B6B6B6',
        flexDirection: 'row',
        marginLeft: 20,
        marginBlock: 3
        
        
    }

})