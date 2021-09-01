import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}: Props) => {


    return (
        <TouchableOpacity
            activeOpacity={0.6}
        >
            <View style={styles.container}>
                <Icon 
                    name={menuItem.icon}
                    color="grey"
                    size={23}
                />
                <Text style={styles.itemText}>{menuItem.name}</Text>

                {/* SPACER */}
                <View style={{flex:1}}/>

                <Icon 
                    name="chevron-forward-outline"
                    color="grey"
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19

    }
});
