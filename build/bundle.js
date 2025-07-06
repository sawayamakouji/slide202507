/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4991);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_fonts_NotoSansJP_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_public_fonts_NotoSansJP_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v4.1.1 | MIT License | https://tailwindcss.com */\n@layer theme, base, components, utilities;\n@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n  @layer base {\n    *, ::before, ::after, ::backdrop {\n      --tw-rotate-x: rotateX(0);\n      --tw-rotate-y: rotateY(0);\n      --tw-rotate-z: rotateZ(0);\n      --tw-skew-x: skewX(0);\n      --tw-skew-y: skewY(0);\n      --tw-border-style: solid;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n    }\n  }\n}\n@layer theme {\n  :root, :host {\n    --font-sans: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\",\n      \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\n      \"Courier New\", monospace;\n    --color-emerald-300: oklch(84.5% 0.143 164.978);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --container-5xl: 64rem;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --text-8xl: 6rem;\n    --text-8xl--line-height: 1;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --tracking-tighter: -0.05em;\n    --leading-tight: 1.25;\n    --radius-lg: 0.5rem;\n    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n@layer base {\n  *, ::after, ::before, ::backdrop, ::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html, :host {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b, strong {\n    font-weight: bolder;\n  }\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub, sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n  sup {\n    top: -0.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol, ul, menu {\n    list-style: none;\n  }\n  img, svg, video, canvas, audio, iframe, embed, object {\n    display: block;\n    vertical-align: middle;\n  }\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n  button, input, select, optgroup, textarea, ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]), ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .mb-12 {\n    margin-bottom: calc(var(--spacing) * 12);\n  }\n  .contents {\n    display: contents;\n  }\n  .max-w-5xl {\n    max-width: var(--container-5xl);\n  }\n  .transform {\n    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);\n  }\n  .items-center {\n    align-items: center;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .border-2 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n  .border-gray-700 {\n    border-color: var(--color-gray-700);\n  }\n  .bg-gray-800 {\n    background-color: var(--color-gray-800);\n  }\n  .bg-gray-900 {\n    background-color: var(--color-gray-900);\n  }\n  .p-8 {\n    padding: calc(var(--spacing) * 8);\n  }\n  .text-center {\n    text-align: center;\n  }\n  .font-mono {\n    font-family: var(--font-mono);\n  }\n  .text-6xl {\n    font-size: var(--text-6xl);\n    line-height: var(--tw-leading, var(--text-6xl--line-height));\n  }\n  .text-7xl {\n    font-size: var(--text-7xl);\n    line-height: var(--tw-leading, var(--text-7xl--line-height));\n  }\n  .text-8xl {\n    font-size: var(--text-8xl);\n    line-height: var(--tw-leading, var(--text-8xl--line-height));\n  }\n  .leading-tight {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-extrabold {\n    --tw-font-weight: var(--font-weight-extrabold);\n    font-weight: var(--font-weight-extrabold);\n  }\n  .tracking-tighter {\n    --tw-tracking: var(--tracking-tighter);\n    letter-spacing: var(--tracking-tighter);\n  }\n  .text-emerald-300 {\n    color: var(--color-emerald-300);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .drop-shadow-lg {\n    --tw-drop-shadow-size: drop-shadow(0 4px 4px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.15)));\n    --tw-drop-shadow: drop-shadow(var(--drop-shadow-lg));\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: rotateX(0);\n}\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: rotateY(0);\n}\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: rotateZ(0);\n}\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: skewX(0);\n}\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: skewY(0);\n}\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-leading {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-tracking {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-blur {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-brightness {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-contrast {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-grayscale {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-hue-rotate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-invert {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-opacity {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-saturate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-sepia {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-drop-shadow-size {\n  syntax: \"*\";\n  inherits: false;\n}\n\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA,gEASA;AATA,yCASA;AATA;EAAA;IAAA;MAAA,yBASA;MATA,yBASA;MATA,yBASA;MATA,qBASA;MATA,qBASA;MATA,wBASA;MATA,qBASA;MATA,yBASA;MATA,sBASA;MATA,kBASA;MATA,wBASA;MATA,sBASA;MATA,uBASA;MATA,wBASA;MATA,oBASA;MATA,qBASA;MATA,sBASA;MATA,mBASA;MATA,yBASA;MATA,+BASA;MATA,4BASA;MATA,8BASA;IAAA;EAAA;AAAA;AATA;EAAA;IAAA;6DASA;IATA;8BASA;IATA,+CASA;IATA,4CASA;IATA,4CASA;IATA,0CASA;IATA,mBASA;IATA,kBASA;IATA,sBASA;IATA,mBASA;IATA,0BASA;IATA,kBASA;IATA,0BASA;IATA,gBASA;IATA,0BASA;IATA,uBASA;IATA,4BASA;IATA,2BASA;IATA,qBASA;IATA,mBASA;IATA,6CASA;IATA,uCASA;IATA,4CASA;EAAA;AAAA;AATA;EAAA;IAAA,sBASA;IATA,SASA;IATA,UASA;IATA,eASA;EAAA;EATA;IAAA,gBASA;IATA,8BASA;IATA,WASA;IATA,2JASA;IATA,mEASA;IATA,uEASA;IATA,wCASA;EAAA;EATA;IAAA,SASA;IATA,cASA;IATA,qBASA;EAAA;EATA;IAAA,yCASA;IATA,iCASA;EAAA;EATA;IAAA,kBASA;IATA,oBASA;EAAA;EATA;IAAA,cASA;IATA,gCASA;IATA,wBASA;EAAA;EATA;IAAA,mBASA;EAAA;EATA;IAAA,gJASA;IATA,wEASA;IATA,4EASA;IATA,cASA;EAAA;EATA;IAAA,cASA;EAAA;EATA;IAAA,cASA;IATA,cASA;IATA,kBASA;IATA,wBASA;EAAA;EATA;IAAA,eASA;EAAA;EATA;IAAA,WASA;EAAA;EATA;IAAA,cASA;IATA,qBASA;IATA,yBASA;EAAA;EATA;IAAA,aASA;EAAA;EATA;IAAA,wBASA;EAAA;EATA;IAAA,kBASA;EAAA;EATA;IAAA,gBASA;EAAA;EATA;IAAA,cASA;IATA,sBASA;EAAA;EATA;IAAA,eASA;IATA,YASA;EAAA;EATA;IAAA,aASA;IATA,8BASA;IATA,gCASA;IATA,uBASA;IATA,cASA;IATA,gBASA;IATA,6BASA;IATA,UASA;EAAA;EATA;IAAA,mBASA;EAAA;EATA;IAAA,0BASA;EAAA;EATA;IAAA,sBASA;EAAA;EATA;IAAA,UASA;EAAA;EATA;IAAA;MAAA,yDASA;IAAA;EAAA;EATA;IAAA,gBASA;EAAA;EATA;IAAA,wBASA;EAAA;EATA;IAAA,eASA;IATA,mBASA;EAAA;EATA;IAAA,oBASA;EAAA;EATA;IAAA,UASA;EAAA;EATA;IAAA,gBASA;EAAA;EATA;IAAA,gBASA;EAAA;EATA;IAAA,kBASA;EAAA;EATA;IAAA,YASA;EAAA;EATA;IAAA,wBASA;EAAA;AAAA;AATA;EAAA;IAAA,wCASA;EAAA;EATA;IAAA,iBASA;EAAA;EATA;IAAA,+BASA;EAAA;EATA;IAAA,qGASA;EAAA;EATA;IAAA,mBASA;EAAA;EATA;IAAA,uBASA;EAAA;EATA;IAAA,+BASA;EAAA;EATA;IAAA,oCASA;IATA,iBASA;EAAA;EATA;IAAA,mCASA;EAAA;EATA;IAAA,uCASA;EAAA;EATA;IAAA,uCASA;EAAA;EATA;IAAA,iCASA;EAAA;EATA;IAAA,kBASA;EAAA;EATA;IAAA,6BASA;EAAA;EATA;IAAA,0BASA;IATA,4DASA;EAAA;EATA;IAAA,0BASA;IATA,4DASA;EAAA;EATA;IAAA,0BASA;IATA,4DASA;EAAA;EATA;IAAA,kCASA;IATA,iCASA;EAAA;EATA;IAAA,yCASA;IATA,oCASA;EAAA;EATA;IAAA,8CASA;IATA,yCASA;EAAA;EATA;IAAA,sCASA;IATA,uCASA;EAAA;EATA;IAAA,+BASA;EAAA;EATA;IAAA,yBASA;EAAA;EATA;IAAA,4FASA;IATA,oDASA;IATA,0LASA;EAAA;EATA;IAAA,0LASA;EAAA;AAAA;AATA;EAAA,2BASA;EATA,+DASA;EATA,mBASA;EATA,kBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;EATA,yBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;EATA,yBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;EATA,yBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;EATA,uBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;EATA,uBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;EATA,oBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA;AATA;EAAA,sBASA;EATA,eASA;EATA,mBASA;AAAA;AATA;EAAA,WASA;EATA,eASA;AAAA","sourcesContent":["@import \"tailwindcss\";\n\n@font-face {\n  font-family: 'Noto Sans JP';\n  src: url('../public/fonts/NotoSansJP-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 4991:
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 4417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 2551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(6540),ca=__webpack_require__(9982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(961);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(2551);
} else {}


/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 4848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1020);
} else {}


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 9982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(7463);
} else {}


/***/ }),

/***/ 5072:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 7659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 5056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 1113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2820ce39cc8405fa.ttf";

/***/ }),

/***/ 761:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZodZypesInternals: () => (/* binding */ ZodZypesInternals),
/* harmony export */   zColor: () => (/* binding */ zColor),
/* harmony export */   zMatrix: () => (/* binding */ zMatrix),
/* harmony export */   zTextarea: () => (/* binding */ zTextarea)
/* harmony export */ });
/* harmony import */ var remotion_no_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9382);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4476);
// src/z-color.ts


var REMOTION_COLOR_BRAND = "__remotion-color";
var parseColor = (value) => {
  const colored = remotion_no_react__WEBPACK_IMPORTED_MODULE_0__.NoReactInternals.processColor(value).toString(16).padStart(8, "0");
  const opacity = parseInt(colored.slice(0, 2), 16);
  const r = parseInt(colored.slice(2, 4), 16);
  const g = parseInt(colored.slice(4, 6), 16);
  const b = parseInt(colored.slice(6, 8), 16);
  return { a: opacity, r, g, b };
};
var zColor = () => zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((value) => {
  try {
    parseColor(value);
    return true;
  } catch {
    return false;
  }
}, { message: "Invalid color" }).describe(REMOTION_COLOR_BRAND);

// src/z-matrix.ts

var REMOTION_MATRIX_BRAND = "__remotion-matrix";
var zMatrix = () => zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.number().step(0.01)).refine((value) => {
  const count = value.length;
  const root = Math.sqrt(count);
  return Number.isInteger(root) && root > 0;
}, { message: "Invalid matrix, must be a square matrix" }).describe(REMOTION_MATRIX_BRAND);

// src/z-textarea.ts

var REMOTION_TEXTAREA_BRAND = "__remotion-textarea";
var zTextarea = () => zod__WEBPACK_IMPORTED_MODULE_1__.z.string().describe(REMOTION_TEXTAREA_BRAND);

// src/index.ts
var ZodZypesInternals = {
  parseColor,
  REMOTION_COLOR_BRAND,
  REMOTION_TEXTAREA_BRAND,
  REMOTION_MATRIX_BRAND
};



/***/ }),

/***/ 3947:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbsoluteFill: () => (/* binding */ AbsoluteFill),
/* harmony export */   AnimatedImage: () => (/* binding */ AnimatedImage),
/* harmony export */   Artifact: () => (/* binding */ Artifact),
/* harmony export */   Audio: () => (/* binding */ Audio),
/* harmony export */   Composition: () => (/* binding */ Composition),
/* harmony export */   Config: () => (/* binding */ Config),
/* harmony export */   Easing: () => (/* binding */ Easing),
/* harmony export */   Experimental: () => (/* binding */ Experimental),
/* harmony export */   Folder: () => (/* binding */ Folder),
/* harmony export */   FolderContext: () => (/* binding */ FolderContext),
/* harmony export */   Freeze: () => (/* binding */ Freeze),
/* harmony export */   IFrame: () => (/* binding */ IFrame),
/* harmony export */   Img: () => (/* binding */ Img),
/* harmony export */   Internals: () => (/* binding */ Internals),
/* harmony export */   Loop: () => (/* binding */ Loop),
/* harmony export */   OffthreadVideo: () => (/* binding */ OffthreadVideo),
/* harmony export */   Sequence: () => (/* binding */ Sequence),
/* harmony export */   Series: () => (/* binding */ Series),
/* harmony export */   Still: () => (/* binding */ Still),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   Video: () => (/* binding */ Video),
/* harmony export */   cancelRender: () => (/* binding */ cancelRender),
/* harmony export */   continueRender: () => (/* binding */ continueRender),
/* harmony export */   delayRender: () => (/* binding */ delayRender),
/* harmony export */   getInputProps: () => (/* binding */ getInputProps),
/* harmony export */   getRemotionEnvironment: () => (/* binding */ getRemotionEnvironment),
/* harmony export */   getStaticFiles: () => (/* binding */ getStaticFiles),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   interpolateColors: () => (/* binding */ interpolateColors),
/* harmony export */   measureSpring: () => (/* binding */ measureSpring),
/* harmony export */   prefetch: () => (/* binding */ prefetch),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   registerRoot: () => (/* binding */ registerRoot),
/* harmony export */   spring: () => (/* binding */ spring),
/* harmony export */   staticFile: () => (/* binding */ staticFile),
/* harmony export */   useBufferState: () => (/* binding */ useBufferState),
/* harmony export */   useCurrentFrame: () => (/* binding */ useCurrentFrame),
/* harmony export */   useCurrentScale: () => (/* binding */ useCurrentScale),
/* harmony export */   useVideoConfig: () => (/* binding */ useVideoConfig),
/* harmony export */   watchStaticFile: () => (/* binding */ watchStaticFile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(961);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// src/_check-rsc.ts

if (typeof react__WEBPACK_IMPORTED_MODULE_0__.createContext !== "function") {
  const err = [
    'Remotion requires React.createContext, but it is "undefined".',
    'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
    "",
    "Before:",
    '  import {useCurrentFrame} from "remotion";',
    "",
    "After:",
    '  "use client";',
    '  import {useCurrentFrame} from "remotion";'
  ];
  throw new Error(err.join(`
`));
}

// src/Clipper.tsx
var Clipper = () => {
  throw new Error("<Clipper> has been removed as of Remotion v4.0.228. The native clipping APIs were experimental and subject to removal at any time. We removed them because they were sparingly used and made rendering often slower rather than faster.");
};

// src/enable-sequence-stack-traces.ts


// src/get-remotion-environment.ts
function getNodeEnvString() {
  return ["NOD", "E_EN", "V"].join("");
}
var getEnvString = () => {
  return ["e", "nv"].join("");
};
var getRemotionEnvironment = () => {
  const isPlayer = typeof window !== "undefined" && window.remotion_isPlayer;
  const isRendering = typeof window !== "undefined" && typeof window.process !== "undefined" && typeof window.process.env !== "undefined" && (window.process[getEnvString()][getNodeEnvString()] === "test" || window.process[getEnvString()][getNodeEnvString()] === "production" && typeof window !== "undefined" && typeof window.remotion_puppeteerTimeout !== "undefined");
  const isStudio = typeof window !== "undefined" && window.remotion_isStudio;
  const isReadOnlyStudio = typeof window !== "undefined" && window.remotion_isReadOnlyStudio;
  return {
    isStudio,
    isRendering,
    isPlayer,
    isReadOnlyStudio
  };
};

// src/enable-sequence-stack-traces.ts
var originalCreateElement = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
var componentsToAddStacksTo = [];
var enableSequenceStackTraces = () => {
  if (!getRemotionEnvironment().isStudio) {
    return;
  }
  const proxy = new Proxy(originalCreateElement, {
    apply(target, thisArg, argArray) {
      if (componentsToAddStacksTo.includes(argArray[0])) {
        const [first, props, ...rest] = argArray;
        const newProps = {
          ...props ?? {},
          stack: new Error().stack
        };
        return Reflect.apply(target, thisArg, [first, newProps, ...rest]);
      }
      return Reflect.apply(target, thisArg, argArray);
    }
  });
  react__WEBPACK_IMPORTED_MODULE_0__.createElement = proxy;
};
var addSequenceStackTraces = (component) => {
  componentsToAddStacksTo.push(component);
  enableSequenceStackTraces();
};

// src/is-player.tsx


var IsPlayerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var IsPlayerContextProvider = ({
  children
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IsPlayerContext.Provider, {
    value: true,
    children
  });
};
var useIsPlayer = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(IsPlayerContext);
};

// src/truthy.ts
function truthy(value) {
  return Boolean(value);
}

// src/version.ts
var VERSION = "4.0.321";

// src/multiple-versions-warning.ts
var checkMultipleRemotionVersions = () => {
  if (typeof globalThis === "undefined") {
    return;
  }
  const set = () => {
    globalThis.remotion_imported = VERSION;
    if (typeof window !== "undefined") {
      window.remotion_imported = VERSION;
    }
  };
  const alreadyImported = globalThis.remotion_imported || typeof window !== "undefined" && window.remotion_imported;
  if (alreadyImported) {
    if (alreadyImported === VERSION) {
      return;
    }
    if (typeof alreadyImported === "string" && alreadyImported.includes("webcodecs")) {
      set();
      return;
    }
    throw new TypeError(`\uD83D\uDEA8 Multiple versions of Remotion detected: ${[
      VERSION,
      typeof alreadyImported === "string" ? alreadyImported : "an older version"
    ].filter(truthy).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
  }
  set();
};

// src/Null.tsx
var Null = () => {
  throw new Error("<Null> has been removed as of Remotion v4.0.228. The native clipping APIs were experimental and subject to removal at any time. We removed them because they were sparingly used and made rendering often slower rather than faster.");
};

// src/Sequence.tsx


// src/AbsoluteFill.tsx


var hasTailwindClassName = ({
  className,
  classPrefix,
  type
}) => {
  if (!className) {
    return false;
  }
  if (type === "exact") {
    const split = className.split(" ");
    return classPrefix.some((token) => {
      return split.some((part) => {
        return part.trim() === token || part.trim().endsWith(`:${token}`) || part.trim().endsWith(`!${token}`);
      });
    });
  }
  return classPrefix.some((prefix) => {
    return className.startsWith(prefix) || className.includes(` ${prefix}`) || className.includes(`!${prefix}`) || className.includes(`:${prefix}`);
  });
};
var AbsoluteFillRefForwarding = (props, ref) => {
  const { style, ...other } = props;
  const actualStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      position: "absolute",
      top: hasTailwindClassName({
        className: other.className,
        classPrefix: ["top-", "inset-"],
        type: "prefix"
      }) ? undefined : 0,
      left: hasTailwindClassName({
        className: other.className,
        classPrefix: ["left-", "inset-"],
        type: "prefix"
      }) ? undefined : 0,
      right: hasTailwindClassName({
        className: other.className,
        classPrefix: ["right-", "inset-"],
        type: "prefix"
      }) ? undefined : 0,
      bottom: hasTailwindClassName({
        className: other.className,
        classPrefix: ["bottom-", "inset-"],
        type: "prefix"
      }) ? undefined : 0,
      width: hasTailwindClassName({
        className: other.className,
        classPrefix: ["w-"],
        type: "prefix"
      }) ? undefined : "100%",
      height: hasTailwindClassName({
        className: other.className,
        classPrefix: ["h-"],
        type: "prefix"
      }) ? undefined : "100%",
      display: hasTailwindClassName({
        className: other.className,
        classPrefix: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        type: "exact"
      }) ? undefined : "flex",
      flexDirection: hasTailwindClassName({
        className: other.className,
        classPrefix: [
          "flex-row",
          "flex-col",
          "flex-row-reverse",
          "flex-col-reverse"
        ],
        type: "exact"
      }) ? undefined : "column",
      ...style
    };
  }, [other.className, style]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ref,
    style: actualStyle,
    ...other
  });
};
var AbsoluteFill = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(AbsoluteFillRefForwarding);

// src/SequenceContext.tsx

var SequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

// src/SequenceManager.tsx


var SequenceManager = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  registerSequence: () => {
    throw new Error("SequenceManagerContext not initialized");
  },
  unregisterSequence: () => {
    throw new Error("SequenceManagerContext not initialized");
  },
  sequences: []
});
var SequenceVisibilityToggleContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  hidden: {},
  setHidden: () => {
    throw new Error("SequenceVisibilityToggle not initialized");
  }
});
var SequenceManagerProvider = ({ children }) => {
  const [sequences, setSequences] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [hidden, setHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const registerSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((seq) => {
    setSequences((seqs) => {
      return [...seqs, seq];
    });
  }, []);
  const unregisterSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((seq) => {
    setSequences((seqs) => seqs.filter((s) => s.id !== seq));
  }, []);
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      registerSequence,
      sequences,
      unregisterSequence
    };
  }, [registerSequence, sequences, unregisterSequence]);
  const hiddenContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      hidden,
      setHidden
    };
  }, [hidden]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SequenceManager.Provider, {
    value: sequenceContext,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SequenceVisibilityToggleContext.Provider, {
      value: hiddenContext,
      children
    })
  });
};

// src/nonce.ts

var NonceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  getNonce: () => 0,
  fastRefreshes: 0,
  manualRefreshes: 0
});
var SetNonceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  increaseManualRefreshes: () => {}
});
var useNonce = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NonceContext);
  const [nonce, setNonce] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => context.getNonce());
  const lastContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(context);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (lastContext.current === context) {
      return;
    }
    lastContext.current = context;
    setNonce(context.getNonce);
  }, [context]);
  return nonce;
};

// src/timeline-position-state.ts
var exports_timeline_position_state = {};
__export(exports_timeline_position_state, {
  useTimelineSetFrame: () => useTimelineSetFrame,
  useTimelinePosition: () => useTimelinePosition,
  usePlayingState: () => usePlayingState,
  persistCurrentFrame: () => persistCurrentFrame,
  getInitialFrameState: () => getInitialFrameState,
  getFrameForComposition: () => getFrameForComposition,
  TimelineContext: () => TimelineContext,
  SetTimelineContext: () => SetTimelineContext
});


// src/use-video.ts


// src/CompositionManagerContext.tsx

var CompositionManager = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  compositions: [],
  folders: [],
  currentCompositionMetadata: null,
  canvasContent: null
});
var CompositionSetters = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  registerComposition: () => {
    return;
  },
  unregisterComposition: () => {
    return;
  },
  registerFolder: () => {
    return;
  },
  unregisterFolder: () => {
    return;
  },
  setCanvasContent: () => {
    return;
  },
  updateCompositionDefaultProps: () => {
    return;
  },
  onlyRenderComposition: null
});

// src/ResolveCompositionConfig.tsx


// src/EditorProps.tsx


var EditorPropsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  props: {},
  updateProps: () => {
    throw new Error("Not implemented");
  },
  resetUnsaved: () => {
    throw new Error("Not implemented");
  }
});
var editorPropsProviderRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
var timeValueRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
var EditorPropsProvider = ({ children }) => {
  const [props, setProps] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
  const updateProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    defaultProps,
    id,
    newProps
  }) => {
    setProps((prev) => {
      return {
        ...prev,
        [id]: typeof newProps === "function" ? newProps(prev[id] ?? defaultProps) : newProps
      };
    });
  }, []);
  const resetUnsaved = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((compositionId) => {
    setProps((prev) => {
      if (prev[compositionId]) {
        const newProps = { ...prev };
        delete newProps[compositionId];
        return newProps;
      }
      return prev;
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(editorPropsProviderRef, () => {
    return {
      getProps: () => props,
      setProps
    };
  }, [props]);
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return { props, updateProps, resetUnsaved };
  }, [props, resetUnsaved, updateProps]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorPropsContext.Provider, {
    value: ctx,
    children
  });
};

// src/input-props-serialization.ts
var DATE_TOKEN = "remotion-date:";
var FILE_TOKEN = "remotion-file:";
var serializeJSONWithSpecialTypes = ({
  data,
  indent,
  staticBase
}) => {
  let customDateUsed = false;
  let customFileUsed = false;
  let mapUsed = false;
  let setUsed = false;
  try {
    const serializedString = JSON.stringify(data, function(key, value) {
      const item = this[key];
      if (item instanceof Date) {
        customDateUsed = true;
        return `${DATE_TOKEN}${item.toISOString()}`;
      }
      if (item instanceof Map) {
        mapUsed = true;
        return value;
      }
      if (item instanceof Set) {
        setUsed = true;
        return value;
      }
      if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
        customFileUsed = true;
        return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
      }
      return value;
    }, indent);
    return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
  } catch (err) {
    throw new Error("Could not serialize the passed input props to JSON: " + err.message);
  }
};
var deserializeJSONWithSpecialTypes = (data) => {
  return JSON.parse(data, (_, value) => {
    if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
      return new Date(value.replace(DATE_TOKEN, ""));
    }
    if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
      return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN, "")}`;
    }
    return value;
  });
};
var serializeThenDeserialize = (props) => {
  return deserializeJSONWithSpecialTypes(serializeJSONWithSpecialTypes({
    data: props,
    indent: 2,
    staticBase: window.remotion_staticBase
  }).serializedString);
};
var serializeThenDeserializeInStudio = (props) => {
  if (getRemotionEnvironment().isStudio) {
    return serializeThenDeserialize(props);
  }
  return props;
};

// src/config/input-props.ts
var didWarnSSRImport = false;
var warnOnceSSRImport = () => {
  if (didWarnSSRImport) {
    return;
  }
  didWarnSSRImport = true;
  console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object.");
  console.warn("To hide this warning, don't call this function on the server:");
  console.warn("  typeof window === 'undefined' ? {} : getInputProps()");
};
var getInputProps = () => {
  if (typeof window === "undefined") {
    warnOnceSSRImport();
    return {};
  }
  if (getRemotionEnvironment().isPlayer) {
    throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
  }
  const param = window.remotion_inputProps;
  if (!param) {
    return {};
  }
  const parsed = deserializeJSONWithSpecialTypes(param);
  return parsed;
};

// src/codec.ts
var validCodecs = [
  "h264",
  "h265",
  "vp8",
  "vp9",
  "mp3",
  "aac",
  "wav",
  "prores",
  "h264-mkv",
  "h264-ts",
  "gif"
];

