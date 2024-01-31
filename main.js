(()=>{"use strict";var e={65:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"*{box-sizing:border-box}html,body{height:100%;width:100%;margin:0;padding:0}#start-screen h1{margin-top:0}#game canvas{background:#dfdfdf}#game.vertical-constraint>canvas{width:auto;height:calc(100vh - 112px)}#game.horizontal-constraint>canvas{width:100%;height:auto}.selectors{display:flex;margin:8px}.selectors>*{margin-right:8px}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},744:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),s=n.n(i),l=n(565),u=n.n(l),d=n(216),f=n.n(d),v=n(589),p=n.n(v),m=n(65),h={};h.styleTagTransform=p(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=f(),o()(m.Z,h);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=n(d),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(v);else{var p=o(v,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:p,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{function e(e){var t=e.split(","),n=t[0],r=t[1];return{x:Number.parseInt(n,10),y:Number.parseInt(r,10)}}n(744);var t=1600,r=750,o=t/r;function a(){var e=document.getElementById("game");null==e||e.classList.remove("vertical-constraint","horizontal-constraint");var t=window.innerWidth/(window.innerHeight-120);t<0||t>10||(o<t?null==e||e.classList.add("vertical-constraint"):null==e||e.classList.add("horizontal-constraint"))}var c={columns:3,rows:3,selections:{}};function i(){return document.getElementById("game-canvas")}function s(){var n=i().getContext("2d");n&&(n.clearRect(0,0,t,r),function(e){var n=t/c.columns,o=r/c.rows;e.fillStyle="rgb(0 0 0)";for(var a=1;a<c.columns;a++)e.fillRect(n*a-5,10,10,r-20);for(var i=1;i<c.rows;i++)e.fillRect(10,o*i-5,t-20,10)}(n),setTimeout((function(){Object.keys(c.selections).forEach((function(n){var o=e(n),a=o.x,s=o.y;"x"===c.selections[n]?function(e,n){var o=i().getContext("2d"),a=t/c.columns,s=r/c.rows;if(o){var l=e*a+15,u=n*s+15;o.clearRect(l-10,u-10,a-30,s-30),o.lineWidth=5,o.strokeStyle="rgb(0 0 200)",o.beginPath(),o.moveTo(l,u),o.lineTo(l+a-30,u+s-30),o.moveTo(l+a-30,u),o.lineTo(l,u+s-30),o.stroke()}}(a,s):function(e,n){var o=i().getContext("2d"),a=t/c.columns,s=r/c.rows;if(o){var l=e*a+5,u=n*s+5;o.clearRect(l,u,a-30,s-30);var d=.4*Math.min(a,s)-10;o.lineWidth=5,o.strokeStyle="rgb(200 0 0)",o.beginPath(),o.arc(l+a/2,u+s/2,d,0,2*Math.PI,!1),o.stroke()}}(a,s)}))}),1))}function l(t,n){Object.keys(c.selections).forEach((function(r){var o=e(r),a=o.x,i=o.y;(a>=t||i>=n)&&delete c.selections[r]}))}function u(e){c.columns=Number(e.target.value),l(c.columns,c.rows),s()}function d(e){c.rows=Number(e.target.value),l(c.columns,c.rows),s()}function f(e){var t=function(e){var t=i(),n=t.offsetLeft+t.clientLeft,r=t.offsetTop+t.clientTop,o=e.pageX-n,a=e.pageY-r;return{x:Math.floor(o/t.clientWidth*c.columns),y:Math.floor(a/t.clientHeight*c.rows)}}(e),n=t.x,r=t.y;switch(c.selections["".concat(n,",").concat(r)]){case"x":c.selections["".concat(n,",").concat(r)]="o";break;case"o":delete c.selections["".concat(n,",").concat(r)];break;default:c.selections["".concat(n,",").concat(r)]="x"}s()}a(),addEventListener("resize",(function(){a()})),window.addEventListener("load",(function(){var e,n,o,a,c;e=document.getElementById("column-selector"),(n=document.getElementById("row-selector"))&&e&&(e.addEventListener("change",u),n.addEventListener("change",d)),o=i(),a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,c=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o.width=t,o.height=r,o.style.width="".concat(a),o.style.height="".concat(c),i().addEventListener("click",f,!1),s()}))})()})();