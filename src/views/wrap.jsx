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
				<LazyloadImgItem
					className="picture"
					wrapClassName="picture-wrap"
					src="http://s3.mogucdn.com/mlcdn/c45406/170720_7h0h4l55755gjl490fhc90kkdibhk_100x29.png"
					actualscr="http://s2.mogucdn.com/mlcdn/c45406/170720_2ck8dgbf9e98kdlf4fe8gfglk6bh1_1200x350.png" />
			</div>
		)
	}
}
