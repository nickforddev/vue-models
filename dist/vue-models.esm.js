/**
  * vue-models v1.1.2
  * (c) 2017 Nick Ford
  * @license MIT
  */
function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";
exports.__esModule = true;
exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});
var _classCallCheck = unwrapExports(classCallCheck);

var _global = createCommonjsModule(function (module) {
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  : Function('return this')();
if (typeof __g == 'number') __g = global;
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core;
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (             ) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;
var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {             }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';
var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    out = own ? target[key] : source[key];
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    : IS_BIND && own ? _ctx(out, _global)
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
var _export = $export;

_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});
unwrapExports(defineProperty);

var createClass = createCommonjsModule(function (module, exports) {
"use strict";
exports.__esModule = true;
var _defineProperty2 = _interopRequireDefault(defineProperty);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});
var _createClass = unwrapExports(createClass);

function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var always =              _curry1(function always(val) {
  return function () {
    return val;
  };
});

var F =              always(false);

var T =              always(true);

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

var add =              _curry2(function add(a, b) {
  return Number(a) + Number(b);
});

function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

var curryN =              _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

var addIndex =              _curry1(function addIndex(fn) {
  return curryN(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

var adjust =              _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});

var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

var _xfBase = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

var XAll =              function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };
  return XAll;
}();
var _xall =              _curry2(function _xall(f, xf) {
  return new XAll(f, xf);
});

var all =              _curry2(              _dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));

var max =              _curry2(function max(a, b) {
  return b > a ? b : a;
});

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

var _isArrayLike =              _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

var XWrap =              function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };
  return XWrap;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}

var bind =              _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}
function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}
var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }
  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }
  throw new TypeError('reduce: list must be array or iterable');
}

var XMap =              function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };
  return XMap;
}();
var _xmap =              _curry2(function _xmap(f, xf) {
  return new XMap(f, xf);
});

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
};

var hasEnumBug = !              { toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
var hasArgsEnumBug =              function () {
  'use strict';
  return arguments.propertyIsEnumerable('length');
}();
var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys =              _curry1(_keys);

var map =              _curry2(              _dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));

var path =              _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});

var prop =              _curry2(function prop(p, obj) {
  return path([p], obj);
});

var pluck =              _curry2(function pluck(p, list) {
  return map(prop(p), list);
});

var reduce =              _curry3(_reduce);

var allPass =              _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});

var and =              _curry2(function and(a, b) {
  return a && b;
});

var XAny =              function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };
  return XAny;
}();
var _xany =              _curry2(function _xany(f, xf) {
  return new XAny(f, xf);
});

var any =              _curry2(              _dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));

var anyPass =              _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});

var ap =              _curry2(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  _reduce(function (acc, f) {
    return _concat(acc, map(f, applyX));
  }, [], applyF);
});

function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

var XAperture =              function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };
  return XAperture;
}();
var _xaperture =              _curry2(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});

var aperture =              _curry2(              _dispatchable([], _xaperture, _aperture));

var append =              _curry2(function append(el, list) {
  return _concat(list, [el]);
});

var apply =              _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});

var values =              _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});

var applySpec =              _curry1(function applySpec(spec) {
  spec = map(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
    var args = arguments;
    return map(function (f) {
      return apply(f, args);
    }, spec);
  });
});

var applyTo =              _curry2(function applyTo(x, f) {
  return f(x);
});

var ascend =              _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});

var assoc =              _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});

var _isInteger = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

var isNil =              _curry1(function isNil(x) {
  return x == null;
});

var assocPath =              _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});

var nAry =              _curry2(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});

var binary =              _curry1(function binary(fn) {
  return nAry(2, fn);
});

function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

var liftN =              _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function () {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

var lift =              _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});

var both =              _curry2(function both(f, g) {
  return _isFunction(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : lift(and)(f, g);
});

var curry =              _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

var call =              curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});

function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;
    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

var preservingReduced = function (xf) {
  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
    }
  };
};
var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
    }
  };
};

var _xchain =              _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});

var chain =              _curry2(              _dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map(fn, monad));
}));

var clamp =              _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});

function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

var type =              _curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return _cloneRegExp(value);
    default:
      return value;
  }
}

var clone =              _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
});

var comparator =              _curry1(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});

var not =              _curry1(function not(a) {
  return !a;
});

var complement =              lift(not);

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

var slice =              _curry3(              _checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

var tail =              _curry1(              _checkForMethod('tail',              slice(1, Infinity)));

function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}

var reverse =              _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
}

function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

function _functionName(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

var identical =              _curry2(function identical(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
});

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_containsWith(function (b, aItem) {
    return !_containsWith(eq, aItem, b);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }
  var typeA = type(a);
  if (typeA !== type(b)) {
    return false;
  }
  if (a == null || b == null) {
    return false;
  }
  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }
  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }
  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      return false;
  }
  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

var equals =              _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

function _indexOf(list, a, idx) {
  var inf, item;
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        return list.indexOf(a, idx);
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);
      case 'object':
        if (a === null) {
          return list.indexOf(a, idx);
        }
    }
  }
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b')
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};
var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

function _isObject$2(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

var XFilter =              function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };
  return XFilter;
}();
var _xfilter =              _curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

var filter =              _curry2(              _dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject$2(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys(filterable)) :
  _filter(pred, filterable);
}));

var reject =              _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };
  var mapPairs = function (obj, keys$$1) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys$$1.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return (/^\d+$/.test(k)
        );
      }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
}

var toString$1 =              _curry1(function toString(val) {
  return _toString(val, []);
});

var concat =              _curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString$1(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString$1(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});

var cond =              _curry1(function cond(pairs) {
  var arity = reduce(max, 0, map(function (pair) {
    return pair[0].length;
  }, pairs));
  return _arity(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});

var constructN =              _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});

var construct =              _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});

var contains$1 =              _curry2(_contains);

var converge =              _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});

var XReduceBy =              function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy;
}();
var _xreduceBy =              _curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});

var reduceBy =              _curryN(4, [],              _dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
  return _reduce(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));

var countBy =              reduceBy(function (acc, elem) {
  return acc + 1;
}, 0);

var dec =              add(-1);

var defaultTo =              _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

var descend =              _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});

var difference =              _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});

var differenceWith =              _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});

var dissoc =              _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});

var remove =              _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});

var update =              _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});

var dissocPath =              _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path[0]) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (_isInteger(path[0])) {
        return update(head, dissocPath(tail, obj[head]), obj);
      } else {
        return assoc(head, dissocPath(tail, obj[head]), obj);
      }
  }
});

var divide =              _curry2(function divide(a, b) {
  return a / b;
});

var XDrop =              function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };
  return XDrop;
}();
var _xdrop =              _curry2(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});

var drop =              _curry2(              _dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));

var XTake =              function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake;
}();
var _xtake =              _curry2(function _xtake(n, xf) {
  return new XTake(n, xf);
});

var take =              _curry2(              _dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));

function dropLast$2(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
}

var XDropLast =              function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  return XDropLast;
}();
var _xdropLast =              _curry2(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});

var dropLast =              _curry2(              _dispatchable([], _xdropLast, dropLast$2));

function dropLastWhile$2(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice(0, idx + 1, xs);
}

var XDropLastWhile =              function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = _reduce(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile;
}();
var _xdropLastWhile =              _curry2(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});

var dropLastWhile =              _curry2(              _dispatchable([], _xdropLastWhile, dropLastWhile$2));

var XDropRepeatsWith =              function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };
  return XDropRepeatsWith;
}();
var _xdropRepeatsWith =              _curry2(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});

var nth =              _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

var last =              nth(-1);

var dropRepeatsWith =              _curry2(              _dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));

var dropRepeats =              _curry1(              _dispatchable([],              _xdropRepeatsWith(equals),              dropRepeatsWith(equals)));

var XDropWhile =              function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };
  return XDropWhile;
}();
var _xdropWhile =              _curry2(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});

var dropWhile =              _curry2(              _dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return slice(idx, Infinity, xs);
}));

var or =              _curry2(function or(a, b) {
  return a || b;
});

var either =              _curry2(function either(f, g) {
  return _isFunction(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : lift(or)(f, g);
});

var empty =              _curry1(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject$2(x) ? {} : _isArguments(x) ? function () {
    return arguments;
  }() :
  void 0;
});

var takeLast =              _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});

var endsWith =              _curry2(function (suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});

var eqBy =              _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});

var eqProps =              _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});

var evolve =              _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});

var XFind =              function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };
  return XFind;
}();
var _xfind =              _curry2(function _xfind(f, xf) {
  return new XFind(f, xf);
});

var find =              _curry2(              _dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));

var XFindIndex =              function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };
  return XFindIndex;
}();
var _xfindIndex =              _curry2(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});

var findIndex =              _curry2(              _dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));

var XFindLast =              function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast;
}();
var _xfindLast =              _curry2(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});

var findLast =              _curry2(              _dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));

var XFindLastIndex =              function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex;
}();
var _xfindLastIndex =              _curry2(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});

var findLastIndex =              _curry2(              _dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));

var flatten =              _curry1(              _makeFlat(true));

var flip =              _curry1(function flip(fn) {
  return curryN(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

var forEach =              _curry2(              _checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));

var forEachObjIndexed =              _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});

var fromPairs =              _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});

var groupBy =              _curry2(              _checkForMethod('groupBy',              reduceBy(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));

var groupWith =              _curry2(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});

var gt =              _curry2(function gt(a, b) {
  return a > b;
});

var gte =              _curry2(function gte(a, b) {
  return a >= b;
});

var has =              _curry2(_has);

var hasIn =              _curry2(function hasIn(prop, obj) {
  return prop in obj;
});

var head =              nth(0);

function _identity(x) {
  return x;
}

var identity =              _curry1(_identity);

var ifElse =              _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});

var inc =              add(1);

var indexBy =              reduceBy(function (acc, elem) {
  return elem;
}, null);

var indexOf =              _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
});

var init$1 =              slice(0, -1);

var innerJoin =              _curry3(function innerJoin(pred, xs, ys) {
  return _filter(function (x) {
    return _containsWith(pred, x, ys);
  }, xs);
});

var insert =              _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});

var insertAll =              _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});

var _Set =              function () {
  function _Set() {
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };
  return _Set;
}();
function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }
    case 'boolean':
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case 'function':
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }
    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }
    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    default:
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      if (!_contains(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

var uniqBy =              _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;
  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});

