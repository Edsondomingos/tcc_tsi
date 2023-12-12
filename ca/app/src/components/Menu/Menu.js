import { ContainerRow, Btn, Buttons } from './style';
import { Text } from 'react-native';
// import Vagas from '../Vagas/Vagas';
// import Login from '../Login/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// function Menu({ navigation }) {
//   return (
//     <ContainerRow>
//       <Btn onPress={() => navigation.navigate('Vagas')}>
//         <Buttons source={require('../../../imgs/homeBranco.png')} />
//       </Btn>

//       <Btn onPress={() => navigation.navigate('Login')}>
//         <Buttons source={require('../../../imgs/perfilBranco.png')} />
//       </Btn>
//     </ContainerRow>
//   );
// }
// function Vagas({ navigation }, { size, color }) {
//   return (
//     <ContainerRow>
//       <Btn onPress={() => navigation.navigate('Vagas')}>
//         <Buttons
//           source={require('../../../imgs/homeBranco.png')}
//           size={size}
//           color={color}
//         />
//       </Btn>
//     </ContainerRow>
//   );
// }
// // onPress={() => navigation.navigate('Login')}
// function Loginn({ navigation }, { size, color }) {
//   return (
//     <ContainerRow>
//       <Btn >
//         <Buttons
//           source={require('../../../imgs/perfilBranco.png')}
//           size={size}
//           color={color}
//         />
//       </Btn>
//     </ContainerRow>
//   );
// }

// export default ({navigation}) => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen
//         name="Vagas"
//         component={Vagas}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({ size, color }) => <Vagas size={size} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Login"
//         component={Login}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({ size, color }) => <Loginn size={size} color={color} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// option={tabBar }
// tabBar={ => <Text>oi</Text>}
export default (props) => {
  return (
    <ContainerRow>
      <Btn onPress={() => props.navigation.navigate('Vagas')}>
        <Buttons source={require('../../../imgs/homeBranco.png')} />
      </Btn>

      <Btn onPress={() => props.navigation.navigate('Login')}>
        <Buttons source={require('../../../imgs/perfilBranco.png')} />
      </Btn>
    </ContainerRow>
  )
}
