import React, { Component } from 'react'
import Wrap from './wrap'
import Nav from './nav'

export default class Home extends Component {
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<div className="page-wrapper-content block-center d-f">
					<Wrap />
				</div>
				<a href="https://github.com/func-star/mor-lazyload-img/issues" target="_blank" className="page-feedback pos-f">
					<i className="iconfont icon-feedback"></i>
				</a>
			</div>
		)
	}
}
