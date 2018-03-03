'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = undefined;

var _riot = require('riot');

var _riot2 = _interopRequireDefault(_riot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = {};

var observe = function observe(name) {
  if (name in store) {
    return store[name];
  }

  function Observable() {
    _riot2.default.observable(this);
  }

  var newObservable = new Observable();
  store[name] = newObservable;

  return newObservable;
};

exports.observe = observe;