// src/validation/validate-default-codec.ts
function validateDefaultCodec(defaultCodec, location) {
  if (typeof defaultCodec === "undefined") {
    return;
  }
  if (typeof defaultCodec !== "string") {
    throw new TypeError(`The "defaultCodec" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
  }
  if (!validCodecs.includes(defaultCodec)) {
    throw new Error(`The "defaultCodec" prop ${location} must be one of ${validCodecs.join(", ")}, but you passed ${defaultCodec}.`);
  }
}

// src/validation/validate-dimensions.ts
function validateDimension(amount, nameOfProp, location) {
  if (typeof amount !== "number") {
    throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
  }
  if (isNaN(amount)) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
  }
  if (!Number.isFinite(amount)) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
  }
  if (amount % 1 !== 0) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
  }
  if (amount <= 0) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
  }
}

// src/validation/validate-duration-in-frames.ts
function validateDurationInFrames(durationInFrames, options) {
  const { allowFloats, component } = options;
  if (typeof durationInFrames === "undefined") {
    throw new Error(`The "durationInFrames" prop ${component} is missing.`);
  }
  if (typeof durationInFrames !== "number") {
    throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
  }
  if (durationInFrames <= 0) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
  }
  if (!allowFloats && durationInFrames % 1 !== 0) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
  }
  if (!Number.isFinite(durationInFrames)) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
  }
}

// src/validation/validate-fps.ts
function validateFps(fps, location, isGif) {
  if (typeof fps !== "number") {
    throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
  }
  if (!Number.isFinite(fps)) {
    throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
  }
  if (isNaN(fps)) {
    throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
  }
  if (fps <= 0) {
    throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
  }
  if (isGif && fps > 50) {
    throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
  }
}

// src/resolve-video-config.ts
var validateCalculated = ({
  calculated,
  compositionId,
  compositionFps,
  compositionHeight,
  compositionWidth,
  compositionDurationInFrames
}) => {
  const calculateMetadataErrorLocation = `calculated by calculateMetadata() for the composition "${compositionId}"`;
  const defaultErrorLocation = `of the "<Composition />" component with the id "${compositionId}"`;
  const width = calculated?.width ?? compositionWidth ?? undefined;
  validateDimension(width, "width", calculated?.width ? calculateMetadataErrorLocation : defaultErrorLocation);
  const height = calculated?.height ?? compositionHeight ?? undefined;
  validateDimension(height, "height", calculated?.height ? calculateMetadataErrorLocation : defaultErrorLocation);
  const fps = calculated?.fps ?? compositionFps ?? null;
  validateFps(fps, calculated?.fps ? calculateMetadataErrorLocation : defaultErrorLocation, false);
  const durationInFrames = calculated?.durationInFrames ?? compositionDurationInFrames ?? null;
  validateDurationInFrames(durationInFrames, {
    allowFloats: false,
    component: `of the "<Composition />" component with the id "${compositionId}"`
  });
  const defaultCodec = calculated?.defaultCodec;
  validateDefaultCodec(defaultCodec, calculateMetadataErrorLocation);
  const defaultOutName = calculated?.defaultOutName;
  const defaultVideoImageFormat = calculated?.defaultVideoImageFormat;
  const defaultPixelFormat = calculated?.defaultPixelFormat;
  return {
    width,
    height,
    fps,
    durationInFrames,
    defaultCodec,
    defaultOutName,
    defaultVideoImageFormat,
    defaultPixelFormat
  };
};
var resolveVideoConfig = ({
  calculateMetadata,
  signal,
  defaultProps,
  originalProps,
  compositionId,
  compositionDurationInFrames,
  compositionFps,
  compositionHeight,
  compositionWidth
}) => {
  const calculatedProm = calculateMetadata ? calculateMetadata({
    defaultProps,
    props: originalProps,
    abortSignal: signal,
    compositionId
  }) : null;
  if (calculatedProm !== null && typeof calculatedProm === "object" && "then" in calculatedProm) {
    return calculatedProm.then((c) => {
      const {
        height,
        width,
        durationInFrames,
        fps,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat
      } = validateCalculated({
        calculated: c,
        compositionDurationInFrames,
        compositionFps,
        compositionHeight,
        compositionWidth,
        compositionId
      });
      return {
        width,
        height,
        fps,
        durationInFrames,
        id: compositionId,
        defaultProps: serializeThenDeserializeInStudio(defaultProps),
        props: serializeThenDeserializeInStudio(c.props ?? originalProps),
        defaultCodec: defaultCodec ?? null,
        defaultOutName: defaultOutName ?? null,
        defaultVideoImageFormat: defaultVideoImageFormat ?? null,
        defaultPixelFormat: defaultPixelFormat ?? null
      };
    });
  }
  const data = validateCalculated({
    calculated: calculatedProm,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionWidth,
    compositionId
  });
  if (calculatedProm === null) {
    return {
      ...data,
      id: compositionId,
      defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
      props: serializeThenDeserializeInStudio(originalProps),
      defaultCodec: null,
      defaultOutName: null,
      defaultVideoImageFormat: null,
      defaultPixelFormat: null
    };
  }
  return {
    ...data,
    id: compositionId,
    defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
    props: serializeThenDeserializeInStudio(calculatedProm.props ?? originalProps),
    defaultCodec: calculatedProm.defaultCodec ?? null,
    defaultOutName: calculatedProm.defaultOutName ?? null,
    defaultVideoImageFormat: calculatedProm.defaultVideoImageFormat ?? null,
    defaultPixelFormat: calculatedProm.defaultPixelFormat ?? null
  };
};
var resolveVideoConfigOrCatch = (params) => {
  try {
    const promiseOrReturnValue = resolveVideoConfig(params);
    return {
      type: "success",
      result: promiseOrReturnValue
    };
  } catch (err) {
    return {
      type: "error",
      error: err
    };
  }
};

// src/ResolveCompositionConfig.tsx

var ResolveCompositionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var resolveCompositionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
var needsResolution = (composition) => {
  return Boolean(composition.calculateMetadata);
};
var PROPS_UPDATED_EXTERNALLY = "remotion.propsUpdatedExternally";
var ResolveCompositionConfig = ({ children }) => {
  const [currentRenderModalComposition, setCurrentRenderModalComposition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const { compositions, canvasContent, currentCompositionMetadata } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionManager);
  const { fastRefreshes, manualRefreshes } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NonceContext);
  if (manualRefreshes) {}
  const selectedComposition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return compositions.find((c) => canvasContent && canvasContent.type === "composition" && canvasContent.compositionId === c.id);
  }, [canvasContent, compositions]);
  const renderModalComposition = compositions.find((c) => c.id === currentRenderModalComposition);
  const { props: allEditorProps } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EditorPropsContext);
  const inputProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return typeof window === "undefined" || getRemotionEnvironment().isPlayer ? {} : getInputProps() ?? {};
  }, []);
  const [resolvedConfigs, setResolvedConfigs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const selectedEditorProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return selectedComposition ? allEditorProps[selectedComposition.id] ?? {} : {};
  }, [allEditorProps, selectedComposition]);
  const renderModalProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return renderModalComposition ? allEditorProps[renderModalComposition.id] ?? {} : {};
  }, [allEditorProps, renderModalComposition]);
  const hasResolution = Boolean(currentCompositionMetadata);
  const doResolution = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    calculateMetadata,
    combinedProps,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionId,
    compositionWidth,
    defaultProps
  }) => {
    const controller = new AbortController;
    if (hasResolution) {
      return controller;
    }
    const { signal } = controller;
    const result = resolveVideoConfigOrCatch({
      compositionId,
      calculateMetadata,
      originalProps: combinedProps,
      signal,
      defaultProps,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionWidth
    });
    if (result.type === "error") {
      setResolvedConfigs((r) => ({
        ...r,
        [compositionId]: {
          type: "error",
          error: result.error
        }
      }));
      return controller;
    }
    const promOrNot = result.result;
    if (typeof promOrNot === "object" && "then" in promOrNot) {
      setResolvedConfigs((r) => {
        const prev = r[compositionId];
        if (prev?.type === "success" || prev?.type === "success-and-refreshing") {
          return {
            ...r,
            [compositionId]: {
              type: "success-and-refreshing",
              result: prev.result
            }
          };
        }
        return {
          ...r,
          [compositionId]: {
            type: "loading"
          }
        };
      });
      promOrNot.then((c) => {
        if (controller.signal.aborted) {
          return;
        }
        setResolvedConfigs((r) => ({
          ...r,
          [compositionId]: {
            type: "success",
            result: c
          }
        }));
      }).catch((err) => {
        if (controller.signal.aborted) {
          return;
        }
        setResolvedConfigs((r) => ({
          ...r,
          [compositionId]: {
            type: "error",
            error: err
          }
        }));
      });
    } else {
      setResolvedConfigs((r) => ({
        ...r,
        [compositionId]: {
          type: "success",
          result: promOrNot
        }
      }));
    }
    return controller;
  }, [hasResolution]);
  const currentComposition = canvasContent?.type === "composition" ? canvasContent.compositionId : null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(resolveCompositionsRef, () => {
    return {
      setCurrentRenderModalComposition: (id) => {
        setCurrentRenderModalComposition(id);
      },
      reloadCurrentlySelectedComposition: () => {
        if (!currentComposition) {
          return;
        }
        const composition = compositions.find((c) => c.id === currentComposition);
        if (!composition) {
          throw new Error(`Could not find composition with id ${currentComposition}`);
        }
        const editorProps = allEditorProps[currentComposition] ?? {};
        const defaultProps = {
          ...composition.defaultProps ?? {},
          ...editorProps ?? {}
        };
        const props = {
          ...defaultProps,
          ...inputProps ?? {}
        };
        doResolution({
          defaultProps,
          calculateMetadata: composition.calculateMetadata,
          combinedProps: props,
          compositionDurationInFrames: composition.durationInFrames ?? null,
          compositionFps: composition.fps ?? null,
          compositionHeight: composition.height ?? null,
          compositionWidth: composition.width ?? null,
          compositionId: composition.id
        });
      }
    };
  }, [
    allEditorProps,
    compositions,
    currentComposition,
    doResolution,
    inputProps
  ]);
  const isTheSame = selectedComposition?.id === renderModalComposition?.id;
  const currentDefaultProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      ...selectedComposition?.defaultProps ?? {},
      ...selectedEditorProps ?? {}
    };
  }, [selectedComposition?.defaultProps, selectedEditorProps]);
  const originalProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      ...currentDefaultProps,
      ...inputProps ?? {}
    };
  }, [currentDefaultProps, inputProps]);
  const canResolve = selectedComposition && needsResolution(selectedComposition);
  const shouldIgnoreUpdate = typeof window !== "undefined" && window.remotion_ignoreFastRefreshUpdate && fastRefreshes <= window.remotion_ignoreFastRefreshUpdate;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldIgnoreUpdate) {
      return;
    }
    if (canResolve) {
      const controller = doResolution({
        calculateMetadata: selectedComposition.calculateMetadata,
        combinedProps: originalProps,
        compositionDurationInFrames: selectedComposition.durationInFrames ?? null,
        compositionFps: selectedComposition.fps ?? null,
        compositionHeight: selectedComposition.height ?? null,
        compositionWidth: selectedComposition.width ?? null,
        defaultProps: currentDefaultProps,
        compositionId: selectedComposition.id
      });
      return () => {
        controller.abort();
      };
    }
  }, [
    canResolve,
    currentDefaultProps,
    doResolution,
    originalProps,
    selectedComposition?.calculateMetadata,
    selectedComposition?.durationInFrames,
    selectedComposition?.fps,
    selectedComposition?.height,
    selectedComposition?.id,
    selectedComposition?.width,
    shouldIgnoreUpdate
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (renderModalComposition && !isTheSame) {
      const combinedProps = {
        ...renderModalComposition.defaultProps ?? {},
        ...renderModalProps ?? {},
        ...inputProps ?? {}
      };
      const controller = doResolution({
        calculateMetadata: renderModalComposition.calculateMetadata,
        compositionDurationInFrames: renderModalComposition.durationInFrames ?? null,
        compositionFps: renderModalComposition.fps ?? null,
        compositionHeight: renderModalComposition.height ?? null,
        compositionId: renderModalComposition.id,
        compositionWidth: renderModalComposition.width ?? null,
        defaultProps: currentDefaultProps,
        combinedProps
      });
      return () => {
        controller.abort();
      };
    }
  }, [
    currentDefaultProps,
    doResolution,
    inputProps,
    isTheSame,
    renderModalComposition,
    renderModalProps
  ]);
  const resolvedConfigsIncludingStaticOnes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const staticComps = compositions.filter((c) => {
      return c.calculateMetadata === null;
    });
    return {
      ...resolvedConfigs,
      ...staticComps.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.id]: {
            type: "success",
            result: { ...curr, defaultProps: curr.defaultProps ?? {} }
          }
        };
      }, {})
    };
  }, [compositions, resolvedConfigs]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ResolveCompositionContext.Provider, {
    value: resolvedConfigsIncludingStaticOnes,
    children
  });
};
var useResolvedVideoConfig = (preferredCompositionId) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ResolveCompositionContext);
  const { props: allEditorProps } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EditorPropsContext);
  const { compositions, canvasContent, currentCompositionMetadata } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionManager);
  const currentComposition = canvasContent?.type === "composition" ? canvasContent.compositionId : null;
  const compositionId = preferredCompositionId ?? currentComposition;
  const composition = compositions.find((c) => c.id === compositionId);
  const selectedEditorProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return composition ? allEditorProps[composition.id] ?? {} : {};
  }, [allEditorProps, composition]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!composition) {
      return null;
    }
    if (currentCompositionMetadata) {
      return {
        type: "success",
        result: {
          ...currentCompositionMetadata,
          id: composition.id,
          defaultProps: composition.defaultProps ?? {}
        }
      };
    }
    if (!needsResolution(composition)) {
      validateDurationInFrames(composition.durationInFrames, {
        allowFloats: false,
        component: `in <Composition id="${composition.id}">`
      });
      validateFps(composition.fps, `in <Composition id="${composition.id}">`, false);
      validateDimension(composition.width, "width", `in <Composition id="${composition.id}">`);
      validateDimension(composition.height, "height", `in <Composition id="${composition.id}">`);
      return {
        type: "success",
        result: {
          width: composition.width,
          height: composition.height,
          fps: composition.fps,
          id: composition.id,
          durationInFrames: composition.durationInFrames,
          defaultProps: composition.defaultProps ?? {},
          props: {
            ...composition.defaultProps ?? {},
            ...selectedEditorProps ?? {},
            ...typeof window === "undefined" || getRemotionEnvironment().isPlayer ? {} : getInputProps() ?? {}
          },
          defaultCodec: null,
          defaultOutName: null,
          defaultVideoImageFormat: null,
          defaultPixelFormat: null
        }
      };
    }
    if (!context[composition.id]) {
      return null;
    }
    return context[composition.id];
  }, [composition, context, currentCompositionMetadata, selectedEditorProps]);
};

// src/use-video.ts
var useVideo = () => {
  const { canvasContent, compositions, currentCompositionMetadata } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionManager);
  const selected = compositions.find((c) => {
    return canvasContent?.type === "composition" && c.id === canvasContent.compositionId;
  });
  const resolved = useResolvedVideoConfig(selected?.id ?? null);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!resolved) {
      return null;
    }
    if (resolved.type === "error") {
      return null;
    }
    if (resolved.type === "loading") {
      return null;
    }
    if (!selected) {
      return null;
    }
    return {
      ...resolved.result,
      defaultProps: selected.defaultProps ?? {},
      id: selected.id,
      ...currentCompositionMetadata ?? {},
      component: selected.component
    };
  }, [currentCompositionMetadata, resolved, selected]);
};

// src/timeline-position-state.ts
var TimelineContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  frame: {},
  playing: false,
  playbackRate: 1,
  rootId: "",
  imperativePlaying: {
    current: false
  },
  setPlaybackRate: () => {
    throw new Error("default");
  },
  audioAndVideoTags: { current: [] }
});
var SetTimelineContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  setFrame: () => {
    throw new Error("default");
  },
  setPlaying: () => {
    throw new Error("default");
  }
});
var makeKey = () => {
  return `remotion.time-all`;
};
var persistCurrentFrame = (time) => {
  localStorage.setItem(makeKey(), JSON.stringify(time));
};
var getInitialFrameState = () => {
  const item = localStorage.getItem(makeKey()) ?? "{}";
  const obj = JSON.parse(item);
  return obj;
};
var getFrameForComposition = (composition) => {
  const item = localStorage.getItem(makeKey()) ?? "{}";
  const obj = JSON.parse(item);
  if (obj[composition] !== undefined) {
    return Number(obj[composition]);
  }
  if (typeof window === "undefined") {
    return 0;
  }
  return window.remotion_initialFrame ?? 0;
};
var useTimelinePosition = () => {
  const videoConfig = useVideo();
  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  if (!videoConfig) {
    return typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0;
  }
  const unclamped = state.frame[videoConfig.id] ?? (getRemotionEnvironment().isPlayer ? 0 : getFrameForComposition(videoConfig.id));
  return Math.min(videoConfig.durationInFrames - 1, unclamped);
};
var useTimelineSetFrame = () => {
  const { setFrame } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SetTimelineContext);
  return setFrame;
};
var usePlayingState = () => {
  const { playing, imperativePlaying } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  const { setPlaying } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SetTimelineContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [playing, setPlaying, imperativePlaying], [imperativePlaying, playing, setPlaying]);
};

// src/use-video-config.ts


// src/CanUseRemotionHooks.tsx


var CanUseRemotionHooks = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var CanUseRemotionHooksProvider = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CanUseRemotionHooks.Provider, {
    value: true,
    children
  });
};

// src/use-unsafe-video-config.ts

var useUnsafeVideoConfig = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const ctxWidth = context?.width ?? null;
  const ctxHeight = context?.height ?? null;
  const ctxDuration = context?.durationInFrames ?? null;
  const video = useVideo();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!video) {
      return null;
    }
    const {
      id,
      durationInFrames,
      fps,
      height,
      width,
      defaultProps,
      props,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat
    } = video;
    return {
      id,
      width: ctxWidth ?? width,
      height: ctxHeight ?? height,
      fps,
      durationInFrames: ctxDuration ?? durationInFrames,
      defaultProps,
      props,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat
    };
  }, [ctxDuration, ctxHeight, ctxWidth, video]);
};

// src/use-video-config.ts
var useVideoConfig = () => {
  const videoConfig = useUnsafeVideoConfig();
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CanUseRemotionHooks);
  const isPlayer = useIsPlayer();
  if (!videoConfig) {
    if (typeof window !== "undefined" && window.remotion_isPlayer || isPlayer) {
      throw new Error([
        "No video config found. Likely reasons:",
        "- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
        "- You have multiple versions of Remotion installed which causes the React context to get lost."
      ].join("-"));
    }
    throw new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
  }
  if (!context) {
    throw new Error("Called useVideoConfig() outside a Remotion composition.");
  }
  return videoConfig;
};

// src/freeze.tsx


// src/use-current-frame.ts

var useCurrentFrame = () => {
  const canUseRemotionHooks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CanUseRemotionHooks);
  if (!canUseRemotionHooks) {
    if (getRemotionEnvironment().isPlayer) {
      throw new Error(`useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples`);
    }
    throw new Error(`useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions`);
  }
  const frame = useTimelinePosition();
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const contextOffset = context ? context.cumulatedFrom + context.relativeFrom : 0;
  return frame - contextOffset;
};

// src/freeze.tsx

var Freeze = ({
  frame: frameToFreeze,
  children,
  active = true
}) => {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();
  if (typeof frameToFreeze === "undefined") {
    throw new Error(`The <Freeze /> component requires a 'frame' prop, but none was passed.`);
  }
  if (typeof frameToFreeze !== "number") {
    throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof frameToFreeze}`);
  }
  if (Number.isNaN(frameToFreeze)) {
    throw new Error(`The 'frame' prop of <Freeze /> must be a real number, but it is NaN.`);
  }
  if (!Number.isFinite(frameToFreeze)) {
    throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${frameToFreeze}.`);
  }
  const isActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof active === "boolean") {
      return active;
    }
    if (typeof active === "function") {
      return active(frame);
    }
  }, [active, frame]);
  const timelineContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const relativeFrom = sequenceContext?.relativeFrom ?? 0;
  const timelineValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isActive) {
      return timelineContext;
    }
    return {
      ...timelineContext,
      playing: false,
      imperativePlaying: {
        current: false
      },
      frame: {
        [videoConfig.id]: frameToFreeze + relativeFrom
      }
    };
  }, [isActive, timelineContext, videoConfig.id, frameToFreeze, relativeFrom]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimelineContext.Provider, {
    value: timelineValue,
    children
  });
};

// src/Sequence.tsx

var RegularSequenceRefForwardingFunction = ({
  from = 0,
  durationInFrames = Infinity,
  children,
  name,
  height,
  width,
  showInTimeline = true,
  _remotionInternalLoopDisplay: loopDisplay,
  _remotionInternalStack: stack,
  _remotionInternalPremountDisplay: premountDisplay,
  ...other
}, ref) => {
  const { layout = "absolute-fill" } = other;
  const [id] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => String(Math.random()));
  const parentSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const { rootId } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  const cumulatedFrom = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
  const nonce = useNonce();
  if (layout !== "absolute-fill" && layout !== "none") {
    throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${layout}`);
  }
  if (layout === "none" && typeof other.style !== "undefined") {
    throw new TypeError('If layout="none", you may not pass a style.');
  }
  if (typeof durationInFrames !== "number") {
    throw new TypeError(`You passed to durationInFrames an argument of type ${typeof durationInFrames}, but it must be a number.`);
  }
  if (durationInFrames <= 0) {
    throw new TypeError(`durationInFrames must be positive, but got ${durationInFrames}`);
  }
  if (typeof from !== "number") {
    throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof from}, but it must be a number.`);
  }
  if (!Number.isFinite(from)) {
    throw new TypeError(`The "from" prop of a sequence must be finite, but got ${from}.`);
  }
  const absoluteFrame = useTimelinePosition();
  const videoConfig = useVideoConfig();
  const parentSequenceDuration = parentSequence ? Math.min(parentSequence.durationInFrames - from, durationInFrames) : durationInFrames;
  const actualDurationInFrames = Math.max(0, Math.min(videoConfig.durationInFrames - from, parentSequenceDuration));
  const { registerSequence, unregisterSequence } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceManager);
  const { hidden } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceVisibilityToggleContext);
  const premounting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return parentSequence?.premounting || Boolean(other._remotionInternalIsPremounting);
  }, [other._remotionInternalIsPremounting, parentSequence?.premounting]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      cumulatedFrom,
      relativeFrom: from,
      durationInFrames: actualDurationInFrames,
      parentFrom: parentSequence?.relativeFrom ?? 0,
      id,
      height: height ?? parentSequence?.height ?? null,
      width: width ?? parentSequence?.width ?? null,
      premounting
    };
  }, [
    cumulatedFrom,
    from,
    actualDurationInFrames,
    parentSequence,
    id,
    height,
    width,
    premounting
  ]);
  const timelineClipName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return name ?? "";
  }, [name]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!getRemotionEnvironment().isStudio) {
      return;
    }
    registerSequence({
      from,
      duration: actualDurationInFrames,
      id,
      displayName: timelineClipName,
      parent: parentSequence?.id ?? null,
      type: "sequence",
      rootId,
      showInTimeline,
      nonce,
      loopDisplay,
      stack: stack ?? null,
      premountDisplay: premountDisplay ?? null
    });
    return () => {
      unregisterSequence(id);
    };
  }, [
    durationInFrames,
    id,
    name,
    registerSequence,
    timelineClipName,
    unregisterSequence,
    parentSequence?.id,
    actualDurationInFrames,
    rootId,
    from,
    showInTimeline,
    nonce,
    loopDisplay,
    stack,
    premountDisplay
  ]);
  const endThreshold = Math.ceil(cumulatedFrom + from + durationInFrames - 1);
  const content = absoluteFrame < cumulatedFrom + from ? null : absoluteFrame > endThreshold ? null : children;
  const styleIfThere = other.layout === "none" ? undefined : other.style;
  const defaultStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      flexDirection: undefined,
      ...width ? { width } : {},
      ...height ? { height } : {},
      ...styleIfThere ?? {}
    };
  }, [height, styleIfThere, width]);
  if (ref !== null && layout === "none") {
    throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
  }
  const isSequenceHidden = hidden[id] ?? false;
  if (isSequenceHidden) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SequenceContext.Provider, {
    value: contextValue,
    children: content === null ? null : other.layout === "none" ? content : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AbsoluteFill, {
      ref,
      style: defaultStyle,
      className: other.className,
      children: content
    })
  });
};
var RegularSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(RegularSequenceRefForwardingFunction);
var PremountedSequenceRefForwardingFunction = (props, ref) => {
  const frame = useCurrentFrame();
  if (props.layout === "none") {
    throw new Error('`<Sequence>` with `premountFor` prop does not support layout="none"');
  }
  const {
    style: passedStyle,
    from = 0,
    premountFor = 0,
    styleWhilePremounted,
    ...otherProps
  } = props;
  const premountingActive = frame < from && frame >= from - premountFor;
  const style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      ...passedStyle,
      opacity: premountingActive ? 0 : 1,
      pointerEvents: premountingActive ? "none" : passedStyle?.pointerEvents ?? undefined,
      ...premountingActive ? styleWhilePremounted : {}
    };
  }, [passedStyle, premountingActive, styleWhilePremounted]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Freeze, {
    frame: from,
    active: premountingActive,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
      ref,
      from,
      style,
      _remotionInternalPremountDisplay: premountFor,
      _remotionInternalIsPremounting: premountingActive,
      ...otherProps
    })
  });
};
var PremountedSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(PremountedSequenceRefForwardingFunction);
var SequenceRefForwardingFunction = (props, ref) => {
  if (props.layout !== "none" && props.premountFor && !getRemotionEnvironment().isRendering) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PremountedSequence, {
      ...props,
      ref
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RegularSequence, {
    ...props,
    ref
  });
};
var Sequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(SequenceRefForwardingFunction);
// src/animated-image/AnimatedImage.tsx


// src/cancel-render.ts
var isErrorLike = (err) => {
  if (err instanceof Error) {
    return true;
  }
  if (err === null) {
    return false;
  }
  if (typeof err !== "object") {
    return false;
  }
  if (!("stack" in err)) {
    return false;
  }
  if (typeof err.stack !== "string") {
    return false;
  }
  if (!("message" in err)) {
    return false;
  }
  if (typeof err.message !== "string") {
    return false;
  }
  return true;
};
function cancelRender(err) {
  let error;
  if (isErrorLike(err)) {
    error = err;
    if (!error.stack) {
      error.stack = new Error(error.message).stack;
    }
  } else if (typeof err === "string") {
    error = Error(err);
  } else {
    error = Error("Rendering was cancelled");
  }
  window.remotion_cancelledError = error.stack;
  throw error;
}

// src/log.ts
var logLevels = ["trace", "verbose", "info", "warn", "error"];
var getNumberForLogLevel = (level) => {
  return logLevels.indexOf(level);
};
var isEqualOrBelowLogLevel = (currentLevel, level) => {
  return getNumberForLogLevel(currentLevel) <= getNumberForLogLevel(level);
};
var Log = {
  trace: (logLevel, ...args) => {
    if (isEqualOrBelowLogLevel(logLevel, "trace")) {
      return console.log(...args);
    }
  },
  verbose: (logLevel, ...args) => {
    if (isEqualOrBelowLogLevel(logLevel, "verbose")) {
      return console.log(...args);
    }
  },
  info: (logLevel, ...args) => {
    if (isEqualOrBelowLogLevel(logLevel, "info")) {
      return console.log(...args);
    }
  },
  warn: (logLevel, ...args) => {
    if (isEqualOrBelowLogLevel(logLevel, "warn")) {
      return console.warn(...args);
    }
  },
  error: (...args) => {
    return console.error(...args);
  }
};

// src/delay-render.ts
if (typeof window !== "undefined") {
  window.remotion_renderReady = false;
}
var handles = [];
if (typeof window !== "undefined") {
  window.remotion_delayRenderTimeouts = {};
}
var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";
var defaultTimeout = 30000;
var delayRender = (label, options) => {
  if (typeof label !== "string" && typeof label !== "undefined") {
    throw new Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(label));
  }
  const handle = Math.random();
  handles.push(handle);
  const called = Error().stack?.replace(/^Error/g, "") ?? "";
  if (getRemotionEnvironment().isRendering) {
    const timeoutToUse = (options?.timeoutInMilliseconds ?? (typeof window === "undefined" ? defaultTimeout : window.remotion_puppeteerTimeout ?? defaultTimeout)) - 2000;
    if (typeof window !== "undefined") {
      const retriesLeft = (options?.retries ?? 0) - (window.remotion_attempt - 1);
      window.remotion_delayRenderTimeouts[handle] = {
        label: label ?? null,
        startTime: Date.now(),
        timeout: setTimeout(() => {
          const message = [
            `A delayRender()`,
            label ? `"${label}"` : null,
            `was called but not cleared after ${timeoutToUse}ms. See https://remotion.dev/docs/timeout for help.`,
            retriesLeft > 0 ? DELAY_RENDER_RETRIES_LEFT + retriesLeft : null,
            retriesLeft > 0 ? DELAY_RENDER_RETRY_TOKEN : null,
            DELAY_RENDER_CALLSTACK_TOKEN,
            called
          ].filter(truthy).join(" ");
          cancelRender(Error(message));
        }, timeoutToUse)
      };
    }
  }
  if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
  }
  return handle;
};
var continueRender = (handle) => {
  if (typeof handle === "undefined") {
    throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
  }
  if (typeof handle !== "number") {
    throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(handle));
  }
  handles = handles.filter((h) => {
    if (h === handle) {
      if (getRemotionEnvironment().isRendering) {
        if (!window.remotion_delayRenderTimeouts[handle]) {
          return false;
        }
        const { label, startTime, timeout } = window.remotion_delayRenderTimeouts[handle];
        clearTimeout(timeout);
        const message = [
          label ? `delayRender() "${label}"` : "A delayRender()",
          DELAY_RENDER_CLEAR_TOKEN,
          `${Date.now() - startTime}ms`
        ].filter(truthy).join(" ");
        Log.verbose(window.remotion_logLevel, message);
        delete window.remotion_delayRenderTimeouts[handle];
      }
      return false;
    }
    return true;
  });
  if (handles.length === 0 && typeof window !== "undefined") {
    window.remotion_renderReady = true;
  }
};

// src/animated-image/canvas.tsx


var calcArgs = (fit, frameSize, canvasSize) => {
  switch (fit) {
    case "fill": {
      return [
        0,
        0,
        frameSize.width,
        frameSize.height,
        0,
        0,
        canvasSize.width,
        canvasSize.height
      ];
    }
    case "contain": {
      const ratio = Math.min(canvasSize.width / frameSize.width, canvasSize.height / frameSize.height);
      const centerX = (canvasSize.width - frameSize.width * ratio) / 2;
      const centerY = (canvasSize.height - frameSize.height * ratio) / 2;
      return [
        0,
        0,
        frameSize.width,
        frameSize.height,
        centerX,
        centerY,
        frameSize.width * ratio,
        frameSize.height * ratio
      ];
    }
    case "cover": {
      const ratio = Math.max(canvasSize.width / frameSize.width, canvasSize.height / frameSize.height);
      const centerX = (canvasSize.width - frameSize.width * ratio) / 2;
      const centerY = (canvasSize.height - frameSize.height * ratio) / 2;
      return [
        0,
        0,
        frameSize.width,
        frameSize.height,
        centerX,
        centerY,
        frameSize.width * ratio,
        frameSize.height * ratio
      ];
    }
    default:
      throw new Error("Unknown fit: " + fit);
  }
};
var CanvasRefForwardingFunction = ({ width, height, fit, className, style }, ref) => {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const draw = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((imageData) => {
    const canvas = canvasRef.current;
    const canvasWidth = width ?? imageData.displayWidth;
    const canvasHeight = height ?? imageData.displayHeight;
    if (!canvas) {
      throw new Error("Canvas ref is not set");
    }
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get 2d context");
    }
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.drawImage(imageData, ...calcArgs(fit, {
      height: imageData.displayHeight,
      width: imageData.displayWidth
    }, {
      width: canvasWidth,
      height: canvasHeight
    }));
  }, [fit, height, width]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
    return {
      draw,
      getCanvas: () => {
        if (!canvasRef.current) {
          throw new Error("Canvas ref is not set");
        }
        return canvasRef.current;
      },
      clear: () => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) {
          throw new Error("Could not get 2d context");
        }
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    };
  }, [draw]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("canvas", {
    ref: canvasRef,
    className,
    style
  });
};
var Canvas = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CanvasRefForwardingFunction);

// src/animated-image/decode-image.ts
var CACHE_SIZE = 5;
var getActualTime = ({
  loopBehavior,
  durationFound,
  timeInSec
}) => {
  return loopBehavior === "loop" ? durationFound ? timeInSec % durationFound : timeInSec : Math.min(timeInSec, durationFound || Infinity);
};
var decodeImage = async ({
  resolvedSrc,
  signal,
  currentTime,
  initialLoopBehavior
}) => {
  if (typeof ImageDecoder === "undefined") {
    throw new Error("Your browser does not support the WebCodecs ImageDecoder API.");
  }
  const res = await fetch(resolvedSrc, { signal });
  const { body } = res;
  if (!body) {
    throw new Error("Got no body");
  }
  const decoder = new ImageDecoder({
    data: body,
    type: res.headers.get("Content-Type") || "image/gif"
  });
  await decoder.completed;
  const { selectedTrack } = decoder.tracks;
  if (!selectedTrack) {
    throw new Error("No selected track");
  }
  const cache = [];
  let durationFound = null;
  const getFrameByIndex = async (frameIndex) => {
    const foundInCache = cache.find((c) => c.frameIndex === frameIndex);
    if (foundInCache && foundInCache.frame) {
      return foundInCache;
    }
    const frame = await decoder.decode({
      frameIndex,
      completeFramesOnly: true
    });
    if (foundInCache) {
      foundInCache.frame = frame.image;
    } else {
      cache.push({
        frame: frame.image,
        frameIndex,
        timeInSeconds: frame.image.timestamp / 1e6
      });
    }
    return {
      frame: frame.image,
      frameIndex,
      timeInSeconds: frame.image.timestamp / 1e6
    };
  };
  const clearCache = (closeToTimeInSec) => {
    const itemsInCache = cache.filter((c) => c.frame);
    const sortByClosestToCurrentTime = itemsInCache.sort((a, b) => {
      const aDiff = Math.abs(a.timeInSeconds - closeToTimeInSec);
      const bDiff = Math.abs(b.timeInSeconds - closeToTimeInSec);
      return aDiff - bDiff;
    });
    for (let i = 0;i < sortByClosestToCurrentTime.length; i++) {
      if (i < CACHE_SIZE) {
        continue;
      }
      const item = sortByClosestToCurrentTime[i];
      item.frame = null;
    }
  };
  const ensureFrameBeforeAndAfter = async ({
    timeInSec,
    loopBehavior
  }) => {
    const actualTimeInSec = getActualTime({
      durationFound,
      loopBehavior,
      timeInSec
    });
    const framesBefore = cache.filter((c) => c.timeInSeconds <= actualTimeInSec);
    const biggestIndex = framesBefore.map((c) => c.frameIndex).reduce((a, b) => Math.max(a, b), 0);
    let i = biggestIndex;
    while (true) {
      const f = await getFrameByIndex(i);
      i++;
      if (!f.frame) {
        throw new Error("No frame found");
      }
      if (!f.frame.duration) {
        break;
      }
      if (i === selectedTrack.frameCount && durationFound === null) {
        const duration = (f.frame.timestamp + f.frame.duration) / 1e6;
        durationFound = duration;
      }
      if (f.timeInSeconds > actualTimeInSec || i === selectedTrack.frameCount) {
        break;
      }
    }
    if (selectedTrack.frameCount - biggestIndex < 3 && loopBehavior === "loop") {
      await getFrameByIndex(0);
    }
    clearCache(actualTimeInSec);
  };
  await ensureFrameBeforeAndAfter({
    timeInSec: currentTime,
    loopBehavior: initialLoopBehavior
  });
  await ensureFrameBeforeAndAfter({
    timeInSec: currentTime,
    loopBehavior: initialLoopBehavior
  });
  const getFrame = async (timeInSec, loopBehavior) => {
    if (durationFound !== null && timeInSec > durationFound && loopBehavior === "clear-after-finish") {
      return null;
    }
    const actualTimeInSec = getActualTime({
      loopBehavior,
      durationFound,
      timeInSec
    });
    await ensureFrameBeforeAndAfter({ timeInSec: actualTimeInSec, loopBehavior });
    const itemsInCache = cache.filter((c) => c.frame);
    const closest = itemsInCache.reduce((a, b) => {
      const aDiff = Math.abs(a.timeInSeconds - actualTimeInSec);
      const bDiff = Math.abs(b.timeInSeconds - actualTimeInSec);
      return aDiff < bDiff ? a : b;
    });
    if (!closest.frame) {
      throw new Error("No frame found");
    }
    return closest;
  };
  return {
    getFrame,
    frameCount: selectedTrack.frameCount
  };
};

