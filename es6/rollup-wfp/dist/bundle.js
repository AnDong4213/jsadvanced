(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var util1 = {
    a: 100
  };

  function fn1() {
    console.log('fn1');
  }

  function fn2() {
    console.log('fn2');
  }

  console.log(util1);
  fn1();
  fn2();

})));
