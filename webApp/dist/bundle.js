webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(35);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\n__webpack_require__(175);\n\nvar _HeaderComponent = __webpack_require__(176);\n\nvar _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);\n\nvar _FooterComponent = __webpack_require__(177);\n\nvar _FooterComponent2 = _interopRequireDefault(_FooterComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Hello = _react2.default.createClass({\n    displayName: 'Hello',\n    render: function render() {\n        return _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_HeaderComponent2.default, null),\n            '项目模板',\n            _react2.default.createElement(_FooterComponent2.default, null)\n        );\n    },\n    componentDidMount: function componentDidMount() {\n        fetch('/api/users').then(function (response) {\n            return response.json();\n        }).then(function (data) {\n            console.log(data);\n        });\n    }\n});\n\n_reactDom2.default.render(_react2.default.createElement(Hello, null), document.getElementById('app'));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTSxRQUFRLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUM1QixVQUQ0QixvQkFDcEI7QUFDTCxlQUNTO0FBQUE7QUFBQTtBQUNJLDBFQURKO0FBQUE7QUFHSTtBQUhKLFNBRFQ7QUFPRixLQVQyQjtBQVU1QixxQkFWNEIsK0JBVVQ7QUFDaEIsY0FBTSxZQUFOLEVBQ00sSUFETixDQUNXLFVBQVMsUUFBVCxFQUFrQjtBQUNuQixtQkFBTyxTQUFTLElBQVQsRUFBUDtBQUNKLFNBSE4sRUFJTSxJQUpOLENBSVcsVUFBUyxJQUFULEVBQWM7QUFDaEIsb0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSCxTQU5OO0FBT0Y7QUFsQjJCLENBQWxCLENBQWQ7O0FBcUJBLG1CQUFTLE1BQVQsQ0FBZ0IsOEJBQUMsS0FBRCxPQUFoQixFQUEwQixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBMUIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlckNvbXBvbmVudCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlckNvbXBvbmVudCdcclxuY29uc3QgSGVsbG8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAg6aG555uu5qih5p2/XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICBmZXRjaCgnL2FwaS91c2VycycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8SGVsbG8vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _react2.default.createClass({\n    displayName: 'HeaderComponent',\n    render: function render() {\n        return _react2.default.createElement(\n            'header',\n            null,\n            'this is hahah!'\n        );\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSGVhZGVyQ29tcG9uZW50L2luZGV4LmpzP2ZmMjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsVUFENkIsb0JBQ25CO0FBQ04sZUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFLSDtBQVA0QixDQUFsQixDIiwiZmlsZSI6IjE3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHRoaXMgaXMgaGFoYWghXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9IZWFkZXJDb21wb25lbnQvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(178);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _react2.default.createClass({\n    displayName: 'FooterComponent',\n    render: function render() {\n        return _react2.default.createElement(\n            'footer',\n            null,\n            'this is sss!'\n        );\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRm9vdGVyQ29tcG9uZW50L2luZGV4LmpzPzkxNWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFDZSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsVUFENkIsb0JBQ25CO0FBQ04sZUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFLSDtBQVA0QixDQUFsQixDIiwiZmlsZSI6IjE3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIHRoaXMgaXMgc3NzIVxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRm9vdGVyQ29tcG9uZW50L2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 178:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRm9vdGVyQ29tcG9uZW50L2Zvb3Rlci5jc3M/OGQwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvRm9vdGVyQ29tcG9uZW50L2Zvb3Rlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});