var uniq =              uniqBy(identity);

var intersection =              _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});

var intersperse =              _curry2(              _checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));

function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

var _assign = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

var objOf =              _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});

var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': _identity
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': _identity
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return _assign(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
  },
  '@@transducer/result': _identity
};
function _stepCat(obj) {
  if (_isTransformer(obj)) {
    return obj;
  }
  if (_isArrayLike(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}

var into =              _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});

var invert =              _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});

var invertObj =              _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});

var invoker =              _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
  });
});

var is$1 =              _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});

var isEmpty =              _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});

var join =              invoker(1, 'join');

var juxt =              _curry1(function juxt(fns) {
  return converge(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});

var keysIn =              _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});

var lastIndexOf =              _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});

function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

var length =              _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});

var lens =              _curry2(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return map(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});

var lensIndex =              _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});

var lensPath =              _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});

var lensProp =              _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});

var lt =              _curry2(function lt(a, b) {
  return a < b;
});

var lte =              _curry2(function lte(a, b) {
  return a <= b;
});

var mapAccum =              _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});

var mapAccumRight =              _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});

var mapObjIndexed =              _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});

var match =              _curry2(function match(rx, str) {
  return str.match(rx) || [];
});

var mathMod =              _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) {
    return NaN;
  }
  if (!_isInteger(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});

var maxBy =              _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});

var sum =              reduce(add, 0);

var mean =              _curry1(function mean(list) {
  return sum(list) / list.length;
});

var median =              _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});

var memoizeWith =              _curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});

var memoize =              memoizeWith(function () {
  return toString$1(arguments);
});

var merge =              _curry2(function merge(l, r) {
  return _assign({}, l, r);
});

var mergeAll =              _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});

var mergeWithKey =              _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;
  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }
  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }
  return result;
});

var mergeDeepWithKey =              _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function (k, lVal, rVal) {
    if (_isObject$2(lVal) && _isObject$2(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});

var mergeDeepLeft =              _curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});

var mergeDeepRight =              _curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});

var mergeDeepWith =              _curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});

var mergeWith =              _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});

var min =              _curry2(function min(a, b) {
  return b < a ? b : a;
});

var minBy =              _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});

var modulo =              _curry2(function modulo(a, b) {
  return a % b;
});

var multiply =              _curry2(function multiply(a, b) {
  return a * b;
});

var negate =              _curry1(function negate(n) {
  return -n;
});

var none =              _curry2(              _complement(              _dispatchable(['any'], _xany, any)));

var nthArg =              _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function () {
    return nth(n, arguments);
  });
});

var o =              _curry3(function o(f, g, x) {
  return f(g(x));
});

function _of(x) {
  return [x];
}

var of =              _curry1(_of);

var omit =              _curry2(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }
  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

var once =              _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});

var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};
var over =              _curry3(function over(lens, f, x) {
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});

var pair =              _curry2(function pair(fst, snd) {
  return [fst, snd];
});

function _createPartialApplicator(concat) {
  return _curry2(function (fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

var partial =              _createPartialApplicator(_concat);

var partialRight =              _createPartialApplicator(              flip(_concat));

var partition =              juxt([filter, reject]);

var pathEq =              _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});

var pathOr =              _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});

var pathSatisfies =              _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});

var pick =              _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});

var pickAll =              _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});

var pickBy =              _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

var prepend =              _curry2(function prepend(el, list) {
  return _concat([el], list);
});

var product =              reduce(multiply, 1);

var useWith =              _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});

var project =              useWith(_map, [pickAll, identity]);

var propEq =              _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});

var propIs =              _curry3(function propIs(type, name, obj) {
  return is$1(type, obj[name]);
});

var propOr =              _curry3(function propOr(val, p, obj) {
  return obj != null && _has(p, obj) ? obj[p] : val;
});

var propSatisfies =              _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});

var props =              _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;
  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }
  return out;
});

var range =              _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});

var reduceRight =              _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});

var reduceWhile =              _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});

var reduced =              _curry1(_reduced);

var times =              _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;
  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});

var repeat =              _curry2(function repeat(value, n) {
  return times(always(value), n);
});

var replace =              _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});

var scan =              _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});

var sequence =              _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (x, acc) {
    return ap(map(prepend, x), acc);
  }, of([]), traversable);
});

var set =              _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});

var sort =              _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});

var sortBy =              _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});

var sortWith =              _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});

var split =              invoker(1, 'split');

var splitAt =              _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});

var splitEvery =              _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});

var splitWhen =              _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];
  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }
  return [prefix, Array.prototype.slice.call(list, idx)];
});

var startsWith =              _curry2(function (prefix, list) {
  return equals(take(prefix.length, list), prefix);
});

var subtract =              _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});

var symmetricDifference =              _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});

var symmetricDifferenceWith =              _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});

var takeLastWhile =              _curry2(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return slice(idx + 1, Infinity, xs);
});

var XTakeWhile =              function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };
  return XTakeWhile;
}();
var _xtakeWhile =              _curry2(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});

var takeWhile =              _curry2(              _dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return slice(0, idx, xs);
}));

var XTap =              function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = _xfBase.init;
  XTap.prototype['@@transducer/result'] = _xfBase.result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };
  return XTap;
}();
var _xtap =              _curry2(function _xtap(f, xf) {
  return new XTap(f, xf);
});

var tap =              _curry2(              _dispatchable([], _xtap, function tap(fn, x) {
  fn(x);
  return x;
}));

function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

var test =              _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString$1(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});

var toLower =              invoker(0, 'toLowerCase');

var toPairs =              _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});

var toPairsIn =              _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});

var toUpper =              invoker(0, 'toUpperCase');

var transduce =              curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});

var transpose =              _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});

var traverse =              _curry3(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : sequence(of, map(f, traversable));
});

var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
var _trim = !hasProtoTrim ||              ws.trim() || !              zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};
var trim =              _curry1(_trim);

var tryCatch =              _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});

var unapply =              _curry1(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});

var unary =              _curry1(function unary(fn) {
  return nAry(1, fn);
});

var uncurryN =              _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});

var unfold =              _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});

var union =              _curry2(              compose(uniq, _concat));

var uniqWith =              _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});

var unionWith =              _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});

var unless =              _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});

var unnest =              chain(_identity);

var until =              _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});

var valuesIn =              _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});

var Const = function (x) {
  return { value: x, 'fantasy-land/map': function () {
      return this;
    } };
};
var view =              _curry2(function view(lens, x) {
  return lens(Const)(x).value;
});

var when =              _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});

var where =              _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});

var whereEq =              _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});

var without =              _curry2(function (xs, list) {
  return reject(flip(_contains)(xs), list);
});

var xprod =              _curry2(function xprod(a, b) {
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});

var zip =              _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});

var zipObj =              _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});

var zipWith =              _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});

var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var _toObject = function (it) {
  return Object(_defined(it));
};

var hasOwnProperty = {}.hasOwnProperty;
var _has$1 = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var toString$3 = {}.toString;
var _cof = function (it) {
  return toString$3.call(it).slice(8, -1);
};

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

var _toIobject = function (it) {
  return _iobject(_defined(it));
};

var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

var min$2 = Math.min;
var _toLength = function (it) {
  return it > 0 ? min$2(_toInteger(it), 0x1fffffffffffff) : 0;
};

var max$2 = Math.max;
var min$3 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max$2(index + length, 0) : min$3(index, length);
};

