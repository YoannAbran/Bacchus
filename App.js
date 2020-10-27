import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar} from 'react-native'

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
      <StatusBar/>
        <Navigation/>
      </NavigationContainer>
    )
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
