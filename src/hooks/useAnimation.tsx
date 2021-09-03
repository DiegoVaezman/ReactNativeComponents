import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    // ANIMATED DOC https://reactnative.dev/docs/animated
    const opacity  = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = (duration?: number) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: duration,
                useNativeDriver: true
            }
        ).start(() => {/*aqui iría función cuando acaba la animación*/});
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 0,
                useNativeDriver: true
            }
        ).start();
    }

    const startMovingPosition = (initPosition: number, duration: number = 800, easing: ((value: number) => number) = Easing.bounce) => {

        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
                easing: easing
            }
        ).start()
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}
