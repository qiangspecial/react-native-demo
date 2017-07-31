'use strict';

const React = require('React');
const ReactNative = require('react-native');
const {
  ListView,
  View,
  StyleSheet,
  Text
} = ReactNative;

class ListViewDemo extends React.Component {
  static navigationOptions = {
    title: 'Test Page'
  }

  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2, sectionHeaderHasChanged: (r1, r2) => r1 !== r2})
  }

  renderRow() {

    return <Text style={style.row}>row</Text>
  }

  renderSectionHeader = () => {
    return <View style={style.header}><Text style={style.headerText} onPress={() => {
      console.log(111, this.props.navigation)
      this.props.navigation.navigate('test2')
    }}>section</Text></View>
  }

  render() {
    this.ds = this.ds.cloneWithRowsAndSections({
      1: [1,2,3,4,5,6,7,87,8,],
      2: [1,12,3,5,6,7,],
      3: [1,23,4,5,6,7,3,],
      4: [1],
      5: [1],
      6: [1],
      7: [1],
      8: [1]
    }, [1,2,3,4,5,6,7,8])

    return (
      <View style={style.container}>
        <ListView stickySectionHeadersEnabled={true} dataSource={this.ds} renderRow={this.renderRow} renderSectionHeader={this.renderSectionHeader} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
  },
  header: {
    flex: 1,
    backgroundColor: '#f00',
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

module.exports = ListViewDemo;