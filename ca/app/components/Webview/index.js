import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

export default Webview = ({link}) => {
    return (
        <View style={{flex: 1}}>
            <WebView 
                source={{ uri: link}} 
            />
        </View>
    )
}