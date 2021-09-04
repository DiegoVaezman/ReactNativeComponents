import React, { useContext } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertsScreen } from '../screens/AlertsScreen';
import { TextImputScreen } from '../screens/TextImputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { View } from 'react-native';


// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//       // primary: string;
//       // background: ''
//       // card: string;
//       // text: string;
//       // border: string;
//       // notification: string;
//   }
// }



const Stack = createStackNavigator();

export const StackNavigation = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    const {theme} = useContext(ThemeContext)

    return (
        //se englobó en un View para evitar un color blanco de fondo en la transición entre pantallas pero en el disp. virtual no se veía eso. Lo dejo por si acaso.
        <View style={{backgroundColor: colors.background, flex: 1}}>  
            <NavigationContainer
            theme={theme}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            // backgroundColor: 'white'
                        }
                    }}
                >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                    <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                    <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                    <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
                    <Stack.Screen name="TextImputScreen" component={TextImputScreen} />
                    <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
                    <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
                    <Stack.Screen name="ModalScreen" component={ModalScreen} />
                    <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                    <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                    <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
