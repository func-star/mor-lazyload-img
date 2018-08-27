import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Watcher from 'mor-scroll-watcher'
import Util from './util'
import './index.less'

const WatcherItem = Watcher.item

export default class LazyloadItem extends Component {
	componentDidMount () {
		this.img = findDOMNode(this.refs.img)
	}
	
	changeUrl () {
		const { actualscr } = this.props
		if (!actualscr) {
			return
		}
		this.img.src = actualscr
		// Util.removeClass(this.img, 'preview')
		Util.addClass(this.img, 'origin')
	}
	
	render () {
		const {
			src,
			wrapClassName,
			wrapStyle,
			actualscr,
			className,
			...props
		} = this.props
		
		let wrapKlass = 'mor-lazyload-img'
		if (wrapClassName) {
			wrapKlass = wrapKlass + ' ' + wrapClassName
		}
		
		let imgKlass = 'preview'
		if (className) {
			imgKlass = imgKlass + ' ' + className
		}
		
		return (
			<WatcherItem
				monaId="mor_lazyload_img_all"
				onWatcher={this.changeUrl.bind(this)}
				style={wrapStyle}
				className={wrapKlass}>
				<img className={imgKlass} src={src} ref="img" {...props} {...props} />
			</WatcherItem>
		)
	}
}
