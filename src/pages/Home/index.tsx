import {Image, ImageBackground, Text, View } from "react-native"
import Banner from '../../../assets/fundocinzajpg.jpg'
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Card } from './../../components/Card/index';

export const Home = () => {
  
  const navigation = useNavigation(); 

  const listaPessoas = [
    {
      id: 1,
      descricao: "I'm back",
      nome: 'Karine Branco'
      
    },
    {
      id: 2,
        descricao: "Pilates",
      nome: 'Natália'
    },
    {
      id: 3,
      descricao: "Volta ao spinning com ênfase em quse...",
      nome: 'Isabella Machado'
    },
    {
      id: 4,
     descricao: "Trilha",
      nome: 'Natália'
    }
  ];

  return (
    <View style={styles.container}>
        <View>
            <Text>AQ VAI UM ICONE</Text>
        </View>
        <View>
            <Text>SARADOS NA EUROPA </Text>
        </View>
        <View>
            <Text>FOTO TIPO BANNER </Text>       
        </View>
         <View>
            <Text>FBanner com lider , voce e dias restantes </Text>       
        </View>
        {listaPessoas.length <= 0 ? (
          <View style={{ backgroundColor: 'red', marginBottom: 20 }}>
            <Text style={{ fontSize: 50}}>Não existe alunos nessa turma!</Text>
          </View>
        ) : (
          <View style={styles.wrapper}>
          <Card  listaPessoas={listaPessoas}/>
          </View>
        )}
        
      
    </View>
  )
}
