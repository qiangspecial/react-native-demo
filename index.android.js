/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ActivityIndicatorDemo from './demo/activityIndicator'
import KeyboardAvoidingViewExample from './demo/KeyboardAvoidingView'
import PickerDemo from './demo/Picker'
import ScrollViewDemo from './demo/ScrollView'
import ListViewDemo from './demo/ListView'
import SectionListDemo from './demo/SectionList'

export default class demoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListViewDemo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demoApp', () => demoApp);