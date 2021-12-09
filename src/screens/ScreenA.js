import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ScreenA = ( { navigation, route } )=> {
    return (
        <View style = {Styles.container}>
            <Text style={Styles.text}>ScreenA</Text>
            <Button 
                title = 'Goto Screen B'
                onPress = {()=>{
                    navigation.navigate('screen_B',{text : 'text from Screen A'})
                }}
            />
            <Text style={Styles.text}>{route.params?.Message}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    text : {
        fontSize : 30,
    }
})

export default ScreenA 