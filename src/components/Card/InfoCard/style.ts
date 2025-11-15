

import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#F8F8F8',
        paddingTop: 30, 
    },

    title:{
        flexDirection: 'row',
        // justifyContent: 'space-between',
        

    },

    subTitle:{


    },

    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    image: {
        width: 40,     
        height: 40,    
        borderRadius: '50%',
        objectFit: 'cover',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dias:{
        fontSize:20
    }

    
})