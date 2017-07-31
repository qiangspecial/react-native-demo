/**
 * 路由
 */
import ActivityIndicatorDemo from './activityIndicator'
import KeyboardAvoidingViewExample from './KeyboardAvoidingView'
import PickerDemo from './Picker'
import ScrollViewDemo from './ScrollView'
import ListViewDemo from './ListView'
import SectionListDemo from './SectionList'
import SliderDemo from './Slider'
import {
  AlertExample,
  SimpleAlertExampleBlock
} from './Alert'
import ShareDemo from './Share'
import Guaguaka from './guaguaka'
import PanResponderExample from './PanResponder'

const pages = {
  ActivityIndicatorDemo,
  KeyboardAvoidingViewExample,
  PickerDemo,
  ScrollViewDemo,
  ListViewDemo,
  SectionListDemo,
  SliderDemo,
  AlertExample,
  SimpleAlertExampleBlock,
  ShareDemo,
  Guaguaka,
  PanResponderExample
}
const screens = {}

for (let i in pages) {
  screens[i] = {screen: pages[i], navigationOptions: {
    title: i
  }}
}

export default screens