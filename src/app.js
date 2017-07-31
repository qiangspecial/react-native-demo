import {
  StackNavigator,
} from 'react-navigation'

import MainScreen from './index'
import componentScreens from './component-demo/index'
import TestScreen from './test-page'

const App = StackNavigator({
  Main: {screen: MainScreen},
  ...componentScreens
})

export default App