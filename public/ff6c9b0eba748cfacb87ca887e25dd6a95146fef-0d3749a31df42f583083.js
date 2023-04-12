"use strict";(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[1718],{7091:function(e){var t="%[a-f0-9]{2}",a=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function r(e,t){try{return[decodeURIComponent(e.join(""))]}catch(l){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],r(a),r(n))}function l(e){try{return decodeURIComponent(e)}catch(l){for(var t=e.match(a)||[],n=1;n<t.length;n++)t=(e=r(t,n).join("")).match(a)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var a={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{a[r[0]]=decodeURIComponent(r[0])}catch(t){var c=l(r[0]);c!==r[0]&&(a[r[0]]=c)}r=n.exec(e)}a["%C2"]="�";for(var s=Object.keys(a),i=0;i<s.length;i++){var o=s[i];e=e.replace(new RegExp(o,"g"),a[o])}return e}(e)}}},58616:function(e){e.exports=function(e,t){for(var a={},n=Object.keys(e),r=Array.isArray(t),l=0;l<n.length;l++){var c=n[l],s=e[c];(r?-1!==t.indexOf(c):t(c,s,e))&&(a[c]=s)}return a}},32203:function(e,t,a){var n=a(27424),r=a(861);function l(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==a.return||a.return()}finally{if(i)throw l}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var s=a(68936),i=a(7091),o=a(34734),m=a(58616);function u(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function p(e,t){return t.decode?i(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function g(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e){var t=(e=g(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function N(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};case"comma":case"separator":return function(t,a,n){var r="string"==typeof a&&a.includes(e.arrayFormatSeparator),l="string"==typeof a&&!r&&p(a,e).includes(e.arrayFormatSeparator);a=l?p(a,e):a;var c=r||l?a.split(e.arrayFormatSeparator).map((function(t){return p(t,e)})):null===a?a:p(a,e);n[t]=c};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;var c,s=l(e.split("&"));try{for(s.s();!(c=s.n()).done;){var i=c.value;if(""!==i){var m=o(t.decode?i.replace(/\+/g," "):i,"="),d=n(m,2),g=d[0],b=d[1];b=void 0===b?null:["comma","separator"].includes(t.arrayFormat)?b:p(b,t),a(p(g,t),b,r)}}}catch(I){s.e(I)}finally{s.f()}for(var N=0,v=Object.keys(r);N<v.length;N++){var E=v[N],h=r[E];if("object"==typeof h&&null!==h)for(var x=0,j=Object.keys(h);x<j.length;x++){var w=j[x];h[w]=y(h[w],t)}else r[E]=y(h,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((function(e,t){var a=r[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=f(a):e[t]=a,e}),Object.create(null))}t.extract=b,t.parse=N,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var a=function(a){return t.skipNull&&null==e[a]||t.skipEmptyString&&""===e[a]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(a,n){var l=a.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:[].concat(r(a),null===n?[[d(t,e),"[",l,"]"].join("")]:[[d(t,e),"[",d(l,e),"]=",d(n,e)].join("")])}};case"bracket":return function(t){return function(a,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:[].concat(r(a),null===n?[[d(t,e),"[]"].join("")]:[[d(t,e),"[]=",d(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(a,n){return null==n||0===n.length?a:0===a.length?[[d(t,e),"=",d(n,e)].join("")]:[[a,d(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(a,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:[].concat(r(a),null===n?[d(t,e)]:[[d(t,e),"=",d(n,e)].join("")])}}}}(t),l={},c=0,s=Object.keys(e);c<s.length;c++){var i=s[c];a(i)||(l[i]=e[i])}var o=Object.keys(l);return!1!==t.sort&&o.sort(t.sort),o.map((function(a){var r=e[a];return void 0===r?"":null===r?d(a,t):Array.isArray(r)?r.reduce(n(a),[]).join("&"):d(a,t)+"="+d(r,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var a=o(e,"#"),r=n(a,2),l=r[0],c=r[1];return Object.assign({url:l.split("?")[0]||"",query:N(b(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:p(c,t)}:{})},t.stringifyUrl=function(e,a){a=Object.assign({encode:!0,strict:!0},a);var n=g(e.url).split("?")[0]||"",r=t.extract(e.url),l=t.parse(r,{sort:!1}),c=Object.assign(l,e.query),s=t.stringify(c,a);s&&(s="?".concat(s));var i=function(e){var t="",a=e.indexOf("#");return-1!==a&&(t=e.slice(a)),t}(e.url);return e.fragmentIdentifier&&(i="#".concat(d(e.fragmentIdentifier,a))),"".concat(n).concat(s).concat(i)},t.pick=function(e,a,n){n=Object.assign({parseFragmentIdentifier:!0},n);var r=t.parseUrl(e,n),l=r.url,c=r.query,s=r.fragmentIdentifier;return t.stringifyUrl({url:l,query:m(c,a),fragmentIdentifier:s},n)},t.exclude=function(e,a,n){var r=Array.isArray(a)?function(e){return!a.includes(e)}:function(e,t){return!a(e,t)};return t.pick(e,r,n)}},34734:function(e){e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var a=e.indexOf(t);return-1===a?[e]:[e.slice(0,a),e.slice(a+t.length)]}},68936:function(e){e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},7201:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var n=a(61322),r=a(67294),l=a(88736),c=a(47333),s=a(99642),i=a(31174),o=a(71082),m=a(96633),u=a.n(m),d=a(24628),p=a(14262),f=a(29615),g=a(30285),b=a(61806),y=a(93029),N=a(26354),v=a(11650),E=(r.createElement,function(e){var t=(0,v.$G)(),a=t.t;t.i18n;console.log(e.listJob);var n=e.listJob[0]?e.listJob[0].id:0,l=(0,r.useState)(n),c=l[0],m=l[1],E=(0,r.useState)(1),j=E[0],w=E[1],I=(0,r.useState)(5)[0],C=j*I,k=e.listJob.slice(0,C),M=(0,r.useState)(!1),S=(M[0],M[1],(0,r.useState)("")),z=S[0],A=S[1],T=(0,r.useState)(""),D=T[0],Y=T[1];console.log(c);var L=k.map((function(e){return r.createElement(s.Z.Link,{className:"mb-8 p-0 w-100",eventKey:e.id,onClick:function(){console.log(c),A(""),Y(""),m(e.id)}},r.createElement("div",{className:"pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 hover-border-green"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-6"},r.createElement("div",{className:"media align-items-center"},r.createElement("div",{className:"square-72 d-block mr-8"},r.createElement("img",{src:e.logo?e.logo:p.Z,alt:""})),r.createElement("div",null,r.createElement("h3",{className:"mb-0"},r.createElement(o.rU,{to:"/groups/job-details/"+e.id,className:"font-size-6 heading-default-color"},e.title)),r.createElement(o.rU,{to:"/groups/job-details/"+e.id,className:"font-size-3 text-default-color line-height-2"},e.workplaceType)))),r.createElement("div",{className:"col-md-6 text-right pt-7 pt-md-5"},r.createElement("div",{className:"media justify-content-md-end"},r.createElement("div",{className:"image mr-5 mt-2"},r.createElement("img",{src:f.Z,alt:""})),r.createElement("p",{className:"font-weight-bold font-size-7 text-hit-gray mb-0"},r.createElement("span",{className:"text-black-2"},e.minBudget," - ",e.maxBudget," $")," USD")))),r.createElement("div",{className:"row pt-8"},r.createElement("div",{className:"col-md-7"},r.createElement("ul",{className:"d-flex list-unstyled mr-n3 flex-wrap"},e.skills?e.skills.split(",").map((function(e){return r.createElement("li",{className:"bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2"},e)})):r.createElement("li",null,r.createElement("span",{className:"bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block"},"No required")))),r.createElement("div",{className:"col-md-5"},r.createElement("ul",{className:"d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end"},r.createElement("li",{className:"mt-2 mr-8 font-size-small text-black-2 d-flex",style:{width:"50%"}},r.createElement(h,{className:"mr-4"},r.createElement("img",{src:g.Z,alt:""})),r.createElement("span",{className:"font-weight-semibold"},e.address)),r.createElement("li",{className:"mt-2 mr-8 font-size-small text-black-2 d-flex"},r.createElement(x,{className:"mr-4"},r.createElement("img",{src:b.Z,alt:""})),r.createElement("span",{className:"font-weight-semibold"},e.employmentType)))))))})),O=k.map((function(e){return r.createElement(i.Z.Pane,{eventKey:e.id,active:c?c==e.id:n==e.id},r.createElement("div",{className:" bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 h-1413 overflow-y-scroll mt-9 mt-xl-0"},r.createElement("div",{className:"pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts"},r.createElement("div",{className:"row"},z?r.createElement("div",{className:"alert alert-danger col-12",role:"alert"},z):null,D?r.createElement("div",{className:"alert alert-success col-12",role:"alert"},D):null,r.createElement("div",{className:"col-md-6"},r.createElement("div",{className:"media align-items-center"},r.createElement("div",{className:"square-72 d-block mr-8"},r.createElement("img",{src:e.logo?e.logo:p.Z,alt:""})),r.createElement("div",null,r.createElement("h3",{className:"font-size-6 mb-0"},r.createElement(o.rU,{to:"/groups/job-details/"+e.id,className:"font-size-6 heading-default-color"},e.title))))),r.createElement("div",{className:"col-md-6 text-right pt-7 pt-md-0 mt-md-n1"},r.createElement("div",{className:"media justify-content-md-end"},r.createElement("p",{className:"font-size-4 text-green mb-0"},e.dueTime)))),r.createElement("div",{className:"row pt-9"},r.createElement("div",{className:"col-12"},r.createElement("div",{className:"card-btn-group"},r.createElement("button",{type:"submit",className:"btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5",onClick:function(){return t=e.id,void("CANDIDATE"!=localStorage.getItem("userRole")?A("You must is a CANDIDATE to apply for jobs."):u().get(d.CT+"/candidate/apply-job-post/"+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")},job_id:t}).then((function(e){200==e.data.status&&re?(Y("Successfuly applied for job"),A("")):200!=e.data.status?(console.log(e.data.status),403===e.data.status?A(e.data.message):(Y(""),A(e.data.errMsg))):Y("Request Failed")})).catch((function(e){console.log(e)})));var t}},a("apply.applyThisJob")),r.createElement("button",{type:"submit",className:"btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5",onClick:function(){return t=e.id,void("CANDIDATE"!=localStorage.getItem("userRole")?A("You must is a CANDIDATE to save for jobs."):u().get(d.CT+"/candidate/save-job-post/"+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")},job_id:t}).then((function(e){200==e.data.status?(Y("Successfuly saved for job"),A("")):e.data.errMsg?(A(e.data.errMsg),Y("")):(Y(""),A("Request Failed"))})).catch((function(e){console.log(e)})));var t}},r.createElement("i",{className:"icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"})," ",a("apply.saveJob")))))),r.createElement("div",{className:"job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts"},r.createElement("div",{className:"row mb-7"},r.createElement("div",{className:"col-md-4 mb-md-0 mb-6"},r.createElement("div",{className:"media justify-content-md-start"},r.createElement("div",{className:"image mr-5"},r.createElement("img",{src:y.Z,alt:""})),r.createElement("p",{className:"font-weight-semibold font-size-5 text-black-2 mb-0"},e.minBudget," - ",e.maxBudget," $"))),r.createElement("div",{className:"col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6"},r.createElement("div",{className:"media justify-content-md-start"},r.createElement("div",{className:"image mr-5"},r.createElement("img",{src:N.Z,alt:""})),r.createElement("p",{className:"font-weight-semibold font-size-5 text-black-2 mb-0"},e.employmentType))),r.createElement("div",{className:"col-md-4 pl-lg-0"},r.createElement("div",{className:"media justify-content-md-start"},r.createElement("div",{className:"image mr-5"},r.createElement("img",{src:g.Z,alt:""})),r.createElement("p",{className:"font-size-5 text-gray mb-0"},e.address,","," ",r.createElement("br",{className:"d-md-none d-lg-block d-block"}))))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 mb-lg-0 mb-10"},r.createElement("div",{className:""},r.createElement("span",{className:"font-size-4 d-block mb-4 text-gray"},"Education Level"),r.createElement("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-9"},e.educationLevel)),r.createElement("div",{className:"tags"},r.createElement("p",{className:"font-size-4 text-gray mb-0"},"Soft Skill"),r.createElement("ul",{className:"list-unstyled mr-n3 mb-0"},r.createElement("li",{className:"d-block font-size-4 text-black-2 mt-2"},r.createElement("span",{className:"d-inline-block mr-2"},"•"),"Slack"),r.createElement("li",{className:"d-block font-size-4 text-black-2 mt-2"},r.createElement("span",{className:"d-inline-block mr-2"},"•"),"Basic English"),r.createElement("li",{className:"d-block font-size-4 text-black-2 mt-2"},r.createElement("span",{className:"d-inline-block mr-2"},"•"),"Well Organized")))),r.createElement("div",{className:"col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8"},r.createElement("div",{className:""},r.createElement("span",{className:"font-size-4 d-block mb-4 text-gray"},"Quantity"),r.createElement("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-9"},e.quantity," employees")),r.createElement("div",{className:"tags"},r.createElement("p",{className:"font-size-4 text-gray mb-3"},"Technical Skill"),r.createElement("ul",{className:"d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0"},e.skills?e.skills.split(",").map((function(e){return r.createElement("li",{className:"bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2"},e)})):r.createElement("li",null,r.createElement("span",{className:"bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block"},"No required"))))),r.createElement("div",{className:"col-md-4 pl-lg-0"},r.createElement("div",{className:""},r.createElement("span",{className:"font-size-4 d-block mb-4 text-gray"},"Workplace Type"),r.createElement("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-0"},e.workplaceType?e.workplaceType:"___"))))),r.createElement("div",{className:"pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11"},r.createElement("div",{className:""},r.createElement("p",{className:"mb-4 font-size-4 text-gray"},"Job Description"),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})))))))}));return r.createElement(r.Fragment,null,r.createElement("div",{className:"row justify-content-center position-static",style:{"min-height":"80vh"}},r.createElement(i.Z.Container,{defaultActiveKey:"first"},r.createElement("div",{className:"col-12 col-xxl-8 col-xl-7 col-lg-10"},r.createElement("div",{className:"Left"},r.createElement(s.Z,{className:"justify-content-center search-nav-tab nav nav-tabs border-bottom-0",id:"search-nav-tab"},L),r.createElement("div",{className:"text-center pt-5 pt-lg-13"},r.createElement("button",{style:{"margin-left":"auto","margin-right":"auto",border:"none",minHeight:"1vh"},onClick:function(){w(j+1)},className:"text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center"},a("search.loadMore")," ",r.createElement("i",{className:"fas fa-sort-down ml-3 mt-n2 font-size-4"}))))),r.createElement("div",{className:"col-12 col-xxl-4 col-xl-5 col-lg-10 position-static"},r.createElement(i.Z.Content,null,O)))))}),h=(0,n.default)("span").withConfig({displayName:"SearchTab___StyledSpan",componentId:"sc-wjnydq-0"})(["margin-top:-2px;"]),x=(0,n.default)("span").withConfig({displayName:"SearchTab___StyledSpan2",componentId:"sc-wjnydq-1"})(["margin-top:-2px;"]),j=a(29499),w=a(32203),I=a(42048),C=(r.createElement,function(){var e=(0,v.$G)(),t=e.t,a=(e.i18n,[{id:"postTime",name:"postTime",value:-1,label:t("postTime.all")},{id:"postTime",name:"postTime",value:1,label:t("postTime.oneDayAgo")},{id:"postTime",name:"postTime",value:3,label:t("postTime.threeDayAgo")},{id:"postTime",name:"postTime",value:7,label:t("postTime.oneWeekAgo")}]),n=[{id:0,value:"",label:t("defaultCountries.selectCity")},{id:1,value:"Tp Hồ Chí Minh",label:t("defaultCountries.HCM")},{id:2,value:"Hà Nội",label:t("defaultCountries.HaNoi")},{id:3,value:"Cần Thơ",label:t("defaultCountries.CanTho")},{id:4,value:"Đà Nẵng",label:t("defaultCountries.DaNang")}],s=[{id:"experienceYear",name:"experienceYear",value:-1,label:t("experienceYear.all")},{id:"experienceYear",name:"experienceYear",value:2,label:t("experienceYear.junior")},{id:"experienceYear",name:"experienceYear",value:3,label:t("experienceYear.mid")},{id:"experienceYear",name:"experienceYear",value:5,label:t("experienceYear.senior")}],i=[{name:"",label:t("employmentTypeData.All"),value:""},{name:"FULL_TIME",label:t("employmentTypeData.FullTime"),value:"Full Time"},{name:"PART_TIME",label:t("employmentTypeData.PartTime"),value:"Part Time"},{name:"INTERNSHIP",label:t("employmentTypeData.Internship"),value:"Internship"},{name:"FREELANCE",label:t("employmentTypeData.Freelance"),value:"Freelance"},{name:"CONTRACT",label:t("employmentTypeData.Contract"),value:"Contract"},{name:"TEMPORARY",label:t("employmentTypeData.Temporary"),value:"Temporary"}],o=[{value:[null,null],label:t("salary.all")},{value:[0,500],label:"< 500$"},{value:[500,1e3],label:"500 - 1000$"},{value:[1e3,2e3],label:"1000 - 2000$"},{value:[2e3,5e3],label:"2000 - 5000$"},{value:[5e3,1e4],label:"5000 - 10000$"},{value:[1e4,15e3],label:"10000 - 15000$"}],m=(0,j.useLocation)(),u=(0,w.parse)(m.search),d=(0,r.useState)([u.city]),p=d[0],f=d[1],g=(0,r.useState)([u.title]),b=g[0],y=g[1],N=(0,r.useState)(0),h=N[0],x=N[1],C=(0,r.useState)(0),A=C[0],T=C[1];(0,r.useEffect)((function(){console.log(R),n.forEach((function(e){e.value==u.city&&x(e.id)})),I.d$.getJobByFilterParams({titles:[u.title],cities:[u.city]}).then((function(e){L(e.data.data)}))}),[]);var D=(0,r.useState)([]),Y=D[0],L=D[1],O=(0,r.useState)(""),Z=(O[0],O[1]),F=(0,r.useState)(""),P=(F[0],F[1]),_=(0,r.useState)({minBudget:null,maxBudget:null,experienceYear:[],employmentTypes:[],titles:[u.title],cities:[u.city],positions:[],skills:[],others:[],numDayAgo:-1}),R=_[0],U=_[1],B=function(e,t){var a=R;if("experienceYear"===t||"titles"===t||"cities"===t||"employmentTypes"===t)a[t]=[e];else if("salary"===t){var n=e[0],r=e[1];a.minBudget=n,a.maxBudget=r}else a[t]=e;U(a),H(a),Z(""),P("")},H=function(e){I.d$.getJobByFilterParams(e).then((function(e){L(e.data.data)}))};return r.createElement(r.Fragment,null,r.createElement(l.Z,null,r.createElement("div",{className:"bg-black-2 mt-15 mt-lg-22 pt-18 pt-lg-13 pb-13"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("form",{className:"search-form"},r.createElement("div",{className:"filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-7 pl-6  search-1-adjustment"},r.createElement("div",{className:"filter-inputs"},r.createElement("div",{className:"form-group position-relative w-xl-50"},r.createElement("input",{className:"form-control focus-reset pl-13",type:"text",id:"keyword",value:b,name:"titles",onChange:function(e){B(e.target.value,"titles"),y(e.target.value)},placeholder:t("search.searchTitle")}),r.createElement("span",{className:"h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"},r.createElement("i",{className:"icon icon-zoom-2 text-primary font-weight-bold"}))),r.createElement("div",{className:"form-group position-relative w-lg-50"},r.createElement(c.Ph,{name:"cities",onChange:function(e){B(e.value,"cities"),x(e.id),f(e.value)},placeholder:t("defaultCountries.selectCity"),options:n,className:"pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100",border:!1,isSearchable:!0,value:n[h]}),r.createElement("span",{className:"h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"},r.createElement("i",{className:"icon icon-pin-3 text-primary font-weight-bold"})))))))))),r.createElement("div",{className:"bg-default-1 pt-9 pb-13 pb-xl-30 pb-13 position-relative overflow-hidden"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-12 col-lg-10 col-xl-12"},r.createElement("h2",{className:"font-size-8 mb-6"},t("search.searching"),' "',""!=b?b:t("search.all"),'" ',t("search.titleIn"),' "',""!=p?p:"All",'" ',t("search.inCity")),r.createElement("form",{className:"mb-8"},r.createElement("div",{className:"search-filter from-group d-flex align-items-center flex-wrap"},r.createElement("div",{className:"mr-5 mb-5"},r.createElement(k,{onChange:function(e){B(e.name,"employmentTypes")},options:i,className:"font-size-4"})),r.createElement("div",{className:"mr-5 mb-5"},r.createElement(M,{onChange:function(e){B(e.value,"salary")},options:o,className:"font-size-4"})),r.createElement("div",{className:"mr-5 mb-5"},r.createElement(S,{onChange:function(e){B(e.value,"experienceYear")},options:s,className:"font-size-4"})),r.createElement("div",{className:"mr-5 mb-5"},r.createElement(z,{placeholder:t("postTime.all"),onChange:function(e){B(e.value,"numDayAgo"),T(e.id)},options:a,className:"font-size-4",value:a[A]})))),r.createElement("div",{className:"d-flex align-items-center justify-content-between mb-6"},r.createElement("h5",{className:"font-size-4 font-weight-normal text-gray"},t("search.showing")," ",r.createElement("span",{className:"text-black-2"},Y.length)," ",t("search.matchResult"))))),r.createElement(E,{listJob:Y})))))}),k=(0,n.default)(c.Ph).withConfig({displayName:"search-list-2___StyledSelect",componentId:"sc-18hfanj-0"})(["min-width:175px;min-width:175px;"]),M=(0,n.default)(c.Ph).withConfig({displayName:"search-list-2___StyledSelect2",componentId:"sc-18hfanj-1"})(["min-width:175px;"]),S=(0,n.default)(c.Ph).withConfig({displayName:"search-list-2___StyledSelect3",componentId:"sc-18hfanj-2"})(["min-width:175px;"]),z=(0,n.default)(c.Ph).withConfig({displayName:"search-list-2___StyledSelect4",componentId:"sc-18hfanj-3"})(["min-width:175px;"])},29615:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Zz48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNMCAxMkMwIDUuMzczIDUuMzczIDAgMTIgMHMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDE4LjYyNyAwIDEyeiIvPjwvZz48Zy8+PGc+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDE5LjMzM2E1IDUgMCAwIDEtMy40MjUtOC42NDJDOS40NjkgOS44NSAxMS42NjcgOC4zMzMgMTEuMzMzIDVjNCAyLjY2NyA2IDUuMzMzIDIgOS4zMzMuNjY3IDAgMS42NjcgMCAzLjMzNC0xLjY0Ni4xOC41MTUuMzMzIDEuMDY5LjMzMyAxLjY0NmE1IDUgMCAwIDEtNSA1eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="},61806:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij48Zz48Zz48cGF0aCBmaWxsPSIjODI4MjgyIiBkPSJNNi4xNjcgOC42NjdINy41VjcuMzM0SDYuMTY3ek04LjgzNCAydjEuMzM0aC00VjJ6TTEuNSA0LjY2N2gxMC42Njd2NC42NjdIMS41em0xMC42NjcgNnYySDEuNXYtMnpNLjgzNCAzLjMzNEEuNjY3LjY2NyAwIDAgMCAuMTY3IDR2OS4zMzRjMCAuMzY4LjI5OC42NjYuNjY3LjY2NmgxMmEuNjY3LjY2NyAwIDAgMCAuNjY2LS42NjZWNGEuNjY3LjY2NyAwIDAgMC0uNjY2LS42NjZoLTIuNjY3di0yQS42NjcuNjY3IDAgMCAwIDkuNS42NjdINC4xNjdhLjY2Ny42NjcgMCAwIDAtLjY2Ny42Njd2MnoiLz48L2c+PC9nPjwvc3ZnPg=="}}]);
//# sourceMappingURL=ff6c9b0eba748cfacb87ca887e25dd6a95146fef-0d3749a31df42f583083.js.map