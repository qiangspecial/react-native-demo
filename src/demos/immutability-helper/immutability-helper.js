'use strict'

import React, {Component, PureComponent} from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import update from 'immutability-helper'
import Button from 'apsl-react-native-button'

export default class Demo extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      a: {
        b: 1,
        c: {
          d: 2
        },
        e: 3,
        f: {
          g: 4
        }
      }
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState.a, this.state.a, !is(nextState.a, this.state.a))
  //   return !is(nextState.a, this.state.a)
  // }

  changeB = () => {
    const result = update(this.state.a, {b: {$set: Math.random() * 100}})

    this.setState({
      a: result
    })
  }

  changeD = () => {
    const result = update(this.state.a, {c: {d: {$set: Math.random() * 100}}})

    this.setState({
      a: result
    })
  }

  changeE = () => {
    const result = update(this.state.a, {e: {$set: this.state.a.e}})

    this.setState({
      a: result
    })
  }

  changeF = () => {
    const result = update(this.state.a, {f: {$set: {g: 4}}})

    this.setState({
      a: result
    })
  }
  
  render() {
    console.log('immutability-helper render')
    return (
      <View style={style.container}>
        <Text style={style.row}>b: {this.state.a.b}</Text>
        <Text style={style.row}>d: {this.state.a.c.d}</Text>
        <Text style={style.row}>e: {this.state.a.e}</Text>
        <Text style={style.row}>f: {JSON.stringify(this.state.a.f)}</Text>

        <View style={style.buttonContainer}>
          <Button style={style.button} onPress={this.changeB} textStyle={style.textStyle}>点我改变 b</Button>
          <Button style={[style.button, style.right]} onPress={this.changeD} textStyle={style.textStyle}>点我改变 d</Button>
          <Button style={[style.button, style.right]} onPress={this.changeE} textStyle={style.textStyle}>点我改变 e</Button>
          <Button style={[style.button, style.right]} onPress={this.changeF} textStyle={style.textStyle}>点我改变 f</Button>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c'
  },
  textStyle: {
    color: '#fff',
    fontSize: 12
  },
  right: {
    marginLeft: 20
  },
  row: {
    height: 30
  }
})