'use strict';

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  PixelRatio
} from 'react-native'

export default class Person extends Component {
  static displayName = 'whydidyouupdateperson'

  render() {
    const {name, age, height, weight} = this.props

    return (
      <View style={style.container}>
        <Text style={style.item}>姓名：{name}</Text>
        <Text style={style.item}>年龄：{age}</Text>
        <Text style={style.item}>身高：{height}</Text>
        <Text style={style.item}>体重：{weight.num}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    borderBottomColor: '#666',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 12,
    color: '#666',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1 / PixelRatio.get()
  }
})