// src/animated-image/resolve-image-source.tsx
var resolveAnimatedImageSource = (src) => {
  if (typeof window === "undefined") {
    return src;
  }
  return new URL(src, window.origin).href;
};

// src/animated-image/AnimatedImage.tsx

var AnimatedImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  src,
  width,
  height,
  onError,
  loopBehavior = "loop",
  playbackRate = 1,
  fit = "fill",
  ...props
}, canvasRef) => {
  const mountState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({ isMounted: true });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = mountState;
    current.isMounted = true;
    return () => {
      current.isMounted = false;
    };
  }, []);
  const resolvedSrc = resolveAnimatedImageSource(src);
  const [imageDecoder, setImageDecoder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [decodeHandle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => delayRender(`Rendering <AnimatedImage/> with src="${resolvedSrc}"`));
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / playbackRate / fps;
  const currentTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(currentTime);
  currentTimeRef.current = currentTime;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(canvasRef, () => {
    const c = ref.current?.getCanvas();
    if (!c) {
      throw new Error("Canvas ref is not set");
    }
    return c;
  }, []);
  const [initialLoopBehavior] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => loopBehavior);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const controller = new AbortController;
    decodeImage({
      resolvedSrc,
      signal: controller.signal,
      currentTime: currentTimeRef.current,
      initialLoopBehavior
    }).then((d) => {
      setImageDecoder(d);
      continueRender(decodeHandle);
    }).catch((err) => {
      if (err.name === "AbortError") {
        continueRender(decodeHandle);
        return;
      }
      if (onError) {
        onError?.(err);
        continueRender(decodeHandle);
      } else {
        cancelRender(err);
      }
    });
    return () => {
      controller.abort();
    };
  }, [resolvedSrc, decodeHandle, onError, initialLoopBehavior]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!imageDecoder) {
      return;
    }
    const delay = delayRender(`Rendering frame at ${currentTime} of <AnimatedImage src="${src}"/>`);
    imageDecoder.getFrame(currentTime, loopBehavior).then((videoFrame) => {
      if (mountState.current.isMounted) {
        if (videoFrame === null) {
          ref.current?.clear();
        } else {
          ref.current?.draw(videoFrame.frame);
        }
      }
      continueRender(delay);
    }).catch((err) => {
      if (onError) {
        onError(err);
        continueRender(delay);
      } else {
        cancelRender(err);
      }
    });
  }, [currentTime, imageDecoder, loopBehavior, onError, src]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas, {
    ref,
    width,
    height,
    fit,
    ...props
  });
});
// src/Artifact.tsx


// src/RenderAssetManager.tsx


// src/validation/validate-artifact.ts
var validateArtifactFilename = (filename) => {
  if (typeof filename !== "string") {
    throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof filename}`);
  }
  if (filename.trim() === "") {
    throw new Error("The `filename` must not be empty");
  }
  if (!filename.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) {
    throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
  }
};
var validateContent = (content) => {
  if (typeof content !== "string" && !(content instanceof Uint8Array)) {
    throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof content}`);
  }
  if (typeof content === "string" && content.trim() === "") {
    throw new Error("The `content` must not be empty");
  }
};
var validateRenderAsset = (artifact) => {
  if (artifact.type !== "artifact") {
    return;
  }
  validateArtifactFilename(artifact.filename);
  if (artifact.contentType === "thumbnail") {
    return;
  }
  validateContent(artifact.content);
};

// src/RenderAssetManager.tsx

var RenderAssetManager = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  registerRenderAsset: () => {
    return;
  },
  unregisterRenderAsset: () => {
    return;
  },
  renderAssets: []
});
var RenderAssetManagerProvider = ({ children }) => {
  const [renderAssets, setRenderAssets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const registerRenderAsset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((renderAsset) => {
    validateRenderAsset(renderAsset);
    setRenderAssets((assets) => {
      return [...assets, renderAsset];
    });
  }, []);
  const unregisterRenderAsset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id) => {
    setRenderAssets((assts) => {
      return assts.filter((a) => a.id !== id);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (typeof window !== "undefined") {
      window.remotion_collectAssets = () => {
        setRenderAssets([]);
        return renderAssets;
      };
    }
  }, [renderAssets]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      registerRenderAsset,
      unregisterRenderAsset,
      renderAssets
    };
  }, [renderAssets, registerRenderAsset, unregisterRenderAsset]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RenderAssetManager.Provider, {
    value: contextValue,
    children
  });
};

// src/Artifact.tsx
var ArtifactThumbnail = Symbol("Thumbnail");
var Artifact = ({ filename, content, downloadBehavior }) => {
  const { registerRenderAsset, unregisterRenderAsset } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RenderAssetManager);
  const [env] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => getRemotionEnvironment());
  const frame = useCurrentFrame();
  const [id] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    return String(Math.random());
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!env.isRendering) {
      return;
    }
    if (content instanceof Uint8Array) {
      registerRenderAsset({
        type: "artifact",
        id,
        content: btoa(new TextDecoder("utf8").decode(content)),
        filename,
        frame,
        contentType: "binary",
        downloadBehavior: downloadBehavior ?? null
      });
    } else if (content === ArtifactThumbnail) {
      registerRenderAsset({
        type: "artifact",
        id,
        filename,
        frame,
        contentType: "thumbnail",
        downloadBehavior: downloadBehavior ?? null
      });
    } else {
      registerRenderAsset({
        type: "artifact",
        id,
        content,
        filename,
        frame,
        contentType: "text",
        downloadBehavior: downloadBehavior ?? null
      });
    }
    return () => {
      return unregisterRenderAsset(id);
    };
  }, [
    content,
    env.isRendering,
    filename,
    frame,
    id,
    registerRenderAsset,
    unregisterRenderAsset,
    downloadBehavior
  ]);
  return null;
};
Artifact.Thumbnail = ArtifactThumbnail;
// src/audio/Audio.tsx


// src/absolute-src.ts
var getAbsoluteSrc = (relativeSrc) => {
  if (typeof window === "undefined") {
    return relativeSrc;
  }
  if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
    return relativeSrc;
  }
  return new URL(relativeSrc, window.origin).href;
};

// src/calculate-loop.ts
var calculateLoopDuration = ({
  endAt,
  mediaDuration,
  playbackRate,
  startFrom
}) => {
  let duration = mediaDuration;
  if (typeof endAt !== "undefined") {
    duration = endAt;
  }
  if (typeof startFrom !== "undefined") {
    duration -= startFrom;
  }
  const actualDuration = duration / playbackRate;
  return Math.floor(actualDuration);
};

// src/loop/index.tsx


var LoopContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var useLoop = () => {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LoopContext);
};
var Loop = ({ durationInFrames, times = Infinity, children, name, ...props }) => {
  const currentFrame = useCurrentFrame();
  const { durationInFrames: compDuration } = useVideoConfig();
  validateDurationInFrames(durationInFrames, {
    component: "of the <Loop /> component",
    allowFloats: true
  });
  if (typeof times !== "number") {
    throw new TypeError(`You passed to "times" an argument of type ${typeof times}, but it must be a number.`);
  }
  if (times !== Infinity && times % 1 !== 0) {
    throw new TypeError(`The "times" prop of a loop must be an integer, but got ${times}.`);
  }
  if (times < 0) {
    throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${times}`);
  }
  const maxTimes = Math.ceil(compDuration / durationInFrames);
  const actualTimes = Math.min(maxTimes, times);
  const style = props.layout === "none" ? undefined : props.style;
  const maxFrame = durationInFrames * (actualTimes - 1);
  const iteration = Math.floor(currentFrame / durationInFrames);
  const start = iteration * durationInFrames;
  const from = Math.min(start, maxFrame);
  const loopDisplay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      numberOfTimes: actualTimes,
      startOffset: -from,
      durationInFrames
    };
  }, [actualTimes, durationInFrames, from]);
  const loopContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      iteration: Math.floor(currentFrame / durationInFrames),
      durationInFrames
    };
  }, [currentFrame, durationInFrames]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoopContext.Provider, {
    value: loopContext,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
      durationInFrames,
      from,
      name: name ?? "<Loop>",
      _remotionInternalLoopDisplay: loopDisplay,
      layout: props.layout,
      style,
      children
    })
  });
};
Loop.useLoop = useLoop;

// src/prefetch.ts


// src/playback-logging.ts
var playbackLogging = ({
  logLevel,
  tag,
  message,
  mountTime
}) => {
  const tags = [mountTime ? Date.now() - mountTime + "ms " : null, tag].filter(Boolean).join(" ");
  Log.trace(logLevel, `[${tags}]`, message);
};

// src/prefetch-state.tsx


var PreloadContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var preloads = {};
var updaters = [];
var setPreloads = (updater) => {
  preloads = updater(preloads);
  updaters.forEach((u) => u());
};
var PrefetchProvider = ({ children }) => {
  const [_preloads, _setPreloads] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => preloads);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updaterFunction = () => {
      _setPreloads(preloads);
    };
    updaters.push(updaterFunction);
    return () => {
      updaters = updaters.filter((u) => u !== updaterFunction);
    };
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PreloadContext.Provider, {
    value: _preloads,
    children
  });
};

// src/prefetch.ts
var removeAndGetHashFragment = (src) => {
  const hashIndex = src.indexOf("#");
  if (hashIndex === -1) {
    return null;
  }
  return hashIndex;
};
var getSrcWithoutHash = (src) => {
  const hashIndex = removeAndGetHashFragment(src);
  if (hashIndex === null) {
    return src;
  }
  return src.slice(0, hashIndex);
};
var usePreload = (src) => {
  const preloads2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PreloadContext);
  const hashFragmentIndex = removeAndGetHashFragment(src);
  const withoutHashFragment = getSrcWithoutHash(src);
  if (!preloads2[withoutHashFragment]) {
    return src;
  }
  if (hashFragmentIndex !== null) {
    return preloads2[withoutHashFragment] + src.slice(hashFragmentIndex);
  }
  return preloads2[withoutHashFragment];
};
var blobToBase64 = function(blob) {
  const reader = new FileReader;
  return new Promise((resolve, reject) => {
    reader.onload = function() {
      const dataUrl = reader.result;
      resolve(dataUrl);
    };
    reader.onerror = (err) => {
      return reject(err);
    };
    reader.readAsDataURL(blob);
  });
};
var getBlobFromReader = async ({
  reader,
  contentType,
  contentLength,
  onProgress
}) => {
  let receivedLength = 0;
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
    receivedLength += value.length;
    if (onProgress) {
      onProgress({ loadedBytes: receivedLength, totalBytes: contentLength });
    }
  }
  const chunksAll = new Uint8Array(receivedLength);
  let position = 0;
  for (const chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }
  return new Blob([chunksAll], {
    type: contentType ?? undefined
  });
};
var prefetch = (src, options) => {
  const method = options?.method ?? "blob-url";
  const logLevel = options?.logLevel ?? "info";
  const srcWithoutHash = getSrcWithoutHash(src);
  if (getRemotionEnvironment().isRendering) {
    return {
      free: () => {
        return;
      },
      waitUntilDone: () => Promise.resolve(srcWithoutHash)
    };
  }
  Log.verbose(logLevel, `[prefetch] Starting prefetch ${srcWithoutHash}`);
  let canceled = false;
  let objectUrl = null;
  let resolve = () => {
    return;
  };
  let reject = () => {
    return;
  };
  const waitUntilDone = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  const controller = new AbortController;
  let canBeAborted = true;
  fetch(srcWithoutHash, {
    signal: controller.signal,
    credentials: options?.credentials ?? undefined
  }).then((res) => {
    canBeAborted = false;
    if (canceled) {
      return null;
    }
    if (!res.ok) {
      throw new Error(`HTTP error, status = ${res.status}`);
    }
    const headerContentType = res.headers.get("Content-Type");
    const contentType = options?.contentType ?? headerContentType;
    const hasProperContentType = contentType && (contentType.startsWith("video/") || contentType.startsWith("audio/") || contentType.startsWith("image/"));
    if (!hasProperContentType) {
      console.warn(`Called prefetch() on ${srcWithoutHash} which returned a "Content-Type" of ${headerContentType}. Prefetched content should have a proper content type (video/... or audio/...) or a contentType passed the options of prefetch(). Otherwise, prefetching will not work properly in all browsers.`);
    }
    if (!res.body) {
      throw new Error(`HTTP response of ${srcWithoutHash} has no body`);
    }
    const reader = res.body.getReader();
    return getBlobFromReader({
      reader,
      contentType: options?.contentType ?? headerContentType ?? null,
      contentLength: res.headers.get("Content-Length") ? parseInt(res.headers.get("Content-Length"), 10) : null,
      onProgress: options?.onProgress
    });
  }).then((buf) => {
    if (!buf) {
      return;
    }
    const actualBlob = options?.contentType ? new Blob([buf], { type: options.contentType }) : buf;
    if (method === "base64") {
      return blobToBase64(actualBlob);
    }
    return URL.createObjectURL(actualBlob);
  }).then((url) => {
    if (canceled) {
      return;
    }
    playbackLogging({
      logLevel,
      tag: "prefetch",
      message: `Finished prefetch ${srcWithoutHash} with method ${method}`,
      mountTime: null
    });
    objectUrl = url;
    setPreloads((p) => ({
      ...p,
      [srcWithoutHash]: objectUrl
    }));
    resolve(objectUrl);
  }).catch((err) => {
    if (err?.message.includes("free() called")) {
      return;
    }
    reject(err);
  });
  return {
    free: () => {
      playbackLogging({
        logLevel,
        tag: "prefetch",
        message: `Freeing ${srcWithoutHash}`,
        mountTime: null
      });
      if (objectUrl) {
        if (method === "blob-url") {
          URL.revokeObjectURL(objectUrl);
        }
        setPreloads((p) => {
          const copy = { ...p };
          delete copy[srcWithoutHash];
          return copy;
        });
      } else {
        canceled = true;
        if (canBeAborted) {
          try {
            controller.abort(new Error("free() called"));
          } catch {}
        }
      }
    },
    waitUntilDone: () => {
      return waitUntilDone;
    }
  };
};

// src/validate-media-props.ts
var validateMediaProps = (props, component) => {
  if (typeof props.volume !== "number" && typeof props.volume !== "function" && typeof props.volume !== "undefined") {
    throw new TypeError(`You have passed a volume of type ${typeof props.volume} to your <${component} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
  }
  if (typeof props.volume === "number" && props.volume < 0) {
    throw new TypeError(`You have passed a volume below 0 to your <${component} /> component. Volume must be between 0 and 1`);
  }
  if (typeof props.playbackRate !== "number" && typeof props.playbackRate !== "undefined") {
    throw new TypeError(`You have passed a playbackRate of type ${typeof props.playbackRate} to your <${component} /> component. Playback rate must a real number or undefined.`);
  }
  if (typeof props.playbackRate === "number" && (isNaN(props.playbackRate) || !Number.isFinite(props.playbackRate) || props.playbackRate <= 0)) {
    throw new TypeError(`You have passed a playbackRate of ${props.playbackRate} to your <${component} /> component. Playback rate must be a real number above 0.`);
  }
};

// src/validate-start-from-props.ts
var validateStartFromProps = (startFrom, endAt) => {
  if (typeof startFrom !== "undefined") {
    if (typeof startFrom !== "number") {
      throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof startFrom}.`);
    }
    if (isNaN(startFrom) || startFrom === Infinity) {
      throw new TypeError("startFrom prop can not be NaN or Infinity.");
    }
    if (startFrom < 0) {
      throw new TypeError(`startFrom must be greater than equal to 0 instead got ${startFrom}.`);
    }
  }
  if (typeof endAt !== "undefined") {
    if (typeof endAt !== "number") {
      throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof endAt}.`);
    }
    if (isNaN(endAt)) {
      throw new TypeError("endAt prop can not be NaN.");
    }
    if (endAt <= 0) {
      throw new TypeError(`endAt must be a positive number, instead got ${endAt}.`);
    }
  }
  if (endAt < startFrom) {
    throw new TypeError("endAt prop must be greater than startFrom prop.");
  }
};
var validateTrimProps = (trimBefore, trimAfter) => {
  if (typeof trimBefore !== "undefined") {
    if (typeof trimBefore !== "number") {
      throw new TypeError(`type of trimBefore prop must be a number, instead got type ${typeof trimBefore}.`);
    }
    if (isNaN(trimBefore) || trimBefore === Infinity) {
      throw new TypeError("trimBefore prop can not be NaN or Infinity.");
    }
    if (trimBefore < 0) {
      throw new TypeError(`trimBefore must be greater than equal to 0 instead got ${trimBefore}.`);
    }
  }
  if (typeof trimAfter !== "undefined") {
    if (typeof trimAfter !== "number") {
      throw new TypeError(`type of trimAfter prop must be a number, instead got type ${typeof trimAfter}.`);
    }
    if (isNaN(trimAfter)) {
      throw new TypeError("trimAfter prop can not be NaN.");
    }
    if (trimAfter <= 0) {
      throw new TypeError(`trimAfter must be a positive number, instead got ${trimAfter}.`);
    }
  }
  if (trimAfter < trimBefore) {
    throw new TypeError("trimAfter prop must be greater than trimBefore prop.");
  }
};
var validateMediaTrimProps = ({
  startFrom,
  endAt,
  trimBefore,
  trimAfter
}) => {
  if (typeof startFrom !== "undefined" && typeof trimBefore !== "undefined") {
    throw new TypeError("Cannot use both startFrom and trimBefore props. Use trimBefore instead as startFrom is deprecated.");
  }
  if (typeof endAt !== "undefined" && typeof trimAfter !== "undefined") {
    throw new TypeError("Cannot use both endAt and trimAfter props. Use trimAfter instead as endAt is deprecated.");
  }
  const hasNewProps = typeof trimBefore !== "undefined" || typeof trimAfter !== "undefined";
  const hasOldProps = typeof startFrom !== "undefined" || typeof endAt !== "undefined";
  if (hasNewProps) {
    validateTrimProps(trimBefore, trimAfter);
  } else if (hasOldProps) {
    validateStartFromProps(startFrom, endAt);
  }
};
var resolveTrimProps = ({
  startFrom,
  endAt,
  trimBefore,
  trimAfter
}) => {
  const trimBeforeValue = trimBefore ?? startFrom ?? undefined;
  const trimAfterValue = trimAfter ?? endAt ?? undefined;
  return { trimBeforeValue, trimAfterValue };
};

// src/video/duration-state.tsx


var durationReducer = (state, action) => {
  switch (action.type) {
    case "got-duration": {
      const absoluteSrc = getAbsoluteSrc(action.src);
      if (state[absoluteSrc] === action.durationInSeconds) {
        return state;
      }
      return {
        ...state,
        [absoluteSrc]: action.durationInSeconds
      };
    }
    default:
      return state;
  }
};
var DurationsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  durations: {},
  setDurations: () => {
    throw new Error("context missing");
  }
});
var DurationsContextProvider = ({ children }) => {
  const [durations, setDurations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(durationReducer, {});
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      durations,
      setDurations
    };
  }, [durations]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DurationsContext.Provider, {
    value,
    children
  });
};

// src/audio/AudioForPreview.tsx


// src/get-cross-origin-value.ts
var getCrossOriginValue = ({
  crossOrigin,
  requestsVideoFrame
}) => {
  if (crossOrigin !== undefined && crossOrigin !== null) {
    return crossOrigin;
  }
  if (requestsVideoFrame) {
    return "anonymous";
  }
  return;
};

// src/log-level-context.tsx


var LogLevelContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  logLevel: "info",
  mountTime: 0
});
var useLogLevel = () => {
  const { logLevel } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(LogLevelContext);
  if (logLevel === null) {
    throw new Error("useLogLevel must be used within a LogLevelProvider");
  }
  return logLevel;
};
var useMountTime = () => {
  const { mountTime } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(LogLevelContext);
  if (mountTime === null) {
    throw new Error("useMountTime must be used within a LogLevelProvider");
  }
  return mountTime;
};

// src/random.ts
function mulberry32(a) {
  let t = a + 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hashCode(str) {
  let i = 0;
  let chr = 0;
  let hash = 0;
  for (i = 0;i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}
var random = (seed, dummy) => {
  if (dummy !== undefined) {
    throw new TypeError("random() takes only one argument");
  }
  if (seed === null) {
    return Math.random();
  }
  if (typeof seed === "string") {
    return mulberry32(hashCode(seed));
  }
  if (typeof seed === "number") {
    return mulberry32(seed * 10000000000);
  }
  throw new Error("random() argument must be a number or a string");
};

// src/use-amplification.ts


// src/audio/shared-audio-tags.tsx


// src/play-and-handle-not-allowed-error.ts
var playAndHandleNotAllowedError = ({
  mediaRef,
  mediaType,
  onAutoPlayError,
  logLevel,
  mountTime,
  reason
}) => {
  const { current } = mediaRef;
  if (!current) {
    return;
  }
  playbackLogging({
    logLevel,
    tag: "play",
    message: `Attempting to play ${current.src}. Reason: ${reason}`,
    mountTime
  });
  const prom = current.play();
  if (!prom.catch) {
    return;
  }
  prom.catch((err) => {
    if (!current) {
      return;
    }
    if (err.message.includes("request was interrupted by a call to pause")) {
      return;
    }
    if (err.message.includes("The operation was aborted.")) {
      return;
    }
    if (err.message.includes("The fetching process for the media resource was aborted by the user agent")) {
      return;
    }
    if (err.message.includes("request was interrupted by a new load request")) {
      return;
    }
    if (err.message.includes("because the media was removed from the document")) {
      return;
    }
    if (err.message.includes("user didn't interact with the document") && current.muted) {
      return;
    }
    console.log(`Could not play ${mediaType} due to following error: `, err);
    if (!current.muted) {
      if (onAutoPlayError) {
        onAutoPlayError();
        return;
      }
      console.log(`The video will be muted and we'll retry playing it.`);
      if (mediaType === "video" && getRemotionEnvironment().isPlayer) {
        console.log("Use onAutoPlayError() to handle this error yourself.");
      }
      current.muted = true;
      current.play();
    }
  });
};

// src/audio/shared-element-source-node.ts
var makeSharedElementSourceNode = ({
  audioContext,
  ref
}) => {
  let connected = null;
  return {
    attemptToConnect: () => {
      if (!connected && ref.current) {
        const mediaElementSourceNode = audioContext.createMediaElementSource(ref.current);
        connected = mediaElementSourceNode;
      }
    },
    get: () => {
      if (!connected) {
        throw new Error("Audio element not connected");
      }
      return connected;
    }
  };
};

// src/audio/use-audio-context.ts

var warned = false;
var warnOnce = (logLevel) => {
  if (warned) {
    return;
  }
  warned = true;
  if (typeof window !== "undefined") {
    Log.warn(logLevel, "AudioContext is not supported in this browser");
  }
};
var useSingletonAudioContext = (logLevel, latencyHint) => {
  const audioContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof AudioContext === "undefined") {
      warnOnce(logLevel);
      return null;
    }
    return new AudioContext({
      latencyHint
    });
  }, [logLevel, latencyHint]);
  return audioContext;
};

// src/audio/shared-audio-tags.tsx

var EMPTY_AUDIO = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
var compareProps = (obj1, obj2) => {
  const keysA = Object.keys(obj1).sort();
  const keysB = Object.keys(obj2).sort();
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0;i < keysA.length; i++) {
    if (keysA[i] !== keysB[i]) {
      return false;
    }
    if (obj1[keysA[i]] !== obj2[keysB[i]]) {
      return false;
    }
  }
  return true;
};
var didPropChange = (key, newProp, prevProp) => {
  if (key === "src" && !prevProp.startsWith("data:") && !newProp.startsWith("data:")) {
    return new URL(prevProp, window.origin).toString() !== new URL(newProp, window.origin).toString();
  }
  if (prevProp === newProp) {
    return false;
  }
  return true;
};
var SharedAudioContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var SharedAudioContextProvider = ({ children, numberOfAudioTags, component, audioLatencyHint }) => {
  const audios = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const [initialNumberOfAudioTags] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(numberOfAudioTags);
  if (numberOfAudioTags !== initialNumberOfAudioTags) {
    throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
  }
  const logLevel = useLogLevel();
  const audioContext = useSingletonAudioContext(logLevel, audioLatencyHint);
  const refs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return new Array(numberOfAudioTags).fill(true).map(() => {
      const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
      return {
        id: Math.random(),
        ref,
        mediaElementSourceNode: audioContext ? makeSharedElementSourceNode({
          audioContext,
          ref
        }) : null
      };
    });
  }, [audioContext, numberOfAudioTags]);
  const takenAudios = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Array(numberOfAudioTags).fill(false));
  const rerenderAudios = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    refs.forEach(({ ref, id }) => {
      const data = audios.current?.find((a) => a.id === id);
      const { current } = ref;
      if (!current) {
        return;
      }
      if (data === undefined) {
        current.src = EMPTY_AUDIO;
        return;
      }
      if (!data) {
        throw new TypeError("Expected audio data to be there");
      }
      Object.keys(data.props).forEach((key) => {
        if (didPropChange(key, data.props[key], current[key])) {
          current[key] = data.props[key];
        }
      });
    });
  }, [refs]);
  const registerAudio = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((options) => {
    const { aud, audioId, premounting } = options;
    const found = audios.current?.find((a) => a.audioId === audioId);
    if (found) {
      return found;
    }
    const firstFreeAudio = takenAudios.current.findIndex((a) => a === false);
    if (firstFreeAudio === -1) {
      throw new Error(`Tried to simultaneously mount ${numberOfAudioTags + 1} <Audio /> tags at the same time. With the current settings, the maximum amount of <Audio /> tags is limited to ${numberOfAudioTags} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#using-the-numberofsharedaudiotags-prop for more information on how to increase this limit.`);
    }
    const { id, ref, mediaElementSourceNode } = refs[firstFreeAudio];
    const cloned = [...takenAudios.current];
    cloned[firstFreeAudio] = id;
    takenAudios.current = cloned;
    const newElem = {
      props: aud,
      id,
      el: ref,
      audioId,
      mediaElementSourceNode,
      premounting
    };
    audios.current?.push(newElem);
    rerenderAudios();
    return newElem;
  }, [numberOfAudioTags, refs, rerenderAudios]);
  const unregisterAudio = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id) => {
    const cloned = [...takenAudios.current];
    const index = refs.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new TypeError("Error occured in ");
    }
    cloned[index] = false;
    takenAudios.current = cloned;
    audios.current = audios.current?.filter((a) => a.id !== id);
    rerenderAudios();
  }, [refs, rerenderAudios]);
  const updateAudio = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    aud,
    audioId,
    id,
    premounting
  }) => {
    let changed = false;
    audios.current = audios.current?.map((prevA) => {
      if (prevA.id === id) {
        const isTheSame = compareProps(aud, prevA.props) && prevA.premounting === premounting;
        if (isTheSame) {
          return prevA;
        }
        changed = true;
        return {
          ...prevA,
          props: aud,
          premounting,
          audioId
        };
      }
      return prevA;
    });
    if (changed) {
      rerenderAudios();
    }
  }, [rerenderAudios]);
  const mountTime = useMountTime();
  const playAllAudios = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    refs.forEach((ref) => {
      const audio = audios.current.find((a) => a.el === ref.ref);
      if (audio?.premounting) {
        return;
      }
      playAndHandleNotAllowedError({
        mediaRef: ref.ref,
        mediaType: "audio",
        onAutoPlayError: null,
        logLevel,
        mountTime,
        reason: "playing all audios"
      });
    });
    audioContext?.resume();
  }, [audioContext, logLevel, mountTime, refs]);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      registerAudio,
      unregisterAudio,
      updateAudio,
      playAllAudios,
      numberOfAudioTags,
      audioContext
    };
  }, [
    numberOfAudioTags,
    playAllAudios,
    registerAudio,
    unregisterAudio,
    updateAudio,
    audioContext
  ]);
  const resetAudio = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    takenAudios.current = new Array(numberOfAudioTags).fill(false);
    audios.current = [];
    rerenderAudios();
  }, [numberOfAudioTags, rerenderAudios]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      resetAudio();
    };
  }, [component, resetAudio]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SharedAudioContext.Provider, {
    value,
    children: [
      refs.map(({ id, ref }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("audio", {
          ref,
          preload: "metadata",
          src: EMPTY_AUDIO
        }, id);
      }),
      children
    ]
  });
};
var useSharedAudio = ({
  aud,
  audioId,
  premounting
}) => {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SharedAudioContext);
  const [elem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (ctx && ctx.numberOfAudioTags > 0) {
      return ctx.registerAudio({ aud, audioId, premounting });
    }
    const el = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    const mediaElementSourceNode = ctx?.audioContext ? makeSharedElementSourceNode({
      audioContext: ctx.audioContext,
      ref: el
    }) : null;
    return {
      el,
      id: Math.random(),
      props: aud,
      audioId,
      mediaElementSourceNode,
      premounting
    };
  });
  const effectToUse = react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect ?? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
  if (typeof document !== "undefined") {
    effectToUse(() => {
      if (ctx && ctx.numberOfAudioTags > 0) {
        ctx.updateAudio({ id: elem.id, aud, audioId, premounting });
      }
    }, [aud, ctx, elem.id, audioId, premounting]);
    effectToUse(() => {
      return () => {
        if (ctx && ctx.numberOfAudioTags > 0) {
          ctx.unregisterAudio(elem.id);
        }
      };
    }, [ctx, elem.id]);
  }
  return elem;
};

