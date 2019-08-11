module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "footer",
  className: "jsx-1821871271" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  className: "jsx-1821871271" + " " + "title is-6"
}, "Made with Love in Gary, IN."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-1821871271"
}, "Copyright 2019 \xA9 All Rights Reserved by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "http://hill7.org",
  className: "jsx-1821871271"
}, "2nd Shift Productions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1821871271"
}, "#footer.jsx-1821871271{background-color:#282828;text-align:center;color:white;}.title.jsx-1821871271{color:white;}a.jsx-1821871271{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvQXVkaW8tQ29udmVydGVyL2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUdvQyxBQUtiLEFBR0QsWUFGYixBQUdBLGFBUm1CLGtCQUNMLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy9BdWRpby1Db252ZXJ0ZXIvY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj5NYWRlIHdpdGggTG92ZSBpbiBHYXJ5LCBJTi48L2gyPlxuICAgICAgPHA+Q29weXJpZ2h0IDIwMTkgJmNvcHk7IEFsbCBSaWdodHMgUmVzZXJ2ZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9oaWxsNy5vcmdcIj4ybmQgU2hpZnQgUHJvZHVjdGlvbnM8L2E+PC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjZm9vdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG4gIFxuICBleHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */\n/*@ sourceURL=/Users/gilbertking/src/Audio-Converter/components/footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const linkStyle = {
  marginRight: 15
};

const Header = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4049844003"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4049844003" + " " + "header section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/Logo.jpg",
  alt: "",
  className: "jsx-4049844003" + " " + "logo"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4049844003"
}, ".logo.jsx-4049844003{margin-bottom:15px;}.title.jsx-4049844003{font-weight:bold;color:#282828;}.header.jsx-4049844003{text-align:center;background-color:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvQXVkaW8tQ29udmVydGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUc0QixBQUdGLEFBSUMsaUJBSEosQ0FJUyxDQVB6QixZQUlBLFVBSWMsWUFDZCIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL0F1ZGlvLUNvbnZlcnRlci9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgc2VjdGlvblwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9Mb2dvLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMjgyODI4O1xuICAgICAgfVxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciAiXX0= */\n/*@ sourceURL=/Users/gilbertking/src/Audio-Converter/components/header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




const Layout = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2869033619"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
  className: "jsx-2869033619"
}, 'Audio Converter App'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
  charSet: "utf-8",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.4/react-bootstrap.min.js",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
  src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCGUG88YViM2h_rMqA2YWDhitp7GooXQ7g",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-2869033619"
})), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2869033619"
}, "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvQXVkaW8tQ29udmVydGVyL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN1QixBQUcyQyxrQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy9BdWRpby1Db252ZXJ0ZXIvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eydBdWRpbyBDb252ZXJ0ZXIgQXBwJ308L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuNC4zL2Nzcy9idWxtYS5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1ib290c3RyYXAvMC4zMi40L3JlYWN0LWJvb3RzdHJhcC5taW4uanNcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5Q0dVRzg4WVZpTTJoX3JNcUEyWVdEaGl0cDdHb29YUTdnXCI+PC9zY3JpcHQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogXCJmcmFua2xpbi1nb3RoaWMtdXJ3XCI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/gilbertking/src/Audio-Converter/components/layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Navbar = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  className: "navbar-menu"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-start"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "#tagline"
}, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-end"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "https://www.instagram.com/_gilbproducing/",
  target: "_blank"
}, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-item"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "field is-separated"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "control"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button is-white",
  href: "#submit"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Convert my file")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button is-white",
  href: "https://soundcloud.com/user-403367525"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Soundcloud"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-item"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "field is-grouped"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "control"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: "true"
}, `
          {
              .elevator {
                text-align: center;
              }
              #twitter {
                  color: #55acee;
                  border-color: #55acee;
              }
              #twitter:hover {
                  background: #55acee;
                  border-color: #55acee;
                  color: white;
              }
              .navbar {
                { background-color: #f36d21; }
              }
              .navbar-item {
                { color: white;
                font-weight: bold;
              }
              img {
                height: 250px;
                border-radius: 50%;
              }
          }
        `));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/submit.js":
