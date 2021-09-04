import React, { useContext, useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.purpleBox,
                    borderColor: colors.text,
                    backgroundColor: colors.primary, 
                    marginBottom: 20,
                    opacity: opacity,
                    transform: [{
                        translateY: position
                    }]
                }} 
            />
            <Button 
                title="FadeIn"
                color={colors.primary}
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-150, 900)
                }}
            />
            <Button 
                title="FadeOut"
                color={colors.primary}
                onPress={() => fadeOut()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    purpleBox: {
        borderRadius: 100,
        borderWidth: 2,
        width: 150,
        height: 150
    }
});