// src/is-approximately-the-same.ts
var FLOATING_POINT_ERROR_THRESHOLD = 0.00001;
var isApproximatelyTheSame = (num1, num2) => {
  return Math.abs(num1 - num2) < FLOATING_POINT_ERROR_THRESHOLD;
};

// src/video/video-fragment.ts

var toSeconds = (time, fps) => {
  return Math.round(time / fps * 100) / 100;
};
var isSafari = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const isAppleWebKit = /AppleWebKit/.test(window.navigator.userAgent);
  if (!isAppleWebKit) {
    return false;
  }
  const isNotChrome = !window.navigator.userAgent.includes("Chrome/");
  return isNotChrome;
};
var isIosSafari = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const isIpadIPodIPhone = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
  return isIpadIPodIPhone && isSafari();
};
var isIOSSafariAndBlob = (actualSrc) => {
  return isIosSafari() && actualSrc.startsWith("blob:");
};
var getVideoFragmentStart = ({
  actualFrom,
  fps
}) => {
  return toSeconds(Math.max(0, -actualFrom), fps);
};
var getVideoFragmentEnd = ({
  duration,
  fps
}) => {
  return toSeconds(duration, fps);
};
var appendVideoFragment = ({
  actualSrc,
  actualFrom,
  duration,
  fps
}) => {
  if (isIOSSafariAndBlob(actualSrc)) {
    return actualSrc;
  }
  if (actualSrc.startsWith("data:")) {
    return actualSrc;
  }
  const existingHash = Boolean(new URL(actualSrc, (typeof window === "undefined" ? null : window.location.href) ?? "http://localhost:3000").hash);
  if (existingHash) {
    return actualSrc;
  }
  if (!Number.isFinite(actualFrom)) {
    return actualSrc;
  }
  const withStartHash = `${actualSrc}#t=${getVideoFragmentStart({ actualFrom, fps })}`;
  if (!Number.isFinite(duration)) {
    return withStartHash;
  }
  return `${withStartHash},${getVideoFragmentEnd({ duration, fps })}`;
};
var isSubsetOfDuration = ({
  prevStartFrom,
  newStartFrom,
  prevDuration,
  newDuration,
  fps
}) => {
  const previousFrom = getVideoFragmentStart({ actualFrom: prevStartFrom, fps });
  const newFrom = getVideoFragmentStart({ actualFrom: newStartFrom, fps });
  const previousEnd = getVideoFragmentEnd({ duration: prevDuration, fps });
  const newEnd = getVideoFragmentEnd({ duration: newDuration, fps });
  if (newFrom < previousFrom) {
    return false;
  }
  if (newEnd > previousEnd) {
    return false;
  }
  return true;
};
var useAppendVideoFragment = ({
  actualSrc: initialActualSrc,
  actualFrom: initialActualFrom,
  duration: initialDuration,
  fps
}) => {
  const actualFromRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialActualFrom);
  const actualDuration = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialDuration);
  const actualSrc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialActualSrc);
  if (!isSubsetOfDuration({
    prevStartFrom: actualFromRef.current,
    newStartFrom: initialActualFrom,
    prevDuration: actualDuration.current,
    newDuration: initialDuration,
    fps
  }) || initialActualSrc !== actualSrc.current) {
    actualFromRef.current = initialActualFrom;
    actualDuration.current = initialDuration;
    actualSrc.current = initialActualSrc;
  }
  const appended = appendVideoFragment({
    actualSrc: actualSrc.current,
    actualFrom: actualFromRef.current,
    duration: actualDuration.current,
    fps
  });
  return appended;
};

// src/use-amplification.ts
var warned2 = false;
var warnSafariOnce = (logLevel) => {
  if (warned2) {
    return;
  }
  warned2 = true;
  Log.warn(logLevel, "In Safari, setting a volume and a playback rate at the same time is buggy.");
  Log.warn(logLevel, "In Desktop Safari, only volumes <= 1 will be applied.");
  Log.warn(logLevel, "In Mobile Safari, the volume will be ignored and set to 1 if a playbackRate is set.");
};
var useVolume = ({
  mediaRef,
  volume,
  logLevel,
  source,
  shouldUseWebAudioApi
}) => {
  const audioStuffRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const currentVolumeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(volume);
  currentVolumeRef.current = volume;
  const sharedAudioContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SharedAudioContext);
  if (!sharedAudioContext) {
    throw new Error("useAmplification must be used within a SharedAudioContext");
  }
  const { audioContext } = sharedAudioContext;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!audioContext) {
      return;
    }
    if (!mediaRef.current) {
      return;
    }
    if (!shouldUseWebAudioApi) {
      return;
    }
    if (mediaRef.current.playbackRate !== 1 && isSafari()) {
      warnSafariOnce(logLevel);
      return;
    }
    if (!source) {
      return;
    }
    const gainNode = new GainNode(audioContext, {
      gain: currentVolumeRef.current
    });
    source.attemptToConnect();
    source.get().connect(gainNode);
    gainNode.connect(audioContext.destination);
    audioStuffRef.current = {
      gainNode
    };
    Log.trace(logLevel, `Starting to amplify ${mediaRef.current?.src}. Gain = ${currentVolumeRef.current}, playbackRate = ${mediaRef.current?.playbackRate}`);
    return () => {
      audioStuffRef.current = null;
      gainNode.disconnect();
      source.get().disconnect();
    };
  }, [logLevel, mediaRef, audioContext, source, shouldUseWebAudioApi]);
  if (audioStuffRef.current) {
    const valueToSet = volume;
    if (!isApproximatelyTheSame(audioStuffRef.current.gainNode.gain.value, valueToSet)) {
      audioStuffRef.current.gainNode.gain.value = valueToSet;
      Log.trace(logLevel, `Setting gain to ${valueToSet} for ${mediaRef.current?.src}`);
    }
  }
  const safariCase = isSafari() && mediaRef.current && mediaRef.current?.playbackRate !== 1;
  const shouldUseTraditionalVolume = safariCase || !shouldUseWebAudioApi;
  if (shouldUseTraditionalVolume && mediaRef.current && !isApproximatelyTheSame(volume, mediaRef.current?.volume)) {
    mediaRef.current.volume = Math.min(volume, 1);
  }
  return audioStuffRef;
};

// src/use-media-in-timeline.ts


// src/audio/use-audio-frame.ts

var useMediaStartsAt = () => {
  const parentSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const startsAt = Math.min(0, parentSequence?.relativeFrom ?? 0);
  return startsAt;
};
var useFrameForVolumeProp = (behavior) => {
  const loop = Loop.useLoop();
  const frame = useCurrentFrame();
  const startsAt = useMediaStartsAt();
  if (behavior === "repeat" || loop === null) {
    return frame + startsAt;
  }
  return frame + startsAt + loop.durationInFrames * loop.iteration;
};

// src/get-asset-file-name.ts
var getAssetDisplayName = (filename) => {
  if (/data:|blob:/.test(filename.substring(0, 5))) {
    return "Data URL";
  }
  const splitted = filename.split("/").map((s) => s.split("\\")).flat(1);
  return splitted[splitted.length - 1];
};

// src/volume-prop.ts
var evaluateVolume = ({
  frame,
  volume,
  mediaVolume = 1
}) => {
  if (typeof volume === "number") {
    return volume * mediaVolume;
  }
  if (typeof volume === "undefined") {
    return Number(mediaVolume);
  }
  const evaluated = volume(frame) * mediaVolume;
  if (typeof evaluated !== "number") {
    throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof evaluated} for frame ${frame}`);
  }
  if (Number.isNaN(evaluated)) {
    throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${frame}.`);
  }
  if (!Number.isFinite(evaluated)) {
    throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${frame}.`);
  }
  return Math.max(0, evaluated);
};

// src/use-media-in-timeline.ts
var didWarn = {};
var warnOnce2 = (message) => {
  if (didWarn[message]) {
    return;
  }
  console.warn(message);
  didWarn[message] = true;
};
var useMediaInTimeline = ({
  volume,
  mediaVolume,
  mediaRef,
  src,
  mediaType,
  playbackRate,
  displayName,
  id,
  stack,
  showInTimeline,
  premountDisplay,
  onAutoPlayError,
  isPremounting
}) => {
  const videoConfig = useVideoConfig();
  const { rootId, audioAndVideoTags } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  const parentSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const actualFrom = parentSequence ? parentSequence.relativeFrom + parentSequence.cumulatedFrom : 0;
  const { imperativePlaying } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  const startsAt = useMediaStartsAt();
  const { registerSequence, unregisterSequence } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceManager);
  const [initialVolume] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => volume);
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const nonce = useNonce();
  const duration = parentSequence ? Math.min(parentSequence.durationInFrames, videoConfig.durationInFrames) : videoConfig.durationInFrames;
  const doesVolumeChange = typeof volume === "function";
  const volumes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof volume === "number") {
      return volume;
    }
    return new Array(Math.floor(Math.max(0, duration + startsAt))).fill(true).map((_, i) => {
      return evaluateVolume({
        frame: i + startsAt,
        volume,
        mediaVolume
      });
    }).join(",");
  }, [duration, startsAt, volume, mediaVolume]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof volume === "number" && volume !== initialVolume) {
      warnOnce2(`Remotion: The ${mediaType} with src ${src} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/audio/volume`);
    }
  }, [initialVolume, mediaType, src, volume]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mediaRef.current) {
      return;
    }
    if (!src) {
      throw new Error("No src passed");
    }
    if (!getRemotionEnvironment().isStudio && window.process?.env?.NODE_ENV !== "test") {
      return;
    }
    if (!showInTimeline) {
      return;
    }
    registerSequence({
      type: mediaType,
      src,
      id,
      duration,
      from: 0,
      parent: parentSequence?.id ?? null,
      displayName: displayName ?? getAssetDisplayName(src),
      rootId,
      volume: volumes,
      showInTimeline: true,
      nonce,
      startMediaFrom: 0 - startsAt,
      doesVolumeChange,
      loopDisplay: undefined,
      playbackRate,
      stack,
      premountDisplay
    });
    return () => {
      unregisterSequence(id);
    };
  }, [
    actualFrom,
    duration,
    id,
    parentSequence,
    src,
    registerSequence,
    rootId,
    unregisterSequence,
    videoConfig,
    volumes,
    doesVolumeChange,
    nonce,
    mediaRef,
    mediaType,
    startsAt,
    playbackRate,
    displayName,
    stack,
    showInTimeline,
    premountDisplay
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tag = {
      id,
      play: (reason) => {
        if (!imperativePlaying.current) {
          return;
        }
        if (isPremounting) {
          return;
        }
        return playAndHandleNotAllowedError({
          mediaRef,
          mediaType,
          onAutoPlayError,
          logLevel,
          mountTime,
          reason
        });
      }
    };
    audioAndVideoTags.current.push(tag);
    return () => {
      audioAndVideoTags.current = audioAndVideoTags.current.filter((a) => a.id !== id);
    };
  }, [
    audioAndVideoTags,
    id,
    mediaRef,
    mediaType,
    onAutoPlayError,
    imperativePlaying,
    isPremounting,
    logLevel,
    mountTime
  ]);
};

// src/use-media-playback.ts


// src/buffer-until-first-frame.ts


// src/use-buffer-state.ts


// src/buffering.tsx


var useBufferManager = (logLevel, mountTime) => {
  const [blocks, setBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [onBufferingCallbacks, setOnBufferingCallbacks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [onResumeCallbacks, setOnResumeCallbacks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const buffering = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const addBlock = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((block) => {
    setBlocks((b) => [...b, block]);
    return {
      unblock: () => {
        setBlocks((b) => {
          const newArr = b.filter((bx) => bx !== block);
          if (newArr.length === b.length) {
            return b;
          }
          return newArr;
        });
      }
    };
  }, []);
  const listenForBuffering = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((callback) => {
    setOnBufferingCallbacks((c) => [...c, callback]);
    return {
      remove: () => {
        setOnBufferingCallbacks((c) => c.filter((cb) => cb !== callback));
      }
    };
  }, []);
  const listenForResume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((callback) => {
    setOnResumeCallbacks((c) => [...c, callback]);
    return {
      remove: () => {
        setOnResumeCallbacks((c) => c.filter((cb) => cb !== callback));
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (blocks.length > 0) {
      onBufferingCallbacks.forEach((c) => c());
      playbackLogging({
        logLevel,
        message: "Player is entering buffer state",
        mountTime,
        tag: "player"
      });
    }
  }, [blocks]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (blocks.length === 0) {
      onResumeCallbacks.forEach((c) => c());
      playbackLogging({
        logLevel,
        message: "Player is exiting buffer state",
        mountTime,
        tag: "player"
      });
    }
  }, [blocks]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return { addBlock, listenForBuffering, listenForResume, buffering };
  }, [addBlock, buffering, listenForBuffering, listenForResume]);
};
var BufferingContextReact = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
var BufferingProvider = ({ children }) => {
  const { logLevel, mountTime } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LogLevelContext);
  const bufferManager = useBufferManager(logLevel ?? "info", mountTime);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BufferingContextReact.Provider, {
    value: bufferManager,
    children
  });
};
var useIsPlayerBuffering = (bufferManager) => {
  const [isBuffering, setIsBuffering] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bufferManager.buffering.current);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onBuffer = () => {
      setIsBuffering(true);
    };
    const onResume = () => {
      setIsBuffering(false);
    };
    bufferManager.listenForBuffering(onBuffer);
    bufferManager.listenForResume(onResume);
    return () => {
      bufferManager.listenForBuffering(() => {
        return;
      });
      bufferManager.listenForResume(() => {
        return;
      });
    };
  }, [bufferManager]);
  return isBuffering;
};

// src/use-buffer-state.ts
var useBufferState = () => {
  const buffer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BufferingContextReact);
  const addBlock = buffer ? buffer.addBlock : null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    delayPlayback: () => {
      if (!addBlock) {
        throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
      }
      const { unblock } = addBlock({
        id: String(Math.random())
      });
      return { unblock };
    }
  }), [addBlock]);
};

// src/buffer-until-first-frame.ts
var isSafariWebkit = () => {
  const isSafari2 = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
  return isSafari2;
};
var useBufferUntilFirstFrame = ({
  mediaRef,
  mediaType,
  onVariableFpsVideoDetected,
  pauseWhenBuffering,
  logLevel,
  mountTime
}) => {
  const bufferingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const { delayPlayback } = useBufferState();
  const bufferUntilFirstFrame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((requestedTime) => {
    if (mediaType !== "video") {
      return;
    }
    if (!pauseWhenBuffering) {
      return;
    }
    const current = mediaRef.current;
    if (!current) {
      return;
    }
    if (current.readyState >= current.HAVE_FUTURE_DATA && !isSafariWebkit()) {
      playbackLogging({
        logLevel,
        message: `Not using buffer until first frame, because readyState is ${current.readyState} and is not Safari or Desktop Chrome`,
        mountTime,
        tag: "buffer"
      });
      return;
    }
    if (!current.requestVideoFrameCallback) {
      playbackLogging({
        logLevel,
        message: `Not using buffer until first frame, because requestVideoFrameCallback is not supported`,
        mountTime,
        tag: "buffer"
      });
      return;
    }
    bufferingRef.current = true;
    playbackLogging({
      logLevel,
      message: `Buffering ${mediaRef.current?.src} until the first frame is received`,
      mountTime,
      tag: "buffer"
    });
    const playback = delayPlayback();
    const unblock = () => {
      playback.unblock();
      current.removeEventListener("ended", unblock, {
        once: true
      });
      current.removeEventListener("pause", unblock, {
        once: true
      });
      bufferingRef.current = false;
    };
    const onEndedOrPauseOrCanPlay = () => {
      unblock();
    };
    current.requestVideoFrameCallback((_, info) => {
      const differenceFromRequested = Math.abs(info.mediaTime - requestedTime);
      if (differenceFromRequested > 0.5) {
        onVariableFpsVideoDetected();
      }
      unblock();
    });
    current.addEventListener("ended", onEndedOrPauseOrCanPlay, { once: true });
    current.addEventListener("pause", onEndedOrPauseOrCanPlay, { once: true });
    current.addEventListener("canplay", onEndedOrPauseOrCanPlay, {
      once: true
    });
  }, [
    delayPlayback,
    logLevel,
    mediaRef,
    mediaType,
    mountTime,
    onVariableFpsVideoDetected,
    pauseWhenBuffering
  ]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      isBuffering: () => bufferingRef.current,
      bufferUntilFirstFrame
    };
  }, [bufferUntilFirstFrame]);
};

// src/media-tag-current-time-timestamp.ts

var useCurrentTimeOfMediaTagWithUpdateTimeStamp = (mediaRef) => {
  const lastUpdate = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
    time: mediaRef.current?.currentTime ?? 0,
    lastUpdate: performance.now()
  });
  const nowCurrentTime = mediaRef.current?.currentTime ?? null;
  if (nowCurrentTime !== null) {
    if (lastUpdate.current.time !== nowCurrentTime) {
      lastUpdate.current.time = nowCurrentTime;
      lastUpdate.current.lastUpdate = performance.now();
    }
  }
  return lastUpdate;
};

// src/seek.ts
var seek = ({
  mediaRef,
  time,
  logLevel,
  why,
  mountTime
}) => {
  const timeToSet = isIosSafari() ? Number(time.toFixed(1)) : time;
  playbackLogging({
    logLevel,
    tag: "seek",
    message: `Seeking from ${mediaRef.currentTime} to ${timeToSet}. src= ${mediaRef.src} Reason: ${why}`,
    mountTime
  });
  mediaRef.currentTime = timeToSet;
  return timeToSet;
};

// src/use-media-buffering.ts

var useMediaBuffering = ({
  element,
  shouldBuffer,
  isPremounting,
  logLevel,
  mountTime,
  src
}) => {
  const buffer = useBufferState();
  const [isBuffering, setIsBuffering] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let cleanupFns = [];
    const { current } = element;
    if (!current) {
      return;
    }
    if (!shouldBuffer) {
      return;
    }
    if (isPremounting) {
      if (current.readyState < current.HAVE_FUTURE_DATA) {
        if (!navigator.userAgent.includes("Firefox/")) {
          playbackLogging({
            logLevel,
            message: `Calling .load() on ${current.src} because readyState is ${current.readyState} and it is not Firefox. Element is premounted ${current.playbackRate}`,
            tag: "load",
            mountTime
          });
          const previousPlaybackRate = current.playbackRate;
          current.load();
          current.playbackRate = previousPlaybackRate;
        }
      }
      return;
    }
    const cleanup = (reason) => {
      let didDoSomething = false;
      cleanupFns.forEach((fn) => {
        fn(reason);
        didDoSomething = true;
      });
      cleanupFns = [];
      setIsBuffering((previous) => {
        if (previous) {
          didDoSomething = true;
        }
        return false;
      });
      if (didDoSomething) {
        playbackLogging({
          logLevel,
          message: `Unmarking as buffering: ${current.src}. Reason: ${reason}`,
          tag: "buffer",
          mountTime
        });
      }
    };
    const blockMedia = (reason) => {
      setIsBuffering(true);
      playbackLogging({
        logLevel,
        message: `Marking as buffering: ${current.src}. Reason: ${reason}`,
        tag: "buffer",
        mountTime
      });
      const { unblock } = buffer.delayPlayback();
      const onCanPlay = () => {
        cleanup('"canplay" was fired');
        init();
      };
      const onError = () => {
        cleanup('"error" event was occurred');
        init();
      };
      current.addEventListener("canplay", onCanPlay, {
        once: true
      });
      cleanupFns.push(() => {
        current.removeEventListener("canplay", onCanPlay);
      });
      current.addEventListener("error", onError, {
        once: true
      });
      cleanupFns.push(() => {
        current.removeEventListener("error", onError);
      });
      cleanupFns.push((cleanupReason) => {
        playbackLogging({
          logLevel,
          message: `Unblocking ${current.src} from buffer. Reason: ${cleanupReason}`,
          tag: "buffer",
          mountTime
        });
        unblock();
      });
    };
    const init = () => {
      if (current.readyState < current.HAVE_FUTURE_DATA) {
        blockMedia(`readyState is ${current.readyState}, which is less than HAVE_FUTURE_DATA`);
        if (!navigator.userAgent.includes("Firefox/")) {
          playbackLogging({
            logLevel,
            message: `Calling .load() on ${src} because readyState is ${current.readyState} and it is not Firefox. ${current.playbackRate}`,
            tag: "load",
            mountTime
          });
          const previousPlaybackRate = current.playbackRate;
          current.load();
          current.playbackRate = previousPlaybackRate;
        }
      } else {
        const onWaiting = () => {
          blockMedia('"waiting" event was fired');
        };
        current.addEventListener("waiting", onWaiting);
        cleanupFns.push(() => {
          current.removeEventListener("waiting", onWaiting);
        });
      }
    };
    init();
    return () => {
      cleanup("element was unmounted or prop changed");
    };
  }, [buffer, src, element, isPremounting, logLevel, shouldBuffer, mountTime]);
  return isBuffering;
};

// src/use-request-video-callback-time.ts

var useRequestVideoCallbackTime = ({
  mediaRef,
  mediaType,
  lastSeek,
  onVariableFpsVideoDetected
}) => {
  const currentTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = mediaRef;
    if (current) {
      currentTime.current = {
        time: current.currentTime,
        lastUpdate: performance.now()
      };
    } else {
      currentTime.current = null;
      return;
    }
    if (mediaType !== "video") {
      currentTime.current = null;
      return;
    }
    const videoTag = current;
    if (!videoTag.requestVideoFrameCallback) {
      return;
    }
    let cancel = () => {
      return;
    };
    const request = () => {
      if (!videoTag) {
        return;
      }
      const cb = videoTag.requestVideoFrameCallback((_, info) => {
        if (currentTime.current !== null) {
          const difference = Math.abs(currentTime.current.time - info.mediaTime);
          const differenceToLastSeek = Math.abs(lastSeek.current === null ? Infinity : info.mediaTime - lastSeek.current);
          if (difference > 0.5 && differenceToLastSeek > 0.5 && info.mediaTime > currentTime.current.time) {
            onVariableFpsVideoDetected();
          }
        }
        currentTime.current = {
          time: info.mediaTime,
          lastUpdate: performance.now()
        };
        request();
      });
      cancel = () => {
        videoTag.cancelVideoFrameCallback(cb);
        cancel = () => {
          return;
        };
      };
    };
    request();
    return () => {
      cancel();
    };
  }, [lastSeek, mediaRef, mediaType, onVariableFpsVideoDetected]);
  return currentTime;
};

// src/interpolate.ts
function interpolateFunction(input, inputRange, outputRange, options) {
  const { extrapolateLeft, extrapolateRight, easing } = options;
  let result = input;
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    }
    if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "wrap") {
      const range = inputMax - inputMin;
      result = ((result - inputMin) % range + range) % range + inputMin;
    } else if (extrapolateLeft === "extend") {}
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    }
    if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "wrap") {
      const range = inputMax - inputMin;
      result = ((result - inputMin) % range + range) % range + inputMin;
    } else if (extrapolateRight === "extend") {}
  }
  if (outputMin === outputMax) {
    return outputMin;
  }
  result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  let i;
  for (i = 1;i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }
  return i - 1;
}
function checkValidInputRange(arr) {
  for (let i = 1;i < arr.length; ++i) {
    if (!(arr[i] > arr[i - 1])) {
      throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
    }
  }
}
function checkInfiniteRange(name, arr) {
  if (arr.length < 2) {
    throw new Error(name + " must have at least 2 elements");
  }
  for (const element of arr) {
    if (typeof element !== "number") {
      throw new Error(`${name} must contain only numbers`);
    }
    if (!Number.isFinite(element)) {
      throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
    }
  }
}
function interpolate(input, inputRange, outputRange, options) {
  if (typeof input === "undefined") {
    throw new Error("input can not be undefined");
  }
  if (typeof inputRange === "undefined") {
    throw new Error("inputRange can not be undefined");
  }
  if (typeof outputRange === "undefined") {
    throw new Error("outputRange can not be undefined");
  }
  if (inputRange.length !== outputRange.length) {
    throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
  }
  checkInfiniteRange("inputRange", inputRange);
  checkInfiniteRange("outputRange", outputRange);
  checkValidInputRange(inputRange);
  const easing = options?.easing ?? ((num) => num);
  let extrapolateLeft = "extend";
  if (options?.extrapolateLeft !== undefined) {
    extrapolateLeft = options.extrapolateLeft;
  }
  let extrapolateRight = "extend";
  if (options?.extrapolateRight !== undefined) {
    extrapolateRight = options.extrapolateRight;
  }
  if (typeof input !== "number") {
    throw new TypeError("Cannot interpolate an input which is not a number");
  }
  const range = findRange(input, inputRange);
  return interpolateFunction(input, [inputRange[range], inputRange[range + 1]], [outputRange[range], outputRange[range + 1]], {
    easing,
    extrapolateLeft,
    extrapolateRight
  });
}

// src/video/get-current-time.ts
var getExpectedMediaFrameUncorrected = ({
  frame,
  playbackRate,
  startFrom
}) => {
  return interpolate(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
};
var getMediaTime = ({
  fps,
  frame,
  playbackRate,
  startFrom
}) => {
  const expectedFrame = getExpectedMediaFrameUncorrected({
    frame,
    playbackRate,
    startFrom
  });
  const msPerFrame = 1000 / fps;
  return expectedFrame * msPerFrame / 1000;
};

// src/warn-about-non-seekable-media.ts
var alreadyWarned = {};
var warnAboutNonSeekableMedia = (ref, type) => {
  if (ref === null) {
    return;
  }
  if (ref.seekable.length === 0) {
    return;
  }
  if (ref.seekable.length > 1) {
    return;
  }
  if (alreadyWarned[ref.src]) {
    return;
  }
  const range = { start: ref.seekable.start(0), end: ref.seekable.end(0) };
  if (range.start === 0 && range.end === 0) {
    const msg = [
      `The media ${ref.src} cannot be seeked. This could be one of few reasons:`,
      "1) The media resource was replaced while the video is playing but it was not loaded yet.",
      "2) The media does not support seeking.",
      "3) The media was loaded with security headers prventing it from being included.",
      "Please see https://remotion.dev/docs/non-seekable-media for assistance."
    ].join(`
`);
    if (type === "console-error") {
      console.error(msg);
    } else if (type === "console-warning") {
      console.warn(`The media ${ref.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
    } else {
      throw new Error(msg);
    }
    alreadyWarned[ref.src] = true;
  }
};

// src/use-media-playback.ts
var useMediaPlayback = ({
  mediaRef,
  src,
  mediaType,
  playbackRate: localPlaybackRate,
  onlyWarnForMediaSeekingError,
  acceptableTimeshift,
  pauseWhenBuffering,
  isPremounting,
  onAutoPlayError
}) => {
  const { playbackRate: globalPlaybackRate } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);
  const frame = useCurrentFrame();
  const absoluteFrame = useTimelinePosition();
  const [playing] = usePlayingState();
  const buffering = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BufferingContextReact);
  const { fps } = useVideoConfig();
  const mediaStartsAt = useMediaStartsAt();
  const lastSeekDueToShift = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lastSeek = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  if (!buffering) {
    throw new Error("useMediaPlayback must be used inside a <BufferingContext>");
  }
  const isVariableFpsVideoMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const onVariableFpsVideoDetected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!src) {
      return;
    }
    if (isVariableFpsVideoMap.current[src]) {
      return;
    }
    Log.verbose(logLevel, `Detected ${src} as a variable FPS video. Disabling buffering while seeking.`);
    isVariableFpsVideoMap.current[src] = true;
  }, [logLevel, src]);
  const rvcCurrentTime = useRequestVideoCallbackTime({
    mediaRef,
    mediaType,
    lastSeek,
    onVariableFpsVideoDetected
  });
  const mediaTagCurrentTime = useCurrentTimeOfMediaTagWithUpdateTimeStamp(mediaRef);
  const desiredUnclampedTime = getMediaTime({
    frame,
    playbackRate: localPlaybackRate,
    startFrom: -mediaStartsAt,
    fps
  });
  const isMediaTagBuffering = useMediaBuffering({
    element: mediaRef,
    shouldBuffer: pauseWhenBuffering,
    isPremounting,
    logLevel,
    mountTime,
    src: src ?? null
  });
  const { bufferUntilFirstFrame, isBuffering } = useBufferUntilFirstFrame({
    mediaRef,
    mediaType,
    onVariableFpsVideoDetected,
    pauseWhenBuffering,
    logLevel,
    mountTime
  });
  const playbackRate = localPlaybackRate * globalPlaybackRate;
  const acceptableTimeShiftButLessThanDuration = (() => {
    const DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_NORMAL_PLAYBACK = 0.45;
    const DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION = DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_NORMAL_PLAYBACK + 0.2;
    const defaultAcceptableTimeshift = DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION;
    if (mediaRef.current?.duration) {
      return Math.min(mediaRef.current.duration, acceptableTimeshift ?? defaultAcceptableTimeshift);
    }
    return acceptableTimeshift ?? defaultAcceptableTimeshift;
  })();
  const isPlayerBuffering = useIsPlayerBuffering(buffering);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mediaRef.current?.paused) {
      return;
    }
    if (!playing) {
      playbackLogging({
        logLevel,
        tag: "pause",
        message: `Pausing ${mediaRef.current?.src} because ${isPremounting ? "media is premounting" : "Player is not playing"}`,
        mountTime
      });
      mediaRef.current?.pause();
      return;
    }
    const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
    const playerBufferingNotStateButLive = buffering.buffering.current;
    if (playerBufferingNotStateButLive && !isMediaTagBufferingOrStalled) {
      playbackLogging({
        logLevel,
        tag: "pause",
        message: `Pausing ${mediaRef.current?.src} because player is buffering but media tag is not`,
        mountTime
      });
      mediaRef.current?.pause();
    }
  }, [
    isBuffering,
    isMediaTagBuffering,
    buffering,
    isPlayerBuffering,
    isPremounting,
    logLevel,
    mediaRef,
    mediaType,
    mountTime,
    playing
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const playbackRateToSet = Math.max(0, playbackRate);
    if (mediaRef.current && mediaRef.current.playbackRate !== playbackRateToSet) {
      mediaRef.current.playbackRate = playbackRateToSet;
    }
  }, [mediaRef, playbackRate]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tagName = mediaType === "audio" ? "<Audio>" : "<Video>";
    if (!mediaRef.current) {
      throw new Error(`No ${mediaType} ref found`);
    }
    if (!src) {
      throw new Error(`No 'src' attribute was passed to the ${tagName} element.`);
    }
    const { duration } = mediaRef.current;
    const shouldBeTime = !Number.isNaN(duration) && Number.isFinite(duration) ? Math.min(duration, desiredUnclampedTime) : desiredUnclampedTime;
    const mediaTagTime = mediaTagCurrentTime.current.time;
    const rvcTime = rvcCurrentTime.current?.time ?? null;
    const isVariableFpsVideo = isVariableFpsVideoMap.current[src];
    const timeShiftMediaTag = Math.abs(shouldBeTime - mediaTagTime);
    const timeShiftRvcTag = rvcTime ? Math.abs(shouldBeTime - rvcTime) : null;
    const mostRecentTimeshift = rvcCurrentTime.current?.lastUpdate && rvcCurrentTime.current.time > mediaTagCurrentTime.current.lastUpdate ? timeShiftRvcTag : timeShiftMediaTag;
    const timeShift = timeShiftRvcTag && !isVariableFpsVideo ? mostRecentTimeshift : timeShiftMediaTag;
    if (timeShift > acceptableTimeShiftButLessThanDuration && lastSeekDueToShift.current !== shouldBeTime) {
      lastSeek.current = seek({
        mediaRef: mediaRef.current,
        time: shouldBeTime,
        logLevel,
        why: `because time shift is too big. shouldBeTime = ${shouldBeTime}, isTime = ${mediaTagTime}, requestVideoCallbackTime = ${rvcTime}, timeShift = ${timeShift}${isVariableFpsVideo ? ", isVariableFpsVideo = true" : ""}, isPremounting = ${isPremounting}, pauseWhenBuffering = ${pauseWhenBuffering}`,
        mountTime
      });
      lastSeekDueToShift.current = lastSeek.current;
      if (playing) {
        if (playbackRate > 0) {
          bufferUntilFirstFrame(shouldBeTime);
        }
        if (mediaRef.current.paused) {
          playAndHandleNotAllowedError({
            mediaRef,
            mediaType,
            onAutoPlayError,
            logLevel,
            mountTime,
            reason: "player is playing but media tag is paused, and just seeked"
          });
        }
      }
      if (!onlyWarnForMediaSeekingError) {
        warnAboutNonSeekableMedia(mediaRef.current, onlyWarnForMediaSeekingError ? "console-warning" : "console-error");
      }
      return;
    }
    const seekThreshold = playing ? 0.15 : 0.01;
    const makesSenseToSeek = Math.abs(mediaRef.current.currentTime - shouldBeTime) > seekThreshold;
    const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
    const isSomethingElseBuffering = buffering.buffering.current && !isMediaTagBufferingOrStalled;
    if (!playing || isSomethingElseBuffering) {
      if (makesSenseToSeek) {
        lastSeek.current = seek({
          mediaRef: mediaRef.current,
          time: shouldBeTime,
          logLevel,
          why: `not playing or something else is buffering. time offset is over seek threshold (${seekThreshold})`,
          mountTime
        });
      }
      return;
    }
    if (!playing || buffering.buffering.current) {
      return;
    }
    const pausedCondition = mediaRef.current.paused && !mediaRef.current.ended;
    const firstFrameCondition = absoluteFrame === 0;
    if (pausedCondition || firstFrameCondition) {
      const reason = pausedCondition ? "media tag is paused" : "absolute frame is 0";
      if (makesSenseToSeek) {
        lastSeek.current = seek({
          mediaRef: mediaRef.current,
          time: shouldBeTime,
          logLevel,
          why: `is over timeshift threshold (threshold = ${seekThreshold}) and ${reason}`,
          mountTime
        });
      }
      playAndHandleNotAllowedError({
        mediaRef,
        mediaType,
        onAutoPlayError,
        logLevel,
        mountTime,
        reason: `player is playing and ${reason}`
      });
      if (!isVariableFpsVideo && playbackRate > 0) {
        bufferUntilFirstFrame(shouldBeTime);
      }
    }
  }, [
    absoluteFrame,
    acceptableTimeShiftButLessThanDuration,
    bufferUntilFirstFrame,
    buffering.buffering,
    rvcCurrentTime,
    logLevel,
    desiredUnclampedTime,
    isBuffering,
    isMediaTagBuffering,
    mediaRef,
    mediaType,
    onlyWarnForMediaSeekingError,
    playbackRate,
    playing,
    src,
    onAutoPlayError,
    isPremounting,
    pauseWhenBuffering,
    mountTime,
    mediaTagCurrentTime
  ]);
};

