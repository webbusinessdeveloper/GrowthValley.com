window.Modernizr=function(e,t,n){function i(){f.input=function(e){for(var t=0,n=e.length;n>t;t++)R[e[t]]=e[t]in E;return R}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var i,o,s,r=0,a=e.length;a>r;r++)E.setAttribute("type",o=e[r]),i="text"!==E.type,i&&(E.value=T,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(m.appendChild(E),s=t.defaultView,i=s.getComputedStyle&&"textfield"!==s.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,m.removeChild(E)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?i=E.checkValidity&&E.checkValidity()===!1:/^color$/.test(o)?(m.appendChild(E),m.offsetWidth,i=E.value!=T,m.removeChild(E)):i=E.value!=T)),_[e[r]]=!!i;return _}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function o(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+D.join(n+" ")+n).split(" ");return s(i,t)}function s(e,t){for(var i in e)if(b[e[i]]!==n)return"pfx"==t?e[i]:!0;return!1}function r(e,t){return!!~(""+e).indexOf(t)}function a(e,t){return typeof e===t}function l(e,t){return c(y.join(e+";")+(t||""))}function c(e){b.cssText=e}var u,d,h="2.0.6",f={},p=!0,m=t.documentElement,g=(t.head||t.getElementsByTagName("head")[0],"modernizr"),v=t.createElement(g),b=v.style,E=t.createElement("input"),T=":)",C=Object.prototype.toString,y=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),D="Webkit Moz O ms Khtml".split(" "),I={svg:"http://www.w3.org/2000/svg"},O={},_={},R={},w=[],k=function(e,n,i,o){var s,r,a,l=t.createElement("div");if(parseInt(i,10))for(;i--;)a=t.createElement("div"),a.id=o?o[i]:g+(i+1),l.appendChild(a);return s=["&shy;","<style>",e,"</style>"].join(""),l.id=g,l.innerHTML+=s,m.appendChild(l),r=n(l,e),l.parentNode.removeChild(l),!!r},x=function(t){if(e.matchMedia)return matchMedia(t).matches;var n;return k("@media "+t+" { #"+g+" { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),n},K=function(){function e(e,o){o=o||t.createElement(i[e]||"div"),e="on"+e;var s=e in o;return s||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),s=a(o[e],"function"),a(o[e],n)||(o[e]=n),o.removeAttribute(e))),o=null,s}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),S={}.hasOwnProperty;d=a(S,n)||a(S.call,n)?function(e,t){return t in e&&a(e.constructor.prototype[t],n)}:function(e,t){return S.call(e,t)};!function(n,i){var o=n.join(""),s=i.length;k(o,function(n,i){for(var o=t.styleSheets[t.styleSheets.length-1],r=o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"",a=n.childNodes,l={};s--;)l[a[s].id]=a[s];f.touch="ontouchstart"in e||9===l.touch.offsetTop,f.csstransforms3d=9===l.csstransforms3d.offsetLeft,f.generatedcontent=l.generatedcontent.offsetHeight>=1,f.fontface=/src/i.test(r)&&0===r.indexOf(i.split(" ")[0])},s,i)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",y.join("touch-enabled),("),g,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",y.join("transform-3d),("),g,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',T,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);O.flexbox=function(){function e(e,t,n,i){e.style.cssText=y.join(t+":"+n+";")+(i||"")}function n(e,t,n,i){t+=":",e.style.cssText=(t+y.join(n+";"+t)).slice(0,-t.length)+(i||"")}var i=t.createElement("div"),o=t.createElement("div");n(i,"display","box","width:42px;padding:0;"),e(o,"box-flex","1","width:10px;"),i.appendChild(o),m.appendChild(i);var s=42===o.offsetWidth;return i.removeChild(o),m.removeChild(i),s},O.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},O.canvastext=function(){return!!f.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},O.webgl=function(){return!!e.WebGLRenderingContext},O.touch=function(){return f.touch},O.geolocation=function(){return!!navigator.geolocation},O.postmessage=function(){return!!e.postMessage},O.websqldatabase=function(){var t=!!e.openDatabase;return t},O.indexedDB=function(){for(var t=-1,n=D.length;++t<n;)if(e[D[t].toLowerCase()+"IndexedDB"])return!0;return!!e.indexedDB},O.hashchange=function(){return K("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},O.history=function(){return!!e.history&&!!history.pushState},O.draganddrop=function(){return K("dragstart")&&K("drop")},O.websockets=function(){for(var t=-1,n=D.length;++t<n;)if(e[D[t]+"WebSocket"])return!0;return"WebSocket"in e},O.rgba=function(){return c("background-color:rgba(150,255,150,.5)"),r(b.backgroundColor,"rgba")},O.hsla=function(){return c("background-color:hsla(120,40%,100%,.5)"),r(b.backgroundColor,"rgba")||r(b.backgroundColor,"hsla")},O.multiplebgs=function(){return c("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},O.backgroundsize=function(){return o("backgroundSize")},O.borderimage=function(){return o("borderImage")},O.borderradius=function(){return o("borderRadius")},O.boxshadow=function(){return o("boxShadow")},O.textshadow=function(){return""===t.createElement("div").style.textShadow},O.opacity=function(){return l("opacity:.55"),/^0.55$/.test(b.opacity)},O.cssanimations=function(){return o("animationName")},O.csscolumns=function(){return o("columnCount")},O.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return c((e+y.join(t+e)+y.join(n+e)).slice(0,-e.length)),r(b.backgroundImage,"gradient")},O.cssreflections=function(){return o("boxReflect")},O.csstransforms=function(){return!!s(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},O.csstransforms3d=function(){var e=!!s(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return e&&"webkitPerspective"in m.style&&(e=f.csstransforms3d),e},O.csstransitions=function(){return o("transitionProperty")},O.fontface=function(){return f.fontface},O.generatedcontent=function(){return f.generatedcontent},O.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType){n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"');var i='video/mp4; codecs="avc1.42E01E';n.h264=e.canPlayType(i+'"')||e.canPlayType(i+', mp4a.40.2"'),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(o){}return n},O.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"'),n.mp3=e.canPlayType("audio/mpeg;"),n.wav=e.canPlayType('audio/wav; codecs="1"'),n.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;"))}catch(i){}return n},O.localstorage=function(){try{return!!localStorage.getItem}catch(e){return!1}},O.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(e){return!1}},O.webworkers=function(){return!!e.Worker},O.applicationcache=function(){return!!e.applicationCache},O.svg=function(){return!!t.createElementNS&&!!t.createElementNS(I.svg,"svg").createSVGRect},O.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==I.svg},O.smil=function(){return!!t.createElementNS&&/SVG/.test(C.call(t.createElementNS(I.svg,"animate")))},O.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(C.call(t.createElementNS(I.svg,"clipPath")))};for(var N in O)d(O,N)&&(u=N.toLowerCase(),f[u]=O[N](),w.push((f[u]?"":"no-")+u));return f.input||i(),f.addTest=function(e,t){if("object"==typeof e)for(var i in e)d(e,i)&&f.addTest(i,e[i]);else{if(e=e.toLowerCase(),f[e]!==n)return;t="boolean"==typeof t?t:!!t(),m.className+=" "+(t?"":"no-")+e,f[e]=t}return f},c(""),v=E=null,e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function i(e){for(var t=-1;++t<l;)e.createElement(a[t])}e.iepp=e.iepp||{};var o,s=e.iepp,r=s.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",a=r.split("|"),l=a.length,c=new RegExp("(^|\\s)("+r+")","gi"),u=new RegExp("<(/*)("+r+")","gi"),d=/^\s*[\{\}]\s*$/,h=new RegExp("(^|[^\\n]*?\\s)("+r+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),f=t.createDocumentFragment(),p=t.documentElement,m=p.firstChild,g=t.createElement("body"),v=t.createElement("style"),b=/print|all/;s.getCSS=function(e,t){if(e+""===n)return"";for(var i,o=-1,r=e.length,a=[];++o<r;)i=e[o],i.disabled||(t=i.media||t,b.test(t)&&a.push(s.getCSS(i.imports,t),i.cssText),t="all");return a.join("")},s.parseCSS=function(e){for(var t,n=[];null!=(t=h.exec(e));)n.push(((d.exec(t[1])?"\n":t[1])+t[2]+t[3]).replace(c,"$1.iepp_$2")+t[4]);return n.join("\n")},s.writeHTML=function(){var e=-1;for(o=o||t.body;++e<l;)for(var n=t.getElementsByTagName(a[e]),i=n.length,s=-1;++s<i;)n[s].className.indexOf("iepp_")<0&&(n[s].className+=" iepp_"+a[e]);f.appendChild(o),p.appendChild(g),g.className=o.className,g.id=o.id,g.innerHTML=o.innerHTML.replace(u,"<$1font")},s._beforePrint=function(){v.styleSheet.cssText=s.parseCSS(s.getCSS(t.styleSheets,"all")),s.writeHTML()},s.restoreHTML=function(){g.innerHTML="",p.removeChild(g),p.appendChild(o)},s._afterPrint=function(){s.restoreHTML(),v.styleSheet.cssText=""},i(t),i(f),s.disablePP||(m.insertBefore(v,m.firstChild),v.media="print",v.className="iepp-printshim",e.attachEvent("onbeforeprint",s._beforePrint),e.attachEvent("onafterprint",s._afterPrint))}(e,t),f._version=h,f._prefixes=y,f._domPrefixes=D,f.mq=x,f.hasEvent=K,f.testProp=function(e){return s([e])},f.testAllProps=o,f.testStyles=k,f.prefixed=function(e){return o(e,"pfx")},m.className=m.className.replace(/\bno-js\b/,"")+(p?" js "+w.join(" "):""),f}(this,this.document),function(e,t){function n(){b(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=t,!t){var i,o,s=e.document,r=s.documentElement,a=[],l=[],c=[],u={},d=30,h=s.getElementsByTagName("head")[0]||r,f=h.getElementsByTagName("link"),p=[],m=function(){for(var t,n,i,o,s=f,r=s.length,a=0;r>a;a++)t=s[a],n=t.href,i=t.media,o=t.rel&&"stylesheet"===t.rel.toLowerCase(),!!n&&o&&!u[n]&&(/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(n)&&n.replace(RegExp.$1,"").split("/")[0]!==e.location.host?u[n]=!0:p.push({href:n,media:i}));g()},g=function(){if(p.length){var e=p.shift();E(e.href,function(t){v(t,e.href,e.media),u[e.href]=!0,g()})}},v=function(e,t,n){var i,o,s,r,c,u=e.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),d=u&&u.length||0,t=t.substring(0,t.lastIndexOf("/")),h=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},f=!d&&n,p=0;for(t.length&&(t+="/"),f&&(d=1);d>p;p++)for(i=0,f?(o=n,l.push(h(e))):(o=u[p].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,l.push(RegExp.$2&&h(RegExp.$2))),r=o.split(","),c=r.length;c>i;i++)s=r[i],a.push({media:s.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:l.length-1,minw:s.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:s.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)});b()},b=function(e){var t="clientWidth",n=r[t],u="CSS1Compat"===s.compatMode&&n||s.body[t]||n,p={},m=s.createDocumentFragment(),g=f[f.length-1],v=(new Date).getTime();if(e&&i&&d>v-i)clearTimeout(o),o=setTimeout(b,d);else{i=v;for(var E in a){var T=a[E];(!T.minw&&!T.maxw||(!T.minw||T.minw&&u>=T.minw)&&(!T.maxw||T.maxw&&u<=T.maxw))&&(p[T.media]||(p[T.media]=[]),p[T.media].push(l[T.rules]))}for(var E in c)c[E]&&c[E].parentNode===h&&h.removeChild(c[E]);for(var E in p){var C=s.createElement("style"),y=p[E].join("\n");C.type="text/css",C.media=E,C.styleSheet?C.styleSheet.cssText=y:C.appendChild(s.createTextNode(y)),m.appendChild(C),c.push(C)}h.insertBefore(m,g.nextSibling)}},E=function(e,t){var n=T();if(n){if(n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(200==n.status||304==n.status)&&t(n.responseText)},4==n.readyState)return;n.send()}},T=function(){for(var e=!1,t=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],n=t.length;n--;){try{e=t[n]()}catch(i){continue}break}return function(){return e}}();m(),respond.update=m,e.addEventListener?e.addEventListener("resize",n,!1):e.attachEvent&&e.attachEvent("onresize",n)}}(this,Modernizr.mq("only all")),function(e,t,n){function i(e){return!e||"loaded"==e||"complete"==e}function o(){for(var e=1,t=-1;v.length-++t&&(!v[t].s||(e=v[t].r)););e&&a()}function s(e){var n,s=t.createElement("script");s.src=e.s,s.onreadystatechange=s.onload=function(){!n&&i(s.readyState)&&(n=1,o(),s.onload=s.onreadystatechange=null)},p(function(){n||(n=1,o())},h.errorTimeout),e.e?s.onload():m.parentNode.insertBefore(s,m)}function r(e){var n,i=t.createElement("link");if(i.href=e.s,i.rel="stylesheet",i.type="text/css",e.e||!D&&!E)i.onload=function(){n||(n=1,p(function(){o()},0))},e.e&&i.onload();else{var s=function(e){p(function(){if(!n)try{e.sheet.cssRules.length?(n=1,o()):s(e)}catch(t){1e3==t.code||"security"==t.message||"denied"==t.message?(n=1,p(function(){o()},0)):s(e)}},0)};s(i)}p(function(){n||(n=1,o())},h.errorTimeout),!e.e&&m.parentNode.insertBefore(i,m)}function a(){var e=v.shift();b=1,e?e.t?p(function(){"c"==e.t?r(e):s(e)},0):(e(),o()):b=0}function l(e,n,s,r,l,c){function u(){!f&&i(d.readyState)&&(g.r=f=1,!b&&o(),d.onload=d.onreadystatechange=null,p(function(){C.removeChild(d)},0))}var d=t.createElement(e),f=0,g={t:s,s:n,e:c};d.src=d.data=n,!T&&(d.style.display="none"),d.width=d.height="0","object"!=e&&(d.type=s),d.onload=d.onreadystatechange=u,"img"==e?d.onerror=u:"script"==e&&(d.onerror=function(){g.e=g.r=1,a()}),v.splice(r,0,g),C.insertBefore(d,T?null:m),p(function(){f||(C.removeChild(d),g.r=g.e=f=1,o())},h.errorTimeout)}function c(e,t,n){var i="c"==t?_:O;return b=0,t=t||"j",k(e)?l(i,e,t,this.i++,f,n):(v.splice(this.i++,0,e),1==v.length&&a()),this}function u(){var e=h;return e.loader={load:c,i:0},e}var d,h,f=t.documentElement,p=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],b=0,E="MozAppearance"in f.style,T=E&&!!t.createRange().compareNode,C=T?f:m.parentNode,y=e.opera&&"[object Opera]"==g.call(e.opera),D="webkitAppearance"in f.style,I=D&&"async"in t.createElement("script"),O=E?"object":y||I?"img":"script",_=D?"img":O,R=Array.isArray||function(e){return"[object Array]"==g.call(e)},w=function(e){return Object(e)===e},k=function(e){return"string"==typeof e},x=function(e){return"[object Function]"==g.call(e)},K=[],S={};h=function(e){function t(e){var t,n,i=e.split("!"),o=K.length,s=i.pop(),r=i.length,a={url:s,origUrl:s,prefixes:i};for(n=0;r>n;n++)t=S[i[n]],t&&(a=t(a));for(n=0;o>n;n++)a=K[n](a);return a}function i(e,i,o,s,r){var a=t(e),l=a.autoCallback;if(!a.bypass){if(i&&(i=x(i)?i:i[e]||i[s]||i[e.split("/").pop().split("?")[0]]),a.instead)return a.instead(e,i,o,s,r);o.load(a.url,a.forceCSS||!a.forceJS&&/css$/.test(a.url)?"c":n,a.noexec),(x(i)||x(l))&&o.load(function(){u(),i&&i(a.origUrl,r,s),l&&l(a.origUrl,r,s)})}}function o(e,t){function n(e){if(k(e))i(e,l,t,0,s);else if(w(e))for(o in e)e.hasOwnProperty(o)&&i(e[o],l,t,o,s)}var o,s=!!e.test,r=s?e.yep:e.nope,a=e.load||e.both,l=e.callback;n(r),n(a),e.complete&&t.load(e.complete)}var s,r,a=this.yepnope.loader;if(k(e))i(e,0,a,0);else if(R(e))for(s=0;s<e.length;s++)r=e[s],k(r)?i(r,0,a,0):R(r)?h(r):w(r)&&o(r,a);else w(e)&&o(e,a)},h.addPrefix=function(e,t){S[e]=t},h.addFilter=function(e){K.push(e)},h.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};