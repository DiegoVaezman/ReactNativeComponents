import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme, theme: {currentTheme, colors}} = useContext(ThemeContext)


    return (
        <View>
            <HeaderTitle title="Theme" />

            <TouchableOpacity 
                style={{
                    backgroundColor: colors.primary,
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center'
                }}
                activeOpacity={0.8}
                onPress={currentTheme === 'light' ? setDarkTheme : setLightTheme }
            >
                <Text 
                    style={{
                        color: colors.text, 
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                        Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}
