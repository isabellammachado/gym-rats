import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/Login";
import { TabsRouters } from "./bottonTabs";
import { StackList } from "../@types/navigation";


const Stack = createStackNavigator();


export const StackRouters = () => {

  return(
    <Stack.Navigator screenOptions={{headerShown: false}} >
    <Stack.Screen  name="StackLogin" component={Login} /> 
    <Stack.Screen  name="StackHome" component={TabsRouters}/>
    </Stack.Navigator> 
  )

}