/*!******************************!*\
  !*** ./components/submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const SubmitForm = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "submit",
  style: {
    'backgroundColor': '#5e5949'
  },
  className: "jsx-3979667495" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3979667495" + " " + "columns is-mobile"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3979667495" + " " + "column is-half is-offset-one-quarter"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-3979667495" + " " + "title is-4 label"
}, "choose conversion types from ogg, wav, mp4, and mp3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
  style: {
    'padding': '3px',
    'textAlign': 'center'
  },
  action: "/upload",
  method: "post",
  target: "popupwindow",
  onSubmit: "window.open('converting, 'popupwindow', 'scrollbars=yes,width=800,height=600');return true",
  className: "jsx-3979667495"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3979667495" + " " + "field is-grouped"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3979667495" + " " + "control is-expanded"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
  type: "email",
  name: "email",
  id: "tlemail",
  placeholder: "Your file here",
  className: "jsx-3979667495" + " " + "input"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
  type: "file",
  value: "1",
  name: "embed",
  className: "jsx-3979667495"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3979667495" + " " + "control"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
  className: "jsx-3979667495" + " " + "button is-white"
}, "Convert")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3979667495"
}, ".title.jsx-3979667495{color:white;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvQXVkaW8tQ29udmVydGVyL2NvbXBvbmVudHMvc3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHdUIsWUFDTSxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy9BdWRpby1Db252ZXJ0ZXIvY29tcG9uZW50cy9zdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdWJtaXRGb3JtID0gKCkgPT4gKFxuICAgIDxkaXYgaWQ9XCJzdWJtaXRcIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyM1ZTU5NDknIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBpcy1vZmZzZXQtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBsYWJlbFwiPmNob29zZSBjb252ZXJzaW9uIHR5cGVzIGZyb20gb2dnLCB3YXYsIG1wNCwgYW5kIG1wMzwvaDM+XG4gICAgICAgICAgPGZvcm0gc3R5bGU9e3sgJ3BhZGRpbmcnOiAnM3B4JywgJ3RleHRBbGlnbic6ICdjZW50ZXInIH19IGFjdGlvbj1cIi91cGxvYWRcIiBtZXRob2Q9XCJwb3N0XCIgdGFyZ2V0PVwicG9wdXB3aW5kb3dcIiBvblN1Ym1pdD1cIndpbmRvdy5vcGVuKCdjb252ZXJ0aW5nLCAncG9wdXB3aW5kb3cnLCAnc2Nyb2xsYmFycz15ZXMsd2lkdGg9ODAwLGhlaWdodD02MDAnKTtyZXR1cm4gdHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbCBpcy1leHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwidGxlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBmaWxlIGhlcmVcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHZhbHVlPVwiMVwiIG5hbWU9XCJlbWJlZFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtd2hpdGVcIj5Db252ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgU3VibWl0Rm9ybSJdfQ== */\n/*@ sourceURL=/Users/gilbertking/src/Audio-Converter/components/submit.js */"));

/* harmony default export */ __webpack_exports__["default"] = (SubmitForm);

/***/ }),

/***/ "./components/tagline.js":
/*!*******************************!*\
  !*** ./components/tagline.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const TagLine = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "tagline",
  style: {
    'backgroundColor': '#282828'
  },
  className: "jsx-2843645134" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2843645134" + " " + "elevator columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2843645134" + " " + "column is-6 is-offset-3"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-2843645134" + " " + "title is-2"
}, "Convert Your Audio Files"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2843645134"
}, ".elevator.jsx-2843645134{text-align:center;color:white;}.title.jsx-2843645134{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvQXVkaW8tQ29udmVydGVyL2NvbXBvbmVudHMvdGFnbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IsQUFHNkIsQUFJUixZQUNLLE1BSkgsV0FLZCxDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvQXVkaW8tQ29udmVydGVyL2NvbXBvbmVudHMvdGFnbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhZ0xpbmUgPSAoKSA9PiAoXG4gICAgPGRpdiBpZD1cInRhZ2xpbmVcIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyMyODI4MjgnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy02IGlzLW9mZnNldC0zXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Db252ZXJ0IFlvdXIgQXVkaW8gRmlsZXM8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWxldmF0b3Ige1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG4gIFxuICBleHBvcnQgZGVmYXVsdCBUYWdMaW5lIl19 */\n/*@ sourceURL=/Users/gilbertking/src/Audio-Converter/components/tagline.js */"));

/* harmony default export */ __webpack_exports__["default"] = (TagLine);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_tagline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tagline */ "./components/tagline.js");
/* harmony import */ var _components_submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submit */ "./components/submit.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");




 // import App from '../src/App'



/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tagline__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_submit__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gilbertking/src/Audio-Converter/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map