'use strict';

const React = require('React');
const ReactNative = require('react-native');
const {
  SectionList,
  View,
  StyleSheet,
  Text
} = ReactNative;

class ListViewDemo extends React.Component {
  renderRow() {

    return <Text style={{height: 200}}>row</Text>
  }

  renderSectionHeader() {
    return <Text style={{backgroundColor: 'red', height: 200}}>sectionHeader</Text>
  }

  render() {
    var ds = [{
      data: [1,2,3],
      key: 1
    }, {
      data: [1,2,3],
      key: 2
    }, {
      data: [1,2,3],
      key: 3
    }, {
      data: [1,2,3],
      key: 4
    }, {
      data: [1,2,3],
      key: 5
    }]
    return (
      <SectionList stickySectionHeadersEnabled={true} style={style.container} sections={ds} renderItem={this.renderRow} renderSectionHeader={this.renderSectionHeader} />
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

module.exports = ListViewDemo;