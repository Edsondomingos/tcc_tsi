import { View, ScrollView, Text } from 'react-native'
import Menu from '../../components/Menu'

export default Inscricoes = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Text style={{ textAlign: 'center', fontSize: 22, color: '#086E7C', fontWeight: 'bold' }}>Minhas Inscrições</Text>

                <Text>Nome Empresa (pode clicar e ve-la)</Text>
                <Text>Mesma decrição do index, mas pode clicar e ver a vaga(pode clicar e ve-la)</Text>

            </ScrollView>
            <Menu />
        </View>
    )
}