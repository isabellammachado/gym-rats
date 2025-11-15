
import { ImageSourcePropType } from "react-native";

interface Lista {
  id: number;
  nome: string;
  descricao: string;
  foto: ImageSourcePropType

}

export interface IListProps {
  listaPessoas:Lista []
}

export interface PropsInfoCard {
  nome: string;
  descricao: string;
  foto: ImageSourcePropType
}