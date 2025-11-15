import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './../pages/Home/index';


const Tab = createBottomTabNavigator();

export const TabsRouters = () => {

  return(
 
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="TabHome" component={Home} />
        {/* <Tab.Screen name="TabDetalhes" component={Detalhes} />
        <Tab.Screen name="TabClassificacoes" component={Classificacoes} />
        <Tab.Screen name="TabBatePapo" component={BatePapo} /> */}
    </Tab.Navigator>
  )

}