import { FlatList} from "react-native"
import { InfoCard } from "./InfoCard"
import { IListProps } from "./types"



export const Card = ({listaPessoas}: IListProps) => {

  return (
    <>
      <FlatList
        data={listaPessoas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => 
          <InfoCard 
          nome ={item.nome}
          descricao ={item.descricao}
          foto={item.foto}
          
          />
          
        }
      />
   </>
  )
}
