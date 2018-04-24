import React, {Component} from 'react'
import {View, StatusBar, StyleSheet, Platform} from 'react-native'
import Index from './client'
import {ScreenOrientation} from 'expo'

class App extends Component {
  render () {
    let hidden = Platform.OS !== 'ios'
    return (
      <View style={styles.container}>
        <StatusBar hidden={hidden}/>
        <Index />
      </View>
    )
  }
}

ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)
console.disableYellowBox = true

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})

export default App
