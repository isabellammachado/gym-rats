
export type StackList = {
  StackLogin: undefined;
  StackHome: undefined;

}

export type TabList = {
  TabHome: undefined;
  TabDetalhes: undefined;
  TabClassificações: undefined;
  TabBatePapo: undefined;

}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabList, StackList,  {}
  }
}