// src/volume-position-state.ts

var MediaVolumeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  mediaMuted: false,
  mediaVolume: 1
});
var SetMediaVolumeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  setMediaMuted: () => {
    throw new Error("default");
  },
  setMediaVolume: () => {
    throw new Error("default");
  }
});
var useMediaVolumeState = () => {
  const { mediaVolume } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MediaVolumeContext);
  const { setMediaVolume } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SetMediaVolumeContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return [mediaVolume, setMediaVolume];
  }, [mediaVolume, setMediaVolume]);
};
var useMediaMutedState = () => {
  const { mediaMuted } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MediaVolumeContext);
  const { setMediaMuted } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SetMediaVolumeContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return [mediaMuted, setMediaMuted];
  }, [mediaMuted, setMediaMuted]);
};

// src/audio/AudioForPreview.tsx

var AudioForDevelopmentForwardRefFunction = (props, ref) => {
  const [initialShouldPreMountAudioElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.shouldPreMountAudioTags);
  if (props.shouldPreMountAudioTags !== initialShouldPreMountAudioElements) {
    throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
  }
  const logLevel = useLogLevel();
  const {
    volume,
    muted,
    playbackRate,
    shouldPreMountAudioTags,
    src,
    onDuration,
    acceptableTimeShiftInSeconds,
    _remotionInternalNeedsDurationCalculation,
    _remotionInternalNativeLoopPassed,
    _remotionInternalStack,
    allowAmplificationDuringRender,
    name,
    pauseWhenBuffering,
    showInTimeline,
    loopVolumeCurveBehavior,
    stack,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    toneFrequency,
    useWebAudioApi,
    ...nativeProps
  } = props;
  const _propsValid = true;
  if (!_propsValid) {
    throw new Error("typecheck error");
  }
  const [mediaVolume] = useMediaVolumeState();
  const [mediaMuted] = useMediaMutedState();
  const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const { hidden } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceVisibilityToggleContext);
  if (!src) {
    throw new TypeError("No 'src' was passed to <Audio>.");
  }
  const preloadedSrc = usePreload(src);
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const [timelineId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => String(Math.random()));
  const isSequenceHidden = hidden[timelineId] ?? false;
  const userPreferredVolume = evaluateVolume({
    frame: volumePropFrame,
    volume,
    mediaVolume
  });
  const crossOriginValue = getCrossOriginValue({
    crossOrigin,
    requestsVideoFrame: false
  });
  const propsToPass = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      muted: muted || mediaMuted || isSequenceHidden || userPreferredVolume <= 0,
      src: preloadedSrc,
      loop: _remotionInternalNativeLoopPassed,
      crossOrigin: crossOriginValue,
      ...nativeProps
    };
  }, [
    _remotionInternalNativeLoopPassed,
    isSequenceHidden,
    mediaMuted,
    muted,
    nativeProps,
    preloadedSrc,
    userPreferredVolume,
    crossOriginValue
  ]);
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => `audio-${random(src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}-muted:${props.muted}-loop:${props.loop}`, [
    src,
    sequenceContext?.relativeFrom,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.durationInFrames,
    props.muted,
    props.loop
  ]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SharedAudioContext);
  if (!context) {
    throw new Error("SharedAudioContext not found");
  }
  const { el: audioRef, mediaElementSourceNode } = useSharedAudio({
    aud: propsToPass,
    audioId: id,
    premounting: Boolean(sequenceContext?.premounting)
  });
  useMediaInTimeline({
    volume,
    mediaVolume,
    mediaRef: audioRef,
    src,
    mediaType: "audio",
    playbackRate: playbackRate ?? 1,
    displayName: name ?? null,
    id: timelineId,
    stack: _remotionInternalStack,
    showInTimeline,
    premountDisplay: null,
    onAutoPlayError: null,
    isPremounting: Boolean(sequenceContext?.premounting)
  });
  useMediaPlayback({
    mediaRef: audioRef,
    src,
    mediaType: "audio",
    playbackRate: playbackRate ?? 1,
    onlyWarnForMediaSeekingError: false,
    acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
    isPremounting: Boolean(sequenceContext?.premounting),
    pauseWhenBuffering,
    onAutoPlayError: null
  });
  useVolume({
    logLevel,
    mediaRef: audioRef,
    source: mediaElementSourceNode,
    volume: userPreferredVolume,
    shouldUseWebAudioApi: useWebAudioApi ?? false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
    return audioRef.current;
  }, [audioRef]);
  const currentOnDurationCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onDuration);
  currentOnDurationCallback.current = onDuration;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = audioRef;
    if (!current) {
      return;
    }
    if (current.duration) {
      currentOnDurationCallback.current?.(current.src, current.duration);
      return;
    }
    const onLoadedMetadata = () => {
      currentOnDurationCallback.current?.(current.src, current.duration);
    };
    current.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => {
      current.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [audioRef, src]);
  if (initialShouldPreMountAudioElements) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("audio", {
    ref: audioRef,
    preload: "metadata",
    crossOrigin: crossOriginValue,
    ...propsToPass
  });
};
var AudioForPreview = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(AudioForDevelopmentForwardRefFunction);

// src/audio/AudioForRendering.tsx


var AudioForRenderingRefForwardingFunction = (props, ref) => {
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    volume: volumeProp,
    playbackRate,
    allowAmplificationDuringRender,
    onDuration,
    toneFrequency,
    _remotionInternalNeedsDurationCalculation,
    _remotionInternalNativeLoopPassed,
    acceptableTimeShiftInSeconds,
    name,
    onError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    pauseWhenBuffering,
    ...nativeProps
  } = props;
  const absoluteFrame = useTimelinePosition();
  const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const frame = useCurrentFrame();
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const { registerRenderAsset, unregisterRenderAsset } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RenderAssetManager);
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => `audio-${random(props.src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}`, [
    props.src,
    sequenceContext?.relativeFrom,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.durationInFrames
  ]);
  const volume = evaluateVolume({
    volume: volumeProp,
    frame: volumePropFrame,
    mediaVolume: 1
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
    return audioRef.current;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!props.src) {
      throw new Error("No src passed");
    }
    if (!window.remotion_audioEnabled) {
      return;
    }
    if (props.muted) {
      return;
    }
    if (volume <= 0) {
      return;
    }
    registerRenderAsset({
      type: "audio",
      src: getAbsoluteSrc(props.src),
      id,
      frame: absoluteFrame,
      volume,
      mediaFrame: frame,
      playbackRate: props.playbackRate ?? 1,
      toneFrequency: toneFrequency ?? null,
      audioStartFrame: Math.max(0, -(sequenceContext?.relativeFrom ?? 0))
    });
    return () => unregisterRenderAsset(id);
  }, [
    props.muted,
    props.src,
    registerRenderAsset,
    absoluteFrame,
    id,
    unregisterRenderAsset,
    volume,
    volumePropFrame,
    frame,
    playbackRate,
    props.playbackRate,
    toneFrequency,
    sequenceContext?.relativeFrom
  ]);
  const { src } = props;
  const needsToRenderAudioTag = ref || _remotionInternalNeedsDurationCalculation;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (window.process?.env?.NODE_ENV === "test") {
      return;
    }
    if (!needsToRenderAudioTag) {
      return;
    }
    const newHandle = delayRender("Loading <Audio> duration with src=" + src, {
      retries: delayRenderRetries ?? undefined,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? undefined
    });
    const { current } = audioRef;
    const didLoad = () => {
      if (current?.duration) {
        onDuration(current.src, current.duration);
      }
      continueRender(newHandle);
    };
    if (current?.duration) {
      onDuration(current.src, current.duration);
      continueRender(newHandle);
    } else {
      current?.addEventListener("loadedmetadata", didLoad, { once: true });
    }
    return () => {
      current?.removeEventListener("loadedmetadata", didLoad);
      continueRender(newHandle);
    };
  }, [
    src,
    onDuration,
    needsToRenderAudioTag,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds
  ]);
  if (!needsToRenderAudioTag) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("audio", {
    ref: audioRef,
    ...nativeProps
  });
};
var AudioForRendering = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(AudioForRenderingRefForwardingFunction);

// src/audio/Audio.tsx

var AudioRefForwardingFunction = (props, ref) => {
  const audioContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SharedAudioContext);
  const {
    startFrom,
    endAt,
    trimBefore,
    trimAfter,
    name,
    stack,
    pauseWhenBuffering,
    showInTimeline,
    ...otherProps
  } = props;
  const { loop, ...propsOtherThanLoop } = props;
  const { fps } = useVideoConfig();
  const environment = getRemotionEnvironment();
  const { durations, setDurations } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DurationsContext);
  if (typeof props.src !== "string") {
    throw new TypeError(`The \`<Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
  }
  const preloadedSrc = usePreload(props.src);
  const onError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
    console.log(e.currentTarget.error);
    const errMessage = `Could not play audio with src ${preloadedSrc}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
    if (loop) {
      cancelRender(new Error(errMessage));
    } else {
      console.warn(errMessage);
    }
  }, [loop, preloadedSrc]);
  const onDuration = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((src, durationInSeconds) => {
    setDurations({ type: "got-duration", durationInSeconds, src });
  }, [setDurations]);
  const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props.src)];
  validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
  const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  });
  if (loop && durationFetched !== undefined) {
    if (!Number.isFinite(durationFetched)) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Audio, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalNativeLoopPassed: true
      });
    }
    const duration = durationFetched * fps;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Loop, {
      layout: "none",
      durationInFrames: calculateLoopDuration({
        endAt: trimAfterValue ?? endAt,
        mediaDuration: duration,
        playbackRate: props.playbackRate ?? 1,
        startFrom: trimBeforeValue ?? startFrom
      }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Audio, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalNativeLoopPassed: true
      })
    });
  }
  if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
      layout: "none",
      from: 0 - (trimBeforeValue ?? 0),
      showInTimeline: false,
      durationInFrames: trimAfterValue,
      name,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Audio, {
        _remotionInternalNeedsDurationCalculation: Boolean(loop),
        pauseWhenBuffering: pauseWhenBuffering ?? false,
        ...otherProps,
        ref
      })
    });
  }
  validateMediaProps(props, "Audio");
  if (environment.isRendering) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AudioForRendering, {
      onDuration,
      ...props,
      ref,
      onError,
      _remotionInternalNeedsDurationCalculation: Boolean(loop)
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AudioForPreview, {
    _remotionInternalNativeLoopPassed: props._remotionInternalNativeLoopPassed ?? false,
    _remotionInternalStack: stack ?? null,
    shouldPreMountAudioTags: audioContext !== null && audioContext.numberOfAudioTags > 0,
    ...props,
    ref,
    onError,
    onDuration,
    pauseWhenBuffering: pauseWhenBuffering ?? false,
    _remotionInternalNeedsDurationCalculation: Boolean(loop),
    showInTimeline: showInTimeline ?? true
  });
};
var Audio = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(AudioRefForwardingFunction);
addSequenceStackTraces(Audio);
// src/Composition.tsx



// src/Folder.tsx


// src/validation/validate-folder-name.ts
var getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
var isFolderNameValid = (name) => name.match(getRegex());
var validateFolderName = (name) => {
  if (name === undefined || name === null) {
    throw new TypeError("You must pass a name to a <Folder />.");
  }
  if (typeof name !== "string") {
    throw new TypeError(`The "name" you pass into <Folder /> must be a string. Got: ${typeof name}`);
  }
  if (!isFolderNameValid(name)) {
    throw new Error(`Folder name can only contain a-z, A-Z, 0-9 and -. You passed ${name}`);
  }
};
var invalidFolderNameErrorMessage = (/* unused pure expression or super */ null && (`Folder name must match ${String(getRegex())}`));

// src/Folder.tsx

var FolderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  folderName: null,
  parentName: null
});
var Folder = ({ name, children }) => {
  const parent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FolderContext);
  const { registerFolder, unregisterFolder } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionSetters);
  validateFolderName(name);
  const parentNameArr = [parent.parentName, parent.folderName].filter(truthy);
  const parentName = parentNameArr.length === 0 ? null : parentNameArr.join("/");
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      folderName: name,
      parentName
    };
  }, [name, parentName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerFolder(name, parentName);
    return () => {
      unregisterFolder(name, parentName);
    };
  }, [name, parent.folderName, parentName, registerFolder, unregisterFolder]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FolderContext.Provider, {
    value,
    children
  });
};

// src/loading-indicator.tsx

var rotate = {
  transform: `rotate(90deg)`
};
var ICON_SIZE = 40;
var label = {
  color: "white",
  fontSize: 14,
  fontFamily: "sans-serif"
};
var container = {
  justifyContent: "center",
  alignItems: "center"
};
var Loading = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(AbsoluteFill, {
    style: container,
    id: "remotion-comp-loading",
    children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
        type: "text/css",
        children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			`
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "-100 -100 400 400",
        style: rotate,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          fill: "#555",
          stroke: "#555",
          strokeWidth: "100",
          strokeLinejoin: "round",
          d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
        })
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        style: label,
        children: [
          "Resolving ",
          "<Suspense>",
          "..."
        ]
      })
    ]
  });
};

// src/portal-node.ts
var _portalNode = null;
var portalNode = () => {
  if (!_portalNode) {
    if (typeof document === "undefined") {
      throw new Error("Tried to call an API that only works in the browser from outside the browser");
    }
    _portalNode = document.createElement("div");
    _portalNode.style.position = "absolute";
    _portalNode.style.top = "0px";
    _portalNode.style.left = "0px";
    _portalNode.style.right = "0px";
    _portalNode.style.bottom = "0px";
    _portalNode.style.width = "100%";
    _portalNode.style.height = "100%";
    _portalNode.style.display = "flex";
    _portalNode.style.flexDirection = "column";
    const containerNode = document.createElement("div");
    containerNode.style.position = "fixed";
    containerNode.style.top = -999999 + "px";
    containerNode.appendChild(_portalNode);
    document.body.appendChild(containerNode);
  }
  return _portalNode;
};

// src/use-lazy-component.ts

var useLazyComponent = ({
  compProps,
  componentName,
  noSuspense
}) => {
  const lazy = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if ("component" in compProps) {
      if (typeof document === "undefined" || noSuspense) {
        return compProps.component;
      }
      if (typeof compProps.component === "undefined") {
        throw new Error(`A value of \`undefined\` was passed to the \`component\` prop. Check the value you are passing to the <${componentName}/> component.`);
      }
      return react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.resolve({ default: compProps.component }));
    }
    if ("lazyComponent" in compProps && typeof compProps.lazyComponent !== "undefined") {
      if (typeof compProps.lazyComponent === "undefined") {
        throw new Error(`A value of \`undefined\` was passed to the \`lazyComponent\` prop. Check the value you are passing to the <${componentName}/> component.`);
      }
      return react__WEBPACK_IMPORTED_MODULE_0__.lazy(compProps.lazyComponent);
    }
    throw new Error("You must pass either 'component' or 'lazyComponent'");
  }, [compProps.component, compProps.lazyComponent]);
  return lazy;
};

