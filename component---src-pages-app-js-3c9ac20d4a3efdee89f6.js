(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[112],{70389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I18nextProvider=function(e){var t=e.i18n,n=e.defaultNS,o=e.children,i=(0,r.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,r.createElement)(a.I18nContext.Provider,{value:i},o)};var r=n(67294),a=n(94475)},43922:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.Trans=function(e){var t=e.children,n=e.count,r=e.parent,f=e.i18nKey,p=e.context,d=e.tOptions,g=void 0===d?{}:d,b=e.values,y=e.defaults,v=e.components,O=e.ns,m=e.i18n,h=e.t,j=e.shouldUnescape,P=(0,o.default)(e,s),w=(0,i.useContext)(u.I18nContext)||{},I=w.i18n,E=w.defaultNS,x=m||I||(0,u.getI18n)(),S=h||x.t.bind(x)||function(e){return e};return(0,c.Trans)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:t,count:n,parent:r,i18nKey:f,context:p,tOptions:g,values:b,defaults:y,components:v,ns:O||S.ns||E||x.options&&x.options.defaultNS,i18n:x,t:h,shouldUnescape:j},P))},Object.defineProperty(t,"nodesToString",{enumerable:!0,get:function(){return c.nodesToString}});var a=r(n(38416)),o=r(n(70215)),i=n(67294),c=n(65788),u=n(94475),s=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}},65788:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.nodesToString=m,t.Trans=function(e){var t=e.children,n=e.count,r=e.parent,i=e.i18nKey,p=e.context,g=e.tOptions,h=void 0===g?{}:g,j=e.values,P=e.defaults,w=e.components,I=e.ns,E=e.i18n,x=e.t,S=e.shouldUnescape,N=(0,a.default)(e,d),k=E||(0,f.getI18n)();if(!k)return(0,s.warnOnce)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var _=x||k.t.bind(k)||function(e){return e};p&&(h.context=p);var D=b(b({},(0,l.getDefaults)()),k.options&&k.options.react),C=I||_.ns||k.options&&k.options.defaultNS;C="string"==typeof C?[C]:C||["translation"];var R=P||m(t,D)||D.transEmptyNodeValue||i,T=D.hashTransKey,L=i||(T?T(R):R),M=j?h.interpolation:{interpolation:b(b({},h.interpolation),{},{prefix:"#$?",suffix:"?$#"})},U=b(b(b(b({},h),{},{count:n},j),M),{},{defaultValue:R,ns:C}),A=L?_(L,U):R,K=function(e,t,n,r,a,i){if(""===t)return[];var s=r.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(s.join("|")).test(t);if(!e&&!l)return[t];var f={};function p(e){O(e).forEach((function(e){"string"!=typeof e&&(y(e)?p(v(e)):"object"!==(0,o.default)(e)||(0,c.isValidElement)(e)||Object.assign(f,e))}))}p(e);var d=u.default.parse("<0>".concat(t,"</0>")),g=b(b({},f),a);function m(e,t,n){var r=v(e),a=j(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,c.isValidElement)(e)}))}(r)&&0===a.length?r:a}function h(e,t,n,r,a){e.dummy&&(e.children=t),n.push((0,c.cloneElement)(e,b(b({},e.props),{},{key:r}),a?void 0:t))}function j(t,a,u){var f=O(t);return O(a).reduce((function(t,a,p){var d,v,O,P=a.children&&a.children[0]&&a.children[0].content&&n.services.interpolator.interpolate(a.children[0].content,g,n.language);if("tag"===a.type){var w=f[parseInt(a.name,10)];!w&&1===u.length&&u[0][a.name]&&(w=u[0][a.name]),w||(w={});var I=0!==Object.keys(a.attrs).length?(d={props:a.attrs},(O=b({},v=w)).props=Object.assign(d.props,v.props),O):w,E=(0,c.isValidElement)(I),x=E&&y(a,!0)&&!a.voidElement,S=l&&"object"===(0,o.default)(I)&&I.dummy&&!E,N="object"===(0,o.default)(e)&&null!==e&&Object.hasOwnProperty.call(e,a.name);if("string"==typeof I){var k=n.services.interpolator.interpolate(I,g,n.language);t.push(k)}else if(y(I)||x){h(I,m(I,a,u),t,p)}else if(S){var _=j(f,a.children,u);t.push((0,c.cloneElement)(I,b(b({},I.props),{},{key:p}),_))}else if(Number.isNaN(parseFloat(a.name))){if(N)h(I,m(I,a,u),t,p,a.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(a.name)>-1)if(a.voidElement)t.push((0,c.createElement)(a.name,{key:"".concat(a.name,"-").concat(p)}));else{var D=j(f,a.children,u);t.push((0,c.createElement)(a.name,{key:"".concat(a.name,"-").concat(p)},D))}else if(a.voidElement)t.push("<".concat(a.name," />"));else{var C=j(f,a.children,u);t.push("<".concat(a.name,">").concat(C,"</").concat(a.name,">"))}}else if("object"!==(0,o.default)(I)||E)1===a.children.length&&P?t.push((0,c.cloneElement)(I,b(b({},I.props),{},{key:p}),P)):t.push((0,c.cloneElement)(I,b(b({},I.props),{},{key:p})));else{var R=a.children[0]?P:null;R&&t.push(R)}}else if("text"===a.type){var T=r.transWrapTextNodes,L=i?r.unescape(n.services.interpolator.interpolate(a.content,g,n.language)):n.services.interpolator.interpolate(a.content,g,n.language);T?t.push((0,c.createElement)(T,{key:"".concat(a.name,"-").concat(p)},L)):t.push(L)}return t}),[])}var P=j([{dummy:!0,children:e||[]}],d,O(e||[]));return v(P[0])}(w||t,A,k,D,U,S),z=void 0!==r?r:D.defaultTransParent;return z?(0,c.createElement)(z,N,K):K};var a=r(n(70215)),o=r(n(18698)),i=r(n(38416)),c=n(67294),u=r(n(72903)),s=n(81743),l=n(62879),f=n(70456),p=["format"],d=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function v(e){return e?e.props?e.props.children:e.children:[]}function O(e){return Array.isArray(e)?e:[e]}function m(e,t){if(!e)return"";var n="",r=O(e),i=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if((0,c.isValidElement)(e)){var u=Object.keys(e.props).length,l=i.indexOf(e.type)>-1,f=e.props.children;if(!f&&l&&0===u)n+="<".concat(e.type,"/>");else if(f||l&&0===u)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(l&&1===u&&"string"==typeof f)n+="<".concat(e.type,">").concat(f,"</").concat(e.type,">");else{var d=m(f,t);n+="<".concat(r,">").concat(d,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)(0,s.warn)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,o.default)(e)){var g=e.format,b=(0,a.default)(e,p),y=Object.keys(b);if(1===y.length){var v=g?"".concat(y[0],", ").concat(g):y[0];n+="{{".concat(v,"}}")}else(0,s.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,s.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}},56404:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.Translation=function(e){var t=e.ns,n=e.children,r=(0,o.default)(e,c),u=(0,i.useTranslation)(t,r),s=(0,a.default)(u,3),l=s[0],f=s[1],p=s[2];return n(l,{i18n:f,lng:f.language},p)};var a=r(n(27424)),o=r(n(70215)),i=n(24329),c=["ns","children"]},94475:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.composeInitialProps=function(e){return function(t){return new Promise((function(n){var r=b();e.getInitialProps?e.getInitialProps(t).then((function(e){n(p(p({},e),r))})):n(r)}))}},t.getInitialProps=b,Object.defineProperty(t,"getDefaults",{enumerable:!0,get:function(){return u.getDefaults}}),Object.defineProperty(t,"setDefaults",{enumerable:!0,get:function(){return u.setDefaults}}),Object.defineProperty(t,"getI18n",{enumerable:!0,get:function(){return s.getI18n}}),Object.defineProperty(t,"setI18n",{enumerable:!0,get:function(){return s.setI18n}}),Object.defineProperty(t,"initReactI18next",{enumerable:!0,get:function(){return l.initReactI18next}}),t.ReportNamespaces=t.I18nContext=void 0;var a=r(n(38416)),o=r(n(56690)),i=r(n(89728)),c=n(67294),u=n(62879),s=n(70456),l=n(2434);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=(0,c.createContext)();t.I18nContext=d;var g=function(){function e(){(0,o.default)(this,e),this.usedNamespaces={}}return(0,i.default)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function b(){var e=(0,s.getI18n)(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}t.ReportNamespaces=g},62879:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.setDefaults=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c=i(i({},c),e)},t.getDefaults=function(){return c};var a=r(n(38416));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:n(77153).unescape}},70456:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.setI18n=function(e){n=e},t.getI18n=function(){return n}},31960:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Trans",{enumerable:!0,get:function(){return r.Trans}}),Object.defineProperty(t,"TransWithoutContext",{enumerable:!0,get:function(){return a.Trans}}),Object.defineProperty(t,"useTranslation",{enumerable:!0,get:function(){return o.useTranslation}}),Object.defineProperty(t,"withTranslation",{enumerable:!0,get:function(){return i.withTranslation}}),Object.defineProperty(t,"Translation",{enumerable:!0,get:function(){return c.Translation}}),Object.defineProperty(t,"I18nextProvider",{enumerable:!0,get:function(){return u.I18nextProvider}}),Object.defineProperty(t,"withSSR",{enumerable:!0,get:function(){return s.withSSR}}),Object.defineProperty(t,"useSSR",{enumerable:!0,get:function(){return l.useSSR}}),Object.defineProperty(t,"I18nContext",{enumerable:!0,get:function(){return f.I18nContext}}),Object.defineProperty(t,"initReactI18next",{enumerable:!0,get:function(){return f.initReactI18next}}),Object.defineProperty(t,"setDefaults",{enumerable:!0,get:function(){return f.setDefaults}}),Object.defineProperty(t,"getDefaults",{enumerable:!0,get:function(){return f.getDefaults}}),Object.defineProperty(t,"setI18n",{enumerable:!0,get:function(){return f.setI18n}}),Object.defineProperty(t,"getI18n",{enumerable:!0,get:function(){return f.getI18n}}),Object.defineProperty(t,"composeInitialProps",{enumerable:!0,get:function(){return f.composeInitialProps}}),Object.defineProperty(t,"getInitialProps",{enumerable:!0,get:function(){return f.getInitialProps}}),t.selectOrdinal=t.plural=t.select=t.number=t.time=t.date=void 0;var r=n(43922),a=n(65788),o=n(24329),i=n(86190),c=n(56404),u=n(70389),s=n(7251),l=n(40707),f=n(94475);t.date=function(){return""};t.time=function(){return""};t.number=function(){return""};t.select=function(){return""};t.plural=function(){return""};t.selectOrdinal=function(){return""}},2434:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initReactI18next=void 0;var r=n(62879),a=n(70456),o={type:"3rdParty",init:function(e){(0,r.setDefaults)(e.options.react),(0,a.setI18n)(e)}};t.initReactI18next=o},77153:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unescape=void 0;var n=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,r={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},a=function(e){return r[e]};t.unescape=function(e){return e.replace(n,a)}},40707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSSR=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.i18n,i=(0,r.useContext)(a.I18nContext)||{},c=i.i18n,u=o||c||(0,a.getI18n)();if(u.options&&u.options.isClone)return;e&&!u.initializedStoreOnce&&(u.services.resourceStore.data=e,u.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),u.options.ns),u.initializedStoreOnce=!0,u.isInitialized=!0);t&&!u.initializedLanguageOnce&&(u.changeLanguage(t),u.initializedLanguageOnce=!0)};var r=n(67294),a=n(94475)},24329:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.useTranslation=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,i.useContext)(c.I18nContext)||{},o=r.i18n,s=r.defaultNS,p=n||o||(0,c.getI18n)();p&&!p.reportNamespaces&&(p.reportNamespaces=new c.ReportNamespaces);if(!p){(0,u.warnOnce)("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[d,{},!1];return g.t=d,g.i18n={},g.ready=!1,g}p.options.react&&void 0!==p.options.react.wait&&(0,u.warnOnce)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=l(l(l({},(0,c.getDefaults)()),p.options.react),t),y=b.useSuspense,v=b.keyPrefix,O=e||s||p.options&&p.options.defaultNS;O="string"==typeof O?[O]:O||["translation"],p.reportNamespaces.addUsedNamespaces&&p.reportNamespaces.addUsedNamespaces(O);var m=(p.isInitialized||p.initializedStoreOnce)&&O.every((function(e){return(0,u.hasLoadedNamespace)(e,p,b)}));function h(){return p.getFixedT(null,"fallback"===b.nsMode?O:O[0],v)}var j=(0,i.useState)(h),P=(0,a.default)(j,2),w=P[0],I=P[1],E=O.join(),x=f(E),S=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){S.current&&I(h)}return S.current=!0,m||y||(0,u.loadNamespaces)(p,O,(function(){S.current&&I(h)})),m&&x&&x!==E&&S.current&&I(h),e&&p&&p.on(e,n),t&&p&&p.store.on(t,n),function(){S.current=!1,e&&p&&e.split(" ").forEach((function(e){return p.off(e,n)})),t&&p&&t.split(" ").forEach((function(e){return p.store.off(e,n)}))}}),[p,E]);var N=(0,i.useRef)(!0);(0,i.useEffect)((function(){S.current&&!N.current&&I(h),N.current=!1}),[p,v]);var k=[w,p,m];if(k.t=w,k.i18n=p,k.ready=m,m)return k;if(!m&&!y)return k;throw new Promise((function(e){(0,u.loadNamespaces)(p,O,(function(){e()}))}))};var a=r(n(27424)),o=r(n(38416)),i=n(67294),c=n(94475),u=n(81743);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t){var n=(0,i.useRef)();return(0,i.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current}},81743:function(e,t){"use strict";function n(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.warn=n,t.warnOnce=a,t.loadNamespaces=function(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))},t.hasLoadedNamespace=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return a("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;if(!r)return o(e,t,n);return t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}})},t.getDisplayName=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")};var r={};function a(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"==typeof t[0]&&r[t[0]]||("string"==typeof t[0]&&(r[t[0]]=new Date),n.apply(void 0,t))}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(r,e)||a&&!i(o,e))))}},7251:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.withSSR=function(){return function(e){function t(t){var n=t.initialI18nStore,r=t.initialLanguage,u=(0,o.default)(t,l);return(0,c.useSSR)(n,r),(0,i.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u))}return t.getInitialProps=(0,u.composeInitialProps)(e),t.displayName="withI18nextSSR(".concat((0,s.getDisplayName)(e),")"),t.WrappedComponent=e,t}};var a=r(n(38416)),o=r(n(70215)),i=n(67294),c=n(40707),u=n(94475),s=n(81743),l=["initialI18nStore","initialLanguage"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}},86190:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.withTranslation=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var a=r.forwardedRef,s=(0,i.default)(r,l),f=(0,u.useTranslation)(e,p(p({},s),{},{keyPrefix:t.keyPrefix})),d=(0,o.default)(f,3),g=d[0],b=d[1],y=d[2],v=p(p({},s),{},{t:g,i18n:b,tReady:y});return t.withRef&&a?v.ref=a:!t.withRef&&a&&(v.forwardedRef=a),(0,c.createElement)(n,v)}r.displayName="withI18nextTranslation(".concat((0,s.getDisplayName)(n),")"),r.WrappedComponent=n;return t.withRef?(0,c.forwardRef)((function(e,t){return(0,c.createElement)(r,Object.assign({},e,{forwardedRef:t}))})):r}};var a=r(n(38416)),o=r(n(27424)),i=r(n(70215)),c=n(67294),u=n(24329),s=n(81743),l=["forwardedRef"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},42562:function(e,t,n){"use strict";var r=n(64836);t.__esModule=!0,t.Link=void 0;var a=r(n(10434)),o=r(n(7071)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),c=n(69402),u=n(71082),s=n(67610),l=["language","to","onClick"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=i.default.forwardRef((function(e,t){var n=e.language,r=e.to,f=e.onClick,p=(0,o.default)(e,l),d=(0,i.useContext)(c.I18nextContext),g=n||d.language,b=""+function(e){return d.generateDefaultLanguagePage||e!==d.defaultLanguage?"/"+e:""}(g)+r;return i.default.createElement(u.Link,(0,a.default)({},p,{to:b,innerRef:t,hrefLang:g,onClick:function(e){n&&localStorage.setItem(s.LANGUAGE_KEY,n),f&&f(e)}}))}));t.Link=p},69402:function(e,t,n){"use strict";var r=n(64836);t.__esModule=!0,t.I18nextContext=void 0;var a=r(n(67294)).default.createContext({language:"en",languages:["en"],routed:!1,defaultLanguage:"en",generateDefaultLanguagePage:!1,originalPath:"/",path:"/"});t.I18nextContext=a},40531:function(e,t,n){"use strict";t.__esModule=!0;var r=n(31960);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(69402);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var o=n(18112);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var i=n(42562);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},67610:function(e,t){"use strict";t.__esModule=!0,t.LANGUAGE_KEY=void 0;t.LANGUAGE_KEY="gatsby-i18next-language"},18112:function(e,t,n){"use strict";var r=n(64836);t.__esModule=!0,t.useI18next=void 0;var a=r(n(10434)),o=n(31960),i=n(67294),c=n(71082),u=n(69402),s=n(67610);t.useI18next=function(e,t){var n=(0,o.useTranslation)(e,t),r=n.i18n,l=n.t,f=n.ready,p=(0,i.useContext)(u.I18nextContext),d=p.routed,g=p.defaultLanguage,b=p.generateDefaultLanguagePage,y=function(e){return b||e!==g?"/"+e:""};return(0,a.default)({},p,{i18n:r,t:l,ready:f,navigate:function(e,t){var n=y(p.language),r=d?""+n+e:""+e;return(0,c.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+y(e)+(t||function(e){if(!d)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/TLCN_PUZZLE";return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),e}(window.location.pathname)))+window.location.search;return localStorage.setItem(s.LANGUAGE_KEY,e),(0,c.navigate)(r,n)}})}},27782:function(e,t,n){n(40531)},52673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(67294),a=n(29956),o=n(87900),i=n(42342),c=n(24932),u=n(45545),s=n(51855),l=n(97179),f=(n(27782),n(71082),function(){return(0,r.useEffect)((function(){localStorage.setItem("lang","en")})),r.createElement(r.Fragment,null,r.createElement(a.Z,{headerConfig:{bgClass:"dynamic-sticky-bg"}},r.createElement(o.Z,null),r.createElement(i.Z,null),r.createElement(c.Z,null),r.createElement(u.Z,null),r.createElement(s.Z,null),r.createElement(l.Z,null)))})}}]);
//# sourceMappingURL=component---src-pages-app-js-3c9ac20d4a3efdee89f6.js.map