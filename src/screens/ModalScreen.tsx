import React, { useContext, useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    const [isVisible, setIsVisible] = useState(false)


    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title="Modal screen" />

            <Button 
                title="Abrir Modal"
                onPress={() => setIsVisible(true)}
                color={colors.primary}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                {/* Background negro */}
                <View style={{
                    flex: 1,
                    // height: 100,
                    // width: 100,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor: colors.card, 
                        width: 200, 
                        height: 200, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        elevation: 10,
                        borderRadius: 5
                    }} >
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
                        <Text style={{fontSize: 16, marginBottom: 20}}>Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={ () => setIsVisible(false)}
                            color={colors.primary}
                        />
                    </View>

                </View>
            </Modal>
        </View>
    )
}
