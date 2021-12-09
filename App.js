/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './src/screens/ScreenA'
import ScreenB from './src/screens/ScreenB'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

FontAwesome.loadFont()

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions = {{
          headerTitleStyle : {
            fontStyle : 'italic'
          }
        }
        }
      >
        <Drawer.Screen 
          name = 'screen_A'
          component = {ScreenA}
          options = {{
            title : 'Screen A Title',
            drawerIcon : ({focused}) => (
              <FontAwesome
                name = "audio-description"
                size = {focused ? 25 : 20}
                color = {focused ? '#008' : '#000'}
              />
            )
          }}
          
        />
        <Drawer.Screen 
          name = 'screen_B'
          component = {ScreenB}
          options = {{
            title : 'Screen B title',
            drawerIcon : ({focused}) => (
              <FontAwesome
                name = "btc"
                size = {focused ? 25 : 20}
                color = {focused ? '#008' : '#000'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;