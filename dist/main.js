(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),s=t(667),c=t.n(s),d=new URL(t(244),t.b),l=i()(a());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Roboto&display=swap);"]);var p=c()(d);l.push([n.id,'html {\n    height: 100%;\n    font-family: "Roboto", sans-serif;\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    background-image: url('+p+');\n    background-size: cover;\n    background-position: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n}\n\n.header {\n    border-bottom: 2px solid #C59D5F;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 20px 0px;\n    color: white;\n}\n\nul {\n    display: flex;\n    gap: 25px;\n    list-style: none;\n    justify-content: center;\n    width: max-content;\n    font-size: 1.5rem;\n    margin: 0;\n    padding: 0px;\n}\n\nli:hover {\n    cursor: pointer;\n    color: #C59D5F;\n}\n\n.mainContainer {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 20px;\n    margin: 10% 150px;\n    backdrop-filter: blur(10px);\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.25);\n}\n\n.paragraph {\n    padding: 20px;\n    text-align: center;\n    color: black;\n    margin: 20px;\n}\n\n.name {\n    color: #C59D5F;\n    text-shadow: black 1px 0 15px;\n    font-family: "Herr Von Muellerhoff", cursive;\n    font-size: 6em;\n}\n\n.button {\n    padding: 20px;\n    border-radius: 20px;\n    border: 0;\n    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.125);\n    cursor: pointer;\n    background-color: #C59D5F;\n    font-size: 1.5em;\n    margin-bottom: 30px;\n}\n\n.button:hover {\n    /* hover styles for the button */\n    background-color: #A57C3F;;\n}\n\n.welcome {\n    font-size: 2em;\n}\n\nh1 {\n    margin: 0px;\n    color: #C59D5F;\n    text-shadow: black 1px 0 15px;\n    font-family: "Herr Von Muellerhoff";\n    font-size: 6em;\n}\n\nh1 .aboutTitle {\n    margin-top: 20px;\n}\n\n.border {\n    margin: 20px auto;\n    background-color: #C59D5F;\n    width: 80%;\n    height: 5px;\n}\n\n.footer {\n    border-top: 2px solid #C59D5F;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 10px 0px;\n    color: white;\n}\n\n/* MENU */\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 25px;\n    width: 400px;\n    max-width: 100%;\n}\n\n.menuItem {\n    width: 200px;\n}\n.menuImage {\n    height: 120px;\n    width: 180px;\n}\n\n.menuTitle {\n    display: flex;\n    justify-content: center;\n}\n\n/* ABOUT */\n\n.aboutImage {\n    width: 80%;\n    margin-bottom: 40px;\n}',""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=a(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var c=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},244:(n,e,t)=>{n.exports=t.p+"a9097a9799994c8a5bf8.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{Z:()=>y});var n=t(379),e=t.n(n),a=t(795),r=t.n(a),i=t(569),s=t.n(i),c=t(565),d=t.n(c),l=t(216),p=t.n(l),u=t(589),m=t.n(u),h=t(28),f={};function g(){const n=document.createElement("div");n.classList.add("mainContainer");const e=document.createElement("div");e.classList.add("main");const t=document.createElement("p");t.classList.add("welcome");const o=document.createElement("h1");o.classList.add("name");const a=document.createElement("div");a.classList.add("border");const r=document.createElement("p");r.classList.add("paragraph");const i=document.createElement("button");return i.classList.add("button"),i.addEventListener("click",y),t.textContent="Welcome",o.textContent="Muye",r.textContent="The Muye in Brixen is a wonderful Chinese restaurant that serves authentic and delicious dishes. The friendly staff and cozy atmosphere make it a perfect spot for a relaxed dinner with friends or a romantic date.",i.textContent="View our menu",e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(i),n.appendChild(e),n}f.styleTagTransform=m(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const x=document.querySelector(".content");function b(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("ul");e.classList.add("nav");const t=document.createElement("li");t.addEventListener("click",C),t.classList.add("homeBtn");const o=document.createElement("li");o.addEventListener("click",y),o.classList.add("menuBtn");const a=document.createElement("li");a.addEventListener("click",w),a.classList.add("aboutBtn"),t.textContent="HOME",o.textContent="MENU",a.textContent="ABOUT",e.appendChild(t),e.appendChild(o),e.appendChild(a),n.appendChild(e),x.appendChild(n)}function v(){const n=document.createElement("div");n.classList.add("footer");const e=document.createElement("p");e.classList.add("footerText"),e.textContent="Made with ❤️ by optobimus",n.appendChild(e),x.appendChild(n)}function C(){x.innerHTML="",b(),x.appendChild(g()),v()}function y(){x.innerHTML="",b(),x.appendChild(function(){const n=document.createElement("div");n.classList.add("mainContainer");const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div");t.classList.add("gridContainer");const o=[],a=[],r=[];for(let n=0;n<6;n++){const n=document.createElement("div");n.classList.add("menuItem"),o.push(n);const e=document.createElement("h3");e.classList.add("menuTitle"),a.push(e);const t=document.createElement("img");t.classList.add("menuImage"),r.push(t)}r[0].src="../static/hossoshake.png",r[1].src="../static/tekkamaki.webp",r[2].src="../static/tekkamakifritto.webp",r[3].src="../static/salmonavocado.webp",r[4].src="../static/californiaroll.webp",r[5].src="../static/dragonroll.jpg",a[0].textContent="HOSSO SHAKE",a[1].textContent="HOSSO TEKKA",a[2].textContent="HOSSO MAKI FRITTO",a[3].textContent="SALMONE E AVOCADO MAKI",a[4].textContent="CALIFORNIA MAKI",a[5].textContent="DRAGON ROLL";for(let n=0;n<6;n++)o[n].appendChild(r[n]),o[n].appendChild(a[n]),t.appendChild(o[n]);return e.appendChild(t),n.appendChild(e),n}()),v()}function w(){x.innerHTML="",b(),x.appendChild(function(){const n=document.createElement("div");n.classList.add("mainContainer");const e=document.createElement("div");e.classList.add("main");const t=document.createElement("h1");t.classList.add("aboutTitle");const o=document.createElement("p");o.classList.add("paragraph");const a=document.createElement("img");return a.classList.add("aboutImage"),a.src="../static/muye.jpg",t.textContent="About us",o.textContent="Welcome to our Chinese restaurant in the beautiful alpine town of Brixen! We are thrilled to be able to share our authentic Chinese cuisine with the residents and visitors of this charming town.\n\nOur restaurant has a long history of serving delicious and traditional Chinese dishes to our valued customers. We use only the freshest ingredients, sourced locally and from around the world, to bring the flavors of China to your plate. \n\nOur team of skilled chefs has years of experience in preparing Chinese dishes and is committed to providing our customers with the best dining experience possible. We offer a wide variety of dishes, including popular favorites like kung pao chicken, sweet and sour pork, and chow mein, as well as more unusual and lesser-known dishes like spicy Szechuan boiled fish and braised eggplant. In addition to our delicious food, we also offer a comfortable and welcoming atmosphere for our customers to enjoy. Our restaurant is decorated with traditional Chinese artwork and lanterns, creating a warm and inviting atmosphere. We hope you will join us at our Chinese restaurant in Brixen and experience the flavors of China in the stunning alpine setting of this charming town. Thank you for choosing us and we look forward to serving you soon.",e.appendChild(t),e.appendChild(o),e.appendChild(a),n.appendChild(e),n}()),v()}document.addEventListener("DOMContentLoaded",(function(){b(),x.appendChild(g()),v()}))})()})();