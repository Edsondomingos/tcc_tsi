import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vagas from './src/components/Vagas/Vagas';
import Vaga from './src/components/Vaga/Vaga';
import Login from './src/components/Login/Login';
import Admin from './src/components/Admin/Admin';
import Signup from './src/components/Signup/Signup'
import AddVaga from './src/components/AddVaga/AddVaga'
import Menu from './src/components/Menu/Menu'


const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initial="Index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Vagas" component={Vagas} /> 
        <Stack.Screen name="Signup" component={Signup} />     
        <Stack.Screen name="AddVaga" component={AddVaga} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Vaga" component={Vaga} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