var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');
var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');
var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has$1(O, key) && result.push(key);
  while (names.length > i) if (_has$1(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$3 = _core.Object.keys;

var keys$2 = createCommonjsModule(function (module) {
module.exports = { "default": keys$3, __esModule: true };
});
var _Object$keys = unwrapExports(keys$2);

/**
  * vue-requests v1.0.10
  * (c) 2017 Nick Ford
  * @license MIT
  */
var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function unwrapExports$1 (x) {
	return x && x.__esModule ? x['default'] : x;
}
function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var classCallCheck$1 = createCommonjsModule$1(function (module, exports) {
"use strict";
exports.__esModule = true;
exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});
var _classCallCheck$1 = unwrapExports$1(classCallCheck$1);
var _global$2 = createCommonjsModule$1(function (module) {
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  : Function('return this')();
if (typeof __g == 'number') __g = global;
});
var _core$2 = createCommonjsModule$1(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core;
});
var _aFunction$2 = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};
var _ctx$2 = function (fn, that, length) {
  _aFunction$2(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (             ) {
    return fn.apply(that, arguments);
  };
};
var _isObject$3 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
var _anObject$2 = function (it) {
  if (!_isObject$3(it)) throw TypeError(it + ' is not an object!');
  return it;
};
var _fails$2 = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};
var _descriptors$2 = !_fails$2(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});
var document$1$1 = _global$2.document;
var is$3 = _isObject$3(document$1$1) && _isObject$3(document$1$1.createElement);
var _domCreate$2 = function (it) {
  return is$3 ? document$1$1.createElement(it) : {};
};
var _ie8DomDefine$2 = !_descriptors$2 && !_fails$2(function () {
  return Object.defineProperty(_domCreate$2('div'), 'a', { get: function () { return 7; } }).a != 7;
});
var _toPrimitive$2 = function (it, S) {
  if (!_isObject$3(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject$3(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject$3(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject$3(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};
var dP$1 = Object.defineProperty;
var f$1 = _descriptors$2 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject$2(O);
  P = _toPrimitive$2(P, true);
  _anObject$2(Attributes);
  if (_ie8DomDefine$2) try {
    return dP$1(O, P, Attributes);
  } catch (e) {             }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var _objectDp$2 = {
	f: f$1
};
var _propertyDesc$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};
var _hide$2 = _descriptors$2 ? function (object, key, value) {
  return _objectDp$2.f(object, key, _propertyDesc$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
var PROTOTYPE$1 = 'prototype';
var $export$2 = function (type, name, source) {
  var IS_FORCED = type & $export$2.F;
  var IS_GLOBAL = type & $export$2.G;
  var IS_STATIC = type & $export$2.S;
  var IS_PROTO = type & $export$2.P;
  var IS_BIND = type & $export$2.B;
  var IS_WRAP = type & $export$2.W;
  var exports = IS_GLOBAL ? _core$2 : _core$2[name] || (_core$2[name] = {});
  var expProto = exports[PROTOTYPE$1];
  var target = IS_GLOBAL ? _global$2 : IS_STATIC ? _global$2[name] : (_global$2[name] || {})[PROTOTYPE$1];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    out = own ? target[key] : source[key];
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    : IS_BIND && own ? _ctx$2(out, _global$2)
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE$1] = C[PROTOTYPE$1];
      return F;
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx$2(Function.call, out) : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export$2.R && expProto && !expProto[key]) _hide$2(expProto, key, out);
    }
  }
};
$export$2.F = 1;
$export$2.G = 2;
$export$2.S = 4;
$export$2.P = 8;
$export$2.B = 16;
$export$2.W = 32;
$export$2.U = 64;
$export$2.R = 128;
var _export$2 = $export$2;
_export$2(_export$2.S + _export$2.F * !_descriptors$2, 'Object', { defineProperty: _objectDp$2.f });
var $Object$1 = _core$2.Object;
var defineProperty$2$1 = function defineProperty(it, key, desc) {
  return $Object$1.defineProperty(it, key, desc);
};
var defineProperty$4 = createCommonjsModule$1(function (module) {
module.exports = { "default": defineProperty$2$1, __esModule: true };
});
unwrapExports$1(defineProperty$4);
var createClass$1 = createCommonjsModule$1(function (module, exports) {
"use strict";
exports.__esModule = true;
var _defineProperty2 = _interopRequireDefault(defineProperty$4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});
var _createClass$1 = unwrapExports$1(createClass$1);
var runtime = createCommonjsModule$1(function (module) {
!(function(global) {
  "use strict";
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }
    return;
  }
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  runtime.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }
  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };
  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  runtime.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return Promise.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );
    return runtime.isGeneratorFunction(outerFn)
      ? iter
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator.return) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";
  Gp[iteratorSymbol] = function() {
    return this;
  };
  Gp.toString = function() {
    return "[object Generator]";
  };
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  runtime.values = values;
  function doneResult() {
    return { value: undefined, done: true };
  }
  Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }
        return !! caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };
})(
  (function() { return this })() || Function("return this")()
);
});
var g = (function() { return this })() || Function("return this")();
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
var oldRuntime = hadRuntime && g.regeneratorRuntime;
g.regeneratorRuntime = undefined;
var runtimeModule = runtime;
if (hadRuntime) {
  g.regeneratorRuntime = oldRuntime;
} else {
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}
var regenerator = runtimeModule;
var ceil$1 = Math.ceil;
var floor$1 = Math.floor;
var _toInteger$2 = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil$1)(it);
};
var _defined$2 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined$2(that));
    var i = _toInteger$2(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
var _library = true;
var _redefine = _hide$2;
var hasOwnProperty$1 = {}.hasOwnProperty;
var _has$3 = function (it, key) {
  return hasOwnProperty$1.call(it, key);
};
var _iterators = {};
var toString$4 = {}.toString;
var _cof$2 = function (it) {
  return toString$4.call(it).slice(8, -1);
};
var _iobject$2 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof$2(it) == 'String' ? it.split('') : Object(it);
};
var _toIobject$2 = function (it) {
  return _iobject$2(_defined$2(it));
};
var min$4 = Math.min;
var _toLength$2 = function (it) {
  return it > 0 ? min$4(_toInteger$2(it), 0x1fffffffffffff) : 0;
};
var max$3 = Math.max;
var min$1$1 = Math.min;
var _toAbsoluteIndex$2 = function (index, length) {
  index = _toInteger$2(index);
  return index < 0 ? max$3(index + length, 0) : min$1$1(index, length);
};
var _arrayIncludes$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject$2($this);
    var length = _toLength$2(O.length);
    var index = _toAbsoluteIndex$2(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
var SHARED$1 = '__core-js_shared__';
var store$1 = _global$2[SHARED$1] || (_global$2[SHARED$1] = {});
var _shared$2 = function (key) {
  return store$1[key] || (store$1[key] = {});
};
var id$1 = 0;
var px$1 = Math.random();
var _uid$2 = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px$1).toString(36));
};
var shared$2 = _shared$2('keys');
var _sharedKey$2 = function (key) {
  return shared$2[key] || (shared$2[key] = _uid$2(key));
};
var arrayIndexOf$1 = _arrayIncludes$2(false);
var IE_PROTO$1 = _sharedKey$2('IE_PROTO');
var _objectKeysInternal$2 = function (object, names) {
  var O = _toIobject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has$3(O, key) && result.push(key);
  while (names.length > i) if (_has$3(O, key = names[i++])) {
    ~arrayIndexOf$1(result, key) || result.push(key);
  }
  return result;
};
var _enumBugKeys$2 = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
var _objectKeys$2 = Object.keys || function keys(O) {
  return _objectKeysInternal$2(O, _enumBugKeys$2);
};
var _objectDps = _descriptors$2 ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject$2(O);
  var keys = _objectKeys$2(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp$2.f(O, P = keys[i++], Properties[P]);
  return O;
};
var document$2 = _global$2.document;
var _html = document$2 && document$2.documentElement;
var IE_PROTO$1$1 = _sharedKey$2('IE_PROTO');
var Empty = function () {             };
var PROTOTYPE$1$1 = 'prototype';
var createDict = function () {
  var iframe = _domCreate$2('iframe');
  var i = _enumBugKeys$2.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1$1][_enumBugKeys$2[i]];
  return createDict();
};
var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1$1] = _anObject$2(O);
    result = new Empty();
    Empty[PROTOTYPE$1$1] = null;
    result[IE_PROTO$1$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};
var _wks = createCommonjsModule$1(function (module) {
var store = _shared$2('wks');
var Symbol = _global$2.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$2)('Symbol.' + name));
};
$exports.store = store;
});
var def = _objectDp$2.f;
var TAG = _wks('toStringTag');
var _setToStringTag = function (it, tag, stat) {
  if (it && !_has$3(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};
'use strict';
var IteratorPrototype = {};
_hide$2(IteratorPrototype, _wks('iterator'), function () { return this; });
var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc$2(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};
var _toObject$2 = function (it) {
  return Object(_defined$2(it));
};
var IE_PROTO$2 = _sharedKey$2('IE_PROTO');
var ObjectProto = Object.prototype;
var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject$2(O);
  if (_has$3(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
'use strict';
var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys());
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function () { return this; };
var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      _setToStringTag(IteratorPrototype, TAG, true);
      if (!_library && !_has$3(IteratorPrototype, ITERATOR)) _hide$2(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide$2(proto, ITERATOR, $default);
  }
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export$2(_export$2.P + _export$2.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
'use strict';
var $at = _stringAt(true);
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});
var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};
'use strict';
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject$2(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');
_iterators.Arguments = _iterators.Array;
var TO_STRING_TAG = _wks('toStringTag');
var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global$2[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide$2(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}
var TAG$1 = _wks('toStringTag');
var ARG = _cof$2(function () { return arguments; }()) == 'Arguments';
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {             }
};
var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    : ARG ? _cof$2(O)
    : (B = _cof$2(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject$2(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject$2(ret.call(iterator));
    throw e;
  }
};
var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;
var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};
var ITERATOR$2 = _wks('iterator');
var core_getIteratorMethod = _core$2.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};
var _forOf = createCommonjsModule$1(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx$2(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (_isArrayIter(iterFn)) for (length = _toLength$2(iterable.length); length > index; index++) {
    result = entries ? f(_anObject$2(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});
var SPECIES = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject$2(O).constructor;
  var S;
  return C === undefined || (S = _anObject$2(C)[SPECIES]) == undefined ? D : _aFunction$2(S);
};
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};
var process$1 = _global$2.process;
var setTask = _global$2.setImmediate;
var clearTask = _global$2.clearImmediate;
var MessageChannel = _global$2.MessageChannel;
var Dispatch = _global$2.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function () {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  if (_cof$2(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(_ctx$2(run, id, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx$2(run, id, 1));
    };
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx$2(port.postMessage, port, 1);
  } else if (_global$2.addEventListener && typeof postMessage == 'function' && !_global$2.importScripts) {
    defer = function (id) {
      _global$2.postMessage(id + '', '*');
    };
    _global$2.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in _domCreate$2('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate$2('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  } else {
    defer = function (id) {
      setTimeout(_ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};
var macrotask = _task.set;
var Observer = _global$2.MutationObserver || _global$2.WebKitMutationObserver;
var process$2 = _global$2.process;
var Promise$1 = _global$2.Promise;
var isNode$1 = _cof$2(process$2) == 'process';
var _microtask = function () {
  var head, last, notify;
  var flush = function () {
    var parent, fn;
    if (isNode$1 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };
  if (isNode$1) {
    notify = function () {
      process$2.nextTick(flush);
    };
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function () {
      promise.then(flush);
    };
  } else {
    notify = function () {
      macrotask.call(_global$2, flush);
    };
  }
  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};
'use strict';
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction$2(resolve);
  this.reject = _aFunction$2(reject);
}
var f$1$1 = function (C) {
  return new PromiseCapability(C);
};
var _newPromiseCapability = {
	f: f$1$1
};
var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};
var _promiseResolve = function (C, x) {
  _anObject$2(C);
  if (_isObject$3(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};
var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide$2(target, key, src[key]);
  } return target;
};
'use strict';
var SPECIES$1 = _wks('species');
var _setSpecies = function (KEY) {
  var C = typeof _core$2[KEY] == 'function' ? _core$2[KEY] : _global$2[KEY];
  if (_descriptors$2 && C && !C[SPECIES$1]) _objectDp$2.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  });
};
var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) {             }
var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) {             }
  return safe;
};
'use strict';
var task = _task.set;
var microtask = _microtask();
var PROMISE = 'Promise';
var TypeError$1 = _global$2.TypeError;
var process$1$1 = _global$2.process;
var $Promise = _global$2[PROMISE];
var isNode = _classof(process$1$1) == 'process';
var empty$2 = function () {             };
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;
var USE_NATIVE = !!function () {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty$2, empty$2);
    };
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty$2) instanceof FakePromise;
  } catch (e) {             }
}();
var isThenable = function (it) {
  var then;
  return _isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]);
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global$2, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode) {
          process$1$1.emit('unhandledRejection', value, promise);
        } else if (handler = _global$2.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global$2.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(_global$2, function () {
    var handler;
    if (isNode) {
      process$1$1.emit('rejectionHandled', promise);
    } else if (handler = _global$2.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false };
        try {
          then.call(value, _ctx$2($resolve, wrapper, 1), _ctx$2($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e);
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction$2(executor);
    Internal.call(this);
    try {
      executor(_ctx$2($resolve, this, 1), _ctx$2($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = [];
    this._a = undefined;
    this._s = 0;
    this._d = false;
    this._v = undefined;
    this._h = 0;
    this._n = false;
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1$1.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx$2($resolve, promise, 1);
    this.reject = _ctx$2($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}
_export$2(_export$2.G + _export$2.W + _export$2.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core$2[PROMISE];
_export$2(_export$2.S + _export$2.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export$2(_export$2.S + _export$2.F * (_library || !USE_NATIVE), PROMISE, {
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export$2(_export$2.S + _export$2.F * !(USE_NATIVE && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty$2);
})), PROMISE, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});
'use strict';
_export$2(_export$2.P + _export$2.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor(this, _core$2.Promise || _global$2.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });
'use strict';
_export$2(_export$2.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability.f(this);
  var result = _perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });
var promise$1 = _core$2.Promise;
var promise = createCommonjsModule$1(function (module) {
module.exports = { "default": promise$1, __esModule: true };
});
var _Promise = unwrapExports$1(promise);
var asyncToGenerator = createCommonjsModule$1(function (module, exports) {
"use strict";
exports.__esModule = true;
var _promise2 = _interopRequireDefault(promise);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }
      return step("next");
    });
  };
};
});
var _asyncToGenerator = unwrapExports$1(asyncToGenerator);
var lodash_merge = createCommonjsModule$1(function (module, exports) {
var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reFlags = /\w*$/;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;
var freeGlobal = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
function addMapEntry(map, pair) {
  map.set(pair[0], pair[1]);
  return map;
}
function addSetEntry(set, value) {
  set.add(value);
  return set;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}
function stackClear() {
  this.__data__ = new ListCache;
}
function stackDelete(key) {
  return this.__data__['delete'](key);
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayLikeKeys(value, inherited) {
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function baseGetTag(value) {
  return objectToString.call(value);
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
function copyObject(source, props, object, customizer) {
  object || (object = {});
  var index = -1,
      length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;
    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
var getTag = baseGetTag;
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return cloneDataView(object, isDeep);
    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);
    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return cloneRegExp(object);
    case setTag:
      return cloneSet(object, isDeep, cloneFunc);
    case symbolTag:
      return cloneSymbol(object);
  }
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  return value === proto;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
var isArray = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
var isBuffer = nativeIsBuffer || stubFalse;
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
function stubArray() {
  return [];
}
function stubFalse() {
  return false;
}
module.exports = merge;
});
var $JSON = _core$2.JSON || (_core$2.JSON = { stringify: JSON.stringify });
var stringify$1 = function stringify(it) {
  return $JSON.stringify.apply($JSON, arguments);
};
var stringify = createCommonjsModule$1(function (module) {
module.exports = { "default": stringify$1, __esModule: true };
});
var _JSON$stringify = unwrapExports$1(stringify);
(function(self) {
  'use strict';
  if (self.fetch) {
    return
  }
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };
  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];
    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }
  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }
  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };
    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }
    return iterator
  }
  function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }
  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };
  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };
  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };
  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };
  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };
  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };
  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };
  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };
  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };
  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }
  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }
  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }
  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }
  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }
  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }
  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }
  function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }
      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };
    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };
      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }
    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }
      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };
    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }
    this.json = function() {
      return this.text().then(JSON.parse)
    };
    return this
  }
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }
  function Request(input, options) {
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }
    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;
    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }
  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };
  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }
  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }
  Body.call(Request.prototype);
  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }
    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }
  Body.call(Response.prototype);
  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };
  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };
  var redirectStatuses = [301, 302, 303, 307, 308];
  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }
    return new Response(null, {status: status, headers: {location: url}})
  };
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.open(request.method, request.url, true);
      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }
      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);
var f$2 = _wks;
var _wksExt = {
	f: f$2
};
var iterator$2 = _wksExt.f('iterator');
var iterator = createCommonjsModule$1(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});
unwrapExports$1(iterator);
var _meta = createCommonjsModule$1(function (module) {
var META = _uid$2('meta');
var setDesc = _objectDp$2.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails$2(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id,
    w: {}
  } });
};
var fastKey = function (it, create) {
  if (!_isObject$3(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has$3(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has$3(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  } return it[META].w;
};
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has$3(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var defineProperty$4$1 = _objectDp$2.f;
var _wksDefine = function (name) {
  var $Symbol = _core$2.Symbol || (_core$2.Symbol = _library ? {} : _global$2.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$4$1($Symbol, name, { value: _wksExt.f(name) });
};
var f$3 = Object.getOwnPropertySymbols;
var _objectGops = {
	f: f$3
};
var f$4 = {}.propertyIsEnumerable;
var _objectPie = {
	f: f$4
};
var _enumKeys = function (it) {
  var result = _objectKeys$2(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};
var _isArray$1 = Array.isArray || function isArray(arg) {
  return _cof$2(arg) == 'Array';
};
var hiddenKeys = _enumBugKeys$2.concat('length', 'prototype');
var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal$2(O, hiddenKeys);
};
var _objectGopn = {
	f: f$6
};
var gOPN$1 = _objectGopn.f;
var toString$1$1 = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};
var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject$2(it));
};
var _objectGopnExt = {
	f: f$5
};
var gOPD$1 = Object.getOwnPropertyDescriptor;
var f$7 = _descriptors$2 ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject$2(O);
  P = _toPrimitive$2(P, true);
  if (_ie8DomDefine$2) try {
    return gOPD$1(O, P);
  } catch (e) {             }
  if (_has$3(O, P)) return _propertyDesc$2(!_objectPie.f.call(O, P), O[P]);
};
var _objectGopd = {
	f: f$7
};
'use strict';
var META = _meta.KEY;
var gOPD = _objectGopd.f;
var dP$1$1 = _objectDp$2.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global$2.Symbol;
var $JSON$1 = _global$2.JSON;
var _stringify = $JSON$1 && $JSON$1.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared$2('symbol-registry');
var AllSymbols = _shared$2('symbols');
var OPSymbols = _shared$2('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE$1 = typeof $Symbol == 'function';
var QObject = _global$2.QObject;
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
var setSymbolDesc = _descriptors$2 && _fails$2(function () {
  return _objectCreate(dP$1$1({}, 'a', {
    get: function () { return dP$1$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1$1(ObjectProto$1, key, protoDesc);
} : dP$1$1;
var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};
var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject$2(it);
  key = _toPrimitive$2(key, true);
  _anObject$2(D);
  if (_has$3(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has$3(it, HIDDEN)) dP$1$1(it, HIDDEN, _propertyDesc$2(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has$3(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc$2(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject$2(it);
  var keys = _enumKeys(P = _toIobject$2(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive$2(key, true));
  if (this === ObjectProto$1 && _has$3(AllSymbols, key) && !_has$3(OPSymbols, key)) return false;
  return E || !_has$3(this, key) || !_has$3(AllSymbols, key) || _has$3(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject$2(it);
  key = _toPrimitive$2(key, true);
  if (it === ObjectProto$1 && _has$3(AllSymbols, key) && !_has$3(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has$3(AllSymbols, key) && !(_has$3(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject$2(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has$3(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject$2(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has$3(AllSymbols, key = names[i++]) && (IS_OP ? _has$3(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};
if (!USE_NATIVE$1) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid$2(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has$3(this, HIDDEN) && _has$3(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc$2(1, value));
    };
    if (_descriptors$2 && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });
  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp$2.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;
  if (_descriptors$2 && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}
_export$2(_export$2.G + _export$2.W + _export$2.F * !USE_NATIVE$1, { Symbol: $Symbol });
for (var es6Symbols = (
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);
for (var wellKnownSymbols = _objectKeys$2(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);
_export$2(_export$2.S + _export$2.F * !USE_NATIVE$1, 'Symbol', {
  'for': function (key) {
    return _has$3(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});
_export$2(_export$2.S + _export$2.F * !USE_NATIVE$1, 'Object', {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});
$JSON$1 && _export$2(_export$2.S + _export$2.F * (!USE_NATIVE$1 || _fails$2(function () {
  var S = $Symbol();
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return;
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray$1(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON$1, args);
  }
});
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide$2($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
_setToStringTag($Symbol, 'Symbol');
_setToStringTag(Math, 'Math', true);
_setToStringTag(_global$2.JSON, 'JSON', true);
_wksDefine('asyncIterator');
_wksDefine('observable');
var symbol$2 = _core$2.Symbol;
var symbol = createCommonjsModule$1(function (module) {
module.exports = { "default": symbol$2, __esModule: true };
});
unwrapExports$1(symbol);
var _typeof_1 = createCommonjsModule$1(function (module, exports) {
"use strict";
exports.__esModule = true;
var _iterator2 = _interopRequireDefault(iterator);
var _symbol2 = _interopRequireDefault(symbol);
var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});
var _typeof = unwrapExports$1(_typeof_1);
var lodash_pickby = createCommonjsModule$1(function (module, exports) {
var LARGE_ARRAY_SIZE = 200;
var FUNC_ERROR_TEXT = 'Expected a function';
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar = /\\(\\)?/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;
var freeGlobal = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeKeys = overArg(Object.keys, Object);
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}
function stackClear() {
  this.__data__ = new ListCache;
}
function stackDelete(key) {
  return this.__data__['delete'](key);
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayLikeKeys(value, inherited) {
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function baseGetTag(value) {
  return objectToString.call(value);
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;
  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}
function baseIteratee(value) {
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};
  while (++index < length) {
    var key = props[index],
        value = object[key];
    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];
    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == (other + '');
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];
    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
function getMatchData(object) {
  var result = keys(object),
      length = result.length;
  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
var getTag = baseGetTag;
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);
  var result,
      index = -1,
      length = path.length;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  return value === proto;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var stringToPath = memoize(function(string) {
  string = toString(string);
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}
memoize.Cache = MapCache;
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
var isArray = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
function toString(value) {
  return value == null ? '' : baseToString(value);
}
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function pickBy(object, predicate) {
  return object == null ? {} : basePickBy(object, getAllKeysIn(object), baseIteratee(predicate));
}
function identity(value) {
  return value;
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function stubArray() {
  return [];
}
module.exports = pickBy;
});
function identity$2(value) {
  return value;
}
var lodash_identity = identity$2;
function isDef$1(item) {
  return item !== undefined;
}
function validateArgs() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var functions = {
    before: options.before,
    timeout: options.timeout
  };
  var strings = {
    root: options.root
  };
  var objects = {
    headers: options.headers
  };
  var numbers = {
    timeout_duration: options.timeout_duration
  };
  for (var key in functions) {
    var type = _typeof(functions[key]);
    if (isDef$1(functions[key]) && type !== 'function') {
      throw new TypeError('Expected parameter "' + key + '" to be a function, received ' + type);
    }
  }
  for (var _key in strings) {
    var _type = _typeof(strings[_key]);
    if (isDef$1(strings[_key]) && _type !== 'string') {
      throw new TypeError('Expected parameter "' + _key + '" to be a string, received ' + _type);
    }
  }
  for (var _key2 in objects) {
    var _type2 = _typeof(objects[_key2]);
    if (isDef$1(objects[_key2]) && _type2 !== 'object') {
      throw new TypeError('Expected parameter "' + _key2 + '" to be an object, received ' + _type2);
    }
  }
  for (var _key3 in numbers) {
    var _type3 = _typeof(numbers[_key3]);
    if (isDef$1(numbers[_key3]) && _type3 !== 'number') {
      throw new TypeError('Expected parameter "' + _key3 + '" to be an number, received ' + _type3);
    }
  }
}
var handleXHRErrors = function () {
  var _ref = _asyncToGenerator(              regenerator.mark(function _callee(response) {
    var text, json;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return response.text();
          case 2:
            text = _context.sent;
            _context.prev = 3;
            json = JSON.parse(text);
            if (response.ok) {
              _context.next = 9;
              break;
            }
            return _context.abrupt('return', _Promise.reject(json));
          case 9:
            return _context.abrupt('return', json);
          case 10:
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](3);
            return _context.abrupt('return', _Promise.reject(text));
          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 12]]);
  }));
  return function handleXHRErrors(_x2) {
    return _ref.apply(this, arguments);
  };
}();
function processHeaders(default_headers, passed_headers) {
  var headers = lodash_merge({}, default_headers, passed_headers);
  for (var key in headers) {
    if (typeof headers[key] === 'function') {
      headers[key] = headers[key]();
    }
  }
  headers = lodash_pickby(headers, lodash_identity);
  return new Headers(headers);
}
var defaults$1 = function defaults() {
  return {
    method: 'GET',
    body: undefined,
    headers: {}
  };
};
function Request() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = lodash_merge({}, defaults$1(), _options);
  var body = options.body ? _JSON$stringify(options.body) : undefined;
  var method = options.method;
  var headers = processHeaders(config.headers, options.headers);
  if (!/^https?:\/\//i.test(url)) {
    url = config.root + url;
  }
  var race = _Promise.race([fetch(url, {
    method: method,
    body: body,
    headers: headers
  }).then(handleXHRErrors), new _Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('request_timeout');
    }, config.timeout_duration);
  })]);
  race.catch(function (err) {
    if (err === 'request_timeout') {
      config.timeout();
    }
  });
  return race;
}
var _this = undefined;
var defaults = {
  timeout_duration: 20000,
  timeout: false,
  headers: {},
  root: ''
};
var init$3 = function () {
  var _ref = _asyncToGenerator(              regenerator.mark(function _callee2(vm, _config) {
    var config;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              validateArgs(_config);
            } catch (error) {
              console.warn(error);
            }
            config = lodash_merge({}, defaults, _config);
            vm.$request = function () {
              var _ref2 = _asyncToGenerator(              regenerator.mark(function _callee(url, options) {
                var hook = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                return regenerator.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(typeof config.before === 'function' && hook)) {
                          _context.next = 3;
                          break;
                        }
                        _context.next = 3;
                        return config.before(vm);
                      case 3:
                        return _context.abrupt('return', Request(url, options, config));
                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));
              return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
              };
            }();
          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));
  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var makeMixin$1 = (function (Vue, config) {
  return {
    beforeCreate: function beforeCreate() {
      init$3(this, config);
    }
  };
});
var VueRequest = function () {
  function VueRequest() {
    _classCallCheck$1(this, VueRequest);
  }
  _createClass$1(VueRequest, null, [{
    key: 'install',
    value: function install(Vue, options) {
      Vue.mixin(makeMixin$1(Vue, options));
    }
  }]);
  return VueRequest;
}();

function isDef(obj) {
  if (obj === undefined) return false;
  return !isEmpty(obj);
}
var getDiff = function getDiff(oldData, newData) {
  var keys = getChangedKeys(oldData, newData);
  var output = {};
  for (var index in keys) {
    var key = keys[index];
    output[key] = newData[key];
  }
  return output;
};
var getChangedKeys = function getChangedKeys(oldData, newData) {
  var updated = mergeDeepRight(oldData, newData);
  var output = reduce(function (result, key, index) {
    return equals(updated[key], oldData[key]) ? result : result.concat(key);
  }, [], _Object$keys(oldData));
  return output;
};
var removeUnderscores = function removeUnderscores(data) {
  var output = {};
  for (var _key in data) {
    var key = _key.charAt(0) === '_' ? _key.substr(1) : _key;
    output[key] = data[_key];
  }
  return output;
};
var underscore_properties = ['id'];
var addUnderscores = function addUnderscores(data) {
  var output = {};
  for (var _key in data) {
    var key = underscore_properties.includes(_key) ? '_' + _key : _key;
    output[key] = data[_key];
  }
  return output;
};
var getDefaultsFromSchema = function getDefaultsFromSchema(schema) {
  var default_attrs = {};
  for (var key in schema) {
    var _constructor = void 0,
        value = void 0;
    var attr = schema[key];
    if ('type' in attr) {
      _constructor = attr.type;
      value = 'default' in attr ? attr.default : '';
      var output = void 0;
      if (_constructor === Object) {
        output = attr.properties ? getDefaultsFromSchema(attr.properties)() : {};
      } else if (_constructor === Array) {
        output = [];
      } else {
        output = new _constructor(value).valueOf();
      }
      default_attrs[key] = output;
    } else {
      default_attrs[key] = getDefaultsFromSchema(attr);
    }
  }
  var immutable = function immutable() {
    return mergeDeepRight({}, default_attrs);
  };
  return immutable;
};
var traverse$2 = function traverse(data, schema, func) {
  var output = {};
  if (data instanceof Array) {
    output = data.map(function (item) {
      for (var key in item) {
        if (schema.items && key in schema.items) {
          if ([Object, Array].includes(schema.items[key])) {
            item[key] = traverse(item[key], schema[key], func);
          } else {
            console.log('found an iterable custom type', func(item[key], schema.items[key]));
            item[key] = func(item[key], schema.items[key]);
          }
        }
      }
      return item;
    });
  } else if (data instanceof Object) {
    for (var key in data) {
      if (schema[key] && schema[key].items) {
        output[key] = traverse(data[key], schema[key], func);
      } else if (schema[key] && schema[key].properties) {
        output[key] = traverse(data[key], schema[key].properties, func);
      } else if (key in schema) {
        output[key] = func(data[key], schema[key]);
      } else {
        output[key] = data[key];
      }
    }
  } else {
    output = func(data, schema);
  }
  return output;
};
var encodeProperty = function encodeProperty(data, schema) {
  var output = void 0;
  var constructor = schema.type;
  if (constructor && ![Object, Array].includes(constructor)) {
    var instance = new constructor(data);
    output = instance.encode ? instance.encode() : instance.valueOf();
  } else {
    output = data;
  }
  return output;
};
var decodeProperty = function decodeProperty(data, schema) {
  var output = void 0;
  var constructor = schema.type;
  if (constructor && ![Object, Array].includes(constructor)) {
    output = new constructor(data).valueOf();
  } else {
    output = data;
  }
  return output;
};
var encodeData = function encodeData(_data, schema) {
  var data = clone(_data);
  return traverse$2(data, schema, encodeProperty);
};
var decodeData = function decodeData(_data, schema) {
  var data = clone(_data);
  return traverse$2(data, schema, decodeProperty);
};
var modelToJSON = function modelToJSON(model) {
  var computed = {};
  for (var key in model.$options.computed) {
    computed[key] = model[key];
  }
  var data = {};
  for (var _key2 in model.schema()) {
    data[_key2] = model[_key2];
  }
  var output = mergeDeepRight(data, computed);
  delete output.errors;
  delete output.fields;
  return output;
};
var resetState = function resetState(model, defaults) {
  _Object$keys(defaults).forEach(function (key) {
    model[key] = defaults[key];
  });
};

var makeComputedProp = function makeComputedProp(vm, key) {
  if (vm.$options['$' + key]) {
    throw new ReferenceError('Model \'' + key + '\' has a naming conflict\n       with an existing computed property\'');
  }
  vm.$options.computed['$' + key] = {
    get: function get() {
      return vm.$models[key];
    },
    set: function set(data) {
      return vm.$models[key].set(data);
    }
  };
};
var init = function init(vm) {
  vm._models = vm.$options.models || {};
  vm.$models = vm.$options.$models || {};
  for (var key in vm._models) {
    vm.$models[key] = vm._models[key];
  }
  if (isDef(vm.$models)) {
    if (!vm.$options.computed) {
      vm.$options.computed = {};
    }
    for (var _key in vm.$models) {
      makeComputedProp(vm, _key);
    }
  }
};
var init_models = function init_models(vm) {
  for (var key in vm.$models) {
    vm.$models[key] = vm.$models[key].apply(vm);
    vm.$models[key]._vm = vm;
  }
};
var makeMixin = (function (Vue) {
  return {
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.models)) {
        init(this);
      }
    },
    created: function created() {
      if (isDef(this.$options.models)) {
        init_models(this);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (isDef(this.$models)) {
        for (var key in this.$models) {
          if (!path(['$options', 'persist'], this.$models[key])) {
            this.$models[key].reset();
          }
        }
      }
    }
  };
});

var _stringAt$1 = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library$1 = true;

var _redefine$1 = _hide;

var _iterators$1 = {};

var _objectDps$1 = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2$1 = _global.document;
var _html$1 = document$2$1 && document$2$1.documentElement;

var IE_PROTO$2$1 = _sharedKey('IE_PROTO');
var Empty$1 = function () {             };
var PROTOTYPE$2$1 = 'prototype';
var createDict$1 = function () {
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html$1.appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict$1 = iframeDocument.F;
  while (i--) delete createDict$1[PROTOTYPE$2$1][_enumBugKeys[i]];
  return createDict$1();
};
var _objectCreate$1 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty$1[PROTOTYPE$2$1] = _anObject(O);
    result = new Empty$1();
    Empty$1[PROTOTYPE$2$1] = null;
    result[IE_PROTO$2$1] = O;
  } else result = createDict$1();
  return Properties === undefined ? result : _objectDps$1(result, Properties);
};

var _wks$1 = createCommonjsModule(function (module) {
var store = _shared('wks');
var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};
$exports.store = store;
});

var def$1 = _objectDp.f;
var TAG$1$1 = _wks$1('toStringTag');
var _setToStringTag$1 = function (it, tag, stat) {
  if (it && !_has$1(it = stat ? it : it.prototype, TAG$1$1)) def$1(it, TAG$1$1, { configurable: true, value: tag });
};

'use strict';
var IteratorPrototype$1 = {};
_hide(IteratorPrototype$1, _wks$1('iterator'), function () { return this; });
var _iterCreate$1 = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate$1(IteratorPrototype$1, { next: _propertyDesc(1, next) });
  _setToStringTag$1(Constructor, NAME + ' Iterator');
};

var IE_PROTO$3 = _sharedKey('IE_PROTO');
var ObjectProto$1$1 = Object.prototype;
var _objectGpo$1 = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has$1(O, IE_PROTO$3)) return O[IE_PROTO$3];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1$1 : null;
};

'use strict';
var ITERATOR$1$1 = _wks$1('iterator');
var BUGGY$1 = !([].keys && 'next' in [].keys());
var FF_ITERATOR$1 = '@@iterator';
var KEYS$1 = 'keys';
var VALUES$1 = 'values';
var returnThis$1 = function () { return this; };
var _iterDefine$1 = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate$1(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY$1 && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS$1: return function keys() { return new Constructor(this, kind); };
      case VALUES$1: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES$1;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$1$1] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      _setToStringTag$1(IteratorPrototype, TAG, true);
      if (!_library$1 && !_has$1(IteratorPrototype, ITERATOR$1$1)) _hide(IteratorPrototype, ITERATOR$1$1, returnThis$1);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES$1) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  if ((!_library$1 || FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$1$1])) {
    _hide(proto, ITERATOR$1$1, $default);
  }
  _iterators$1[NAME] = $default;
  _iterators$1[TAG] = returnThis$1;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES$1),
      keys: IS_SET ? $default : getMethod(KEYS$1),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine$1(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
  }
  return methods;
};

'use strict';
var $at$1 = _stringAt$1(true);
_iterDefine$1(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at$1(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep$1 = function (done, value) {
  return { value: value, done: !!done };
};

'use strict';
var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep$1(1);
  }
  if (kind == 'keys') return _iterStep$1(0, index);
  if (kind == 'values') return _iterStep$1(0, O[index]);
  return _iterStep$1(0, [index, O[index]]);
}, 'values');
_iterators$1.Arguments = _iterators$1.Array;

var TO_STRING_TAG$1 = _wks$1('toStringTag');
var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');
for (var i$1 = 0; i$1 < DOMIterables$1.length; i$1++) {
  var NAME$1 = DOMIterables$1[i$1];
  var Collection$1 = _global[NAME$1];
  var proto$1 = Collection$1 && Collection$1.prototype;
  if (proto$1 && !proto$1[TO_STRING_TAG$1]) _hide(proto$1, TO_STRING_TAG$1, NAME$1);
  _iterators$1[NAME$1] = _iterators$1.Array;
}

var TAG$2 = _wks$1('toStringTag');
var ARG$1 = _cof(function () { return arguments; }()) == 'Arguments';
var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (e) {             }
};
var _classof$1 = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (T = tryGet$1(O = Object(it), TAG$2)) == 'string' ? T
    : ARG$1 ? _cof(O)
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var _anInstance$1 = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _iterCall$1 = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

var ITERATOR$2$1 = _wks$1('iterator');
var ArrayProto$1 = Array.prototype;
var _isArrayIter$1 = function (it) {
  return it !== undefined && (_iterators$1.Array === it || ArrayProto$1[ITERATOR$2$1] === it);
};

var ITERATOR$3$1 = _wks$1('iterator');
var core_getIteratorMethod$1 = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3$1]
    || it['@@iterator']
    || _iterators$1[_classof$1(it)];
};

var _forOf$1 = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod$1(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (_isArrayIter$1(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall$1(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var SPECIES$1$1 = _wks$1('species');
var _speciesConstructor$1 = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES$1$1]) == undefined ? D : _aFunction(S);
};

var _invoke$1 = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process$3 = _global.process;
var setTask$1 = _global.setImmediate;
var clearTask$1 = _global.clearImmediate;
var MessageChannel$1 = _global.MessageChannel;
var Dispatch$1 = _global.Dispatch;
var counter$1 = 0;
var queue$1 = {};
var ONREADYSTATECHANGE$1 = 'onreadystatechange';
var defer$1;
var channel$1;
var port$1;
var run$1 = function () {
  var id = +this;
  if (queue$1.hasOwnProperty(id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};
var listener$1 = function (event) {
  run$1.call(event.data);
};
if (!setTask$1 || !clearTask$1) {
  setTask$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue$1[++counter$1] = function () {
      _invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer$1(counter$1);
    return counter$1;
  };
  clearTask$1 = function clearImmediate(id) {
    delete queue$1[id];
  };
  if (_cof(process$3) == 'process') {
    defer$1 = function (id) {
      process$3.nextTick(_ctx(run$1, id, 1));
    };
  } else if (Dispatch$1 && Dispatch$1.now) {
    defer$1 = function (id) {
      Dispatch$1.now(_ctx(run$1, id, 1));
    };
  } else if (MessageChannel$1) {
    channel$1 = new MessageChannel$1();
    port$1 = channel$1.port2;
    channel$1.port1.onmessage = listener$1;
    defer$1 = _ctx(port$1.postMessage, port$1, 1);
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer$1 = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener$1, false);
  } else if (ONREADYSTATECHANGE$1 in _domCreate('script')) {
    defer$1 = function (id) {
      _html$1.appendChild(_domCreate('script'))[ONREADYSTATECHANGE$1] = function () {
        _html$1.removeChild(this);
        run$1.call(id);
      };
    };
  } else {
    defer$1 = function (id) {
      setTimeout(_ctx(run$1, id, 1), 0);
    };
  }
}
var _task$1 = {
  set: setTask$1,
  clear: clearTask$1
};

var macrotask$1 = _task$1.set;
var Observer$1 = _global.MutationObserver || _global.WebKitMutationObserver;
var process$4 = _global.process;
var Promise$1$1 = _global.Promise;
var isNode$2 = _cof(process$4) == 'process';
var _microtask$1 = function () {
  var head, last, notify;
  var flush = function () {
    var parent, fn;
    if (isNode$2 && (parent = process$4.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };
  if (isNode$2) {
    notify = function () {
      process$4.nextTick(flush);
    };
  } else if (Observer$1) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer$1(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  } else if (Promise$1$1 && Promise$1$1.resolve) {
    var promise = Promise$1$1.resolve();
    notify = function () {
      promise.then(flush);
    };
  } else {
    notify = function () {
      macrotask$1.call(_global, flush);
    };
  }
  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

'use strict';
function PromiseCapability$1(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}
var f$2$1 = function (C) {
  return new PromiseCapability$1(C);
};
var _newPromiseCapability$1 = {
	f: f$2$1
};

var _perform$1 = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _promiseResolve$1 = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll$1 = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

'use strict';
var SPECIES$2 = _wks$1('species');
var _setSpecies$1 = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
    configurable: true,
    get: function () { return this; }
  });
};

var ITERATOR$4 = _wks$1('iterator');
var SAFE_CLOSING$1 = false;
try {
  var riter$1 = [7][ITERATOR$4]();
  riter$1['return'] = function () { SAFE_CLOSING$1 = true; };
  
} catch (e) {             }
var _iterDetect$1 = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING$1) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$4] = function () { return iter; };
    exec(arr);
  } catch (e) {             }
  return safe;
};

