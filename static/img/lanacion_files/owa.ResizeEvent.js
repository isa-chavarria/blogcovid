self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.ResizeEvent.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[521],{1142:function(t,e,i){"use strict";var n=function(){function t(){this.eventDictionary={}}return t.prototype.on=function(t,e,i){return(this.eventDictionary[t]||(this.eventDictionary[t]=[])).push({callback:e,callbackThis:i}),this},t.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=(this.eventDictionary[t]||[]).slice();return n.forEach((function(t){return t.callback.apply(t.callbackThis,e)})),this},t.prototype.off=function(t,e){var i=this.eventDictionary[t];if(i){var n=i.filter((function(t){return t.callback!==e}));n.length?this.eventDictionary[t]=n:delete this.eventDictionary[t]}return this},t.prototype.once=function(t,e,i){var n=this,r=function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];return n.off(t,r),e.apply(i,o)};return(this.eventDictionary[t]||(this.eventDictionary[t]=[])).push({callback:r,callbackThis:i}),this},t}();e.a=n},2600:function(t,e,i){"use strict";i.r(e);var n="resize-event",r=i(1142),o=i(4),c=Object(o.createStore)("resizeEmitters",{emitters:{}})();function u(t,e){if(void 0===e&&(e=null),!c.emitters[t]){var i=new r.a;c.emitters[t]=i,(e||window).addEventListener("resize",(function(){c.emitters[t].emit(n)}))}return c.emitters[t]}function s(t,e,i){void 0===e&&(e=""),void 0===i&&(i=null),u(e,i).on(n,t)}function a(t){void 0===t&&(t=""),u(t).emit(n)}function f(t,e){void 0===e&&(e=""),u(e).off(n,t)}function l(t){c.emitters[t]&&(c.emitters[t].off(n,null),delete c.emitters[t])}i.d(e,"subscribe",(function(){return s})),i.d(e,"trigger",(function(){return a})),i.d(e,"unsubscribe",(function(){return f})),i.d(e,"removeResizeEventEmitter",(function(){return l}))}}]);
//# sourceMappingURL=owa.ResizeEvent.js.map
self.scriptsLoaded['owa.ResizeEvent.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.ResizeEvent.js'] = (new Date()).getTime();