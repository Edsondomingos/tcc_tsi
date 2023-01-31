import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/components/Index';
import Login from './src/components/Login/Login';
import Signup from './src/components/Signup/Signup';
import Perfil from './src/components/PerfilColaborador/Perfil';
import Vagas from './src/components/Vagas/Vagas';
import Vaga from './src/components/Vaga/Vaga';
import PerfilEmpresa from './src/components/PerfilEmpresa/PerfilEmpresa';
import AddVaga from './src/components/AddVaga/AddVaga';
import Menu from './src/components/Menu/Menu';
import PostarVaga from './src/components/PostarVaga/PostarVaga';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initial="Index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AddVaga" component={AddVaga} />
        <Stack.Screen name="PerfilEmpresa" component={PerfilEmpresa} />
        <Stack.Screen name="Vagas" component={Vagas} />
        <Stack.Screen name="Vaga" component={Vaga} />
        <Stack.Screen name="PostarVaga" component={PostarVaga} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
