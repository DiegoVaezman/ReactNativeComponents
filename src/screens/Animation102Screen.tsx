import React, { useContext, useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation102Screen = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    // DOC ANIMACION ValueXY https://reactnative.dev/docs/animatedvaluexy
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: pan.x, // x,y are Animated.Value
                    dy: pan.y,
                }
            ], 
            {
                useNativeDriver: false
            }
        ),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { 
                useNativeDriver: false,
                toValue: { x: 0, y: 0 } // Back to zero
            } 
          ).start();
        },
      });


    return (
        <View style={styles.container}>
            <Animated.View 
                {...panResponder.panHandlers}
                style={[pan.getLayout(), {
                    ...styles.purpleBox, 
                    backgroundColor: colors.primary, 
                    borderColor: colors.text,
                }]} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150,
        borderWidth: 2,
    }
});