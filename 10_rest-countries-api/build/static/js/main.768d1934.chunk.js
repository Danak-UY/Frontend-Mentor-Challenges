(this["webpackJsonp10_rest-countries-api"]=this["webpackJsonp10_rest-countries-api"]||[]).push([[0],{30:function(n,e,t){n.exports=t(43)},35:function(n,e,t){},40:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(16),i=t.n(o),c=(t(35),t(5)),l=t(17),u=t(15),m=t(4),s=(t(40),t(11));function d(n,e){return n.filter((function(n){return n.region===e||""===e}))}function p(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}var f=t(2),g=t(3);function h(){var n=Object(f.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n"]);return h=function(){return n},n}var b=g.a.div(h());var v=function(n){var e=n.children;return a.a.createElement(b,null,e)},E=t(7);function y(){var n=Object(f.a)(["\n  background-color: transparent;\n  border: none;\n  padding: 1rem;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: var(--detail-page-body);\n  text-transform: capitalize;\n  color: var(--cl-text);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease;\n  border-radius: 0.5rem;\n  user-select: none;\n\n  &:hover {\n    background-color: var(--cl-background);\n  }\n\n  input {\n    display: none;\n    position: absolute;\n    top: -1rem;\n    left: -1rem;\n    width: 0px;\n    height: 0px;\n  }\n\n  ion-icon {\n    font-size: 1.25rem;\n    margin-right: 0.5rem;\n  }\n"]);return y=function(){return n},n}var x=g.a.label(y());var w=function(){var n=Object(r.useRef)(),e=Object(r.useState)("moon-outline"),t=Object(E.a)(e,2),o=t[0],i=t[1],c=Object(r.useState)("Dark mode"),l=Object(E.a)(c,2),u=l[0],m=l[1];function s(e){e.matches&&n.current.click(),!e.matches&&n.current.checked&&n.current.click()}return Object(r.useEffect)((function(){var n=window.matchMedia("(prefers-color-scheme: dark)");n.addListener(s),s(n)}),[]),a.a.createElement(x,null,a.a.createElement("ion-icon",{name:o}),a.a.createElement("input",{type:"checkbox",id:"toggle-theme",onChange:function(){n.current.checked?(document.body.setAttribute("data-theme","dark"),m("Light mode"),i("sunny-outline")):(document.body.removeAttribute("data-theme","dark"),m("Dark mode"),i("moon-outline"))},ref:n}),a.a.createElement("span",null,u))};function O(){var n=Object(f.a)(["\n  background-color: var(--cl-elements);\n  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);\n  padding: 1.5rem 0;\n\n  .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 2rem;\n  }\n\n  h1 {\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--cl-text);\n  }\n\n  @media screen and (min-width: 768px) {\n    h1 {\n      font-size: 1.5rem;\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    .header-content {\n      padding: 0 2rem;\n    }\n  }\n"]);return O=function(){return n},n}var j=g.a.div(O());var k=function(){return a.a.createElement(j,null,a.a.createElement(v,null,a.a.createElement("div",{className:"header-content"},a.a.createElement(u.b,{to:"/"},a.a.createElement("h1",null,"Where in the world?")),a.a.createElement(w,null))))};function C(n){return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function N(n){return n.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}function L(){var n=Object(f.a)(["\n  border-radius: 0.5rem;\n  background-color: var(--cl-elements);\n  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.04);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:hover {\n    box-shadow: 0px 4px 16px 0px hsla(200, 15%, 8%, 0.08);\n  }\n\n  .country-flag {\n    overflow: hidden;\n    border-radius: 0.5rem 0.5rem 0 0;\n    img {\n      width: 100%;\n      height: 15rem;\n      object-fit: cover;\n    }\n  }\n\n  .country-info {\n    padding: 1.5rem;\n    h2 {\n      font-size: 1.25rem;\n      margin-bottom: 1rem;\n      font-weight: 700;\n    }\n    p {\n      margin-bottom: 0.5rem;\n\n      strong {\n        font-weight: 600;\n      }\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .country-flag {\n      img {\n        height: 12rem;\n      }\n    }\n  }\n"]);return L=function(){return n},n}var B=g.a.div(L());var R=function(n){var e=n.flag,t=n.name,r=n.population,o=n.region,i=n.capital,c=n.alpha3Code,l=Object(m.f)();return a.a.createElement(B,{onClick:function(){l.push("/country/".concat(N(t),"/").concat(c))}},a.a.createElement("div",{className:"country-flag"},a.a.createElement("img",{loading:"lazy",src:e,alt:"".concat(t," flag")})),a.a.createElement("div",{className:"country-info"},a.a.createElement("h2",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Population:")," ","".concat(C(r))),a.a.createElement("p",null,a.a.createElement("strong",null,"Region:")," ",o),a.a.createElement("p",null,a.a.createElement("strong",null,"Capital:")," ",i)))},_=t(18),T=t.n(_);function S(){var n=Object(f.a)(["\n  border-radius: 0.5rem;\n  background-color: var(--cl-elements);\n  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.04);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:hover {\n    box-shadow: 0px 4px 16px 0px hsla(200, 15%, 8%, 0.08);\n  }\n\n  .country-flag {\n    overflow: hidden;\n    border-radius: 0.5rem 0.5rem 0 0;\n    span {\n      border-radius: 0;\n      line-height: initial;\n    }\n  }\n\n  .country-info {\n    padding: 1.5rem;\n    span {\n      margin-bottom: 0.5rem !important;\n    }\n    span:first-of-type {\n      margin-bottom: 1rem;\n    }\n  }\n"]);return S=function(){return n},n}var z=g.a.div(S()),Y=function(){return a.a.createElement(z,null,a.a.createElement("div",{className:"country-flag"},a.a.createElement(T.a,{height:180})),a.a.createElement("div",{className:"country-info"},a.a.createElement(T.a,{height:30,className:"skeleton-h2"}),a.a.createElement(T.a,{count:3,className:"skeleton-p"})))};function A(){var n=Object(f.a)(["\n  padding: 0 2rem;\n  text-align: center;\n  color: var(--cl-input);\n  font-size: 1.2rem;\n  transition: 0.3s ease;\n  margin: 2rem 0;\n\n  a {\n    font-weight: 600;\n    cursor: pointer;\n    transition: 0.3s ease;\n\n    &:hover {\n      color: var(--cl-text);\n    }\n  }\n"]);return A=function(){return n},n}function F(){var n=Object(f.a)(["\n  padding: 0 4rem;\n  display: grid;\n  justify-content: flex-start;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  grid-gap: 3rem;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 2rem;\n  }\n"]);return F=function(){return n},n}var I=g.a.div(F()),M=g.a.p(A());var U=function(){var n=Object(c.b)(),e=Object(c.c)((function(n){return n.filterByName})),t=Object(c.c)((function(n){return n.countryList})),o=Object(r.useState)(!0),i=Object(E.a)(o,2),l=i[0],u=i[1],m=Object(r.useState)(!1),s=Object(E.a)(m,2),d=s[0],p=s[1],f=Object(c.c)((function(n){return""!==n.filterByRegion||""!==n.filterByName?n.coutryFilteredList:n.countryList}));return Object(r.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(n){return n.json()})).then((function(e){n({type:"SET_COUNTRY_LIST",payload:e}),u(!1)})).catch((function(n){console.log(n),p(!0),u(!1)}))}),[n]),a.a.createElement(v,null,d&&0===f.length&&a.a.createElement(M,null,"We're experiencing problems with the country list, please try again later. Thanks!"),0===f.length&&""!==e&&a.a.createElement(M,null,"No countries match the filters, let's"," ",a.a.createElement("a",{onClick:function(){n({type:"SET_COUNTRY_LIST",payload:t})}},"start again")),a.a.createElement(I,null,l&&[1,2,3,4,5,6,7,8].map((function(n){return a.a.createElement(Y,null)})),!l&&f.map((function(n){var e=n.flag,t=n.name,r=n.population,o=n.region,i=n.capital,c=n.alpha3Code;return a.a.createElement(R,{key:c,flag:e,name:t,population:r,region:o,capital:i,alpha3Code:c})}))))};function D(){var n=Object(f.a)(["\n  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);\n  display: flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  background-color: var(--cl-elements);\n\n  ion-icon {\n    font-size: 1.5rem;\n    color: var(--cl-input);\n    padding: 0 2rem;\n  }\n\n  input {\n    border: none;\n    padding: 1.5rem 1rem 1.5rem 0;\n    font-family: var(--base-font-family);\n    color: var(--cl-input);\n    flex: 1;\n    background-color: transparent;\n    outline: 0;\n  }\n"]);return D=function(){return n},n}var W=g.a.label(D());var G=function(n){var e=Object.assign({},n);return a.a.createElement(W,null,a.a.createElement("ion-icon",{name:"search-outline"}),a.a.createElement("input",Object.assign({type:"text",placeholder:"Search for a country..."},e)))};function J(){var n=Object(f.a)(["\n  position: relative;\n\n  .clear-button {\n    position: absolute;\n    right: 1rem;\n    top: 2.1rem;\n    transform: translateY(-50%);\n    background-color: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 0.5rem;\n    transition: 0.3s ease;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:hover {\n      background-color: var(--cl-background);\n      transform: translateY(-50%) rotate(90deg);\n    }\n\n    ion-icon {\n      font-size: 1.5rem;\n      color: var(--cl-input);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 50rem;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 35rem;\n  }\n"]);return J=function(){return n},n}var P=g.a.div(J());var $=function(){var n=Object(c.c)((function(n){return n.filterByName})),e=Object(c.b)();return a.a.createElement(P,null,n&&a.a.createElement("button",{className:"clear-button",onClick:function(){e({type:"SET_COUNTRY_BY_NAME",payload:""})}},a.a.createElement("ion-icon",{name:"close-outline"})),a.a.createElement(G,{onChange:function(n){e({type:"SET_COUNTRY_BY_NAME",payload:n.target.value})},value:n}))};function H(){var n=Object(f.a)(['\n  .dropdown {\n    border-radius: 0.5rem;\n    background-color: var(--cl-elements);\n    box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);\n    cursor: pointer;\n    font-size: 1rem;\n    padding: 1.5rem;\n    position: relative;\n    color: var(--cl-input);\n  }\n  .dropdown ion-icon {\n    margin-left: 1rem;\n    color: var(--cl-input);\n    position: absolute;\n    top: 1.8rem;\n    right: 2rem;\n  }\n  .dropdown.open ion-icon {\n    transform: rotate(180deg);\n  }\n  .dropdown ul {\n    margin-top: 0.5rem;\n    border-radius: 0.5rem;\n    background-color: var(--cl-elements);\n    box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);\n    padding: 0.5rem;\n    text-align: left;\n    position: absolute;\n    top: 0%;\n    left: 0;\n    list-style-type: none;\n    width: 100%;\n    z-index: -1;\n    opacity: 0;\n    height: 0px;\n    overflow: hidden;\n  }\n  .dropdown.open ul {\n    opacity: 1;\n    top: 100%;\n    z-index: 99;\n    height: 14.5rem;\n  }\n  .dropdown.open ul.reset-filter {\n    height: 16.8rem;\n  }\n  .dropdown.open ul.reset-filter::before {\n    content: "";\n    background-color: var(--cl-background);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 3.5rem;\n    transition: 0.3s ease;\n  }\n  .dropdown ul li {\n    margin: 0.25rem 0;\n    padding: 0.5rem 1rem;\n    position: relative;\n    z-index: 5;\n\n    &:hover {\n      color: var(--cl-text);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 20rem;\n    margin-left: auto;\n  }\n']);return H=function(){return n},n}var q=g.a.div(H());var K=function(){var n=Object(c.b)(),e=Object(r.useState)(!1),t=Object(E.a)(e,2),o=t[0],i=t[1],l=Object(c.c)((function(n){return n.filterByRegion})),u=function(e){n({type:"FILTER_BY_REGION",payload:e})};return a.a.createElement(q,{onChange:function(e){var t=e.target.value;n({type:"FILTER_BY_REGION",payload:t})}},a.a.createElement("div",{className:"dropdown ".concat(o?"open":""),onClick:function(){return i(!o)}},"Filter by Region ",l&&"( ".concat(l," )"),a.a.createElement("ion-icon",{name:"chevron-down-outline"}),a.a.createElement("ul",{className:l&&"reset-filter"},a.a.createElement("li",{onClick:function(){return u("Africa")}},"Africa"),a.a.createElement("li",{onClick:function(){return u("Americas")}},"Americas"),a.a.createElement("li",{onClick:function(){return u("Asia")}},"Asia"),a.a.createElement("li",{onClick:function(){return u("Europe")}},"Europe"),a.a.createElement("li",{onClick:function(){return u("Oceania")}},"Oceania"),l&&a.a.createElement("li",{onClick:function(){return u("")}},"Reset filter"))))};function Q(){var n=Object(f.a)(["\n  padding: 3rem 2rem;\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 2rem;\n  }\n\n  @media screen and (min-width: 768px) {\n    .grid {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n"]);return Q=function(){return n},n}var V=g.a.div(Q());var X=function(){return a.a.createElement(v,null,a.a.createElement(V,null,a.a.createElement("div",{className:"grid"},a.a.createElement($,null),a.a.createElement(K,null))))};function Z(){var n=Object(f.a)(["\n  padding: 0.75rem 1.5rem;\n  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.08);\n  border: none;\n  background-color: var(--cl-elements);\n  border-radius: 0.25rem;\n  transition: 0.3s ease;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-family: var(--base-font-family);\n  color: var(--cl-text);\n\n  &:hover {\n    background-color: var(--cl-background);\n  }\n\n  ion-icon {\n    font-size: 1.2rem;\n    margin-right: 0.5rem;\n  }\n"]);return Z=function(){return n},n}var nn=g.a.button(Z());var en=function(n){var e=n.icon,t=void 0===e?"":e,r=n.text,o=n.handleClick;return a.a.createElement(nn,{onClick:o},t&&a.a.createElement("ion-icon",{name:t}),r)};function tn(){var n=Object(f.a)(['\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n    margin-bottom: 1.5rem;\n  }\n\n  h2 {\n    margin-bottom: 1.5rem;\n  }\n\n  p {\n    margin-bottom: 0.75rem;\n    strong {\n      font-weight: 600;\n    }\n  }\n\n  h3 {\n    font-weight: 600;\n    margin-bottom: 1.5rem;\n  }\n\n  .borders {\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 1rem;\n  }\n\n  img {\n    max-width: 100%;\n    border-radius: 0.5rem;\n    box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.04);\n    margin: 2rem auto;\n  }\n\n  .items {\n    span {\n      margin-right: 5px;\n      &:after {\n        content: ",";\n      }\n      &:last-child {\n        &:after {\n          display: none;\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    .grid {\n      grid-template-columns: 1fr;\n    }\n    .country-info {\n      padding: 2rem 0;\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    align-items: center;\n    grid-gap: 6rem;\n    .grid {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n']);return tn=function(){return n},n}var rn=g.a.div(tn());var an=function(n){var e=n.flag,t=n.name,o=n.nativeName,i=n.population,l=n.region,u=n.subregion,m=n.capital,s=n.topLevelDomain,d=n.currencies,p=void 0===d?[]:d,f=n.languages,g=void 0===f?[]:f,h=n.borders,b=void 0===h?[]:h,v=(n.alpha3Code,n.handleClick),y=Object(c.c)((function(n){return n.countryList})),x=Object(r.useState)([]),w=Object(E.a)(x,2),O=w[0],j=w[1];function k(n){var e=function(n){if(""===n)return null;var e=y.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(E.a)(e,1)[0]}(n.target.innerHTML);v(e)}return Object(r.useEffect)((function(){var n;j(0===(n=b).length?[]:y.filter((function(e){return n.includes(e.alpha3Code)})))}),[b]),a.a.createElement(rn,null,a.a.createElement("img",{src:e,alt:"".concat(t," flag")}),a.a.createElement("div",{className:"country-info"},a.a.createElement("h2",null,t),a.a.createElement("div",{className:"grid"},a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("strong",null,"Native Name:")," ",o),a.a.createElement("p",null,a.a.createElement("strong",null,"Population:")," ","".concat(i?C(i):i)),a.a.createElement("p",null,a.a.createElement("strong",null,"Region:")," ",l),a.a.createElement("p",null,a.a.createElement("strong",null,"Sub Region:")," ",u),a.a.createElement("p",null,a.a.createElement("strong",null,"Capital:")," ",m)),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("strong",null,"Top Level Domain:")," ",s),a.a.createElement("p",{className:"items"},a.a.createElement("strong",null,"Currencies:")," ",p.map((function(n,e){return a.a.createElement("span",{key:e},n.name)}))),a.a.createElement("p",{className:"items"},a.a.createElement("strong",null,"Languages:")," ",g.map((function(n,e){return a.a.createElement("span",{key:e},n.name)}))))),0!==O.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Border Countries:"),a.a.createElement("div",{className:"borders"},O.map((function(n,e){return a.a.createElement(en,{text:n.name,key:e,handleClick:k,"data-item-set":n.alpha3Code})}))))))};function on(){var n=Object(f.a)(["\n  padding: 2rem;\n"]);return on=function(){return n},n}var cn=g.a.div(on());var ln=function(n){var e=n.match,t=n.history,o=e.params.countryCode,i=Object(c.c)((function(n){return n.countryList.find((function(n){return n.alpha3Code===o}))})),l=Object(r.useState)(i),u=Object(E.a)(l,2),m=u[0],s=u[1];return Object(r.useEffect)((function(){m&&m.alpha3Code===e.params.countryCode||fetch("https://restcountries.eu/rest/v2/alpha/"+o).then((function(n){return n.json()})).then((function(n){s(n)})).catch((function(n){console.log(n)}))}),[e,o]),a.a.createElement(v,null,a.a.createElement(cn,null,a.a.createElement("div",{className:"navigation"},a.a.createElement(en,{handleClick:function(){t.goBack()},icon:"arrow-back-outline",text:"back"})),a.a.createElement(an,Object.assign({},m,{handleClick:function(n){s(n),t.push("/country/".concat(N(n.name),"/").concat(n.alpha3Code))}}))))},un=Object(l.b)((function(n,e){switch(e.type){case"SET_COUNTRY_LIST":return Object(s.a)(Object(s.a)({},n),{},{countryList:e.payload,filterByRegion:"",filterByName:""});case"SET_COUNTRY_BY_NAME":var t=n.countryList,r=e.payload.toLowerCase();if(""===r&&""===n.filterByRegion)return Object(s.a)(Object(s.a)({},n),{},{countryFilteredList:[],filterByName:""});""!==n.filterByRegion&&(t=d(t,n.filterByRegion));var a=p(t,r);return Object(s.a)(Object(s.a)({},n),{},{coutryFilteredList:a,filterByName:r});case"FILTER_BY_REGION":var o=e.payload;if(""===o)return Object(s.a)(Object(s.a)({},n),{},{coutryFilteredList:[],filterByRegion:""});var i=d(n.countryList,o);return""!==n.filterByName&&(i=p(i,n.filterByName)),Object(s.a)(Object(s.a)({},n),{},{coutryFilteredList:i,filterByRegion:o});default:return n}}),{countryList:[],coutryFilteredList:[],filterByRegion:"",filterByName:""});var mn=function(){return a.a.createElement(c.a,{store:un},a.a.createElement(u.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(k,null),a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/"},a.a.createElement(X,null),a.a.createElement(U,null)),a.a.createElement(m.a,{path:"/country/:slug/:countryCode",component:ln})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(mn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.768d1934.chunk.js.map