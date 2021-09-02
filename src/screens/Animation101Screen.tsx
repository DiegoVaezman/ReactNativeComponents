import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.purpleBox, 
                    marginBottom: 20,
                    opacity: opacity,
                    transform: [{
                        translateY: position
                    }]
                }} 
            />
            <Button 
                title="FadeIn"
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-150, 900)
                }}
            />
            <Button 
                title="FadeOut"
                onPress={fadeOut}
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
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});