import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'


export default function Menu() {

  const router = useRouter()

  return (
    <View style={{
      backgroundColor: '#086E7C', display: 'flex', flexDirection: 'row',
      justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '7%',
      borderTopRadius: 100,
    }}>
      <TouchableOpacity
        onPress={() => router.push({
          href: '/index'
        })}
      >
        <Image
          source={require('../../imgs/homeBranco.png')}
          style={{ width: 50, height: 50 }}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push({
          href: ''
        })}
      >
        <Image
          source={require('../../imgs/postBranco.png')}
          style={{ width: 50, height: 50 }}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push({
          pathname: '/screens/Perfil'
        })}
      >
        <Image
          source={require('../../imgs/perfilBranco.png')}
          style={{ width: 50, height: 50 }}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}
