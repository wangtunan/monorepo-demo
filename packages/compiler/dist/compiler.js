(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueCompiler = {}));
})(this, (function (exports) { 'use strict';

  const add = (a, b) => {
    return a + b
  };

  const reduce = (a, b) => {
    return a - b
  };

  const reactive = () => {
    return add(1, 2)
  };

  const transform = () => {
    const result1 = reactive();
    const result2 = reduce(2, 1);
    return result1 + result2
  };

  exports.transform = transform;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
