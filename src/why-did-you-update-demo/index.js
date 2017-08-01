'use strict';

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native'
import Person from './person'

export default class Demo extends Component {
  static navigationOptions = {
    title: 'Why did you update'
  }

  constructor(props) {
    super(props)

    this.state = {
      persons: {
        zhangsan: {
          name: '张三',
          age: 18,
          height: 170,
          weight: {
            num: 60
          }
        }, 
        lisi: {
          name: '李四',
          age: 19,
          height: 175,
          weight: {
            num: 85
          }
        }
      }
    }
  }

  add = (name) => {
    this.state.persons[name].age++
    
    this.setState(this.state)
  }

  addWeight = (name) => {
    // 错误写法
    // this.state.persons[name].weight.num++
    this.state.persons[name].weight = {
      num: this.state.persons[name].weight.num + 1
    }
    
    this.setState(this.state)
  }

  render() {
    const {persons} = this.state

    return (
      <View style={style.container}>
        <Button title={'张三年龄+1'} onPress={() => {this.add('zhangsan')}} />
        <Button title={'李四年龄+1'} onPress={() => {this.add('lisi')}} />
        <Button title={'张三体重+1'} onPress={() => {this.addWeight('zhangsan')}} />
        <Button title={'李四体重+1'} onPress={() => {this.addWeight('lisi')}} />
        {
          Object.keys(persons).map((name, i) => {
            return <Person key={`person_${i}`} {...persons[name]} />
          })
        }
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
    flex: 1,
    height: 100,
  },
  headerText: {
    textAlign: 'center'
  },
  row: {
    flex: 1,
    height: 69
  }
})
