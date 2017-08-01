import {
  StackNavigator,
} from 'react-navigation'

import MainScreen from './index'
import componentScreens from './component-demo'
import WhyDidYouUpdateScreen from './why-did-you-update-demo'
import TestScreen from './test-page'

const App = StackNavigator({
  Main: {screen: MainScreen},
  WhyDidYouUpdate: {screen: WhyDidYouUpdateScreen},
  ...componentScreens
})

export default App