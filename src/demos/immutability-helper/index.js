'use strict'

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native'
import ImmutableDemo from './immutable.js'
import ImmutabilityHelperDemo from './immutability-helper.js'
import Line from '../../component/line'


export default class Demo extends Component {
  static navigationOptions = {
    title: 'immutability-helper 与 immutable-js 比较'
  }

  constructor(props) {
    super(props)
  }

  

  render() {

    return (
      <View style={style.container}>
        <Text style={style.header}>immutable</Text>
        <Line color={'#666666'} />
        <ImmutableDemo />
        <Text style={style.header}>immutability-helper</Text>
        <Line color={'#666666'} />
        <ImmutabilityHelperDemo />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 14
  }
})
