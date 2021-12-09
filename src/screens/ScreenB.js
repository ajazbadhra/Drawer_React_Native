import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ScreenB = ( {navigation, route} ) => {
    return (
        <View style = {Styles.Container}>
            <Text>Screen B</Text>
            <Button 
                title = 'Gotot Screen A'
                onPress = {()=>{
                    navigation.navigate('screen_A', {Message : 'msg from Screen B'})
                }}
            />
            <Text style = { Styles.text}>{route.params?.text}</Text>
        </View>
    )
}


export default ScreenB


const Styles = StyleSheet.create({
    Container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        fontSize : 30,
    }
})
