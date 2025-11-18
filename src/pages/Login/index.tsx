import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { AntDesign } from '@expo/vector-icons';  
import { Botao } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";


export function Login() {
  const navigation = useNavigation(); 

 const [fontsLoaded] = useFonts({
  'Nunito-ExtraBold': require('../../../assets/fonts/static/Nunito-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
  return null; 
  }

  return (
    <View style={styles.container}>
      <View style={styles.icone}>
      <AntDesign name="left" size={15} color="black" />
    </View>

    <View>
      <Text style={styles.title}>
        Fazer Login
      </Text>
      <Text style={styles.subtitle}>
       Bem-vindo de volta.
      </Text>
    </View>

    <View>
      <TextInput  keyboardType='email-address'  placeholderTextColor={'gray'} style={styles.input} placeholder='Email:'/>
      <TextInput secureTextEntry={true} placeholderTextColor={'gray'}  style={styles.input} placeholder='Senha:'/>
      <Botao 
      titulo= 'Fazer Login' 
      color='#fff'
      backgroundColor='#D03A2B'
      onChange={() => navigation.navigate("StackHome" )}
      />
      <Botao 
      titulo= 'Redefinir minha senha' 
      />
    </View>

    <View style={styles.rodape}>
      <Text style={styles.textoUmRodape}>
        Problemas para entrar?
      </Text>
      <Text style={styles.textoDoisRodape}>
        Contate o suporte.
      </Text>
    </View>
    </View>
  );
}
