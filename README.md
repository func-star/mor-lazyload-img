# Mona系列-React图片懒加载

✨✨ 这是一款非常有用轻巧的 React 组件，你可以应用到任何需要滚动监听的场景

[![npm](https://img.shields.io/npm/v/mor-lazyload-img.svg?style=flat-square)](https://www.npmjs.com/package/mor-lazyload-img) [![npm](https://img.shields.io/npm/dt/mor-lazyload-img.svg?style=flat-square)](https://www.npmjs.com/package/mor-lazyload-img)

[demo页面](https://func-star.github.io/mor-lazyload-img//)


## 依赖

- [mor-scroll-watcher](https://www.npmjs.com/package/mor-scroll-watcher)


## 代码演示
```js
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import LazyloadImg from 'lazyload-img'

const LazyloadImgItem = LazyloadImg.item

export default class Demo extends Component {
	componentDidMount () {
		LazyloadImg.init({
			wrap: findDOMNode(this.refs.wrap)
			// bottomEmit: 100,
			// initEmit: true
		})
	}

	render () {
		return (
			<div className="wrap o-a full" ref="wrap">
				<LazyloadImgItem
					className="a"
					wrapClassName="b"
					src="images/min_10x10.jpg"
					actualscr="images/min_500x500.jpg" />
			</div>
		)
	}
}

```

## options

| 参数 | 说明 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | :-- |
| wrap | 滚动容器 | `DOM原生节点` | - | `yes` |
| bottomEmit | 滚动距离底部的触发距离 | `Number` | `0` | `no` |

## WatcherItem

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| src | 替代图，体积很小的压缩图 | `String` | - | - |
| actualscr | 真实要显示的图片 | `String` | - | - |
| className | 绑定在img上的className属性 | `String` | - | - |
| wrapClassName | 绑定在img父级容器上的className属性 | `String` | - | - |
| wrapStyle | 绑定在img父级容器上的style属性 | `String` | - | - |
| style | 绑定在img上的style属性 | `String` | - | - |


## 联系我

> 微信：599321378
