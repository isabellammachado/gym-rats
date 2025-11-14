import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { AntDesign } from '@expo/vector-icons';  
import { Botao } from "../../components/Button";
import { Texto } from "../../components/Text";


export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.icone}>
      <AntDesign name="left" size={24} color="black" />
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
      />
      <Botao 
      titulo= 'Redefinir minha senha' 
      />
    </View>
    <View style={styles.cabecalho}>
      <Texto 
      titulo = 'Problemas para entrar?'
      color ="#B3B3B3"
      >
      </Texto>
       <Texto 
      titulo = 'Contate o suporte.'
      >
      </Texto>
    </View>
    </View>
  );
}