// src/validation/validate-composition-id.ts
var getRegex2 = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
var isCompositionIdValid = (id) => id.match(getRegex2());
var validateCompositionId = (id) => {
  if (!isCompositionIdValid(id)) {
    throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${id}`);
  }
};
var invalidCompositionErrorMessage = `Composition ID must match ${String(getRegex2())}`;

// src/validation/validate-default-props.ts
var validateDefaultAndInputProps = (defaultProps, name, compositionId) => {
  if (!defaultProps) {
    return;
  }
  if (typeof defaultProps !== "object") {
    throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
  }
  if (Array.isArray(defaultProps)) {
    throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
  }
};

// src/Composition.tsx

var Fallback = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fallback = delayRender("Waiting for Root component to unsuspend");
    return () => continueRender(fallback);
  }, []);
  return null;
};
var InnerComposition = ({
  width,
  height,
  fps,
  durationInFrames,
  id,
  defaultProps,
  schema,
  ...compProps
}) => {
  const compManager = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionSetters);
  const { registerComposition, unregisterComposition } = compManager;
  const video = useVideo();
  const lazy = useLazyComponent({
    compProps,
    componentName: "Composition",
    noSuspense: false
  });
  const nonce = useNonce();
  const isPlayer = useIsPlayer();
  const environment = getRemotionEnvironment();
  const canUseComposition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CanUseRemotionHooks);
  if (canUseComposition) {
    if (isPlayer) {
      throw new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.");
    }
    throw new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
  }
  const { folderName, parentName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FolderContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!id) {
      throw new Error("No id for composition passed.");
    }
    validateCompositionId(id);
    validateDefaultAndInputProps(defaultProps, "defaultProps", id);
    registerComposition({
      durationInFrames: durationInFrames ?? undefined,
      fps: fps ?? undefined,
      height: height ?? undefined,
      width: width ?? undefined,
      id,
      folderName,
      component: lazy,
      defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
      nonce,
      parentFolderName: parentName,
      schema: schema ?? null,
      calculateMetadata: compProps.calculateMetadata ?? null
    });
    return () => {
      unregisterComposition(id);
    };
  }, [
    durationInFrames,
    fps,
    height,
    lazy,
    id,
    folderName,
    defaultProps,
    width,
    nonce,
    parentName,
    schema,
    compProps.calculateMetadata,
    registerComposition,
    unregisterComposition
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.dispatchEvent(new CustomEvent(PROPS_UPDATED_EXTERNALLY, {
      detail: {
        resetUnsaved: id
      }
    }));
  }, [defaultProps, id]);
  const resolved = useResolvedVideoConfig(id);
  if (environment.isStudio && video && video.component === lazy) {
    const Comp = lazy;
    if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
      return null;
    }
    return (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CanUseRemotionHooksProvider, {
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Loading, {}),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp, {
          ...resolved.result.props ?? {}
        })
      })
    }), portalNode());
  }
  if (environment.isRendering && video && video.component === lazy) {
    const Comp = lazy;
    if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
      return null;
    }
    return (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CanUseRemotionHooksProvider, {
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Fallback, {}),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp, {
          ...resolved.result.props ?? {}
        })
      })
    }), portalNode());
  }
  return null;
};
var Composition = (props2) => {
  const { onlyRenderComposition } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionSetters);
  if (onlyRenderComposition && onlyRenderComposition !== props2.id) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InnerComposition, {
    ...props2
  });
};
// src/bezier.ts
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function a(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function b(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function c(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((a(aA1, aA2) * aT + b(aA1, aA2)) * aT + c(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * a(aA1, aA2) * aT * aT + 2 * b(aA1, aA2) * aT + c(aA1);
}
function binarySubdivide({
  aX,
  _aA,
  _aB,
  mX1,
  mX2
}) {
  let currentX;
  let currentT;
  let i = 0;
  let aA = _aA;
  let aB = _aB;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
  let aGuessT = _aGuessT;
  for (let i = 0;i < NEWTON_ITERATIONS; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (let i = 0;i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (;currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    }
    if (initialSlope === 0) {
      return guessForT;
    }
    return binarySubdivide({
      aX,
      _aA: intervalStart,
      _aB: intervalStart + kSampleStepSize,
      mX1,
      mX2
    });
  }
  return function(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x;
    }
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}

// src/easing.ts
class Easing {
  static step0(n) {
    return n > 0 ? 1 : 0;
  }
  static step1(n) {
    return n >= 1 ? 1 : 0;
  }
  static linear(t) {
    return t;
  }
  static ease(t) {
    return Easing.bezier(0.42, 0, 1, 1)(t);
  }
  static quad(t) {
    return t * t;
  }
  static cubic(t) {
    return t * t * t;
  }
  static poly(n) {
    return (t) => t ** n;
  }
  static sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  }
  static circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  static exp(t) {
    return 2 ** (10 * (t - 1));
  }
  static elastic(bounciness = 1) {
    const p = bounciness * Math.PI;
    return (t) => 1 - Math.cos(t * Math.PI / 2) ** 3 * Math.cos(t * p);
  }
  static back(s = 1.70158) {
    return (t) => t * t * ((s + 1) * t - s);
  }
  static bounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    if (t < 2 / 2.75) {
      const t2_ = t - 1.5 / 2.75;
      return 7.5625 * t2_ * t2_ + 0.75;
    }
    if (t < 2.5 / 2.75) {
      const t2_ = t - 2.25 / 2.75;
      return 7.5625 * t2_ * t2_ + 0.9375;
    }
    const t2 = t - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  }
  static bezier(x1, y1, x2, y2) {
    return bezier(x1, y1, x2, y2);
  }
  static in(easing) {
    return easing;
  }
  static out(easing) {
    return (t) => 1 - easing(1 - t);
  }
  static inOut(easing) {
    return (t) => {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }
      return 1 - easing((1 - t) * 2) / 2;
    };
  }
}
// src/v5-flag.ts
var ENABLE_V5_BREAKING_CHANGES = false;

// src/get-static-files.ts
var warnedServer = false;
var warnedPlayer = false;
var warnServerOnce = () => {
  if (warnedServer) {
    return;
  }
  warnedServer = true;
  console.warn("Called getStaticFiles() on the server. The API is only available in the browser. An empty array was returned.");
};
var warnPlayerOnce = () => {
  if (warnedPlayer) {
    return;
  }
  warnedPlayer = true;
  console.warn("Called getStaticFiles() while using the Remotion Player. The API is only available while using the Remotion Studio. An empty array was returned.");
};
var getStaticFiles = () => {
  if (ENABLE_V5_BREAKING_CHANGES) {
    throw new Error("getStaticFiles() has moved into the `@remotion/studio` package. Update your imports.");
  }
  if (typeof document === "undefined") {
    warnServerOnce();
    return [];
  }
  if (window.remotion_isPlayer) {
    warnPlayerOnce();
    return [];
  }
  return window.remotion_staticFiles;
};
// src/IFrame.tsx


var IFrameRefForwarding = ({
  onLoad,
  onError,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  ...props2
}, ref) => {
  const [handle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => delayRender(`Loading <IFrame> with source ${props2.src}`, {
    retries: delayRenderRetries ?? undefined,
    timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? undefined
  }));
  const didLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
    continueRender(handle);
    onLoad?.(e);
  }, [handle, onLoad]);
  const didGetError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
    continueRender(handle);
    if (onError) {
      onError(e);
    } else {
      console.error("Error loading iframe:", e, "Handle the event using the onError() prop to make this message disappear.");
    }
  }, [handle, onError]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
    ...props2,
    ref,
    onError: didGetError,
    onLoad: didLoad
  });
};
var IFrame = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(IFrameRefForwarding);
// src/Img.tsx


function exponentialBackoff(errorCount) {
  return 1000 * 2 ** (errorCount - 1);
}
var ImgRefForwarding = ({
  onError,
  maxRetries = 2,
  src,
  pauseWhenLoading,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  onImageFrame,
  crossOrigin,
  ...props2
}, ref) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const errors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const { delayPlayback } = useBufferState();
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  if (!src) {
    throw new Error('No "src" prop was passed to <Img>.');
  }
  const _propsValid = true;
  if (!_propsValid) {
    throw new Error("typecheck error");
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
    return imageRef.current;
  }, []);
  const actualSrc = usePreload(src);
  const retryIn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((timeout) => {
    if (!imageRef.current) {
      return;
    }
    const currentSrc = imageRef.current.src;
    setTimeout(() => {
      if (!imageRef.current) {
        return;
      }
      const newSrc = imageRef.current?.src;
      if (newSrc !== currentSrc) {
        return;
      }
      imageRef.current.removeAttribute("src");
      imageRef.current.setAttribute("src", newSrc);
    }, timeout);
  }, []);
  const didGetError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
    if (!errors.current) {
      return;
    }
    errors.current[imageRef.current?.src] = (errors.current[imageRef.current?.src] ?? 0) + 1;
    if (onError && (errors.current[imageRef.current?.src] ?? 0) > maxRetries) {
      onError(e);
      return;
    }
    if ((errors.current[imageRef.current?.src] ?? 0) <= maxRetries) {
      const backoff = exponentialBackoff(errors.current[imageRef.current?.src] ?? 0);
      console.warn(`Could not load image with source ${imageRef.current?.src}, retrying again in ${backoff}ms`);
      retryIn(backoff);
      return;
    }
    cancelRender("Error loading image with src: " + imageRef.current?.src);
  }, [maxRetries, onError, retryIn]);
  if (typeof window !== "undefined") {
    const isPremounting = Boolean(sequenceContext?.premounting);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
      if (window.process?.env?.NODE_ENV === "test") {
        if (imageRef.current) {
          imageRef.current.src = actualSrc;
        }
        return;
      }
      const { current } = imageRef;
      if (!current) {
        return;
      }
      const newHandle = delayRender("Loading <Img> with src=" + actualSrc, {
        retries: delayRenderRetries ?? undefined,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? undefined
      });
      const unblock = pauseWhenLoading && !isPremounting ? delayPlayback().unblock : () => {
        return;
      };
      let unmounted = false;
      const onComplete = () => {
        if (unmounted) {
          continueRender(newHandle);
          return;
        }
        if ((errors.current[imageRef.current?.src] ?? 0) > 0) {
          delete errors.current[imageRef.current?.src];
          console.info(`Retry successful - ${imageRef.current?.src} is now loaded`);
        }
        if (current) {
          onImageFrame?.(current);
        }
        unblock();
        continueRender(newHandle);
      };
      if (!imageRef.current) {
        onComplete();
        return;
      }
      current.src = actualSrc;
      if (current.complete) {
        onComplete();
      } else {
        current.decode().then(onComplete).catch((err) => {
          console.warn(err);
          if (current.complete) {
            onComplete();
          } else {
            current.addEventListener("load", onComplete);
          }
        });
      }
      return () => {
        unmounted = true;
        current.removeEventListener("load", onComplete);
        unblock();
        continueRender(newHandle);
      };
    }, [
      actualSrc,
      delayPlayback,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      pauseWhenLoading,
      isPremounting,
      onImageFrame
    ]);
  }
  const crossOriginValue = getCrossOriginValue({
    crossOrigin,
    requestsVideoFrame: false
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    ...props2,
    ref: imageRef,
    crossOrigin: crossOriginValue,
    onError: didGetError
  });
};
var Img = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ImgRefForwarding);
// src/internals.ts


// src/CompositionManager.tsx


var compositionsRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
var CompositionManagerProvider = ({
  children,
  numberOfAudioTags,
  onlyRenderComposition,
  currentCompositionMetadata,
  audioLatencyHint
}) => {
  const [compositions, setCompositions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const currentcompositionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(compositions);
  const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [canvasContent, setCanvasContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const updateCompositions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((updateComps) => {
    setCompositions((comps) => {
      const updated = updateComps(comps);
      currentcompositionsRef.current = updated;
      return updated;
    });
  }, []);
  const registerComposition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((comp) => {
    updateCompositions((comps) => {
      if (comps.find((c2) => c2.id === comp.id)) {
        throw new Error(`Multiple composition with id ${comp.id} are registered.`);
      }
      const value = [...comps, comp].slice().sort((a2, b2) => a2.nonce - b2.nonce);
      return value;
    });
  }, [updateCompositions]);
  const unregisterComposition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id) => {
    setCompositions((comps) => {
      return comps.filter((c2) => c2.id !== id);
    });
  }, []);
  const registerFolder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, parent) => {
    setFolders((prevFolders) => {
      return [
        ...prevFolders,
        {
          name,
          parent
        }
      ];
    });
  }, []);
  const unregisterFolder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, parent) => {
    setFolders((prevFolders) => {
      return prevFolders.filter((p) => !(p.name === name && p.parent === parent));
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(compositionsRef, () => {
    return {
      getCompositions: () => currentcompositionsRef.current
    };
  }, []);
  const composition = compositions.find((c2) => canvasContent?.type === "composition" ? c2.id === canvasContent.compositionId : null);
  const updateCompositionDefaultProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, newDefaultProps) => {
    setCompositions((comps) => {
      const updated = comps.map((c2) => {
        if (c2.id === id) {
          return {
            ...c2,
            defaultProps: newDefaultProps
          };
        }
        return c2;
      });
      return updated;
    });
  }, []);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      compositions,
      folders,
      currentCompositionMetadata,
      canvasContent
    };
  }, [compositions, folders, currentCompositionMetadata, canvasContent]);
  const setters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      registerComposition,
      unregisterComposition,
      registerFolder,
      unregisterFolder,
      setCanvasContent,
      updateCompositionDefaultProps,
      onlyRenderComposition
    };
  }, [
    registerComposition,
    registerFolder,
    unregisterComposition,
    unregisterFolder,
    updateCompositionDefaultProps,
    onlyRenderComposition
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CompositionManager.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CompositionSetters.Provider, {
      value: setters,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SequenceManagerProvider, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RenderAssetManagerProvider, {
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ResolveCompositionConfig, {
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SharedAudioContextProvider, {
              numberOfAudioTags,
              component: composition?.component ?? null,
              audioLatencyHint,
              children
            })
          })
        })
      })
    })
  });
};

// src/default-css.ts
var exports_default_css = {};
__export(exports_default_css, {
  makeDefaultPreviewCSS: () => makeDefaultPreviewCSS,
  injectCSS: () => injectCSS,
  OFFTHREAD_VIDEO_CLASS_NAME: () => OFFTHREAD_VIDEO_CLASS_NAME
});
var injected = {};
var injectCSS = (css) => {
  if (typeof document === "undefined") {
    return;
  }
  if (injected[css]) {
    return;
  }
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  head.prepend(style);
  injected[css] = true;
};
var OFFTHREAD_VIDEO_CLASS_NAME = "__remotion_offthreadvideo";
var makeDefaultPreviewCSS = (scope, backgroundColor) => {
  if (!scope) {
    return `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${backgroundColor};
    }
    .${OFFTHREAD_VIDEO_CLASS_NAME} {
      object-fit: contain;
    }
    `;
  }
  return `
    ${scope} * {
      box-sizing: border-box;
    }
    ${scope} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${scope} .${OFFTHREAD_VIDEO_CLASS_NAME} {
      object-fit: contain;
    }
  `;
};

// src/get-preview-dom-element.ts
var REMOTION_STUDIO_CONTAINER_ELEMENT = "__remotion-studio-container";
var getPreviewDomElement = () => {
  return document.getElementById(REMOTION_STUDIO_CONTAINER_ELEMENT);
};

// src/register-root.ts
var Root = null;
var listeners = [];
var registerRoot = (comp) => {
  if (!comp) {
    throw new Error(`You must pass a React component to registerRoot(), but ${JSON.stringify(comp)} was passed.`);
  }
  if (Root) {
    throw new Error("registerRoot() was called more than once.");
  }
  Root = comp;
  listeners.forEach((l) => {
    l(comp);
  });
};
var getRoot = () => {
  return Root;
};
var waitForRoot = (fn) => {
  if (Root) {
    fn(Root);
    return () => {
      return;
    };
  }
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
};

// src/RemotionRoot.tsx


var RemotionRoot = ({
  children,
  numberOfAudioTags,
  logLevel,
  onlyRenderComposition,
  currentCompositionMetadata,
  audioLatencyHint
}) => {
  const [remotionRootId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => String(random(null)));
  const [frame, setFrame] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => getInitialFrameState());
  const [playing, setPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const imperativePlaying = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const [fastRefreshes, setFastRefreshes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [manualRefreshes, setManualRefreshes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [playbackRate, setPlaybackRate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const audioAndVideoTags = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  if (typeof window !== "undefined") {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
      window.remotion_setFrame = (f, composition, attempt) => {
        window.remotion_attempt = attempt;
        const id = delayRender(`Setting the current frame to ${f}`);
        let asyncUpdate = true;
        setFrame((s) => {
          const currentFrame = s[composition] ?? window.remotion_initialFrame;
          if (currentFrame === f) {
            asyncUpdate = false;
            return s;
          }
          return {
            ...s,
            [composition]: f
          };
        });
        if (asyncUpdate) {
          requestAnimationFrame(() => continueRender(id));
        } else {
          continueRender(id);
        }
      };
      window.remotion_isPlayer = false;
    }, []);
  }
  const timelineContextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      frame,
      playing,
      imperativePlaying,
      rootId: remotionRootId,
      playbackRate,
      setPlaybackRate,
      audioAndVideoTags
    };
  }, [frame, playbackRate, playing, remotionRootId]);
  const setTimelineContextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      setFrame,
      setPlaying
    };
  }, []);
  const nonceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let counter = 0;
    return {
      getNonce: () => counter++,
      fastRefreshes,
      manualRefreshes
    };
  }, [fastRefreshes, manualRefreshes]);
  const setNonceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      increaseManualRefreshes: () => {
        setManualRefreshes((i) => i + 1);
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (true) {
      if (__webpack_module__.hot) {
        __webpack_module__.hot.addStatusHandler((status) => {
          if (status === "idle") {
            setFastRefreshes((i) => i + 1);
          }
        });
      }
    }
  }, []);
  const logging = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return { logLevel, mountTime: Date.now() };
  }, [logLevel]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LogLevelContext.Provider, {
    value: logging,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NonceContext.Provider, {
      value: nonceContext,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SetNonceContext.Provider, {
        value: setNonceContext,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimelineContext.Provider, {
          value: timelineContextValue,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SetTimelineContext.Provider, {
            value: setTimelineContextValue,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorPropsProvider, {
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PrefetchProvider, {
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CompositionManagerProvider, {
                  numberOfAudioTags,
                  onlyRenderComposition,
                  currentCompositionMetadata,
                  audioLatencyHint,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DurationsContextProvider, {
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BufferingProvider, {
                      children
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
};

// src/setup-env-variables.ts
var getEnvVariables = () => {
  if (getRemotionEnvironment().isRendering) {
    const param = window.remotion_envVariables;
    if (!param) {
      return {};
    }
    return { ...JSON.parse(param), NODE_ENV: "production" };
  }
  if (false) {}
  return {
    NODE_ENV: "production"
  };
};
var setupEnvVariables = () => {
  const env = getEnvVariables();
  if (!window.process) {
    window.process = {};
  }
  if (!window.process.env) {
    window.process.env = {};
  }
  Object.keys(env).forEach((key) => {
    window.process.env[key] = env[key];
  });
};

// src/use-current-scale.ts

var CurrentScaleContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
var PreviewSizeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  setSize: () => {
    return;
  },
  size: { size: "auto", translation: { x: 0, y: 0 } }
});
var calculateScale = ({
  canvasSize,
  compositionHeight,
  compositionWidth,
  previewSize
}) => {
  const heightRatio = canvasSize.height / compositionHeight;
  const widthRatio = canvasSize.width / compositionWidth;
  const ratio = Math.min(heightRatio, widthRatio);
  return previewSize === "auto" ? ratio : Number(previewSize);
};
var useCurrentScale = (options) => {
  const hasContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CurrentScaleContext);
  const zoomContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(PreviewSizeContext);
  const config = useUnsafeVideoConfig();
  if (hasContext === null || config === null || zoomContext === null) {
    if (options?.dontThrowIfOutsideOfRemotion) {
      return 1;
    }
    if (getRemotionEnvironment().isRendering) {
      return 1;
    }
    throw new Error([
      "useCurrentScale() was called outside of a Remotion context.",
      "This hook can only be called in a component that is being rendered by Remotion.",
      "If you want to this hook to return 1 outside of Remotion, pass {dontThrowIfOutsideOfRemotion: true} as an option.",
      "If you think you called this hook in a Remotion component, make sure all versions of Remotion are aligned."
    ].join(`
`));
  }
  if (hasContext.type === "scale") {
    return hasContext.scale;
  }
  return calculateScale({
    canvasSize: hasContext.canvasSize,
    compositionHeight: config.height,
    compositionWidth: config.width,
    previewSize: zoomContext.size.size
  });
};

// src/watch-static-file.ts
var WATCH_REMOTION_STATIC_FILES = "remotion_staticFilesChanged";
var watchStaticFile = (fileName, callback) => {
  if (ENABLE_V5_BREAKING_CHANGES) {
    throw new Error("watchStaticFile() has moved into the `@remotion/studio` package. Update your imports.");
  }
  if (!getRemotionEnvironment().isStudio) {
    console.warn("The watchStaticFile() API is only available while using the Remotion Studio.");
    return { cancel: () => {
      return;
    } };
  }
  const withoutStaticBase = fileName.startsWith(window.remotion_staticBase) ? fileName.replace(window.remotion_staticBase, "") : fileName;
  const withoutLeadingSlash = withoutStaticBase.startsWith("/") ? withoutStaticBase.slice(1) : withoutStaticBase;
  let prevFileData = window.remotion_staticFiles.find((file) => file.name === withoutLeadingSlash);
  const checkFile = (event) => {
    const staticFiles = event.detail.files;
    const newFileData = staticFiles.find((file) => file.name === withoutLeadingSlash);
    if (!newFileData) {
      if (prevFileData !== undefined) {
        callback(null);
      }
      prevFileData = undefined;
      return;
    }
    if (prevFileData === undefined || prevFileData.lastModified !== newFileData.lastModified) {
      callback(newFileData);
      prevFileData = newFileData;
    }
  };
  window.addEventListener(WATCH_REMOTION_STATIC_FILES, checkFile);
  const cancel = () => {
    return window.removeEventListener(WATCH_REMOTION_STATIC_FILES, checkFile);
  };
  return { cancel };
};

// src/wrap-remotion-context.tsx


function useRemotionContexts() {
  const compositionManagerCtx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CompositionManager);
  const timelineContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(TimelineContext);
  const setTimelineContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SetTimelineContext);
  const sequenceContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SequenceContext);
  const nonceContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NonceContext);
  const canUseRemotionHooksContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CanUseRemotionHooks);
  const preloadContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(PreloadContext);
  const resolveCompositionContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ResolveCompositionContext);
  const renderAssetManagerContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RenderAssetManager);
  const sequenceManagerContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SequenceManager);
  const bufferManagerContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(BufferingContextReact);
  const logLevelContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(LogLevelContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    compositionManagerCtx,
    timelineContext,
    setTimelineContext,
    sequenceContext,
    nonceContext,
    canUseRemotionHooksContext,
    preloadContext,
    resolveCompositionContext,
    renderAssetManagerContext,
    sequenceManagerContext,
    bufferManagerContext,
    logLevelContext
  }), [
    compositionManagerCtx,
    nonceContext,
    sequenceContext,
    setTimelineContext,
    timelineContext,
    canUseRemotionHooksContext,
    preloadContext,
    resolveCompositionContext,
    renderAssetManagerContext,
    sequenceManagerContext,
    bufferManagerContext,
    logLevelContext
  ]);
}
var RemotionContextProvider = (props2) => {
  const { children, contexts } = props2;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LogLevelContext.Provider, {
    value: contexts.logLevelContext,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CanUseRemotionHooks.Provider, {
      value: contexts.canUseRemotionHooksContext,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NonceContext.Provider, {
        value: contexts.nonceContext,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PreloadContext.Provider, {
          value: contexts.preloadContext,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CompositionManager.Provider, {
            value: contexts.compositionManagerCtx,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SequenceManager.Provider, {
              value: contexts.sequenceManagerContext,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RenderAssetManager.Provider, {
                value: contexts.renderAssetManagerContext,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ResolveCompositionContext.Provider, {
                  value: contexts.resolveCompositionContext,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimelineContext.Provider, {
                    value: contexts.timelineContext,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SetTimelineContext.Provider, {
                      value: contexts.setTimelineContext,
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SequenceContext.Provider, {
                        value: contexts.sequenceContext,
                        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BufferingContextReact.Provider, {
                          value: contexts.bufferManagerContext,
                          children
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
};

// src/internals.ts
var compositionSelectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
var Internals = {
  useUnsafeVideoConfig,
  Timeline: exports_timeline_position_state,
  CompositionManager,
  CompositionSetters,
  SequenceManager,
  SequenceVisibilityToggleContext,
  RemotionRoot,
  useVideo,
  getRoot,
  useMediaVolumeState,
  useMediaMutedState,
  useLazyComponent,
  truthy,
  SequenceContext,
  useRemotionContexts,
  RemotionContextProvider,
  CSSUtils: exports_default_css,
  setupEnvVariables,
  MediaVolumeContext,
  SetMediaVolumeContext,
  getRemotionEnvironment,
  SharedAudioContext,
  SharedAudioContextProvider,
  invalidCompositionErrorMessage,
  isCompositionIdValid,
  getPreviewDomElement,
  compositionsRef,
  portalNode,
  waitForRoot,
  CanUseRemotionHooksProvider,
  CanUseRemotionHooks,
  PrefetchProvider,
  DurationsContextProvider,
  IsPlayerContextProvider,
  useIsPlayer,
  EditorPropsProvider,
  EditorPropsContext,
  usePreload,
  NonceContext,
  SetNonceContext,
  resolveVideoConfig,
  useResolvedVideoConfig,
  resolveCompositionsRef,
  ResolveCompositionConfig,
  REMOTION_STUDIO_CONTAINER_ELEMENT,
  RenderAssetManager,
  persistCurrentFrame,
  useTimelineSetFrame,
  isIosSafari,
  WATCH_REMOTION_STATIC_FILES,
  addSequenceStackTraces,
  useMediaStartsAt,
  BufferingProvider,
  BufferingContextReact,
  enableSequenceStackTraces,
  CurrentScaleContext,
  PreviewSizeContext,
  calculateScale,
  editorPropsProviderRef,
  PROPS_UPDATED_EXTERNALLY,
  validateRenderAsset,
  Log,
  LogLevelContext,
  useLogLevel,
  playbackLogging,
  timeValueRef,
  compositionSelectorRef
};
// src/interpolate-colors.ts
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...args) {
  return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
}
function getMatchers() {
  const cachedMatchers = {
    rgb: undefined,
    rgba: undefined,
    hsl: undefined,
    hsla: undefined,
    hex3: undefined,
    hex4: undefined,
    hex5: undefined,
    hex6: undefined,
    hex8: undefined
  };
  if (cachedMatchers.rgb === undefined) {
    cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
    cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
    cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
    cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
    cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
    cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
  }
  return cachedMatchers;
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b2 = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b2 * 255) << 8;
}
function parse255(str) {
  const int = Number.parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}
function parse360(str) {
  const int = Number.parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = Number.parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = Number.parseFloat(str);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}
var colorNames = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
function normalizeColor(color) {
  const matchers = getMatchers();
  let match;
  if (matchers.hex6) {
    if (match = matchers.hex6.exec(color)) {
      return Number.parseInt(match[1] + "ff", 16) >>> 0;
    }
  }
  if (colorNames[color] !== undefined) {
    return colorNames[color];
  }
  if (matchers.rgb) {
    if (match = matchers.rgb.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
    }
  }
  if (matchers.rgba) {
    if (match = matchers.rgba.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
    }
  }
  if (matchers.hex3) {
    if (match = matchers.hex3.exec(color)) {
      return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
    }
  }
  if (matchers.hex8) {
    if (match = matchers.hex8.exec(color)) {
      return Number.parseInt(match[1], 16) >>> 0;
    }
  }
  if (matchers.hex4) {
    if (match = matchers.hex4.exec(color)) {
      return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
    }
  }
  if (matchers.hsl) {
    if (match = matchers.hsl.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
    }
  }
  if (matchers.hsla) {
    if (match = matchers.hsla.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
    }
  }
  throw new Error(`invalid color string ${color} provided`);
}
var opacity = (c2) => {
  return (c2 >> 24 & 255) / 255;
};
var red = (c2) => {
  return c2 >> 16 & 255;
};
var green = (c2) => {
  return c2 >> 8 & 255;
};
var blue = (c2) => {
  return c2 & 255;
};
var rgbaColor = (r, g, b2, alpha) => {
  return `rgba(${r}, ${g}, ${b2}, ${alpha})`;
};
function processColor(color) {
  const normalizedColor = normalizeColor(color);
  return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
}
var interpolateColorsRGB = (value, inputRange, colors) => {
  const [r, g, b2, a2] = [red, green, blue, opacity].map((f) => {
    const unrounded = interpolate(value, inputRange, colors.map((c2) => f(c2)), {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    });
    if (f === opacity) {
      return Number(unrounded.toFixed(3));
    }
    return Math.round(unrounded);
  });
  return rgbaColor(r, g, b2, a2);
};
var interpolateColors = (input, inputRange, outputRange) => {
  if (typeof input === "undefined") {
    throw new TypeError("input can not be undefined");
  }
  if (typeof inputRange === "undefined") {
    throw new TypeError("inputRange can not be undefined");
  }
  if (typeof outputRange === "undefined") {
    throw new TypeError("outputRange can not be undefined");
  }
  if (inputRange.length !== outputRange.length) {
    throw new TypeError("inputRange (" + inputRange.length + " values provided) and outputRange (" + outputRange.length + " values provided) must have the same length");
  }
  const processedOutputRange = outputRange.map((c2) => processColor(c2));
  return interpolateColorsRGB(input, inputRange, processedOutputRange);
};
// src/validate-frame.ts
var validateFrame = ({
  allowFloats,
  durationInFrames,
  frame
}) => {
  if (typeof frame === "undefined") {
    throw new TypeError(`Argument missing for parameter "frame"`);
  }
  if (typeof frame !== "number") {
    throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
  }
  if (!Number.isFinite(frame)) {
    throw new RangeError(`Frame ${frame} is not finite`);
  }
  if (frame % 1 !== 0 && !allowFloats) {
    throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
  }
  if (frame < 0 && frame < -durationInFrames) {
    throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
  }
  if (frame > durationInFrames - 1) {
    throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
  }
};

// src/video/offthread-video-source.ts
var getOffthreadVideoSource = ({
  src,
  transparent,
  currentTime,
  toneMapped
}) => {
  return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc(src))}&time=${encodeURIComponent(currentTime)}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
};
// src/series/index.tsx


// src/series/flatten-children.tsx

var flattenChildren = (children) => {
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
  return childrenArray.reduce((flatChildren, child) => {
    if (child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }
    flatChildren.push(child);
    return flatChildren;
  }, []);
};

// src/series/is-inside-series.tsx


var IsInsideSeriesContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var IsInsideSeriesContainer = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IsInsideSeriesContext.Provider, {
    value: true,
    children
  });
};
var IsNotInsideSeriesProvider = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IsInsideSeriesContext.Provider, {
    value: false,
    children
  });
};
var useRequireToBeInsideSeries = () => {
  const isInsideSeries = react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsInsideSeriesContext);
  if (!isInsideSeries) {
    throw new Error("This component must be inside a <Series /> component.");
  }
};

// src/series/index.tsx

var SeriesSequenceRefForwardingFunction = ({ children }, _ref) => {
  useRequireToBeInsideSeries();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IsNotInsideSeriesProvider, {
    children
  });
};
var SeriesSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(SeriesSequenceRefForwardingFunction);
var Series = (props2) => {
  const childrenValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let startFrame = 0;
    const flattenedChildren = flattenChildren(props2.children);
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(flattenedChildren, (child, i) => {
      const castedChild = child;
      if (typeof castedChild === "string") {
        if (castedChild.trim() === "") {
          return null;
        }
        throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${castedChild}"`);
      }
      if (castedChild.type !== SeriesSequence) {
        throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${castedChild} instead`);
      }
      const debugInfo = `index = ${i}, duration = ${castedChild.props.durationInFrames}`;
      if (!castedChild?.props.children) {
        throw new TypeError(`A <Series.Sequence /> component (${debugInfo}) was detected to not have any children. Delete it to fix this error.`);
      }
      const durationInFramesProp = castedChild.props.durationInFrames;
      const {
        durationInFrames,
        children: _children,
        from,
        name,
        ...passedProps
      } = castedChild.props;
      if (i !== flattenedChildren.length - 1 || durationInFramesProp !== Infinity) {
        validateDurationInFrames(durationInFramesProp, {
          component: `of a <Series.Sequence /> component`,
          allowFloats: true
        });
      }
      const offset = castedChild.props.offset ?? 0;
      if (Number.isNaN(offset)) {
        throw new TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${debugInfo}).`);
      }
      if (!Number.isFinite(offset)) {
        throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
      }
      if (offset % 1 !== 0) {
        throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
      }
      const currentStartFrame = startFrame + offset;
      startFrame += durationInFramesProp + offset;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
        name: name || "<Series.Sequence>",
        from: currentStartFrame,
        durationInFrames: durationInFramesProp,
        ...passedProps,
        ref: castedChild.ref,
        children: child
      });
    });
  }, [props2.children]);
  if (ENABLE_V5_BREAKING_CHANGES) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IsInsideSeriesContainer, {
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
        ...props2,
        children: childrenValue
      })
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IsInsideSeriesContainer, {
    children: childrenValue
  });
};
Series.Sequence = SeriesSequence;
addSequenceStackTraces(SeriesSequence);
// src/validation/validation-spring-duration.ts
var validateSpringDuration = (dur) => {
  if (typeof dur === "undefined") {
    return;
  }
  if (typeof dur !== "number") {
    throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
  }
  if (Number.isNaN(dur)) {
    throw new TypeError('A "duration" of a spring is NaN, which it must not be');
  }
  if (!Number.isFinite(dur)) {
    throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
  }
  if (dur <= 0) {
    throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
  }
};

// src/spring/spring-utils.ts
var defaultSpringConfig = {
  damping: 10,
  mass: 1,
  stiffness: 100,
  overshootClamping: false
};
var advanceCache = {};
function advance({
  animation,
  now,
  config
}) {
  const { toValue, lastTimestamp, current, velocity } = animation;
  const deltaTime = Math.min(now - lastTimestamp, 64);
  if (config.damping <= 0) {
    throw new Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
  }
  const c2 = config.damping;
  const m = config.mass;
  const k = config.stiffness;
  const cacheKey = [
    toValue,
    lastTimestamp,
    current,
    velocity,
    c2,
    m,
    k,
    now
  ].join("-");
  if (advanceCache[cacheKey]) {
    return advanceCache[cacheKey];
  }
  const v0 = -velocity;
  const x0 = toValue - current;
  const zeta = c2 / (2 * Math.sqrt(k * m));
  const omega0 = Math.sqrt(k / m);
  const omega1 = omega0 * Math.sqrt(1 - zeta ** 2);
  const t = deltaTime / 1000;
  const sin1 = Math.sin(omega1 * t);
  const cos1 = Math.cos(omega1 * t);
  const underDampedEnvelope = Math.exp(-zeta * omega0 * t);
  const underDampedFrag1 = underDampedEnvelope * (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
  const underDampedPosition = toValue - underDampedFrag1;
  const underDampedVelocity = zeta * omega0 * underDampedFrag1 - underDampedEnvelope * (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
  const criticallyDampedEnvelope = Math.exp(-omega0 * t);
  const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t);
  const criticallyDampedVelocity = criticallyDampedEnvelope * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0);
  const animationNode = {
    toValue,
    prevPosition: current,
    lastTimestamp: now,
    current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
    velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity
  };
  advanceCache[cacheKey] = animationNode;
  return animationNode;
}
var calculationCache = {};
function springCalculation({
  frame,
  fps,
  config = {}
}) {
  const from = 0;
  const to = 1;
  const cacheKey = [
    frame,
    fps,
    config.damping,
    config.mass,
    config.overshootClamping,
    config.stiffness
  ].join("-");
  if (calculationCache[cacheKey]) {
    return calculationCache[cacheKey];
  }
  let animation = {
    lastTimestamp: 0,
    current: from,
    toValue: to,
    velocity: 0,
    prevPosition: 0
  };
  const frameClamped = Math.max(0, frame);
  const unevenRest = frameClamped % 1;
  for (let f = 0;f <= Math.floor(frameClamped); f++) {
    if (f === Math.floor(frameClamped)) {
      f += unevenRest;
    }
    const time = f / fps * 1000;
    animation = advance({
      animation,
      now: time,
      config: {
        ...defaultSpringConfig,
        ...config
      }
    });
  }
  calculationCache[cacheKey] = animation;
  return animation;
}

// src/spring/measure-spring.ts
var cache = new Map;
function measureSpring({
  fps,
  config = {},
  threshold = 0.005
}) {
  if (typeof threshold !== "number") {
    throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
  }
  if (threshold === 0) {
    return Infinity;
  }
  if (threshold === 1) {
    return 0;
  }
  if (isNaN(threshold)) {
    throw new TypeError("Threshold is NaN");
  }
  if (!Number.isFinite(threshold)) {
    throw new TypeError("Threshold is not finite");
  }
  if (threshold < 0) {
    throw new TypeError("Threshold is below 0");
  }
  const cacheKey = [
    fps,
    config.damping,
    config.mass,
    config.overshootClamping,
    config.stiffness,
    threshold
  ].join("-");
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  validateFps(fps, "to the measureSpring() function", false);
  let frame = 0;
  let finishedFrame = 0;
  const calc = () => {
    return springCalculation({
      fps,
      frame,
      config
    });
  };
  let animation = calc();
  const calcDifference = () => {
    return Math.abs(animation.current - animation.toValue);
  };
  let difference = calcDifference();
  while (difference >= threshold) {
    frame++;
    animation = calc();
    difference = calcDifference();
  }
  finishedFrame = frame;
  for (let i = 0;i < 20; i++) {
    frame++;
    animation = calc();
    difference = calcDifference();
    if (difference >= threshold) {
      i = 0;
      finishedFrame = frame + 1;
    }
  }
  cache.set(cacheKey, finishedFrame);
  return finishedFrame;
}

