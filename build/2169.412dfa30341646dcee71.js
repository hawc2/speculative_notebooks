"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2169],{87906:(r,o,a)=>{a.d(o,{Z:()=>i});var e=a(60994),n=a.n(e),c=a(93476),t=a.n(c)()(n());t.push([r.id,"/*\n\n    Name:       Paraíso (Dark)\n    Author:     Jan T. Sott\n\n    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n\n*/\n\n.cm-s-paraiso-dark.CodeMirror { background: #2f1e2e; color: #b9b6b0; }\n.cm-s-paraiso-dark div.CodeMirror-selected { background: #41323f; }\n.cm-s-paraiso-dark .CodeMirror-line::selection, .cm-s-paraiso-dark .CodeMirror-line > span::selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::selection { background: rgba(65, 50, 63, .99); }\n.cm-s-paraiso-dark .CodeMirror-line::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(65, 50, 63, .99); }\n.cm-s-paraiso-dark .CodeMirror-gutters { background: #2f1e2e; border-right: 0px; }\n.cm-s-paraiso-dark .CodeMirror-guttermarker { color: #ef6155; }\n.cm-s-paraiso-dark .CodeMirror-guttermarker-subtle { color: #776e71; }\n.cm-s-paraiso-dark .CodeMirror-linenumber { color: #776e71; }\n.cm-s-paraiso-dark .CodeMirror-cursor { border-left: 1px solid #8d8687; }\n\n.cm-s-paraiso-dark span.cm-comment { color: #e96ba8; }\n.cm-s-paraiso-dark span.cm-atom { color: #815ba4; }\n.cm-s-paraiso-dark span.cm-number { color: #815ba4; }\n\n.cm-s-paraiso-dark span.cm-property, .cm-s-paraiso-dark span.cm-attribute { color: #48b685; }\n.cm-s-paraiso-dark span.cm-keyword { color: #ef6155; }\n.cm-s-paraiso-dark span.cm-string { color: #fec418; }\n\n.cm-s-paraiso-dark span.cm-variable { color: #48b685; }\n.cm-s-paraiso-dark span.cm-variable-2 { color: #06b6ef; }\n.cm-s-paraiso-dark span.cm-def { color: #f99b15; }\n.cm-s-paraiso-dark span.cm-bracket { color: #b9b6b0; }\n.cm-s-paraiso-dark span.cm-tag { color: #ef6155; }\n.cm-s-paraiso-dark span.cm-link { color: #815ba4; }\n.cm-s-paraiso-dark span.cm-error { background: #ef6155; color: #8d8687; }\n\n.cm-s-paraiso-dark .CodeMirror-activeline-background { background: #4D344A; }\n.cm-s-paraiso-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/paraiso-dark.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,gCAAgC,mBAAmB,EAAE,cAAc,EAAE;AACrE,6CAA6C,mBAAmB,EAAE;AAClE,sKAAsK,iCAAiC,EAAE;AACzM,qLAAqL,iCAAiC,EAAE;AACxN,yCAAyC,mBAAmB,EAAE,iBAAiB,EAAE;AACjF,8CAA8C,cAAc,EAAE;AAC9D,qDAAqD,cAAc,EAAE;AACrE,4CAA4C,cAAc,EAAE;AAC5D,wCAAwC,8BAA8B,EAAE;;AAExE,qCAAqC,cAAc,EAAE;AACrD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;;AAEpD,4EAA4E,cAAc,EAAE;AAC5F,qCAAqC,cAAc,EAAE;AACrD,oCAAoC,cAAc,EAAE;;AAEpD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,iCAAiC,cAAc,EAAE;AACjD,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,cAAc,EAAE;AACjD,kCAAkC,cAAc,EAAE;AAClD,mCAAmC,mBAAmB,EAAE,cAAc,EAAE;;AAExE,uDAAuD,mBAAmB,EAAE;AAC5E,iDAAiD,0BAA0B,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       Paraíso (Dark)\n    Author:     Jan T. Sott\n\n    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n\n*/\n\n.cm-s-paraiso-dark.CodeMirror { background: #2f1e2e; color: #b9b6b0; }\n.cm-s-paraiso-dark div.CodeMirror-selected { background: #41323f; }\n.cm-s-paraiso-dark .CodeMirror-line::selection, .cm-s-paraiso-dark .CodeMirror-line > span::selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::selection { background: rgba(65, 50, 63, .99); }\n.cm-s-paraiso-dark .CodeMirror-line::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(65, 50, 63, .99); }\n.cm-s-paraiso-dark .CodeMirror-gutters { background: #2f1e2e; border-right: 0px; }\n.cm-s-paraiso-dark .CodeMirror-guttermarker { color: #ef6155; }\n.cm-s-paraiso-dark .CodeMirror-guttermarker-subtle { color: #776e71; }\n.cm-s-paraiso-dark .CodeMirror-linenumber { color: #776e71; }\n.cm-s-paraiso-dark .CodeMirror-cursor { border-left: 1px solid #8d8687; }\n\n.cm-s-paraiso-dark span.cm-comment { color: #e96ba8; }\n.cm-s-paraiso-dark span.cm-atom { color: #815ba4; }\n.cm-s-paraiso-dark span.cm-number { color: #815ba4; }\n\n.cm-s-paraiso-dark span.cm-property, .cm-s-paraiso-dark span.cm-attribute { color: #48b685; }\n.cm-s-paraiso-dark span.cm-keyword { color: #ef6155; }\n.cm-s-paraiso-dark span.cm-string { color: #fec418; }\n\n.cm-s-paraiso-dark span.cm-variable { color: #48b685; }\n.cm-s-paraiso-dark span.cm-variable-2 { color: #06b6ef; }\n.cm-s-paraiso-dark span.cm-def { color: #f99b15; }\n.cm-s-paraiso-dark span.cm-bracket { color: #b9b6b0; }\n.cm-s-paraiso-dark span.cm-tag { color: #ef6155; }\n.cm-s-paraiso-dark span.cm-link { color: #815ba4; }\n.cm-s-paraiso-dark span.cm-error { background: #ef6155; color: #8d8687; }\n\n.cm-s-paraiso-dark .CodeMirror-activeline-background { background: #4D344A; }\n.cm-s-paraiso-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n"],sourceRoot:""}]);const i=t},93476:r=>{r.exports=function(r){var o=[];return o.toString=function(){return this.map((function(o){var a=r(o);return o[2]?"@media ".concat(o[2]," {").concat(a,"}"):a})).join("")},o.i=function(r,a,e){"string"==typeof r&&(r=[[null,r,""]]);var n={};if(e)for(var c=0;c<this.length;c++){var t=this[c][0];null!=t&&(n[t]=!0)}for(var i=0;i<r.length;i++){var s=[].concat(r[i]);e&&n[s[0]]||(a&&(s[2]?s[2]="".concat(a," and ").concat(s[2]):s[2]=a),o.push(s))}},o}},60994:r=>{function o(r,o){(null==o||o>r.length)&&(o=r.length);for(var a=0,e=new Array(o);a<o;a++)e[a]=r[a];return e}r.exports=function(r){var a,e,n=(e=4,function(r){if(Array.isArray(r))return r}(a=r)||function(r,o){var a=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=a){var e,n,c=[],t=!0,i=!1;try{for(a=a.call(r);!(t=(e=a.next()).done)&&(c.push(e.value),!o||c.length!==o);t=!0);}catch(r){i=!0,n=r}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}return c}}(a,e)||function(r,a){if(r){if("string"==typeof r)return o(r,a);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,a):void 0}}(a,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=n[1],t=n[3];if(!t)return c;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(s," */"),d=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[c].concat(d).concat([A]).join("\n")}return[c].join("\n")}},42169:(r,o,a)=>{a.r(o),a.d(o,{default:()=>t});var e=a(1892),n=a.n(e),c=a(87906);n()(c.Z,{insert:"head",singleton:!1});const t=c.Z.locals||{}},1892:(r,o,a)=>{var e,n=function(){var r={};return function(o){if(void 0===r[o]){var a=document.querySelector(o);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(r){a=null}r[o]=a}return r[o]}}(),c=[];function t(r){for(var o=-1,a=0;a<c.length;a++)if(c[a].identifier===r){o=a;break}return o}function i(r,o){for(var a={},e=[],n=0;n<r.length;n++){var i=r[n],s=o.base?i[0]+o.base:i[0],A=a[s]||0,d="".concat(s," ").concat(A);a[s]=A+1;var l=t(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(p)):c.push({identifier:d,updater:b(p,o),references:1}),e.push(d)}return e}function s(r){var o=document.createElement("style"),e=r.attributes||{};if(void 0===e.nonce){var c=a.nc;c&&(e.nonce=c)}if(Object.keys(e).forEach((function(r){o.setAttribute(r,e[r])})),"function"==typeof r.insert)r.insert(o);else{var t=n(r.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}return o}var A,d=(A=[],function(r,o){return A[r]=o,A.filter(Boolean).join("\n")});function l(r,o,a,e){var n=a?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(r.styleSheet)r.styleSheet.cssText=d(o,n);else{var c=document.createTextNode(n),t=r.childNodes;t[o]&&r.removeChild(t[o]),t.length?r.insertBefore(c,t[o]):r.appendChild(c)}}function p(r,o,a){var e=a.css,n=a.media,c=a.sourceMap;if(n?r.setAttribute("media",n):r.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var m=null,u=0;function b(r,o){var a,e,n;if(o.singleton){var c=u++;a=m||(m=s(o)),e=l.bind(null,a,c,!1),n=l.bind(null,a,c,!0)}else a=s(o),e=p.bind(null,a,o),n=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(a)};return e(r),function(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap)return;e(r=o)}else n()}}r.exports=function(r,o){(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var a=i(r=r||[],o);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var e=0;e<a.length;e++){var n=t(a[e]);c[n].references--}for(var s=i(r,o),A=0;A<a.length;A++){var d=t(a[A]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}a=s}}}}}]);
//# sourceMappingURL=2169.412dfa30341646dcee71.js.map