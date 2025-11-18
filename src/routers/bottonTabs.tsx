import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './../pages/Home/index';
import { Detalhes } from "../pages/Detalhes";
import { Classificacoes } from "../pages/Classificacoes";
import { BatePapo } from "../pages/BatePapo";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TabList } from "../@types/navigation";


const Tab = createBottomTabNavigator<TabList>();

export const TabsRouters = () => {

  return(
 
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
  name="TabHome"
  component={Home}
  options={{
    title: "Home",
    tabBarIcon: ({ color, size }) => (
      <AntDesign name="home" size={size} color={color} />
    ),
  }}
    />
      <Tab.Screen name="TabDetalhes"
       component={Detalhes} 
       options={{
         title: "Detalhes",
      tabBarIcon: ({ color, size }) => 
      (<Ionicons name="id-card-outline" size={size} color={color="black"} /> )}}/>
      
      <Tab.Screen 
      name="TabClassificações" 
      component={Classificacoes} 
      options={{
        title: 'Classificações',
      tabBarIcon: ({ color, size }) => 
      (<Ionicons name="ribbon-outline" size={size} color={color="black"} /> )}} />
      
      <Tab.Screen
       name="TabBatePapo" 
       component={BatePapo} 
       options={{
        title:'Bate-papo',
      tabBarIcon: ({ color, size }) => 
      (<Ionicons name="chatbubble-outline" size={size} color={color="black"} /> )}}/>
    </Tab.Navigator>
  )

}