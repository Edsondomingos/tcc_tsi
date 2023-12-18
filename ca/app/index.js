import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import Menu from './Screens/Menu/Menu'

let conteudo = [
  {
    vaga: 'Desenvolvedor mobile jr',
    tipo: 'CLT',
    remuneracao: 2000,
    requisitos: 'conhecimentos em react native',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
];

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{height: '90%'}}>
        <Text style={{
          fontSize: 50, textAlign: 'center'
        }}>        
          CA
        </Text>
        {
          conteudo.map((valor,index) => {
            return (
              <TouchableHighlight key={index}
                onPress={() => console.log()}
                style={{borderLeftWidth: 1, borderLeftColor: '#000', marginLeft: 20,
                marginVertical: 10, padding: 5, 
              }}
              >
                <View>
                  <Text style={{fontSize: 22}}>{valor.vaga}</Text>
                  <Text>{valor.tipo}</Text>
                  <Text>{valor.remuneracao}</Text>
                  <Text>{valor.requisitos}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </ScrollView>
      <Menu />
    </View>
  )
}


