module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("caffeine-script-runtime");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgOutBase, BaseClass, log, createObjectTreeFactory, isString;
  ({ BaseClass, log, createObjectTreeFactory, isString } = Caf.import(
    ["BaseClass", "log", "createObjectTreeFactory", "isString"],
    [__webpack_require__(3), global]
  ));
  return JsgOutBase = Caf.defClass(
    class JsgOutBase extends BaseClass {
      constructor(props, children) {
        super(...arguments);
        this.props = props;
        this.children = children;
      }
    },
    function(JsgOutBase, classSuper, instanceSuper) {
      this.abstractClass();
      this.postCreateConcreteClass = function() {
        classSuper.postCreateConcreteClass.apply(this, arguments);
        log({ postCreateConcreteClass: this.getName() });
        return this.toComponentFactory();
      };
      this.toComponentFactory = function() {
        return createObjectTreeFactory(
          {
            inspectedName: `${Caf.toString(this.getName())}Factory`,
            class: this
          },
          (props, children) => {
            return new this(props, children);
          }
        );
      };
      this.prototype.appendChildTo = function(child, appendToString, indent) {
        return isString(child)
          ? appendToString += child
          : child.appendTo(appendToString, indent);
      };
      this.prototype.appendTo = function(appendToString, indent) {
        let delimiter, numChildren;
        ({ delimiter } = this.props);
        numChildren = this.children.length;
        Caf.each(this.children, undefined, (child, i, into) => {
          appendToString = this.appendChildTo(child, appendToString, indent);
          if (delimiter != null && i + 1 < numChildren) {
            appendToString += delimiter;
          }
        });
        return appendToString;
      };
      this.prototype.toString = function() {
        return this.appendTo("");
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return __webpack_require__(5).merge(
    __webpack_require__(5),
    __webpack_require__(12),
    __webpack_require__(13)
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Caffeine, JsGen,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Caffeine = __webpack_require__(22);

module.exports = Caffeine.JsGen || Caffeine.addNamespace('JsGen', JsGen = (function(superClass) {
  extend(JsGen, superClass);

  function JsGen() {
    return JsGen.__super__.constructor.apply(this, arguments);
  }

  return JsGen;

})(Neptune.Base));

__webpack_require__(9);

__webpack_require__(11);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("art-standard-lib");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgNode, DeclarableMixin, BaseClass, createObjectTreeFactory, log, Error;
  ({
    DeclarableMixin,
    BaseClass,
    createObjectTreeFactory,
    log,
    Error
  } = Caf.import(
    ["DeclarableMixin", "BaseClass", "createObjectTreeFactory", "log", "Error"],
    [
      __webpack_require__(3),
      __webpack_require__(13),
      __webpack_require__(12),
      global
    ]
  ));
  return JsgNode = Caf.defClass(
    class JsgNode extends DeclarableMixin(BaseClass) {
      constructor(_props, _children) {
        let childrenMap;
        super(...arguments);
        this._props = _props;
        this._children = _children;
        log(1);
        if (childrenMap = this.getChildrenMap()) {
          log(2);
          if (childrenMap.length < this._children.length) {
            throw new Error(
              `More children(${Caf.toString(
                this._children.length
              )}) than allowed: ${Caf.toString(childrenMap.length)}`
            );
          }
          log(3);
          Caf.each(this.getChildrenMap(), undefined, (propName, i, into) => {
            if (this._props[propName]) {
              throw new Error(
                `${Caf.toString(propName)} specified in props and children`
              );
            }
            this._props[propName] = this._children[i];
          });
          log(4);
        }
      }
    },
    function(JsgNode, classSuper, instanceSuper) {
      this.abstractClass();
      this.property("source", "sourceIndex", "props", "children");
      this.postCreateConcreteClass = function() {
        classSuper.postCreateConcreteClass.apply(this, arguments);
        return this.toComponentFactory();
      };
      this.toComponentFactory = function() {
        return createObjectTreeFactory(
          {
            inspectedName: `${Caf.toString(this.getName())}Factory`,
            class: this
          },
          (props, children) => {
            return new this(props, children);
          }
        );
      };
      this.declarable({ childrenMap: [], propFields: {} });
      this.getter({
        type: function() {
          return this.class.getName();
        }
      });
      this.prototype.generateJs = function(jsStream) {};
      this.prototype.generate = function(options = {}) {
        let jsStream, sourceMapStream, inlineSourceMap;
        return { jsStream, sourceMapStream, inlineSourceMap } = options;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgOutLines;
  return JsgOutLines = Caf.defClass(
    class JsgOutLines extends __webpack_require__(2) {},
    function(JsgOutLines, classSuper, instanceSuper) {
      this.prototype.appendTo = function(appendToString, indent) {
        let terminator, numChildren;
        ({ terminator } = this.props);
        indent = indent != null ? indent + "  " : "";
        numChildren = this.children.length;
        Caf.each(this.children, undefined, (child, i, into) => {
          appendToString += indent;
          appendToString = this.appendChildTo(child, appendToString, indent);
          if (terminator != null) {
            appendToString += terminator;
          }
          if (i + 1 < numChildren) {
            appendToString += "\n";
          }
        });
        return appendToString;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);

module.exports.addModules({
  JsgNumber: __webpack_require__(17)
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var JsGen, NodeTypes,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

JsGen = __webpack_require__(4);

module.exports = JsGen.NodeTypes || JsGen.addNamespace('NodeTypes', NodeTypes = (function(superClass) {
  extend(NodeTypes, superClass);

  function NodeTypes() {
    return NodeTypes.__super__.constructor.apply(this, arguments);
  }

  return NodeTypes;

})(Neptune.Base));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

module.exports.addModules({
  JsgOut: __webpack_require__(18),
  JsgOutBase: __webpack_require__(2),
  JsgOutLines: __webpack_require__(7),
  JsgOutSpaced: __webpack_require__(19),
  JsgOutStatements: __webpack_require__(20)
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var JsGen, OutputGenerator,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

JsGen = __webpack_require__(4);

module.exports = JsGen.OutputGenerator || JsGen.addNamespace('OutputGenerator', OutputGenerator = (function(superClass) {
  extend(OutputGenerator, superClass);

  function OutputGenerator() {
    return OutputGenerator.__super__.constructor.apply(this, arguments);
  }

  return OutputGenerator;

})(Neptune.Base));


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("art-class-system");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("art-object-tree-factory");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);

module.exports.includeInNamespace(__webpack_require__(15)).addModules({
  JsgNode: __webpack_require__(6),
  JsReservedWords: __webpack_require__(16),
  SourceMappedOutput: __webpack_require__(21),
  StandardImport: __webpack_require__(3)
});

__webpack_require__(8);

__webpack_require__(10);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return [__webpack_require__(8), __webpack_require__(10)];
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  "break";
  "case";
  "catch";
  "class";
  "const";
  "continue";
  "debugger";
  "default";
  "delete";
  "do";
  "else";
  "export";
  "extends";
  "finally";
  "for";
  "function";
  "if";
  "import";
  "in";
  "instanceof";
  "new";
  "return";
  "super";
  "switch";
  "this";
  "throw";
  "try";
  "typeof";
  "var";
  "void";
  "while";
  "with";
  "yield";
  "enum";
  "implements";
  "interface";
  "let";
  "package";
  "private";
  "protected";
  "public";
  "static";
  "await";
  "abstract";
  "boolean";
  "byte";
  "char";
  "double";
  "final";
  "float";
  "goto";
  "int";
  "long";
  "native";
  "short";
  "synchronized";
  "throws";
  "transient";
  return "volatile";
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgNumber, isNumber, isString, jsNumberRegexp;
  ({ isNumber, isString, jsNumberRegexp } = Caf.import(
    ["isNumber", "isString", "jsNumberRegexp"],
    [__webpack_require__(5), global]
  ));
  return JsgNumber = Caf.defClass(
    class JsgNumber extends __webpack_require__(6) {},
    function(JsgNumber, classSuper, instanceSuper) {
      this.childrenMap("number");
      this.propFields({
        number: {
          required: {
            validator: function(v) {
              return isNumber(v) || isString(v) && jsNumberRegexp.test(v);
            }
          }
        }
      });
      this.prototype.generateJs = function(jsStream) {
        return jsStream.write(this.number);
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgOut;
  return JsgOut = Caf.defClass(class JsgOut extends __webpack_require__(2) {});
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgOutSpaced;
  return JsgOutSpaced = Caf.defClass(
    class JsgOutSpaced extends __webpack_require__(2) {
      constructor() {
        super(...arguments);
        this.props.delimiter = " ";
      }
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let JsgOutStatements;
  return JsgOutStatements = Caf.defClass(
    class JsgOutStatements extends __webpack_require__(7).class {
      constructor() {
        super(...arguments);
        this.props.terminator = ";";
      }
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let SourceMappedOutput, BaseObject;
  ({ BaseObject } = Caf.import(["BaseObject"], [
    __webpack_require__(3),
    global
  ]));
  return SourceMappedOutput = Caf.defClass(
    class SourceMappedOutput extends BaseObject {
      constructor(text, sourceLine, sourceColumn) {
        super(...arguments);
        this.text = text;
        this.sourceLine = sourceLine;
        this.sourceColumn = sourceColumn;
      }
    },
    function(SourceMappedOutput, classSuper, instanceSuper) {
      this.prototype.output = function() {
        return this.text;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Caffeine, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(23);

module.exports = Neptune.Caffeine || Neptune.addNamespace('Caffeine', Caffeine = (function(superClass) {
  extend(Caffeine, superClass);

  function Caffeine() {
    return Caffeine.__super__.constructor.apply(this, arguments);
  }

  return Caffeine;

})(Neptune.Base));

__webpack_require__(4);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("neptune-namespaces");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return module.exports = __webpack_require__(14);
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })
/******/ ]);