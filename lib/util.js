'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, [{
		key: 'addClass',
		value: function addClass(dom, cls) {
			var className = dom.className;
			var cArr = className.split(' ');
			var addArr = cls.split(' ');
			addArr.forEach(function (v) {
				if (cArr.indexOf(v) < 0) {
					cArr.push(v);
				}
			});
			dom.className = cArr.join(' ');
		}
	}, {
		key: 'removeClass',
		value: function removeClass(dom, cls) {
			var className = dom.className;
			var cArr = className.split(' ');
			var removeArr = cls.split(' ');
			cArr = cArr.filter(function (v) {
				return removeArr.indexOf(v) < 0;
			});
			dom.className = cArr.join(' ');
		}
	}]);

	return Util;
}();

exports.default = new Util();