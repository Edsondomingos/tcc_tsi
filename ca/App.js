import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/components/Index'
// import Login from './src/components/Login'

const Stack = createNativeStackNavigator()

export default () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initial='Index' screenOptions={{ headerShown: true}}>
          <Stack.Screen name='Index' component={Index} />
          {/* <Stack.Screen name='Login' component={Login} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    
    )
  }
  
  
