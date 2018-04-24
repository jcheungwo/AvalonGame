import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import boxImage from '../../public/boxImage.jpg'
import { Font } from 'expo'

export default class OnStart extends Component {
  constructor () {
    super()
    this.state = {
      showText: true
    }
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText }
      })
    }, 500)
  }

  componentDidMount () {
    Font.loadAsync({'MedievalSharp-Bold': require('../../public/MedievalSharp-Bold.ttf')})
      .then(() => {
        this.setState({
          isFontLoaded: true
        })
      })
  }

  render () {
    let { isFontLoaded } = this.state
    let display = this.state.showText ? this.props.text : 'Tap Screen To Begin'
    return (
      <View
        onResponderGrant={() => this.props.navigation.navigate('Login')}
        onStartShouldSetResponder={(e) => { return true }}
      >
        <Image source={boxImage} style={styles.image} />
        <Text style={[ styles.text, isFontLoaded && {fontFamily: 'MedievalSharp-Bold'} ]}>{display}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%'
  },
  text: {
    position: 'absolute',
    fontSize: 15,
    left: '12%',
    bottom: '25%',
    color: '#D3D3D3'
  }
})
