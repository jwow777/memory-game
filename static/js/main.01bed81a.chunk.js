(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{14:function(e,n,a){},15:function(e,n,a){},17:function(e,n,a){},18:function(e,n,a){"use strict";a.r(n);var t=a(1),i=a.n(t),c=a(8),r=a.n(c),m=(a(14),a(9)),s=a(5),u=a(7),g=a(2),o=(a(15),a(0));var f=function(e){var n=e.onClick,a=e.card,t=e.index,i=e.isInactive,c=e.isFlipped;return Object(o.jsxs)("div",{className:"card".concat(c?" card_flip":"").concat(i?" card_inactive":""),onClick:function(){return!c&&n(t)},children:[Object(o.jsx)("img",{className:"card__image card__image_front",src:a.image,alt:""}),Object(o.jsx)("img",{className:"card__image card__image_back",src:"data:image/png;base64,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",alt:""})]})},l=[{name:"alpine-forget-me-not",image:"../images/alpine-forget-me-not.png"},{name:"anthurium",image:"../images/anthurium.png"},{name:"bluebell",image:"../images/bluebell.png"},{name:"borage",image:"../images/borage.png"},{name:"cactus",image:"../images/cactus.png"},{name:"daffodil",image:"../images/daffodil.png"},{name:"dahlia",image:"../images/dahlia.png"},{name:"daisy",image:"../images/daisy.png"},{name:"delphinium",image:"../images/delphinium.png"},{name:"geranium",image:"../images/geranium.png"},{name:"iris",image:"../images/iris.png"},{name:"lily",image:"../images/lily.png"},{name:"lotus-flower",image:"../images/lotus-flower.png"},{name:"mint-marigold",image:"../images/mint-marigold.png"},{name:"pansy",image:"../images/pansy.png"},{name:"rose",image:"../images/rose.png"},{name:"strawberry",image:"../images/strawberry.png"},{name:"tiger-lily",image:"../images/tiger-lily.png"}];a(17);var A=function(){var e=Object(t.useState)((function(){return function(e){function n(e,n,a){var t=e[n];e[n]=e[a],e[a]=t}for(var a=e.length;a>0;a--)n(e,a-1,Math.floor(Math.random()*a));return e}(l.concat(l))})),n=Object(g.a)(e,2),a=n[0],i=(n[1],Object(t.useState)([])),c=Object(g.a)(i,2),r=c[0],A=c[1],b=Object(t.useState)({}),p=Object(g.a)(b,2),v=p[0],h=p[1],O=Object(t.useState)(0),w=Object(g.a)(O,2),z=w[0],C=w[1],P=Object(t.useState)(!1),j=Object(g.a)(P,2),W=j[0],y=j[1];Object(t.useEffect)((function(){var e=null;return W?e=setInterval((function(){return C((function(e){return e+1}))}),1e3):W||0===z||clearInterval(e),function(){return clearInterval(e)}}),[W,z]);var d=function(){var e=Object(g.a)(r,2),n=e[0],t=e[1];a[n].name===a[t].name&&(h((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},a[n].name,!0))})),A([])),A([])},x=function(e){return 1===r.length?A((function(n){return[].concat(Object(m.a)(n),[e])})):A([e])},X=function(e){return r.includes(e)},E=function(e){return Boolean(v[e.name])};return Object(t.useEffect)((function(){2===r.length&&setTimeout(d,500)}),[r]),console.log(r),Object(t.useEffect)((function(){Object.keys(v).length===l.length&&y(!1)}),[v]),Object(o.jsxs)("main",{className:"app",children:[Object(o.jsx)("p",{className:"app__timer",children:z>0?"\u041f\u0440\u043e\u0448\u043b\u043e ".concat(z," \u0441\u0435\u043a"):"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0421\u0442\u0430\u0440\u0442"}),Object(o.jsx)("div",{className:"app__container",children:a.map((function(e,n){return Object(o.jsx)(f,{card:e,index:n,isInactive:E(e),isFlipped:X(n),onClick:x},n)}))}),!W&&0===z&&Object(o.jsx)("div",{className:"app__button-block",children:Object(o.jsx)("button",{type:"button",onClick:function(){return y(!0)},className:"app__button",children:"Start"})})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;a(e),t(e),i(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.01bed81a.chunk.js.map