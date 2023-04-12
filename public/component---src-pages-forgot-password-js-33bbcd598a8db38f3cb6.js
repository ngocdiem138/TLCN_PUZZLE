"use strict";(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[3153,1316,6889],{29317:function(e,t,n){n.d(t,{zx:function(){return _}});var a=n(88408),r=n(58409),i=n(79698),l=n(43971),s=n.n(l),o=n(67294),c=n(89818),d=n(23431),u={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},m=(0,r.m$)("span",{baseStyle:u});i.Ts&&(m.displayName="VisuallyHidden");var p=(0,r.m$)("input",{baseStyle:u});i.Ts&&(p.displayName="VisuallyHiddenInput");function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}var b=["label","thickness","speed","emptyColor","className"],v=(0,d.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Spinner",e),a=(0,r.Lr)(e),l=a.label,s=void 0===l?"Loading...":l,c=a.thickness,d=void 0===c?"2px":c,u=a.speed,p=void 0===u?"0.45s":u,h=a.emptyColor,g=void 0===h?"transparent":h,y=a.className,x=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(a,b),E=(0,i.cx)("chakra-spinner",y),O=f({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:d,borderBottomColor:g,borderLeftColor:g,animation:v+" "+p+" linear infinite"},n);return o.createElement(r.m$.div,f({ref:t,__css:O,className:E},x),s&&o.createElement(m,null,s))}));function g(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}i.Ts&&(h.displayName="Spinner");var x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],E=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),O=E[0],N=E[1],j=(0,r.Gp)((function(e,t){var n=e.size,a=e.colorScheme,l=e.variant,s=e.className,c=e.spacing,d=void 0===c?"0.5rem":c,u=e.isAttached,m=e.isDisabled,p=g(e,x),f=(0,i.cx)("chakra-button__group",s),b=o.useMemo((function(){return{size:n,colorScheme:a,variant:l,isDisabled:m}}),[n,a,l,m]),v={display:"inline-flex"};return v=y({},v,u?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),o.createElement(O,{value:b},o.createElement(r.m$.div,y({ref:t,role:"group",__css:v,className:f},p)))}));i.Ts&&(j.displayName="ButtonGroup");var w=["label","placement","spacing","children","className","__css"],S=function(e){var t=e.label,n=e.placement,a=e.spacing,l=void 0===a?"0.5rem":a,s=e.children,c=void 0===s?o.createElement(h,{color:"currentColor",width:"1em",height:"1em"}):s,d=e.className,u=e.__css,m=g(e,w),p=(0,i.cx)("chakra-button__spinner",d),f="start"===n?"marginEnd":"marginStart",b=o.useMemo((function(){var e;return y(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[f]=t?l:0,e.fontSize="1em",e.lineHeight="normal",e),u)}),[u,t,f,l]);return o.createElement(r.m$.div,y({className:p},m,{__css:b}),c)};i.Ts&&(S.displayName="ButtonSpinner");var k=["children","className"],C=function(e){var t=e.children,n=e.className,a=g(e,k),l=o.isValidElement(t)?o.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,i.cx)("chakra-button__icon",n);return o.createElement(r.m$.span,y({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:s}),l)};i.Ts&&(C.displayName="ButtonIcon");var P=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],_=(0,r.Gp)((function(e,t){var n,l,c,d,u=N(),m=(0,r.mq)("Button",y({},u,e)),p=(0,r.Lr)(e),f=p.isDisabled,b=void 0===f?null==u?void 0:u.isDisabled:f,v=p.isLoading,h=p.isActive,x=p.isFullWidth,E=p.children,O=p.leftIcon,j=p.rightIcon,w=p.loadingText,k=p.iconSpacing,C=void 0===k?"0.5rem":k,_=p.type,D=p.spinner,I=p.spinnerPlacement,T=void 0===I?"start":I,B=p.className,F=p.as,z=g(p,P),L=o.useMemo((function(){var e,t=s()({},null!=(e=null==m?void 0:m._focus)?e:{},{zIndex:1});return y({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:x?"100%":"auto"},m,!!u&&{_focus:t})}),[m,u,x]),R=(n=F,l=o.useState(!n),c=l[0],d=l[1],{ref:o.useCallback((function(e){e&&d("BUTTON"===e.tagName)}),[]),type:c?"button":void 0}),$=R.ref,A=R.type,G={rightIcon:j,leftIcon:O,iconSpacing:C,children:E};return o.createElement(r.m$.button,y({disabled:b||v,ref:(0,a.qq)(t,$),as:F,type:null!=_?_:A,"data-active":(0,i.PB)(h),"data-loading":(0,i.PB)(v),__css:L,className:(0,i.cx)("chakra-button",B)},z),v&&"start"===T&&o.createElement(S,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:C},D),v?w||o.createElement(r.m$.span,{opacity:0},o.createElement(Z,G)):o.createElement(Z,G),v&&"end"===T&&o.createElement(S,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:C},D))}));function Z(e){var t=e.leftIcon,n=e.rightIcon,a=e.children,r=e.iconSpacing;return o.createElement(o.Fragment,null,t&&o.createElement(C,{marginEnd:r},t),a,n&&o.createElement(C,{marginStart:r},n))}i.Ts&&(_.displayName="Button");var D=["icon","children","isRound","aria-label"],I=(0,r.Gp)((function(e,t){var n=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],l=g(e,D),s=n||a,c=o.isValidElement(s)?o.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(_,y({padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":i},l),c)}));i.Ts&&(I.displayName="IconButton")},42426:function(e,t,n){var a=n(4942),r=n(45987),i=n(75900),l=n.n(i),s=n(67294),o=n(25513),c=n(85655),d=n(71324),u=n(99541),m=n(563),p=n(9655),f=n(16132),b=n(38870),v=n(85893),h=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=(0,f.Z)("h4");x.displayName="DivStyledAsH4";var E=(0,b.Z)("alert-heading",{Component:x}),O=(0,b.Z)("alert-link",{Component:d.Z}),N={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},j=s.forwardRef((function(e,t){var n=(0,o.Ch)(e,{show:"onClose"}),a=n.bsPrefix,i=n.show,s=n.closeLabel,d=n.closeVariant,f=n.className,b=n.children,g=n.variant,x=n.onClose,E=n.dismissible,O=n.transition,N=(0,r.Z)(n,h),j=(0,u.vE)(a,"alert"),w=(0,c.Z)((function(e){x&&x(!1,e)})),S=!0===O?m.Z:O,k=(0,v.jsxs)("div",y(y({role:"alert"},S?void 0:N),{},{ref:t,className:l()(f,j,g&&"".concat(j,"-").concat(g),E&&"".concat(j,"-dismissible")),children:[E&&(0,v.jsx)(p.Z,{onClick:w,"aria-label":s,variant:d}),b]}));return S?(0,v.jsx)(S,y(y({unmountOnExit:!0},N),{},{ref:void 0,in:i,children:k})):i?k:null}));j.displayName="Alert",j.defaultProps=N,t.Z=Object.assign(j,{Link:O,Heading:E})},69603:function(e,t,n){var a=n(4942),r=n(67294),i=n(26040);r.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={theme:"light",bgClass:"dynamic-sticky-bg",variant:"primary",align:"right",isFluid:!1,button:"account",buttonText:"Get started free",reveal:!0},c={theme:"dark",style:"style1"};t.Z=function(e){var t=e.children,n=e.headerConfig,a=void 0===n?null:n,l=e.footerConfig,d=void 0===l?null:l,u=(0,r.useContext)(i.Z);return(0,r.useEffect)((function(){u.themeDark?(u.setHeader(s(s(s({},o),a),{},{theme:"dark"})),u.setFooter(s(s(s({},c),d),{},{theme:"dark"}))):(u.setHeader(s(s({},o),a)),u.setFooter(s(s({},c),d)))}),[u.themeDark]),r.createElement(r.Fragment,null,t)}},88736:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(69603)},90310:function(e,t,n){n.r(t);var a=n(67294),r=(n(71082),n(88736)),i=(n(89282),n(42048)),l=n(42426),s=n(29317);a.createElement;t.default=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],o=(0,a.useState)(!1),c=o[0],d=o[1],u=(0,a.useState)(!1),m=u[0],p=u[1],f=(0,a.useState)(""),b=f[0],v=f[1];return a.createElement(a.Fragment,null,a.createElement(r.Z,null,a.createElement("div",{className:"header pt-11 pos-abs-tl w-100"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"}))),a.createElement("div",{className:"404-page bg-default min-h-100vh flex-all-center pt-lg-15 pt-xxl-17 pt-27 pb-lg-0 pb-18"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-center"},a.createElement("div",{className:"col-lg-7 px-lg-9"},t||c?a.createElement(l.Z,{variant:t?"danger":c?"success":"info"},m||"Send email success",a.createElement("div",{className:"d-flex justify-content-end"},a.createElement(s.zx,{onClick:function(){n(!1),d(!1)},variant:t?"outline-danger":c?"outline-success":"outline-info"},"Close!"))):null,a.createElement("div",{className:"card-404 text-center","data-aos":"zoom-in","data-aos-duration":"1000"},a.createElement("div",{className:"404-texts pt-14"},a.createElement("h3",{className:"card-title font-size-9 font-weight-bold"},"Forgot Password!"),a.createElement("p",{className:"card-text font-size-4 px-xxl-28 px-xs-10 px-sm-13 px-lg-13 px-md-28 px-xl-22 px-0 mb-11"},a.createElement("input",{type:"email",name:"email",value:b,className:"form-control",placeholder:"example@gmail.com",onChange:function(e){return v(e.target.value)},id:"email"})),a.createElement("button",{onClick:function(){return function(e){i.Yr.getForgotPass(e).then((function(e){"200"==e.data.errCode||null==e.data.errCode?(n(!1),d(!0),p(e.data.errMsg)):(n(!0),d(!1),p(e.data.errMsg))}))}(b)},className:"btn btn-green btn-h-60 text-white rounded-5 w-180 m-auto text-uppercase"},"Send")))))))))}}}]);
//# sourceMappingURL=component---src-pages-forgot-password-js-33bbcd598a8db38f3cb6.js.map