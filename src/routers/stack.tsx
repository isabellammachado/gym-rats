import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/Login";
import { Home } from './../pages/Home/index';


const Stack =createStackNavigator();

export const StackRouters = () => {

  return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen  name="StackLogin" component={Login}/> 
            <Stack.Screen  name="StackHome" component={Home}/>
        </Stack.Navigator>
    
  )

}