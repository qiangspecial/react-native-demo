'use strict'

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import {is, fromJS} from 'immutable'
import Button from 'apsl-react-native-button'

export default class Demo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      a: fromJS({
        b: 1,
        c: {
          d: 2
        },
        e: 3,
        f: {
          g: 4
        }
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.a, this.state.a, !is(nextState.a, this.state.a))
    return !is(nextState.a, this.state.a)
  }

  changeB = () => {
    const result = this.state.a.set('b', Math.random() * 100)

    this.setState({
      a: result
    })
  }

  changeD = () => {
    const result = this.state.a.setIn(['c', 'd'], Math.random() * 100)

    this.setState({
      a: result
    })
  }

  changeE = () => {
    const result = this.state.a.set('e', this.state.a.get('e'))

    this.setState({
      a: result
    })
  }

  changeF = () => {
    const result = this.state.a.set('f', fromJS(this.state.a.get('f').toJS()))

    this.setState({
      a: result
    })
  }
  
  render() {
    console.log(this.state.a.get('f'))
    console.log('immutable render')
    return (
      <View style={style.container}>
        <Text style={style.row}>b: {this.state.a.get('b')}</Text>
        <Text style={style.row}>d: {this.state.a.getIn(['c', 'd'])}</Text>
        <Text style={style.row}>e: {this.state.a.get('e')}</Text>
        <Text style={style.row}>f: {JSON.stringify(this.state.a.get('f').toJS())}</Text>

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
    borderColor: '#f39c12',
    backgroundColor: '#f1c40f'
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
