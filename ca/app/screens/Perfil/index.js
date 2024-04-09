import { View, Text, Image, ScrollView } from 'react-native'
import Style from './Style'
import Menu from '../../components/Menu'

export default Perfil = () => {
    return (
        <View style={Style.container}>
            <ScrollView>
                <View style={Style.containerUser}>
                    <Image source={require('../../imgs/perfilBranco.png')}
                        style={Style.imgPerfil} />
                    <View>
                        <Text style={Style.user}>Nom usuario</Text>
                        <Text style={Style.user}>Casado, 29 anos</Text>
                        <Text style={Style.user}>Endereço completo</Text>
                        <Text style={Style.user}>(84) 99999-9999</Text>
                        <Text style={Style.user}>Redes Sociais:</Text>
                    </View>
                </View>

                <View>
                    <Text style={Style.titulos}>Formação</Text>
                </View>

                <View>
                    <Text style={Style.titulos}>Experiência Profisional</Text>
                </View>


                <View>
                    <Text style={Style.titulos}>Pitch</Text>
                </View>
            </ScrollView>
            <Menu />
        </View>
    )
}