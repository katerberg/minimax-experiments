(()=>{"use strict";var t={65:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),c=n.n(o),r=n(645),a=n.n(r)()(c());a.push([t.id,"*{box-sizing:border-box}html,body{height:100%;width:100%;margin:0;padding:0}#start-screen h1{margin-top:0}#game canvas{background:#dfdfdf}#game.vertical-constraint>canvas{width:auto;height:calc(100vh - 112px)}#game.horizontal-constraint>canvas{width:100%;height:auto}.selectors{display:flex;margin:8px}.selectors>*{margin-right:8px}.calculations{display:flex}",""]);const i=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,c,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);o&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),c&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=c):u[4]="".concat(c)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},744:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var o=n(379),c=n.n(o),r=n(795),a=n.n(r),i=n(569),s=n.n(i),l=n(565),u=n.n(l),d=n(216),f=n.n(d),v=n(589),m=n.n(v),g=n(65),p={};p.styleTagTransform=m(),p.setAttributes=u(),p.insert=s().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=f(),c()(g.Z,p);const h=g.Z&&g.Z.locals?g.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],i=0;i<t.length;i++){var s=t[i],l=o.base?s[0]+o.base:s[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var f=n(d),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(v);else{var m=c(v,o);o.byIndex=i,e.splice(i,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function c(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,c){var r=o(t=t||[],c=c||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var i=n(r[a]);e[i].references--}for(var s=o(t,c),l=0;l<r.length;l++){var u=n(r[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,c&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},354:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getAvailableMoves=void 0,e.getAvailableMoves=function(t){for(var e=[],n=0;n<t.columns;n++)for(var o=0;o<t.rows;o++)void 0===t.selections["".concat(n,",").concat(o)]&&e.push({x:n,y:o});return e}},606:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.numberCoordsToCoords=e.coordsToNumberCoords=void 0,e.coordsToNumberCoords=function(t){var e=t.split(","),n=e[0],o=e[1];return{x:Number.parseInt(n,10),y:Number.parseInt(o,10)}},e.numberCoordsToCoords=function(t){return"".concat(t.x,",").concat(t.y)}},771:function(t,e,n){var o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t},o.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.getBestMove=void 0;var c=n(354),r=n(606),a=n(274);e.getBestMove=function t(e,n,i){void 0===i&&(i=0);var s=void 0!==n?n:"x"===e.currentPlayer;if(i>e.maxDepth)return{bestScore:0,bestMove:{x:0,y:0}};for(var l=(0,c.getAvailableMoves)(e),u=l[0],d=s?-1e6:1e6,f=s?1:-1,v=d,m=0;m<l.length;m++){var g=l[m],p=o(o({},e),{currentPlayer:s?"o":"x",selections:o({},e.selections)});p.selections[(0,r.numberCoordsToCoords)(g)]=s?"x":"o";var h=(0,a.checkTerminal)(p);if(h.isTerminal){if(h.isWinner){v=-1*d-i*f,u=g;break}h.isCat&&(s&&0>v||!s&&0<v)&&(v=0,u=g)}else{var y=t(p,!s,i+1);(s&&y.bestScore>v||!s&&y.bestScore<v)&&(v=y.bestScore,u=g)}}return{bestScore:v,bestMove:u}}},274:(t,e)=>{function n(t,e,n){return function(t,e,n){for(var o=0;o<e;o++)for(var c=0;c<n-2;c++)if("x"===t["".concat(o,",").concat(c)]&&"x"===t["".concat(o,",").concat(c+1)]&&"x"===t["".concat(o,",").concat(c+2)]||"o"===t["".concat(o,",").concat(c)]&&"o"===t["".concat(o,",").concat(c+1)]&&"o"===t["".concat(o,",").concat(c+2)])return!0;return!1}(t,e,n)||function(t,e,n){for(var o=0;o<e-2;o++)for(var c=0;c<n;c++)if("x"===t["".concat(o,",").concat(c)]&&"x"===t["".concat(o+1,",").concat(c)]&&"x"===t["".concat(o+2,",").concat(c)]||"o"===t["".concat(o,",").concat(c)]&&"o"===t["".concat(o+1,",").concat(c)]&&"o"===t["".concat(o+2,",").concat(c)])return!0;return!1}(t,e,n)||function(t,e,n){for(var o=0;o<e-2;o++)for(var c=0;c<n-2;c++)if("x"===t["".concat(o,",").concat(c)]&&"x"===t["".concat(o+1,",").concat(c+1)]&&"x"===t["".concat(o+2,",").concat(c+2)]||"o"===t["".concat(o,",").concat(c)]&&"o"===t["".concat(o+1,",").concat(c+1)]&&"o"===t["".concat(o+2,",").concat(c+2)])return!0;return!1}(t,e,n)||function(t,e,n){for(var o=2;o<e;o++)for(var c=0;c<n-2;c++)if("x"===t["".concat(o,",").concat(c)]&&"x"===t["".concat(o-1,",").concat(c+1)]&&"x"===t["".concat(o-2,",").concat(c+2)]||"o"===t["".concat(o,",").concat(c)]&&"o"===t["".concat(o-1,",").concat(c+1)]&&"o"===t["".concat(o-2,",").concat(c+2)])return!0;return!1}(t,e,n)}function o(t,e,n){return Object.keys(t).length===e*n}function c(t,e,n){for(var o=0,c=0;c<n;c++)"x"===t["".concat(e,",").concat(c)]?"x"===t["".concat(e,",").concat(c+1)]?"x"===t["".concat(e,",").concat(c+2)]?(o+=1e5,c+=2):(o+=10,c++):o+=1:"o"===t["".concat(e,",").concat(c)]&&("o"===t["".concat(e,",").concat(c+1)]?"o"===t["".concat(e,",").concat(c+2)]?(o-=1e5,c+=2):(o-=10,c++):o-=1);return o}function r(t,e,n){for(var o=0,c=0;c<e;c++)"x"===t["".concat(c,",").concat(n)]?"x"===t["".concat(c+1,",").concat(n)]?"x"===t["".concat(c+2,",").concat(n)]?(o+=1e5,c+=2):(o+=10,c++):o+=1:"o"===t["".concat(c,",").concat(n)]&&("o"===t["".concat(c+1,",").concat(n)]?"o"===t["".concat(c+2,",").concat(n)]?(o-=1e5,c+=2):(o-=10,c++):o-=1);return o}function a(t,e,n){for(var o=0,r=0;r<e;r++)o+=c(t,r,n);return o}function i(t,e,n){for(var o=0,c=0;c<n;c++)o+=r(t,e,c);return o}function s(t,e,n,o){for(var c=o.x,r=o.y,a=0;c<e&&r<n;)"x"===t["".concat(c,",").concat(r)]?"x"===t["".concat(c+1,",").concat(r+1)]?"x"===t["".concat(c+2,",").concat(r+2)]?(a+=1e5,c+=3,r+=3):(a+=10,c+=2,r+=2):(a+=1,c+=1,r+=1):"o"===t["".concat(c,",").concat(r)]?"o"===t["".concat(c+1,",").concat(r+1)]?"o"===t["".concat(c+2,",").concat(r+2)]?(a-=1e5,c+=3,r+=3):(a-=10,c+=2,r+=2):(a-=1,c+=1,r+=1):(c+=1,r+=1);return a}function l(t,e,n){for(var o=0,c=0;c<e;c++)o+=s(t,e,n,{x:c,y:0});for(var r=1;r<n;r++)o+=s(t,e,n,{x:0,y:r});return o}function u(t,e,n,o){for(var c=o.x,r=o.y,a=0;c>=0&&r<n;)"x"===t["".concat(c,",").concat(r)]?"x"===t["".concat(c-1,",").concat(r+1)]?"x"===t["".concat(c-2,",").concat(r+2)]?(a+=1e5,c-=3,r+=3):(a+=10,c-=2,r+=2):(a+=1,c-=1,r+=1):"o"===t["".concat(c,",").concat(r)]?"o"===t["".concat(c-1,",").concat(r+1)]?"o"===t["".concat(c-2,",").concat(r+2)]?(a-=1e5,c-=3,r+=3):(a-=10,c-=2,r+=2):(a-=1,c-=1,r+=1):(c-=1,r+=1);return a}function d(t,e,n){for(var o=0,c=0;c<e;c++)o+=u(t,0,n,{x:c,y:0});for(var r=1;r<n;r++)o+=u(t,0,n,{x:3,y:r});return o}Object.defineProperty(e,"__esModule",{value:!0}),e.getTotalScore=e.getTotalReverseDiagonalScore=e.getTotalDiagonalScore=e.getDiagonalScore=e.getTotalRowScore=e.getTotalColumnScore=e.getRowScore=e.getColumnScore=e.checkTerminal=e.isCat=e.isWin=void 0,e.isWin=n,e.isCat=o,e.checkTerminal=function(t){var e=n(t.selections,t.columns,t.rows),c=o(t.selections,t.columns,t.rows);return{isTerminal:e||c,isWinner:e,isCat:c,winner:e?t.currentPlayer:null}},e.getColumnScore=c,e.getRowScore=r,e.getTotalColumnScore=a,e.getTotalRowScore=i,e.getDiagonalScore=s,e.getTotalDiagonalScore=l,e.getTotalReverseDiagonalScore=d,e.getTotalScore=function(t,e,n){return a(t,e,n)+i(t,e,n)+l(t,e,n)+d(t,e,n)}}},e={};function n(o){var c=e[o];if(void 0!==c)return c.exports;var r=e[o]={id:o,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,(()=>{n(744);var t=n(606),e=n(771),o=n(274),c=1600,r=750,a=c/r;function i(){var t=document.getElementById("game");null==t||t.classList.remove("vertical-constraint","horizontal-constraint");var e=window.innerWidth/(window.innerHeight-120);e<0||e>10||(a<e?null==t||t.classList.add("vertical-constraint"):null==t||t.classList.add("horizontal-constraint"))}var s={currentPlayer:"x",columns:3,rows:3,maxDepth:6,selections:{}};function l(){return document.getElementById("game-canvas")}function u(){var e=l().getContext("2d");e&&(e.clearRect(0,0,c,r),function(t){var e=c/s.columns,n=r/s.rows;t.fillStyle="rgb(0 0 0)";for(var o=1;o<s.columns;o++)t.fillRect(e*o-5,10,10,r-20);for(var a=1;a<s.rows;a++)t.fillRect(10,n*a-5,c-20,10)}(e),setTimeout((function(){Object.keys(s.selections).forEach((function(e){var n=(0,t.coordsToNumberCoords)(e),o=n.x,a=n.y;"x"===s.selections[e]?function(t,e){var n=l().getContext("2d"),o=c/s.columns,a=r/s.rows;if(n){var i=t*o+15,u=e*a+15;n.clearRect(i-10,u-10,o-30,a-30),n.lineWidth=5,n.strokeStyle="rgb(0 0 200)",n.beginPath(),n.moveTo(i,u),n.lineTo(i+o-30,u+a-30),n.moveTo(i+o-30,u),n.lineTo(i,u+a-30),n.stroke()}}(o,a):function(t,e){var n=l().getContext("2d"),o=c/s.columns,a=r/s.rows;if(n){var i=t*o+5,u=e*a+5;n.clearRect(i,u,o-30,a-30);var d=.4*Math.min(o,a)-10;n.lineWidth=5,n.strokeStyle="rgb(200 0 0)",n.beginPath(),n.arc(i+o/2,u+a/2,d,0,2*Math.PI,!1),n.stroke()}}(o,a)}))}),1))}function d(e,n){Object.keys(s.selections).forEach((function(o){var c=(0,t.coordsToNumberCoords)(o),r=c.x,a=c.y;(r>=e||a>=n)&&delete s.selections[o]}))}function f(t){s.columns=Number(t.target.value),d(s.columns,s.rows),u()}function v(t){s.rows=Number(t.target.value),d(s.columns,s.rows),u()}function m(t){s.maxDepth=Number(t.target.value)}function g(){var t=document.getElementById("result-area"),n=(new Date).getTime();if(t){t.textContent="Calculating...";var c=(0,o.getTotalScore)(s.selections,s.columns,s.rows);setTimeout((function(){var o=(0,e.getBestMove)(s),r="Terminal ".concat(o.bestScore," at ").concat(o.bestMove.x,",").concat(o.bestMove.y,"."),a="Calculated: ".concat((new Date).getTime()-n," ms");t.textContent=c>0?"Winning ".concat(c,". ").concat(r," ").concat(a):c<0?"Losing ".concat(c,". ").concat(r," ").concat(a):"Tie ".concat(c,". ").concat(r," ").concat(a)}),1)}}function p(t){var e=function(t){var e=l(),n=e.offsetLeft+e.clientLeft,o=e.offsetTop+e.clientTop,c=t.pageX-n,r=t.pageY-o;return{x:Math.floor(c/e.clientWidth*s.columns),y:Math.floor(r/e.clientHeight*s.rows)}}(t),n=e.x,o=e.y;switch(s.selections["".concat(n,",").concat(o)]){case"x":s.selections["".concat(n,",").concat(o)]="o";break;case"o":delete s.selections["".concat(n,",").concat(o)];break;default:s.selections["".concat(n,",").concat(o)]="x"}u()}i(),addEventListener("resize",(function(){i()})),window.addEventListener("load",(function(){var t,e,n,o,a,i,s;t=document.getElementById("column-selector"),e=document.getElementById("row-selector"),n=document.getElementById("depth-selector"),o=document.getElementById("calculate-button"),e&&t&&o&&n&&(t.addEventListener("change",f),e.addEventListener("change",v),n.addEventListener("change",m),o.addEventListener("click",g)),a=l(),i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a.width=c,a.height=r,a.style.width="".concat(i),a.style.height="".concat(s),l().addEventListener("click",p,!1),u()}))})()})();