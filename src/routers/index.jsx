import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/Login";
import { TabsRouters } from "./bottonTabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack =createStackNavigator();

export const Routers = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen  name="StackLogin" component={Login} /> 
      <Stack.Screen  name="Home" component={TabsRouters}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}