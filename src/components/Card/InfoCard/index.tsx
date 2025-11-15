import { Image, Text, View } from "react-native"
import { styles } from "./style";
import { PropsInfoCard } from "../types";



export const InfoCard = ({nome, descricao, foto} : PropsInfoCard ) => {
  
  return(
    <>
    <View >
            <View style={styles.card}>
                <Image source={foto} style={styles.image} alt="Foto perfil" />
                  <Text style={styles.subTitle}>
                {descricao}
                  </Text>
                  <Text style={styles.title}>
                        {nome}
                  </Text>
            </View>
              

      </View>
        

      </>
      

  )
}