// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 模块化操作
var string = "\n    .skin *{box-sizing: border-box; margin: 0; padding: 0;}\n    .skin *::before,*::after{box-sizing: border-box;}\n    .skin{\n        position: relative;\n        /* \u5360\u6EE1\u5168\u5C4F */\n        height: 100vh;\n        background: #ffe600;\n    }\n    .nose{\n        border: 10px solid black;\n        border-color: black transparent transparent transparent;\n        width: 0px;\n        height: 0px;\n        position: relative;\n        left: 50%;\n        top: 145px;\n        margin-left: -10px;\n        z-index: 10;\n    }\n    /* \u5C06\u5706\u5F27\u5F62\u76F8\u5BF9\u4E8E\u4E09\u89D2\u5F62\u5B9A\u4F4D */\n    .yuan{\n        position: absolute;\n        height: 6px;\n        width: 20px;\n        top: -16px;\n        margin-left: -10px;\n        /* border-radius\u7684\u5927\u5C0F\u4E0D\u4F1A\u8D85\u8FC7height */\n        border-radius: 10px 10px 0 0;\n        background: black;\n    }\n    /* \u52A8\u9F3B\u5B50 */\n    @keyframes wave{\n        0%{\n            transform: rotate(0deg);\n        }\n        25%{\n            transform: rotate(-5deg);\n        }\n        50%{\n            transform: rotate(0deg);\n        }\n        75%{\n            transform: rotate(5deg);\n        }\n        100%{\n            transform: rotate(0deg);\n        }\n    }\n    .nose:hover{\n        /* \u8BA9\u9F3B\u5B50\u56F4\u7ED5\u4E2D\u95F4\u5E95\u90E8\u70B9\u6296\u52A8 */\n        /* transform-origin: 50% bottom; */\n        /*\u6D6E\u52A8 \u5468\u671F1s \u6C38\u52A8 \u7EBF\u6027\u53D8\u5316*/\n        animation: wave 300ms infinite linear;\n    }\n\n\n    .eye::before{\n        content: '';\n        display: block;\n        border: 3px solid #000;\n        width: 30px;\n        height: 30px;\n        background: #fff;\n        border-radius: 50%;\n        position: absolute;\n        left: 4px;\n        top: 2px;\n    }\n    .eye{\n        height: 64px;\n        width: 64px;\n        border: 2px solid #000;\n        left: 50%;\n        top: 100px;\n        position: absolute;\n        margin-left: -32px;\n        background: #2e2e2e;\n        border-radius: 50%;\n    }\n    .eye.left{\n        transform: translateX(-100px);\n    }\n    .eye.right{\n        transform: translateX(100px);\n    }\n\n\n    .mouth{\n        /* border: 1px solid red; */\n        height: 200px;\n        width: 200px;\n        position: relative;\n        left: 50%;\n        top: 170px;\n        margin-left: -100px;\n    }\n    .mouth .up{\n        position: relative;\n        top: -20px;\n        z-index: 1;\n    }\n    .mouth .up .lip{\n        border: 3px solid black;\n        height: 30px;\n        width: 100px;\n        border-top-color: transparent;\n        border-right-color: transparent;\n        position: relative;\n        position: absolute;\n        left: 50%;\n        margin-left: -50px;\n        background: #ffe600;\n    }\n    .mouth .up .lip.left{\n        border-radius: 0 0 0 50px;\n        transform: rotate(-15deg) translateX(-53px);\n    }\n    .mouth .up .lip.right{\n        border-radius: 0 0 50px 0;\n        transform: rotate(15deg) translateX(53px);\n    }\n    .mouth .up .lip::before{\n        content: '';\n        display: block;\n        width: 7px;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        background: #ffe600;\n    }\n\n    .mouth .up .lip.left::before{\n        right: -6px;\n    }\n    .mouth .up .lip.right::before{\n        left: -6px;\n    }\n    .mouth .down{\n        height: 180px;\n        position: absolute;\n        top: 5px;\n        width: 100%;\n        /* \u628A\u591A\u4F59\u7684\u692D\u5706\u5F62\u820C\u5934\u90E8\u5206\u9690\u85CF\u6389 */\n        overflow: hidden;\n    }\n    .mouth .down .yuan1{\n        border: 3px solid black;\n        width: 150px;\n        height: 1000px;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        margin-left: -75px;\n        border-radius: 75px/300px;\n        background: #9b000a;\n        overflow: hidden;\n    }\n    .mouth .down .yuan1 .yuan2{\n        width: 200px;\n        height: 296px;\n        position: absolute;\n        bottom: -155px;\n        left: 50%;\n        margin-left: -100px;\n        border-radius: 100px;\n        background: #ff485f;\n    }\n\n\n    .check{\n        position: absolute;\n        left: 50%;\n        border: 3px solid black;\n        width: 88px;\n        height: 88px;\n        top: 226px;\n        margin-left: -44px;\n        z-index: 3;\n    }\n    .check > img{\n        top: 50%;\n        left: 50%;\n        position: absolute;\n    }\n    .check.left >img{\n        transform: rotateY(180deg);\n        transform-origin:0 0;\n    }\n    .check.left{\n        transform: translateX(-180px); \n        background: #ff0000;\n        border-radius: 50%;\n    }\n    .check.right{\n        transform: translateX(180px);\n        background: #ff0000;\n        border-radius: 50%;\n    }\n    /*\u65E2\u7136\u4F60\u8BDA\u5FC3\u8BDA\u610F\u7684\u53D1\u95EE\u4E86\n    \u6211\u4EEC\u4FBF\u5927\u53D1\u6148\u60B2\u7684\u544A\u8BC9\u4F60\n    \u4E3A\u4E86\u9632\u6B62\u4E16\u754C\u88AB\u7834\u574F\n    \u4E3A\u4E86\u7EF4\u62A4\u4E16\u754C\u7684\u548C\u5E73\n    \u8D2F\u5F7B\u7231\u4E0E\u771F\u5B9E\u7684\u90AA\u6076\n    \u53EF\u7231\u53C8\u8FF7\u4EBA\u7684\u53CD\u6D3E\u89D2\u8272\uFF0C\u6B66\u85CF\uFF0C\u5C0F\u6B21\u90CE\n    \u6211\u4EEC\u662F\u7A7F\u68AD\u5728\u94F6\u6CB3\u4E2D\u7684\u706B\u7BAD\u961F\n    \u767D\u6D1E\uFF0C\u767D\u8272\u7684\u660E\u5929\u5728\u7B49\u7740\u6211\u4EEC\n    \u5C31\u662F\u8FD9\u6837! \u55B5~*/\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    } // 在页面展示代码


    player.ui.demo.innerText = _css.default.substr(0, player.n); // 在HTMl中插入代码，产生效果

    player.ui.demo2.innerHTML = _css.default.substr(0, player.n); // 将滚动条自动向下滚动的高度设置为可滚动的高度

    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.1f1c8b2f.js.map