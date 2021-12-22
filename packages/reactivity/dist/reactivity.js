(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueReactivity = {}));
})(this, (function (exports) { 'use strict';

  const add = (a, b) => {
    return a + b
  };

  const reactive = () => {
    return add(1, 2)
  };

  exports.reactive = reactive;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
