import { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
import Style from './Style'
import Menu from '../../components/Menu'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Webview from '../../components/Webview'

export default Perfil = () => {

    const [showModal, setShowModal] = useState(false)
    const [link, setLink] = useState('https://acheitudo.online/ca/login.php')

    useEffect(() => {
        const statusLogin = async () => {
            try {
                const dadosAsync = JSON.parse(await AsyncStorage.getItem('statusLogin'))
                if (dadosAsync.length == 0 || dadosAsync === null) {
                    setShowModal(true)
                }
                console.log(showModal,dadosAsync.length)
            } catch (e) {
                console.log(e)
            }
        }

        statusLogin()
    }, []) //Sempre ver showModal

    return ( showModal ?

                <Modal
                    visible={showModal} transparent={false} animationType='slide' onRequestClose={() => setShowModal(!showModal)}
                >
                    {/* <BtnFecharModal onPress={() => setShowModal(!showModal)} /> */}
                    {/* <View style={{ flex: 1, width: '100%', height: '100%' }}> */}
                        <Webview link={link} />
                    {/* </View> */}
                </Modal>
                :
        <View style={Style.container}>
            
            <ScrollView style={{padding: 5}}>
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
                    <TouchableOpacity style={{marginVertical: 15}}
                    onPress={() => {
                        setLink('https://acheitudo.online/ca/novaFormacao.html')
                        setShowModal(!showModal)

                        }}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{backgroundColor: '#04CEFB', color: '#fff', width: 20, borderRadius: 100, textAlign: 'center'}}>+</Text>
                            <Text style={{color: '#04CEFB'}}> Acrescentar Formação</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 20}}>
                    <Text style={Style.titulos}>Experiência Profisional</Text>
                    <TouchableOpacity style={{marginVertical: 15}}
                        onPress={() => {
                        setLink('https://acheitudo.online/ca/novaExperiencia.html')
                        setShowModal(!showModal)

                        }}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{backgroundColor: '#04CEFB', color: '#fff', width: 20, borderRadius: 100, textAlign: 'center'}}>+</Text>
                            <Text style={{color: '#04CEFB'}}> Acrescentar Experiência</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{marginVertical: 20}}>
                    <Text style={Style.titulos}>Pitch</Text>
                    <TouchableOpacity style={{marginVertical: 15}}
                    onPress={() => {
                        setLink('https://acheitudo.online/ca/pitch.php')
                        setShowModal(!showModal)

                        }}>
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