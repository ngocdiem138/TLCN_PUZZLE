"use strict";(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[597],{65506:function(t,e,o){var n=o(64687);e.Z=void 0;var a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==s(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var l=n?Object.getOwnPropertyDescriptor(t,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=t[a]}o.default=t,e&&e.set(t,o);return o}(o(67294));function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e,o,n,a,r,s){try{var l=t[r](s),c=l.value}catch(i){return void o(i)}l.done?e(c):Promise.resolve(c).then(n,a)}function c(t){return function(){var e=this,o=arguments;return new Promise((function(n,a){var r=t.apply(e,o);function s(t){l(r,n,a,s,c,"next",t)}function c(t){l(r,n,a,s,c,"throw",t)}s(void 0)}))}}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=d(t);if(e){var a=d(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return p(this,o)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}o(66097);var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(d,t);var e,o,r,s,l,p=f(d);function d(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(e=p.call(this,t)).state={status:!!e.props.status&&e.props.status},e}return e=d,o=[{key:"componentDidUpdate",value:(l=c(n.mark((function t(e){var o=this;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.status!=this.props.status&&1==this.props.status&&(this.setState({status:!0}),setTimeout((function(){o.setState({status:!1}),o.props.Close(!1)}),this.props.autoCloseIn?this.props.autoCloseIn:4e3));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"closeModal",value:(s=c(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.Close(!1),this.setState({status:!1});case 2:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"render",value:function(){var t=this,e=this.props,o=a.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"}),n="#00b0ff";return"error"===e.type?(n=e.color?e.color:"#de1327",o=a.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"})):"success"===e.type?(n=e.color?e.color:"#00c12c",o=a.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"})):"warning"===e.type?(n=e.color?e.color:"#ff9900",o=a.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"})):"info"===e.type&&(n=e.color?e.color:"#00b0ff",o=a.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"})),a.default.createElement("div",{className:this.state.status?"__myAlert show":"__myAlert","aria-labelledby":"__myAlertTitle","aria-hidden":"true"},a.default.createElement("div",{className:"__myAlertModal",role:"document"},a.default.createElement("div",{className:"alert-modal-content"},a.default.createElement("div",{id:"alertWrapper",className:"alert-wrapper"},a.default.createElement("button",{className:"alert-close-icon",onClick:function(){return t.closeModal()}},"×"),a.default.createElement("div",{className:"d-flex"},a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 24 24",fill:n,className:"alert-status-icon"},o),a.default.createElement("div",{className:"alert-dialogue"},a.default.createElement("h3",{className:"alert-text"},e.title?e.title:"Something went wrong, please try again later!"),e.quotes?a.default.createElement("p",{className:"alert-quote mb-0"},e.quote?e.quote:"This is a dummy alert to show an example of reactjs-alert"):null,a.default.createElement("button",{type:"button",className:"close-alert-btn",onClick:function(){return t.closeModal()},style:{backgroundColor:n}},e.button?e.button:"Okay")))))))}}],o&&i(e.prototype,o),r&&i(e,r),d}(a.Component);e.Z=m},36811:function(t,e,o){o.r(e);var n=o(67294),a=o(71082),r=o(29956),s=(o(40264),o(42048)),l=o(65506),c=o(48633),i=o(26040),u=n.createElement;e.default=function(){(0,n.useContext)(i.Z);var t=(0,n.useState)([]),e=t[0],o=t[1],f=(0,n.useState)(!1),p=f[0],d=f[1];(0,n.useEffect)((function(){s.d$.getJobPostCreateByEmployer().then((function(t){"403"==t.data.errCode?d(!0):o(t.data.data)}))}),[]);var m=e.map((function(t){return u("tr",{className:"border border-color-2"},u("th",{scope:"row",className:"pl-6 border-0 py-7 min-width-px-235"},u("div",{className:""},u(a.Link,{to:"/groups/job-details/"+t.job_post.id,className:"font-size-4 mb-0 font-weight-semibold text-black-2"},t.job_post.title))),u("td",{className:"table-y-middle py-7 min-width-px-135"},u("h3",{className:"font-size-4 font-weight-normal text-black-2 mb-0"},t.job_post.employmentType)),u("td",{className:"table-y-middle py-7 min-width-px-125"},u("h3",{className:"font-size-4 font-weight-normal text-black-2 mb-0"},t.job_post.city)),u("td",{className:"table-y-middle py-7 min-width-px-155"},u("h3",{className:"font-size-4 font-weight-normal text-black-2 mb-0"},t.job_post.createTime)),u("td",{className:"table-y-middle py-7 min-width-px-205"},u("h3",{className:"font-size-4 font-weight-bold text-black-2 mb-0"},t.application_amount)),u("td",{className:"table-y-middle py-7 min-width-px-80"},u(a.Link,{to:"/dashboard-jobPost?id="+t.job_post.id,className:"font-size-3 font-weight-bold text-green text-uppercase"}," Edit ")),u("td",{className:"table-y-middle py-7 min-width-px-100"},u("button",{className:"font-size-3 font-weight-bold text-red-2 text-uppercase",style:{outline:"none",border:"none",background:"none"},onClick:function(){var e;!0===window.confirm("Do you really want to delete this Job Post?")&&(e=t.job_post.id,console.log("delete",e),s.d$.deleteJobPost(e).then((function(){return s.d$.getJobPostCreateByEmployer().then((function(t){o(t.data.data)}))})))}},"Delete")))}));return u(n.Fragment,null,u(r.Z,{headerConfig:{button:"profile",isFluid:!0,bgClass:"bg-default",reveal:!1}},u("div",{className:"dashboard-main-container mt-25 mt-lg-31"},u("div",{className:"container"},u(l.Z,{type:"info",title:"Session has expired",status:p,button:"OK",color:"#1d36ad",quotes:!0,quote:"Unfortunately your session has expired and you have been logged out. Please log in again",Close:function(){(0,c.kS)()}}),u("div",{className:"mb-18"},u("div",{className:"row mb-11 align-items-center"},u("div",{className:"col-lg-6 mb-lg-0 mb-4"},u("h3",{className:"font-size-6 mb-0"},"Posted Jobs (",e.length,")")),u("div",{className:"col-lg-6"})),u("div",{className:"bg-white shadow-8 pt-7 rounded pb-9 px-11"},u("div",{className:"table-responsive "},u("table",{className:"table table-striped"},u("thead",null,u("tr",null,u("th",{scope:"col",className:"pl-0 border-0 font-size-4 font-weight-normal"},"Name"),u("th",{scope:"col",className:"pl-4 border-0 font-size-4 font-weight-normal"},"Job Type"),u("th",{scope:"col",className:"pl-4 border-0 font-size-4 font-weight-normal"},"City"),u("th",{scope:"col",className:"pl-4 border-0 font-size-4 font-weight-normal"},"Created on"),u("th",{scope:"col",className:"pl-4 border-0 font-size-4 font-weight-normal"},"Total Applicants"),u("th",{scope:"col",className:"pl-4 border-0 font-size-4 font-weight-normal"}),u("th",{scope:"col",className:"pl-4 border-0 font-size-4 font-weight-normal"}))),u("tbody",null,m)))))))))}},66097:function(t,e,o){o.r(e)}}]);
//# sourceMappingURL=component---src-pages-dashboard-jobs-js-156d491ad57a6e5db999.js.map