'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const add = (a, b) => {
  return a + b
};

const reactive = () => {
  return add(1, 2)
};

exports.reactive = reactive;
