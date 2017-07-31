/**
 * react native 官方组件 demo 测试
 */
import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import EntryRoute from './component/entry-route'
import componentScreens from './component-demo/screens'

const entrys = [{
  title: 'react-native 官方组件demo',
  list: Object.keys(componentScreens).map(name => {
    return {
      name,
      text: name
    }
  })
}]

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'demo 工程'
  }

  render() {
    return (
      <View style={styles.container}>
        <EntryRoute entrys={entrys} {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

