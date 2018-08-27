import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import LazyloadImg from 'lazyload-img'

const LazyloadImgItem = LazyloadImg.item

export default class Wrap extends Component {
	componentDidMount () {
		LazyloadImg.init({
			wrap: findDOMNode(this.refs.wrap)
			// bottomEmit: -100,
		})
	}
	
	render () {
		return (
			<div className="wrap o-a full" ref="wrap">
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<p>范德萨范德萨发范德萨发生的奋斗史</p>
				<LazyloadImgItem
					className="picture"
					wrapClassName="picture-wrap"
					src="http://static.monajs.cn/example/beauty_min.jpg"
					actualscr="http://static.monajs.cn/example/beauty.jpg" />
				{/*<img src="http://static.monajs.cn/example/beauty.jpg" className="picture" alt="" />*/}
			</div>
		)
	}
}
