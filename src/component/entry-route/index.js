import React, {
    Component
} from 'react'

import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    ScrollView,
    View,
    PixelRatio
} from 'react-native'

import Line from '../line'

const _ROUTES = [{
  title: '首页',
  list: [{
    url: 'nt://sdk-bbs2/totalGroup',
    route: () => {
      URLOpen('nt://sdk-bbs2/totalGroup')
        // if (isSdk) {
        //     URLOpen('nt://sdk-bbs2/totalGroup')
        // } else {
        //     this._navigate('totalGroup-page')
        // }
        // nt://sdk-bbs2/totalGroup
    },
    text: '全部小组 / 超人气小组-更多'
  }]
}, {
  title: '锦囊',
  list: [{
    url: 'nt://sdk-bbs2/hongren-page',
    route: () => {
      // this.props.navigator.push({
      //     name: 'hongren-list-page'
      // });
      URLOpen('nt://sdk-bbs2/hongren-page')
    },
    text: '红人馆'
  }]
}, {
  title: '我的',
  list: [{
    url: 'nt://sdk-bbs2/myGroup',
    route: () => {
      URLOpen('nt://sdk-bbs2/myGroup')
                // this.props.navigator.push({
                //     name: 'myGroup-page'
                // });
    },
    text: '小组'
  }, {
    url: 'nt://sdk-bbs2/message-page',
    route: () => {
      URLOpen('nt://sdk-bbs2/message-page')
    },
    text: '我的消息'
  }, {
    url: 'nt://sdk-bbs2/myPost-page',
    route: () => {
      URLOpen('nt://sdk-bbs2/myPost-page')
            // this.props.navigator.push({
            //     name: 'myPost-list-page'
            // });
    },
    text: '我的帖子'
  }, {
    url: 'nt://sdk-bbs2/myQuestionAnswer-page',
    route: () => {
      URLOpen('nt://sdk-bbs2/myQuestionAnswer-page')
            // this.props.navigator.push({
            //     name: 'myQuestionAnswer-page'
            // });
    },
    text: '我的问答'
  }, {
    url: 'nt://sdk-bbs2/setting-page',
    route: () => {
      URLOpen('nt://sdk-bbs2/setting-page')
            // this.props.navigator.push({
            //     name: 'setting-page'
            // });
    },
    text: '设置'
  }]
}, {
  title: '临时',
  list: [{
    name: 'main-page',
    text: '老首页'
  }]
}]

class Entry extends Component {
  static propTypes = {
    entrys: PropTypes.array,
    navigation: PropTypes.object
  }

  routeClick = (route) => {
    // if (route.url) {
    //   // 统跳
    //   URLOpen(route.url)
    // } else if (route.name) {
      // 路由跳转

      this.props.navigation.navigate(route.name)
    // }
  }

  render () {
    const entrys = this.props.entrys

    return (
      <ScrollView style={styles.container}>
        {
          entrys.map((group, i) => {
            return (
              <View key={`group_${i}`}>
                {
                  group.title ? <View style={[styles.item]}>
                                  <Text style={styles.titleText}>{group.title}</Text>
                                </View> : null
                }
                <Line color={'#666666'} />
                {
                  group.list.map((route, i) => {
                    return (
                      <View key={`route_${i}`}>
                        <TouchableHighlight underlayColor={'#eee'} style={styles.item} onPress={() => {
                          this.routeClick(route)
                        }}>
                          <Text style={styles.itemText}>{route.text}</Text>
                        </TouchableHighlight>
                        <Line />
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    height: 40,
    paddingLeft: 15,
    justifyContent: 'center'
  },
  itemText: {
    color: '#666',
    fontSize: 14
  }
})

export default Entry
