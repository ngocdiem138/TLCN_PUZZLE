"use strict";(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[705],{65506:function(e,t,o){var n=o(64687);t.Z=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=n?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(o,r,u):o[r]=e[r]}o.default=e,t&&t.set(e,o);return o}(o(67294));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,o,n,r,a,c){try{var u=e[a](c),l=u.value}catch(i){return void o(i)}u.done?t(l):Promise.resolve(l).then(n,r)}function l(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function c(e){u(a,n,r,c,l,"next",e)}function l(e){u(a,n,r,c,l,"throw",e)}c(void 0)}))}}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=d(e);if(t){var r=d(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return f(this,o)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}o(66097);var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,o,a,c,u,f=p(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=f.call(this,e)).state={status:!!t.props.status&&t.props.status},t}return t=d,o=[{key:"componentDidUpdate",value:(u=l(n.mark((function e(t){var o=this;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status!=this.props.status&&1==this.props.status&&(this.setState({status:!0}),setTimeout((function(){o.setState({status:!1}),o.props.Close(!1)}),this.props.autoCloseIn?this.props.autoCloseIn:4e3));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"closeModal",value:(c=l(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.Close(!1),this.setState({status:!1});case 2:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,o=r.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"}),n="#00b0ff";return"error"===t.type?(n=t.color?t.color:"#de1327",o=r.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"})):"success"===t.type?(n=t.color?t.color:"#00c12c",o=r.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"})):"warning"===t.type?(n=t.color?t.color:"#ff9900",o=r.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"})):"info"===t.type&&(n=t.color?t.color:"#00b0ff",o=r.default.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"})),r.default.createElement("div",{className:this.state.status?"__myAlert show":"__myAlert","aria-labelledby":"__myAlertTitle","aria-hidden":"true"},r.default.createElement("div",{className:"__myAlertModal",role:"document"},r.default.createElement("div",{className:"alert-modal-content"},r.default.createElement("div",{id:"alertWrapper",className:"alert-wrapper"},r.default.createElement("button",{className:"alert-close-icon",onClick:function(){return e.closeModal()}},"×"),r.default.createElement("div",{className:"d-flex"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 24 24",fill:n,className:"alert-status-icon"},o),r.default.createElement("div",{className:"alert-dialogue"},r.default.createElement("h3",{className:"alert-text"},t.title?t.title:"Something went wrong, please try again later!"),t.quotes?r.default.createElement("p",{className:"alert-quote mb-0"},t.quote?t.quote:"This is a dummy alert to show an example of reactjs-alert"):null,r.default.createElement("button",{type:"button",className:"close-alert-btn",onClick:function(){return e.closeModal()},style:{backgroundColor:n}},t.button?t.button:"Okay")))))))}}],o&&i(t.prototype,o),a&&i(t,a),d}(r.Component);t.Z=m},24820:function(e,t,o){o.d(t,{FS:function(){return u},UM:function(){return c}});o(64687);var n=o(96633),r=o.n(n),a=o(24628),c=new(function(){function e(){}var t=e.prototype;return t.getNumberPostedJob=function(){},t.getAllCompanys=function(){return r().get(a.CT+"/common/company")},t.createCompany=function(e){return r().post(a.CT+"/admin/add-company",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getCompanyById=function(e){return r().get(a.CT+"/admin/get-one-company/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getCompanyByKeyWordAndStatus=function(e,t){return r().get(a.CT+"/search?keyword="+e+"&status="+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.updateCompany=function(e){return r().put(a.CT+"/admin/update-info-company",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.deleteCompany=function(e){return r().delete(a.CT+"/company/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},e}()),u=(new(function(){function e(){}var t=e.prototype;return t.getAllSkills=function(e){return r().get(a.CT+"/common/get-all-extra-info-by-type?type="+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.createCompany=function(e){return r().post(a.CT+"/admin/add-company",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getCompanyById=function(e){return r().get(a.CT+"/admin/get-one-company/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getCompanyByKeyWordAndStatus=function(e,t){return r().get(a.CT+"/search?keyword="+e+"&status="+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.updateCompany=function(e){return r().put(a.CT+"/admin/update-info-company",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.deleteCompany=function(e){return r().delete(a.CT+"/company/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},e}()),new(function(){function e(){}var t=e.prototype;return t.getAllAmountApplicationApplied=function(){return r().get(a.CT+"/employer/get-amount-application-to-employer",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.responseCandidateApplication=function(e){return r().post(a.CT+"/employer/response-application-by-candidate-and-job-post",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.createEmployer=function(e){return r().post(a.CT+"/employer/response-application",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getAllEmployers=function(){return r().get(a.CT+"/candidate-profile-2")},t.createEmployer=function(e){return r().post(a.CT+"/admin/add-compan",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getEmployerById=function(e){return r().get(a.CT+"/common/employer/get-employer-by-id/"+e)},t.getEmployerByKeyWordAndStatus=function(e,t){return r().get(a.CT+"/search?keyword="+e+"&status="+t)},t.updateEmployer=function(e){return r().put(a.CT+"/admin/update-info-account",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.deleteEmployer=function(e){return r().delete(a.CT+"/candidate-profile-2/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getApplication=function(e){return r().get(a.CT+"/employer/get-application-by-job-post/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.responseApplication=function(e,t,o){return r().get(a.CT+"/employer/response-application?result="+t+"?applicationId="+e+"?note="+o,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},e}()));new(function(){function e(){}var t=e.prototype;return t.getAllAccounts=function(){return r().get(a.CT+"/admin/get-all-account",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.createAccount=function(e){return r().post(a.CT+"/admin/add-account",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.getAccountById=function(e){return r().get(a.CT+"/"+e)},t.getAccountByKeyWordAndStatus=function(e,t){return r().get(a.CT+"/search?keyword="+e+"&status="+t)},t.updateAccount=function(e){return r().put(a.CT+"/admin/update-account/",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},t.deleteAccount=function(e){return r().delete(a.CT+"/admin/delete-account/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},e}())},66097:function(e,t,o){o.r(t)},55241:function(e,t){t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=cfc88c29be9c14fd15449e8f6f02f2732af0e14b-a815e351ff056b330615.js.map