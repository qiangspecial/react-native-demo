'use strict';

const React = require('React');
const ReactNative = require('react-native');
const {
  Picker,
  View,
  StyleSheet,
  Text
} = ReactNative;

class PickerDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'Java'
    }
  }
  render() {
    return (
      <View style={[style.container, {paddingTop: 200}]}>
        <Picker selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
        </Picker>
        <Text>您选择的是:{this.state.language}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
module.exports = PickerDemo;