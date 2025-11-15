import {Image, Text, View } from "react-native"
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Card } from './../../components/Card/index';
import {Feather } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FotoBanner from "../../../src/assets/BANNERR.png"
import { BannerComNome } from "../../components/CardAbaixoDaFoto";
import perfil from "../../assets/fotoperfil.png";
import perfil1 from "../../assets/perfil1.png";
import perfil2 from "../../assets/perfil2.png";
import treinoAcademia  from "../../assets/treinoAcademia.jpeg";
import treinoBike from "../../assets/treinoBike.jpeg";
import teinoPilates from "../../assets/treinoPilates.jpeg";
import treinoTrilha from "../../assets//treinoTrilha.jpeg";



export const Home = () => {
  
  const navigation = useNavigation(); 

  const listaPessoas = [
    
    {
      id: 1,
      descricao: "I'm back",
      nome: 'Karine Branco',
      foto: treinoAcademia ,
      
    },
    {
      id: 2,
      descricao: "Pilates",
      nome: 'Natália',
      foto: teinoPilates,
    },
    {
      id: 3,
      descricao: "Volta ao spinning com ênfase em quase...",
      nome: 'Isabella Machado',
      foto: treinoBike
    },
  
    {
      id: 4,
     descricao: "Trilha",
    nome: 'Natália',
    foto: treinoTrilha,
    }
  ];
    

  return (
    <View style={styles.container}>
        <View style={styles.icone}>
            <Text> <FontAwesome6 name="equals" size={24} color="black" /></Text>
            <Text> <Feather name="bell" size={24} color="black" />       <Entypo name="dots-three-horizontal" size={24} color="black" /> </Text>
        </View>
        <View>
            <Text style={styles.title}>SARADOS NA EUROPA 🇫🇷 🇮🇹 🥖 </Text>
        </View>
        <View>
            <Image style={styles.imageBanner} source={FotoBanner} alt="Banner" />
        </View>
         <View>
            <BannerComNome /> 
        </View>
        {listaPessoas.length <= 0 ? (
          <View >
            <Text style={{ fontSize: 50}}>Não existem treinos nessa lista</Text>
          </View>
        ) : (
          <View style={styles.wrapper}>
          <Card listaPessoas={listaPessoas} />
          </View>
        )}
        
      
    </View>
  )
}
