import { Image, ScrollView, Text, View } from "react-native"
import { styles } from "./style"
import FotoAcademia from "../../assets/treinoAcademia.jpeg"
import fotoPerfil from "../../assets/perfil1.png"
import fotoPerfil2 from "../../assets/perfil2.png"
import fotoPilates  from "../../assets/treinoPilates.jpeg"
import fotoPerfilEu from "../../assets/FotoPerfilEu.png"
import fotoBike from "../../assets/treinoBike.jpeg"
import fotoTrilha from "../../assets/treinoTrilha.jpeg"



export const CardPrincpal = () => {
    return(
        <ScrollView>
            <View >
        <Text style={styles.dia}>segunda-feira, out. 6</Text>
            <View style={styles.card}>
            <View style={styles.primeiraLinha}>
                <Image source={FotoAcademia} style={styles.fotoTreino} />
                <Text style={styles.title}>I'm back</Text>
            </View>
            <View style={styles.segundaLinha}>
            <View style={styles.infoPessoa}>
                <Image source={fotoPerfil} style={styles.fotoPerfil} />
                <Text style={styles.nome}>Karine Branco</Text>
                <Text style={styles.hora}>7:43 am</Text>
             </View>
            </View>
             </View>
              <Text style={styles.dia}>segunda-feira, ago. 4</Text>
            <View style={styles.card}>
            <View style={styles.primeiraLinha}>
                <Image source={fotoPilates} style={styles.fotoTreino} />
                <Text style={styles.title}>Pilates</Text>
            </View>
            <View style={styles.segundaLinha}>
            <View style={styles.infoPessoa}>
                <Image source={fotoPerfil2} style={styles.fotoPerfil} />
                <Text style={styles.nome}>Natalia</Text>
                <Text style={styles.hora}>7:24 pm</Text>
             </View>
            </View>
             </View>
             <View style={styles.card}>
            <View style={styles.primeiraLinha}>
                <Image source={fotoBike} style={styles.fotoTreino} />
                <Text style={styles.title}>Volta ao spinning com ênfase em quas..</Text>
            </View>
            <View style={styles.segundaLinha}>
            <View style={styles.infoPessoa}>
                <Image source={fotoPerfilEu} style={styles.fotoPerfil} />
                <Text style={styles.nome}>Isabella Machado</Text>
                <Text style={styles.hora}>6:38 pm</Text>
             </View>
            </View>
             </View>
              <Text style={styles.dia}>domingo, ago. 3</Text>
            <View style={styles.card}>
            <View style={styles.primeiraLinha}>
                <Image source={fotoTrilha } style={styles.fotoTreino} />
                <Text style={styles.title}>Trilha</Text>
            </View>
            <View style={styles.segundaLinha}>
            <View style={styles.infoPessoa}>
                <Image source={fotoPerfil2} style={styles.fotoPerfil} />
                <Text style={styles.nome}>Natalia</Text>
                <Text style={styles.hora}>3:24 pm</Text>
             </View>
            </View>
             </View>        
        </View>
    </ScrollView>

)}