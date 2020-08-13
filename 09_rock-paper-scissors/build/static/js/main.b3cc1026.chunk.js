(this["webpackJsonp09_rock-paper-scissors"]=this["webpackJsonp09_rock-paper-scissors"]||[]).push([[0],{15:function(n,e,t){n.exports=t(25)},20:function(n,e,t){},21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(20),t(3)),s=t(1),l=(t(21),t(2));function u(){var n=Object(s.a)(["\n  max-width: 960px;\n  margin: 0 auto;\n  align-self: stretch;\n  flex: 1;\n"]);return u=function(){return n},n}var m=l.a.main(u());var d=function(n){var e=n.children;return a.a.createElement(m,null,e)};function p(){var n=Object(s.a)(["\n  background-color: var(--white);\n  text-align: center;\n  padding: 0.75rem 2rem;\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: space-between;\n  align:items: center;\n  flex-direction: column;\n  min-width: 5rem;\n\n  small {\n    color: var(--score-text);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: -0.25rem;\n  }\n\n  p {\n    color: var(--dark-text);\n    font-size: 3rem;\n    font-weight: 700\n  }\n"]);return p=function(){return n},n}var f=l.a.main(p());var h=function(){var n=Object(r.useContext)(nn).score;return a.a.createElement(f,null,a.a.createElement("small",null,"Score"),a.a.createElement("p",null,n))};function g(){var n=Object(s.a)(["\n  border: 3px solid var(--header-outline);\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 1.25rem;\n    line-height: 1rem;\n    text-shadow: 0px 0px 8px var(--dark-text);\n  }\n\n  @media screen and (min-width: 768px) {\n    h1 {\n      font-size: 1.5em;\n      line-height: 1.25rem;\n    }\n  }\n"]);return g=function(){return n},n}var x=l.a.div(g());var b=function(){return a.a.createElement(x,null,a.a.createElement("h1",null,"Rock ",a.a.createElement("br",null),"Paper ",a.a.createElement("br",null),"Scissors ",a.a.createElement("br",null),"Lizard ",a.a.createElement("br",null),"Spock"),a.a.createElement(h,null))},v=t(6),w=t.n(v),k=t(13);function E(){var n=Object(s.a)(["\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  background-color: ",";\n  background-image: ",";\n  display: flex;\n  box-shadow: inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),\n    0px 0px 0px 0rem hsla(237, 57%, 56%, 0.1),\n    0px 0px 0px 0rem hsla(237, 57%, 56%, 0.05),\n    0px 0px 0px 0rem hsla(237, 57%, 56%, 0.025);\n  padding: 1rem;\n  user-select: none;\n  border: none;\n\n  animation: 0.8s\n    "," ease\n    forwards;\n\n  ","\n\n  .box {\n    flex: 1;\n    align-self: stretch;\n    border-radius: 50%;\n    box-shadow: inset 0px 4px 0px hsla(229, 25%, 31%, 0.12);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--white);\n    padding: 1rem;\n  }\n\n  .box img {\n    width: 2.5rem;\n    height: auto;\n    animation: 0.8s\n      ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    transform: scale(1.2);\n\n    ","\n\n    ","\n  }\n\n  @media screen and (min-width: 960px) {\n    transform: scale(1.2);\n\n    ","\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(s.a)(["\n  to {\n    transform: rotateY(-360deg);\n  }\n"]);return j=function(){return n},n}function y(){var n=Object(s.a)(["\n  to {\n    box-shadow: \n      inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),\n      0px 0px 0px 2rem hsla(237, 57%, 56%, .1), \n      0px 0px 0px 4rem hsla(237, 57%, 56%, .05), \n      0px 0px 0px 6rem hsla(237, 57%, 56%, .025);\n    /* transform: rotateZ(360deg) scale(1.1) */\n  }\n"]);return y=function(){return n},n}var O=Object(l.b)(y()),C=Object(l.b)(j()),S=l.a.button(E(),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.isShadowAnimated?O:""}),(function(n){return!n.playing&&"    \n    cursor: pointer;\n\n    &:active {\n      transform: scale(0.8);\n      box-shadow: inset 0px -8px 0px hsla(229, 25%, 31%, 0.12);\n\n      & .box {\n        box-shadow: inset 0px 6px 0px hsla(229, 25%, 31%, 0.12);\n      }\n    }\n\n    &:hover {\n      box-shadow: inset 0px -5px 0px hsla(229, 25%, 31%, 0.12),\n        0px 0px 0px 2rem hsla(237, 57%, 56%, 0.1),\n        0px 0px 0px 4rem hsla(237, 57%, 56%, 0.05),\n        0px 0px 0px 6rem hsla(237, 57%, 56%, 0.025);\n      transform: scale(1.1) rotateZ(20deg);\n    }\n    "}),(function(n){return n.isShadowAnimated?C:""}),(function(n){return n.playing&&"\n      width: 12rem;\n      height: 12rem;\n      padding: 1.2rem;\n      box-shadow: inset 0px -10px 0px hsla(229, 25%, 31%, 0.12);\n\n      .box {\n        box-shadow: inset 0px 8px 0px hsla(229, 25%, 31%, 0.12);\n      }\n\n      .box img {\n        width: 4rem;\n      }\n    "}),(function(n){return!n.playing&&"      \n      &:hover {\n        transform: scale(1.3) rotateZ(20deg);\n      }\n    "}),(function(n){return n.playing&&"\n      width: 15rem;\n      height: 15rem;\n      padding: 1.4rem;\n\n      .box img {\n        width: 5rem;\n      }\n    "})),z={paper:"var(--paper-gradient)",rock:"var(--rock-gradient)",scissors:"var(--scissors-gradient)",lizard:"var(--lizard-gradient)",spock:"var(--cyan-gradient)","":"hsla(237, 49%, 15%, .2)"};var N=function(n){var e=n.name,t=void 0===e?"":e,r=n.onClickEvent,o=n.isShadowAnimated,i=void 0!==o&&o,c=n.playing,s=void 0!==c&&c;return a.a.createElement(S,{color:z[t],onClick:function(){r&&r(t)},isShadowAnimated:i,playing:s},""!==t&&a.a.createElement("div",{className:"box"},a.a.createElement("img",{src:"./images/icon-".concat(t,".svg"),alt:"".concat(t," Token")})))};function L(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  p {\n    text-transform: uppercase;\n    margin-top: 1rem;\n    letter-spacing: 2px;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-direction: column-reverse;\n\n    p {\n      font-size: 1.5rem;\n      margin-bottom: 3rem;\n    }\n  }\n"]);return L=function(){return n},n}var A=l.a.div(L());var I=function(n){var e=n.token,t=n.title,r=n.shadowAnimated,o=void 0!==r&&r;return a.a.createElement(A,null,a.a.createElement(N,{name:e,isShadowAnimated:o,playing:!0}),a.a.createElement("p",null,t))},P=t(14);function Y(){var n=Object(s.a)(["\n  background-color: transparent;\n  border: 2px solid var(--header-outline);\n  color: var(--header-outline);\n\n  &:hover {\n    background-color: var(--header-outline);\n    color: var(--white);\n  }\n"]);return Y=function(){return n},n}function R(){var n=Object(s.a)(["\n  background-color: var(--white);\n  border: 2px solid var(--white);\n  color: var(--score-text);\n\n  &:hover {\n    background-color: transparent;\n    color: var(--white);\n  }\n"]);return R=function(){return n},n}function B(){var n=Object(s.a)(['\n  border: 2px solid var(--header-outline);\n  border-radius: 0.5rem;\n  min-width: 8rem;\n  padding: 0.75rem 1rem;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-family: "Barlow Semi Condensed", sans-serif;\n  background-color: transparent;\n  color: var(--white);\n\n  &:hover {\n    background-color: var(--header-outline);\n  }\n']);return B=function(){return n},n}var _=l.a.button(B());var M=Object(l.a)(_)(R()),Z=Object(l.a)(_)(Y()),F=function(n){var e=n.children,t=Object(P.a)(n,["children"]);return a.a.createElement(_,t,e)};function J(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 0;\n\n  p {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 3rem;\n    letter-spacing: 1px;\n    margin-bottom: 0.75rem;\n  }\n\n  Button {\n    min-width: 15rem;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: -65vh;\n  }\n"]);return J=function(){return n},n}var T=l.a.div(J());var W=function(n){var e=n.title,t=n.handleClick;return a.a.createElement(T,null,""!==e&&a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,e),a.a.createElement(M,{onClick:t},"Play Again")))};function G(){var n=Object(s.a)(['\n  padding: 2rem 0;\n  display: grid;\n  grid-gap: 2rem;\n  max-width: 25rem;\n  width: 100%;\n\n  &.bg-pentagon {\n    background-image: url("./images/bg-pentagon.svg");\n    background-position: center center;\n    background-size: 18rem;\n    background-repeat: no-repeat;\n  }\n\n  &:hover {\n    animation-play-state: paused;\n  }\n\n  .in-game {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .out-game {\n    padding: 2rem 0;\n    display: grid;\n    grid-gap: 2rem;\n    max-width: 30rem;\n    width: 100%;\n    height: 100%;\n    justify-self: center;\n\n    & .row:nth-child(1) {\n      margin-bottom: -3rem;\n      display: flex;\n      justify-content: center;\n      flex: 1;\n    }\n    & .row:nth-child(2) {\n      display: flex;\n      justify-content: space-between;\n      flex: 1;\n    }\n    & .row:nth-child(3) {\n      display: flex;\n      justify-content: center;\n      grid-gap: 2rem;\n      flex: 1;\n    }\n  }\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    flex: 1;\n    max-width: initial;\n\n    .in-game {\n      justify-content: space-between;\n    }\n\n    &.bg-pentagon {\n      background-size: 45vh;\n    }\n\n    .out-game {\n      & .row:nth-child(1) {\n        margin-bottom: -4rem;\n      }\n      & .row:nth-child(2) {\n        flex: 1;\n      }\n      & .row:nth-child(3) {\n        display: flex;\n        grid-gap: 6rem;\n      }\n    }\n  }\n']);return G=function(){return n},n}var $=l.a.div(G());var q=function(){var n=Object(r.useContext)(nn),e=n.score,t=n.setScore,o=Object(r.useState)(!1),i=Object(c.a)(o,2),s=i[0],l=i[1],u=Object(r.useState)(!1),m=Object(c.a)(u,2),d=m[0],p=m[1],f=Object(r.useState)(""),h=Object(c.a)(f,2),g=h[0],x=h[1],b=Object(r.useState)(""),v=Object(c.a)(b,2),E=v[0],j=v[1],y=Object(r.useState)(""),O=Object(c.a)(y,2),C=O[0],S=O[1],z=["rock","paper","scissors","lizard","spock"];function L(){return new Promise((function(n,e){var t=null,r=setInterval((function(){t=function(){return z[(n=0,e=z.length,Math.floor(Math.random()*(e-n))+n)];var n,e}(),j(t)}),75);setTimeout((function(){clearInterval(r),p(!1),n(t)}),2e3)}))}function A(n){return P.apply(this,arguments)}function P(){return(P=Object(k.a)(w.a.mark((function n(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),l(!0),x(e),n.next=5,L();case 5:t=n.sent,j(t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(r.useEffect)((function(){if(""!==g&&""!==E&&!d){var n=function(n,e){if(console.log({userPicked:n,housePicked:e}),""!==n&&""!==!e){if(n===e)return"It's a draw!";switch(n){case"rock":return"scissors"===e||"lizard"===e?"You win":"Looser";case"paper":return"rock"===e||"spock"===e?"You win":"Looser";case"scissors":return"paper"===e||"lizard"===e?"You win":"Looser";case"lizard":return"spock"===e||"paper"===e?"You win":"Looser";case"spock":return"scissors"===e||"rock"===e?"You win":"Looser";default:return"No case"}}}(g,E);S(n),n.toLowerCase().includes("win")&&t(e+1),n.toLowerCase().includes("looser")&&t(e-1)}}),[d]),Object(r.useEffect)((function(){localStorage.setItem("rpsls_score",e)}),[e]),a.a.createElement($,{className:s?"":"bg-pentagon"},s?a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"in-game"},a.a.createElement(I,{token:g,title:"you picked",shadowAnimated:C.toLowerCase().includes("win")}),a.a.createElement(I,{token:E,title:"the house picked",shadowAnimated:C.toLowerCase().includes("looser")})),a.a.createElement(W,{title:C,handleClick:function(){x(""),j(""),S(""),l(!1)}})):a.a.createElement("section",{className:"out-game"},a.a.createElement("div",{className:"row"},a.a.createElement(N,{name:"rock",onClickEvent:A})),a.a.createElement("div",{className:"row"},a.a.createElement(N,{name:"spock",onClickEvent:A}),a.a.createElement(N,{name:"paper",onClickEvent:A})),a.a.createElement("div",{className:"row"},a.a.createElement(N,{name:"lizard",onClickEvent:A}),a.a.createElement(N,{name:"scissors",onClickEvent:A}))))};function D(){var n=Object(s.a)(["\n  background-color: var(--white);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 5rem 0;\n  transition: 0.8s ease;\n\n  h2 {\n    color: var(--dark-text);\n    text-transform: uppercase;\n    font-size: 2.5rem;\n  }\n\n  .close-button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0.75rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:hover {\n      background-color: #e1e4ed;\n      transform: rotate(90deg);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    top: 50%;\n    left: 50%;\n    right: initial;\n    bottom: initial;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n    transform: translate(-50%, -50%);\n    border-radius: 0.5rem;\n\n    h2 {\n      margin-bottom: 1rem;\n      font-size: 2rem;\n      align-self: flex-start;\n    }\n\n    .reset-button {\n      margin-top: 2rem;\n    }\n\n    .close-button {\n      position: absolute;\n      top: 2rem;\n      right: 2rem;\n    }\n  }\n"]);return D=function(){return n},n}var H=l.a.div(D());var K=function(n){var e=n.handleClick,t=Object(r.useContext)(nn),o=(t.score,t.setScore);return a.a.createElement(H,null,a.a.createElement("h2",null,"Rules"),a.a.createElement("img",{src:"./images/image-rules-bonus.svg",alt:"Game Rules"}),a.a.createElement(Z,{className:"reset-button",onClick:function(){o(0),e()}},"Reset Score"),a.a.createElement("button",{className:"close-button",onClick:e},a.a.createElement("img",{src:"./images/icon-close.svg",alt:"Close Icon"})))};function Q(){var n=Object(s.a)(["\n  padding: 2rem 0;\n\n  .rules-overlay {\n    background-color: var(--white);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 5;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n    padding: 5rem 0;\n\n    h2 {\n      color: var(--dark-text);\n      text-transform: uppercase;\n      font-size: 2.5rem;\n    }\n\n    .close-button {\n      background-color: transparent;\n      border: none;\n      cursor: pointer;\n      padding: 0.75rem;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:hover {\n        background-color: #e1e4ed;\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  &::before {\n    display: ",';\n    content: "";\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: hsl(237, 49%, 15%);\n    opacity: 0.8;\n  }\n\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    bottom: 2rem;\n    right: 2rem;\n    padding: 0;\n  }\n']);return Q=function(){return n},n}var U=l.a.div(Q(),(function(n){return!0===n.visible?"block":"none"}));var V=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];function i(){o(!t)}return a.a.createElement(U,{visible:t},t&&a.a.createElement(K,{handleClick:i}),a.a.createElement(F,{onClick:i},"Rules"))};function X(){var n=Object(s.a)(["\n  background-image: var(--radial-gradient);\n  min-height: 100vh;\n  padding: 2rem;\n  display: flex;\n\n  .app-content {\n    min-height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n  }\n"]);return X=function(){return n},n}var nn=Object(r.createContext)(),en=l.a.main(X());var tn=function(){var n=Object(r.useState)(localStorage.getItem("rpsls_score")||0),e=Object(c.a)(n,2),t=e[0],o=e[1];return a.a.createElement(nn.Provider,{value:{score:t,setScore:o}},a.a.createElement(en,null,a.a.createElement(d,null,a.a.createElement("div",{className:"app-content"},a.a.createElement(b,null),a.a.createElement(q,null),a.a.createElement(V,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(tn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b3cc1026.chunk.js.map