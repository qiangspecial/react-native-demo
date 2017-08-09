import {
  StackNavigator,
} from 'react-navigation'

import Main from './index'
import components from './component-demo'
import WhyDidYouUpdate from './why-did-you-update-demo'
import ImmutabilityHelper from './demos/immutability-helper'
import TestScreen from './test-page'

const App = StackNavigator({
  Main: {screen: Main},
  WhyDidYouUpdate: {screen: WhyDidYouUpdate},
  ImmutabilityHelper: {screen: ImmutabilityHelper},
  ...components
})

export default App