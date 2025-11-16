import { Text } from "react-native";
import { styles } from "../../pages/Login/style";
import { IPropsText } from "./type";

 export const Texto = ({ titulo, color}: IPropsText)  => {
 return (

    <Text
     style= {[styles.cabecalho ,
          {
            color: color ? color :'#D33A2C',
          }
          
        ]}>
        {titulo}
        </Text>
 )
};