import {
  StackNavigator,
} from 'react-navigation'

import MainScreen from './index'
import componentScreens from './component-demo/index'
import TestScreen from './test-page'
import TestScreen2 from './test-page2'

const App = StackNavigator({
  Main: {screen: MainScreen},
  test2: {screen: TestScreen2},
  ...componentScreens
})

export default App