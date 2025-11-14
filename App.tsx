import { StatusBar } from 'expo-status-bar';
import { Login } from './src/pages/Login/index';
import { Home } from './src/pages/Home/index';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    
     {/* <Login /> */}
     <Home />

    </>
  );
}


