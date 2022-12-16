import { Container } from './src/styledComponents/Index'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login'
import Index from './src/components/Index'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initial='Index' screenOptions={{ headerShown: true}}>
        <Stack.Screen name='index' component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

