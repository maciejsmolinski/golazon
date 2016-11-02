!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},n={},r={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,s=function(t,e){for(var n,r=[],i=(o.test(e)?t+"/"+e:e).split("/"),s=0,a=i.length;s<a;s++)n=i[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},a=function(t){return t.split("/").slice(0,-1).join("/")},u=function(e){return function(n){var r=s(a(e),n);return t.require(r,e)}},c=function(t,e){var r=null;r=g&&g.createHot(t);var i={id:t,exports:{},hot:r};return n[t]=i,e(i.exports,u(t),i),i.exports},f=function(t){return r[t]?f(r[t]):t},l=function(t,e){return f(s(a(t),e))},p=function(t,r){null==r&&(r="/");var o=f(t);if(i.call(n,o))return n[o].exports;if(i.call(e,o))return c(o,e[o]);throw new Error("Cannot find module '"+t+"' from '"+r+"'")};p.alias=function(t,e){r[e]=t};var h=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/,m=function(t){if(h.test(t)){var e=t.replace(h,"");i.call(r,e)&&r[e].replace(h,"")!==e+"/index"||(r[e]=t)}if(d.test(t)){var n=t.replace(d,"");i.call(r,n)||(r[n]=t)}};p.register=p.define=function(t,r){if("object"==typeof t)for(var o in t)i.call(t,o)&&p.register(o,t[o]);else e[t]=r,delete n[t],m(t)},p.list=function(){var t=[];for(var n in e)i.call(e,n)&&t.push(n);return t};var g=t._hmr&&new t._hmr(l,p,e,n);p._cache=n,p.hmr=g&&g.wrap,p.brunch=!0,t.require=p}}(),function(){var t=(window,function(t,e,n){var r={},i=function(e,n){var o;try{return o=t(n+"/node_modules/"+e)}catch(s){if(s.toString().indexOf("Cannot find module")===-1)throw s;if(n.indexOf("node_modules")!==-1){var a=n.split("/"),u=a.lastIndexOf("node_modules"),c=a.slice(0,u).join("/");return i(e,c)}}return r};return function(o){if(o in e&&(o=e[o]),o){if("."!==o[0]&&n){var s=i(o,n);if(s!==r)return s}return t(o)}}});require.register("component-emitter/index.js",function(e,n,r){n=t(n,{},"component-emitter"),function(){function t(t){if(t)return e(t)}function e(e){for(var n in t.prototype)e[n]=t.prototype[n];return e}"undefined"!=typeof r&&(r.exports=t),t.prototype.on=t.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},t.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return this},t.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this},t.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},t.prototype.hasListeners=function(t){return!!this.listeners(t).length}}()}),require.register("riot/riot.js",function(e,n,r){n=t(n,{},"riot"),function(){!function(t,n){"use strict";function i(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function o(t,e){for(var n,r=e.length,i=t.length;r>i;)n=e[--r],e.splice(r,1),n.unmount()}function s(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];R(r)?g(r,function(t){L(t,n,e)}):L(r,n,e)})}function a(t,e,n){var r,i=t._root;for(t._virts=[];i;)r=i.nextSibling,n?e.insertBefore(i,n._root):e.appendChild(i),t._virts.push(i),i=r}function u(t,e,n,r){for(var i,o=t._root,s=0;s<r;s++)i=o.nextSibling,e.insertBefore(o,n._root),o=i}function c(t,e,n){x(t,"each");var r,c=typeof C(t,"no-reorder")!==rt||x(t,"no-reorder"),f=q(t),l=Y[f]||{tmpl:y(t)},h=ct.test(f),d=t.parentNode,m=document.createTextNode(""),g=E(t),v="option"===f.toLowerCase(),b=[],_=[],w="VIRTUAL"==t.tagName;n=mt.loopKeys(n),d.insertBefore(m,t),e.one("before-mount",function(){t.parentNode.removeChild(t),d.stub&&(d=e.root)}).on("update",function(){var y=mt(n.val,e),x=document.createDocumentFragment();R(y)||(r=y||!1,y=r?Object.keys(y).map(function(t){return i(n,t,y[t])}):[]);for(var T=0,C=y.length;T<C;T++){var j=y[T],E=c&&typeof j==it&&!r,O=_.indexOf(j),L=~O&&E?O:T,N=b[L];j=!r&&n.key?i(n,j,T):j,!E&&!N||E&&!~O||!N?(N=new p(l,{parent:e,isLoop:!0,hasImpl:!!Y[f],root:h?d:t.cloneNode(),item:j},t.innerHTML),N.mount(),w&&(N._root=N.root.firstChild),T!=b.length&&b[T]?(w?a(N,d,b[T]):d.insertBefore(N.root,b[T].root),_.splice(T,0,j)):w?a(N,x):x.appendChild(N.root),b.splice(T,0,N),L=T):N.update(j,!0),L!==T&&E&&b[T]&&(A(y,_[T])&&(w?u(N,d,b[T],t.childNodes.length):b[T].root.parentNode&&d.insertBefore(N.root,b[T].root)),n.pos&&(N[n.pos]=T),b.splice(T,0,b.splice(L,1)[0]),_.splice(T,0,_.splice(L,1)[0]),!g&&N.tags&&s(N,T)),N._item=j,S(N,"_parent",e)}if(o(y,b),d.insertBefore(x,m),v&&ht&&!d.multiple)for(var k=0;k<d.length;k++)if(d[k].__riot1374){d.selectedIndex=k,delete d[k].__riot1374;break}g&&(e.tags[f]=b),_=y.slice()})}function f(t,e,n,r){$(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||C(t,"each")?1:0,n){var i=E(t);i&&!t.isLoop&&n.push(N(i,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||G(t,e,[])}})}function l(t,e,n){function r(t,e,r){mt.hasExpr(e)&&n.push(M({dom:t,expr:e},r))}$(t,function(t){var n,i=t.nodeType;if(3==i&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==i)return(n=C(t,"each"))?(c(t,e,n),!1):(g(t.attributes,function(e){var n=e.name,i=n.split("__")[1];if(r(t,e.value,{attr:i||n,bool:i}),i)return x(t,n),!1}),!E(t)&&void 0)})}function p(t,e,r){function i(){var t=b&&y?p:d||p;g(O.attributes,function(e){var n=e.value;h[T(e.name)]=mt.hasExpr(n)?mt(n,t):n}),g(Object.keys(N),function(e){h[T(e)]=mt(N[e],t)})}function o(t){for(var e in _)typeof p[e]!==ot&&H(p,e)&&(p[e]=t[e])}function s(t){g(Object.keys(t),function(e){var n=!ft.test(e)&&A(q,e);(typeof p[e]===ot||n)&&(n||q.push(e),p[e]=t[e])})}function a(t){p.update(t,!0)}function u(t){if(g(E,function(e){e[t?"mount":"unmount"]()}),d){var e=t?"on":"off";y?d[e]("unmount",p.unmount):d[e]("update",a)[e]("unmount",p.unmount)}}var c,p=Q.observable(this),h=U(e.opts)||{},d=e.parent,y=e.isLoop,b=e.hasImpl,_=P(e.item),C=[],E=[],O=e.root,L=O.tagName.toLowerCase(),N={},q=[];t.name&&O._tag&&O._tag.unmount(!0),this.isMounted=!1,O.isLoop=y,O._tag=this,S(this,"_riot_id",++J),M(this,{parent:d,root:O,opts:h},_),S(this,"tags",{}),g(O.attributes,function(t){var e=t.value;mt.hasExpr(e)&&(N[t.name]=e)}),c=gt(t.tmpl,r),S(this,"update",function(t,e){return t=P(t),y&&s(p.parent),t&&w(_)&&(o(t),_=t),M(p,t),i(),p.trigger("update",t),m(C,p),e&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):yt(function(){p.trigger("updated")}),this}),S(this,"mixin",function(){return g(arguments,function(t){var e,n,r=[];t=typeof t===rt?Q.mixin(t):t,e=v(t)?new t:t;var i=Object.getPrototypeOf(e);do r=r.concat(Object.getOwnPropertyNames(n||e));while(n=Object.getPrototypeOf(n||e));g(r,function(t){if("init"!=t){var n=Object.getOwnPropertyDescriptor(e,t)||Object.getOwnPropertyDescriptor(i,t),r=n&&(n.get||n.set);!p.hasOwnProperty(t)&&r?Object.defineProperty(p,t,n):p[t]=v(e[t])?e[t].bind(p):e[t]}}),e.init&&e.init.bind(p)()}),this}),S(this,"mount",function(){i();var e=Q.mixin(W);if(e)for(var n in e)e.hasOwnProperty(n)&&p.mixin(e[n]);if(p._parent&&p._parent.root.isLoop&&s(p._parent),t.fn&&t.fn.call(p,h),l(c,p,C),u(!0),t.attrs&&D(t.attrs,function(t,e){j(O,t,e)}),(t.attrs||b)&&l(p.root,p,C),p.parent&&!y||p.update(_),p.trigger("before-mount"),y&&!b)O=c.firstChild;else{for(;c.firstChild;)O.appendChild(c.firstChild);O.stub&&(O=d.root)}S(p,"root",O),y&&f(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){I(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),S(this,"unmount",function(t){var e,r=O,i=r.parentNode,o=Z.indexOf(p);if(p.trigger("before-unmount"),~o&&Z.splice(o,1),i){if(d)e=k(d),R(e.tags[L])?g(e.tags[L],function(t,n){t._riot_id==p._riot_id&&e.tags[L].splice(n,1)}):e.tags[L]=n;else for(;r.firstChild;)r.removeChild(r.firstChild);t?(x(i,nt),x(i,et)):i.removeChild(r)}this._virts&&g(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),p.trigger("unmount"),u(),p.off("*"),p.isMounted=!1,delete O._tag}),f(c,this,E)}function h(e,n,r,i){r[e]=function(e){var o,s=i._parent,a=i._item;if(!a)for(;s&&!a;)a=s._item,s=s._parent;e=e||t.event,H(e,"currentTarget")&&(e.currentTarget=r),H(e,"target")&&(e.target=e.srcElement),H(e,"which")&&(e.which=e.charCode||e.keyCode),e.item=a,n.call(i,e)===!0||/radio|check/.test(r.type)||(e.preventDefault&&e.preventDefault(),e.returnValue=!1),e.preventUpdate||(o=a?k(s):i,o.update())}}function d(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function m(t,e){g(t,function(t,n){var r=t.dom,i=t.attr,o=mt(t.expr,e),s=t.parent||t.dom.parentNode;if(t.bool?o=!!o:null==o&&(o=""),t.value!==o){if(t.value=o,!i)return o+="",void(s&&(t.parent=s,"TEXTAREA"===s.tagName?(s.value=o,pt||(r.nodeValue=o)):r.nodeValue=o));if("value"===i)return void(r.value!==o&&(r.value=o,j(r,i,o)));if(x(r,i),v(o))h(i,o,r,e);else if("if"==i){var a=t.stub,u=function(){d(a.parentNode,a,r)},c=function(){d(r.parentNode,r,a)};o?a&&(u(),r.inStub=!1,I(r)||$(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(a=t.stub=a||document.createTextNode(""),r.parentNode?c():(e.parent||e).one("updated",c),r.inStub=!0)}else"show"===i?r.style.display=o?"":"none":"hide"===i?r.style.display=o?"none":"":t.bool?(r[i]=o,o&&j(r,i,i),ht&&"selected"===i&&"OPTION"===r.tagName&&(r.__riot1374=o)):(0===o||o&&typeof o!==it)&&(K(i,tt)&&i!=et&&(i=i.slice(tt.length)),j(r,i,o))}})}function g(t,e){for(var n,r=t?t.length:0,i=0;i<r;i++)n=t[i],null!=n&&e(n,i)===!1&&i--;return t}function v(t){return typeof t===st||!1}function y(t){if(t.outerHTML)return t.outerHTML;var e=F("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function b(t,e){if(typeof t.innerHTML!=ot)t.innerHTML=e;else{var n=(new DOMParser).parseFromString(e,"application/xml");t.appendChild(t.ownerDocument.importNode(n.documentElement,!0))}}function _(t){return~lt.indexOf(t)}function w(t){return t&&typeof t===it}function x(t,e){t.removeAttribute(e)}function T(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function C(t,e){return t.getAttribute(e)}function j(t,e,n){var r=ut.exec(e);r&&r[1]?t.setAttributeNS(at,r[1],n):t.setAttribute(e,n)}function E(t){return t.tagName&&Y[C(t,nt)||C(t,et)||t.tagName.toLowerCase()]}function O(t,e,n){var r=n.tags[e];r?(R(r)||r!==t&&(n.tags[e]=[r]),A(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function L(t,e,n){var r,i=t.parent;i&&(r=i.tags[e],R(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):O(t,e,i))}function N(t,e,n,r){var i=new p(t,e,n),o=q(e.root),s=k(r);return i.parent=s,i._parent=r,O(i,o,s),s!==r&&O(i,o,r),e.root.innerHTML="",i}function k(t){for(var e=t;!E(e.root)&&e.parent;)e=e.parent;return e}function S(t,e,n,r){return Object.defineProperty(t,e,M({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function q(t){var e=E(t),n=C(t,"name"),r=n&&!mt.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function M(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var i in e)H(t,i)&&(t[i]=e[i]);return t}function A(t,e){return~t.indexOf(e)}function R(t){return Array.isArray(t)||t instanceof Array}function H(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===ot||n&&n.writable}function P(t){if(!(t instanceof p||t&&typeof t.trigger==st))return t;var e={};for(var n in t)ft.test(n)||(e[n]=t[n]);return e}function $(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)$(t,e),t=t.nextSibling}}function D(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function I(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function F(t,e){return e?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(t)}function B(t,e){return(e||document).querySelectorAll(t)}function X(t,e){return(e||document).querySelector(t)}function U(t){return Object.create(t||null)}function z(t){return C(t,"id")||C(t,"name")}function G(t,e,n){var r,i=z(t),o=function(o){A(n,i)||(r=R(o),o?(!r||r&&!A(o,t))&&(r?o.push(t):e[i]=[o,t]):e[i]=t)};i&&(mt.hasExpr(i)?e.one("mount",function(){i=z(t),o(e[i])}):o(e[i]))}function K(t,e){return t.slice(0,e.length)===e}function V(t,e,n){var r=Y[e],i=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new p(r,{root:t,opts:n},i)),r&&r.mount&&(r.mount(),A(Z,r)||Z.push(r)),r}var Q={version:"v2.6.5",settings:{}},J=0,Z=[],Y={},W="__global_mixin",tt="riot-",et=tt+"tag",nt="data-is",rt="string",it="object",ot="undefined",st="function",at="http://www.w3.org/1999/xlink",ut=/^xlink:(\w+)/,ct=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,ft=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,lt=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],pt=0|(t&&t.document||{}).documentMode,ht=t&&!!t.InstallTrigger;Q.observable=function(t){function e(t,e){for(var n=t.split(" "),r=n.length,i=0;i<r;i++){var o=n[i];o&&e(o,i)}}t=t||{};var n={},r=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(r,i){return"function"!=typeof i?t:(e(r,function(t,e){(n[t]=n[t]||[]).push(i),i.typed=e>0}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,i){return"*"!=r||i?e(r,function(t,e){if(i)for(var r,o=n[t],s=0;r=o&&o[s];++s)r==i&&o.splice(s--,1);else delete n[t]}):n={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(i){for(var o,s=arguments.length-1,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u+1];return e(i,function(e,i){o=r.call(n[e]||[],0);for(var s,u=0;s=o[u];++u)s.busy||(s.busy=1,s.apply(t,s.typed?[e].concat(a):a),o[u]!==s&&u--,s.busy=0);n["*"]&&"*"!=e&&t.trigger.apply(t,["*",e].concat(a))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(e){function n(t){return t.split(/[\/?#]/)}function r(t,e){var n=new RegExp("^"+e[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=t.match(n);if(r)return r.slice(1)}function i(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function o(t){d=i(l,1),N[x](j,d),N[x](E,d),k[x](A,p),t&&l(!0)}function s(){this.$=[],e.observable(this),H.on("stop",this.s.bind(this)),H.on("emit",this.e.bind(this))}function a(t){return t[C](/^\/|\/$/,"")}function u(t){return"string"==typeof t}function c(t){return(t||q.href)[C](b,"")}function f(t){return"#"==m[0]?(t||q.href||"").split(m)[1]||"":(q?c(t):t||"")[C](m,"")}function l(t){var e,n=0==D;if(!(L<=D)&&(D++,$.push(function(){var e=f();(t||e!=g)&&(H[O]("emit",e),g=e)}),n)){for(;e=$.shift();)e();D=0}}function p(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[T]("download")||!e[T]("href")||e.target&&"_self"!=e.target||e.href.indexOf(q.href.match(b)[0])==-1||e.href!=q.href&&(e.href.split("#")[0]==q.href.split("#")[0]||"#"!=m[0]&&0!==c(e.href).indexOf(m)||"#"==m[0]&&e.href.split(m)[0]!=q.href.split(m)[0]||!h(f(e.href),e.title||k.title))||t.preventDefault()}}function h(t,e,n){return S?(t=m+a(t),e=e||k.title,n?S.replaceState(null,e,t):S.pushState(null,e,t),k.title=e,P=!1,l(),P):H[O]("emit",f(t))}var d,m,g,v,y,b=/^.+?\/\/+[^\/]+/,_="EventListener",w="remove"+_,x="add"+_,T="hasAttribute",C="replace",j="popstate",E="hashchange",O="trigger",L=3,N="undefined"!=typeof t&&t,k="undefined"!=typeof document&&document,S=N&&history,q=N&&(S.location||N.location),M=s.prototype,A=k&&k.ontouchstart?"touchstart":"click",R=!1,H=e.observable(),P=!1,$=[],D=0;M.m=function(t,e,n){!u(t)||e&&!u(e)?e?this.r(t,e):this.r("@",t):h(t,e,n||!1)},M.s=function(){this.off("*"),this.$=[]},M.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?v:y)(a(t),a(e));if("undefined"!=typeof n)return this[O].apply(null,[e].concat(n)),P=!0},this)},M.r=function(t,e){"@"!=t&&(t="/"+a(t),this.$.push(t)),this.on(t,e)};var I=new s,F=I.m.bind(I);F.create=function(){var t=new s,e=t.m.bind(t);return e.stop=t.s.bind(t),e},F.base=function(t){m=t||"#",g=f()},F.exec=function(){l(!0)},F.parser=function(t,e){t||e||(v=n,y=r),t&&(v=t),e&&(y=e)},F.query=function(){var t={},e=q.href||g;return e[C](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},F.stop=function(){R&&(N&&(N[w](j,d),N[w](E,d),k[w](A,p)),H[O]("stop"),R=!1)},F.start=function(t){R||(N&&("complete"==document.readyState?o(t):N[x]("load",function(){setTimeout(function(){o(t)},1)})),R=!0)},F.base(),F.parser(),e.route=F}(Q);var dt=function(t){function e(t){return t}function n(t,e){return e||(e=b),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function r(t){if(t===g)return v;var e=t.split(" ");if(2!==e.length||h.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(d,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:v[4],e),e[5]=n(t.length>3?/\\({|})/g:v[5],e),e[6]=n(v[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+p,c),e[8]=t,e}function i(t){return t instanceof RegExp?a(t):b[t]}function o(t){(t||(t=g))!==b[8]&&(b=r(t),a=t===g?e:n,b[9]=a(v[9])),y=t}function s(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:o,get:function(){return y},enumerable:!0}),u=t,o(e)}var a,u,c="g",f=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,h=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),d=/(?=[[\]()*+?.^$|])/g,m={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},g="{ }",v=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),g,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],y=t,b=[];return i.split=function(t,e,n){function r(t){e||s?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function i(t,e,n){var r,i=m[e];for(i.lastIndex=n,n=1;(r=i.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:i.lastIndex}n||(n=b);var o,s,a,u,c=[],f=n[6];for(s=a=f.lastIndex=0;o=f.exec(t);){if(u=o.index,s){if(o[2]){f.lastIndex=i(t,o[2],f.lastIndex);continue}if(!o[3])continue}o[1]||(r(t.slice(a,u)),a=f.lastIndex,f=n[6+(s^=1)],f.lastIndex=a)}return t&&a<t.length&&r(t.slice(a)),c},i.hasExpr=function(t){return b[4].test(t)},i.loopKeys=function(t){var e=t.match(b[9]);return e?{key:e[1],pos:e[2],val:b[0]+e[3].trim()+b[1]}:{val:t.trim()}},i.array=function(t){return t?r(t):b},Object.defineProperty(i,"settings",{set:s,get:function(){return u}}),i.settings="undefined"!=typeof Q&&Q.settings||{},i.set=o,i.R_STRINGS=l,i.R_MLCOMMS=f,i.S_QBLOCKS=p,i}(),mt=function(){function e(t,e){return t?(a[t]||(a[t]=r(t))).call(e,n):t}function n(t,n){e.errorHandler&&(t.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},e.errorHandler(t))}function r(t){var e=i(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function i(t){var e,n=[],r=dt.split(t.replace(l,'"'),1);if(r.length>2||r[0]){var i,s,a=[];for(i=s=0;i<r.length;++i)e=r[i],e&&(e=1&i?o(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[s++]=e);e=s<2?a[0]:"["+a.join(",")+'].join("")'}else e=o(r[1],0,n);return n[0]&&(e=e.replace(p,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function o(t,e,n){function r(e,n){var r,i=1,o=h[e];for(o.lastIndex=n.lastIndex;r=o.exec(t);)if(r[0]===e)++i;else if(!--i)break;n.lastIndex=i?t.length:o.lastIndex}if(t=t.replace(f,function(t,e){return t.length>2&&!e?u+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var i,o=[],a=0;t&&(i=t.match(c))&&!i.index;){var l,p,d=/,|([[{(])|$/g;for(t=RegExp.rightContext,l=i[2]?n[i[2]].slice(1,-1).trim().replace(/\s+/g," "):i[1];p=(i=d.exec(t))[1];)r(p,d);p=t.slice(0,i.index),t=RegExp.rightContext,o[a++]=s(p,1,l)}t=a?a>1?"["+o.join(",")+'].join(" ").trim()':o[0]:s(t,e)}return t}function s(t,e,n){var r;return t=t.replace(m,function(t,e,n,i,o){return n&&(i=r?0:i+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+d+n,i&&(r="."===(o=o[i])||"("===o||"["===o)):i&&(r=!g.test(o.slice(i)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};e.haveRaw=dt.hasRaw,e.hasExpr=dt.hasExpr,e.loopKeys=dt.loopKeys,e.clearCache=function(){a={}},e.errorHandler=null;var u=String.fromCharCode(8279),c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,f=RegExp(dt.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,h={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},d='"in this?this:'+("object"!=typeof t?"global":"window")+").",m=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,g=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return e.version=dt.version="v2.4.2",e}(),gt=function bt(){function bt(n,r){var i=n&&n.match(/^\s*<([-\w]+)/),o=i&&i[1].toLowerCase(),s=F("div",_(o));return n=e(n,r),a.test(o)?s=t(s,n,o):b(s,n),s.stub=!0,s}function t(t,e,n){var r="o"===n[0],i=r?"select>":"table>";if(t.innerHTML="<"+i+e.trim()+"</"+i,i=t.firstChild,r)i.selectedIndex=-1;else{var o=s[n];o&&1===i.childElementCount&&(i=X(o,i))}return i}function e(t,e){if(!n.test(t))return t;var s={};return e=e&&e.replace(i,function(t,e,n){return s[e]=s[e]||n,""}).trim(),t.replace(o,function(t,e,n){return s[e]||n||""}).replace(r,function(t,n){return e||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,o=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,s={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},a=pt&&pt<10?ct:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return bt}(),vt=function(e){if(!t)return{add:function(){},inject:function(){}};var n=function(){var t=F("style");j(t,"type","text/css");var e=X("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),r=n.styleSheet,i="";return Object.defineProperty(e,"styleNode",{value:n,writable:!0}),{add:function(t){i+=t},inject:function(){i&&(r?r.cssText+=i:n.innerHTML+=i,i="")}}}(Q),yt=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(t||{});Q.util={brackets:dt,tmpl:mt},Q.mixin=function(){var t={},e=t[W]={},n=0;return function(r,i,o){if(w(r))return void Q.mixin("__unnamed_"+n++,r,!0);var s=o?e:t;if(!i){if(typeof s[r]===ot)throw new Error("Unregistered mixin: "+r);return s[r]}v(i)?(M(i.prototype,s[r]||{}),s[r]=i):s[r]=M(s[r]||{},i)}}(),Q.tag=function(t,e,n,r,i){return v(r)&&(i=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(v(n)?i=n:vt.add(n)),t=t.toLowerCase(),Y[t]={name:t,tmpl:e,attrs:r,fn:i},t},Q.tag2=function(t,e,n,r,i){return n&&vt.add(n),Y[t]={name:t,tmpl:e,attrs:r,fn:i},t},Q.mount=function(t,e,n){function r(t){var e="";return g(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+nt+'="'+t+'"],['+et+'="'+t+'"]')}),e}function i(){var t=Object.keys(Y);return t+r(t)}function o(t){if(t.tagName){var r=C(t,nt)||C(t,et);e&&r!==e&&(r=e,j(t,nt,e),j(t,et,e));var i=V(t,r||t.tagName.toLowerCase(),n);i&&u.push(i)}else t.length&&g(t,o)}var s,a,u=[];if(vt.inject(),w(e)&&(n=e,e=0),typeof t===rt?("*"===t?t=a=i():t+=r(t.split(/, */)),s=t?B(t):[]):s=t,"*"===e){if(e=a||i(),s.tagName)s=B(e,s);else{var c=[];g(s,function(t){c.push(B(e,t))}),s=c}e=0}return o(s),u},Q.update=function(){return g(Z,function(t){t.update()})},Q.vdom=Z,Q.Tag=p,typeof e===it?r.exports=Q:typeof define===st&&typeof define.amd!==ot?define(function(){return Q}):t.riot=Q}("undefined"!=typeof window?window:void 0)}()}),require.register("superagent/lib/client.js",function(e,n,r){n=t(n,{emitter:"component-emitter"},"superagent"),function(){function t(){}function e(t){if(!g(t))return t;var e=[];for(var n in t)i(e,n,t[n]);return e.join("&")}function i(t,e,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){i(t,e,n)});else if(g(n))for(var r in n)i(t,e+"["+r+"]",n[r]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(n));else null===n&&t.push(encodeURIComponent(e))}function o(t){for(var e,n,r={},i=t.split("&"),o=0,s=i.length;o<s;++o)e=i[o],n=e.indexOf("="),n==-1?r[decodeURIComponent(e)]="":r[decodeURIComponent(e.slice(0,n))]=decodeURIComponent(e.slice(n+1));return r}function s(t){var e,n,r,i,o=t.split(/\r?\n/),s={};o.pop();for(var a=0,u=o.length;a<u;++a)n=o[a],e=n.indexOf(":"),r=n.slice(0,e).toLowerCase(),i=y(n.slice(e+1)),s[r]=i;return s}function a(t){return/[\/+]json\b/.test(t)}function u(t){return t.split(/ *; */).shift()}function c(t){return t.split(/ *; */).reduce(function(t,e){var n=e.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(t[r]=i),t},{})}function f(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=s(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function l(t,e){var n=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new f(n)}catch(r){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=r,t.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,t.statusCode=n.xhr&&n.xhr.status?n.xhr.status:null,n.callback(t)}n.emit("response",e);var i;try{(e.status<200||e.status>=300)&&(i=new Error(e.statusText||"Unsuccessful HTTP response"),i.original=t,i.response=e,i.status=e.status)}catch(r){i=r}i?n.callback(i,e):n.callback(null,e)})}function p(t,e){var n=v("DELETE",t);return e&&n.end(e),n}var h;"undefined"!=typeof window?h=window:"undefined"!=typeof self?h=self:(console.warn("Using browser-only version of superagent in non-browser environment"),h=this);var d=n("emitter"),m=n("./request-base"),g=n("./is-object"),v=r.exports=n("./request").bind(null,l);v.getXHR=function(){if(!(!h.XMLHttpRequest||h.location&&"file:"==h.location.protocol&&h.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only verison of superagent could not find XHR")};var y="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=e,v.parseString=o,v.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":e,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},f.prototype.get=function(t){return this.header[t.toLowerCase()]},f.prototype._setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=u(e);var n=c(e);for(var r in n)this[r]=n[r]},f.prototype._parseBody=function(t){var e=v.parse[this.type];return!e&&a(this.type)&&(e=v.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},f.prototype._setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},f.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=e,i.url=n,i},v.Response=f,d(l.prototype);for(var b in m)l.prototype[b]=m[b];l.prototype.type=function(t){return this.set("Content-Type",v.types[t]||t),this},l.prototype.responseType=function(t){return this._responseType=t,this},l.prototype.accept=function(t){return this.set("Accept",v.types[t]||t),this},l.prototype.auth=function(t,e,n){switch(n||(n={type:"basic"}),n.type){case"basic":var r=btoa(t+":"+e);this.set("Authorization","Basic "+r);break;case"auto":this.username=t,this.password=e}return this},l.prototype.query=function(t){return"string"!=typeof t&&(t=e(t)),t&&this._query.push(t),this},l.prototype.attach=function(t,e,n){return this._getFormData().append(t,e,n||e.name),this},l.prototype._getFormData=function(){return this._formData||(this._formData=new h.FormData),this._formData},l.prototype.callback=function(t,e){var n=this._callback;this.clearTimeout(),n(t,e)},l.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},l.prototype._timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},l.prototype._appendQueryString=function(){var t=this._query.join("&");t&&(this.url+=~this.url.indexOf("?")?"&"+t:"?"+t)},l.prototype.end=function(e){var n=this,r=this.xhr=v.getXHR(),i=this._timeout,o=this._formData||this._data;this._callback=e||t,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(e){t=0}if(0==t){if(n.timedout)return n._timeoutError();if(n._aborted)return;return n.crossDomainError()}n.emit("end")}};var s=function(t,e){e.total>0&&(e.percent=e.loaded/e.total*100),e.direction=t,n.emit("progress",e)};if(this.hasListeners("progress"))try{r.onprogress=s.bind(null,"download"),r.upload&&(r.upload.onprogress=s.bind(null,"upload"))}catch(u){}if(i&&!this._timer&&(this._timer=setTimeout(function(){n.timedout=!0,n.abort()},i)),this._appendQueryString(),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof o&&!this._isHost(o)){var c=this._header["content-type"],f=this._serializer||v.serialize[c?c.split(";")[0]:""];!f&&a(c)&&(f=v.serialize["application/json"]),f&&(o=f(o))}for(var l in this.header)null!=this.header[l]&&r.setRequestHeader(l,this.header[l]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof o?o:null),
this},v.Request=l,v.get=function(t,e,n){var r=v("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},v.head=function(t,e,n){var r=v("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},v.options=function(t,e,n){var r=v("OPTIONS",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},v.del=p,v["delete"]=p,v.patch=function(t,e,n){var r=v("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},v.post=function(t,e,n){var r=v("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},v.put=function(t,e,n){var r=v("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r}}()}),require.register("superagent/lib/is-object.js",function(e,n,r){n=t(n,{emitter:"component-emitter"},"superagent"),function(){function t(t){return null!==t&&"object"==typeof t}r.exports=t}()}),require.register("superagent/lib/request-base.js",function(e,n,r){n=t(n,{emitter:"component-emitter"},"superagent"),function(){var t=n("./is-object");e.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},e.parse=function(t){return this._parser=t,this},e.serialize=function(t){return this._serializer=t,this},e.timeout=function(t){return this._timeout=t,this},e.then=function(t,e){if(!this._fullfilledPromise){var n=this;this._fullfilledPromise=new Promise(function(t,e){n.end(function(n,r){n?e(n):t(r)})})}return this._fullfilledPromise.then(t,e)},e["catch"]=function(t){return this.then(void 0,t)},e.use=function(t){return t(this),this},e.get=function(t){return this._header[t.toLowerCase()]},e.getHeader=e.get,e.set=function(e,n){if(t(e)){for(var r in e)this.set(r,e[r]);return this}return this._header[e.toLowerCase()]=n,this.header[e]=n,this},e.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},e.field=function(e,n){if(null===e||void 0===e)throw new Error(".field(name, val) name can not be empty");if(t(e)){for(var r in e)this.field(r,e[r]);return this}if(null===n||void 0===n)throw new Error(".field(name, val) val can not be empty");return this._getFormData().append(e,n),this},e.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},e.withCredentials=function(){return this._withCredentials=!0,this},e.redirects=function(t){return this._maxRedirects=t,this},e.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},e._isHost=function(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},e.send=function(e){var n=t(e),r=this._header["content-type"];if(n&&t(this._data))for(var i in e)this._data[i]=e[i];else"string"==typeof e?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+e:e:this._data=(this._data||"")+e):this._data=e;return!n||this._isHost(e)?this:(r||this.type("json"),this)}}()}),require.register("superagent/lib/request.js",function(e,n,r){n=t(n,{emitter:"component-emitter"},"superagent"),function(){function t(t,e,n){return"function"==typeof n?new t("GET",e).end(n):2==arguments.length?new t("GET",e):new t(e,n)}r.exports=t}()}),require.alias("riot/riot.js","riot"),require.alias("superagent/lib/client.js","superagent"),require.alias("superagent/lib/client.js","superagent/lib/node/index"),require.alias("superagent/lib/client.js","superagent/lib/node/index.js"),require.register("___globals___",function(t,e,n){})}(),require("___globals___");