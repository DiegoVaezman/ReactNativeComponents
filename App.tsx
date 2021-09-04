import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';



const AppState = ({children} : any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <AppState>
      <StackNavigation />
    </AppState>
  )
}

export default App;
