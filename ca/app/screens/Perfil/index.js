import { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, Modal } from 'react-native'
import Style from './Style'
import Menu from '../../components/Menu'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WebView } from 'react-native-webview'

export default Perfil = () => {

    const [modalSignup, setModalSignup] = useState(false)

    useEffect(() => {
        const statusLogin = async () => {
            try {
                const dadosAsync = JSON.parse(await AsyncStorage.getItem('statusLogin'))
                if (dadosAsync.length == 0 || dadosAsync === null) {
                    setModalSignup(true)
                }
                console.log(modalSignup,dadosAsync.length)
            } catch (e) {
                console.log(e)
            }
        }

        statusLogin()
    }, [])

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

                <Modal
                    visible={modalSignup} transparent={false} animationType='slide' onRequestClose={() => setModalSignup(!modalSignup)}
                >
                    {/* <BtnFecharModal onPress={() => setModalSignup(!modalSignup)} /> */}
                    <View style={{ flex: 1, width: '100%', height: '100%' }}>
                        <WebView
                            source={{ uri: 'https://acheitudo.online/ca/signup.php' }}
                        />
                    </View>
                </Modal>

            </ScrollView>
            <Menu />
        </View>
    )
}