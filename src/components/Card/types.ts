
interface Lista {
  id: number;
  nome: string;
  descricao: string;
}

export interface IListProps {
  listaPessoas:Lista []
}

export interface PropsInfoCard {
  nome: string;
  descricao: string
}