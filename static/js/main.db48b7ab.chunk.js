(this["webpackJsonphit-me-with-that-song"]=this["webpackJsonphit-me-with-that-song"]||[]).push([[0],{60:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var i,o=n(0),r=n.n(o),a=n(21),s=n.n(a),c=(n(60),n(28)),l=n(4),d=n(16),u=n(15),h=n(90);!function(e){e.Hidden="Hide trivia",e.Question="Show question",e.Answer="Show Answer"}(i||(i={}));var j=n(105),b={marginBottom:"100px",marginTop:"100px"},p=Object(j.a)({outerMostContainer:{height:"100vh",width:"100%"},controlPanelContainer:{display:"flex",justifyContent:"space-between",marginLeft:"100px",marginRight:"100px",height:"100%"},columnContainer:Object(u.a)({display:"flex",flexDirection:"column"},b),wordColumnContainer:Object(u.a)({display:"flex",flexDirection:"column",justifyContent:"space-between"},b),pickSong:{display:"flex",flexDirection:"column",marginBottom:"10px",padding:"20px",width:"100%",borderLeft:"5px solid white"},songTitle:{fontWeight:"bolder",fontSize:"18px"},toggleButton:{width:"250px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"30px"}}),x=function(e){console.log("building random stopwords");for(var t,n=[],i=0;n.length<2;){var o=(t=e.length,Math.floor(Math.random()*t));if(n.includes(o)||n.push(o),(i+=1)>100)break}return e.map((function(e,t){return{text:e,visible:!1,stopWord:n.includes(t)}}))},m=[{author:"Rollo & King",title:"Der st\xe5r et billede af dig p\xe5 mit bord",words:x(["Der","st\xe5r","et","billede","af","dig"]),trivia:"Hvad var Rollo & Kings job f\xf8r de lavede musik",triviaAnswer:"Skolel\xe6rer",showTrivia:i.Hidden,url:"https://www.youtube.com/watch?v=EnG6OpagWEc&t=40",playtime:12},{author:"Shu-bi-dua",title:"Danmark",words:x(["Den","der","siger","andet","lyver"]),trivia:"Hvor mange medlemmer har der v\xe6ret med i shubidua over \xe5rene: 3, 5, 9, 11 eller 16?",triviaAnswer:"16",showTrivia:i.Hidden,url:"https://www.youtube.com/watch?v=xvq1__JFtrI&t=2m37s",playtime:14}],v=Object(j.a)({toggleWord:function(e){return{width:"100px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",fontWeight:"bolder",marginBottom:"10px",backgroundColor:e.visible?"lightgreen":"pink",color:e.stopWord?"red":"black"}}}),g=n(2),f=function(e){var t=e.idx,n=e.visible,i=e.stopWord,o=e.handleWordClick,r=v({visible:n,stopWord:i});return Object(g.jsx)(h.a,{elevation:2,onClick:o,className:r.toggleWord,children:Object(g.jsx)("div",{children:t+1})})},O=n(107),w=n(108),C=n(49),y=n.n(C),S=n(50),k=n.n(S),N=Object(j.a)({container:{display:"flex",flexDirection:"column",marginBottom:"50px",alignItems:"center",padding:"10px"},teamName:{fontSize:"22px"}}),W=function(e){var t=e.points,n=e.name,i=e.handlePointChange,o=N();return Object(g.jsxs)(O.a,{className:o.container,children:[Object(g.jsxs)("span",{className:o.teamName,children:[" ",n," "]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(w.a,{"aria-label":"delete",onClick:function(){return i(-1)},children:Object(g.jsx)(y.a,{fontSize:"inherit"})}),t,Object(g.jsx)(w.a,{"aria-label":"delete",onClick:function(){return i(1)},children:Object(g.jsx)(k.a,{fontSize:"inherit"})})]})]})},B="hitMedSangen",P=function(e){console.log("start music",e);var t=new BroadcastChannel(B);t.postMessage({music:e}),t.close()},T="toggleWordVisiblity",D="setSong",I="toggleTrivia";function M(e,t){switch(t.type){case T:return Object(u.a)(Object(u.a)({},e),{},{words:(n=e.words,i=t.wordIndex,o=t.visibility,n.map((function(e,t){return i===t?Object(u.a)(Object(u.a)({},e),{},{visible:o}):Object(u.a)({},e)})))});case D:return t.song;case I:return Object(u.a)(Object(u.a)({},e),{},{showTrivia:t.triviaState});default:throw new Error}var n,i,o}var z={author:"",showTrivia:i.Hidden,title:"",trivia:"",triviaAnswer:"",words:[],url:"https://www.youtube.com/watch?v=rUPJPXkiMMY&t=7",playtime:15};var H=function(){var e=Object(o.useReducer)(M,z),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(0),s=Object(d.a)(a,2),c=s[0],l=s[1],u=Object(o.useState)(0),j=Object(d.a)(u,2),b=j[0],x=j[1],v=function(e,t,n){t&&function(e){var t=e.isStopWord;P({url:t?"Sound/wrong_guess.mp3":"Sound/correct_guess.mp3",playtime:2})}({isStopWord:n}),r({type:T,wordIndex:e,visibility:t})};Object(o.useEffect)((function(){!function(e){var t=new BroadcastChannel(B);t.postMessage({song:e}),t.close()}(n)}),[n]),Object(o.useEffect)((function(){!function(e){var t=new BroadcastChannel(B);t.postMessage({points:e}),t.close()}({team1Points:c,team2Points:b})}),[c,b]);var O=p();return Object(g.jsx)("div",{className:O.outerMostContainer,children:Object(g.jsxs)("div",{className:O.controlPanelContainer,children:[Object(g.jsx)("div",{className:O.columnContainer,children:m.map((function(e,t){return Object(g.jsxs)(h.a,{elevation:1,className:O.pickSong,onClick:function(){return r({type:D,song:m[t]})},style:{borderLeft:e.title===n.title?"5px solid green":""},children:[Object(g.jsx)("span",{className:O.songTitle,children:e.author}),Object(g.jsx)("span",{children:e.title})]},e.title)}))}),Object(g.jsx)("div",{className:O.wordColumnContainer,children:n.words.map((function(e,t){return Object(g.jsx)(f,{idx:t,handleWordClick:function(){return v(t,!e.visible,e.stopWord)},stopWord:e.stopWord,visible:e.visible,text:e.text},e.text)}))}),Object(g.jsxs)("div",{className:O.columnContainer,children:[Object(g.jsx)(h.a,{elevation:2,className:O.toggleButton,onClick:function(){return P({url:n.url,playtime:n.playtime})},style:{marginBottom:"150px"},children:Object(g.jsx)("div",{children:"Play song"})}),Object.keys(i).map((function(e){return Object(g.jsx)(h.a,{elevation:2,className:O.toggleButton,onClick:function(){return t=i[e],r({type:I,triviaState:t});var t},style:{marginBottom:"20px"},children:Object(g.jsx)("div",{style:{color:n.showTrivia===i[e]?"green":"red"},children:i[e]})})}))]}),Object(g.jsxs)("div",{className:O.columnContainer,children:[Object(g.jsx)(W,{name:"Sasha Dupont",points:c,handlePointChange:function(e){return l(c+e)}}),Object(g.jsx)(W,{name:"Sigurd Bertet",points:b,handlePointChange:function(e){return x(b+e)}})]})]})})},A=n(51),E=n.n(A),L=Object(j.a)({wordsContainer:{display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"100vh",backgroundColor:"#373737"},triviaContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",backgroundColor:"#373737",color:"white",fontSize:"60px"},triviaText:{marginLeft:"10%",marginRight:"10%"},pointsContainer:{position:"absolute",color:"white",fontSize:"26px",left:"10px"}}),R=Object(j.a)({wordContainer:function(e){return{backgroundColor:e.stopWord?"#d34249":"#000fe7",color:"white","flex-grow":"1",display:"flex",justifyContent:"center",alignItems:"center",borderLeft:"solid 1px white",borderRight:"solid 1px white",borderTop:"solid 5px white",borderBottom:"solid 5px white",height:"250px",fontSize:e.visible?"100px":"150px"}},wordStyle:function(e){return{marginBottom:e.visible?"0":"25px"}}}),F=function(e){var t=e.text,n=e.visible,i=e.stopWord,o=R({stopWord:i,visible:n});return Object(g.jsx)("div",{className:o.wordContainer,children:Object(g.jsx)("span",{className:o.wordStyle,children:n?t:"\ud834\udd1e"})},t)},J={words:[],trivia:"",triviaAnswer:"",showTrivia:i.Hidden};var _=function(){var e=Object(o.useState)(J),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)({team1Points:0,team2Points:0}),s=Object(d.a)(a,2),c=s[0],l=s[1],u=Object(o.useState)(!1),h=Object(d.a)(u,2),j=h[0],b=h[1],p=Object(o.useState)(""),x=Object(d.a)(p,2),m=x[0],v=x[1],f=Object(o.useState)(0),O=Object(d.a)(f,2),w=O[0],C=O[1],y=function(e){v(e.url),C(e.playtime),b(!0)};Object(o.useEffect)((function(){var e=function(e,t,n){var i=new BroadcastChannel(B);return i.onmessage=function(i){var o=i.data;console.log("got some broadcast data",o),o.song&&e(o.song),o.points&&t(o.points),o.music&&n(o.music)},function(){return i.close()}}(r,l,y);return function(){e()}}),[]);var S=L(),k=n.showTrivia!==i.Hidden?Object(g.jsx)("div",{className:S.triviaContainer,children:Object(g.jsx)("span",{className:S.triviaText,children:n.showTrivia===i.Question?n.trivia:n.triviaAnswer})}):Object(g.jsx)("div",{className:S.wordsContainer,children:n.words.map((function(e){return Object(g.jsx)(F,{visible:e.visible,text:e.text,stopWord:e.stopWord&&e.visible})}))});return Object(g.jsxs)("div",{style:{overflowY:"hidden"},children:[Object(g.jsxs)("div",{className:S.pointsContainer,children:[Object(g.jsxs)("div",{children:["Sasha Dupont: ",c.team1Points]}),Object(g.jsxs)("div",{children:["Sigurd Bertet: ",c.team2Points]})]}),k,Object(g.jsx)(E.a,{playing:j,url:m,onPlay:function(){setTimeout((function(){b(!1)}),1e3*w)}})]})},q=Object(j.a)({landingPageContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh",width:"100%"}});var K=function(){var e=q();return Object(g.jsxs)("div",{className:e.landingPageContainer,children:[Object(g.jsx)(c.b,{to:"/control-panel",children:"Control panel"}),Object(g.jsx)(c.b,{to:"/dashboard",children:"Dashboard"})]})};var Q=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(c.a,{basename:"/hit-me-with-that-song",children:Object(g.jsx)("div",{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:"/control-panel",children:Object(g.jsx)(H,{})}),Object(g.jsx)(l.a,{exact:!0,path:"/dashboard",children:Object(g.jsx)(_,{})}),Object(g.jsx)(l.a,{path:"/",children:Object(g.jsx)(K,{})})]})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),r(e),a(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root")),Y()}},[[88,1,2]]]);
//# sourceMappingURL=main.db48b7ab.chunk.js.map