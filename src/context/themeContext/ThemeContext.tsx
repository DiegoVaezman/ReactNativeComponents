import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';


interface ThemeContextProps {
    theme: ThemeState
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: any) => {   //children deberia ser tipo JSX pero está demás para un simple children...

    //SOLO EN IOS PARA OBTENER EL TEMA DEL DISPOSITIVO
    // const colorScheme = useColorScheme();

    //-----estado--ej.accion--------------nomb.reducer-----------estado.inicial
    const [theme, dispatch] = useReducer(themeReducer, ((Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme));

    useEffect(() => {
        //OBTENER INFO DEL TEMA DEL DISPOSITIVO EN ANDROID
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light') 
                    ? setLightTheme()
                    : setDarkTheme()
            }
        })
    }, [])

    //SOLO EN IOS POR AHORA
    // useEffect(() => {
    //     (colorScheme === 'light')
    //     ? setLightTheme()
    //     : setDarkTheme()
    // }, [colorScheme])

    const setDarkTheme = () => {
        dispatch({ type: "set_dark_theme" })
    }

    const setLightTheme = () => {
        dispatch({ type: "set_light_theme" })
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }} >
            {children}
        </ThemeContext.Provider>
    )
}