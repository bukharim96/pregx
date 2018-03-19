/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************!*\
  !*** ./src/regex-parser.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n/*\r\n * RegexParser\r\n *\r\n * @author bukharim96 <bukharim96@gmail.com>\r\n */\n\nexports.default = function (str, pattern, config) {\n\tif (!str && typeof str !== 'string') throw new TypeError('The first argument is not a string. Please provide a string value.');\n\n\tif (!pattern && typeof pattern !== 'string') throw new TypeError('The second argument is not a string. Please provide a string value.');\n\n\tvar flags = [];\n\n\tif (config && config.constructor == Object) {\n\t\tvar global = config.global,\n\t\t    ignoreCase = config.ignoreCase,\n\t\t    multiLine = config.multiLine,\n\t\t    matchUnicode = config.matchUnicode,\n\t\t    stickyMatch = config.stickyMatch,\n\t\t    exclude = config.exclude,\n\t\t    strict = config.strict;\n\n\n\t\tstrict = config.strict;\n\n\t\t// For a restricted match\n\t\tif (strict === true) pattern = '^' + pattern + '$';\n\n\t\t// if (exclude)\n\t\t// \tpattern = `(?![${exclude.join('|')}])${pattern}`\n\n\t\t// Flags\n\t\tif (global === true) flags.push('g');\n\t\tif (ignoreCase === true) flags.push('i');\n\t\tif (multiLine === true) flags.push('m');\n\t\tif (matchUnicode === true) flags.push('u');\n\t\tif (stickyMatch === true) flags.push('y');\n\t}\n\n\treturn str.match(new RegExp(pattern, flags.join('') || ''));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVnZXgtcGFyc2VyLmpzPzcxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUmVnZXhQYXJzZXJcclxuICpcclxuICogQGF1dGhvciBidWtoYXJpbTk2IDxidWtoYXJpbTk2QGdtYWlsLmNvbT5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBwYXR0ZXJuLCBjb25maWcpID0+IHtcclxuXHRpZiAoIXN0ciAmJiB0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcclxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYSBzdHJpbmcuIFBsZWFzZSBwcm92aWRlIGEgc3RyaW5nIHZhbHVlLicpXHJcblxyXG5cdGlmICghcGF0dGVybiAmJiB0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpXHJcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdCBhIHN0cmluZy4gUGxlYXNlIHByb3ZpZGUgYSBzdHJpbmcgdmFsdWUuJylcclxuXHJcblx0bGV0IGZsYWdzID0gW11cclxuXHJcblx0aWYgKGNvbmZpZyAmJiBjb25maWcuY29uc3RydWN0b3IgPT0gT2JqZWN0KSB7XHJcblx0XHRsZXQgeyBnbG9iYWwsIGlnbm9yZUNhc2UsIG11bHRpTGluZSwgbWF0Y2hVbmljb2RlLCBzdGlja3lNYXRjaCwgZXhjbHVkZSwgc3RyaWN0IH0gPSBjb25maWdcclxuXHJcblx0XHRzdHJpY3QgPSBjb25maWcuc3RyaWN0XHJcblxyXG5cdFx0Ly8gRm9yIGEgcmVzdHJpY3RlZCBtYXRjaFxyXG5cdFx0aWYgKHN0cmljdCA9PT0gdHJ1ZSlcclxuXHRcdFx0cGF0dGVybiA9IGBeJHtwYXR0ZXJufSRgXHJcblxyXG5cdFx0Ly8gaWYgKGV4Y2x1ZGUpXHJcblx0XHQvLyBcdHBhdHRlcm4gPSBgKD8hWyR7ZXhjbHVkZS5qb2luKCd8Jyl9XSkke3BhdHRlcm59YFxyXG5cclxuXHRcdC8vIEZsYWdzXHJcblx0XHRpZiAoZ2xvYmFsID09PSB0cnVlKSAgICAgICBmbGFncy5wdXNoKCdnJylcclxuXHRcdGlmIChpZ25vcmVDYXNlID09PSB0cnVlKSAgIGZsYWdzLnB1c2goJ2knKVxyXG5cdFx0aWYgKG11bHRpTGluZSA9PT0gdHJ1ZSkgICAgZmxhZ3MucHVzaCgnbScpXHJcblx0XHRpZiAobWF0Y2hVbmljb2RlID09PSB0cnVlKSBmbGFncy5wdXNoKCd1JylcclxuXHRcdGlmIChzdGlja3lNYXRjaCA9PT0gdHJ1ZSkgIGZsYWdzLnB1c2goJ3knKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0ci5tYXRjaCggbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncy5qb2luKCcnKSB8fCAnJykgKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVnZXgtcGFyc2VyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _alphaNumeric = __webpack_require__(/*! ./src/patterns/alpha-numeric */ 2);\n\nObject.defineProperty(exports, 'getAlphaNumeric', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_alphaNumeric).default;\n  }\n});\n\nvar _alphabet = __webpack_require__(/*! ./src/patterns/alphabet */ 3);\n\nObject.defineProperty(exports, 'getAlphabet', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_alphabet).default;\n  }\n});\n\nvar _btc = __webpack_require__(/*! ./src/patterns/btc */ 4);\n\nObject.defineProperty(exports, 'getBtc', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_btc).default;\n  }\n});\n\nvar _creditCardNumber = __webpack_require__(/*! ./src/patterns/credit-card-number */ 5);\n\nObject.defineProperty(exports, 'getCreditCardNumber', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_creditCardNumber).default;\n  }\n});\n\nvar _date = __webpack_require__(/*! ./src/patterns/date */ 6);\n\nObject.defineProperty(exports, 'getDate', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_date).default;\n  }\n});\n\nvar _digits = __webpack_require__(/*! ./src/patterns/digits */ 7);\n\nObject.defineProperty(exports, 'getDigits', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_digits).default;\n  }\n});\n\nvar _domain = __webpack_require__(/*! ./src/patterns/domain */ 8);\n\nObject.defineProperty(exports, 'getDomain', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_domain).default;\n  }\n});\n\nvar _email = __webpack_require__(/*! ./src/patterns/email */ 9);\n\nObject.defineProperty(exports, 'getEmail', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_email).default;\n  }\n});\n\nvar _gitRepo = __webpack_require__(/*! ./src/patterns/git-repo */ 10);\n\nObject.defineProperty(exports, 'getGitRepo', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_gitRepo).default;\n  }\n});\n\nvar _hexColor = __webpack_require__(/*! ./src/patterns/hex-color */ 11);\n\nObject.defineProperty(exports, 'getHexColor', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_hexColor).default;\n  }\n});\n\nvar _htmlTag = __webpack_require__(/*! ./src/patterns/html-tag */ 12);\n\nObject.defineProperty(exports, 'getHtmlTag', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_htmlTag).default;\n  }\n});\n\nvar _iban = __webpack_require__(/*! ./src/patterns/iban */ 13);\n\nObject.defineProperty(exports, 'getIban', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_iban).default;\n  }\n});\n\nvar _ip = __webpack_require__(/*! ./src/patterns/ip */ 14);\n\nObject.defineProperty(exports, 'getIp', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ip).default;\n  }\n});\n\nvar _ipv = __webpack_require__(/*! ./src/patterns/ipv4 */ 15);\n\nObject.defineProperty(exports, 'getIpv4', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ipv).default;\n  }\n});\n\nvar _ipv2 = __webpack_require__(/*! ./src/patterns/ipv6 */ 16);\n\nObject.defineProperty(exports, 'getIpv6', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ipv2).default;\n  }\n});\n\nvar _isbn = __webpack_require__(/*! ./src/patterns/isbn */ 17);\n\nObject.defineProperty(exports, 'getIsbn', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_isbn).default;\n  }\n});\n\nvar _macAddress = __webpack_require__(/*! ./src/patterns/mac-address */ 18);\n\nObject.defineProperty(exports, 'getMacAddress', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_macAddress).default;\n  }\n});\n\nvar _md = __webpack_require__(/*! ./src/patterns/md5 */ 19);\n\nObject.defineProperty(exports, 'getMd5', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_md).default;\n  }\n});\n\nvar _password = __webpack_require__(/*! ./src/patterns/password */ 20);\n\nObject.defineProperty(exports, 'getPassword', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_password).default;\n  }\n});\n\nvar _phoneNumber = __webpack_require__(/*! ./src/patterns/phone-number */ 21);\n\nObject.defineProperty(exports, 'getPhoneNumber', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_phoneNumber).default;\n  }\n});\n\nvar _poBox = __webpack_require__(/*! ./src/patterns/po-box */ 22);\n\nObject.defineProperty(exports, 'getPoBox', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_poBox).default;\n  }\n});\n\nvar _postalCode = __webpack_require__(/*! ./src/patterns/postal-code */ 23);\n\nObject.defineProperty(exports, 'getPostalCode', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_postalCode).default;\n  }\n});\n\nvar _price = __webpack_require__(/*! ./src/patterns/price */ 24);\n\nObject.defineProperty(exports, 'getPrice', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_price).default;\n  }\n});\n\nvar _sha = __webpack_require__(/*! ./src/patterns/sha1 */ 25);\n\nObject.defineProperty(exports, 'getSha1', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_sha).default;\n  }\n});\n\nvar _sha2 = __webpack_require__(/*! ./src/patterns/sha256 */ 26);\n\nObject.defineProperty(exports, 'getSha256', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_sha2).default;\n  }\n});\n\nvar _ssn = __webpack_require__(/*! ./src/patterns/ssn */ 27);\n\nObject.defineProperty(exports, 'getSsn', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ssn).default;\n  }\n});\n\nvar _streetAddress = __webpack_require__(/*! ./src/patterns/street-address */ 28);\n\nObject.defineProperty(exports, 'getStreetAddress', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_streetAddress).default;\n  }\n});\n\nvar _time = __webpack_require__(/*! ./src/patterns/time */ 29);\n\nObject.defineProperty(exports, 'getTime', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_time).default;\n  }\n});\n\nvar _urlSlug = __webpack_require__(/*! ./src/patterns/url-slug */ 30);\n\nObject.defineProperty(exports, 'getUrlSlug', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_urlSlug).default;\n  }\n});\n\nvar _url = __webpack_require__(/*! ./src/patterns/url */ 31);\n\nObject.defineProperty(exports, 'getUrl', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_url).default;\n  }\n});\n\nvar _usStateAbbrev = __webpack_require__(/*! ./src/patterns/us-state-abbrev */ 32);\n\nObject.defineProperty(exports, 'getUsStateAbbrev', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_usStateAbbrev).default;\n  }\n});\n\nvar _usState = __webpack_require__(/*! ./src/patterns/us-state */ 33);\n\nObject.defineProperty(exports, 'getUsState', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_usState).default;\n  }\n});\n\nvar _username = __webpack_require__(/*! ./src/patterns/username */ 34);\n\nObject.defineProperty(exports, 'getUsername', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_username).default;\n  }\n});\n\nvar _uuid = __webpack_require__(/*! ./src/patterns/uuid */ 35);\n\nObject.defineProperty(exports, 'getUuid', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_uuid).default;\n  }\n});\n\nvar _zipcode = __webpack_require__(/*! ./src/patterns/zipcode */ 36);\n\nObject.defineProperty(exports, 'getZipcode', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_zipcode).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9pbmRleC5qcz8xNjg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFByZWdYXHJcbiAqXHJcbiAqIEBhdXRob3IgYnVraGFyaW05NiA8YnVraGFyaW05NkBnbWFpbC5jb20+XHJcbiAqL1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRBbHBoYU51bWVyaWMgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy9hbHBoYS1udW1lcmljJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldEFscGhhYmV0IH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvYWxwaGFiZXQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0QnRjIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvYnRjJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldENyZWRpdENhcmROdW1iZXIgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy9jcmVkaXQtY2FyZC1udW1iZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0RGF0ZSB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL2RhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0RGlnaXRzIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvZGlnaXRzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldERvbWFpbiB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL2RvbWFpbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRFbWFpbCB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL2VtYWlsJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldEdpdFJlcG8gfSBmcm9tICcuL3NyYy9wYXR0ZXJucy9naXQtcmVwbydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRIZXhDb2xvciB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL2hleC1jb2xvcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRIdG1sVGFnIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvaHRtbC10YWcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0SWJhbiB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL2liYW4nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0SXAgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy9pcCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRJcHY0IH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvaXB2NCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRJcHY2IH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvaXB2NidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRJc2JuIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvaXNibidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRNYWNBZGRyZXNzIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvbWFjLWFkZHJlc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0TWQ1IH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvbWQ1J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFBhc3N3b3JkIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvcGFzc3dvcmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0UGhvbmVOdW1iZXIgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy9waG9uZS1udW1iZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0UG9Cb3ggfSBmcm9tICcuL3NyYy9wYXR0ZXJucy9wby1ib3gnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0UG9zdGFsQ29kZSB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3Bvc3RhbC1jb2RlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFByaWNlIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvcHJpY2UnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0U2hhMSB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3NoYTEnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0U2hhMjU2IH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvc2hhMjU2J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFNzbiB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3NzbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRTdHJlZXRBZGRyZXNzIH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvc3RyZWV0LWFkZHJlc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0VGltZSB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3RpbWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0VXJsU2x1ZyB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3VybC1zbHVnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFVybCB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3VybCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRVc1N0YXRlQWJicmV2IH0gZnJvbSAnLi9zcmMvcGF0dGVybnMvdXMtc3RhdGUtYWJicmV2J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFVzU3RhdGUgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy91cy1zdGF0ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRVc2VybmFtZSB9IGZyb20gJy4vc3JjL3BhdHRlcm5zL3VzZXJuYW1lJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFV1aWQgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy91dWlkJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFppcGNvZGUgfSBmcm9tICcuL3NyYy9wYXR0ZXJucy96aXBjb2RlJ1xyXG5cclxuLypcclxuLy8gVVNFLUNBU0UgRVhBTVBMRVNcclxuXHJcbi8vIE1hdGNoaW5nIGNyZWRpdCBjYXJkIG51bWJlcnNcclxuLy8gXHJcbi8vIFN1cHBvcnRzIGFsbCBtYWpvciBjcmVkaXQgY2FyZHM6XHJcbi8vIFx0XHQtIEFtZXJpY2FuIEV4cHJlc3MgKEFtZXgpXHJcbi8vIFx0XHQtIERpc2NvdmVyXHJcbi8vIFx0XHQtIE1hc3RlcmNhcmRcclxuLy8gXHRcdC0gVmlzYVxyXG5cclxubGV0IHN0ciA9IGBcclxuTXkgQW1lcmljYW4gRXhwcmVzcyBjcmVkaXQgY2FyZCBudW1iZXIgaXM6IDM0MDAgMDAwMCAwMDAwIDAwOS5cclxuTXkgQXVzdHJhbGlhbiBCYW5rQ2FyZOKAjiBudW1iZXIgaXM6IDU2MTAgNTkxMCA4MTAxIDgyNTAuXHJcbk15IFZpc2EgY3JlZGl0IGNhcmQgbnVtYmVyIGlzOiA0MTExIDExMTEgMTExMSAxMTExLlxyXG5NeSBNYXN0ZXJDYXJkIGNhcmQgbnVtYmVyIGlzOiA1NTAwIDAwMDAgMDAwMCAwMDA0LlxyXG5NeSBEaXNjb3ZlciBjYXJkIG51bWJlciBpczogNjAxMSAwMDAwIDAwMDAgMDAwNC5cclxuYFxyXG5cclxuY29uc29sZS5sb2coIHByZWd4LmdldENyZWRpdENhcmROdW1iZXIoc3RyKSApXHJcblxyXG4vLyBvdXRwdXQ6XHJcbi8vIFx0W1xyXG4vLyBcdFx0JzM0MDAgMDAwMCAwMDAwIDAwOScsXHJcbi8vIFx0XHQnNTYxMCA1OTEwIDgxMDEgODI1MCcsXHJcbi8vIFx0XHQnNDExMSAxMTExIDExMTEgMTExMScsXHJcbi8vIFx0XHQnNTUwMCAwMDAwIDAwMDAgMDAwNCcsXHJcbi8vIFx0XHQnNjAxMSAwMDAwIDAwMDAgMDAwNCdcclxuLy8gXHRdXHJcblxyXG5cclxuXHJcbi8vIE1hdGNoaW5nIEJpdGNvaW4gYWRkcmVzc1xyXG4vLyBcclxuLy8gTWF0Y2hlcyBhIHN0cmluZyB0aGF0IHN0YXJ0cyB3aXRoIGVpdGhlciAxIG9yIDMgYW5kLFxyXG4vLyBhZnRlciB0aGF0LCBjb250YWlucyAyNiB0byAzMyBjaGFyYWN0ZXJzIG9mIGVpdGhlciBhLXosXHJcbi8vIEEtWiwgMC05LCBleGNsdWRpbmcgTywgSSBhbmQgbCAobm90IHZhbGlkIGNoYXJhY3RlcnMgaW5cclxuLy8gYSBCaXRjb2luIGFkZHJlc3MpXHJcbiBcclxubGV0IHN0cjEgPSAnTXkgQml0Y29pbiB3YWxsZXQgaWQgaXM6IDNRSm1WM3Fmdkw5U3VZbzM0WWloQWYzc1JDVzNxU2lueUMnLFxyXG5cdHN0cjIgPSAnM1FKbVYzcWZ2TDlTdVlvMzRZaWhBZjNzUkNXM3FTaW55QydcclxuXHJcbi8vIFBhdHRlcm4gc2VhcmNoIHdpdGhvdXQgdGhlIHN0cmljdCBjb25maWdcclxuY29uc29sZS5sb2coIHByZWd4LmdldEJ0YyhzdHIxKSApIC8vIG91dHB1dDogWyczUUptVjNxZnZMOVN1WW8zNFlpaEFmM3NSQ1czcVNpbnlDJ11cclxuY29uc29sZS5sb2coIHByZWd4LmdldEJ0YyhzdHIyKSApIC8vIG91dHB1dDogWyczUUptVjNxZnZMOVN1WW8zNFlpaEFmM3NSQ1czcVNpbnlDJ11cclxuXHJcbi8vIE5vdyBjaGVjayB3aGF0IGhhcHBlbnMgd2hlbiB0aGUgc3RyaWN0IGNvbmZpZyBpcyBzZXQgdG8gdHJ1ZVxyXG5jb25zb2xlLmxvZyggcHJlZ3guZ2V0QnRjKHN0cjEsIHsgc3RyaWN0OiB0cnVlIH0pICkgLy8gb3V0cHV0OiBudWxsXHJcbmNvbnNvbGUubG9nKCBwcmVneC5nZXRCdGMoc3RyMiwgeyBzdHJpY3Q6IHRydWUgfSkgKSAvLyBvdXRwdXQ6IFsnM1FKbVYzcWZ2TDlTdVlvMzRZaWhBZjNzUkNXM3FTaW55QyddXHJcblxyXG4qL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./src/patterns/alpha-numeric.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[a-zA-Z0-9]+', config || null);\n}; /*\r\n    * Pattern for alpha-numeric characters\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvYWxwaGEtbnVtZXJpYy5qcz84YTc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIGFscGhhLW51bWVyaWMgY2hhcmFjdGVyc1xyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoIHN0ciwgJ1thLXpBLVowLTldKycsIGNvbmZpZyB8fCBudWxsIClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9hbHBoYS1udW1lcmljLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/patterns/alphabet.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[a-zA-Z]+', config || null);\n}; /*\r\n    * Pattern for alphabetic characters\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvYWxwaGFiZXQuanM/YWExMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBhbHBoYWJldGljIGNoYXJhY3RlcnNcclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKCBzdHIsICdbYS16QS1aXSsnLCBjb25maWcgfHwgbnVsbCApXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvYWxwaGFiZXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./src/patterns/btc.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[13][a-km-zA-HJ-NP-Z1-9]{25,34}', config || null);\n}; /*\r\n    * Pattern for matching Bitcoin address\r\n    *\r\n    * Matches a string that starts with either 1 or 3 and,\r\n    * after that, contains 26 to 33 characters of either a-z,\r\n    * A-Z, 0-9, excluding O, I and l (not valid characters in\r\n    * a Bitcoin address)\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvYnRjLmpzPzBlNjgiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgQml0Y29pbiBhZGRyZXNzXHJcbiAqXHJcbiAqIE1hdGNoZXMgYSBzdHJpbmcgdGhhdCBzdGFydHMgd2l0aCBlaXRoZXIgMSBvciAzIGFuZCxcclxuICogYWZ0ZXIgdGhhdCwgY29udGFpbnMgMjYgdG8gMzMgY2hhcmFjdGVycyBvZiBlaXRoZXIgYS16LFxyXG4gKiBBLVosIDAtOSwgZXhjbHVkaW5nIE8sIEkgYW5kIGwgKG5vdCB2YWxpZCBjaGFyYWN0ZXJzIGluXHJcbiAqIGEgQml0Y29pbiBhZGRyZXNzKVxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoIHN0ciwgJ1sxM11bYS1rbS16QS1ISi1OUC1aMS05XXsyNSwzNH0nLCBjb25maWcgfHwgbnVsbCApXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvYnRjLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFTQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************************!*\
  !*** ./src/patterns/credit-card-number.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})', config || null);\n}; /*\r\n    * Pattern to match credit card numbers\r\n    *\r\n    * Supports all major credit cards:\r\n    * \t\t- American Express (Amex)\r\n    * \t\t- Discover\r\n    * \t\t- Mastercard\r\n    * \t\t- Visa\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvY3JlZGl0LWNhcmQtbnVtYmVyLmpzPzAzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiB0byBtYXRjaCBjcmVkaXQgY2FyZCBudW1iZXJzXHJcbiAqXHJcbiAqIFN1cHBvcnRzIGFsbCBtYWpvciBjcmVkaXQgY2FyZHM6XHJcbiAqIFx0XHQtIEFtZXJpY2FuIEV4cHJlc3MgKEFtZXgpXHJcbiAqIFx0XHQtIERpc2NvdmVyXHJcbiAqIFx0XHQtIE1hc3RlcmNhcmRcclxuICogXHRcdC0gVmlzYVxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fDYwMTFbMC05XXsxMn18Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fDNbNDddWzAtOV17MTN9KScsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9jcmVkaXQtY2FyZC1udW1iZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVVBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** ./src/patterns/date.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}', config || null);\n}; /*\r\n    * Pattern for Date (MM/DD/YYYY)\r\n    *\r\n    * Optional separators are spaces, hyphens, forward slashes,\r\n    * and periods. The year is limited between 1900 and 2099.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZGF0ZS5qcz85Njk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIERhdGUgKE1NL0REL1lZWVkpXHJcbiAqXHJcbiAqIE9wdGlvbmFsIHNlcGFyYXRvcnMgYXJlIHNwYWNlcywgaHlwaGVucywgZm9yd2FyZCBzbGFzaGVzLFxyXG4gKiBhbmQgcGVyaW9kcy4gVGhlIHllYXIgaXMgbGltaXRlZCBiZXR3ZWVuIDE5MDAgYW5kIDIwOTkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcoMD9bMS05XXwxWzAxMl0pWy0gLy5dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKVstIC8uXSgxOXwyMCk/WzAtOV17Mn0nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvZGF0ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************!*\
  !*** ./src/patterns/digits.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[0-9]+', config || null);\n}; /*\r\n    * Pattern for digits (whole numbers)\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZGlnaXRzLmpzP2I5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgZGlnaXRzICh3aG9sZSBudW1iZXJzKVxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoIHN0ciwgJ1swLTldKycsIGNvbmZpZyB8fCBudWxsIClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9kaWdpdHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************!*\
  !*** ./src/patterns/domain.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '([a-z][a-z0-9-]+(\\.|-*\\.))+[a-z]{2,6}', config || null);\n}; /*\r\n    * Pattern for matching domain names\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZG9tYWluLmpzPzY3NDQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgZG9tYWluIG5hbWVzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcoW2Etel1bYS16MC05LV0rKFxcLnwtKlxcLikpK1thLXpdezIsNn0nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvZG9tYWluLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************!*\
  !*** ./src/patterns/email.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}', config || null);\n}; /*\r\n    * Pattern for emails\r\n    *\r\n    * This email regex is not fully RFC5322-compliant, but it\r\n    * will validate most common email address formats correctly.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZW1haWwuanM/ZTlmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBlbWFpbHNcclxuICpcclxuICogVGhpcyBlbWFpbCByZWdleCBpcyBub3QgZnVsbHkgUkZDNTMyMi1jb21wbGlhbnQsIGJ1dCBpdFxyXG4gKiB3aWxsIHZhbGlkYXRlIG1vc3QgY29tbW9uIGVtYWlsIGFkZHJlc3MgZm9ybWF0cyBjb3JyZWN0bHkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCdbYS16QS1aMC05Ll8lLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fScsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9lbWFpbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************!*\
  !*** ./src/patterns/git-repo.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '((git|ssh|http(s)?)|(git@[\\w\\.]+))(:(//)?)([\\w\\.@\\:/\\-~]+)(\\.git)(/)?', config || null);\n}; /*\r\n    * Pattern for matching GitHub Repository URLs\r\n    *\r\n    * @docs\r\n    * Cases:\r\n    * \t\tssh://user@host.xz:port/path/to/repo.git/\r\n    * \t\tssh://user@host.xz/path/to/repo.git/\r\n    * \t\tssh://host.xz:port/path/to/repo.git/\r\n    * \t\tssh://host.xz/path/to/repo.git/\r\n    * \t\tssh://user@host.xz/path/to/repo.git/\r\n    * \t\tssh://host.xz/path/to/repo.git/\r\n    * \t\tssh://user@host.xz/~user/path/to/repo.git/\r\n    * \t\tssh://host.xz/~user/path/to/repo.git/\r\n    * \t\tssh://user@host.xz/~/path/to/repo.git\r\n    * \t\tssh://host.xz/~/path/to/repo.git\r\n    * \t\tuser@host.xz:/path/to/repo.git/\r\n    * \t\thost.xz:/path/to/repo.git/\r\n    * \t\tuser@host.xz:~user/path/to/repo.git/\r\n    * \t\thost.xz:~user/path/to/repo.git/\r\n    * \t\tuser@host.xz:path/to/repo.git\r\n    * \t\thost.xz:path/to/repo.git\r\n    * \t\trsync://host.xz/path/to/repo.git/\r\n    * \t\tgit://host.xz/path/to/repo.git/\r\n    * \t\tgit://host.xz/~user/path/to/repo.git/\r\n    * \t\thttp://host.xz/path/to/repo.git/\r\n    * \t\thttps://host.xz/path/to/repo.git/\r\n    * \t\t/path/to/repo.git/\r\n    * \t\tpath/to/repo.git/\r\n    * \t\t~/path/to/repo.git\r\n    * \t\tfile:///path/to/repo.git/\r\n    * \t\tfile://~/path/to/repo.git/\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2dpdC1yZXBvLmpzPzYxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgR2l0SHViIFJlcG9zaXRvcnkgVVJMc1xyXG4gKlxyXG4gKiBAZG9jc1xyXG4gKiBDYXNlczpcclxuICogXHRcdHNzaDovL3VzZXJAaG9zdC54ejpwb3J0L3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHRzc2g6Ly91c2VyQGhvc3QueHovcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdHNzaDovL2hvc3QueHo6cG9ydC9wYXRoL3RvL3JlcG8uZ2l0L1xyXG4gKiBcdFx0c3NoOi8vaG9zdC54ei9wYXRoL3RvL3JlcG8uZ2l0L1xyXG4gKiBcdFx0c3NoOi8vdXNlckBob3N0Lnh6L3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHRzc2g6Ly9ob3N0Lnh6L3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHRzc2g6Ly91c2VyQGhvc3QueHovfnVzZXIvcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdHNzaDovL2hvc3QueHovfnVzZXIvcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdHNzaDovL3VzZXJAaG9zdC54ei9+L3BhdGgvdG8vcmVwby5naXRcclxuICogXHRcdHNzaDovL2hvc3QueHovfi9wYXRoL3RvL3JlcG8uZ2l0XHJcbiAqIFx0XHR1c2VyQGhvc3QueHo6L3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHRob3N0Lnh6Oi9wYXRoL3RvL3JlcG8uZ2l0L1xyXG4gKiBcdFx0dXNlckBob3N0Lnh6On51c2VyL3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHRob3N0Lnh6On51c2VyL3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHR1c2VyQGhvc3QueHo6cGF0aC90by9yZXBvLmdpdFxyXG4gKiBcdFx0aG9zdC54ejpwYXRoL3RvL3JlcG8uZ2l0XHJcbiAqIFx0XHRyc3luYzovL2hvc3QueHovcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdGdpdDovL2hvc3QueHovcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdGdpdDovL2hvc3QueHovfnVzZXIvcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdGh0dHA6Ly9ob3N0Lnh6L3BhdGgvdG8vcmVwby5naXQvXHJcbiAqIFx0XHRodHRwczovL2hvc3QueHovcGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdC9wYXRoL3RvL3JlcG8uZ2l0L1xyXG4gKiBcdFx0cGF0aC90by9yZXBvLmdpdC9cclxuICogXHRcdH4vcGF0aC90by9yZXBvLmdpdFxyXG4gKiBcdFx0ZmlsZTovLy9wYXRoL3RvL3JlcG8uZ2l0L1xyXG4gKiBcdFx0ZmlsZTovL34vcGF0aC90by9yZXBvLmdpdC9cclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0JygoZ2l0fHNzaHxodHRwKHMpPyl8KGdpdEBbXFx3XFwuXSspKSg6KC8vKT8pKFtcXHdcXC5AXFw6L1xcLX5dKykoXFwuZ2l0KSgvKT8nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvZ2l0LXJlcG8uanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWlDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***********************************!*\
  !*** ./src/patterns/hex-color.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '#([0-9a-f]{3}|[0-9a-f]{6})', config || null);\n}; /*\r\n    * Pattern for matching hex colors\r\n    *\r\n    * Info:\r\n    *\r\n    * /^#([0-9a-f]{3}|[0-9a-f]{6})$/i\r\n    * matches #abc and #abcdef but not #abcd\r\n    * \r\n    * /^#([0-9a-f]{3}){1,2}$/i\r\n    * matches #abc and #abcdef but not #abcd\r\n    * \r\n    * /^#(?:[0-9a-f]{3}){1,2}$/i\r\n    * matches #abc and #abcdef but not #abcd\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2hleC1jb2xvci5qcz84YmUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIGhleCBjb2xvcnNcclxuICpcclxuICogSW5mbzpcclxuICpcclxuICogL14jKFswLTlhLWZdezN9fFswLTlhLWZdezZ9KSQvaVxyXG4gKiBtYXRjaGVzICNhYmMgYW5kICNhYmNkZWYgYnV0IG5vdCAjYWJjZFxyXG4gKiBcclxuICogL14jKFswLTlhLWZdezN9KXsxLDJ9JC9pXHJcbiAqIG1hdGNoZXMgI2FiYyBhbmQgI2FiY2RlZiBidXQgbm90ICNhYmNkXHJcbiAqIFxyXG4gKiAvXiMoPzpbMC05YS1mXXszfSl7MSwyfSQvaVxyXG4gKiBtYXRjaGVzICNhYmMgYW5kICNhYmNkZWYgYnV0IG5vdCAjYWJjZFxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnIyhbMC05YS1mXXszfXxbMC05YS1mXXs2fSknLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvaGV4LWNvbG9yLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFlQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************!*\
  !*** ./src/patterns/html-tag.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '<([a-z]+)([^<]+)*(?:>(.*)<\\/\\\\1>|\\s+\\/>)', config || null);\n}; /*\r\n    * Pattern for matching HTML Tags\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2h0bWwtdGFnLmpzPzg2NGUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgSFRNTCBUYWdzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCc8KFthLXpdKykoW148XSspKig/Oj4oLiopPFxcL1xcXFwxPnxcXHMrXFwvPiknLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvaHRtbC10YWcuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************!*\
  !*** ./src/patterns/iban.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}', config || null);\n}; /*\r\n    * Pattern for matching International Bank Account Numbers (IBAN)\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2liYW4uanM/M2FlMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBJbnRlcm5hdGlvbmFsIEJhbmsgQWNjb3VudCBOdW1iZXJzIChJQkFOKVxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnW2EtekEtWl17Mn1bMC05XXsyfVthLXpBLVowLTldezR9WzAtOV17N30oW2EtekEtWjAtOV0/KXswLDE2fScsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9pYmFuLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************!*\
  !*** ./src/patterns/ip.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)', config || null);\n}; /*\r\n    * Pattern for matching IP addresses\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2lwLmpzPzkxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgSVAgYWRkcmVzc2VzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcoMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KScsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9pcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!******************************!*\
  !*** ./src/patterns/ipv4.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\\-]*[A-Za-z0-9])$|^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*', config || null);\n}; /*\r\n    * Pattern for matching IPv4\r\n    *\r\n    * @todo revaluate, matches both v4 & v6\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2lwdjQuanM/MDk4MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBJUHY0XHJcbiAqXHJcbiAqIEB0b2RvIHJldmFsdWF0ZSwgbWF0Y2hlcyBib3RoIHY0ICYgdjZcclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0JygoWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSlcXC4pezN9KFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pJHxeKChbYS16QS1aXXxbYS16QS1aXVthLXpBLVowLTlcXC1dKlthLXpBLVowLTldKVxcLikqKFtBLVphLXpdfFtBLVphLXpdW0EtWmEtejAtOVxcLV0qW0EtWmEtejAtOV0pJHxeXFxzKigoKFswLTlBLUZhLWZdezEsNH06KXs3fShbMC05QS1GYS1mXXsxLDR9fDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs2fSg6WzAtOUEtRmEtZl17MSw0fXwoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezV9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsMn0pfDooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezR9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsM30pfCgoOlswLTlBLUZhLWZdezEsNH0pPzooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXszfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDR9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDJ9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezJ9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNX0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsM306KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7MX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw2fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw0fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoOigoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDd9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDV9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpKSglLispP1xccyonLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvaXB2NC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!******************************!*\
  !*** ./src/patterns/ipv6.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\\-]*[A-Za-z0-9])$|^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*', config || null);\n}; /*\r\n    * Pattern for matching IPv6\r\n    *\r\n    * @todo revaluate, matches both v4 & v6\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2lwdjYuanM/OTJmZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBJUHY2XHJcbiAqXHJcbiAqIEB0b2RvIHJldmFsdWF0ZSwgbWF0Y2hlcyBib3RoIHY0ICYgdjZcclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0JygoWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSlcXC4pezN9KFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pJHxeKChbYS16QS1aXXxbYS16QS1aXVthLXpBLVowLTlcXC1dKlthLXpBLVowLTldKVxcLikqKFtBLVphLXpdfFtBLVphLXpdW0EtWmEtejAtOVxcLV0qW0EtWmEtejAtOV0pJHxeXFxzKigoKFswLTlBLUZhLWZdezEsNH06KXs3fShbMC05QS1GYS1mXXsxLDR9fDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs2fSg6WzAtOUEtRmEtZl17MSw0fXwoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezV9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsMn0pfDooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezR9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsM30pfCgoOlswLTlBLUZhLWZdezEsNH0pPzooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXszfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDR9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDJ9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezJ9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNX0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsM306KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7MX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw2fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw0fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoOigoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDd9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDV9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpKSglLispP1xccyonLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvaXB2Ni5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!******************************!*\
  !*** ./src/patterns/isbn.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\tvar pattern = config && config.format === 'ISBN-10' ? '(?:ISBN(?:-10)?:?\\ )?(?=[0-9X]{10}$|(?=(?:[0-9]+[-\\ ]){3})[-\\ 0-9X]{13}$)[0-9]{1,5}[-\\ ]?[0-9]+[-\\ ]?[0-9]+[-\\ ]?[0-9X]' : '(?:ISBN(?:-13)?:?\\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\\ ]){4})[-\\ 0-9]{17}$)97[89][-\\ ]?[0-9]{1,5}[-\\ ]?[0-9]+[-\\ ]?[0-9]+[-\\ ]?[0-9]';\n\n\treturn (0, _regexParser2.default)(str, pattern, config || null);\n}; /*\r\n    * Pattern for matching ISBN (10 / 13)\r\n    *\r\n    * Supports ISBN-13 as the default format.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL2lzYm4uanM/OGVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBJU0JOICgxMCAvIDEzKVxyXG4gKlxyXG4gKiBTdXBwb3J0cyBJU0JOLTEzIGFzIHRoZSBkZWZhdWx0IGZvcm1hdC5cclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSBjb25maWcgJiYgY29uZmlnLmZvcm1hdCA9PT0gJ0lTQk4tMTAnXHJcblx0XHRcdFx0ICA/ICcoPzpJU0JOKD86LTEwKT86P1xcICk/KD89WzAtOVhdezEwfSR8KD89KD86WzAtOV0rWy1cXCBdKXszfSlbLVxcIDAtOVhdezEzfSQpWzAtOV17MSw1fVstXFwgXT9bMC05XStbLVxcIF0/WzAtOV0rWy1cXCBdP1swLTlYXSdcclxuXHRcdFx0XHQgIDogJyg/OklTQk4oPzotMTMpPzo/XFwgKT8oPz1bMC05XXsxM30kfCg/PSg/OlswLTldK1stXFwgXSl7NH0pWy1cXCAwLTldezE3fSQpOTdbODldWy1cXCBdP1swLTldezEsNX1bLVxcIF0/WzAtOV0rWy1cXCBdP1swLTldK1stXFwgXT9bMC05XSdcclxuXHJcblx0cmV0dXJuIHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLCBcclxuXHRcdHBhdHRlcm4sXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL2lzYm4uanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*************************************!*\
  !*** ./src/patterns/mac-address.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})', config || null);\n}; /*\r\n    * Pattern for matching MAC addresses (IEEE 802)\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL21hYy1hZGRyZXNzLmpzP2JhN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgTUFDIGFkZHJlc3NlcyAoSUVFRSA4MDIpXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcoWzAtOUEtRmEtZl17Mn1bOi1dKXs1fShbMC05QS1GYS1mXXsyfSknLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvbWFjLWFkZHJlc3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************!*\
  !*** ./src/patterns/md5.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[A-Fa-f0-9]{32}', config || null);\n}; /*\r\n    * Pattern for matching MD5 hashes\r\n    *\r\n    * @docs\r\n    *\r\n    * Matches:\r\n    * \t\t00236a2ae558018ed13b5222ef1bd987\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL21kNS5qcz8wMTUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIE1ENSBoYXNoZXNcclxuICpcclxuICogQGRvY3NcclxuICpcclxuICogTWF0Y2hlczpcclxuICogXHRcdDAwMjM2YTJhZTU1ODAxOGVkMTNiNTIyMmVmMWJkOTg3XHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlciggc3RyLCAnW0EtRmEtZjAtOV17MzJ9JywgY29uZmlnIHx8IG51bGwgKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL21kNS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************************!*\
  !*** ./src/patterns/password.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*', config || null);\n}; /*\r\n    * Pattern for password\r\n    *\r\n    * Test for a strong password with this regex. The password\r\n    * must contain one lowercase letter, one uppercase letter,\r\n    * one number, and be at least 6 characters long.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3Bhc3N3b3JkLmpzPzNlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgcGFzc3dvcmRcclxuICpcclxuICogVGVzdCBmb3IgYSBzdHJvbmcgcGFzc3dvcmQgd2l0aCB0aGlzIHJlZ2V4LiBUaGUgcGFzc3dvcmRcclxuICogbXVzdCBjb250YWluIG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgdXBwZXJjYXNlIGxldHRlcixcclxuICogb25lIG51bWJlciwgYW5kIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nLlxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnKD89Xi57Nix9JCkoKD89LipbQS1aYS16MC05XSkoPz0uKltBLVpdKSg/PS4qW2Etel0pKV4uKicsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9wYXNzd29yZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBUUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**************************************!*\
  !*** ./src/patterns/phone-number.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+', config || null);\n}; /*\r\n    * Pattern for (North American) phone numbers\r\n    *\r\n    * This regex will validate a 10-digit North American\r\n    * telephone number. Separators are not required, but\r\n    * can include spaces, hyphens, or periods.\r\n    * Parentheses around the area code are also optional.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3Bob25lLW51bWJlci5qcz9jNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIChOb3J0aCBBbWVyaWNhbikgcGhvbmUgbnVtYmVyc1xyXG4gKlxyXG4gKiBUaGlzIHJlZ2V4IHdpbGwgdmFsaWRhdGUgYSAxMC1kaWdpdCBOb3J0aCBBbWVyaWNhblxyXG4gKiB0ZWxlcGhvbmUgbnVtYmVyLiBTZXBhcmF0b3JzIGFyZSBub3QgcmVxdWlyZWQsIGJ1dFxyXG4gKiBjYW4gaW5jbHVkZSBzcGFjZXMsIGh5cGhlbnMsIG9yIHBlcmlvZHMuXHJcbiAqIFBhcmVudGhlc2VzIGFyb3VuZCB0aGUgYXJlYSBjb2RlIGFyZSBhbHNvIG9wdGlvbmFsLlxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnKChbMC05XXsxfSkqWy0gLihdKihbMC05XXszfSlbLSAuKV0qWzAtOV17M31bLSAuXSpbMC05XXs0fSkrJyxcclxuXHRcdGNvbmZpZyB8fCBudWxsXHJcblx0KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL3Bob25lLW51bWJlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!********************************!*\
  !*** ./src/patterns/po-box.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '*((#\\d+)|((box|bin)[-.\\/\\\\]?\\d+)|(.*p[\\.]??(o|0)[-.\\/\\\\]?*-?((box|bin)|b|(#|num)?\\d+))|(p(ost)?*(o(ff(ice)?)?)?*((box|bin)|b)?*\\d+)|(p*-?\\/?(o)?*-?box)|postofficebox|((box|bin)|b)*(number|num|#)?*\\d+|(num|number|#)*\\d+)', config || null);\n}; /*\r\n    * Pattern for matching PO Box addresses\r\n    *\r\n    * @doc\r\n    *\r\n    * Matches:\r\n    * \t\t\"#123\", \r\n    * \t\t\"Box 123\", \r\n    * \t\t\"Box-122\", \r\n    * \t\t\"Box122\", \r\n    * \t\t\"HC73 P.O. Box 217\", \r\n    * \t\t\"P O Box125\", \r\n    * \t\t\"P. O. Box\", \r\n    * \t\t\"P.O 123\", \r\n    * \t\t\"P.O. Box 123\", \r\n    * \t\t\"P.O. Box\", \r\n    * \t\t\"P.O.B 123\",\r\n    * \t\t\"P.O.B. 123\", \r\n    * \t\t\"P.O.B.\", \r\n    * \t\t\"P0 Box\", \r\n    * \t\t\"PO 123\", \r\n    * \t\t\"PO Box N\", \r\n    * \t\t\"PO Box\", \r\n    * \t\t\"PO-Box\", \r\n    * \t\t\"POB 123\", \r\n    * \t\t\"POB\", \r\n    * \t\t\"POBOX123\",\r\n    * \t\t\"Po Box\", \r\n    * \t\t\"Post 123\", \r\n    * \t\t\"Post Box 123\", \r\n    * \t\t\"Post Office Box 123\", \r\n    * \t\t\"Post Office Box\", \r\n    * \t\t\"box #123\", \r\n    * \t\t\"box 122\", \r\n    * \t\t\"box 123\", \r\n    * \t\t\"number 123\", \r\n    * \t\t\"p box\", \r\n    * \t\t\"p-o box\", \r\n    * \t\t\"p-o-box\", \r\n    * \t\t\"p.o box\", \r\n    * \t\t\"p.o. box\", \r\n    * \t\t\"p.o.-box\", \r\n    * \t\t\"p.o.b. #123\", \r\n    * \t\t\"p.o.b.\", \r\n    * \t\t\"p/o box\", \r\n    * \t\t\"po #123\", \r\n    * \t\t\"po box 123\", \r\n    * \t\t\"po box\", \r\n    * \t\t\"po num123\", \r\n    * \t\t\"po-box\", \r\n    * \t\t\"pobox\", \r\n    * \t\t\"pobox123\", \r\n    * \t\t\"post office box\"\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3BvLWJveC5qcz82YTVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIFBPIEJveCBhZGRyZXNzZXNcclxuICpcclxuICogQGRvY1xyXG4gKlxyXG4gKiBNYXRjaGVzOlxyXG4gKiBcdFx0XCIjMTIzXCIsIFxyXG4gKiBcdFx0XCJCb3ggMTIzXCIsIFxyXG4gKiBcdFx0XCJCb3gtMTIyXCIsIFxyXG4gKiBcdFx0XCJCb3gxMjJcIiwgXHJcbiAqIFx0XHRcIkhDNzMgUC5PLiBCb3ggMjE3XCIsIFxyXG4gKiBcdFx0XCJQIE8gQm94MTI1XCIsIFxyXG4gKiBcdFx0XCJQLiBPLiBCb3hcIiwgXHJcbiAqIFx0XHRcIlAuTyAxMjNcIiwgXHJcbiAqIFx0XHRcIlAuTy4gQm94IDEyM1wiLCBcclxuICogXHRcdFwiUC5PLiBCb3hcIiwgXHJcbiAqIFx0XHRcIlAuTy5CIDEyM1wiLFxyXG4gKiBcdFx0XCJQLk8uQi4gMTIzXCIsIFxyXG4gKiBcdFx0XCJQLk8uQi5cIiwgXHJcbiAqIFx0XHRcIlAwIEJveFwiLCBcclxuICogXHRcdFwiUE8gMTIzXCIsIFxyXG4gKiBcdFx0XCJQTyBCb3ggTlwiLCBcclxuICogXHRcdFwiUE8gQm94XCIsIFxyXG4gKiBcdFx0XCJQTy1Cb3hcIiwgXHJcbiAqIFx0XHRcIlBPQiAxMjNcIiwgXHJcbiAqIFx0XHRcIlBPQlwiLCBcclxuICogXHRcdFwiUE9CT1gxMjNcIixcclxuICogXHRcdFwiUG8gQm94XCIsIFxyXG4gKiBcdFx0XCJQb3N0IDEyM1wiLCBcclxuICogXHRcdFwiUG9zdCBCb3ggMTIzXCIsIFxyXG4gKiBcdFx0XCJQb3N0IE9mZmljZSBCb3ggMTIzXCIsIFxyXG4gKiBcdFx0XCJQb3N0IE9mZmljZSBCb3hcIiwgXHJcbiAqIFx0XHRcImJveCAjMTIzXCIsIFxyXG4gKiBcdFx0XCJib3ggMTIyXCIsIFxyXG4gKiBcdFx0XCJib3ggMTIzXCIsIFxyXG4gKiBcdFx0XCJudW1iZXIgMTIzXCIsIFxyXG4gKiBcdFx0XCJwIGJveFwiLCBcclxuICogXHRcdFwicC1vIGJveFwiLCBcclxuICogXHRcdFwicC1vLWJveFwiLCBcclxuICogXHRcdFwicC5vIGJveFwiLCBcclxuICogXHRcdFwicC5vLiBib3hcIiwgXHJcbiAqIFx0XHRcInAuby4tYm94XCIsIFxyXG4gKiBcdFx0XCJwLm8uYi4gIzEyM1wiLCBcclxuICogXHRcdFwicC5vLmIuXCIsIFxyXG4gKiBcdFx0XCJwL28gYm94XCIsIFxyXG4gKiBcdFx0XCJwbyAjMTIzXCIsIFxyXG4gKiBcdFx0XCJwbyBib3ggMTIzXCIsIFxyXG4gKiBcdFx0XCJwbyBib3hcIiwgXHJcbiAqIFx0XHRcInBvIG51bTEyM1wiLCBcclxuICogXHRcdFwicG8tYm94XCIsIFxyXG4gKiBcdFx0XCJwb2JveFwiLCBcclxuICogXHRcdFwicG9ib3gxMjNcIiwgXHJcbiAqIFx0XHRcInBvc3Qgb2ZmaWNlIGJveFwiXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcqKCgjXFxkKyl8KChib3h8YmluKVstLlxcL1xcXFxdP1xcZCspfCguKnBbXFwuXT8/KG98MClbLS5cXC9cXFxcXT8qLT8oKGJveHxiaW4pfGJ8KCN8bnVtKT9cXGQrKSl8KHAob3N0KT8qKG8oZmYoaWNlKT8pPyk/KigoYm94fGJpbil8Yik/KlxcZCspfChwKi0/XFwvPyhvKT8qLT9ib3gpfHBvc3RvZmZpY2Vib3h8KChib3h8YmluKXxiKSoobnVtYmVyfG51bXwjKT8qXFxkK3wobnVtfG51bWJlcnwjKSpcXGQrKScsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9wby1ib3guanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQXVEQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*************************************!*\
  !*** ./src/patterns/postal-code.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]', config || null);\n}; /*\r\n    * Pattern for postal codes\r\n    *\r\n    * Currently only supports Canadian postal codes.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3Bvc3RhbC1jb2RlLmpzPzNiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgcG9zdGFsIGNvZGVzXHJcbiAqXHJcbiAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIENhbmFkaWFuIHBvc3RhbCBjb2Rlcy5cclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0J1tBQkNFR0hKS0xNTlBSU1RWWFldWzAtOV1bQS1aXSBbMC05XVtBLVpdWzAtOV0nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvcG9zdGFsLWNvZGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*******************************!*\
  !*** ./src/patterns/price.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '(\\d*([.,](?=\\d{3}))?\\d+)+((?!\\\\2)[.,]\\d\\d)?', config || null);\n}; /*\r\n    * Pattern for matching price\r\n    *\r\n    * USAGE:\r\n    *\r\n    * International format for the en_US locale & US national format:\r\n    * \t\t134.56\r\n    * \t\t1,234.56\r\n    * \t\t2,991,234.00\r\n    *\r\n    * Italian national format with 2 decimals:\r\n    * \t\t134,56\r\n    * \t\t21.234,56\r\n    * \t\t1.234,56\r\n    * \t\t9.321.234,56\r\n    *\r\n    * International format for the de_DE locale:\r\n    * \t\t134,56\r\n    * \t\t1234,56\r\n    * \t\t98281234,56\r\n    *\r\n    * Decimals are optional, validation for whole amounts:\r\n    * \t\t1234\r\n    * \t\t1,234\r\n    * \t\t2,991,234\r\n    * \t\t1.234\r\n    * \t\t9.321.234\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3ByaWNlLmpzP2IzYWUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgcHJpY2VcclxuICpcclxuICogVVNBR0U6XHJcbiAqXHJcbiAqIEludGVybmF0aW9uYWwgZm9ybWF0IGZvciB0aGUgZW5fVVMgbG9jYWxlICYgVVMgbmF0aW9uYWwgZm9ybWF0OlxyXG4gKiBcdFx0MTM0LjU2XHJcbiAqIFx0XHQxLDIzNC41NlxyXG4gKiBcdFx0Miw5OTEsMjM0LjAwXHJcbiAqXHJcbiAqIEl0YWxpYW4gbmF0aW9uYWwgZm9ybWF0IHdpdGggMiBkZWNpbWFsczpcclxuICogXHRcdDEzNCw1NlxyXG4gKiBcdFx0MjEuMjM0LDU2XHJcbiAqIFx0XHQxLjIzNCw1NlxyXG4gKiBcdFx0OS4zMjEuMjM0LDU2XHJcbiAqXHJcbiAqIEludGVybmF0aW9uYWwgZm9ybWF0IGZvciB0aGUgZGVfREUgbG9jYWxlOlxyXG4gKiBcdFx0MTM0LDU2XHJcbiAqIFx0XHQxMjM0LDU2XHJcbiAqIFx0XHQ5ODI4MTIzNCw1NlxyXG4gKlxyXG4gKiBEZWNpbWFscyBhcmUgb3B0aW9uYWwsIHZhbGlkYXRpb24gZm9yIHdob2xlIGFtb3VudHM6XHJcbiAqIFx0XHQxMjM0XHJcbiAqIFx0XHQxLDIzNFxyXG4gKiBcdFx0Miw5OTEsMjM0XHJcbiAqIFx0XHQxLjIzNFxyXG4gKiBcdFx0OS4zMjEuMjM0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcoXFxkKihbLixdKD89XFxkezN9KSk/XFxkKykrKCg/IVxcXFwyKVsuLF1cXGRcXGQpPycsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9wcmljZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBNkJBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!******************************!*\
  !*** ./src/patterns/sha1.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '\\b[A-Fa-f0-9]{7,40}\\b', config || null);\n}; /*\r\n    * Pattern for matching SHA1 hashes\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3NoYTEuanM/ZmQ3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBTSEExIGhhc2hlc1xyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnXFxiW0EtRmEtZjAtOV17Nyw0MH1cXGInLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvc2hhMS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!********************************!*\
  !*** ./src/patterns/sha256.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '\\b[A-Fa-f0-9]{64}\\b', config || null);\n}; /*\r\n    * Pattern for matching SHA256 hashes\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3NoYTI1Ni5qcz9kMzM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIFNIQTI1NiBoYXNoZXNcclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0J1xcYltBLUZhLWYwLTldezY0fVxcYicsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9zaGEyNTYuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*****************************!*\
  !*** ./src/patterns/ssn.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '\\d{3}-\\d{2}-\\d{4}', config || null);\n}; /*\r\n    * Pattern for matching US-based Social Security numbers\r\n    *\r\n    * @docs\r\n    *\r\n    * Matches:\r\n    *\t\t444-55-3333\r\n    *\t\t555335555\r\n    *\r\n    * Non-matches:\r\n    * \t\t555---60--4444\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3Nzbi5qcz9iZTkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIFVTLWJhc2VkIFNvY2lhbCBTZWN1cml0eSBudW1iZXJzXHJcbiAqXHJcbiAqIEBkb2NzXHJcbiAqXHJcbiAqIE1hdGNoZXM6XHJcbiAqXHRcdDQ0NC01NS0zMzMzXHJcbiAqXHRcdDU1NTMzNTU1NVxyXG4gKlxyXG4gKiBOb24tbWF0Y2hlczpcclxuICogXHRcdDU1NS0tLTYwLS00NDQ0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCdcXGR7M30tXFxkezJ9LVxcZHs0fScsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9zc24uanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!****************************************!*\
  !*** ./src/patterns/street-address.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '\\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\\.?', config || null);\n}; /*\r\n    * Pattern for matching street addresses\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3N0cmVldC1hZGRyZXNzLmpzPzU5MzgiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgc3RyZWV0IGFkZHJlc3Nlc1xyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnXFxkK1sgXSg/OltBLVphLXowLTkuLV0rWyBdPykrKD86QXZlbnVlfExhbmV8Um9hZHxCb3VsZXZhcmR8RHJpdmV8U3RyZWV0fEF2ZXxEcnxSZHxCbHZkfExufFN0KVxcLj8nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvc3RyZWV0LWFkZHJlc3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!******************************!*\
  !*** ./src/patterns/time.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]', config || null);\n}; /*\r\n    * Pattern for matching time (HH:MM)\r\n    *\r\n    * @todo\r\n    *\t\t24H, seconds are optional\r\n    * \t\t([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?\r\n    * \t\t@credit https://stackoverflow.com/users/1779016/bahman-khalafi\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3RpbWUuanM/OWUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyB0aW1lIChISDpNTSlcclxuICpcclxuICogQHRvZG9cclxuICpcdFx0MjRILCBzZWNvbmRzIGFyZSBvcHRpb25hbFxyXG4gKiBcdFx0KFswLTFdP1swLTldfFsyXVswLTNdKTooWzAtNV1bMC05XSkoOlswLTVdWzAtOV0pP1xyXG4gKiBcdFx0QGNyZWRpdCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzLzE3NzkwMTYvYmFobWFuLWtoYWxhZmlcclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0JyhbMFswLTldfDFbMC05XXwyWzAtM10pOlswLTVdWzAtOV0nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvdGltZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!**********************************!*\
  !*** ./src/patterns/url-slug.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[a-z0-9-]+', config || null);\n}; /*\r\n    * Pattern for matching URL slugs\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3VybC1zbHVnLmpzP2FlYTciXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgVVJMIHNsdWdzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlciggc3RyLCAnW2EtejAtOS1dKycsIGNvbmZpZyB8fCBudWxsIClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy91cmwtc2x1Zy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*****************************!*\
  !*** ./src/patterns/url.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, '((http|https|ftp)://)?([[a-zA-Z0-9]\\-\\.])+(\\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]/+=%&_\\.~?\\-]*)', config || null);\n}; /*\r\n    * Pattern for URLs\r\n    *\r\n    * This URL regex will validate most common URL formats correctly.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3VybC5qcz9lYjA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIFVSTHNcclxuICpcclxuICogVGhpcyBVUkwgcmVnZXggd2lsbCB2YWxpZGF0ZSBtb3N0IGNvbW1vbiBVUkwgZm9ybWF0cyBjb3JyZWN0bHkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCcoKGh0dHB8aHR0cHN8ZnRwKTovLyk/KFtbYS16QS1aMC05XVxcLVxcLl0pKyhcXC4pKFtbYS16QS1aMC05XV0pezIsNH0oW1thLXpBLVowLTldLys9JSZfXFwufj9cXC1dKiknLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvdXJsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*****************************************!*\
  !*** ./src/patterns/us-state-abbrev.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, 'AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY', config || null);\n}; /*\r\n    * Pattern for matching any US State abbreviation\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3VzLXN0YXRlLWFiYnJldi5qcz9kNzViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIGFueSBVUyBTdGF0ZSBhYmJyZXZpYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgcmVnZXhQYXJzZXIgZnJvbSAnLi4vcmVnZXgtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PlxyXG5cdHJlZ2V4UGFyc2VyKFxyXG5cdFx0c3RyLFxyXG5cdFx0J0FMfEFLfEFTfEFafEFSfENBfENPfENUfERFfERDfEZNfEZMfEdBfEdVfEhJfElEfElMfElOfElBfEtTfEtZfExBfE1FfE1IfE1EfE1BfE1JfE1OfE1TfE1PfE1UfE5FfE5WfE5IfE5KfE5NfE5ZfE5DfE5EfE1QfE9IfE9LfE9SfFBXfFBBfFBSfFJJfFNDfFNEfFROfFRYfFVUfFZUfFZJfFZBfFdBfFdWfFdJfFdZJyxcclxuXHRcdGNvbmZpZyB8fCBudWxsXHJcblx0KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL3VzLXN0YXRlLWFiYnJldi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**********************************!*\
  !*** ./src/patterns/us-state.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n\treturn (0, _regexParser2.default)(str, 'Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New[ ]Hampshire|New[ ]Jersey|New[ ]Mexico|New[ ]York|North[ ]Carolina|North[ ]Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode[ ]Island|South[ ]Carolina|South[ ]Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West[ ]Virginia|Wisconsin|Wyoming', config || null);\n}; /*\r\n    * Pattern for matching any US State\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3VzLXN0YXRlLmpzPzk0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgYW55IFVTIFN0YXRlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCdBbGFiYW1hfEFsYXNrYXxBcml6b25hfEFya2Fuc2FzfENhbGlmb3JuaWF8Q29sb3JhZG98Q29ubmVjdGljdXR8RGVsYXdhcmV8RmxvcmlkYXxHZW9yZ2lhfEhhd2FpaXxJZGFob3xJbGxpbm9pc3xJbmRpYW5hfElvd2F8S2Fuc2FzfEtlbnR1Y2t5fExvdWlzaWFuYXxNYWluZXxNYXJ5bGFuZHxNYXNzYWNodXNldHRzfE1pY2hpZ2FufE1pbm5lc290YXxNaXNzaXNzaXBwaXxNaXNzb3VyaXxNb250YW5hfE5lYnJhc2thfE5ldmFkYXxOZXdbIF1IYW1wc2hpcmV8TmV3WyBdSmVyc2V5fE5ld1sgXU1leGljb3xOZXdbIF1Zb3JrfE5vcnRoWyBdQ2Fyb2xpbmF8Tm9ydGhbIF1EYWtvdGF8T2hpb3xPa2xhaG9tYXxPcmVnb258UGVubnN5bHZhbmlhfFJob2RlWyBdSXNsYW5kfFNvdXRoWyBdQ2Fyb2xpbmF8U291dGhbIF1EYWtvdGF8VGVubmVzc2VlfFRleGFzfFV0YWh8VmVybW9udHxWaXJnaW5pYXxXYXNoaW5ndG9ufFdlc3RbIF1WaXJnaW5pYXxXaXNjb25zaW58V3lvbWluZycsXHJcblx0XHRjb25maWcgfHwgbnVsbFxyXG5cdClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy91cy1zdGF0ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************************!*\
  !*** ./src/patterns/username.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[a-z0-9_]', config || null);\n}; /*\r\n    * Pattern for matching standard usernames\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3VzZXJuYW1lLmpzPzRlMDciXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgc3RhbmRhcmQgdXNlcm5hbWVzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlciggc3RyLCAnW2EtejAtOV9dJywgY29uZmlnIHx8IG51bGwgKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL3VzZXJuYW1lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!******************************!*\
  !*** ./src/patterns/uuid.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}', config || null);\n}; /*\r\n    * Pattern for matching UUID / GUID\r\n    *\r\n    * Matches Universally Unique IDentifiers as\r\n    * specified in RFC4122 bearing versions 1 - 5.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3V1aWQuanM/NzhmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBVVUlEIC8gR1VJRFxyXG4gKlxyXG4gKiBNYXRjaGVzIFVuaXZlcnNhbGx5IFVuaXF1ZSBJRGVudGlmaWVycyBhc1xyXG4gKiBzcGVjaWZpZWQgaW4gUkZDNDEyMiBiZWFyaW5nIHZlcnNpb25zIDEgLSA1LlxyXG4gKi9cclxuXHJcbmltcG9ydCByZWdleFBhcnNlciBmcm9tICcuLi9yZWdleC1wYXJzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+XHJcblx0cmVnZXhQYXJzZXIoXHJcblx0XHRzdHIsXHJcblx0XHQnWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn0nLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvdXVpZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!*********************************!*\
  !*** ./src/patterns/zipcode.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regexParser = __webpack_require__(/*! ../regex-parser */ 0);\n\nvar _regexParser2 = _interopRequireDefault(_regexParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (str, config) {\n  return (0, _regexParser2.default)(str, '\\b\\d{5}(?:-\\d{4})?\\b', config || null);\n}; /*\r\n    * Pattern for ZIP Codes\r\n    *\r\n    * That pattern matches five primary digits and\r\n    * allows the option of having a hyphen and four\r\n    * extended digits. This matches all zip codes,\r\n    * however it is possible for there to be a match\r\n    * of five digits that is not a zip code. Adding\r\n    * to our pattern will fix that.\r\n    *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3ppcGNvZGUuanM/NTE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBaSVAgQ29kZXNcclxuICpcclxuICogVGhhdCBwYXR0ZXJuIG1hdGNoZXMgZml2ZSBwcmltYXJ5IGRpZ2l0cyBhbmRcclxuICogYWxsb3dzIHRoZSBvcHRpb24gb2YgaGF2aW5nIGEgaHlwaGVuIGFuZCBmb3VyXHJcbiAqIGV4dGVuZGVkIGRpZ2l0cy4gVGhpcyBtYXRjaGVzIGFsbCB6aXAgY29kZXMsXHJcbiAqIGhvd2V2ZXIgaXQgaXMgcG9zc2libGUgZm9yIHRoZXJlIHRvIGJlIGEgbWF0Y2hcclxuICogb2YgZml2ZSBkaWdpdHMgdGhhdCBpcyBub3QgYSB6aXAgY29kZS4gQWRkaW5nXHJcbiAqIHRvIG91ciBwYXR0ZXJuIHdpbGwgZml4IHRoYXQuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJlZ2V4UGFyc2VyIGZyb20gJy4uL3JlZ2V4LXBhcnNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT5cclxuXHRyZWdleFBhcnNlcihcclxuXHRcdHN0cixcclxuXHRcdCdcXGJcXGR7NX0oPzotXFxkezR9KT9cXGInLFxyXG5cdFx0Y29uZmlnIHx8IG51bGxcclxuXHQpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvemlwY29kZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBV0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ })
/******/ ]);