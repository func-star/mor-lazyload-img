'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _morScrollWatcher = require('mor-scroll-watcher');

var _morScrollWatcher2 = _interopRequireDefault(_morScrollWatcher);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WatcherItem = _morScrollWatcher2.default.item;

var LazyloadItem = function (_Component) {
	_inherits(LazyloadItem, _Component);

	function LazyloadItem() {
		_classCallCheck(this, LazyloadItem);

		return _possibleConstructorReturn(this, (LazyloadItem.__proto__ || Object.getPrototypeOf(LazyloadItem)).apply(this, arguments));
	}

	_createClass(LazyloadItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.img = (0, _reactDom.findDOMNode)(this.refs.img);
		}
	}, {
		key: 'changeUrl',
		value: function changeUrl() {
			var actualscr = this.props.actualscr;

			if (!actualscr) {
				return;
			}
			this.img.src = actualscr;
			_util2.default.removeClass(this.img, 'preview');
			_util2.default.addClass(this.img, 'origin');
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    src = _props.src,
			    wrapClassName = _props.wrapClassName,
			    wrapStyle = _props.wrapStyle,
			    actualscr = _props.actualscr,
			    className = _props.className,
			    props = _objectWithoutProperties(_props, ['src', 'wrapClassName', 'wrapStyle', 'actualscr', 'className']);

			var wrapKlass = 'mor-lazyload-img';
			if (wrapClassName) {
				wrapKlass = wrapKlass + ' ' + wrapClassName;
			}

			var imgKlass = 'preview';
			if (className) {
				imgKlass = imgKlass + ' ' + className;
			}

			return _react2.default.createElement(
				WatcherItem,
				{ onWatcher: this.changeUrl.bind(this), style: wrapStyle, className: wrapKlass },
				_react2.default.createElement('img', _extends({ className: imgKlass, src: src, ref: 'img' }, props, props))
			);
		}
	}]);

	return LazyloadItem;
}(_react.Component);

exports.default = LazyloadItem;