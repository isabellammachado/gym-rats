import {Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import {Feather } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FotoBanner from "../../../src/assets/BANNERR.png"
import { BannerComNome } from "../../components/CardAbaixoDaFoto";
import { CardPrincpal } from "../../components/CardPrincipal";

export const Home = () => {
  
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
        <View style={styles.icone}>
            <Text> <FontAwesome6 name="equals" size={24} color="black" /></Text>
            <Text> <Feather name="bell" size={24} color="black" />       <Entypo name="dots-three-horizontal" size={24} color="black" /> </Text>
        </View>
        <View>
           <Text style={styles.title}>SARADOS NA EUROPA 🇫🇷 🇮🇹 🥖</Text>
        </View>
        <View>
            <Image style={styles.imageBanner} source={FotoBanner} alt="Banner" />
        </View>
         <View>
            <BannerComNome /> 
        </View>
        <View>
          <CardPrincpal>

          </CardPrincpal>
        </View>
        <TouchableOpacity style={styles.botaoRedondo}> 
          <Text> <FontAwesome6 name="add" size={24} color="white" /></Text>
        </TouchableOpacity>
    </View>
  )
}
