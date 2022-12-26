"use strict";(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[864],{24820:function(M,e,t){t.d(e,{FS:function(){return L},UM:function(){return o}});var z=t(15671),a=t(43144),N=(t(64687),t(96633)),s=t.n(N),u=t(24628),o=new(function(){function M(){(0,z.Z)(this,M)}return(0,a.Z)(M,[{key:"getNumberPostedJob",value:function(){}},{key:"getAllCompanys",value:function(){return s().get(u.CT+"/common/company")}},{key:"createCompany",value:function(M){return s().post(u.CT+"/admin/add-company",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getCompanyById",value:function(M){return s().get(u.CT+"/admin/get-one-company/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getCompanyByKeyWordAndStatus",value:function(M,e){return s().get(u.CT+"/search?keyword="+M+"&status="+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"updateCompany",value:function(M){return s().put(u.CT+"/admin/update-info-company",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"deleteCompany",value:function(M){return s().delete(u.CT+"/company/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}}]),M}()),L=(new(function(){function M(){(0,z.Z)(this,M)}return(0,a.Z)(M,[{key:"getAllSkills",value:function(M){return s().get(u.CT+"/common/get-all-extra-info-by-type?type="+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"createCompany",value:function(M){return s().post(u.CT+"/admin/add-company",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getCompanyById",value:function(M){return s().get(u.CT+"/admin/get-one-company/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getCompanyByKeyWordAndStatus",value:function(M,e){return s().get(u.CT+"/search?keyword="+M+"&status="+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"updateCompany",value:function(M){return s().put(u.CT+"/admin/update-info-company",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"deleteCompany",value:function(M){return s().delete(u.CT+"/company/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}}]),M}()),new(function(){function M(){(0,z.Z)(this,M)}return(0,a.Z)(M,[{key:"getAllAmountApplicationApplied",value:function(){return s().get(u.CT+"/employer/get-amount-application-to-employer",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"responseCandidateApplication",value:function(M){return s().post(u.CT+"/employer/response-application-by-candidate-and-job-post",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"createEmployer",value:function(M){return s().post(u.CT+"/admin/add-compan",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getAllEmployers",value:function(){return s().get(u.CT+"/candidate-profile-2")}},{key:"getEmployerById",value:function(M){return s().get(u.CT+"/common/employer/get-employer-by-id/"+M)}},{key:"getEmployerByKeyWordAndStatus",value:function(M,e){return s().get(u.CT+"/search?keyword="+M+"&status="+e)}},{key:"updateEmployer",value:function(M){return s().put(u.CT+"/admin/update-info-account",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"deleteEmployer",value:function(M){return s().delete(u.CT+"/candidate-profile-2/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getApplication",value:function(M){return s().get(u.CT+"/employer/get-application-by-job-post/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"responseApplication",value:function(M,e,t){return s().get(u.CT+"/employer/response-application?result="+e+"?applicationId="+M+"?note="+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}}]),M}()));new(function(){function M(){(0,z.Z)(this,M)}return(0,a.Z)(M,[{key:"getAllAccounts",value:function(){return s().get(u.CT+"/admin/get-all-account",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"createAccount",value:function(M){return s().post(u.CT+"/admin/add-account",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"getAccountById",value:function(M){return s().get(u.CT+"/"+M)}},{key:"getAccountByKeyWordAndStatus",value:function(M,e){return s().get(u.CT+"/search?keyword="+M+"&status="+e)}},{key:"updateAccount",value:function(M){return s().put(u.CT+"/admin/update-account/",M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},{key:"deleteAccount",value:function(M){return s().delete(u.CT+"/admin/delete-account/"+M,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}}]),M}())},112:function(M,e,t){t.r(e),t.d(e,{default:function(){return T}});var z=t(67294),a=t(29499),N=t(71082),s=t(29956),u=t(14262),o=t(93029),L=t(26354),l=t(18101),i=t(24820),j=t(42048),n=t(96633),y=t.n(n),c=t(24628),g=z.createElement,T=function(){var M=(0,a.useLocation)(),e=(0,z.useState)({}),t=e[0],n=e[1],T=(0,z.useState)({}),r=T[0],C=T[1],m=M.pathname.split("/"),d=m[m.length-1],D=(0,z.useState)(["No require"]),w=D[0],k=D[1];(0,z.useEffect)((function(){var M;j.d$.getJobPostById(d).then((function(e){n(e.data.data),null!=e.data.data.skills&&""!=e.data.data.skills&&k(e.data.data.skills.split(",")),M=e.data.data.createdEmployerId,i.FS.getEmployerById(M).then((function(M){C(M.data.data)}))})).catch((function(M){n({})}))}),[d]);var x=(0,z.useState)(""),p=x[0],I=x[1],Q=(0,z.useState)(""),U=Q[0],O=Q[1],b=w.map((function(M){return g("li",{className:"bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2"},M)})),S=(0,z.useState)(void 0),E=(S[0],S[1]),f=(0,z.useState)(!1),h=f[0],Y=f[1];(0,z.useEffect)((function(){E(localStorage.getItem("userRole")),Y(localStorage.getItem("isLoggedIn"))}));var v=function(){h?y().get(c.CT+"/candidate/apply-job-post/"+d,{headers:{Authorization:"Bearer "+localStorage.getItem("token")},job_id:d}).then((function(M){if(200==M.data.status){O("Successfuly applied for job"),I("");var e=setInterval((function(){}),1e3);clearInterval(e)}else if(200!=M.data.status)if(console.log(M.data.status),403===M.data.status)window.location.assign(c.fu+"/registerOfUser");else O(""),I(M.data.errMsg);else O("Request Failed")})).catch((function(M){console.log(M)})):I("You must login to apply for jobs")};return g(z.Fragment,null,g(s.Z,{headerConfig:{button:"profile"}},g("div",{className:"jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12"},g("div",{className:"container"},g("div",{className:"row justify-content-center"},p?g("div",{className:"alert alert-danger col-12",role:"alert"},p):null,U?g("div",{className:"success alert-success col-12",role:"alert"},U):null,g("div",{className:"col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts"},g("div",{className:"mb-9"},g(N.Link,{to:"/",className:"d-flex align-items-center ml-4"}," ",g("i",{className:"icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"}),g("span",{className:"text-uppercase font-size-3 font-weight-bold text-gray"},"Back to job board")))),g("div",{className:"col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0"},g("div",{className:"bg-white rounded-4 border border-mercury shadow-9"},g("div",{className:"pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts"},g("div",{className:"row"},g("div",{className:"col-md-6"},g("div",{className:"media align-items-center"},g("div",{className:"square-72 d-block mr-8"},g("img",{src:u.Z,alt:""})),g("div",null,g("h3",{className:"font-size-6 mb-0"},t.title),g("span",{className:"font-size-3 text-gray line-height-2"},r.lastname," ",r.firstname)))),g("div",{className:"col-md-6 text-right pt-7 pt-md-0 mt-md-n1"},g("div",{className:"media justify-content-md-end"},g("p",{className:"font-size-4 text-gray mb-0"},t.dueTime)))),g("div",{className:"row pt-9"},g("div",{className:"col-12"},g("div",{className:"card-btn-group"},g("button",{type:"submit",className:"btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5",onClick:v},"Apply to this job"),g("button",{type:"submit",className:"btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5",onClick:function(){h?y().get(c.CT+"/candidate/save-job-post/"+d,{headers:{Authorization:"Bearer "+localStorage.getItem("token")},job_id:d}).then((function(M){200==M.data.status?(O("Successfuly saved for job"),I("")):M.data.errMsg?(I(M.data.errMsg),O("")):(O(""),I("Request Failed"))})).catch((function(M){console.log(M)})):I("You must login to save for jobs")}},g("i",{className:"icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"})," ","Save job"))))),g("div",{className:"job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts"},g("div",{className:"row mb-7"},g("div",{className:"col-md-4 mb-md-0 mb-6"},g("div",{className:"media justify-content-md-start"},g("div",{className:"image mr-5"},g("img",{src:o.Z,alt:""})),g("p",{className:"font-weight-semibold font-size-5 text-black-2 mb-0"},t.minBudget," - ",t.maxBudget,"K $"))),g("div",{className:"col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6"},g("div",{className:"media justify-content-md-start"},g("div",{className:"image mr-5"},g("img",{src:L.Z,alt:""})),g("p",{className:"font-weight-semibold font-size-5 text-black-2 mb-0"},t.employmentType))),g("div",{className:"col-md-4 pl-lg-0"},g("div",{className:"media justify-content-md-start"},g("div",{className:"image mr-5"},g("img",{src:l.Z,alt:""})),g("p",{className:"font-size-5 text-gray mb-0"},t.address,","," ",g("br",{className:"d-md-none d-lg-block d-block"}),t.city,g("img",{className:"image mr-5 col-md-3",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik00OTMuOTMzLDkyLjg2N2gtMTcuMDY3di0yNS42YzAtNS4xMi0zLjQxMy04LjUzMy04LjUzMy04LjUzM2gtNTEuMmMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjI1LjZoLTE3LjA2Nw0KCQkJCWMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjEzNi41MzNoLTguNTMzdi0yNS42YzAtNS4xMi0zLjQxMy04LjUzMy04LjUzMy04LjUzM0gzNTcuNHYtOC41MzMNCgkJCQljMC01LjEyLTMuNDEzLTguNTMzLTguNTMzLTguNTMzYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzN2OC41MzNIMzMxLjhjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YyNS42aC0yNS42DQoJCQkJVjY3LjI2N2MwLTUuMTItMy40MTMtOC41MzMtOC41MzMtOC41MzNoLTI1LjZ2LTUxLjJDMjYzLjUzMywyLjQxMywyNjAuMTItMSwyNTUtMUgxNTIuNmMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjUxLjINCgkJCQloLTI1LjZjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YyMjEuODY3SDkyLjg2N3YtMjUuNmMwLTUuMTItMy40MTMtOC41MzMtOC41MzMtOC41MzNoLTUxLjINCgkJCQljLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YyNS42aC04LjUzM2MtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjIwNC44YzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM2gxMDIuNA0KCQkJCWg2OC4yNjdoMjA0LjhoMTAyLjRjNS4xMiwwLDguNTMzLTMuNDEzLDguNTMzLTguNTMzVjEwMS40QzUwMi40NjcsOTYuMjgsNDk5LjA1Myw5Mi44NjcsNDkzLjkzMyw5Mi44Njd6IE00MjUuNjY3LDc1LjhINDU5LjgNCgkJCQl2MTcuMDY3aC0zNC4xMzNWNzUuOHogTTM0MC4zMzMsMjIwLjg2N0gzNTcuNHYxNy4wNjdoLTE3LjA2N1YyMjAuODY3eiBNMTI3LDc1LjhoMjUuNmM1LjEyLDAsOC41MzMtMy40MTMsOC41MzMtOC41MzN2LTUxLjINCgkJCQloODUuMzMzdjUxLjJjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzaDI1LjZ2MTYyLjEzM2gtMTcuMDY3VjEwMS40YzAtNS4xMi0zLjQxMy04LjUzMy04LjUzMy04LjUzMw0KCQkJCWMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjEzNi41MzNIMjI5LjRWMTAxLjRjMC01LjEyLTMuNDEzLTguNTMzLTguNTMzLTguNTMzYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzN2MTM2LjUzMw0KCQkJCWgtMTcuMDY3VjEwMS40YzAtNS4xMi0zLjQxMy04LjUzMy04LjUzMy04LjUzM1MxNzguMiw5Ni4yOCwxNzguMiwxMDEuNHYxNDUuMDY3djQyLjY2N2gtMTcuMDY3VjEwMS40DQoJCQkJYzAtNS4xMi0zLjQxMy04LjUzMy04LjUzMy04LjUzM2MtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjE4Ny43MzNIMTI3Vjc1Ljh6IE00MS42NjcsMjcyLjA2N0g3NS44djE3LjA2N0g0MS42NjdWMjcyLjA2Nw0KCQkJCXogTTI0LjYsMzA2LjJoOC41MzNoNTEuMmgzNC4xMzNIMTc4LjJ2MTcuMDY3aC01OS43MzNjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YxNjIuMTMzSDI0LjZWMzA2LjJ6IE0xMjcsMzQwLjMzM2g1MS4yDQoJCQkJVjM1Ny40aC0yNS42Yy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNzMy40MTMsOC41MzMsOC41MzMsOC41MzNoMjUuNnYxNy4wNjdoLTI1LjZjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzMw0KCQkJCWMwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNoMjUuNnYxNy4wNjdoLTI1LjZjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3MzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM2gyNS42VjQ1OS44aC0yNS42DQoJCQkJYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNzMy40MTMsOC41MzMsOC41MzMsOC41MzNoMjUuNnYxNy4wNjdIMTI3VjM0MC4zMzN6IE0xOTUuMjY3LDMzMS44di0zNC4xMzNWMjU1aDkzLjg2N0gzMzEuOA0KCQkJCWgzNC4xMzNIMzgzdjIzOC45MzNoLTE3LjA2N1YyODAuNmMwLTUuMTItMy40MTMtOC41MzMtOC41MzMtOC41MzNzLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjIxMy4zMzNIMzMxLjhWMjgwLjYNCgkJCQljMC01LjEyLTMuNDEzLTguNTMzLTguNTMzLTguNTMzcy04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YyMTMuMzMzaC0xNy4wNjdWMjgwLjZjMC01LjEyLTMuNDEzLTguNTMzLTguNTMzLTguNTMzDQoJCQkJcy04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YyMTMuMzMzaC0xNy4wNjdWMjgwLjZjMC01LjEyLTMuNDEzLTguNTMzLTguNTMzLTguNTMzYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzN2MjEzLjMzM0gyMjkuNA0KCQkJCVYyODAuNmMwLTUuMTItMy40MTMtOC41MzMtOC41MzMtOC41MzNjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YyMTMuMzMzaC0xNy4wNjdWMzMxLjh6IE00ODUuNCw0OTMuOTMzaC04NS4zMzNWMjQ2LjQ2Nw0KCQkJCVYxMDkuOTMzaDE3LjA2N2g1MS4ySDQ4NS40VjQ5My45MzN6Ii8+DQoJCQk8cGF0aCBkPSJNNDI1LjY2NywzMzEuOGMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzVjM1Ny40YzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM3M4LjUzMy0zLjQxMyw4LjUzMy04LjUzM3YtMTcuMDY3DQoJCQkJQzQzNC4yLDMzNS4yMTMsNDMwLjc4NywzMzEuOCw0MjUuNjY3LDMzMS44eiIvPg0KCQkJPHBhdGggZD0iTTQyNS42NjcsMzgzYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNWNDA4LjZjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzdi0xNy4wNjcNCgkJCQlDNDM0LjIsMzg2LjQxMyw0MzAuNzg3LDM4Myw0MjUuNjY3LDM4M3oiLz4NCgkJCTxwYXRoIGQ9Ik00MjUuNjY3LDQzNC4yYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNWNDU5LjhjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzdi0xNy4wNjcNCgkJCQlDNDM0LjIsNDM3LjYxMyw0MzAuNzg3LDQzNC4yLDQyNS42NjcsNDM0LjJ6Ii8+DQoJCQk8cGF0aCBkPSJNNDI1LjY2NywyODAuNmMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzVjMwNi4yYzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM3M4LjUzMy0zLjQxMyw4LjUzMy04LjUzM3YtMTcuMDY3DQoJCQkJQzQzNC4yLDI4NC4wMTMsNDMwLjc4NywyODAuNiw0MjUuNjY3LDI4MC42eiIvPg0KCQkJPHBhdGggZD0iTTQyNS42NjcsMTI3Yy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNWMTUyLjZjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzdi0xNy4wNjcNCgkJCQlDNDM0LjIsMTMwLjQxMyw0MzAuNzg3LDEyNyw0MjUuNjY3LDEyN3oiLz4NCgkJCTxwYXRoIGQ9Ik00MjUuNjY3LDE3OC4yYy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNWMjAzLjhjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzdi0xNy4wNjcNCgkJCQlDNDM0LjIsMTgxLjYxMyw0MzAuNzg3LDE3OC4yLDQyNS42NjcsMTc4LjJ6Ii8+DQoJCQk8cGF0aCBkPSJNNDI1LjY2NywyMjkuNGMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzVjI1NWMwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNTNDM0LjIsMjYwLjEyLDQzNC4yLDI1NXYtMTcuMDY3DQoJCQkJQzQzNC4yLDIzMi44MTMsNDMwLjc4NywyMjkuNCw0MjUuNjY3LDIyOS40eiIvPg0KCQkJPHBhdGggZD0iTTQ1OS44LDMzMS44Yy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNWMzU3LjRjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzYzUuMTIsMCw4LjUzMy0zLjQxMyw4LjUzMy04LjUzMw0KCQkJCXYtMTcuMDY3QzQ2OC4zMzMsMzM1LjIxMyw0NjQuOTIsMzMxLjgsNDU5LjgsMzMxLjh6Ii8+DQoJCQk8cGF0aCBkPSJNNDU5LjgsNDM0LjJjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM1Y0NTkuOGMwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNjNS4xMiwwLDguNTMzLTMuNDEzLDguNTMzLTguNTMzDQoJCQkJdi0xNy4wNjdDNDY4LjMzMyw0MzcuNjEzLDQ2NC45Miw0MzQuMiw0NTkuOCw0MzQuMnoiLz4NCgkJCTxwYXRoIGQ9Ik00NTkuOCwxNzguMmMtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzVjIwMy44YzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM2M1LjEyLDAsOC41MzMtMy40MTMsOC41MzMtOC41MzMNCgkJCQl2LTE3LjA2N0M0NjguMzMzLDE4MS42MTMsNDY0LjkyLDE3OC4yLDQ1OS44LDE3OC4yeiIvPg0KCQkJPHBhdGggZD0iTTQ1OS44LDEyN2MtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzVjE1Mi42YzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM2M1LjEyLDAsOC41MzMtMy40MTMsOC41MzMtOC41MzMNCgkJCQl2LTE3LjA2N0M0NjguMzMzLDEzMC40MTMsNDY0LjkyLDEyNyw0NTkuOCwxMjd6Ii8+DQoJCQk8cGF0aCBkPSJNNDU5LjgsMjgwLjZjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM1YzMDYuMmMwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNjNS4xMiwwLDguNTMzLTMuNDEzLDguNTMzLTguNTMzDQoJCQkJdi0xNy4wNjdDNDY4LjMzMywyODQuMDEzLDQ2NC45MiwyODAuNiw0NTkuOCwyODAuNnoiLz4NCgkJCTxwYXRoIGQ9Ik00NTkuOCwzODNjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM1Y0MDguNmMwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNjNS4xMiwwLDguNTMzLTMuNDEzLDguNTMzLTguNTMzDQoJCQkJdi0xNy4wNjdDNDY4LjMzMywzODYuNDEzLDQ2NC45MiwzODMsNDU5LjgsMzgzeiIvPg0KCQkJPHBhdGggZD0iTTQ1OS44LDIyOS40Yy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzNWMjU1YzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM2M1LjEyLDAsOC41MzMtMy40MTMsOC41MzMtOC41MzMNCgkJCQl2LTE3LjA2N0M0NjguMzMzLDIzMi44MTMsNDY0LjkyLDIyOS40LDQ1OS44LDIyOS40eiIvPg0KCQkJPHBhdGggZD0iTTUwLjIsNDI1LjY2N2MtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjE3LjA2N2MwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNzOC41MzMtMy40MTMsOC41MzMtOC41MzNWNDM0LjINCgkJCQlDNTguNzMzLDQyOS4wOCw1NS4zMiw0MjUuNjY3LDUwLjIsNDI1LjY2N3oiLz4NCgkJCTxwYXRoIGQ9Ik01MC4yLDMyMy4yNjdjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YxNy4wNjdjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzVjMzMS44DQoJCQkJQzU4LjczMywzMjYuNjgsNTUuMzIsMzIzLjI2Nyw1MC4yLDMyMy4yNjd6Ii8+DQoJCQk8cGF0aCBkPSJNNTAuMiwzNzQuNDY3Yy01LjEyLDAtOC41MzMsMy40MTMtOC41MzMsOC41MzN2MTcuMDY3YzAsNS4xMiwzLjQxMyw4LjUzMyw4LjUzMyw4LjUzM3M4LjUzMy0zLjQxMyw4LjUzMy04LjUzM1YzODMNCgkJCQlDNTguNzMzLDM3Ny44OCw1NS4zMiwzNzQuNDY3LDUwLjIsMzc0LjQ2N3oiLz4NCgkJCTxwYXRoIGQ9Ik04NC4zMzMsMzc0LjQ2N2MtNS4xMiwwLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjE3LjA2N2MwLDUuMTIsMy40MTMsOC41MzMsOC41MzMsOC41MzNzOC41MzMtMy40MTMsOC41MzMtOC41MzNWMzgzDQoJCQkJQzkyLjg2NywzNzcuODgsODkuNDUzLDM3NC40NjcsODQuMzMzLDM3NC40Njd6Ii8+DQoJCQk8cGF0aCBkPSJNODQuMzMzLDQyNS42NjdjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YxNy4wNjdjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzVjQzNC4yDQoJCQkJQzkyLjg2Nyw0MjkuMDgsODkuNDUzLDQyNS42NjcsODQuMzMzLDQyNS42Njd6Ii8+DQoJCQk8cGF0aCBkPSJNODQuMzMzLDMyMy4yNjdjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzM3YxNy4wNjdjMCw1LjEyLDMuNDEzLDguNTMzLDguNTMzLDguNTMzczguNTMzLTMuNDEzLDguNTMzLTguNTMzVjMzMS44DQoJCQkJQzkyLjg2NywzMjYuNjgsODkuNDUzLDMyMy4yNjcsODQuMzMzLDMyMy4yNjd6Ii8+DQoJCQk8cGF0aCBkPSJNMTg2LjczMyw3NS44YzUuMTIsMCw4LjUzMy0zLjQxMyw4LjUzMy04LjUzM3YtMjUuNmMwLTUuMTItMy40MTMtOC41MzMtOC41MzMtOC41MzNzLTguNTMzLDMuNDEzLTguNTMzLDguNTMzdjI1LjYNCgkJCQlDMTc4LjIsNzIuMzg3LDE4MS42MTMsNzUuOCwxODYuNzMzLDc1Ljh6Ii8+DQoJCQk8cGF0aCBkPSJNMjIwLjg2Nyw3NS44YzUuMTIsMCw4LjUzMy0zLjQxMyw4LjUzMy04LjUzM3YtMjUuNmMwLTUuMTItMy40MTMtOC41MzMtOC41MzMtOC41MzNjLTUuMTIsMC04LjUzMywzLjQxMy04LjUzMyw4LjUzMw0KCQkJCXYyNS42QzIxMi4zMzMsNzIuMzg3LDIxNS43NDcsNzUuOCwyMjAuODY3LDc1Ljh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",alt:""}))))),g("div",{className:"row"},g("div",{className:"col-md-4 mb-lg-0 mb-10"},g("div",{className:""},g("span",{className:"font-size-4 d-block mb-4 text-gray"},"Education Level"),g("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-9"},t.educationLevel)),g("div",{className:"tags"},g("p",{className:"font-size-4 text-gray mb-0"},"Soft Skill"),g("ul",{className:"list-unstyled mr-n3 mb-0"},g("li",{className:"d-block font-size-4 text-black-2 mt-2"},g("span",{className:"d-inline-block mr-2"},"•"),"Slack"),g("li",{className:"d-block font-size-4 text-black-2 mt-2"},g("span",{className:"d-inline-block mr-2"},"•"),"Basic English"),g("li",{className:"d-block font-size-4 text-black-2 mt-2"},g("span",{className:"d-inline-block mr-2"},"•"),"Well Organized")))),g("div",{className:"col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8"},g("div",{className:""},g("span",{className:"font-size-4 d-block mb-4 text-gray"},"Quantity"),g("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-9"},t.quantity," employees")),g("div",{className:"tags"},g("p",{className:"font-size-4 text-gray mb-3"},"Technical Skill"),g("ul",{className:"d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0"},b))),g("div",{className:"col-md-4 pl-lg-0"},g("div",{className:""},g("span",{className:"font-size-4 d-block mb-4 text-gray"},"Workplace Type"),g("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-0"},t.workplaceType))))),g("div",{className:"job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts"},g("div",{className:"row"},g("div",{className:"col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20"},g("p",{className:"mb-4 font-size-6 text-black-2 font-weight-semibold"},"Employer Info."," "),g("div",{className:"row"},g("div",{className:"col-md-4 mb-lg-0 mb-10"},g("div",{className:""},g("span",{className:"font-size-4 d-block mb-4 text-gray"},"Employer Name"),g("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-9"},r.lastname," ",r.firstname))),g("div",{className:"col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8"},g("div",{className:""},g("span",{className:"font-size-4 d-block mb-4 text-gray"},"Recruitment Email"),g("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-9"},r.recruitmentEmail?r.recruitmentEmail:"Email don't update"))),g("div",{className:"col-md-4 pl-lg-0"},g("div",{className:""},g("span",{className:"font-size-4 d-block mb-4 text-gray"},"Recruitment Phone"),g("h6",{className:"font-size-5 text-black-2 font-weight-semibold mb-0"},r.recruitmentPhone?r.recruitmentPhone:"Phone don't update"))))))),g("hr",null),g("div",{className:"job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts"},g("div",{className:"row"},g("div",{className:"col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20"},g("div",{className:""},g("p",{className:"mb-4 font-size-6 text-black-2 font-weight-semibold"},"Job Description."," "),g("div",{dangerouslySetInnerHTML:{__html:t.description}})),g("div",{className:""},g("button",{type:"submit",className:"btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6",onClick:v},"Apply to this job"))))))))))))}}}]);
//# sourceMappingURL=d538e4693a90727fe26a148df561ceb82b767ad1-e2060cc6bcda17a8e1ff.js.map