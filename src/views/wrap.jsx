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
				<p>切，她的身材跟什么似得一样</p>
				<p>就知道吃</p>
				<LazyloadImgItem
					wrapClassName="picture-wrap-1"
					src="https://pic2.zhimg.com/80/v2-06363d2ad2c64caf8c8e170931405e79_60w.jpg"
					actualscr="https://pic2.zhimg.com/80/v2-06363d2ad2c64caf8c8e170931405e79_hd.jpg" />
				<p>看看这个嘴巴</p>
				<p>啧啧啧</p>
				<LazyloadImgItem
					wrapClassName="picture-wrap-2"
					src="https://pic4.zhimg.com/80/v2-69d268e5b08949ad88e54ffa35233ed7_60w.jpg"
					actualscr="https://pic4.zhimg.com/80/v2-69d268e5b08949ad88e54ffa35233ed7_hd.jpg" />
				<p>看看这个后背</p>
				<p>跟排骨精似的</p>
				<LazyloadImgItem
					wrapClassName="picture-wrap-3"
					src="https://pic4.zhimg.com/80/v2-693c9bd6c6c38aac45e66f1479ac9003_60w.jpg"
					actualscr="https://pic4.zhimg.com/80/v2-693c9bd6c6c38aac45e66f1479ac9003_hd.jpg" />
				<p>看看这个手</p>
				<p>太丑了！</p>
				<LazyloadImgItem
					wrapClassName="picture-wrap-4"
					src="https://pic1.zhimg.com/80/v2-bf5dc4055a6b290c3c75571c2c8cb7d8_60w.jpg"
					actualscr="https://pic1.zhimg.com/80/v2-bf5dc4055a6b290c3c75571c2c8cb7d8_hd.jpg" />
				<p> </p>
				<LazyloadImgItem
					wrapClassName="picture-wrap-5"
					src="https://pic3.zhimg.com/80/v2-73b38175bb80165222aea2eb7f792d5a_60w.jpg"
					actualscr="https://pic3.zhimg.com/80/v2-73b38175bb80165222aea2eb7f792d5a_hd.jpg" />
				<p>看看这个腿</p>
				<p>哼，有什么好看的？</p>
				<LazyloadImgItem
					wrapClassName="picture-wrap-6"
					src="https://pic4.zhimg.com/80/v2-1cdc381698d8a980922570b382369e8b_60w.jpg"
					actualscr="https://pic4.zhimg.com/80/v2-1cdc381698d8a980922570b382369e8b_hd.jpg" />
				<p>这个屁股</p>
				<p>有什么好看的！？</p>
				<p>注：内容引用自知乎，大家娱乐一下莫要当真！！</p>
				<p> </p>
			</div>
		)
	}
}
