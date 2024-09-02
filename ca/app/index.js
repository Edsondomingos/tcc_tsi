import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Menu from './components/Menu'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router';

let conteudo = [
  {
    vaga: 'Desenvolvedor mobile jr',
    tipo: 'CLT',
    remuneracao: 2000,
    requisitos: 'conhecimentos em react native',
    atribuicao: '',
    habilidades: '',
    benefiios: ''
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
    atribuicao: '',
    habilidades: '',
    benefiios: ''
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
    atribuicao: '',
    habilidades: '',
    benefiios: ''
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
    atribuicao: '',
    habilidades: '',
    benefiios: ''
  },
];



export default function App() {

  const router = useRouter()

  const [vagas, setVagas] = useState(null)

  // useEffect(() => {
  //   const vai = async () => {
  //     await router.push({
  //       pathname: "/screens/PerfilEmpresa",
  //     })
  //   }

  //   vai()
    
  // })


  // Pega vagas disponiveis na API
  useEffect(() => {
    const getVagas = async () => {
      try {
        // const response = await axios.get(`https://www.acheitudo.online/ca/api_vagas.php`)
        // setVagas(response.data)
        setVagas(conteudo)
      } catch (e) {
        console.log(e)
      }
    }

    getVagas()
  }, [])

  useEffect(() => {
    const statusLogin = async () => {
      try {
        if (await AsyncStorage.getItem('statusLogin') === null) {
          await AsyncStorage.setItem('statusLogin', JSON.stringify([]))
        }
        else {
          const statusAtual = JSON.parse(await AsyncStorage.getItem('statusLogin'))
          await AsyncStorage.setItem('statusLogin', JSON.stringify(statusAtual))
        }
        console.log(JSON.parse(await AsyncStorage.getItem('statusLogin')))
      } catch (e) {
        console.log(e)
      }

    }

    statusLogin()
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ height: '90%' }}>
        <Text style={{
          fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: '#086E7C'
        }}>
          CA
        </Text>
        <Text style={{ textAlign: 'center', color: '#086E7C', fontWeight: 'bold' }}>Centro de Autossuficiência </Text>
        {vagas ?
          vagas.map((valor, index) => {
            return (
              <TouchableOpacity key={index}
                onPress={() => console.log()}
                style={{
                  borderLeftWidth: 1, borderLeftColor: '#000', marginLeft: 20,
                  marginVertical: 10, padding: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 22, color: '#086E7C', fontWeight: 'bold' }}>{valor.vaga}</Text>
                  <Text>+Tipo: {valor.tipo}</Text>
                  <Text>+Contratação: {valor.contratacao}</Text>
                  <Text>+Salário: R${valor.salario}</Text>
                  <Text>+Descricão: {'\n' + valor.descricao}</Text>
                </View>
              </TouchableOpacity>
            )
          })
          : ""}
      </ScrollView>
      <Menu />
    </View>
  )
}


