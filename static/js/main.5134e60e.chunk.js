(this.webpackJsonpsuguru=this.webpackJsonpsuguru||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"name":"Eenvoudig (4x5)","size":[4,5],"startSituation":[0,2,0,3,3,0,0,2,1,0,3,0,0,0,4,2,1,2,0,3],"solution":[4,2,1,3,3,5,4,2,1,2,3,1,3,5,4,2,1,2,1,3],"groups":[0,0,0,0,1,2,2,2,1,1,2,2,3,4,4,4,3,3,4,4],"maxNumber":5},{"name":"Eenvoudig 2 (4x5)","size":[4,5],"startSituation":[0,1,0,0,0,0,0,1,0,0,2,0,0,4,0,0,5,0,3,2],"solution":[2,1,2,3,4,3,4,1,2,1,2,3,3,4,5,1,5,1,3,2],"groups":[0,0,1,1,3,0,0,1,3,4,4,4,3,5,5,5,3,3,5,5],"maxNumber":5},{"name":"Lastiger (6x6)","size":[6,6],"startSituation":[0,0,0,0,0,3,5,0,0,0,0,0,0,0,0,0,0,4,0,0,3,0,0,0,0,0,0,0,2,3,0,0,0,0,0,0],"solution":[1,4,1,2,1,3,5,2,3,4,5,2,3,4,1,2,3,4,1,2,3,4,5,1,3,4,5,1,2,3,2,1,2,4,5,1],"groups":[0,0,1,1,2,2,3,0,0,1,1,2,3,3,3,4,1,2,5,3,4,4,4,6,5,5,5,4,7,7,5,8,8,7,7,7],"maxNumber":5},{"name":"Moeilijk (8x8)","size":[8,8],"startSituation":[0,4,0,0,0,0,0,0,0,1,0,3,0,4,0,0,0,0,0,0,0,0,0,0,5,0,5,0,0,0,0,5,0,0,0,0,4,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,5,0,0,0,0,0,1],"solution":[5,4,5,4,1,3,1,3,2,1,2,3,2,4,2,4,4,3,4,1,5,1,3,1,5,1,5,2,3,2,4,5,3,2,3,1,4,5,3,2,1,5,4,5,2,1,4,5,2,3,2,1,4,3,2,3,1,5,4,3,2,5,4,1],"groups":[0,0,1,1,1,1,2,2,3,0,0,4,1,2,2,5,3,0,4,4,4,6,5,5,3,3,7,4,6,6,6,5,3,8,7,7,7,6,9,5,8,8,8,10,7,9,9,9,11,8,10,10,10,10,9,12,11,11,11,11,12,12,12,12],"maxNumber":6}]')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(6),i=n(2),l=n(3),a=(n(11),n(12),n(0)),s=function(e){var t=e.checking,n=e.wrongCount,o=e.onReset,r=e.onCheck,s=e.onBack,u=e.onNext,d=e.onHelp,j=Object(l.a)("".concat("/suguru","/sound/tada.mp3")),b=Object(i.a)(j,1)[0],m=Object(l.a)("".concat("/suguru","/sound/plop.mp3")),g=Object(i.a)(m,1)[0];return Object(c.useEffect)((function(){t&&(n?g():b())}),[t,g,b,n]),t?Object(a.jsxs)("div",{className:"bottom",children:[n>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"info",children:[n," fouten gemaakt \ud83d\ude1e  "]}),Object(a.jsx)("button",{className:"ok",onClick:s,children:"Ok"})]}),0===n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"info",children:"Goed gedaan! "}),Object(a.jsx)("button",{className:"ok",onClick:u,children:"Volgende"})]})]}):Object(a.jsx)("div",{className:"bottom",children:!t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:d,className:"help",children:"?"}),Object(a.jsx)("button",{onClick:o,children:"Reset"}),Object(a.jsx)("button",{onClick:r,children:"Check!"})]})})},u=n(7),d=function(e){var t=e.maxNumber,n=e.onNumberChanged,o=Object(c.useMemo)((function(){for(var e=[],c=function(t){e.push(Object(a.jsx)("div",{className:"option",onClick:function(){n(t+1)},children:t+1},t))},o=0;o<t;o++)c(o);return e}),[t,n]);return Object(a.jsx)("div",{className:"selection options-".concat(t),children:o})},j=n(8),b=n.n(j);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=c.createElement("style",{type:"text/css"},"\n\t.st0{fill:#FF0000;}\n\t.st1{fill:#FFFFFF;}\n"),O=c.createElement("g",null,c.createElement("path",{className:"st0",d:"M306,608c-80.1,0-155.5-31-212.4-87.4C36.2,463.9,4.4,388.2,4,307.5c-0.4-73.8,26-144.8,74.4-200.1l-0.6-0.6 l14.6-14.4l14.4-14.6l0.6,0.6C162.4,30.4,232.7,4,306,4c80.1,0,155.5,31,212.5,87.4c57.3,56.8,89.1,132.4,89.5,213.1 c0.4,80.7-30.6,156.7-87.4,214c-56.8,57.3-132.4,89.1-213.1,89.5L306,608z M107.8,140.8C68.9,187.4,47.7,246.3,48,307.3 c0.3,68.9,27.5,133.6,76.5,182C173.1,537.5,237.6,564,306,564l1.3,0c31-0.2,61.2-5.7,89.7-16.4c27.2-10.2,52.3-24.9,74.6-43.7 L107.8,140.8z M502.9,472.7c39.7-46.8,61.4-106.3,61.1-168c-0.3-68.9-27.5-133.6-76.5-182C438.9,74.5,374.4,48,306,48 c-60.5,0-119,21.2-165.2,59.8L502.9,472.7z"}),c.createElement("path",{className:"st1",d:"M306,8c79,0,153.5,30.6,209.7,86.2c56.6,56,87.9,130.7,88.3,210.3c0.4,79.6-30.2,154.6-86.2,211.2 c-56,56.6-130.7,87.9-210.3,88.3c-0.5,0-1,0-1.5,0c0,0,0,0,0,0c-79,0-153.4-30.6-209.6-86.2C39.8,461.8,8.4,387.1,8,307.5 c-0.4-74.6,26.5-145.1,75.9-200.2l-0.4-0.4l11.7-11.6l11.7-11.8l0.4,0.4C162,34.8,232,8,306,8 M503.1,478.6 c42.3-48.1,65.2-109.3,64.8-173.9c-0.4-70-27.9-135.6-77.7-184.9C440.9,70.9,375.5,44,306,44c-63.4,0-123.5,22.4-171.1,63.6 L503.1,478.6 M306,568c0.5,0,0.9,0,1.4,0c63.3-0.3,123-22.9,170.2-63.9l-370-369.1C66.1,182.9,43.7,243.4,44,307.3 c0.4,70,27.9,135.6,77.7,184.9C171.1,541.1,236.5,568,306,568 M306,0c-37.8,0-74.6,6.8-109.4,20.1c-32.4,12.4-62.3,30.2-88.9,52.9 l-0.8-0.8l-5.6,5.7L89.6,89.6l-11.7,11.6l-5.7,5.6l0.8,0.8c-22.9,26.8-40.8,56.9-53.2,89.6C6.5,232.4-0.2,269.5,0,307.5 C0.4,389.3,32.6,466,90.7,523.5C148.4,580.6,224.8,612,306,612c0.5,0,1.1,0,1.6,0c81.7-0.4,158.4-32.6,215.9-90.7 c57.5-58.1,88.9-135.1,88.5-216.8c-0.4-81.7-32.6-158.4-90.7-215.9C463.6,31.4,387.2,0,306,0L306,0z M146.7,108.1 c21.3-17.2,45-30.7,70.6-40.2C245.6,57.3,275.4,52,306,52c67.4,0,130.8,26.1,178.7,73.5c48.2,47.7,75,111.4,75.3,179.2 c0.2,31.1-5.2,61.5-15.9,90.3c-9.7,26-23.6,50.1-41.4,71.8L146.7,108.1L146.7,108.1z M306,560c-67.3,0-130.8-26.1-178.7-73.5 c-48.2-47.7-75-111.4-75.3-179.2c-0.2-30.8,5.1-60.9,15.6-89.4c9.5-25.8,23.1-49.6,40.4-71.1l357.7,356.8 c-21.2,17.2-44.7,30.7-70.1,40.3c-28.1,10.6-57.9,16-88.3,16.2C306.8,560,306.4,560,306,560L306,560L306,560z"}));function h(e,t){var n=e.title,o=e.titleId,r=g(e,["title","titleId"]);return c.createElement("svg",m({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 612 612",style:{enableBackground:"new 0 0 612 612"},xmlSpace:"preserve",ref:t,"aria-labelledby":o},r),n?c.createElement("title",{id:o},n):null,f,O)}var x=c.forwardRef(h),p=(n.p,function(e){var t=e.children,n=e.group,c=e.selected,o=e.markAsWrong,r=e.maxNumber,i=e.readOnly,l=void 0!==i&&i,s=e.leftBorder,u=void 0!==s&&s,j=e.topBorder,m=void 0!==j&&j,g=e.rightBorder,f=void 0!==g&&g,O=e.bottomBorder,h=void 0!==O&&O,p=e.onClick,v=e.onNumberChanged,C=b()({selected:c,initial:l,"left-edge":u,"top-edge":m,"right-edge":f,"bottom-edge":h},"group-".concat(n+1));return Object(a.jsxs)("li",{className:C,onClick:l?void 0:function(e){null===p||void 0===p||p(),e.stopPropagation()},children:[c&&Object(a.jsx)(d,{maxNumber:r,onNumberChanged:v}),Object(a.jsx)("div",{className:"cell",children:t}),o&&Object(a.jsx)(x,{className:"wrong-marker"})]})}),v=function(e){for(var t=e.size,n=e.groups,c=e.selectedCell,o=e.wrongCells,r=void 0===o?[]:o,i=e.maxNumber,l=void 0===i?1:i,s=e.cellValues,u=e.startSituation,d=void 0===u?[]:u,j=e.onCellClick,b=e.onNumberChanged,m=[],g=t[0]*t[1],f=function(e){var o=e%t[0],i=Math.floor(e/t[0]),u=0===o,g=0===i,f=o===t[0]-1,O=i===t[1]-1,h=!u&&n[e]!==n[e-1],x=!g&&n[e]!==n[e-t[0]],v=!f&&n[e]!==n[e+1],C=!O&&n[e]!==n[e+t[0]],k=c===e;m.push(Object(a.jsx)(p,{selected:k,markAsWrong:-1!==r.indexOf(e),readOnly:!!d[e],group:n[e],maxNumber:l,leftBorder:u||h,topBorder:g||x,rightBorder:f||v,bottomBorder:O||C,onClick:function(){return null===j||void 0===j?void 0:j(e)},onNumberChanged:function(t){return null===b||void 0===b?void 0:b(e,t)},children:!!s[e]&&s[e]},e))},O=0;O<g;O++)f(O);var h={"--columns":t[0],"--rows":t[1]};return Object(a.jsx)("ul",{className:"board",style:h,children:m})},C=Object(c.forwardRef)((function(e,t){var n=e.size,o=e.groups,r=e.maxNumber,d=e.startSituation,j=e.solution,b=e.onNext,m=e.onHelp,g=Object(c.useState)(d),f=Object(i.a)(g,2),O=f[0],h=f[1],x=Object(c.useState)(),p=Object(i.a)(x,2),C=p[0],k=p[1],N=Object(c.useState)(!1),y=Object(i.a)(N,2),w=y[0],z=y[1],S=Object(l.a)("".concat("/suguru","/sound/open.mp3")),F=Object(i.a)(S,1)[0],E=Object(l.a)("".concat("/suguru","/sound/close.mp3")),L=Object(i.a)(E,1)[0];Object(c.useEffect)((function(){z(!1),h(d)}),[d]);var B=function(e,t){h((function(n){return n.map((function(n,c){return c===e?t===n?void 0:t:n}))})),L()};Object(c.useEffect)((function(){var e=function(){k(void 0)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]),Object(u.a)(["1","2","3","4","5","6","7","8","9"],(function(e){if(void 0!==C){var t=parseInt(e.key);t<=r&&B(C,t)}}));var M=w?j.reduce((function(e,t,n){return t!==O[n]&&e.push(n),e}),[]):[];return Object(a.jsxs)("div",{className:"suguru",ref:t,children:[Object(a.jsx)(v,{size:n,cellValues:O,startSituation:d,selectedCell:C,wrongCells:M,groups:o,maxNumber:r,onCellClick:function(e){w||(e===C?k(void 0):(F(),k(e)))},onNumberChanged:B}),Object(a.jsx)(s,{checking:w,wrongCount:M.length,onHelp:m,onReset:function(){L(),confirm("Weet je het zeker?")&&h(d)},onCheck:function(){z(!0)},onBack:function(){z(!1)},onNext:function(){z(!1),b()}})]})})),k=(n(14),n(15),n(4)),N=function(e){var t=e.selectedIndex,n=e.onIndexChange,c={"--columns":k[t].size[0]};return Object(a.jsx)("div",{className:"game-selector",style:c,children:Object(a.jsx)("select",{value:t,onChange:function(e){n(e.target.value)},children:k.map((function(e,t){return Object(a.jsx)("option",{value:t,children:e.name},t)}))})})},y=function(e){var t=e.page,n=e.onNext,o=Object(l.a)("".concat("/suguru","/sound/plop.mp3")),r=Object(i.a)(o,1)[0],s=Object(c.useState)(),u=Object(i.a)(s,2),d=u[0],j=u[1],b=Object(c.useState)([1,0,2,3,5]),m=Object(i.a)(b,2),g=m[0],f=m[1];switch(Object(c.useEffect)((function(){r()}),[t,r]),t){case 0:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{size:[5,1],groups:[0,0,0,0,0],cellValues:g,selectedCell:d,onCellClick:function(e){j(e===d?void 0:e)},onNumberChanged:function(e,t){f((function(n){return n.map((function(n,c){return c===e?t===n?0:t:n}))}))},maxNumber:5}),Object(a.jsx)("div",{className:"help-text",onClick:n,children:"Het doel is om in ieder vakje met een getal te vullen. Klik op een cel om het getal te wijzigen."})]});case 1:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{size:[5,2],groups:[2,1,1,1,0,2,2,1,3,0],cellValues:[2,4,1,3,2,1,3,2,1,0]}),Object(a.jsx)("div",{className:"help-text",onClick:n,children:"De gekleurde vakjes vormen een groep, ieder getal mag maar 1 keer voorkomen in de groep"})]});case 2:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{size:[5,2],groups:[0,0,1,1,3,0,0,1,3,3],cellValues:[0,0,1,2,0,0,0,3,0,0],startSituation:[0,0,0,0,0,0,0,3,0,0]}),Object(a.jsx)("div",{className:"help-text",onClick:n,children:"Je mag geen getal in een hokje plaatsen wat hoger is dan het aantal hokjes in de groep"})]});case 3:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{size:[3,3],groups:[0,0,0,0,3,0,0,0,0],cellValues:[0,0,0,0,0,0,0,0,0]}),Object(a.jsx)("div",{className:"help-text",onClick:n,children:"Een getal mag ook niet gelijk zijn aan een getal in een aangrenzend hokje"})]})}return Object(a.jsx)("div",{})},w=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(c.useRef)(null),s=Object(c.useRef)(null),u=Object(c.useState)(),d=Object(i.a)(u,2),j=d[0],b=d[1];Object(c.useLayoutEffect)((function(){var e,t,n=null===(e=s.current)||void 0===e?void 0:e.parentNode;if((null===(t=l.current)||void 0===t?void 0:t.clientWidth)&&n.clientWidth){var c,o=n.clientWidth/(null===(c=l.current)||void 0===c?void 0:c.clientWidth);s.current.style.transform=o<1?"scale(".concat(.95*o,")"):""}}),[n]);return Object(a.jsx)("div",{className:"app theme-puzzlepal",children:Object(a.jsxs)("div",{ref:s,className:"layout",children:[Object(a.jsx)("p",{className:"title",children:"Suguru, by Wouter"}),Object(a.jsxs)("div",{style:{display:void 0===j?"block":"none"},children:[Object(a.jsx)(N,{selectedIndex:n,onIndexChange:o}),Object(a.jsx)(C,Object(r.a)(Object(r.a)({ref:l},k[n]),{},{onNext:function(){n<k.length&&o(n+1)},onHelp:function(){b(0)}}))]}),void 0!==j&&Object(a.jsx)(y,{page:j,onNext:function(){b((function(e){if(void 0!==e&&3!==e)return e+1}))}})]})})},z=n(9),S=n.n(z),F=(n(19),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))});S.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),F()}],[[20,1,2]]]);
//# sourceMappingURL=main.5134e60e.chunk.js.map