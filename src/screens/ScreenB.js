import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ScreenB = ( {navigation} ) => {
    return (
        <View style = {Styles.Container}>
            <Text>ScreenB</Text>
            <Button 
                title = 'Gotot Screen A'
                onPress = {()=>{
                    navigation.navigate('screen_A')
                }}
            />
        </View>
    )
}

export default ScreenB

const Styles = StyleSheet.create({
    Container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})
