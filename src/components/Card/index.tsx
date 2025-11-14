// import { FlatList, Image, Text, View } from "react-native";
// import {UserDefault} from "../../../assets/images.png"
// import { styles } from "./style";


// export const Card = () => { 
//  const listaPessoas = [
//     {
//       id: 1,
//       descricao: "I'm back",
//       nome: 'Karine',
//       hora:'7:43 am'
//     },
//      {
//       id: 2,
//       descricao: "Pilates",
//       nome: 'Natalia',
//       hora:'7:24 am'
//     },
//      {
//       id: 3,
//       descricao: "I'm back",
//       nome: 'João',
//       hora:'7:43'
//     },
    
// ];
//     return(
//         <>
        
        
//         <>
//       <FlatList
//         data={listaAlunos}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={({ item }) => 
//           <View style={styles.card}>
//             <View>
//               <Text style={styles.title}>
//                 Nome: {item.nome}
//               </Text>

//               <Text style={styles.subTitle}>
//                 Time: {item.descricao}
//               </Text>
//             </View>

//             <Image source={UserDefault} style={styles.image} alt="Banner de login" />
//           </View>
//         }
//       />
//     </></>
//     )
// }