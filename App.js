import 'react-native-gesture-handler'
import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar} from 'react-native'

export default function App() {
  return (
        <NavigationContainer>
          <StatusBar/>
          <Navigation/>
        </NavigationContainer>
    );
}
