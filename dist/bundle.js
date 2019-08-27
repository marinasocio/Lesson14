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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _newsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsService */ \"./newsService.js\");\n/* harmony import */ var _newsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsContainer */ \"./newsContainer.js\");\n/* harmony import */ var _renderNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderNews */ \"./renderNews.js\");\n/* harmony import */ var _newsTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newsTemplate */ \"./newsTemplate.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  M.AutoInit();\n  loadNews();\n});\n\nfunction loadNews() {\n  _newsService__WEBPACK_IMPORTED_MODULE_1__[\"newsService\"].topHeadlines('ua', onGetResponse);\n}\n\nfunction onGetResponse(err, res) {\n  if (err) {\n    alert(err);\n    return;\n  }\n\n  if (!res.articles.length) {\n    alert('Новостей не найдено');\n    return;\n  }\n\n  Object(_renderNews__WEBPACK_IMPORTED_MODULE_3__[\"renderNews\"])(res.articles);\n}\n\n\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./myHttp.js":
/*!*******************!*\
  !*** ./myHttp.js ***!
  \*******************/
/*! exports provided: myHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myHttp\", function() { return myHttp; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Custom Http Module\nfunction myHttp() {\n  return {\n    get: function get(url, cb) {\n      try {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url);\n        xhr.addEventListener('load', function () {\n          if (Math.floor(xhr.status / 100) !== 2) {\n            cb(\"Error. Status code: \".concat(xhr.status), xhr);\n            return;\n          }\n\n          var response = JSON.parse(xhr.responseText);\n          cb(null, response);\n        });\n        xhr.addEventListener('error', function () {\n          cb(\"Error. Status code: \".concat(xhr.status), xhr);\n        });\n        xhr.send();\n      } catch (error) {\n        cb(error);\n      }\n    },\n    post: function post(url, body, headers, cb) {\n      try {\n        var xhr = new XMLHttpRequest();\n        xhr.open('POST', url);\n        xhr.addEventListener('load', function () {\n          if (Math.floor(xhr.status / 100) !== 2) {\n            cb(\"Error. Status code: \".concat(xhr.status), xhr);\n            return;\n          }\n\n          var response = JSON.parse(xhr.responseText);\n          cb(null, response);\n        });\n        xhr.addEventListener('error', function () {\n          cb(\"Error. Status code: \".concat(xhr.status), xhr);\n        });\n\n        if (headers) {\n          Object.entries(headers).forEach(function (_ref) {\n            var _ref2 = _slicedToArray(_ref, 2),\n                key = _ref2[0],\n                value = _ref2[1];\n\n            xhr.setRequestHeader(key, value);\n          });\n        }\n\n        xhr.send(JSON.stringify(body));\n      } catch (error) {\n        cb(error);\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./myHttp.js?");

/***/ }),

/***/ "./newsContainer.js":
/*!**************************!*\
  !*** ./newsContainer.js ***!
  \**************************/
/*! exports provided: newsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsContainer\", function() { return newsContainer; });\nvar newsContainer = document.querySelector('.news-container .row');\n\n//# sourceURL=webpack:///./newsContainer.js?");

/***/ }),

/***/ "./newsService.js":
/*!************************!*\
  !*** ./newsService.js ***!
  \************************/
/*! exports provided: http, newsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"http\", function() { return http; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsService\", function() { return newsService; });\n/* harmony import */ var _myHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myHttp */ \"./myHttp.js\");\n\nvar http = Object(_myHttp__WEBPACK_IMPORTED_MODULE_0__[\"myHttp\"])();\nvar newsService = function () {\n  var apiKey = '9c27b0f722b84da5a08312d2b125351b';\n  var apiUrl = 'https://newsapi.org/v2';\n  return {\n    topHeadlines: function topHeadlines() {\n      var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ua';\n      var cb = arguments.length > 1 ? arguments[1] : undefined;\n      http.get(\"\".concat(apiUrl, \"/top-headlines?country=\").concat(country, \"&category=technology&apiKey=\").concat(apiKey), cb);\n    },\n    everything: function everything(text) {\n      http.get(\"\".concat(apiUrl, \"/everything?q=\").concat(text, \"&apiKey=\").concat(apiKey), cb);\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./newsService.js?");

/***/ }),

/***/ "./newsTemplate.js":
/*!*************************!*\
  !*** ./newsTemplate.js ***!
  \*************************/
/*! exports provided: newsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsTemplate\", function() { return newsTemplate; });\nfunction newsTemplate() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      url = _ref.url,\n      title = _ref.title,\n      description = _ref.description,\n      urlToImage = _ref.urlToImage;\n\n  return \"\\n    <div class=\\\"col s12\\\">\\n      <div class=\\\"card\\\">\\n        <div class=\\\"card-image\\\">\\n          <img src=\\\"\".concat(urlToImage, \"\\\">\\n          <span class=\\\"card-title\\\">\").concat(title || '', \"</span>\\n        </div>\\n        <div class=\\\"card-content\\\">\\n          <p>\").concat(description || '', \"</p>\\n        </div>\\n        <div class=\\\"card-action\\\">\\n          <a href=\\\"\").concat(url, \"\\\">Read more</a>\\n        </div>\\n      </div>\\n    </div>\\n  \");\n}\n\n//# sourceURL=webpack:///./newsTemplate.js?");

/***/ }),

/***/ "./renderNews.js":
/*!***********************!*\
  !*** ./renderNews.js ***!
  \***********************/
/*! exports provided: renderNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNews\", function() { return renderNews; });\n/* harmony import */ var _newsContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsContainer */ \"./newsContainer.js\");\n/* harmony import */ var _newsTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsTemplate */ \"./newsTemplate.js\");\n\n\nfunction renderNews(newsItems) {\n  var fragment = '';\n  newsItems.forEach(function (item) {\n    var el = Object(_newsTemplate__WEBPACK_IMPORTED_MODULE_1__[\"newsTemplate\"])(item);\n    fragment += el;\n  });\n  _newsContainer__WEBPACK_IMPORTED_MODULE_0__[\"newsContainer\"].insertAdjacentHTML('afterbegin', fragment);\n}\n\n//# sourceURL=webpack:///./renderNews.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });