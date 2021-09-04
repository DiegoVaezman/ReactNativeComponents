import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log("Terminamos")
            setRefreshing(false)
            setData("Hola mundo")
        }, 3500);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}  //altura posicion del refreshing icono
                    progressBackgroundColor={colors.primary}
                    colors={['white', 'orange', 'black']}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh" />

                {
                data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>
    )
}
