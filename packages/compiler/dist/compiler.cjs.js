'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
