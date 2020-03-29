!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EventMiddleware=t():e.EventMiddleware=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dataPool={events:{}}}var t,n,i;return t=e,(n=[{key:"cache",value:function(e){void 0!==e&&(this.dataPool.events[e.type]||(this.dataPool.events[e.type]=[]),this.dataPool.events[e.type].push(e))}},{key:"get",value:function(e){return void 0===e?{}:this.dataPool.events&&this.dataPool.events[e]}},{key:"remove",value:function(e,t){if(void 0!==e&&this.dataPool.events[e.type])if(e.options&&e.options.id){var n=[];this.dataPool.events[e.type].forEach((function(t,o,i){if(t.options&&t.options.id===e.options.id)return!0;n.push(t)})),this.dataPool.events[e.type]=n}else delete this.dataPool.events[e.type]}}])&&o(t.prototype,n),i&&o(t,i),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventStore=new i}var t,n,o;return t=e,(n=[{key:"add",value:function(e,t,n){this.eventStore.cache({type:e,handler:t,options:n})}},{key:"push",value:function(e,t,n){var o=this.eventStore.get(e);if(o){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}o.forEach((function(e,o,i){if(n&&n.id&&!(e.options&&e.options&&e.options.id&&e.options.id===n.id))return!0;t?e.handler(t):e.handler()}))}}},{key:"remove",value:function(e,t){this.eventStore.remove({type:e,options:t})}}])&&r(t.prototype,n),o&&r(t,o),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.event=new a}var t,n,o;return t=e,o=[{key:"instance",value:function(){return new e}},{key:"singleInstance",value:function(){return this.globalEventMiddleware||(this.globalEventMiddleware=new e),this.globalEventMiddleware}},{key:"on",value:function(e,t,n){this.singleInstance().on(e,t,n)}},{key:"unbind",value:function(e,t){this.singleInstance().unbind(e,t)}},{key:"dispatch",value:function(e,t,n){this.singleInstance().dispatch(e,t,n)}}],(n=[{key:"dispatch",value:function(e,t,n){this.event.push(e,t,n)}},{key:"on",value:function(e,t,n){this.event.add(e,t,n)}},{key:"unbind",value:function(e,t){this.event.remove(e,t)}}])&&u(t.prototype,n),o&&u(t,o),e}();t.default=l}]).default}));