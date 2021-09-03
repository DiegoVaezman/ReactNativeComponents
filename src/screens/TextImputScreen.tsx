import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Switch, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextImputScreen = () => {


    const { isSubscribed, onChange, form } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView  //hace que le teclado no estorbe la visualicación
            behavior={Platform.OS === "ios" ? "padding" : "height"}

        >
            <ScrollView>

                {/*hace que le teclado no estorbe la visualicación */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >

                    <View style={styles.globalMargin} >
                        <HeaderTitle title="Text Imputs" />
                        <TextInput
                            style={stylesScreen.imputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}  //evita el corrector en el input
                            autoCapitalize="words"  //Pone primera letra de palabras en mayúscula. Android no va.
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesScreen.imputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            keyboardAppearance="dark" //solo ios
                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText} >Suscribirse</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <TextInput
                            style={stylesScreen.imputStyle}
                            placeholder="Ingrese su teléfono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />
                        <View style={{ height: 100 }} />
                    </View>

                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    imputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)'
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft:5
    },
    switchText: {
        fontSize: 25
    }
});