/**
 * 1px 线
 */
import React from 'react'
import {
    StyleSheet,
    View,
    PixelRatio
} from 'react-native'
import PropTypes from 'prop-types'

const Line = ({color = '#e5e5e5'}) => {
  return <View style={[styles.line, {borderBottomColor: color}]} />
}
Line.propTypes = {
  color: PropTypes.string
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1 / PixelRatio.get()
  }
})

export default Line