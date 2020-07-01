/** ****/ (function (modules) {
  // webpackBootstrap
  /** ****/ // The module cache
  /** ****/ const installedModules = {}; // The require function
  /** ****/
  /** ****/ /** ****/ function __webpack_require__(moduleId) {
    /** ****/
    /** ****/ // Check if module is in cache
    /** ****/ if (installedModules[moduleId]) {
      /** ****/ return installedModules[moduleId].exports;
      /** ****/
    } // Create a new module (and put it into the cache)
    /** ****/ /** ****/ const module = (installedModules[moduleId] = {
      /** ****/ i: moduleId,
      /** ****/ l: false,
      /** ****/ exports: {},
      /** ****/
    }); // Execute the module function
    /** ****/
    /** ****/ /** ****/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /** ****/
    /** ****/ /** ****/ module.l = true; // Return the exports of the module
    /** ****/
    /** ****/ /** ****/ return module.exports;
    /** ****/
  } // expose the modules object (__webpack_modules__)
  /** ****/
  /** ****/
  /** ****/ /** ****/ __webpack_require__.m = modules; // expose the module cache
  /** ****/
  /** ****/ /** ****/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /** ****/
  /** ****/ /** ****/ __webpack_require__.d = function (exports, name, getter) {
    /** ****/ if (!__webpack_require__.o(exports, name)) {
      /** ****/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /** ****/
    }
    /** ****/
  }; // define __esModule on exports
  /** ****/
  /** ****/ /** ****/ __webpack_require__.r = function (exports) {
    /** ****/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** ****/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /** ****/
    }
    /** ****/ Object.defineProperty(exports, '__esModule', { value: true });
    /** ****/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /** ****/
  /** ****/ /** ****/ /** ****/ /** ****/ /** ****/ /** ****/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /** ****/ if (mode & 1) value = __webpack_require__(value);
    /** ****/ if (mode & 8) return value;
    /** ****/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /** ****/ const ns = Object.create(null);
    /** ****/ __webpack_require__.r(ns);
    /** ****/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value,
    });
    /** ****/ if (mode & 2 && typeof value !== 'string')
      for (const key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /** ****/ return ns;
    /** ****/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /** ****/
  /** ****/ /** ****/ __webpack_require__.n = function (module) {
    /** ****/ const getter =
      module && module.__esModule
        ? /** ****/ function getDefault() {
            return module.default;
          }
        : /** ****/ function getModuleExports() {
            return module;
          };
    /** ****/ __webpack_require__.d(getter, 'a', getter);
    /** ****/ return getter;
    /** ****/
  }; // Object.prototype.hasOwnProperty.call
  /** ****/
  /** ****/ /** ****/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /** ****/
  /** ****/ /** ****/ __webpack_require__.p = ''; // Load entry module and return exports
  /** ****/
  /** ****/
  /** ****/ /** ****/ return __webpack_require__((__webpack_require__.s = 0));
  /** ****/
})(
  /** **********************************************************************/
  /** ****/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ const _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ const _index_css__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__*/ __webpack_require__.n(
          _index_css__WEBPACK_IMPORTED_MODULE_0__
        );

        /**
         * Loader API Version: 2
         * Is this in "webpack mode": true
         */
        /**
         * Original Source From Loader
         */

        module.exports = () => {};

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(1)(module)));

      /***/
    },
    /* 1 */
    /***/ function (module, exports) {
      /**
       * Loader API Version: 2
       * Is this in "webpack mode": true
       */
      /**
       * Original Source From Loader
       */
      module.exports = function (originalModule) {
        if (!originalModule.webpackPolyfill) {
          var module = Object.create(originalModule);
          // module.parent = undefined by default
          if (!module.children) module.children = [];
          Object.defineProperty(module, 'loaded', {
            enumerable: true,
            get () {
              return module.l;
            },
          });
          Object.defineProperty(module, 'id', {
            enumerable: true,
            get () {
              return module.i;
            },
          });
          Object.defineProperty(module, 'exports', {
            enumerable: true,
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    },
    /* 2 */
    /***/ function (module, exports, __webpack_require__) {
      // Imports
      const ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
      const ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(4);
      exports = ___CSS_LOADER_API_IMPORT___(false);
      exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
      // Module
      exports.push([module.i, '.red {\n  background-color: red;\n}\n', '']);
      // Exports
      module.exports = exports;

      /***/
    },
    /* 3 */
    /***/ function (module, exports, __webpack_require__) {
      

      /**
       * Loader API Version: 2
       * Is this in "webpack mode": true
       */
      /**
       * Original Source From Loader
       */

      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function (useSourceMap) {
        const list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            const content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return '@media '.concat(item[2], ' {').concat(content, '}');
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names

        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          const alreadyImportedModules = {};

          if (dedupe) {
            for (let i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              const id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (let _i = 0; _i < modules.length; _i++) {
            const item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = ''.concat(mediaQuery, ' and ').concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        const content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        const cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          const sourceMapping = toComment(cssMapping);
          const sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL='
              .concat(cssMapping.sourceRoot || '')
              .concat(source, ' */');
          });
          return [content]
            .concat(sourceURLs)
            .concat([sourceMapping])
            .join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        const base64 = btoa(
          unescape(encodeURIComponent(JSON.stringify(sourceMap)))
        );
        const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
          base64
        );
        return '/*# '.concat(data, ' */');
      }

      /***/
    },
    /* 4 */
    /***/ function (module, exports, __webpack_require__) {
      // Imports
      const ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
      exports = ___CSS_LOADER_API_IMPORT___(false);
      // Module
      exports.push([module.i, '.common {\n  color: blue;\n}\n', '']);
      // Exports
      module.exports = exports;

      /***/
    },
    /** ****/
  ]
);
