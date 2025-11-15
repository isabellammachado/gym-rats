import { Text, TouchableOpacity } from "react-native";
import {IPropsButton } from "./type"
import { styles } from "./style";

 export const Botao = ({ titulo, backgroundColor, color, onChange}: IPropsButton )  => {
 return (
 <TouchableOpacity onPress={onChange}
 style= {[styles.button ,
      {
        backgroundColor: backgroundColor ? backgroundColor :'#fff',
      }
    ]}>

 <Text 
 style= {[styles.textoBotao,
    {
    color: color ? color: '#000',
 }
    ]}>

 {titulo}</Text>
 </TouchableOpacity>
 );
 }