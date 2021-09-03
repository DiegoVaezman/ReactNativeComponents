import React, { useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

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
                    progressBackgroundColor={'#5856D6'}
                    colors={['white', 'red', 'orange']}
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
