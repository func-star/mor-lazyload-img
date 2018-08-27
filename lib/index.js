'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _morScrollWatcher = require('mor-scroll-watcher');

var _morScrollWatcher2 = _interopRequireDefault(_morScrollWatcher);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollWatcher = function () {
	function ScrollWatcher() {
		_classCallCheck(this, ScrollWatcher);
	}

	_createClass(ScrollWatcher, null, [{
		key: 'init',
		value: function init(options) {
			options.initEmit = true;
			options.monaId = "mor_lazyload_img_all";
			new _morScrollWatcher2.default(options);
		}
	}]);

	return ScrollWatcher;
}();

ScrollWatcher.item = _item2.default;
exports.default = ScrollWatcher;