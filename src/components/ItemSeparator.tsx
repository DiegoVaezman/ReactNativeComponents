import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ItemSeparator = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    return (
        <View
            style={{
                borderBottomWidth: 1,
                borderColor: colors.text,
                opacity: 0.4,
                marginVertical: 8
            }}
        />
    )
}
