import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './../pages/Home/index';
import { Login } from "../pages/Login";
import { Detalhes } from "../pages/Detalhes";
import { Classificacoes } from "../pages/Classificacoes";
import { BatePapo } from "../pages/BatePapo";
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const TabsRouters = () => {

  return(
 
    <Tab.Navigator screenOptions={{headerShown: false}}>
       <Tab.Screen name="Login" component={Login} />
       <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
        <Tab.Screen name="Classificações" component={Classificacoes} />
        <Tab.Screen name="Bate-Papo" component={BatePapo} />
    </Tab.Navigator>
  )

}