// src/spring/index.ts
function spring({
  frame: passedFrame,
  fps,
  config = {},
  from = 0,
  to = 1,
  durationInFrames: passedDurationInFrames,
  durationRestThreshold,
  delay = 0,
  reverse = false
}) {
  validateSpringDuration(passedDurationInFrames);
  validateFrame({
    frame: passedFrame,
    durationInFrames: Infinity,
    allowFloats: true
  });
  validateFps(fps, "to spring()", false);
  const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== "undefined";
  const naturalDuration = needsToCalculateNaturalDuration ? measureSpring({
    fps,
    config,
    threshold: durationRestThreshold
  }) : undefined;
  const naturalDurationGetter = needsToCalculateNaturalDuration ? {
    get: () => naturalDuration
  } : {
    get: () => {
      throw new Error("did not calculate natural duration, this is an error with Remotion. Please report");
    }
  };
  const reverseProcessed = reverse ? (passedDurationInFrames ?? naturalDurationGetter.get()) - passedFrame : passedFrame;
  const delayProcessed = reverseProcessed + (reverse ? delay : -delay);
  const durationProcessed = passedDurationInFrames === undefined ? delayProcessed : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
  if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
    return to;
  }
  const spr = springCalculation({
    fps,
    frame: durationProcessed,
    config
  });
  const inner = config.overshootClamping ? to >= from ? Math.min(spr.current, to) : Math.max(spr.current, to) : spr.current;
  const interpolated = from === 0 && to === 1 ? inner : interpolate(inner, [0, 1], [from, to]);
  return interpolated;
}
// src/static-file.ts
var problematicCharacters = {
  "%3A": ":",
  "%2F": "/",
  "%3F": "?",
  "%23": "#",
  "%5B": "[",
  "%5D": "]",
  "%40": "@",
  "%21": "!",
  "%24": "$",
  "%26": "&",
  "%27": "'",
  "%28": "(",
  "%29": ")",
  "%2A": "*",
  "%2B": "+",
  "%2C": ",",
  "%3B": ";"
};
var didWarn2 = {};
var warnOnce3 = (message) => {
  if (didWarn2[message]) {
    return;
  }
  console.warn(message);
  didWarn2[message] = true;
};
var includesHexOfUnsafeChar = (path) => {
  for (const key of Object.keys(problematicCharacters)) {
    if (path.includes(key)) {
      return { containsHex: true, hexCode: key };
    }
  }
  return { containsHex: false };
};
var trimLeadingSlash = (path) => {
  if (path.startsWith("/")) {
    return trimLeadingSlash(path.substring(1));
  }
  return path;
};
var inner = (path) => {
  if (typeof window !== "undefined" && window.remotion_staticBase) {
    if (path.startsWith(window.remotion_staticBase)) {
      throw new Error(`The value "${path}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);
    }
    return `${window.remotion_staticBase}/${trimLeadingSlash(path)}`;
  }
  return `/${trimLeadingSlash(path)}`;
};
var encodeBySplitting = (path) => {
  const splitBySlash = path.split("/");
  const encodedArray = splitBySlash.map((element) => {
    return encodeURIComponent(element);
  });
  const merged = encodedArray.join("/");
  return merged;
};
var staticFile = (path) => {
  if (path === null) {
    throw new TypeError("null was passed to staticFile()");
  }
  if (typeof path === "undefined") {
    throw new TypeError("undefined was passed to staticFile()");
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    throw new TypeError(`staticFile() does not support remote URLs - got "${path}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);
  }
  if (path.startsWith("..") || path.startsWith("./")) {
    throw new TypeError(`staticFile() does not support relative paths - got "${path}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);
  }
  if (path.startsWith("/Users") || path.startsWith("/home") || path.startsWith("/tmp") || path.startsWith("/etc") || path.startsWith("/opt") || path.startsWith("/var") || path.startsWith("C:") || path.startsWith("D:") || path.startsWith("E:")) {
    throw new TypeError(`staticFile() does not support absolute paths - got "${path}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);
  }
  if (path.startsWith("public/")) {
    throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${path}". See: https://remotion.dev/docs/staticfile-relative-paths`);
  }
  const includesHex = includesHexOfUnsafeChar(path);
  if (includesHex.containsHex) {
    warnOnce3(`WARNING: You seem to pass an already encoded path (path contains ${includesHex.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);
  }
  const preprocessed = encodeBySplitting(path);
  const preparsed = inner(preprocessed);
  if (!preparsed.startsWith("/")) {
    return `/${preparsed}`;
  }
  return preparsed;
};
// src/Still.tsx

var Still = (props2) => {
  const newProps = {
    ...props2,
    durationInFrames: 1,
    fps: 1
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Composition, newProps);
};
// src/video/OffthreadVideo.tsx


// src/video/OffthreadVideoForRendering.tsx


var OffthreadVideoForRendering = ({
  onError,
  volume: volumeProp,
  playbackRate,
  src,
  muted,
  allowAmplificationDuringRender,
  transparent = false,
  toneMapped = true,
  toneFrequency,
  name,
  loopVolumeCurveBehavior,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  onVideoFrame,
  crossOrigin,
  ...props2
}) => {
  const absoluteFrame = useTimelinePosition();
  const frame = useCurrentFrame();
  const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const videoConfig = useUnsafeVideoConfig();
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const mediaStartsAt = useMediaStartsAt();
  const { registerRenderAsset, unregisterRenderAsset } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RenderAssetManager);
  if (!src) {
    throw new TypeError("No `src` was passed to <OffthreadVideo>.");
  }
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => `offthreadvideo-${random(src ?? "")}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
    src,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.relativeFrom,
    sequenceContext?.durationInFrames
  ]);
  if (!videoConfig) {
    throw new Error("No video config found");
  }
  const volume = evaluateVolume({
    volume: volumeProp,
    frame: volumePropsFrame,
    mediaVolume: 1
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!src) {
      throw new Error("No src passed");
    }
    if (!window.remotion_audioEnabled) {
      return;
    }
    if (muted) {
      return;
    }
    if (volume <= 0) {
      return;
    }
    registerRenderAsset({
      type: "video",
      src: getAbsoluteSrc(src),
      id,
      frame: absoluteFrame,
      volume,
      mediaFrame: frame,
      playbackRate: playbackRate ?? 1,
      toneFrequency: toneFrequency ?? null,
      audioStartFrame: Math.max(0, -(sequenceContext?.relativeFrom ?? 0))
    });
    return () => unregisterRenderAsset(id);
  }, [
    muted,
    src,
    registerRenderAsset,
    id,
    unregisterRenderAsset,
    volume,
    frame,
    absoluteFrame,
    playbackRate,
    toneFrequency,
    sequenceContext?.relativeFrom
  ]);
  const currentTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return getExpectedMediaFrameUncorrected({
      frame,
      playbackRate: playbackRate || 1,
      startFrom: -mediaStartsAt
    }) / videoConfig.fps;
  }, [frame, mediaStartsAt, playbackRate, videoConfig.fps]);
  const actualSrc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return getOffthreadVideoSource({
      src,
      currentTime,
      transparent,
      toneMapped
    });
  }, [toneMapped, currentTime, src, transparent]);
  const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!window.remotion_videoEnabled) {
      return;
    }
    const cleanup = [];
    setImageSrc(null);
    const controller = new AbortController;
    const newHandle = delayRender(`Fetching ${actualSrc} from server`, {
      retries: delayRenderRetries ?? undefined,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? undefined
    });
    const execute = async () => {
      try {
        const res = await fetch(actualSrc, {
          signal: controller.signal,
          cache: "no-store"
        });
        if (res.status !== 200) {
          if (res.status === 500) {
            const json = await res.json();
            if (json.error) {
              const cleanedUpErrorMessage = json.error.replace(/^Error: /, "");
              throw new Error(cleanedUpErrorMessage);
            }
          }
          throw new Error(`Server returned status ${res.status} while fetching ${actualSrc}`);
        }
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        cleanup.push(() => URL.revokeObjectURL(url));
        setImageSrc({
          src: url,
          handle: newHandle
        });
      } catch (err) {
        if (err.message.includes("aborted")) {
          continueRender(newHandle);
          return;
        }
        if (controller.signal.aborted) {
          continueRender(newHandle);
          return;
        }
        if (err.message.includes("Failed to fetch")) {
          err = new Error(`Failed to fetch ${actualSrc}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: err });
        }
        if (onError) {
          onError(err);
        } else {
          cancelRender(err);
        }
      }
    };
    execute();
    cleanup.push(() => {
      if (controller.signal.aborted) {
        return;
      }
      controller.abort();
    });
    return () => {
      cleanup.forEach((c2) => c2());
    };
  }, [
    actualSrc,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onError
  ]);
  const onErr = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (onError) {
      onError?.(new Error("Failed to load image with src " + imageSrc));
    } else {
      cancelRender("Failed to load image with src " + imageSrc);
    }
  }, [imageSrc, onError]);
  const className = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return [OFFTHREAD_VIDEO_CLASS_NAME, props2.className].filter(truthy).join(" ");
  }, [props2.className]);
  const onImageFrame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((img) => {
    if (onVideoFrame) {
      onVideoFrame(img);
    }
  }, [onVideoFrame]);
  if (!imageSrc || !window.remotion_videoEnabled) {
    return null;
  }
  continueRender(imageSrc.handle);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Img, {
    src: imageSrc.src,
    className,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onImageFrame,
    ...props2,
    onError: onErr
  });
};

// src/video/VideoForPreview.tsx


// src/video/emit-video-frame.ts

var useEmitVideoFrame = ({
  ref,
  onVideoFrame
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = ref;
    if (!current) {
      return;
    }
    if (!onVideoFrame) {
      return;
    }
    let handle = 0;
    const callback = () => {
      if (!ref.current) {
        return;
      }
      onVideoFrame(ref.current);
      handle = ref.current.requestVideoFrameCallback(callback);
    };
    callback();
    return () => {
      current.cancelVideoFrameCallback(handle);
    };
  }, [onVideoFrame, ref]);
};

// src/video/VideoForPreview.tsx

var VideoForDevelopmentRefForwardingFunction = (props2, ref) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SharedAudioContext);
  if (!context) {
    throw new Error("SharedAudioContext not found");
  }
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const sharedSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!context.audioContext) {
      return null;
    }
    return makeSharedElementSourceNode({
      audioContext: context.audioContext,
      ref: videoRef
    });
  }, [context.audioContext]);
  const {
    volume,
    muted,
    playbackRate,
    onlyWarnForMediaSeekingError,
    src,
    onDuration,
    acceptableTimeShift,
    acceptableTimeShiftInSeconds,
    toneFrequency,
    name,
    _remotionInternalNativeLoopPassed,
    _remotionInternalStack,
    style,
    pauseWhenBuffering,
    showInTimeline,
    loopVolumeCurveBehavior,
    onError,
    onAutoPlayError,
    onVideoFrame,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    allowAmplificationDuringRender,
    useWebAudioApi,
    ...nativeProps
  } = props2;
  const _propsValid = true;
  if (!_propsValid) {
    throw new Error("typecheck error");
  }
  const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const { fps, durationInFrames } = useVideoConfig();
  const parentSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const { hidden } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceVisibilityToggleContext);
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const [timelineId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => String(Math.random()));
  const isSequenceHidden = hidden[timelineId] ?? false;
  if (typeof acceptableTimeShift !== "undefined") {
    throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
  }
  const [mediaVolume] = useMediaVolumeState();
  const [mediaMuted] = useMediaMutedState();
  const userPreferredVolume = evaluateVolume({
    frame: volumePropFrame,
    volume,
    mediaVolume
  });
  useMediaInTimeline({
    mediaRef: videoRef,
    volume,
    mediaVolume,
    mediaType: "video",
    src,
    playbackRate: props2.playbackRate ?? 1,
    displayName: name ?? null,
    id: timelineId,
    stack: _remotionInternalStack,
    showInTimeline,
    premountDisplay: null,
    onAutoPlayError: onAutoPlayError ?? null,
    isPremounting: Boolean(parentSequence?.premounting)
  });
  useMediaPlayback({
    mediaRef: videoRef,
    src,
    mediaType: "video",
    playbackRate: props2.playbackRate ?? 1,
    onlyWarnForMediaSeekingError,
    acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
    isPremounting: Boolean(parentSequence?.premounting),
    pauseWhenBuffering,
    onAutoPlayError: onAutoPlayError ?? null
  });
  useVolume({
    logLevel,
    mediaRef: videoRef,
    volume: userPreferredVolume,
    source: sharedSource,
    shouldUseWebAudioApi: useWebAudioApi ?? false
  });
  const actualFrom = parentSequence ? parentSequence.relativeFrom : 0;
  const duration = parentSequence ? Math.min(parentSequence.durationInFrames, durationInFrames) : durationInFrames;
  const preloadedSrc = usePreload(src);
  const actualSrc = useAppendVideoFragment({
    actualSrc: preloadedSrc,
    actualFrom,
    duration,
    fps
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
    return videoRef.current;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => playbackLogging({
    logLevel,
    message: `Mounting video with source = ${actualSrc}, v=${VERSION}, user agent=${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
    tag: "video",
    mountTime
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = videoRef;
    if (!current) {
      return;
    }
    const errorHandler = () => {
      if (current.error) {
        console.error("Error occurred in video", current?.error);
        if (onError) {
          const err = new Error(`Code ${current.error.code}: ${current.error.message}`);
          onError(err);
          return;
        }
        throw new Error(`The browser threw an error while playing the video ${src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
      } else {
        if (onError) {
          const err = new Error(`The browser threw an error while playing the video ${src}`);
          onError(err);
          return;
        }
        throw new Error("The browser threw an error while playing the video");
      }
    };
    current.addEventListener("error", errorHandler, { once: true });
    return () => {
      current.removeEventListener("error", errorHandler);
    };
  }, [onError, src]);
  const currentOnDurationCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onDuration);
  currentOnDurationCallback.current = onDuration;
  useEmitVideoFrame({ ref: videoRef, onVideoFrame });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = videoRef;
    if (!current) {
      return;
    }
    if (current.duration) {
      currentOnDurationCallback.current?.(src, current.duration);
      return;
    }
    const onLoadedMetadata = () => {
      currentOnDurationCallback.current?.(src, current.duration);
    };
    current.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => {
      current.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const { current } = videoRef;
    if (!current) {
      return;
    }
    if (isIosSafari()) {
      current.preload = "metadata";
    } else {
      current.preload = "auto";
    }
  }, []);
  const actualStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      ...style,
      opacity: isSequenceHidden ? 0 : style?.opacity ?? 1
    };
  }, [isSequenceHidden, style]);
  const crossOriginValue = getCrossOriginValue({
    crossOrigin,
    requestsVideoFrame: Boolean(onVideoFrame)
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video", {
    ref: videoRef,
    muted: muted || mediaMuted || isSequenceHidden || userPreferredVolume <= 0,
    playsInline: true,
    src: actualSrc,
    loop: _remotionInternalNativeLoopPassed,
    style: actualStyle,
    disableRemotePlayback: true,
    crossOrigin: crossOriginValue,
    ...nativeProps
  });
};
var VideoForPreview = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(VideoForDevelopmentRefForwardingFunction);

// src/video/OffthreadVideo.tsx

var OffthreadVideo = (props2) => {
  const {
    startFrom,
    endAt,
    trimBefore,
    trimAfter,
    name,
    pauseWhenBuffering,
    stack,
    showInTimeline,
    ...otherProps
  } = props2;
  const environment = getRemotionEnvironment();
  const onDuration = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return;
  }, []);
  if (typeof props2.src !== "string") {
    throw new TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
  }
  if (props2.imageFormat) {
    throw new TypeError(`The \`<OffthreadVideo>\` tag does no longer accept \`imageFormat\`. Use the \`transparent\` prop if you want to render a transparent video.`);
  }
  validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
  const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  });
  if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
      layout: "none",
      from: 0 - (trimBeforeValue ?? 0),
      showInTimeline: false,
      durationInFrames: trimAfterValue,
      name,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(OffthreadVideo, {
        pauseWhenBuffering: pauseWhenBuffering ?? false,
        ...otherProps
      })
    });
  }
  validateMediaProps(props2, "Video");
  if (environment.isRendering) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(OffthreadVideoForRendering, {
      ...otherProps
    });
  }
  const {
    transparent,
    toneMapped,
    onAutoPlayError,
    onVideoFrame,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...propsForPreview
  } = otherProps;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(VideoForPreview, {
    _remotionInternalStack: stack ?? null,
    _remotionInternalNativeLoopPassed: false,
    onDuration,
    onlyWarnForMediaSeekingError: true,
    pauseWhenBuffering: pauseWhenBuffering ?? false,
    showInTimeline: showInTimeline ?? true,
    onAutoPlayError: onAutoPlayError ?? undefined,
    onVideoFrame: onVideoFrame ?? null,
    crossOrigin,
    ...propsForPreview
  });
};
// src/video/Video.tsx


// src/video/VideoForRendering.tsx


// src/video/seek-until-right.ts
var roundTo6Commas = (num) => {
  return Math.round(num * 1e5) / 1e5;
};
var seekToTime = ({
  element,
  desiredTime,
  logLevel,
  mountTime
}) => {
  if (isApproximatelyTheSame(element.currentTime, desiredTime)) {
    return {
      wait: Promise.resolve(desiredTime),
      cancel: () => {}
    };
  }
  seek({
    logLevel,
    mediaRef: element,
    time: desiredTime,
    why: "Seeking during rendering",
    mountTime
  });
  let cancel;
  let cancelSeeked = null;
  const prom = new Promise((resolve) => {
    cancel = element.requestVideoFrameCallback((now, metadata) => {
      const displayIn = metadata.expectedDisplayTime - now;
      if (displayIn <= 0) {
        resolve(metadata.mediaTime);
        return;
      }
      setTimeout(() => {
        resolve(metadata.mediaTime);
      }, displayIn + 150);
    });
  });
  const waitForSeekedEvent = new Promise((resolve) => {
    const onDone = () => {
      resolve();
    };
    element.addEventListener("seeked", onDone, {
      once: true
    });
    cancelSeeked = () => {
      element.removeEventListener("seeked", onDone);
    };
  });
  return {
    wait: Promise.all([prom, waitForSeekedEvent]).then(([time]) => time),
    cancel: () => {
      cancelSeeked?.();
      element.cancelVideoFrameCallback(cancel);
    }
  };
};
var seekToTimeMultipleUntilRight = ({
  element,
  desiredTime,
  fps,
  logLevel,
  mountTime
}) => {
  const threshold = 1 / fps / 2;
  let currentCancel = () => {
    return;
  };
  if (Number.isFinite(element.duration) && element.currentTime >= element.duration && desiredTime >= element.duration) {
    return {
      prom: Promise.resolve(),
      cancel: () => {}
    };
  }
  const prom = new Promise((resolve, reject) => {
    const firstSeek = seekToTime({
      element,
      desiredTime: desiredTime + threshold,
      logLevel,
      mountTime
    });
    firstSeek.wait.then((seekedTo) => {
      const difference = Math.abs(desiredTime - seekedTo);
      if (difference <= threshold) {
        return resolve();
      }
      const sign = desiredTime > seekedTo ? 1 : -1;
      const newSeek = seekToTime({
        element,
        desiredTime: seekedTo + threshold * sign,
        logLevel,
        mountTime
      });
      currentCancel = newSeek.cancel;
      newSeek.wait.then((newTime) => {
        const newDifference = Math.abs(desiredTime - newTime);
        if (roundTo6Commas(newDifference) <= roundTo6Commas(threshold)) {
          return resolve();
        }
        const thirdSeek = seekToTime({
          element,
          desiredTime: desiredTime + threshold,
          logLevel,
          mountTime
        });
        currentCancel = thirdSeek.cancel;
        return thirdSeek.wait.then(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      });
    });
    currentCancel = firstSeek.cancel;
  });
  return {
    prom,
    cancel: () => {
      currentCancel();
    }
  };
};

// src/video/VideoForRendering.tsx

var VideoForRenderingForwardFunction = ({
  onError,
  volume: volumeProp,
  allowAmplificationDuringRender,
  playbackRate,
  onDuration,
  toneFrequency,
  name,
  acceptableTimeShiftInSeconds,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  loopVolumeCurveBehavior,
  ...props2
}, ref) => {
  const absoluteFrame = useTimelinePosition();
  const frame = useCurrentFrame();
  const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const videoConfig = useUnsafeVideoConfig();
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const sequenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SequenceContext);
  const mediaStartsAt = useMediaStartsAt();
  const environment = getRemotionEnvironment();
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const { registerRenderAsset, unregisterRenderAsset } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RenderAssetManager);
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => `video-${random(props2.src ?? "")}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
    props2.src,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.relativeFrom,
    sequenceContext?.durationInFrames
  ]);
  if (!videoConfig) {
    throw new Error("No video config found");
  }
  const volume = evaluateVolume({
    volume: volumeProp,
    frame: volumePropsFrame,
    mediaVolume: 1
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!props2.src) {
      throw new Error("No src passed");
    }
    if (props2.muted) {
      return;
    }
    if (volume <= 0) {
      return;
    }
    if (!window.remotion_audioEnabled) {
      return;
    }
    registerRenderAsset({
      type: "video",
      src: getAbsoluteSrc(props2.src),
      id,
      frame: absoluteFrame,
      volume,
      mediaFrame: frame,
      playbackRate: playbackRate ?? 1,
      toneFrequency: toneFrequency ?? null,
      audioStartFrame: Math.max(0, -(sequenceContext?.relativeFrom ?? 0))
    });
    return () => unregisterRenderAsset(id);
  }, [
    props2.muted,
    props2.src,
    registerRenderAsset,
    id,
    unregisterRenderAsset,
    volume,
    frame,
    absoluteFrame,
    playbackRate,
    toneFrequency,
    sequenceContext?.relativeFrom
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
    return videoRef.current;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!window.remotion_videoEnabled) {
      return;
    }
    const { current } = videoRef;
    if (!current) {
      return;
    }
    const currentTime = getMediaTime({
      frame,
      playbackRate: playbackRate || 1,
      startFrom: -mediaStartsAt,
      fps: videoConfig.fps
    });
    const handle = delayRender(`Rendering <Video /> with src="${props2.src}" at time ${currentTime}`, {
      retries: delayRenderRetries ?? undefined,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? undefined
    });
    if (window.process?.env?.NODE_ENV === "test") {
      continueRender(handle);
      return;
    }
    if (isApproximatelyTheSame(current.currentTime, currentTime)) {
      if (current.readyState >= 2) {
        continueRender(handle);
        return;
      }
      const loadedDataHandler = () => {
        continueRender(handle);
      };
      current.addEventListener("loadeddata", loadedDataHandler, { once: true });
      return () => {
        current.removeEventListener("loadeddata", loadedDataHandler);
      };
    }
    const endedHandler = () => {
      continueRender(handle);
    };
    const seek2 = seekToTimeMultipleUntilRight({
      element: current,
      desiredTime: currentTime,
      fps: videoConfig.fps,
      logLevel,
      mountTime
    });
    seek2.prom.then(() => {
      continueRender(handle);
    });
    current.addEventListener("ended", endedHandler, { once: true });
    const errorHandler = () => {
      if (current?.error) {
        console.error("Error occurred in video", current?.error);
        if (onError) {
          return;
        }
        throw new Error(`The browser threw an error while playing the video ${props2.src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
      } else {
        throw new Error("The browser threw an error");
      }
    };
    current.addEventListener("error", errorHandler, { once: true });
    return () => {
      seek2.cancel();
      current.removeEventListener("ended", endedHandler);
      current.removeEventListener("error", errorHandler);
      continueRender(handle);
    };
  }, [
    volumePropsFrame,
    props2.src,
    playbackRate,
    videoConfig.fps,
    frame,
    mediaStartsAt,
    onError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    logLevel,
    mountTime
  ]);
  const { src } = props2;
  if (environment.isRendering) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
      if (window.process?.env?.NODE_ENV === "test") {
        return;
      }
      const newHandle = delayRender("Loading <Video> duration with src=" + src, {
        retries: delayRenderRetries ?? undefined,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? undefined
      });
      const { current } = videoRef;
      const didLoad = () => {
        if (current?.duration) {
          onDuration(src, current.duration);
        }
        continueRender(newHandle);
      };
      if (current?.duration) {
        onDuration(src, current.duration);
        continueRender(newHandle);
      } else {
        current?.addEventListener("loadedmetadata", didLoad, { once: true });
      }
      return () => {
        current?.removeEventListener("loadedmetadata", didLoad);
        continueRender(newHandle);
      };
    }, [src, onDuration, delayRenderRetries, delayRenderTimeoutInMilliseconds]);
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video", {
    ref: videoRef,
    disableRemotePlayback: true,
    ...props2
  });
};
var VideoForRendering = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(VideoForRenderingForwardFunction);

// src/video/Video.tsx

var VideoForwardingFunction = (props2, ref) => {
  const {
    startFrom,
    endAt,
    trimBefore,
    trimAfter,
    name,
    pauseWhenBuffering,
    stack,
    _remotionInternalNativeLoopPassed,
    showInTimeline,
    onAutoPlayError,
    ...otherProps
  } = props2;
  const { loop, ...propsOtherThanLoop } = props2;
  const { fps } = useVideoConfig();
  const environment = getRemotionEnvironment();
  const { durations, setDurations } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DurationsContext);
  if (typeof ref === "string") {
    throw new Error("string refs are not supported");
  }
  if (typeof props2.src !== "string") {
    throw new TypeError(`The \`<Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
  }
  const preloadedSrc = usePreload(props2.src);
  const onDuration = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((src, durationInSeconds) => {
    setDurations({ type: "got-duration", durationInSeconds, src });
  }, [setDurations]);
  const onVideoFrame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {}, []);
  const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props2.src)];
  validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
  const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  });
  if (loop && durationFetched !== undefined) {
    if (!Number.isFinite(durationFetched)) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Video, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalNativeLoopPassed: true
      });
    }
    const mediaDuration = durationFetched * fps;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Loop, {
      durationInFrames: calculateLoopDuration({
        endAt: trimAfterValue ?? undefined,
        mediaDuration,
        playbackRate: props2.playbackRate ?? 1,
        startFrom: trimBeforeValue ?? undefined
      }),
      layout: "none",
      name,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Video, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalNativeLoopPassed: true
      })
    });
  }
  if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sequence, {
      layout: "none",
      from: 0 - (trimBeforeValue ?? 0),
      showInTimeline: false,
      durationInFrames: trimAfterValue,
      name,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Video, {
        pauseWhenBuffering: pauseWhenBuffering ?? false,
        ...otherProps,
        ref
      })
    });
  }
  validateMediaProps(props2, "Video");
  if (environment.isRendering) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(VideoForRendering, {
      onDuration,
      onVideoFrame: onVideoFrame ?? null,
      ...otherProps,
      ref
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(VideoForPreview, {
    onlyWarnForMediaSeekingError: false,
    ...otherProps,
    ref,
    onVideoFrame: null,
    pauseWhenBuffering: pauseWhenBuffering ?? false,
    onDuration,
    _remotionInternalStack: stack ?? null,
    _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
    showInTimeline: showInTimeline ?? true,
    onAutoPlayError: onAutoPlayError ?? undefined
  });
};
var Video = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(VideoForwardingFunction);
addSequenceStackTraces(Video);
// src/index.ts
checkMultipleRemotionVersions();
var Experimental = {
  Clipper,
  Null,
  useIsPlayer
};
var proxyObj = {};
var Config = new Proxy(proxyObj, {
  get(_, prop) {
    if (prop === "Bundling" || prop === "Rendering" || prop === "Log" || prop === "Puppeteer" || prop === "Output") {
      return Config;
    }
    return () => {
      console.warn("⚠️  The CLI configuration has been extracted from Remotion Core.");
      console.warn("Update the import from the config file:");
      console.warn();
      console.warn("- Delete:");
      console.warn('import {Config} from "remotion";');
      console.warn("+ Replace:");
      console.warn('import {Config} from "@remotion/cli/config";');
      console.warn();
      console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration.");
      process.exit(1);
    };
  }
});
addSequenceStackTraces(Sequence);



/***/ }),

/***/ 9382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoReactInternals: () => (/* binding */ NoReactInternals),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   random: () => (/* binding */ random)
/* harmony export */ });
// src/interpolate.ts
function interpolateFunction(input, inputRange, outputRange, options) {
  const { extrapolateLeft, extrapolateRight, easing } = options;
  let result = input;
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    }
    if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "wrap") {
      const range = inputMax - inputMin;
      result = ((result - inputMin) % range + range) % range + inputMin;
    } else if (extrapolateLeft === "extend") {}
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    }
    if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "wrap") {
      const range = inputMax - inputMin;
      result = ((result - inputMin) % range + range) % range + inputMin;
    } else if (extrapolateRight === "extend") {}
  }
  if (outputMin === outputMax) {
    return outputMin;
  }
  result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  let i;
  for (i = 1;i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }
  return i - 1;
}
function checkValidInputRange(arr) {
  for (let i = 1;i < arr.length; ++i) {
    if (!(arr[i] > arr[i - 1])) {
      throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
    }
  }
}
function checkInfiniteRange(name, arr) {
  if (arr.length < 2) {
    throw new Error(name + " must have at least 2 elements");
  }
  for (const element of arr) {
    if (typeof element !== "number") {
      throw new Error(`${name} must contain only numbers`);
    }
    if (!Number.isFinite(element)) {
      throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
    }
  }
}
function interpolate(input, inputRange, outputRange, options) {
  if (typeof input === "undefined") {
    throw new Error("input can not be undefined");
  }
  if (typeof inputRange === "undefined") {
    throw new Error("inputRange can not be undefined");
  }
  if (typeof outputRange === "undefined") {
    throw new Error("outputRange can not be undefined");
  }
  if (inputRange.length !== outputRange.length) {
    throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
  }
  checkInfiniteRange("inputRange", inputRange);
  checkInfiniteRange("outputRange", outputRange);
  checkValidInputRange(inputRange);
  const easing = options?.easing ?? ((num) => num);
  let extrapolateLeft = "extend";
  if (options?.extrapolateLeft !== undefined) {
    extrapolateLeft = options.extrapolateLeft;
  }
  let extrapolateRight = "extend";
  if (options?.extrapolateRight !== undefined) {
    extrapolateRight = options.extrapolateRight;
  }
  if (typeof input !== "number") {
    throw new TypeError("Cannot interpolate an input which is not a number");
  }
  const range = findRange(input, inputRange);
  return interpolateFunction(input, [inputRange[range], inputRange[range + 1]], [outputRange[range], outputRange[range + 1]], {
    easing,
    extrapolateLeft,
    extrapolateRight
  });
}
// src/random.ts
function mulberry32(a) {
  let t = a + 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hashCode(str) {
  let i = 0;
  let chr = 0;
  let hash = 0;
  for (i = 0;i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}
var random = (seed, dummy) => {
  if (dummy !== undefined) {
    throw new TypeError("random() takes only one argument");
  }
  if (seed === null) {
    return Math.random();
  }
  if (typeof seed === "string") {
    return mulberry32(hashCode(seed));
  }
  if (typeof seed === "number") {
    return mulberry32(seed * 10000000000);
  }
  throw new Error("random() argument must be a number or a string");
};
// src/truthy.ts
function truthy(value) {
  return Boolean(value);
}

// src/delay-render.ts
if (typeof window !== "undefined") {
  window.remotion_renderReady = false;
}
if (typeof window !== "undefined") {
  window.remotion_delayRenderTimeouts = {};
}
var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";

// src/input-props-serialization.ts
var DATE_TOKEN = "remotion-date:";
var FILE_TOKEN = "remotion-file:";
var serializeJSONWithSpecialTypes = ({
  data,
  indent,
  staticBase
}) => {
  let customDateUsed = false;
  let customFileUsed = false;
  let mapUsed = false;
  let setUsed = false;
  try {
    const serializedString = JSON.stringify(data, function(key, value) {
      const item = this[key];
      if (item instanceof Date) {
        customDateUsed = true;
        return `${DATE_TOKEN}${item.toISOString()}`;
      }
      if (item instanceof Map) {
        mapUsed = true;
        return value;
      }
      if (item instanceof Set) {
        setUsed = true;
        return value;
      }
      if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
        customFileUsed = true;
        return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
      }
      return value;
    }, indent);
    return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
  } catch (err) {
    throw new Error("Could not serialize the passed input props to JSON: " + err.message);
  }
};
var deserializeJSONWithSpecialTypes = (data) => {
  return JSON.parse(data, (_, value) => {
    if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
      return new Date(value.replace(DATE_TOKEN, ""));
    }
    if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
      return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN, "")}`;
    }
    return value;
  });
};

// src/interpolate-colors.ts
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...args) {
  return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
}
function getMatchers() {
  const cachedMatchers = {
    rgb: undefined,
    rgba: undefined,
    hsl: undefined,
    hsla: undefined,
    hex3: undefined,
    hex4: undefined,
    hex5: undefined,
    hex6: undefined,
    hex8: undefined
  };
  if (cachedMatchers.rgb === undefined) {
    cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
    cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
    cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
    cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
    cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
    cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
  }
  return cachedMatchers;
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = Number.parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}
function parse360(str) {
  const int = Number.parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = Number.parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = Number.parseFloat(str);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}
var colorNames = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
function normalizeColor(color) {
  const matchers = getMatchers();
  let match;
  if (matchers.hex6) {
    if (match = matchers.hex6.exec(color)) {
      return Number.parseInt(match[1] + "ff", 16) >>> 0;
    }
  }
  if (colorNames[color] !== undefined) {
    return colorNames[color];
  }
  if (matchers.rgb) {
    if (match = matchers.rgb.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
    }
  }
  if (matchers.rgba) {
    if (match = matchers.rgba.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
    }
  }
  if (matchers.hex3) {
    if (match = matchers.hex3.exec(color)) {
      return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
    }
  }
  if (matchers.hex8) {
    if (match = matchers.hex8.exec(color)) {
      return Number.parseInt(match[1], 16) >>> 0;
    }
  }
  if (matchers.hex4) {
    if (match = matchers.hex4.exec(color)) {
      return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
    }
  }
  if (matchers.hsl) {
    if (match = matchers.hsl.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
    }
  }
  if (matchers.hsla) {
    if (match = matchers.hsla.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
    }
  }
  throw new Error(`invalid color string ${color} provided`);
}
function processColor(color) {
  const normalizedColor = normalizeColor(color);
  return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
}

// src/v5-flag.ts
var ENABLE_V5_BREAKING_CHANGES = false;

// src/validate-frame.ts
var validateFrame = ({
  allowFloats,
  durationInFrames,
  frame
}) => {
  if (typeof frame === "undefined") {
    throw new TypeError(`Argument missing for parameter "frame"`);
  }
  if (typeof frame !== "number") {
    throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
  }
  if (!Number.isFinite(frame)) {
    throw new RangeError(`Frame ${frame} is not finite`);
  }
  if (frame % 1 !== 0 && !allowFloats) {
    throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
  }
  if (frame < 0 && frame < -durationInFrames) {
    throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
  }
  if (frame > durationInFrames - 1) {
    throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
  }
};

// src/validation/validate-default-props.ts
var validateDefaultAndInputProps = (defaultProps, name, compositionId) => {
  if (!defaultProps) {
    return;
  }
  if (typeof defaultProps !== "object") {
    throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
  }
  if (Array.isArray(defaultProps)) {
    throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
  }
};

// src/validation/validate-dimensions.ts
function validateDimension(amount, nameOfProp, location) {
  if (typeof amount !== "number") {
    throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
  }
  if (isNaN(amount)) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
  }
  if (!Number.isFinite(amount)) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
  }
  if (amount % 1 !== 0) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
  }
  if (amount <= 0) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
  }
}

