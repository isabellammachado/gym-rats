import { Image, Text, View } from "react-native"
import UserDefault from '../../../../assets/images.png';
import { styles } from "./style";
import { PropsInfoCard } from "../types";

export const InfoCard = ({nome, descricao} : PropsInfoCard ) => {
  
  return(
    <View style={styles.card}>
            <View>
                <Image source={UserDefault} style={styles.image} alt="Foto perfil" />
            <Text style={styles.subTitle}>
                {descricao}
            </Text>
            <Text style={styles.title}>
               {nome}
            </Text>

              
            </View>

            
          </View>

  )
}