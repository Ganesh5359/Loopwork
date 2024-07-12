var _faitracker=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports={info:function(e){console.log(e)},error:function(e){console.error(e)},debug:function(e,t=!1){1==window.FAITRACKER_DEBUG&&(t?console.trace("%c"+e,"color: red"):console.log(e))},errorLine:function(e){let t="";"string"==typeof e&&(t=e),e instanceof Error&&e.message&&(t=e.message),""!=t&&console.error(t)}}},function(e,t){e.exports={validatedStringArg:function(e,t){if("string"!=typeof t)throw new Error("FAITrackerArgumentError: Invalid "+e);if(!(t=t.trim()))throw new Error("FAITrackerArgumentError: "+e+" cannot be empty.");return t},convertIfNumber:function(e){return e.match(/^[+-]?\d+(\.\d+)?$/)?(n=Number(e),isNaN(n)?e:n):e},getCleanHash:function(e){return e.split("?")[0]},parseURLString:function(e=""){if(""==e||!e)return{host:"",path:"",hash:""};var t=document.createElement("a");return t.setAttribute("href",e),{host:t.host,path:t.pathname,hash:t.hash}},getCurrentUnixTimestampInMs:function(){return(new Date).getTime()},isLocalStorageAvailable:function(){if(void 0==window.localStorage)return!1;try{var e="faitracker-test";window.localStorage.setItem(e,"test");var t="test"==window.localStorage.getItem(e);return window.localStorage.removeItem(e),t}catch(e){return!1}},encode:function(e,t=4){for(var r="",n=0;n<e.length;n++){var o=e[n].charCodeAt(),i=126-t;o>=33&&o<=i?(dat=o+t,r+=String.fromCharCode(dat)):o>i&&o<=126?(dat=32+o%i,r+=String.fromCharCode(dat)):r+=e[n]}return r},decode:function(e,t=4){for(var r="",n=0;n<e.length;n++){var o=e[n].charCodeAt();if(o>=37&&o<=126){var i=o-4;r+=String.fromCharCode(i)}else o<37&&o>=33?(i=o%33+122+1,r+=String.fromCharCode(i)):r+=e[n]}return r}}},function(e,t,r){"use strict";const n=r(1),o=r(3),i=r(0),a="web",c="$",s=c+"page_spent_time",u=c+"page_load_time",d=c+"page_scroll_percent",l=c+"company",f=c+"email",g=c+"phone",p=c+"name",m=c+"first_name",h=c+"last_name",v=c+"ga_cookie",E=c+"form_id",k=c+"form_name",A=c+"form_class",I=c+"form_type",_=c+"form_method",w=c+"form_target",b=c+"form_action",T=c+"form_submitted",P=["password","hidden"],y={getDevice:function(){for(var e=navigator.appVersion,t=navigator.userAgent,r=[{s:"iPad",r:/iPad/},{s:"Samsung Galaxy",r:/SCH-I800/},{s:"Motorola",r:/xoom/},{s:"Kindle",r:/kindle/}],n=[{s:"iPhone",r:/iPhone/},{s:"iPod",r:/iPod/},{s:"blackberry",r:/blackberry/},{s:"android 0.5",r:/android 0.5/},{s:"htc",r:/htc/},{s:"lg",r:/lg/},{s:"midp",r:/midp/},{s:"mmp",r:/mmp/},{s:"mobile",r:/mobile/},{s:"nokia",r:/nokia/},{s:"opera mini",r:/opera mini/},{s:"palm",r:/palm|PalmSource/},{s:"pocket",r:/pocket/},{s:"psp",r:/psp|Playstation Portable/},{s:"sgh",r:/sgh/},{s:"smartphone",r:/smartphone/},{s:"symbian",r:/symbian/},{s:"treo mini",r:/treo mini/},{s:"SonyEricsson",r:/SonyEricsson/},{s:"Samsung",r:/Samsung/},{s:"MobileExplorer",r:/MobileExplorer/},{s:"Benq",r:/Benq/},{s:"Windows Phone",r:/Windows Phone/},{s:"Windows Mobile",r:/Windows Mobile/},{s:"IEMobile",r:/IEMobile/},{s:"Windows CE",r:/Windows CE/},{s:"Nintendo Wii",r:/Nintendo Wii/}],o=!1,i=!1,a="",c=0;c<r.length;c++)if(r[c].r.test(t)){a=r[c].s,o=!0;break}if(""===a)for(c=0;c<n.length;c++)if(n[c].r.test(t)){a=n[c].s,i=!0;break}var s=o||i;return s||(s=/Mobile|mini|Fennec|Android/.test(e)),{screen:{width:screen.width,height:screen.height},device:a,isMobile:i||s||o}},getBrowserFeatures:function(){var e=!1;try{document.cookie="cookietest=1";var t=-1!=document.cookie.indexOf("cookietest=");document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e=t}catch(e){}return{window:{width:window.innerWidth,height:window.innerHeight},allowsCookies:e}}};function C(){return window.performance?window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart:0}function S(e,t="$qp_"){if("string"!=typeof e||0===e.length||1===e.length&&0===e.indexOf("?"))return{};let r={},o=null,i=e.indexOf("&");i===e.length-1&&(e=e.slice(0,e.length-1)),o=i>=0?e.split("&"):[e];for(var a=0;a<o.length;a++){let e=null;e=o[a].indexOf("=")>=0?o[a].split("="):[o[a],null],0==a&&0===e[0].indexOf("?")&&(e[0]=e[0].slice(1)),""!=e[1]&&null!=e[1]&&void 0!=e[1]&&(r[t+e[0]]=n.convertIfNumber(e[1]))}return r}function F(e){if(!e)return{};var t={};return t[E]=e.getAttribute("id"),t[k]=e.getAttribute("name"),t[A]=e.getAttribute("class"),t[b]=e.getAttribute("action"),t[_]=e.getAttribute("method"),t[w]=e.getAttribute("target"),t[I]=e.getAttribute("type"),t}function R(e){var t={};if(!e)return t;for(var r=0;r<e.length;r++)if(!(P.indexOf(e[r].type)>=0)&&e[r].value){var n=e[r].value.trim();""!=e[r].value&&(o.isEmail(n)&&!t[f]&&(t[f]=n),"tel"==e[r].type&&!t[g]&&o.isPhone(n)&&(t[g]=n),t[l]||!o.isFieldByMatch(e[r],"company")&&!o.isFieldByMatch(e[r],"org")||(t[l]=n),o.isFieldByMatch(e[r],"first","name")&&(t[m]||(t[m]=n),t[p]||(t[p]=""),t[p]=n+t[p]),o.isFieldByMatch(e[r],"last","name")&&(t[h]||(t[h]=n),t[p]&&""!=t[p]?t[p]:t[p]=n),o.isFieldByMatch(e[r],"name")&&(t[p]||(t[p]=n)))}return t}e.exports={getUserDefault:function(){let e={};e[c+"platform"]=a;let t=y.getDevice();return t.screen&&t.screen.width>0&&(e[c+"screen_width"]=t.screen.width),t.screen&&t.screen.height>0&&(e[c+"screen_height"]=t.screen.height),t.device&&(e[c+"device_name"]=t.device),e},getEventDefault:function(e=""){let t={};t[c+"page_title"]=document.title,t[c+"referrer"]=e;let r=n.parseURLString(e);return t[c+"referrer_domain"]=r.host,t[c+"referrer_url"]=r.host+r.path+n.getCleanHash(r.hash),t[c+"page_raw_url"]=window.location.href,t[c+"page_domain"]=window.location.host,t[c+"page_url"]=window.location.host+window.location.pathname+n.getCleanHash(window.location.hash),t},getFromQueryParams:function(e){return S(function(e){let t=e.hash,r=e.search,n=t.split("?")[1];return void 0==n||""==n?r:""==r?"?"+n:r+"&"+n}(e))},parseFromQueryString:S,getTypeValidated:function(e={}){let t={};for(let r in e)"string"!=typeof e[r]&&"number"!=typeof e[r]||(t[r]=e[r]);return t},getPageLoadTimeInMs:C,getPageLoadTime:function(){var e=C();return e>0?e/1e3:0},getPropertiesFromForm:function(e){return e?R(e.querySelectorAll("input")):{}},getFormMetaAttributes:F,getPageScrollPercent:function(){var e=document.documentElement,t=document.body,r="scrollTop",n="scrollHeight",o=e[r]||t[r],i=(e[n]||t[n])-e.clientHeight;return 0==i?0:o/i*100},getPropertiesFromAllNonFormInputs:function(){for(var e=document.querySelectorAll("input"),t={},r={},n=[],a=0;a<e.length;a++)P.indexOf(e[a].type)>=0||o.isPartOfForm(e[a])||(n.push(e[a]),r=F(e[a].form?e[a].form:null));return t=R(n),r&&Object.keys(r).length>0&&(i.debug("Collecting form meta attributes",!1),t=Object.assign(r,t)),t},hasEmailOrPhone:function(e){return!(!e[f]&&!e[g])&&(!(!o.isEmail(e[f])&&!o.isPhone(e[g]))||void 0)},PAGE_SPENT_TIME:s,PAGE_LOAD_TIME:u,PAGE_SCROLL_PERCENT:d,EMAIL:f,PHONE:g,PHONE:g,SOURCE:"source",GA_COOKIE:v,EV_FORM_SUBMITTED:T,DISABLED_INPUT_TYPES:P}},function(e,t,r){const n=r(0),o="data-faitracker-form-bind",i="data-faitracker-click-bind",a="trigger-form-binding";function c(e){n.debug("Scanning for iframe forms.",!1);for(var t=document.querySelectorAll("iframe"),r=[],o=0;o<t.length;o++){var i=[];t[o].contentDocument&&t[o].contentDocument.querySelectorAll&&(i=t[o].contentDocument.querySelectorAll(e));for(var a=0;a<i.length;a++)r.push(i[a])}return r}function s(){return c("form")}function u(e){return!(!e||!e.form)&&e.form.querySelectorAll("[type='submit']")>0}function d(){window.clearInterval(window.FAITRACKER_FORM_BINDER_ID),n.debug("Stopped form binder task.")}function l(e,t,r){var n=e.getAttribute(t);n&&(n=n.trim(),r[t]=n)}function f(e=""){return e.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu,"").trim()}e.exports={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isPhone:function(e){if(!e||0==e.length||e.length>20)return!1;if(/[a-zA-Z]/g.test(e))return!1;var t=e.match(/\d/g);return!(!t||t.length<4||t.length>20)},isPossibleEmail:function(e){return e.indexOf("@")>-1&&e.indexOf(".")>-1},isFieldByMatch:function(e,t,r){if(!e||!t||""==t)return!1;var n=t.toLowerCase(),o=r&&""!=r?r.toLowerCase():null;return e.name&&e.name.toLowerCase().indexOf(n)>-1?!o||e.name.toLowerCase().indexOf(o)>-1:!!(e.placeholder&&e.placeholder.toLowerCase().indexOf(n)>-1)&&(!o||e.placeholder.toLowerCase().indexOf(o)>-1)},isPartOfForm:u,bindAllFormsOnSubmit:function(e,t){for(var r=s(),i=document.querySelectorAll("form"),a=[].slice.call(i),c=0;c<r.length;c++)a.push(r[c]);for(var u=0;u<a.length;u++){var d=0,l=0;a[u].getAttribute(o)||(d+=1,a[u].addEventListener("submit",function(r){l>0?l==d-1&&(l=0):(n.debug("Executing callback on submit of form.",!1),t(e,r.target),l+=1)}),a[u].setAttribute(o,!0));var f=a[u].querySelector('*[type="submit"]');f&&!f.getAttribute(o)&&(d+=1,f.addEventListener("click",function(r){l>0?l==d-1&&(l=0):(n.debug("Executing callback on click of form submit button.",!1),t(e,r.target.form),l+=1)}),f.setAttribute(o,!0))}},bindAllNonFormButtonOnClick:function(e,t){for(var r=document.querySelectorAll('button,input[type="button"],input[type="submit"]'),i=0;i<r.length;i++){var a=r[i];u(a)||a.getAttribute(o)||(a.addEventListener("click",function(){n.debug("Executing callback on click of button.",!1),t(e)}),a.setAttribute(o,!0))}},startBackgroundFormBinder:function(e,t){if(window.FAITRACKER_FORM_BINDER_ID)n.debug("Form binder started already.",!0);else{var r=window.setInterval(function(){n.debug("Triggering form binding event.",!1),document.dispatchEvent(new Event(a))},2e3);window.FAITRACKER_FORM_BINDER_ID=r,window.setTimeout(d,36e5)}},startBackgroundClickBinder:function(e,t){n.debug("Scanning for unbound clickable elements.",!1),window.setInterval(function(){!function(e,t){for(var r=document.querySelectorAll('button,input[type="button"],input[type="submit"]'),o=0;o<r.length;o++)r[o].getAttribute(i)||(r[o].addEventListener("click",function(r){n.debug("Executing callback on click of button as part of click capture.",!1),t(e,r.target)}),r[o].setAttribute(i,!0));var a=document.querySelectorAll("a");for(o=0;o<a.length;o++)a[o].getAttribute(i)||(a[o].addEventListener("click",function(r){n.debug("Executing callback on click of anchor as part of click capture.",!1);var o=null,i=r.composedPath?r.composedPath():r.path;if(r.target&&"A"==r.target.nodeName)o=r.target;else if(i){for(var a=0;a<i;a++)if("A"==i[a].nodeName){o=i[a];break}}else n.debug("Unable to get anchor element on click.",!1);o&&t(e,o)}),a[o].setAttribute(i,!0))}(e,t)},2e3)},getClickCapturePayloadFromElement:function(e){var t={},r=e.textContent;r||(r=e.value),""!=r&&void 0!==r&&(r=r.trim());var n=e.nodeName,o=e.nodeName;o&&""!=o&&(o=o.trim().toLowerCase()),"a"==o?n="ANCHOR":"button"==o&&(n="BUTTON"),"button"==e.getAttribute("type")&&(n="BUTTON");var i={};return i.display_text=f(r),i.element_type=n,""!=r&&void 0!=r||(r="unnamed_button_click"),l(e,"class",i),l(e,"id",i),l(e,"name",i),l(e,"rel",i),l(e,"role",i),l(e,"target",i),l(e,"href",i),l(e,"media",i),l(e,"type",i),t.display_name=f(r),t.element_type=n,t.element_attributes=i,t},getElemsFromTopAndIframes:function(e){for(var t=document.querySelectorAll(e),r=[].slice.call(t),n=c(e),o=0;o<n.length;o++)r.push(n[o]);return r},getFormsFromIframes:s,TRIGGER_FORM_BINDING_EVENT:a}},function(e,t,r){var n=r(0);const o=r(5);var i=r(1);const a="_faireq_",c="_fai_",s="/sdk/service/error";function u(e){return a+e}function d(e,t){window.localStorage.setItem(u(e),JSON.stringify(t))}function l(e,t=!0){var r=t?u(e):e;n.debug("Removed req from LS: "+r,!1),window.FAITRACKER_DISABLE_LS_REMOVE||window.localStorage.removeItem(r)}function f(){for(var e=Object.keys(window.localStorage),t=[],r=0;r<e.length;r++)0==e[r].indexOf(a)&&t.push(e[r]);return t}function g(e){return e&&e.domain&&e.error?h(o.api.host+s,e):Promise.reject("Sending error failed. Invalid payload.")}function p(e){var t="";"string"==typeof e&&(t=e),e instanceof Error&&e.message&&(t=e.stack);let r={};r.domain=window.location.host,r.url=window.location.href,r.error=t,g(r)}function m(e,t,r,o){let a={method:e};o&&void 0!=o&&(a.body=i.encode(JSON.stringify(o))),r&&void 0!=r&&(a.headers=r,a.headers["Content-Type"]="application/json");var c=f().length<=10,s=function(e){var t=e.indexOf("/sdk/event/track")>0||e.indexOf("/sdk/user/identify")>0||e.indexOf("/sdk/capture_click")>0;return!!window.FAITRACKER_LS_AVAILABLE&&t}(t)&&c,u=String(Date.now())+Math.random(),g=(new Date).getTime();return s&&d(u,{url:t,options:a,timestamp:g}),fetch(t,a).then(function(e){s&&l(u);var t=e;return t.json().then(function(e){return t.ok?{status:t.status,body:e}:(n.debug(t),Promise.resolve(t))})}).catch(function(e){return s&&!function(e){return!!e&&(e.toString().indexOf("abort")>-1||e.toString().indexOf("cancel")>-1)}(e)&&l(u),n.debug(e),Promise.resolve(e)})}function h(e,t,r={},n=""){return void 0!=n&&""!=n&&m("post",n,r,t),m("post",e,r,t)}e.exports={get:function(e,t={},r=""){return void 0!=r&&""!=r&&m("get",r,t),m("get",e,t)},post:h,processAllLocalStorageBacklogRequests:function(){if(window.FAITRACKER_LS_AVAILABLE){var e=function(){for(var e=f(),t={},r=0;r<e.length;r++)t[e[r]]=window.localStorage[e[r]];return t}(),t=Object.keys(e);t.length>0&&p("[STATUS] Processing localstorage.");for(var r=0;r<t.length;r++){var o=t[r],i=null;try{i=JSON.parse(e[o])}catch(t){p("Error parsing json from LS: "+e[o])}if(l(o,!1),null!=i){if(i.timestamp>0&&(new Date).getTime()-i.timestamp>18e5){n.debug("Payload older than 30 minutes skipped.",!1);continue}var a="Request failed on LS backlog processing:";fetch(i.url,i.options).then(function(e){var t=e;t.json().then(function(){t.ok||p(a+" "+i.url+" status "+t.status)})}).catch(function(e){p(a+" "+i.url+" with error "+JSON.stringify(e))})}}}},sendErrorAPI:g,getLocalStorageKey:u,getLocalStoragePropertyKey:function(e){return c+e},setLocalStorage:d}},function(e,t,r){"use strict";e.exports={api:{host:"https://api.factors.ai"}}},function(e,t,r){"use strict";const n="FAITRACKER_CACHE";e.exports={getFAITrackerCache:function(e){return window[n]||(window[n]={}),window[n][e]},setFAITrackerCache:function(e,t){window[n]||(window[n]={}),window[n][e]=t},getFAITrackerCacheObject:function(){return window[n]||(window[n]={}),window[n]},currentPageURLEventName:"currentPageURLEventName",currentPageTrackEventId:"currentPageTrackEventId",currentPageOriginalURL:"currentPageOriginalURL",currentPageSpentTimeInMs:"currentPageSpentTimeInMs",lastPollerId:"lastPollerId",trackPageOnSPA:"trackPageOnSPA",lastActivityTime:"lastActivityTime",lastPageProperties:"lastPageProperties"}},function(e,t,r){"use strict";const n=r(0),o=r(1);var i=r(8);const a=r(2);var c=new i,s=!1;function u(e,t={},r){try{return c.init(e,t,r).catch(c.handleError)}catch(e){return c.handleError(e)}}function d(){try{c.reset()}catch(e){c.handleError(e)}}function l(e,t={},r){try{c.track(e,t,!1,r).catch(c.handleError)}catch(e){c.handleError(e)}}function f(e,t=!1){try{c.page(e,t).catch(c.handleError)}catch(e){c.handleError(e)}}function g(e,t={}){try{c.updateEventProperties(e,t).catch(c.handleError)}catch(e){c.handleError(e)}}function p(e,t={}){try{c.identify(e,t).catch(c.handleError)}catch(e){c.handleError(e)}}function m(e={}){try{c.addUserProperties(e).catch(c.handleError)}catch(e){c.handleError(e)}}function h(){return c.getUserId()}function v(){return window.faitracker?window.faitracker:window.factors?window.factors:void 0}function E(){if(v()&&v().q&&v().q.length>0&&!s){s=!0,n.debug("Starting Queue",!1);try{for(;v().q.length>0;)switch(n.debug("Processing Queue",!1),v().q[0].k){case"message":if(v().q[0].a[0]===a.EV_FORM_SUBMITTED){var e=v().q[0].a[1];if(!a.hasEmailOrPhone(e)){n.debug("No email and phone, skipping form submit.",!1),v().q.shift();break}l(v().q[0].a[0],v().q[0].a[1]),v().q.shift()}break;case"track":l(v().q[0].a[0],v().q[0].a[1],v().q[0].a[2]),v().q.shift();break;case"reset":d(),v().q.shift();break;case"page":f(v().q[0].a[0],v().q[0].a[1]),v().q.shift();break;case"updateEventProperties":g(v().q[0].a[0],v().q[0].a[1]),v().q.shift();break;case"identify":p(v().q[0].a[0],v().q[0].a[1]),v().q.shift();break;case"addUserProperties":m(v().q[0].a[0]),v().q.shift();break;case"getUserId":h(),v().q.shift();break;default:c.handleError("Unknown call parameters")}}catch(e){c.handleError(e),s=!1}n.debug("Queue Processed",!1),s=!1}}let k={init:u,reset:d,track:l,page:f,updateEventProperties:g,identify:p,addUserProperties:m,getUserId:h,d:function(e){console.log(o.decode(e))}};v()&&v().TOKEN&&u(v().TOKEN,v().INIT_PARAMS,v().INIT_CALLBACK),window.addEventListener("FAITRACKER_INIT_EVENT",function(e){u(v().TOKEN,v().INIT_PARAMS,v().INIT_CALLBACK)}),window.addEventListener("FACTORS_INIT_EVENT",function(e){u(v().TOKEN,v().INIT_PARAMS,v().INIT_CALLBACK)}),window.addEventListener("FAITRACKER_INITIALISED_EVENT",function(e){E(),window.addEventListener("FAITRACKER_QUEUED_EVENT",function(e){E()})}),window.addEventListener("FACTORS_INITIALISED_EVENT",function(e){E(),window.addEventListener("FACTORS_QUEUED_EVENT",function(e){E()})}),e.exports=k},function(e,t,r){"use strict";var n=r(9);const o=r(0),i=r(3),a=r(1);var c=r(10);const s=r(11),u=r(2),d=r(6),{isLocalStorageAvailable:l}=r(1),{processAllLocalStorageBacklogRequests:f,getLocalStoragePropertyKey:g}=r(4),{lastActivityTime:p,getFAITrackerCache:m}=r(6),h=r(2),v=new Error("FAITracker SDK is not initialized."),E=new Error("No user."),k="data-faitracker-input-id";function A(){return o.debug("Checking if cookies have been stored: ",!1),n.isExist(s.cookie.USER_ID)}function I(e){return A()&&(e.user_id=n.getDecoded(s.cookie.USER_ID)),e}function _(){return window.location.host+window.location.pathname+a.getCleanHash(window.location.hash)}function w(){var e=a.getCurrentUnixTimestampInMs(),t=function(){var e=d.getFAITrackerCache(d.lastActivityTime);return e||0}();if(0!=t){if(e-t<100){var r=e-t,n=C()+r;d.setFAITrackerCache(d.currentPageSpentTimeInMs,n),o.debug("Page spent time: "+n+"ms")}d.setFAITrackerCache(d.lastActivityTime,e)}else d.setFAITrackerCache(d.lastActivityTime,e)}function b(e){return"[object Object]"===Object.prototype.toString.call(e)}const T="lastTimeoutId_";function P(e=0,t=0){if(0!=e&&0!=t){var r=T+e;d.getFAITrackerCacheObject()[r]=t}}function y(e){var t=function(e=0){if(0!=e){var t=T+e;return d.getFAITrackerCacheObject()[t]}}(e);t&&(clearTimeout(t),o.debug("Cleared timeout of "+e+"ms :"+t,!1))}function C(){var e=d.getFAITrackerCache(d.currentPageSpentTimeInMs);return e||0}function S(){this.client=null,this.config={}}function F(e={}){e=u.getTypeValidated(e);var t=document.referrer,r=d.getFAITrackerCache(d.currentPageOriginalURL);return d.getFAITrackerCache(d.trackPageOnSPA)&&r&&(t=r),e=Object.assign(e,u.getEventDefault(t))}function R(e){o.debug("Binding for form capture",!1),i.bindAllFormsOnSubmit(e,e.captureAndTrackFormSubmit),i.bindAllNonFormButtonOnClick(e,e.captureAndTrackNonFormInput)}function O(e,t){var r=t.value.trim();if(!(r.length<4)&&i.isPossibleEmail(r)){var n=t.getAttribute(k);void 0==window.FAITRACKER_FORM_FILLS&&(window.FAITRACKER_FORM_FILLS={});var a=window.FAITRACKER_FORM_FILLS[n];if(""!=r&&r!=a){window.FAITRACKER_FORM_FILLS[n]=r;var c={form_id:n.split(".")[0],field_id:n,value:r};return c.event_properties=F(),I(c),o.debug(c,!1),e.client.captureFormFill(c)}}}function L(e){for(var t=document.querySelectorAll("input"),r=0;r<t.length;r++)h.DISABLED_INPUT_TYPES.indexOf(t[r].type)>=0||O(e,t[r])}function N(e){o.debug("Binding for form fills capture",!1);var t=i.getElemsFromTopAndIframes("form");window.FAITRACKER_FORMS_ID||(window.FAITRACKER_FORMS_ID=0);for(var r=0;r<t.length;r++)t[r].getAttribute("data-faitracker-form-id")||(t[r].setAttribute("data-faitracker-form-id","form-"+window.FAITRACKER_FORMS_ID),window.FAITRACKER_FORMS_ID++);var n=i.getElemsFromTopAndIframes("input");window.FAITRACKER_INPUTS_ID||(window.FAITRACKER_INPUTS_ID=0);for(var a=0;a<n.length;a++)if(!(n[a].getAttribute(k)||h.DISABLED_INPUT_TYPES.indexOf(n[a].type)>=0)){var c="noform";n[a].form&&""!=n[a].form.getAttribute("data-faitracker-form-id")&&(c=n[a].form.getAttribute("data-faitracker-form-id")),n[a].setAttribute(k,c+".field-"+window.FAITRACKER_INPUTS_ID),n[a].addEventListener("input",function(){O(e,this)}),n[a].addEventListener("change",function(){O(e,this)}),window.FAITRACKER_INPUTS_ID++}for(var s=5e3;s<3e4;)setTimeout(function(){L(e)},s),s+=5e3}S.prototype.init=function(e,t={},r){if(e=a.validatedStringArg("token",e),this.isInitialized()&&!this.isSameToken(e))return Promise.reject(new Error("FAITrackerInitError: Initialized already. Use reset() and init(), if you really want to do this."));if(!e)return Promise.reject(new Error("FAITrackerArgumentError: Invalid token."));t||(t={});let i=null;i=t.host&&""!==t.host?new c(e,t.host,t.host2):new c(e);var u=!0;!1===t.track_on_init&&(u=!1),!0===t.track_page_on_spa&&d.setFAITrackerCache(d.trackPageOnSPA,!0),l()&&(window.FAITRACKER_LS_AVAILABLE=!0);var g={},p=this;return I(g),i.getInfo(g).then(function(e){return e.status<200||e.status>308?(o.errorLine("Get project settings failed with code : ",e.status),Promise.reject(new Error("FAITrackerRequestError: Init failed. App configuration failed."))):e}).then(function(e){return p.config=e.body,p.client=i,function e(t,i,a){!function(e){if(o.debug("Setting Cookie with response: ",!1),e&&e.body&&e.body.user_id){let t=e.body.user_id.trim();t&&n.setEncoded(s.cookie.USER_ID,t,s.cookie.EXPIRY)}}(i);A()?(o.debug("Cookie consent is enabled. Continuing process",!1),window.dispatchEvent(new CustomEvent("FAITRACKER_INITIALISED_EVENT")),window.dispatchEvent(new CustomEvent("FACTORS_INITIALISED_EVENT")),function(e,t){Promise.resolve().then(function(){o.debug("Auto Track call starts",!1);var n=d.getFAITrackerCache(d.trackPageOnSPA)||e.getConfig("auto_track_spa_page_view");return d.setFAITrackerCache(d.trackPageOnSPA,n),t?e.autoTrack(e.getConfig("auto_track"),!1,r,!0):null}).then(function(){return e.autoFormCapture(e.getConfig("auto_form_capture"))}).then(function(){return e.autoCaptureFormFills(e.getConfig("auto_capture_form_fills"))}).then(function(){return e.autoClickCapture(e.getConfig("auto_click_capture"))}).then(function(){return e.autoDriftEventsCapture(e,e.getConfig("int_drift"))}).then(function(){return e.captureGaCookie(e,!0)}).catch(function(e){return o.debug(e),Promise.resolve(e.stack+" during get_settings on init.")})}(t,a)):(o.debug("Checking for cookie consent.",!1),setTimeout(()=>{e(t,i,a)},1e3))}(p,e,u),f(),e})},S.prototype.track=function(e,t,r=!1,n){if(!this.isInitialized())return Promise.reject(v);if(!A())return Promise.reject(E);if(!function(e){return e==u.EV_FORM_SUBMITTED||0!=e.indexOf("$")}(e=a.validatedStringArg("event_name",e)))return Promise.reject(new Error("FAITrackerError: Invalid event name."));var i=window.location.href;let c={};if(I(c),c.event_name=e,c.event_properties=F(t),c.user_properties=u.getUserDefault(),c.auto=r,r){var s=u.getPageLoadTime();s>0&&(c.event_properties[u.PAGE_LOAD_TIME]=s)}return this.client.track(c).then(function(t){if(t&&t.body){if(!t.body.event_id)return o.debug("No event_id found on track response.",!1),t;r&&function(e,t,r){e&&""!=e&&(d.setFAITrackerCache(d.currentPageOriginalURL,r),d.setFAITrackerCache(d.currentPageURLEventName,t),d.setFAITrackerCache(d.currentPageTrackEventId,e),d.setFAITrackerCache(d.lastPageProperties,{}),d.setFAITrackerCache(d.lastActivityTime,0),d.setFAITrackerCache(d.currentPageSpentTimeInMs,0))}(t.body.event_id,e,i),n&&n(t.body.event_id)}return t})},S.prototype.updateEventProperties=function(e,t={}){if(!this.isInitialized())return Promise.reject(v);if(!A())return Promise.reject(E);if(!e||""==e)return Promise.reject("No eventId provided for update.");0==Object.keys(t).length&&o.debug("No properties given to update event.",!1);var r={event_id:e,properties:t};return this.client.updateEventProperties(I(r))},S.prototype.updatePagePropertiesIfChanged=function(e=0){let t=d.getFAITrackerCache(d.lastPageProperties),r=t&&t[u.PAGE_SPENT_TIME]?t[u.PAGE_SPENT_TIME]:0,n=t&&t[u.PAGE_SCROLL_PERCENT]?t[u.PAGE_SCROLL_PERCENT]:0;var i=C(),a=u.getPageScrollPercent();0==i&&e>0&&(i=e),(0==r||e>0)&&(i+=u.getPageLoadTimeInMs());var c={};if(i>0&&i>r){var s=i/1e3;s=Number(s.toFixed(2)),c[u.PAGE_SPENT_TIME]=s}if(a>0&&a>n&&(a=Number(a.toFixed(2)),c[u.PAGE_SCROLL_PERCENT]=a),Object.keys(c).length>0){o.debug("Updating page properties : "+JSON.stringify(c),!1);var l={event_id:d.getFAITrackerCache(d.currentPageTrackEventId),properties:c};this.client.updateEventProperties(I(l)).catch(o.debug)}else o.debug("No change on page properties, skipping update for : "+JSON.stringify(t),!1);d.setFAITrackerCache(d.lastPageProperties,{[u.PAGE_SCROLL_PERCENT]:a,[u.PAGE_SPENT_TIME]:i})},S.prototype.autoTrack=function(e=!1,t=!1,r,n=!1){if(!e)return!1;if(!t&&function(){var e=d.getFAITrackerCache(d.currentPageTrackEventId);return!(!e||void 0==e)&&_()==d.getFAITrackerCache(d.currentPageURLEventName)}())return o.debug("Page tracked already as per store : "+JSON.stringify(d.getFAITrackerCacheObject())),!1;if(!A())return!1;var i=this;this.track(_(),u.getFromQueryParams(window.location),!0,r);y(5e3),P(5e3,setTimeout(function(){o.debug("Triggered properties update after 5s.",!1),i.updatePagePropertiesIfChanged(5e3)},5e3));y(1e4),P(1e4,setTimeout(function(){o.debug("Triggered properties update after 10s.",!1),i.updatePagePropertiesIfChanged(1e4)},1e4));var a=d.getFAITrackerCache(d.lastPollerId);clearInterval(a),a&&o.debug("Cleared previous page poller: "+a,!1);var c=setInterval(function(){i.updatePagePropertiesIfChanged()},2e4);if(d.setFAITrackerCache(d.lastPollerId,c),window.addEventListener("beforeunload",function(){i.updatePagePropertiesIfChanged()}),window.addEventListener("scroll",w),window.addEventListener("mouseover",w),window.addEventListener("mousemove",w),!d.getFAITrackerCache(d.trackPageOnSPA)&&window.history&&void 0!==window.onpopstate){var s=window.location.href;window.addEventListener("popstate",function(){o.debug("Triggered window.onpopstate goto: "+window.location.href+", prev: "+s),s!==window.location.href&&(i.updatePagePropertiesIfChanged(),i.track(_(),u.getFromQueryParams(window.location),!0,r),s=window.location.href)})}d.getFAITrackerCache(d.trackPageOnSPA)&&setInterval(function(){d.getFAITrackerCache(d.currentPageURLEventName)&&d.getFAITrackerCache(d.currentPageURLEventName)!=_()&&i.track(_(),u.getFromQueryParams(window.location),!0,r)},1e3)},S.prototype.captureAndTrackFormSubmit=function(e,t){t||o.debug("Form element is undefined on capture form submit.");var r=u.getPropertiesFromForm(t),n=u.getFormMetaAttributes(t);n&&Object.keys(n).length>0&&(o.debug("Collecting form meta attributes",!1),r=Object.assign(n,r)),r&&0!=Object.keys(r).length||o.debug("No properties captured from form.",!1),r[u.EMAIL]||r[u.PHONE]?(o.debug("Capturing form submit with properties: "+JSON.stringify(r),!1),e.track(u.EV_FORM_SUBMITTED,r)):o.debug("No email and phone, skipping form submit.",!1)},S.prototype.captureAndTrackNonFormInput=function(e){var t=u.getPropertiesFromAllNonFormInputs();t[u.EMAIL]||t[u.PHONE]?(o.debug("Capturing non-form submit with properties: "+JSON.stringify(t),!1),e.track(u.EV_FORM_SUBMITTED,t)):o.debug("No email and phone, skipping form submit.",!1)},S.prototype.autoDriftEventsCapture=function(e,t){return!!t&&(function e(t,r,n=0,i=null,a=1e4,c=10){if(window[t]){if(!i)return void r();if(Array.isArray(window[t])&&window[t].find(function(e){return b(e)&&Object.keys(e).indexOf(i)>-1}))return void r()}n<=c&&(o.debug("Checking for key: times "+n,!1),setTimeout(function(){e(t,r,n+1,i,a,c)},a))}("drift",function(){window.drift.on("phoneCapture",function(t){if(!i.isPhone(t.phone))return null;var r={};r[u.PHONE]=t.phone,r[u.SOURCE]="drift",e.track(u.EV_FORM_SUBMITTED,r)}),window.drift.on("emailCapture",function(t){if(!t.data||!t.data.email||!i.isEmail(t.data.email))return null;var r={};r[u.EMAIL]=t.data.email,r[u.SOURCE]="drift",e.track(u.EV_FORM_SUBMITTED,r)})}),!0)},S.prototype.captureGaCookie=function(e,t){if(o.debug("Checking to capture Ga cookie"),!t)return!1;!function e(t,r,i=0,a=1e4,c=10){var s=n.get(t);s?r(s):i<=c&&(o.debug("Checking for cookie : times "+i,!1),setTimeout(function(){e(t,r,i+1,a,c)},a))}("_ga",function(t){h.GA_COOKIE;if(window.FAITRACKER_LS_AVAILABLE){const r=window.localStorage.getItem(g("GA"));if(o.debug(`Cookie value currently is ${t}`),o.debug(`Cookie value stored is ${r}`),t&&r===t)return void o.debug("Cookie value is same as local storage, hence not capturing");o.debug("Cookie value is not same as local storage, hence capturing"),e.addUserProperties({GA_COOKIE:t}),localStorage.setItem(g("GA"),t)}else e.addUserProperties({GA_COOKIE:t})})},S.prototype.autoFormCapture=function(e=!1){if(!e)return!1;var t=this;return R(t),i.startBackgroundFormBinder(),document.addEventListener(i.TRIGGER_FORM_BINDING_EVENT,function(e){R(t)}),!0},S.prototype.autoCaptureFormFills=function(e){if(!e)return!1;N(this),i.startBackgroundFormBinder();var t=this;document.addEventListener(i.TRIGGER_FORM_BINDING_EVENT,function(){N(t)})},S.prototype.captureClick=function(e,t){if(!e.isInitialized())return Promise.reject(v);if(t||o.debug("Element is undefined on capture click."),!A())return Promise.reject(E);var r=i.getClickCapturePayloadFromElement(t);return r.event_properties=F(),r.user_properties=u.getUserDefault(),I(r),o.debug(t,!1),o.debug("Click capture payload: "+JSON.stringify(r),!1),e.client.captureClick(r)},S.prototype.autoClickCapture=function(e=!1){if(!e)return!1;i.startBackgroundClickBinder(this,this.captureClick)},S.prototype.page=function(e,t=!1){return this.isInitialized()?Promise.resolve(this.autoTrack(this.getConfig("auto_track"),t,e)):Promise.reject(v)},S.prototype.identify=function(e,t={}){if(!this.isInitialized())return Promise.reject(v);if(!A())return Promise.reject(E);e=a.validatedStringArg("customer_user_id",e);let r={};return I(r),r.c_uid=e,Object.keys(t).length>0&&(r.user_properties=t),this.client.identify(r)},S.prototype.addUserProperties=function(e={}){if(!this.isInitialized())return Promise.reject(v);if(!A())return Promise.reject(E);if("object"!=typeof e)return Promise.reject(new Error("FAITrackerArgumentError: Properties should be an Object(key/values)."));if(0==Object.keys(e).length)return Promise.reject("No changes. Empty properties.");e=u.getTypeValidated(e),e=Object.assign(e,u.getUserDefault());let t={};return I(t),t.properties=e,this.client.addUserProperties(t)},S.prototype.reset=function(){this.client=null,this.config={},n.remove(s.cookie.USER_ID)},S.prototype.getClient=function(){return this.client},S.prototype.getConfig=function(e){if(void 0!=this.config[e])return this.config[e];o.errorLine(new Error("FAITrackerConfigError: Config not present."))},S.prototype.isInitialized=function(){return!!this.client&&!!this.config&&Object.keys(this.config).length>0},S.prototype.isSameToken=function(e){return this.client&&this.client.token&&this.client.token===e},S.prototype.getUserId=function(){return n.getDecoded(s.cookie.USER_ID)},S.prototype.handleError=function(e){var t="";"string"==typeof e&&(t=e),e instanceof Error&&e.message&&(t=e.stack);let r={};return r.domain=window.location.host,r.url=window.location.href,r.error=t,r.auto_track_url=_(),I(r),new c("","").sendError(r),o.debug(e),Promise?Promise.resolve(e):e},e.exports=S},function(e,t){function r(e,t,r){let n="";if(r){let e=new Date;e.setTime(e.getTime()+24*r*60*60*1e3),n="; expires="+e.toUTCString()}let o=function(){var e,t,r="try_get_old_cookie=try_get_old_value",n=window.location.hostname.split(".");for(e=n.length-1;e>=0;e--)if(t=n.slice(e).join("."),document.cookie=r+";domain=."+t+";",document.cookie.indexOf(r)>-1)return document.cookie=r.split("=")[0]+"=;domain=."+t+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",t;return window.location.hostname}();document.cookie=e+"="+(t||"")+n+"; domain="+o+"; path=/"}function n(e){let t=e+"=",r=document.cookie.split(";");for(let e=0;e<r.length;e++){let n=r[e];for(;" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}e.exports={set:r,get:n,setEncoded:function(e,t,n){r(e,btoa(t),n)},getDecoded:function(e){let t=n(e);return t&&(t=atob(t)),t},remove:function(e){document.cookie=e+"=; Max-Age=-99999999;"},isExist:function(e){return 0==document.cookie.indexOf(e+"=")||document.cookie.indexOf("; "+e+"=")>=0}}},function(e,t,r){var n=r(4);const o=r(5);function i(e,t="",r=""){this.token=e,this.host=t,this.host2=r}i.prototype.getURL=function(e){return""!=this.host?this.host+e:o.api.host+e},i.prototype.getURL2=function(e){return""==this.host2?this.host2:this.host2+e},i.prototype.setToken=function(e){this.token=e},i.prototype.isInitialized=function(){return this.token&&this.token.trim().length>0},i.prototype.getHeaders=function(){return{Authorization:this.token}},i.prototype.track=function(e){return e&&e.event_name?n.post(this.getURL("/sdk/event/track"),e,this.getHeaders(),this.getURL2("/sdk/event/track")):Promise.reject("Track failed. API Client invalid payload. Missing event_name.")},i.prototype.identify=function(e){return e&&e.c_uid?n.post(this.getURL("/sdk/user/identify"),e,this.getHeaders(),this.getURL2("/sdk/user/identify")):Promise.reject("Identify failed. API Client invalid payload. Missing customer_user_id.")},i.prototype.addUserProperties=function(e){return e&&e.properties?n.post(this.getURL("/sdk/user/add_properties"),e,this.getHeaders(),this.getURL2("/sdk/user/add_properties")):Promise.reject("Add properties failed. Missing properties on payload.")},i.prototype.updateEventProperties=function(e){return e&&e.event_id&&e.properties?n.post(this.getURL("/sdk/event/update_properties"),e,this.getHeaders(),this.getURL2("/sdk/event/update_properties")):Promise.reject("Update event properties failed. Invalid payload.")},i.prototype.captureClick=function(e){return e&&e.display_name&&e.element_type&&e.element_attributes&&e.user_id&&e.event_properties&&e.user_properties?n.post(this.getURL("/sdk/capture_click"),e,this.getHeaders(),this.getURL2("/sdk/capture_click")):Promise.reject("Capture click failed. Invalid payload.")},i.prototype.captureFormFill=function(e){return e&&e.form_id&&e.field_id&&e.user_id?n.post(this.getURL("/sdk/form_fill"),e,this.getHeaders(),this.getURL2("/sdk/form_fill")):Promise.reject("Form fill failed. Invalid payload.")},i.prototype.getInfo=function(e){return e?n.post(this.getURL("/sdk/get_info"),e,this.getHeaders(),this.getURL2("/sdk/get_info")):Promise.reject("GetInfo failed. Invalid payload.")},i.prototype.sendError=function(e){return n.sendErrorAPI(e)},e.exports=i},function(e,t){e.exports={cookie:{USER_ID:"_fuid",EXPIRY:730}}}]);