// src/validation/validate-duration-in-frames.ts
function validateDurationInFrames(durationInFrames, options) {
  const { allowFloats, component } = options;
  if (typeof durationInFrames === "undefined") {
    throw new Error(`The "durationInFrames" prop ${component} is missing.`);
  }
  if (typeof durationInFrames !== "number") {
    throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
  }
  if (durationInFrames <= 0) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
  }
  if (!allowFloats && durationInFrames % 1 !== 0) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
  }
  if (!Number.isFinite(durationInFrames)) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
  }
}

// src/validation/validate-fps.ts
function validateFps(fps, location, isGif) {
  if (typeof fps !== "number") {
    throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
  }
  if (!Number.isFinite(fps)) {
    throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
  }
  if (isNaN(fps)) {
    throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
  }
  if (fps <= 0) {
    throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
  }
  if (isGif && fps > 50) {
    throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
  }
}

// src/video/get-current-time.ts
var getExpectedMediaFrameUncorrected = ({
  frame,
  playbackRate,
  startFrom
}) => {
  return interpolate(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
};

// src/absolute-src.ts
var getAbsoluteSrc = (relativeSrc) => {
  if (typeof window === "undefined") {
    return relativeSrc;
  }
  if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
    return relativeSrc;
  }
  return new URL(relativeSrc, window.origin).href;
};

// src/video/offthread-video-source.ts
var getOffthreadVideoSource = ({
  src,
  transparent,
  currentTime,
  toneMapped
}) => {
  return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc(src))}&time=${encodeURIComponent(currentTime)}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
};

// src/no-react.ts
var NoReactInternals = {
  processColor,
  truthy,
  validateFps,
  validateDimension,
  validateDurationInFrames,
  validateDefaultAndInputProps,
  validateFrame,
  serializeJSONWithSpecialTypes,
  bundleName: "bundle.js",
  bundleMapName: "bundle.js.map",
  deserializeJSONWithSpecialTypes,
  DELAY_RENDER_CALLSTACK_TOKEN,
  DELAY_RENDER_RETRY_TOKEN,
  DELAY_RENDER_CLEAR_TOKEN,
  DELAY_RENDER_ATTEMPT_TOKEN: DELAY_RENDER_RETRIES_LEFT,
  getOffthreadVideoSource,
  getExpectedMediaFrameUncorrected,
  ENABLE_V5_BREAKING_CHANGES,
  MIN_NODE_VERSION: ENABLE_V5_BREAKING_CHANGES ? 18 : 16,
  MIN_BUN_VERSION: ENABLE_V5_BREAKING_CHANGES ? "1.1.3" : "1.0.3",
  colorNames,
  DATE_TOKEN,
  FILE_TOKEN
};



/***/ }),

/***/ 4476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BRAND: () => (/* binding */ BRAND),
/* harmony export */   DIRTY: () => (/* binding */ DIRTY),
/* harmony export */   EMPTY_PATH: () => (/* binding */ EMPTY_PATH),
/* harmony export */   INVALID: () => (/* binding */ INVALID),
/* harmony export */   NEVER: () => (/* binding */ NEVER),
/* harmony export */   OK: () => (/* binding */ OK),
/* harmony export */   ParseStatus: () => (/* binding */ ParseStatus),
/* harmony export */   Schema: () => (/* binding */ ZodType),
/* harmony export */   ZodAny: () => (/* binding */ ZodAny),
/* harmony export */   ZodArray: () => (/* binding */ ZodArray),
/* harmony export */   ZodBigInt: () => (/* binding */ ZodBigInt),
/* harmony export */   ZodBoolean: () => (/* binding */ ZodBoolean),
/* harmony export */   ZodBranded: () => (/* binding */ ZodBranded),
/* harmony export */   ZodCatch: () => (/* binding */ ZodCatch),
/* harmony export */   ZodDate: () => (/* binding */ ZodDate),
/* harmony export */   ZodDefault: () => (/* binding */ ZodDefault),
/* harmony export */   ZodDiscriminatedUnion: () => (/* binding */ ZodDiscriminatedUnion),
/* harmony export */   ZodEffects: () => (/* binding */ ZodEffects),
/* harmony export */   ZodEnum: () => (/* binding */ ZodEnum),
/* harmony export */   ZodError: () => (/* binding */ ZodError),
/* harmony export */   ZodFirstPartyTypeKind: () => (/* binding */ ZodFirstPartyTypeKind),
/* harmony export */   ZodFunction: () => (/* binding */ ZodFunction),
/* harmony export */   ZodIntersection: () => (/* binding */ ZodIntersection),
/* harmony export */   ZodIssueCode: () => (/* binding */ ZodIssueCode),
/* harmony export */   ZodLazy: () => (/* binding */ ZodLazy),
/* harmony export */   ZodLiteral: () => (/* binding */ ZodLiteral),
/* harmony export */   ZodMap: () => (/* binding */ ZodMap),
/* harmony export */   ZodNaN: () => (/* binding */ ZodNaN),
/* harmony export */   ZodNativeEnum: () => (/* binding */ ZodNativeEnum),
/* harmony export */   ZodNever: () => (/* binding */ ZodNever),
/* harmony export */   ZodNull: () => (/* binding */ ZodNull),
/* harmony export */   ZodNullable: () => (/* binding */ ZodNullable),
/* harmony export */   ZodNumber: () => (/* binding */ ZodNumber),
/* harmony export */   ZodObject: () => (/* binding */ ZodObject),
/* harmony export */   ZodOptional: () => (/* binding */ ZodOptional),
/* harmony export */   ZodParsedType: () => (/* binding */ ZodParsedType),
/* harmony export */   ZodPipeline: () => (/* binding */ ZodPipeline),
/* harmony export */   ZodPromise: () => (/* binding */ ZodPromise),
/* harmony export */   ZodReadonly: () => (/* binding */ ZodReadonly),
/* harmony export */   ZodRecord: () => (/* binding */ ZodRecord),
/* harmony export */   ZodSchema: () => (/* binding */ ZodType),
/* harmony export */   ZodSet: () => (/* binding */ ZodSet),
/* harmony export */   ZodString: () => (/* binding */ ZodString),
/* harmony export */   ZodSymbol: () => (/* binding */ ZodSymbol),
/* harmony export */   ZodTransformer: () => (/* binding */ ZodEffects),
/* harmony export */   ZodTuple: () => (/* binding */ ZodTuple),
/* harmony export */   ZodType: () => (/* binding */ ZodType),
/* harmony export */   ZodUndefined: () => (/* binding */ ZodUndefined),
/* harmony export */   ZodUnion: () => (/* binding */ ZodUnion),
/* harmony export */   ZodUnknown: () => (/* binding */ ZodUnknown),
/* harmony export */   ZodVoid: () => (/* binding */ ZodVoid),
/* harmony export */   addIssueToContext: () => (/* binding */ addIssueToContext),
/* harmony export */   any: () => (/* binding */ anyType),
/* harmony export */   array: () => (/* binding */ arrayType),
/* harmony export */   bigint: () => (/* binding */ bigIntType),
/* harmony export */   boolean: () => (/* binding */ booleanType),
/* harmony export */   coerce: () => (/* binding */ coerce),
/* harmony export */   custom: () => (/* binding */ custom),
/* harmony export */   date: () => (/* binding */ dateType),
/* harmony export */   "default": () => (/* binding */ z),
/* harmony export */   defaultErrorMap: () => (/* binding */ errorMap),
/* harmony export */   discriminatedUnion: () => (/* binding */ discriminatedUnionType),
/* harmony export */   effect: () => (/* binding */ effectsType),
/* harmony export */   "enum": () => (/* binding */ enumType),
/* harmony export */   "function": () => (/* binding */ functionType),
/* harmony export */   getErrorMap: () => (/* binding */ getErrorMap),
/* harmony export */   getParsedType: () => (/* binding */ getParsedType),
/* harmony export */   "instanceof": () => (/* binding */ instanceOfType),
/* harmony export */   intersection: () => (/* binding */ intersectionType),
/* harmony export */   isAborted: () => (/* binding */ isAborted),
/* harmony export */   isAsync: () => (/* binding */ isAsync),
/* harmony export */   isDirty: () => (/* binding */ isDirty),
/* harmony export */   isValid: () => (/* binding */ isValid),
/* harmony export */   late: () => (/* binding */ late),
/* harmony export */   lazy: () => (/* binding */ lazyType),
/* harmony export */   literal: () => (/* binding */ literalType),
/* harmony export */   makeIssue: () => (/* binding */ makeIssue),
/* harmony export */   map: () => (/* binding */ mapType),
/* harmony export */   nan: () => (/* binding */ nanType),
/* harmony export */   nativeEnum: () => (/* binding */ nativeEnumType),
/* harmony export */   never: () => (/* binding */ neverType),
/* harmony export */   "null": () => (/* binding */ nullType),
/* harmony export */   nullable: () => (/* binding */ nullableType),
/* harmony export */   number: () => (/* binding */ numberType),
/* harmony export */   object: () => (/* binding */ objectType),
/* harmony export */   objectUtil: () => (/* binding */ objectUtil),
/* harmony export */   oboolean: () => (/* binding */ oboolean),
/* harmony export */   onumber: () => (/* binding */ onumber),
/* harmony export */   optional: () => (/* binding */ optionalType),
/* harmony export */   ostring: () => (/* binding */ ostring),
/* harmony export */   pipeline: () => (/* binding */ pipelineType),
/* harmony export */   preprocess: () => (/* binding */ preprocessType),
/* harmony export */   promise: () => (/* binding */ promiseType),
/* harmony export */   quotelessJson: () => (/* binding */ quotelessJson),
/* harmony export */   record: () => (/* binding */ recordType),
/* harmony export */   set: () => (/* binding */ setType),
/* harmony export */   setErrorMap: () => (/* binding */ setErrorMap),
/* harmony export */   strictObject: () => (/* binding */ strictObjectType),
/* harmony export */   string: () => (/* binding */ stringType),
/* harmony export */   symbol: () => (/* binding */ symbolType),
/* harmony export */   transformer: () => (/* binding */ effectsType),
/* harmony export */   tuple: () => (/* binding */ tupleType),
/* harmony export */   undefined: () => (/* binding */ undefinedType),
/* harmony export */   union: () => (/* binding */ unionType),
/* harmony export */   unknown: () => (/* binding */ unknownType),
/* harmony export */   util: () => (/* binding */ util),
/* harmony export */   "void": () => (/* binding */ voidType),
/* harmony export */   z: () => (/* binding */ z)
/* harmony export */ });
var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: issueData.message || errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            syncPairs.push({
                key: await pair.key,
                value: await pair.value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        if (typeof ctx.data === "undefined") {
            return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
        }
        return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this, this._def);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// Adapted from https://stackoverflow.com/a/3143231
const datetimeRegex = (args) => {
    if (args.precision) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
        }
    }
    else if (args.precision === 0) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
        }
    }
    else {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
        }
    }
};
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    constructor() {
        super(...arguments);
        this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
        /**
         * @deprecated Use z.string().min(1) instead.
         * @see {@link ZodString.min}
         */
        this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
        this.trim = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
        this.toLowerCase = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
        this.toUpperCase = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            }
            //
            );
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    syncPairs.push({
                        key,
                        value: await pair.value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return Object.keys(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else {
        return null;
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values) {
        return ZodEnum.create(values);
    }
    exclude(values) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.issues.length) {
                return {
                    status: "dirty",
                    value: ctx.data,
                };
            }
            if (ctx.common.async) {
                return Promise.resolve(processed).then((processed) => {
                    return this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                });
            }
            else {
                return this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc
            // effect: RefinementEffect<any>
            ) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        if (isValid(result)) {
            result.value = Object.freeze(result.value);
        }
        return result;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
const custom = (check, params = {}, 
/*
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) => {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
                const p = typeof params === "function"
                    ? params(data)
                    : typeof params === "string"
                        ? { message: params }
                        : params;
                const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                const p2 = typeof p === "string" ? { message: p } : p;
                ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
        });
    return ZodAny.create();
};
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util; },
    get objectUtil () { return objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "a01:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunka01"] = self["webpackChunka01"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var exports = {};
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const remotion_1 = __webpack_require__(3947);
remotion_1.Internals.setupEnvVariables();
remotion_1.Internals.CSSUtils.injectCSS(`
  .css-reset, .css-reset * {
    font-size: 16px;
    line-height: 1.5;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background: transparent;
    box-sizing: border-box;
  }

  .algolia-docsearch-suggestion--highlight {
    font-size: 15px;
    line-height: 1.25;
  }

  .__remotion-info-button-container code {
    font-family: monospace;
    font-size: 14px;
    color: #0584f2
  }

  .__remotion-vertical-scrollbar::-webkit-scrollbar {
      width: 6px;
  }
  .__remotion-vertical-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.0);
  }
  .__remotion-vertical-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .__remotion-vertical-scrollbar:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 1);
  }


  .__remotion-horizontal-scrollbar::-webkit-scrollbar {
    height: 6px;
  }
  .__remotion-horizontal-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.0);
  }
  .__remotion-horizontal-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .__remotion-horizontal-scrollbar:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 1);
  }


  @-moz-document url-prefix() {
    .__remotion-vertical-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0);
    }

    .__remotion-vertical-scrollbar:hover {
      scrollbar-color: rgba(0, 0, 0, 1) rgba(0, 0, 0, 0);
    }

    .__remotion-horizontal-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0);
    }

    .__remotion-horizontal-scrollbar:hover {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 1) rgba(0, 0, 0, 0);
    }
  }


  .__remotion-timeline-slider {
    appearance: none;
    width: 100px;
    border-radius: 3px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    accent-color: #ffffff;
  }
  
  .__remotion-timeline-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;
    appearance: none;
  }



`);

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {

// EXTERNAL MODULE: ./node_modules/remotion/dist/esm/index.mjs
var esm = __webpack_require__(3947);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(4476);
// EXTERNAL MODULE: ./node_modules/@remotion/zod-types/dist/esm/index.mjs
var dist_esm = __webpack_require__(761);
;// ./src/components/StyledTitle.tsx



const StyledTitle = ({ children, color, image }) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    esm.AbsoluteFill,
    {
      style: {
        backgroundImage: image ? `url(${(0,esm.staticFile)(image)})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: `${image ? "" : "bg-gray-900"} items-center justify-center`,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "h1",
        {
          style: {
            color,
            fontSize: "10rem"
          },
          className: "font-extrabold tracking-tighter text-center font-noto-sans-jp",
          children
        }
      )
    }
  );
};

;// ./src/MyVideo.tsx






const myVideoSchema = lib.z.object({
  scenario: lib.z.array(
    lib.z.object({
      type: lib.z.string(),
      text: lib.z.string().optional(),
      title: lib.z.string().optional(),
      children: lib.z.string().optional(),
      description: lib.z.string().optional(),
      code: lib.z.string().optional(),
      color: (0,dist_esm.zColor)().optional(),
      image: lib.z.string().optional(),
      // imageプロパティを追加
      audio: lib.z.string().optional()
      // audioプロパティを追加
    })
  )
});
const useAppearAnimation = (delay) => {
  const frame = (0,esm.useCurrentFrame)();
  const { fps } = (0,esm.useVideoConfig)();
  const anim = (0,esm.spring)({
    frame: frame - delay,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 12,
      stiffness: 100
    }
  });
  return {
    opacity: anim,
    transform: `translateY(${(1 - anim) * 50}px)`
  };
};
const TitleScene = ({ text, color, image }) => {
  const animation = useAppearAnimation(0);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(esm.AbsoluteFill, { style: animation, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(StyledTitle, { color, image, children: text }) });
};
const InfoScene = ({ title, children, image }) => {
  const titleAnim = useAppearAnimation(0);
  const contentAnim = useAppearAnimation(15);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    esm.AbsoluteFill,
    {
      style: {
        backgroundImage: image ? `url(${(0,esm.staticFile)(image)})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: image ? void 0 : "rgb(17 24 39)"
        // Equivalent to bg-gray-900
      },
      className: "items-center justify-center text-center p-8",
      children: [
        title && /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { style: titleAnim, className: "text-8xl font-bold text-white mb-12 drop-shadow-lg", children: title }),
        children && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "div",
          {
            style: contentAnim,
            className: "text-7xl text-white font-bold max-w-5xl leading-tight drop-shadow-lg",
            dangerouslySetInnerHTML: { __html: children }
          }
        )
      ]
    }
  );
};
const CodeScene = ({ description, code, image }) => {
  const descAnim = useAppearAnimation(0);
  const codeAnim = useAppearAnimation(15);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    esm.AbsoluteFill,
    {
      style: {
        backgroundImage: image ? `url(${(0,esm.staticFile)(image)})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: `${image ? "" : "bg-gray-900"} items-center justify-center text-center p-8`,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { style: descAnim, className: "text-7xl text-white mb-12 font-bold drop-shadow-lg text-center font-noto-sans-jp", children: description }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "code",
          {
            style: codeAnim,
            className: "bg-gray-800 border-2 border-gray-700 text-emerald-300 p-8 rounded-lg text-6xl font-mono font-noto-sans-jp text-center",
            children: code
          }
        )
      ]
    }
  );
};
const MyVideo = ({ scenario }) => {
  const SCENE_DURATION = 100;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(esm.AbsoluteFill, { children: scenario.map((scene, index) => {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(esm.Sequence, { from: index * SCENE_DURATION, durationInFrames: SCENE_DURATION, children: [
      scene.audio && /* @__PURE__ */ (0,jsx_runtime.jsx)(esm.Audio, { src: scene.audio }),
      (() => {
        switch (scene.type) {
          case "title":
            return scene.text && scene.color ? /* @__PURE__ */ (0,jsx_runtime.jsx)(TitleScene, { text: scene.text, color: scene.color, image: scene.image }) : null;
          case "info":
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(InfoScene, { title: scene.title, children: scene.children, image: scene.image });
          case "code":
            return scene.description && scene.code ? /* @__PURE__ */ (0,jsx_runtime.jsx)(CodeScene, { description: scene.description, code: scene.code, image: scene.image }) : null;
          default:
            return null;
        }
      })()
    ] }, index);
  }) });
};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(8972);
;// ./src/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.A, options);




       /* harmony default export */ const src = (cjs_js_src/* default */.A && cjs_js_src/* default */.A.locals ? cjs_js_src/* default */.A.locals : undefined);

;// ./public/scenario.json
const scenario_namespaceObject = /*#__PURE__*/JSON.parse('{"N":[{"type":"title","text":"Gemini CLIで動画自動生成アプリの使い方","color":"#FF6F00"},{"type":"info","title":"アプリの概要","children":"このアプリは、テキストファイルから<br />動画を自動生成するツールです。","audio":"/audio/555.mp3"},{"type":"info","title":"シナリオの編集","children":"`scenario.md`を編集するだけで<br />動画の内容を簡単に変更できます。","audio":"/audio/555.mp3"},{"type":"info","title":"GitHub Actionsで自動生成","children":"`scenario.md`をコミットプッシュすると<br />GitHub Actionsが自動で動画をレンダリングします。","audio":"/audio/555.mp3"},{"type":"info","title":"Google Driveへの自動アップロード","children":"設定すれば、レンダリングされた動画は<br />Google Driveに自動でアップロードされます。","audio":"/audio/555.mp3"},{"type":"info","title":"ローカルでの確認","children":"`npm run dev`で、GitHubにプッシュする前に<br />ローカルで動画のプレビューを確認できます。","audio":"/audio/555.mp3"},{"type":"info","title":"フォークして使ってみよう！","children":"このリポジトリをフォークすれば<br />あなたも簡単に動画を自動生成できます！","audio":"/audio/555.mp3"},{"type":"info","title":"✌ ✌","children":"詳しい使い方は readmeファイル読んでくださいなっ！","audio":"/audio/555.mp3"}]}');
;// ./src/Root.tsx






const RemotionRoot = () => {
  const SCENE_DURATION = 100;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    esm.Composition,
    {
      id: "MyVideo",
      component: MyVideo,
      durationInFrames: scenario_namespaceObject.N.length * SCENE_DURATION,
      fps: 30,
      width: 1920,
      height: 1080,
      schema: myVideoSchema,
      defaultProps: { scenario: scenario_namespaceObject.N }
    }
  ) });
};

;// ./src/index.ts



(0,esm.registerRoot)(RemotionRoot);

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);


if (typeof globalThis === 'undefined') {
	window.React = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));
} else {
	globalThis.React = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));
}

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/* unused harmony export setBundleModeAndUpdate */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var remotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3947);
/* harmony import */ var remotion_no_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9382);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);


// src/renderEntry.tsx





var currentBundleMode = {
  type: "index"
};
var setBundleMode = (state) => {
  currentBundleMode = state;
};
var getBundleMode = () => {
  return currentBundleMode;
};
remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CSSUtils.injectCSS(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CSSUtils.makeDefaultPreviewCSS(null, "#1f2428"));
var getCanSerializeDefaultProps = (object) => {
  try {
    const str = JSON.stringify(object);
    return str.length < 256 * 1024 * 1024 * 0.9;
  } catch (err) {
    if (err.message.includes("Invalid string length")) {
      return false;
    }
    throw err;
  }
};
var isInHeadlessBrowser = () => {
  return typeof window.remotion_puppeteerTimeout !== "undefined";
};
var DelayedSpinner = () => {
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  if (!show) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remotion__WEBPACK_IMPORTED_MODULE_2__.AbsoluteFill, {
    style: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 13,
      opacity: 0.6,
      color: "white",
      fontFamily: "Helvetica, Arial, sans-serif"
    },
    children: "Loading Studio"
  });
};
var GetVideoComposition = ({ state }) => {
  const { compositions, currentCompositionMetadata, canvasContent } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CompositionManager);
  const { setCanvasContent } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CompositionSetters);
  const portalContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [handle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(`Waiting for Composition "${state.compositionName}"`));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
  }, [handle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (compositions.length === 0) {
      return;
    }
    const foundComposition = compositions.find((c) => c.id === state.compositionName);
    if (!foundComposition) {
      throw new Error(`Found no composition with the name ${state.compositionName}. The following compositions were found instead: ${compositions.map((c) => c.id).join(", ")}. All compositions must have their ID calculated deterministically and must be mounted at the same time.`);
    }
    setCanvasContent({
      type: "composition",
      compositionId: foundComposition.id
    });
  }, [compositions, state, currentCompositionMetadata, setCanvasContent]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!canvasContent) {
      return;
    }
    const { current } = portalContainer;
    if (!current) {
      throw new Error("portal did not render");
    }
    current.appendChild(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.portalNode());
    (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
    return () => {
      current.removeChild(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.portalNode());
    };
  }, [canvasContent, handle]);
  if (!currentCompositionMetadata) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ref: portalContainer,
    id: "remotion-canvas",
    style: {
      width: currentCompositionMetadata.width,
      height: currentCompositionMetadata.height,
      display: "flex",
      backgroundColor: "transparent"
    }
  });
};
var DEFAULT_ROOT_COMPONENT_TIMEOUT = 1e4;
var waitForRootHandle = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)("Loading root component - See https://remotion.dev/docs/troubleshooting/loading-root-component if you experience a timeout", {
  timeoutInMilliseconds: typeof window === "undefined" ? DEFAULT_ROOT_COMPONENT_TIMEOUT : window.remotion_puppeteerTimeout ?? DEFAULT_ROOT_COMPONENT_TIMEOUT
});
var videoContainer = document.getElementById("video-container");
var root = null;
var getRootForElement = () => {
  if (root) {
    return root;
  }
  root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(videoContainer);
  return root;
};
var renderToDOM = (content) => {
  if (!react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot) {
    if (remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.ENABLE_V5_BREAKING_CHANGES) {
      throw new Error("Remotion 5.0 does only support React 18+. However, ReactDOM.createRoot() is undefined.");
    }
    react_dom_client__WEBPACK_IMPORTED_MODULE_1__.render(content, videoContainer);
    return;
  }
  getRootForElement().render(content);
};
var renderContent = (Root) => {
  const bundleMode = getBundleMode();
  if (bundleMode.type === "composition") {
    const markup = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.RemotionRoot, {
      logLevel: window.remotion_logLevel,
      numberOfAudioTags: 0,
      audioLatencyHint: window.remotion_audioLatencyHint ?? "interactive",
      onlyRenderComposition: bundleMode.compositionName,
      currentCompositionMetadata: {
        props: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.deserializeJSONWithSpecialTypes(bundleMode.serializedResolvedPropsWithSchema),
        durationInFrames: bundleMode.compositionDurationInFrames,
        fps: bundleMode.compositionFps,
        height: bundleMode.compositionHeight,
        width: bundleMode.compositionWidth,
        defaultCodec: bundleMode.compositionDefaultCodec,
        defaultOutName: bundleMode.compositionDefaultOutName,
        defaultVideoImageFormat: bundleMode.compositionDefaultVideoImageFormat,
        defaultPixelFormat: bundleMode.compositionDefaultPixelFormat
      },
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Root, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GetVideoComposition, {
          state: bundleMode
        })
      ]
    });
    renderToDOM(markup);
  }
  if (bundleMode.type === "evaluation") {
    const markup = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.RemotionRoot, {
      logLevel: window.remotion_logLevel,
      numberOfAudioTags: 0,
      onlyRenderComposition: null,
      currentCompositionMetadata: null,
      audioLatencyHint: window.remotion_audioLatencyHint ?? "interactive",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Root, {})
    });
    renderToDOM(markup);
  }
  if (bundleMode.type === "index") {
    if (isInHeadlessBrowser()) {
      return;
    }
    renderToDOM(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DelayedSpinner, {})
    }));
    __webpack_require__.e(/* import() */ 750).then(__webpack_require__.bind(__webpack_require__, 7750)).then(({ StudioInternals }) => {
      renderToDOM(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StudioInternals.Studio, {
        readOnly: true,
        rootComponent: Root
      }));
    }).catch((err) => {
      renderToDOM(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [
          "Failed to load Remotion Studio: ",
          err.message
        ]
      }));
    });
  }
};
remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.waitForRoot((Root) => {
  renderContent(Root);
  (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(waitForRootHandle);
});
var setBundleModeAndUpdate = (state) => {
  setBundleMode(state);
  const delay = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)("Waiting for root component to load - See https://remotion.dev/docs/troubleshooting/loading-root-component if you experience a timeout");
  remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.waitForRoot((Root) => {
    renderContent(Root);
    requestAnimationFrame(() => {
      (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(delay);
    });
  });
};
if (typeof window !== "undefined") {
  const getUnevaluatedComps = () => {
    if (!remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.getRoot()) {
      throw new Error("registerRoot() was never called. 1. Make sure you specified the correct entrypoint for your bundle. 2. If your registerRoot() call is deferred, use the delayRender/continueRender pattern to tell Remotion to wait.");
    }
    if (!remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.compositionsRef.current) {
      throw new Error("Unexpectedly did not have a CompositionManager");
    }
    const compositions = remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.compositionsRef.current.getCompositions();
    const canSerializeDefaultProps = getCanSerializeDefaultProps(compositions);
    if (!canSerializeDefaultProps) {
      remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.Log.warn(window.remotion_logLevel, "defaultProps are too big to serialize - trying to find the problematic composition...");
      remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.Log.warn(window.remotion_logLevel, "Serialization:", compositions);
      for (const comp of compositions) {
        if (!getCanSerializeDefaultProps(comp)) {
          throw new Error(`defaultProps too big - could not serialize - the defaultProps of composition with ID ${comp.id} - the object that was passed to defaultProps was too big. Learn how to mitigate this error by visiting https://remotion.dev/docs/troubleshooting/serialize-defaultprops`);
        }
      }
      remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.Log.warn(window.remotion_logLevel, "Could not single out a problematic composition -  The composition list as a whole is too big to serialize.");
      throw new Error("defaultProps too big - Could not serialize - an object that was passed to defaultProps was too big. Learn how to mitigate this error by visiting https://remotion.dev/docs/troubleshooting/serialize-defaultprops");
    }
    return compositions;
  };
  window.getStaticCompositions = () => {
    const compositions = getUnevaluatedComps();
    const inputProps = typeof window === "undefined" || (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getRemotionEnvironment)().isPlayer ? {} : (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getInputProps)() ?? {};
    return Promise.all(compositions.map(async (c) => {
      const handle = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(`Running calculateMetadata() for composition ${c.id}. If you didn't want to evaluate this composition, use "selectComposition()" instead of "getCompositions()"`);
      const originalProps = {
        ...c.defaultProps ?? {},
        ...inputProps ?? {}
      };
      const comp = remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.resolveVideoConfig({
        calculateMetadata: c.calculateMetadata,
        compositionDurationInFrames: c.durationInFrames ?? null,
        compositionFps: c.fps ?? null,
        compositionHeight: c.height ?? null,
        compositionWidth: c.width ?? null,
        signal: new AbortController().signal,
        originalProps,
        defaultProps: c.defaultProps ?? {},
        compositionId: c.id
      });
      const resolved = await Promise.resolve(comp);
      (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
      const { props, defaultProps, ...data } = resolved;
      return {
        ...data,
        serializedResolvedPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithSpecialTypes({
          data: props,
          indent: undefined,
          staticBase: null
        }).serializedString,
        serializedDefaultPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithSpecialTypes({
          data: defaultProps,
          indent: undefined,
          staticBase: null
        }).serializedString
      };
    }));
  };
  window.remotion_getCompositionNames = () => {
    return getUnevaluatedComps().map((c) => c.id);
  };
  window.remotion_calculateComposition = async (compId) => {
    const compositions = getUnevaluatedComps();
    const selectedComp = compositions.find((c) => c.id === compId);
    if (!selectedComp) {
      throw new Error(`Could not find composition with ID ${compId}. Available compositions: ${compositions.map((c) => c.id).join(", ")}`);
    }
    const abortController = new AbortController;
    const handle = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(`Running the calculateMetadata() function for composition ${compId}`);
    const inputProps = typeof window === "undefined" || (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getRemotionEnvironment)().isPlayer ? {} : (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getInputProps)() ?? {};
    const originalProps = {
      ...selectedComp.defaultProps ?? {},
      ...inputProps ?? {}
    };
    const prom = await Promise.resolve(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.resolveVideoConfig({
      calculateMetadata: selectedComp.calculateMetadata,
      compositionDurationInFrames: selectedComp.durationInFrames ?? null,
      compositionFps: selectedComp.fps ?? null,
      compositionHeight: selectedComp.height ?? null,
      compositionWidth: selectedComp.width ?? null,
      originalProps,
      signal: abortController.signal,
      defaultProps: selectedComp.defaultProps ?? {},
      compositionId: selectedComp.id
    }));
    (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
    const { props, defaultProps, ...data } = prom;
    return {
      ...data,
      serializedResolvedPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithSpecialTypes({
        data: props,
        indent: undefined,
        staticBase: null
      }).serializedString,
      serializedDefaultPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithSpecialTypes({
        data: defaultProps,
        indent: undefined,
        staticBase: null
      }).serializedString
    };
  };
  window.remotion_setBundleMode = setBundleModeAndUpdate;
}


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map