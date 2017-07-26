'use strict';

const React = require('React');
const ReactNative = require('react-native');
const {
  ScrollView,
  View,
  StyleSheet,
  Text
} = ReactNative;

class ScrollViewDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'Java'
    }
  }
  render() {
    return (
      <ScrollView style={[style.container]} stickyHeaderIndices={[9]}>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100, backgroundColor: 'red'}}>fixedHeader</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
        <Text style={{height: 100}}>1</Text>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

module.exports = ScrollViewDemo;