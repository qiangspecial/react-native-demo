## [why-did-you-update](https://github.com/garbles/why-did-you-update)
> A function that monkey patches React and notifies you in the console when potentially unnecessary re-renders occur. Super helpful for easy perf gainzzzzz.

#### Install
```
npm install --save-dev why-did-you-update
```
#### How to
```javascript
import React from 'react'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}
```
`react@^15.6、react@16.*` 你可能需要这么写
```javascript
if (process.env.NODE_ENV !== 'production') {
  // bugfix: react@^15.6、react@16.*
  let createClass = React.createClass
  Object.defineProperty(React, 'createClass', {
    set: (nextCreateClass) => {
      createClass = nextCreateClass
    },
  })
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React, {include: /^why/})
}
```

You can include or exclude components by their displayName with the include and exclude options

```javascript
whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ })
```

#### 结论
当有性能问题时，可使用此三方包来排查无用的 render

[demo](https://github.com/qiangspecial/react-native-demo/tree/master/src/why-did-you-update-demo)  
- 原理：修改 `React.Component.propotype.componentDidUpdate`，对 prevProps 与 this.props、prevState 与 this.state 进行 deepDiff 判定
- 缺陷：如果组件定义了 componentDidUpdate 则 why-did-you-update 失效

