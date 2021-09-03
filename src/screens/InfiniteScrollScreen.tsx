import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { FadeInImage } from '../components/FadeInImage';
import { styles } from '../theme/appTheme';

export const InfiniteScrollScreen = () => {

    const [ numbers, setNumbers] = useState([0,1,2,3,4,5])

    const renderItem = (item: number) => {
        return (
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400
                }}
            />
        )
    }

    const loadMore = () => {
        const newArray: number[] = [];
        for( let i=0; i<5; i++) {
            newArray[i] = numbers.length + i
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        },1500);
    }

    return (
        <View style={{flex: 1}}>

            <FlatList 
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => renderItem(item) }

                ListHeaderComponent={ () => 
                    <View style={styles.globalMargin} >
                        <HeaderTitle title="Infinite scroll" />
                    </View>
                }

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}  //que tan lejos del fondo para ejecutar onEndReached
            
                ListFooterComponent={ () => 
                    <View style={{height: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size={30} color="blue" />
                    </View>
                }
            />


            
        </View>
    )
}


