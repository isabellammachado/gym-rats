import { StyleSheet } from "react-native";

export const styles  = StyleSheet.create({
    image:{
        width: 30,     
        height: 30,    
        borderRadius: '50%',
        objectFit: 'cover',
        flexDirection: 'row',

    },
    infoDoCard:{
        backgroundColor:"#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:8,
        borderRadius:10
    },

     title:{
        flexDirection: 'row',
        fontSize:10,
        fontWeight: '300',
        color: '#595959'
     },


})

