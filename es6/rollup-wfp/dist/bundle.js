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

  var src = 'http://d.ifengimg.com/mw978_mh598/p2.ifengimg.com/2018_33/50CFB263C0E899B3B6ABA22C4B53E2A9CAB9D7CA_w1024_h985.jpg';
  var src2 = 'http://d.ifengimg.com/mw978_mh598/p2.ifengimg.com/2018_33/50CFB263C0E899B3B6ABA22C4B53E2A9CAB9D7CA_w1024_h985.jpg';
  function loadImg(src, callback, fail) {
      var img = document.createElement('img');
      img.onload = function () {
          callback(img);
      };
      img.onerror = function () {
          fail();
      };
      img.src = src;
      document.body.appendChild(img);
  }
  loadImg(src, function (img) {
      console.log(img.width);
  }, function () {
      console.log('failed');
  });

  function loadImg2(src) {
      return new Promise(function (resolve, reject) {
          var img = document.createElement('img');
          img.onload = function () {
              resolve(img);
          };
          img.onerror = function () {
              reject('w我是Error');
          };
          img.src = src;
          document.body.appendChild(img);
      });
  }

  loadImg2(src2).then(function (img) {
      console.log(img.height);
  }, function (err) {
      console.log(err);
  });

  /* var obj = {a: 100, b: 222, c: 333};
  for (var item in obj) {
      console.log(item)
  }
  console.log(item) */ // 返回最后一个 c

  var obj = { a: 100, b: 222, c: 333 };
  for (var _item in obj) {
      console.log(_item);
  }
  console.log(item);

})));