'use strict';
var task$1 = _task$1.set;
var microtask$1 = _microtask$1();
var PROMISE$1 = 'Promise';
var TypeError$1$1 = _global.TypeError;
var process$2$1 = _global.process;
var $Promise$1 = _global[PROMISE$1];
var isNode$1$1 = _classof$1(process$2$1) == 'process';
var empty$3 = function () {             };
var Internal$1;
var newGenericPromiseCapability$1;
var OwnPromiseCapability$1;
var Wrapper$1;
var newPromiseCapability$1 = newGenericPromiseCapability$1 = _newPromiseCapability$1.f;
var USE_NATIVE$1$1 = !!function () {
  try {
    var promise = $Promise$1.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks$1('species')] = function (exec) {
      exec(empty$3, empty$3);
    };
    return (isNode$1$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty$3) instanceof FakePromise;
  } catch (e) {             }
}();
var isThenable$1 = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify$1 = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask$1(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled$1(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError$1$1('Promise-chain cycle'));
          } else if (then = isThenable$1(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]);
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled$1(promise);
  });
};
var onUnhandled$1 = function (promise) {
  task$1.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled$1(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform$1(function () {
        if (isNode$1$1) {
          process$2$1.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      promise._h = isNode$1$1 || isUnhandled$1(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled$1 = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled$1(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled$1 = function (promise) {
  task$1.call(_global, function () {
    var handler;
    if (isNode$1$1) {
      process$2$1.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject$1 = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify$1(promise, true);
};
var $resolve$1 = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value) throw TypeError$1$1("Promise can't be resolved itself");
    if (then = isThenable$1(value)) {
      microtask$1(function () {
        var wrapper = { _w: promise, _d: false };
        try {
          then.call(value, _ctx($resolve$1, wrapper, 1), _ctx($reject$1, wrapper, 1));
        } catch (e) {
          $reject$1.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify$1(promise, false);
    }
  } catch (e) {
    $reject$1.call({ _w: promise, _d: false }, e);
  }
};
if (!USE_NATIVE$1$1) {
  $Promise$1 = function Promise(executor) {
    _anInstance$1(this, $Promise$1, PROMISE$1, '_h');
    _aFunction(executor);
    Internal$1.call(this);
    try {
      executor(_ctx($resolve$1, this, 1), _ctx($reject$1, this, 1));
    } catch (err) {
      $reject$1.call(this, err);
    }
  };
  Internal$1 = function Promise(executor) {
    this._c = [];
    this._a = undefined;
    this._s = 0;
    this._d = false;
    this._v = undefined;
    this._h = 0;
    this._n = false;
  };
  Internal$1.prototype = _redefineAll$1($Promise$1.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(_speciesConstructor$1(this, $Promise$1));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1$1 ? process$2$1.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify$1(this, false);
      return reaction.promise;
    },
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability$1 = function () {
    var promise = new Internal$1();
    this.promise = promise;
    this.resolve = _ctx($resolve$1, promise, 1);
    this.reject = _ctx($reject$1, promise, 1);
  };
  _newPromiseCapability$1.f = newPromiseCapability$1 = function (C) {
    return C === $Promise$1 || C === Wrapper$1
      ? new OwnPromiseCapability$1(C)
      : newGenericPromiseCapability$1(C);
  };
}
_export(_export.G + _export.W + _export.F * !USE_NATIVE$1$1, { Promise: $Promise$1 });
_setToStringTag$1($Promise$1, PROMISE$1);
_setSpecies$1(PROMISE$1);
Wrapper$1 = _core[PROMISE$1];
_export(_export.S + _export.F * !USE_NATIVE$1$1, PROMISE$1, {
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library$1 || !USE_NATIVE$1$1), PROMISE$1, {
  resolve: function resolve(x) {
    return _promiseResolve$1(_library$1 && this === Wrapper$1 ? $Promise$1 : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1$1 && _iterDetect$1(function (iter) {
  $Promise$1.all(iter)['catch'](empty$3);
})), PROMISE$1, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform$1(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf$1(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = _perform$1(function () {
      _forOf$1(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

'use strict';
_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor$1(this, _core.Promise || _global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve$1(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve$1(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

'use strict';
_export(_export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability$1.f(this);
  var result = _perform$1(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise$2 = _core.Promise;

var promise$1$1 = createCommonjsModule(function (module) {
module.exports = { "default": promise$2, __esModule: true };
});
var _Promise$1 = unwrapExports(promise$1$1);

var runtime$1 = createCommonjsModule(function (module) {
!(function(global) {
  "use strict";
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }
    return;
  }
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  runtime.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }
  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };
  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  runtime.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return Promise.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );
    return runtime.isGeneratorFunction(outerFn)
      ? iter
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator.return) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";
  Gp[iteratorSymbol] = function() {
    return this;
  };
  Gp.toString = function() {
    return "[object Generator]";
  };
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  runtime.values = values;
  function doneResult() {
    return { value: undefined, done: true };
  }
  Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }
        return !! caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };
})(
  (function() { return this })() || Function("return this")()
);
});

var g$1 = (function() { return this })() || Function("return this")();
var hadRuntime$1 = g$1.regeneratorRuntime &&
  Object.getOwnPropertyNames(g$1).indexOf("regeneratorRuntime") >= 0;
var oldRuntime$1 = hadRuntime$1 && g$1.regeneratorRuntime;
g$1.regeneratorRuntime = undefined;
var runtimeModule$1 = runtime$1;
if (hadRuntime$1) {
  g$1.regeneratorRuntime = oldRuntime$1;
} else {
  try {
    delete g$1.regeneratorRuntime;
  } catch(e) {
    g$1.regeneratorRuntime = undefined;
  }
}

var regenerator$1 = runtimeModule$1;

var asyncToGenerator$1 = createCommonjsModule(function (module, exports) {
"use strict";
exports.__esModule = true;
var _promise2 = _interopRequireDefault(promise$1$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }
      return step("next");
    });
  };
};
});
var _asyncToGenerator$1 = unwrapExports(asyncToGenerator$1);

_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo$1(_toObject(it));
  };
});

var getPrototypeOf$1 = _core.Object.getPrototypeOf;

var getPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf$1, __esModule: true };
});
var _Object$getPrototypeOf = unwrapExports(getPrototypeOf);

var f$3$1 = _wks$1;
var _wksExt$1 = {
	f: f$3$1
};

var iterator$3 = _wksExt$1.f('iterator');

var iterator$1 = createCommonjsModule(function (module) {
module.exports = { "default": iterator$3, __esModule: true };
});
unwrapExports(iterator$1);

var _meta$1 = createCommonjsModule(function (module) {
var META = _uid('meta');
var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id,
    w: {}
  } });
};
var fastKey = function (it, create) {
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has$1(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has$1(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  } return it[META].w;
};
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has$1(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var defineProperty$5 = _objectDp.f;
var _wksDefine$1 = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library$1 ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$5($Symbol, name, { value: _wksExt$1.f(name) });
};

var f$4$1 = Object.getOwnPropertySymbols;
var _objectGops$1 = {
	f: f$4$1
};

var f$5$1 = {}.propertyIsEnumerable;
var _objectPie$1 = {
	f: f$5$1
};

var _enumKeys$1 = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops$1.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie$1.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

var _isArray$2 = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var hiddenKeys$1 = _enumBugKeys.concat('length', 'prototype');
var f$7$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys$1);
};
var _objectGopn$1 = {
	f: f$7$1
};

var gOPN$2 = _objectGopn$1.f;
var toString$5 = {}.toString;
var windowNames$1 = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];
var getWindowNames$1 = function (it) {
  try {
    return gOPN$2(it);
  } catch (e) {
    return windowNames$1.slice();
  }
};
var f$6$1 = function getOwnPropertyNames(it) {
  return windowNames$1 && toString$5.call(it) == '[object Window]' ? getWindowNames$1(it) : gOPN$2(_toIobject(it));
};
var _objectGopnExt$1 = {
	f: f$6$1
};

var gOPD$2 = Object.getOwnPropertyDescriptor;
var f$8 = _descriptors ? gOPD$2 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$2(O, P);
  } catch (e) {             }
  if (_has$1(O, P)) return _propertyDesc(!_objectPie$1.f.call(O, P), O[P]);
};
var _objectGopd$1 = {
	f: f$8
};

