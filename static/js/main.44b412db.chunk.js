(this["webpackJsonpplay-pause-button-example"]=this["webpackJsonpplay-pause-button-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var u=n(0),a=n.n(u),r=n(2),o=n.n(r),c={button:"_2hTXI",playing:"_3emv_"},l=Object(u.forwardRef)((function(e,t){var n=e.className,r=e.style,o=e.state,l=void 0===o?"paused":o,s=e.onPause,i=e.onPlay,f=e.onToggle,p=Object(u.useRef)(null),g=Object(u.useState)(l),m=g[0],d=g[1],y=Object(u.useCallback)((function(){d((function(e){return"paused"===e?"playing":"paused"}))}),[]);return Object(u.useEffect)((function(){d(l)}),[l]),Object(u.useEffect)((function(){f&&f(m),"paused"===m?s&&s():i&&i()}),[m]),Object(u.useLayoutEffect)((function(){if(t&&p.current){var e=p.current;e.isPaused=function(){return"paused"===m},e.play=function(){return d("playing")},e.pause=function(){return d("paused")},e.toggle=function(){return y()},"function"===typeof t?t(e):t.current=e}}),[t,m,y]),a.a.createElement("div",{ref:p,onClick:y,className:[c.button,c[m],n].join(" "),style:r},a.a.createElement("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},a.a.createElement("use",{className:"ytp-svg-shadow"}),a.a.createElement("path",{id:"ytp-id-110",className:"ytp-svg-fill",d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"})))})),s=(n(9),function(){var e=Object(u.useRef)(null);return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{ref:e,style:{width:"30rem",height:"20rem",borderRadius:"5rem",background:"#e62117",margin:"1.6rem auto"},state:"playing",onPlay:function(){return console.log("2 Play")},onPause:function(){return console.log("2 Pause")},onToggle:function(){return console.log("2 Toggle")}}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.current.play()}},"Play"),a.a.createElement("button",{onClick:function(){return e.current.pause()}},"Pause"),a.a.createElement("button",{onClick:function(){return e.current.toggle()}},"Toggle")))});o.a.render(a.a.createElement(s,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.44b412db.chunk.js.map