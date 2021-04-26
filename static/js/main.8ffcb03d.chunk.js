(this["webpackJsonptriomino-calculator"]=this["webpackJsonptriomino-calculator"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(8),i=n.n(s),a=(n(18),n(3)),o=n(5),l=n(9),u=n(10),b=n(2),j=n(13),d=n(11),m=(n(19),n(12)),h=n(0),v=function(t){var e=t.handleSubmit,n=Object(c.useState)([null,null]),r=Object(m.a)(n,2),s=r[0],i=r[1];return Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-md-6 align-self-center",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"mb-2",children:[Object(h.jsxs)("label",{htmlFor:"players",className:"form-label me-4",children:["Players (",s.length,")"]}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-sm me-1",onClick:function(){var t=s;i([].concat(Object(a.a)(t),[null]))},children:"Add player"}),Object(h.jsx)("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){s.every((function(t){return null!==t}))?e(s):alert("Some players are empty")},children:"Start"})]})})}),s.map((function(t,e){return Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col mb-2",children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"email",className:"form-control",id:"players["+e+"]",placeholder:"player #".concat(e+1," name"),value:t||"",onChange:function(t){var n=s;n[e]=t.target.value,i(Object(a.a)(n))}}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t=s;t.splice(e,1),console.log({players:s,newPlayers:t}),i(Object(a.a)(t))},children:"\ud83d\uddd1"})]})})},e)}))]})})})},p=function(t){var e="figure: ";switch(t){case"bridge":e="bridge (+40)";break;case"HEX":e="\u2b23 (+50)";break;case"2xHEX":e="\u2b23\u2b23 (+60)";break;case"3xHEX":e="\u2b23\u2b23\u2b23 (+70)";break;default:e=""}return e},f=function(t){for(var e=t.moves,n=t.players,c=[],r=function(t){c.push(Object(h.jsx)("tr",{children:Array.from(Array(n.length).keys()).map((function(n){var c,r,s,i,a,o,l,u;return Object(h.jsxs)("td",{children:["number"===typeof(null===(c=e[t+n])||void 0===c?void 0:c.points)?null===(r=e[t+n])||void 0===r?void 0:r.points:"0",(null===(s=e[t+n])||void 0===s?void 0:s.figure)?", ".concat(p(null===(i=e[t+n])||void 0===i?void 0:i.figure)):"",(null===(a=e[t+n])||void 0===a?void 0:a.taken)?", taken: ".concat(null===(o=e[t+n])||void 0===o?void 0:o.taken," (").concat(null===(null===(l=e[t+n])||void 0===l?void 0:l.points)?-25:-5*(null===(u=e[t+n])||void 0===u?void 0:u.taken),")"):""]},"".concat(n,",").concat(t))}))},t))},s=0;s<e.length;s+=n.length)r(s);var i=Object(h.jsx)("tr",{children:n.map((function(t){return Object(h.jsx)("th",{style:{width:100/n.length+"%"},children:t},t)}))}),a={};n.forEach((function(t){a[t]=e.filter((function(e){return e.player===t}))}));var o=Object(h.jsx)("tr",{children:Object.keys(a).map((function(t){return Object(h.jsx)("td",{children:a[t].reduce((function(t,e){return t+(null===e.points?-25:e.points+function(t){switch(t){case"bridge":return 40;case"HEX":return 50;case"2xHEX":return 60;case"3xHEX":return 70;default:return 0}}(null===e||void 0===e?void 0:e.figure)+function(t){switch(t){case 1:return-5;case 2:return-10;case 3:return-15;default:return 0}}(null===e||void 0===e?void 0:e.taken))}),0)},t)}))});return Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:i}),Object(h.jsx)("tbody",{children:c}),Object(h.jsx)("tfoot",{children:o})]})},y={currentPlayerIndex:0,players:[],currentMove:{taken:null,figure:null,points:null,player:null},moves:[]},x=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(l.a)(this,n),c=e.call(this,t),localStorage.getItem("triominoState")?c.state=JSON.parse(localStorage.getItem("triominoState")):c.state=y,c.handleNext=c.handleNext.bind(Object(b.a)(c)),c.setCurrentMove=c.setCurrentMove.bind(Object(b.a)(c)),c.resetGame=c.resetGame.bind(Object(b.a)(c)),c.setPlayers=c.setPlayers.bind(Object(b.a)(c)),c}return Object(u.a)(n,[{key:"setPlayers",value:function(t){var e=this;this.setState({players:t},(function(){e.saveStateToLocalStorage()}))}},{key:"resetGame",value:function(){var t=this;this.setState((function(t){return Object(o.a)({},y)}),(function(){t.saveStateToLocalStorage()}))}},{key:"saveStateToLocalStorage",value:function(){localStorage.setItem("triominoState",JSON.stringify(this.state))}},{key:"setCurrentMove",value:function(t){var e=this,n=this.state.players[this.state.currentPlayerIndex];this.setState((function(e){return{currentMove:Object(o.a)(Object(o.a)(Object(o.a)({},e.currentMove),t),{},{player:n})}}),(function(){e.saveStateToLocalStorage()}))}},{key:"handleNext",value:function(){var t=this,e=this.state.currentMove;null!==e.points||3===e.taken?this.setState((function(t){return{currentMove:{taken:null,figure:null,points:null},moves:[].concat(Object(a.a)(t.moves),[t.currentMove]),currentPlayerIndex:(t.currentPlayerIndex+1)%t.players.length}}),(function(){t.saveStateToLocalStorage()})):console.log("not allowed move")}},{key:"render",value:function(){var t=this,e=this.state.players[this.state.currentPlayerIndex],n=this.state,c=n.players,r=n.moves,s=n.currentMove,i=Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-md-6 align-self-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("p",{children:["Player:\xa0",Object(h.jsx)("span",{className:"fs-4",children:e})]}),Object(h.jsxs)("p",{className:"my-2",children:["points:"," ",null===s.points||void 0===s.points?"?":s.points,", taken: ",s.taken||"none",", figure:"," ",p(s.figure)||"none"]}),Object(h.jsxs)("div",{className:"row mb-1",children:[Object(h.jsx)("div",{className:"h6 mt-4",children:"taken"}),Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-warning btn-action",onClick:function(){return t.setCurrentMove({taken:0})},children:"0"}),Object(h.jsx)("button",{type:"button",className:"btn btn-warning btn-action",onClick:function(){return t.setCurrentMove({taken:1})},children:"-1"}),Object(h.jsx)("button",{type:"button",className:"btn btn-warning btn-action",onClick:function(){return t.setCurrentMove({taken:2})},children:"-2"}),Object(h.jsx)("button",{type:"button",className:"btn btn-warning btn-action",onClick:function(){return t.setCurrentMove({taken:3})},children:"-3"})]})]}),Object(h.jsx)("div",{className:"h6 mt-4 mb-2",children:"points"}),Object(h.jsx)("div",{className:"row mb-1",children:Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:0})},children:"0"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:1})},children:"1"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:2})},children:"2"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:3})},children:"3"})]})}),Object(h.jsx)("div",{className:"row mb-1",children:Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:4})},children:"4"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:5})},children:"5"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:6})},children:"6"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:7})},children:"7"})]})}),Object(h.jsx)("div",{className:"row mb-1",children:Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:8})},children:"8"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:9})},children:"9"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:10})},children:"10"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:11})},children:"11"})]})}),Object(h.jsx)("div",{className:"row mb-1",children:Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:12})},children:"12"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:13})},children:"13"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:14})},children:"14"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-action",onClick:function(){return t.setCurrentMove({points:15})},children:"15"})]})}),Object(h.jsxs)("div",{className:"row mb-1",children:[Object(h.jsx)("div",{className:"h6 mt-4",children:"figures"}),Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-info btn-action",onClick:function(){return t.setCurrentMove({figure:"bridge"})},children:"bridge"}),Object(h.jsx)("button",{type:"button",className:"btn btn-info btn-action",onClick:function(){return t.setCurrentMove({figure:"HEX"})},children:"HEX"}),Object(h.jsx)("button",{type:"button",className:"btn btn-info btn-action",onClick:function(){return t.setCurrentMove({figure:"2xHEX"})},children:"2x HEX"}),Object(h.jsx)("button",{type:"button",className:"btn btn-info btn-action",onClick:function(){return t.setCurrentMove({figure:"3xHEX"})},children:"3x HEX"})]})]}),Object(h.jsx)("div",{className:"row mb-1 mt-3",children:Object(h.jsxs)("div",{className:"col d-flex justify-content-between",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.handleNext,children:"NEXT"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.setCurrentMove({figure:null,points:null,taken:null})},children:"CLEAR"})]})})]})})})}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(h.jsx)(f,{moves:r,players:c}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:function(){window.confirm("Are you sure? You will permanently remove game data.")&&t.resetGame()},children:"reset"})]})})]});return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("p",{className:"my-3",children:"Triomino Calculator"})}),0===c.length?Object(h.jsx)(v,{handleSubmit:this.setPlayers}):i]})})}}]),n}(r.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),s(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.8ffcb03d.chunk.js.map