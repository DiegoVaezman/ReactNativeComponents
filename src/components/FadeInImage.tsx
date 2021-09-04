import React, { useContext } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}


export const FadeInImage = ({uri, style}: Props) => {

    const {theme: {colors}} = useContext(ThemeContext)

    const {fadeIn, opacity} = useAnimation();
    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        fadeIn(1000)
        setIsLoading(false)

    }

    return (
        <View>
            {
                isLoading && 
                    <ActivityIndicator 
                        style={{top: 50}} 
                        color={colors.primary} 
                        size={30} 
                    />
            }
            <Animated.Image
                source={{uri}}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,   //se recibe como argumento
                    opacity: opacity
                }}
            />
        </View>
    )
}
