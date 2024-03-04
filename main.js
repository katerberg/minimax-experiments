(()=>{"use strict";var e={65:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"*{box-sizing:border-box}html,body{height:100%;width:100%;margin:0;padding:0}#start-screen h1{margin-top:0}#game canvas{background:#000}#game.vertical-constraint>canvas{width:auto;height:calc(100vh - 112px)}#game.horizontal-constraint>canvas{width:100%;height:auto}.selectors{display:flex;margin:8px}.selectors>*{margin-right:8px}.calculations{display:flex}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},744:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(379),r=n.n(o),c=n(795),a=n.n(c),i=n(569),s=n.n(i),l=n(565),u=n.n(l),d=n(216),f=n.n(d),v=n(589),g=n.n(v),m=n(65),p={};p.styleTagTransform=g(),p.setAttributes=u(),p.insert=s().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=f(),r()(m.Z,p);const h=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],l=o.base?s[0]+o.base:s[0],u=c[l]||0,d="".concat(l," ").concat(u);c[l]=u+1;var f=n(d),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(v);else{var g=r(v,o);o.byIndex=i,t.splice(i,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),l=0;l<c.length;l++){var u=n(c[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},354:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAvailableMoves=void 0,t.getAvailableMoves=function(e){for(var t=[],n=0;n<e.columns;n++)for(var o=0;o<e.rows;o++)void 0===e.selections.get("".concat(n,",").concat(o))&&t.push({x:n,y:o});return t}},606:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.numberCoordsToCoords=t.coordsToNumberCoords=void 0,t.coordsToNumberCoords=function(e){var t=e.split(","),n=t[0],o=t[1];return{x:Number.parseInt(n,10),y:Number.parseInt(o,10)}},t.numberCoordsToCoords=function(e){return"".concat(e.x,",").concat(e.y)}},771:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getBestMove=t.boardToTranspositionTableKeys=t.boardToTranspositionTableKey=void 0;var r=n(354),c=n(606),a=n(274),i={"___,___,___":{bestScore:0,bestMove:{x:0,y:0}}};function s(e){for(var t,n="",o=0;o<e.columns;o++){for(var r=0;r<e.rows;r++)n+=null!==(t=e.selections.get("".concat(r,",").concat(o)))&&void 0!==t?t:"_";n+=","}return n.slice(0,-1)}function l(e){for(var t,n,o="",r="",c=0;c<e.columns;c++){for(var a=0;a<e.rows;a++)o+=null!==(t=e.selections.get("".concat(a,",").concat(c)))&&void 0!==t?t:"_",r+=null!==(n=e.selections.get("".concat(c,",").concat(a)))&&void 0!==n?n:"_";o+=",",r+=","}return[o=o.slice(0,-1),r=r.slice(0,-1)]}t.boardToTranspositionTableKey=s,t.boardToTranspositionTableKeys=l,t.getBestMove=function e(t,n,u,d,f){if(void 0===u&&(u=0),void 0===d&&(d=-1e6),void 0===f&&(f=1e6),0===u)for(var v=Object.getOwnPropertyNames(i),g=0;g<v.length;g++)delete i[v[g]];var m=void 0!==n?n:"x"===t.currentPlayer,p=(0,r.getAvailableMoves)(t),h=p[0];if(u>t.maxDepth)return{bestScore:(0,a.getTotalScore)(t.selections,t.columns,t.rows),bestMove:h};var b=m?-1e6:1e6,y=m?1:-1,x=b,T=d,w=f,S=function(n){var r=p[n],d=o(o({},t),{currentPlayer:m?"o":"x",selections:new Map(t.selections)});d.selections.set((0,c.numberCoordsToCoords)(r),m?"x":"o");var f=(0,a.checkTerminal)(d);if(f.isTerminal){if(f.isWinner)return x=-1*b-u*y,h=r,"break";f.isCat&&(m&&0>x||!m&&0<x)&&(x=0,h=r)}else{var v,g=s(d);i[g]?v=i[g]:(v=e(d,!m,u+1,T,w),l(d).forEach((function(e){i[e]||(i[e]=v)}))),(m&&v.bestScore>x||!m&&v.bestScore<x)&&(x=v.bestScore,h=r,m?T=Math.max(x,T):m||(w=Math.min(x,w)))}if(w<=T)return"break"};for(g=0;g<p.length&&"break"!==S(g);g++);return{bestScore:x,bestMove:h}}},274:(e,t)=>{function n(e,t,n,o){return function(e,t,n,o){for(var r=0;r<t;r++)for(var c=0;c<n-2;c++){for(var a=void 0!==e.get("".concat(r,",").concat(c)),i=1;i<o;i++)if(e.get("".concat(r,",").concat(c+i))!==e.get("".concat(r,",").concat(c))){a=!1;break}if(a)return!0}return!1}(e,t,n,o)||function(e,t,n,o){for(var r=0;r<t-2;r++)for(var c=0;c<n;c++){for(var a=void 0!==e.get("".concat(r,",").concat(c)),i=1;i<o;i++)if(e.get("".concat(r+i,",").concat(c))!==e.get("".concat(r,",").concat(c))){a=!1;break}if(a)return!0}return!1}(e,t,n,o)||function(e,t,n,o){for(var r=0;r<t-2;r++)for(var c=0;c<n-2;c++){for(var a=void 0!==e.get("".concat(r,",").concat(c)),i=1;i<o;i++)if(e.get("".concat(r+i,",").concat(c+i))!==e.get("".concat(r,",").concat(c))){a=!1;break}if(a)return!0}return!1}(e,t,n,o)||function(e,t,n,o){for(var r=2;r<t;r++)for(var c=0;c<n-2;c++){for(var a=void 0!==e.get("".concat(r,",").concat(c)),i=1;i<o;i++)if(e.get("".concat(r-i,",").concat(c+i))!==e.get("".concat(r,",").concat(c))){a=!1;break}if(a)return!0}return!1}(e,t,n,o)}function o(e,t,n){return e.size===t*n}function r(e,t,n){for(var o=0,r=0;r<n;r++)"x"===e.get("".concat(t,",").concat(r))?"x"===e.get("".concat(t,",").concat(r+1))?"x"===e.get("".concat(t,",").concat(r+2))?(o+=1e5,r+=2):(o+=10,r++):o+=1:"o"===e.get("".concat(t,",").concat(r))&&("o"===e.get("".concat(t,",").concat(r+1))?"o"===e.get("".concat(t,",").concat(r+2))?(o-=1e5,r+=2):(o-=10,r++):o-=1);return o}function c(e,t,n){for(var o=0,r=0;r<t;r++)"x"===e.get("".concat(r,",").concat(n))?"x"===e.get("".concat(r+1,",").concat(n))?"x"===e.get("".concat(r+2,",").concat(n))?(o+=1e5,r+=2):(o+=10,r++):o+=1:"o"===e.get("".concat(r,",").concat(n))&&("o"===e.get("".concat(r+1,",").concat(n))?"o"===e.get("".concat(r+2,",").concat(n))?(o-=1e5,r+=2):(o-=10,r++):o-=1);return o}function a(e,t,n){for(var o=0,c=0;c<t;c++)o+=r(e,c,n);return o}function i(e,t,n){for(var o=0,r=0;r<n;r++)o+=c(e,t,r);return o}function s(e,t,n,o){for(var r=o.x,c=o.y,a=0;r<t&&c<n;)"x"===e.get("".concat(r,",").concat(c))?"x"===e.get("".concat(r+1,",").concat(c+1))?"x"===e.get("".concat(r+2,",").concat(c+2))?(a+=1e5,r+=3,c+=3):(a+=10,r+=2,c+=2):(a+=1,r+=1,c+=1):"o"===e.get("".concat(r,",").concat(c))?"o"===e.get("".concat(r+1,",").concat(c+1))?"o"===e.get("".concat(r+2,",").concat(c+2))?(a-=1e5,r+=3,c+=3):(a-=10,r+=2,c+=2):(a-=1,r+=1,c+=1):(r+=1,c+=1);return a}function l(e,t,n){for(var o=0,r=0;r<t;r++)o+=s(e,t,n,{x:r,y:0});for(var c=1;c<n;c++)o+=s(e,t,n,{x:0,y:c});return o}function u(e,t,n,o){for(var r=o.x,c=o.y,a=0;r>=0&&c<n;)"x"===e.get("".concat(r,",").concat(c))?"x"===e.get("".concat(r-1,",").concat(c+1))?"x"===e.get("".concat(r-2,",").concat(c+2))?(a+=1e5,r-=3,c+=3):(a+=10,r-=2,c+=2):(a+=1,r-=1,c+=1):"o"===e.get("".concat(r,",").concat(c))?"o"===e.get("".concat(r-1,",").concat(c+1))?"o"===e.get("".concat(r-2,",").concat(c+2))?(a-=1e5,r-=3,c+=3):(a-=10,r-=2,c+=2):(a-=1,r-=1,c+=1):(r-=1,c+=1);return a}function d(e,t,n){for(var o=0,r=0;r<t;r++)o+=u(e,0,n,{x:r,y:0});for(var c=1;c<n;c++)o+=u(e,0,n,{x:3,y:c});return o}Object.defineProperty(t,"__esModule",{value:!0}),t.getTotalScore=t.getTotalReverseDiagonalScore=t.getTotalDiagonalScore=t.getDiagonalScore=t.getTotalRowScore=t.getTotalColumnScore=t.getRowScore=t.getColumnScore=t.checkTerminal=t.isCat=t.isWin=void 0,t.isWin=n,t.isCat=o,t.checkTerminal=function(e){var t=o(e.selections,e.columns,e.rows),r=n(e.selections,e.columns,e.rows,e.requiredWin);return{isTerminal:r||t,isWinner:r,isCat:t,winner:r?e.currentPlayer:null}},t.getColumnScore=r,t.getRowScore=c,t.getTotalColumnScore=a,t.getTotalRowScore=i,t.getDiagonalScore=s,t.getTotalDiagonalScore=l,t.getTotalReverseDiagonalScore=d,t.getTotalScore=function(e,t,n){return a(e,t,n)+i(e,t,n)+l(e,t,n)+d(e,t,n)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{n(744);var e=n(606),t=n(771),o=n(274),r=1600,c=750,a=r/c;function i(){var e=document.getElementById("game");null==e||e.classList.remove("vertical-constraint","horizontal-constraint");var t=window.innerWidth/(window.innerHeight-120);t<0||t>10||(a<t?null==e||e.classList.add("vertical-constraint"):null==e||e.classList.add("horizontal-constraint"))}var s={currentPlayer:"x",columns:3,rows:3,requiredWin:3,maxDepth:1200,selections:new Map};function l(){return document.getElementById("game-canvas")}function u(){var t=l().getContext("2d");t&&(t.clearRect(0,0,r,c),function(e){var t=r/s.columns,n=c/s.rows;e.fillStyle="rgb(10 200 110)";for(var o=1;o<s.columns;o++)e.fillRect(t*o-5,10,10,c-20);for(var a=1;a<s.rows;a++)e.fillRect(10,n*a-5,r-20,10)}(t),setTimeout((function(){s.selections.forEach((function(t,n){var o=(0,e.coordsToNumberCoords)(n),a=o.x,i=o.y;"x"===t?function(e,t){var n=l().getContext("2d"),o=r/s.columns,a=c/s.rows;if(n){var i=e*o+15,u=t*a+15;n.clearRect(i-10,u-10,o-30,a-30),n.lineWidth=5,n.strokeStyle="rgb(0 0 200)",n.beginPath(),n.moveTo(i,u),n.lineTo(i+o-30,u+a-30),n.moveTo(i+o-30,u),n.lineTo(i,u+a-30),n.stroke()}}(a,i):function(e,t){var n=l().getContext("2d"),o=r/s.columns,a=c/s.rows;if(n){var i=e*o+5,u=t*a+5;n.clearRect(i,u,o-30,a-30);var d=.4*Math.min(o,a)-10;n.lineWidth=5,n.strokeStyle="rgb(200 0 0)",n.beginPath(),n.arc(i+o/2,u+a/2,d,0,2*Math.PI,!1),n.stroke()}}(a,i)}))}),1))}function d(t,n){Object.keys(s.selections).forEach((function(o){var r=(0,e.coordsToNumberCoords)(o),c=r.x,a=r.y;(c>=t||a>=n)&&s.selections.delete(o)}))}function f(e){s.columns=Number(e.target.value),d(s.columns,s.rows),u()}function v(e){s.rows=Number(e.target.value),d(s.columns,s.rows),u()}function g(e){var t=document.getElementById("result-area");t&&(t.textContent="depth changed to ".concat(e.target.value)),s.maxDepth=Number(e.target.value)}function m(e){var t=document.getElementById("result-area");t&&(t.textContent="required win changed to ".concat(e.target.value)),s.requiredWin=Number(e.target.value)}function p(){var e=document.getElementById("result-area"),n=(new Date).getTime();if(e){e.textContent="Calculating ".concat(s.columns,"x").concat(s.rows," with depth ").concat(s.maxDepth,"...");var r=(0,o.getTotalScore)(s.selections,s.columns,s.rows);setTimeout((function(){var o=(0,t.getBestMove)(s),c="Terminal ".concat(o.bestScore," at ").concat(o.bestMove.x,",").concat(o.bestMove.y,"."),a="Calculated: ".concat((new Date).getTime()-n," ms");e.textContent=r>0?"Winning ".concat(r,". ").concat(c," ").concat(a):r<0?"Losing ".concat(r,". ").concat(c," ").concat(a):"Tie ".concat(r,". ").concat(c," ").concat(a)}),1)}}function h(e){var t=function(e){var t=l(),n=t.offsetLeft+t.clientLeft,o=t.offsetTop+t.clientTop,r=e.pageX-n,c=e.pageY-o;return{x:Math.floor(r/t.clientWidth*s.columns),y:Math.floor(c/t.clientHeight*s.rows)}}(e),n=t.x,o=t.y;switch(s.selections.get("".concat(n,",").concat(o))){case"x":s.selections.set("".concat(n,",").concat(o),"o");break;case"o":s.selections.delete("".concat(n,",").concat(o));break;default:s.selections.set("".concat(n,",").concat(o),"x")}u()}i(),addEventListener("resize",(function(){i()})),window.addEventListener("load",(function(){var e,t,n,o,a,i,s,d;e=document.getElementById("column-selector"),t=document.getElementById("row-selector"),n=document.getElementById("calculate-button"),o=document.getElementById("depth-selector"),a=document.getElementById("required-win-selector"),t&&e&&n&&o&&a&&(e.addEventListener("change",f),t.addEventListener("change",v),o.addEventListener("change",g),a.addEventListener("change",m),n.addEventListener("click",p)),i=l(),s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i.width=r,i.height=c,i.style.width="".concat(s),i.style.height="".concat(d),l().addEventListener("click",h,!1),u()}))})()})();