'use strict';
var META$1 = _meta$1.KEY;
var gOPD$1$1 = _objectGopd$1.f;
var dP$2 = _objectDp.f;
var gOPN$1$1 = _objectGopnExt$1.f;
var $Symbol$1 = _global.Symbol;
var $JSON$1$1 = _global.JSON;
var _stringify$1 = $JSON$1$1 && $JSON$1$1.stringify;
var PROTOTYPE$3 = 'prototype';
var HIDDEN$1 = _wks$1('_hidden');
var TO_PRIMITIVE$1 = _wks$1('toPrimitive');
var isEnum$1 = {}.propertyIsEnumerable;
var SymbolRegistry$1 = _shared('symbol-registry');
var AllSymbols$1 = _shared('symbols');
var OPSymbols$1 = _shared('op-symbols');
var ObjectProto$2 = Object[PROTOTYPE$3];
var USE_NATIVE$2 = typeof $Symbol$1 == 'function';
var QObject$1 = _global.QObject;
var setter$1 = !QObject$1 || !QObject$1[PROTOTYPE$3] || !QObject$1[PROTOTYPE$3].findChild;
var setSymbolDesc$1 = _descriptors && _fails(function () {
  return _objectCreate$1(dP$2({}, 'a', {
    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1$1(ObjectProto$2, key);
  if (protoDesc) delete ObjectProto$2[key];
  dP$2(it, key, D);
  if (protoDesc && it !== ObjectProto$2) dP$2(ObjectProto$2, key, protoDesc);
} : dP$2;
var wrap$1 = function (tag) {
  var sym = AllSymbols$1[tag] = _objectCreate$1($Symbol$1[PROTOTYPE$3]);
  sym._k = tag;
  return sym;
};
var isSymbol$1 = USE_NATIVE$2 && typeof $Symbol$1.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol$1;
};
var $defineProperty$1 = function defineProperty(it, key, D) {
  if (it === ObjectProto$2) $defineProperty$1(OPSymbols$1, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has$1(AllSymbols$1, key)) {
    if (!D.enumerable) {
      if (!_has$1(it, HIDDEN$1)) dP$2(it, HIDDEN$1, _propertyDesc(1, {}));
      it[HIDDEN$1][key] = true;
    } else {
      if (_has$1(it, HIDDEN$1) && it[HIDDEN$1][key]) it[HIDDEN$1][key] = false;
      D = _objectCreate$1(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc$1(it, key, D);
  } return dP$2(it, key, D);
};
var $defineProperties$1 = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys$1(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty$1(it, key = keys[i++], P[key]);
  return it;
};
var $create$1 = function create(it, P) {
  return P === undefined ? _objectCreate$1(it) : $defineProperties$1(_objectCreate$1(it), P);
};
var $propertyIsEnumerable$1 = function propertyIsEnumerable(key) {
  var E = isEnum$1.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$2 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return false;
  return E || !_has$1(this, key) || !_has$1(AllSymbols$1, key) || _has$1(this, HIDDEN$1) && this[HIDDEN$1][key] ? E : true;
};
var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$2 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return;
  var D = gOPD$1$1(it, key);
  if (D && _has$1(AllSymbols$1, key) && !(_has$1(it, HIDDEN$1) && it[HIDDEN$1][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames$1 = function getOwnPropertyNames(it) {
  var names = gOPN$1$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has$1(AllSymbols$1, key = names[i++]) && key != HIDDEN$1 && key != META$1) result.push(key);
  } return result;
};
var $getOwnPropertySymbols$1 = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$2;
  var names = gOPN$1$1(IS_OP ? OPSymbols$1 : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has$1(AllSymbols$1, key = names[i++]) && (IS_OP ? _has$1(ObjectProto$2, key) : true)) result.push(AllSymbols$1[key]);
  } return result;
};
if (!USE_NATIVE$2) {
  $Symbol$1 = function Symbol() {
    if (this instanceof $Symbol$1) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$2) $set.call(OPSymbols$1, value);
      if (_has$1(this, HIDDEN$1) && _has$1(this[HIDDEN$1], tag)) this[HIDDEN$1][tag] = false;
      setSymbolDesc$1(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter$1) setSymbolDesc$1(ObjectProto$2, tag, { configurable: true, set: $set });
    return wrap$1(tag);
  };
  _redefine$1($Symbol$1[PROTOTYPE$3], 'toString', function toString() {
    return this._k;
  });
  _objectGopd$1.f = $getOwnPropertyDescriptor$1;
  _objectDp.f = $defineProperty$1;
  _objectGopn$1.f = _objectGopnExt$1.f = $getOwnPropertyNames$1;
  _objectPie$1.f = $propertyIsEnumerable$1;
  _objectGops$1.f = $getOwnPropertySymbols$1;
  if (_descriptors && !_library$1) {
    _redefine$1(ObjectProto$2, 'propertyIsEnumerable', $propertyIsEnumerable$1, true);
  }
  _wksExt$1.f = function (name) {
    return wrap$1(_wks$1(name));
  };
}
_export(_export.G + _export.W + _export.F * !USE_NATIVE$2, { Symbol: $Symbol$1 });
for (var es6Symbols$1 = (
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j$1 = 0; es6Symbols$1.length > j$1;)_wks$1(es6Symbols$1[j$1++]);
for (var wellKnownSymbols$1 = _objectKeys(_wks$1.store), k$1 = 0; wellKnownSymbols$1.length > k$1;) _wksDefine$1(wellKnownSymbols$1[k$1++]);
_export(_export.S + _export.F * !USE_NATIVE$2, 'Symbol', {
  'for': function (key) {
    return _has$1(SymbolRegistry$1, key += '')
      ? SymbolRegistry$1[key]
      : SymbolRegistry$1[key] = $Symbol$1(key);
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol$1(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry$1) if (SymbolRegistry$1[key] === sym) return key;
  },
  useSetter: function () { setter$1 = true; },
  useSimple: function () { setter$1 = false; }
});
_export(_export.S + _export.F * !USE_NATIVE$2, 'Object', {
  create: $create$1,
  defineProperty: $defineProperty$1,
  defineProperties: $defineProperties$1,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1,
  getOwnPropertyNames: $getOwnPropertyNames$1,
  getOwnPropertySymbols: $getOwnPropertySymbols$1
});
$JSON$1$1 && _export(_export.S + _export.F * (!USE_NATIVE$2 || _fails(function () {
  var S = $Symbol$1();
  return _stringify$1([S]) != '[null]' || _stringify$1({ a: S }) != '{}' || _stringify$1(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol$1(it)) return;
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray$2(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol$1(value)) return value;
    };
    args[1] = replacer;
    return _stringify$1.apply($JSON$1$1, args);
  }
});
$Symbol$1[PROTOTYPE$3][TO_PRIMITIVE$1] || _hide($Symbol$1[PROTOTYPE$3], TO_PRIMITIVE$1, $Symbol$1[PROTOTYPE$3].valueOf);
_setToStringTag$1($Symbol$1, 'Symbol');
_setToStringTag$1(Math, 'Math', true);
_setToStringTag$1(_global.JSON, 'JSON', true);

_wksDefine$1('asyncIterator');

_wksDefine$1('observable');

var symbol$3 = _core.Symbol;

var symbol$1 = createCommonjsModule(function (module) {
module.exports = { "default": symbol$3, __esModule: true };
});
unwrapExports(symbol$1);

var _typeof_1$1 = createCommonjsModule(function (module, exports) {
"use strict";
exports.__esModule = true;
var _iterator2 = _interopRequireDefault(iterator$1);
var _symbol2 = _interopRequireDefault(symbol$1);
var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});
unwrapExports(_typeof_1$1);

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
"use strict";
exports.__esModule = true;
var _typeof3 = _interopRequireDefault(_typeof_1$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});
var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ?
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd$1.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf$2 = _core.Object.setPrototypeOf;

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf$2, __esModule: true };
});
unwrapExports(setPrototypeOf);

