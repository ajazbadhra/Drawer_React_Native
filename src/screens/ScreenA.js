import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ScreenA = ( { navigation } )=> {
    return (
        <View style = {Styles.container}>
            <Text>ScreenA</Text>
            <Button 
                title = 'Goto Screen B'
                onPress = {()=>{
                    navigation.navigate('screen_B')
                }}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})

export default ScreenA 