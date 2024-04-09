import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerUser: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgPerfil: {
        width: 150, 
        height: 150,
        borderRadius: 100,
        borderWidth: 1, 
        borderColor: '#000',
        margin: 10,

    },
    user: {
        fontSize: 18,
    },
    titulos: {
        fontSize: 25,
        borderBottomWidth: 1,
        borderColor: '#000',
    }
})