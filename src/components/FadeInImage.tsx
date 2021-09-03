import React from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}


export const FadeInImage = ({uri, style}: Props) => {

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
                        color="#5856D6" 
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