_export(_export.S, 'Object', { create: _objectCreate$1 });

var $Object$2 = _core.Object;
var create$2 = function create(P, D) {
  return $Object$2.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$2, __esModule: true };
});
unwrapExports(create);

var inherits = createCommonjsModule(function (module, exports) {
"use strict";
exports.__esModule = true;
var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);
var _create2 = _interopRequireDefault(create);
var _typeof3 = _interopRequireDefault(_typeof_1$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }
  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});
var _inherits = unwrapExports(inherits);

var Type = function () {
  function Type(value, key) {
    _classCallCheck(this, Type);
    this.value = undefined;
    if (key) this.key = key;
    var val = this.getValue(value);
    if (val) this.set(val);
    return this;
  }
  _createClass(Type, [{
    key: 'set',
    value: function set(value) {
      this.in(value);
      return this;
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.out();
    }
  }, {
    key: 'getValue',
    value: function getValue(value) {
      var output = this.key ? path([this.key], value) || value : value;
      return output;
    }
  }, {
    key: 'in',
    value: function _in(value) {
      this.value = value;
      return this;
    }
  }, {
    key: 'out',
    value: function out() {
      return this.value;
    }
  }, {
    key: 'encode',
    value: function encode() {
      var output = void 0;
      var value = this.valueOf();
      if (this.key && value) {
        output = {};
        output[this.key] = value;
      } else {
        output = value;
      }
      return output;
    }
  }]);
  return Type;
}();

