import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import LazyloadImg from 'lazyload-img'

const LazyloadImgItem = LazyloadImg.item

export default class Wrap extends Component {
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
					src="http://s2.mogucdn.com/mlcdn/c45406/170417_1al3k9j0ek8e96a29kgh0jgdacif4_584x198.png_50x50.png"
					actualscr="http://s2.mogucdn.com/mlcdn/c45406/170417_1al3k9j0ek8e96a29kgh0jgdacif4_584x198.png" />
			</div>
		)
	}
}
