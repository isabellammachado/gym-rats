import { Image, Text, View } from "react-native";
import { styles } from "./style";
import FotoPerfilEu from "../../../src/assets/FotoPerfilEu.png"
import FotoPerfil2 from "../../../src/assets/perfil2.png"

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const BannerComNome = () => {
  return (
    <View style={styles.infoDoCard}>
      <View style={styles.infoDoCard}>
      <Image source={FotoPerfil2} style={styles.image} alt="Foto perfil" />
      <Text style={styles.title}>  7{"\n"}  Líder</Text>
      </View>
      <View style={styles.infoDoCard}>
      <Image source={FotoPerfilEu} style={styles.image} alt="Foto perfil" />
      <Text style={styles.title}>  4{"\n"}  Você</Text>
      </View>
      <View style={styles.infoDoCard}>
      <MaterialCommunityIcons name="calendar-month-outline" size={24} color="black" />
      <Text style={styles.title}> 199{"\n"} dias restantes</Text>
      </View>
    </View>
    
  );
};
