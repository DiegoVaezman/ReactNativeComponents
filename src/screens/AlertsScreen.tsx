import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const AlertsScreen = () => {

    // DOC ALERTS https://reactnative.dev/docs/alert

    const showAlert = () => {
        Alert.alert(
            "Título",
            "Este es el mensaje de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive" //solo va en ios, para andorid se debe personalizar botón 
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true, //cierra ventana pulsando fuera
                onDismiss: () => console.log("ondismiss") //se ejecuta cuando se cancela pulsando fuera
                //es preferible "obligar" al usuario a pulsar ok o cancel...
            }
        );
    }


    // DOC PROMPT PARA ANDROID https://www.npmjs.com/package/react-native-prompt-android
    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }



    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar alerta"
                onPress={showAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />
        </View>
    )
}
