import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import OnStart from './Components/OnStart.js'
import Login from './Components/Login'
import {Constants} from 'expo'

export default StackNavigator(
  {
    Main: {
      screen: OnStart
    },

    Login: {
      screen: Login
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)