var ObjectId = function (_Type) {
  _inherits(ObjectId, _Type);
  function ObjectId(value) {
    var _ret;
    _classCallCheck(this, ObjectId);
    var _this = _possibleConstructorReturn(this, (ObjectId.__proto__ || _Object$getPrototypeOf(ObjectId)).call(this, value, '$oid'));
    return _ret = _this, _possibleConstructorReturn(_this, _ret);
  }
  _createClass(ObjectId, [{
    key: 'out',
    value: function out() {
      return this.value || '';
    }
  }]);
  return ObjectId;
}(Type);
var ISODate = function (_Type2) {
  _inherits(ISODate, _Type2);
  function ISODate(value) {
    var _ret2;
    _classCallCheck(this, ISODate);
    var _this2 = _possibleConstructorReturn(this, (ISODate.__proto__ || _Object$getPrototypeOf(ISODate)).call(this, value, '$date'));
    return _ret2 = _this2, _possibleConstructorReturn(_this2, _ret2);
  }
  _createClass(ISODate, [{
    key: 'in',
    value: function _in(value) {
      var parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        this.value = value;
      } else {
        throw new TypeError('Invalid date: "' + value + '"');
      }
    }
  }, {
    key: 'out',
    value: function out() {
      return this.value ? new Date(this.value).toISOString() : undefined;
    }
  }]);
  return ISODate;
}(Type);

var Vue = void 0;
var Model = function () {
  _createClass(Model, null, [{
    key: 'init',
    value: function init(_Vue) {
      Vue = process.env.NODE_ENV === 'test' ? require('vue') : _Vue;
    }
  }, {
    key: 'schema',
    value: function schema() {
      return {
        id: {
          type: String
        },
        created: {
          type: ISODate
        },
        updated: {
          type: ISODate
        }
      };
    }
  }, {
    key: 'defaults',
    value: function defaults() {
      return {};
    }
  }]);
  function Model() {
    var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Model);
    var _schema = this.constructor.schema();
    var default_attributes = getDefaultsFromSchema(_schema);
    var _options = mergeDeepRight(this.constructor.defaults(), options);
    var default_options = {
      name: 'model',
      created: function created() {
        this.set(attributes);
      },
      data: function data() {
        return default_attributes();
      },
      computed: {
        basePath: function basePath() {
          var basePath = this.$options.basePath;
          return basePath || this.$options.name + 's';
        },
        urlRoot: function urlRoot() {
          return this.basePath + '/' + this.id;
        },
        isNew: function isNew() {
          return [undefined, ''].includes(this.id);
        },
        url: function url() {
          var url = _options.url ? _options.url : this.isNew ? this.basePath : this.urlRoot;
          return url;
        },
        $request: function $request() {
          return path(['$request'], this._vm) || Request;
        }
      },
      methods: {
        fetch: function fetch() {
          var _this = this;
          return _asyncToGenerator$1(              regenerator$1.mark(function _callee() {
            var response;
            return regenerator$1.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this.$request(_this.urlRoot);
                  case 2:
                    response = _context.sent;
                    _this.set(response);
                    return _context.abrupt('return', response);
                  case 5:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }))();
        },
        destroy: function destroy() {
          return this.$request(this.urlRoot, {
            method: 'DELETE'
          });
        },
        save: function save(_body) {
          var _this2 = this;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _options = {
            path: ''
          };
          _options = mergeDeepRight(_options, options);
          var changed = getDiff(this.$data, _body);
          if (isEmpty(changed)) {
            return _Promise$1.resolve();
          }
          var body = this.encode(changed);
          var method = this.isNew ? 'POST' : 'PUT';
          var path = _options.path ? '/' + _options.path : '';
          var req = this.$request(this.url + path, {
            method: method,
            body: body
          });
          req.then(function () {
            _this2.set(body);
          });
          return req;
        },
        data: function data() {
          var data = {};
          for (var key in _schema) {
            data[key] = this[key];
          }
          return mergeDeepRight({}, data);
        },
        set: function set(data) {
          var data_decoded = this.decode(data);
          console.log({ data_decoded: data_decoded });
          for (var key in data_decoded) {
            this[key] = data_decoded[key];
          }
          return this;
        },
        reset: function reset() {
          return resetState(this, default_attributes());
        },
        toJSON: function toJSON() {
          return modelToJSON(this);
        },
        decode: function decode() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data();
          return decodeData(removeUnderscores(data), _schema);
        },
        encode: function encode() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data();
          return addUnderscores(encodeData(data, _schema));
        },
        schema: function schema() {
          return _schema;
        }
      }
    };
    var model_options = mergeDeepRight(default_options, _options);
    return new Vue(model_options);
  }
  return Model;
}();

var VueModel = function () {
  function VueModel() {
    _classCallCheck(this, VueModel);
  }
  _createClass(VueModel, null, [{
    key: 'install',
    value: function install(Vue, options) {
      Vue.mixin(makeMixin(Vue));
      Model.init(Vue);
    }
  }]);
  return VueModel;
}();

export { Model, Type };
export default VueModel;
