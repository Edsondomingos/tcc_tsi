import { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
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

    return ( modalSignup ?

        <Modal
                    visible={modalSignup} transparent={false} animationType='slide' onRequestClose={() => setModalSignup(!modalSignup)}
                >
                    {/* <BtnFecharModal onPress={() => setModalSignup(!modalSignup)} /> */}
                    <View style={{ flex: 1, width: '100%', height: '100%' }}>
                        <WebView
                            source={{ uri: 'https://acheitudo.online/ca/login.php' }}
                        />
                    </View>
                </Modal>
                :
        <View style={Style.container}>
            
            <ScrollView>
                <View style={Style.containerUser}>
                    <Image source={require('../../imgs/perfilBranco.png')}
                        style={Style.imgPerfil} />
                    <View>
                        <Text style={Style.user}>Nome usuario</Text>
                        <Text style={Style.user}>Casado, 29 anos</Text>
                        <Text style={Style.user}>Endereço completo</Text>
                        <Text style={Style.user}>(84) 99999-9999</Text>
                        <Text style={Style.user}>Redes Sociais:</Text>
                        <Text style={Style.user}>linkedin</Text>
                        <Text style={Style.user}>instagram</Text>
                        <TouchableOpacity>
                            <Text style={{borderWidth: 1, borderBlockColor: '#000', width: 100, textAlign: 'center'}}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{borderWidth: 1, borderBlockColor: '#000', width: 100, textAlign: 'center'}}>Imprimir Curriculos</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginVertical: 20}}>
                    <Text style={Style.titulos}>Formação</Text>
                    <TouchableOpacity style={{marginVertical: 15}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{backgroundColor: '#04CEFB', color: '#fff', width: 20, borderRadius: 100, textAlign: 'center'}}>+</Text>
                            <Text style={{color: '#04CEFB'}}> Acrescentar Formação</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 20}}>
                    <Text style={Style.titulos}>Experiência Profisional</Text>
                    <TouchableOpacity style={{marginVertical: 15}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{backgroundColor: '#04CEFB', color: '#fff', width: 20, borderRadius: 100, textAlign: 'center'}}>+</Text>
                            <Text style={{color: '#04CEFB'}}> Acrescentar Experiência</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{marginVertical: 20}}>
                    <Text style={Style.titulos}>Pitch</Text>
                    <TouchableOpacity style={{marginVertical: 15}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{backgroundColor: '#04CEFB', color: '#fff', width: 20, borderRadius: 100, textAlign: 'center'}}>+</Text>
                            <Text style={{color: '#04CEFB'}}> Acrescentar video</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                

            </ScrollView>
            <Menu />
        </View>
    )
}