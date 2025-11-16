

import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

   dia:{
        flexDirection: 'row',
        color: '#929292',
        textAlign: 'center', 
        padding: 10,
        marginVertical: 5,
    },

    title: {
        color:'#232323',
        flexDirection: 'row',
        alignItems: 'center',

    },

    nome:{
        color:'#232323',
        fontSize: 14,
        left: 65,
    },

    hora:{
        color: '#929292',
        fontSize: 12,
        position:'absolute',
        left: 310,
          fontWeight: '300',
    

    },

    card: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
    },

    fotoPerfil: {
        borderRadius: 20,
        width: 20,
        height: 20,
        marginRight: 8,
        left: 65,

    },

    fotoTreino:{
        borderRadius: 25, 
        width: 50,
        height: 50,
        marginRight: 10
  
    },
    primeiraLinha: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
},

    segundaLinha: {
        flexDirection: 'row',
        alignItems: 'center',
        right:20
},

    infoPessoa: {
        flexDirection:'row',
        marginTop: -17,
        left: 10
       
},



    

    
})