(this["webpackJsonphit-me-with-that-song"]=this["webpackJsonphit-me-with-that-song"]||[]).push([[0],{61:function(e,t,i){},89:function(e,t,i){"use strict";i.r(t);var n,r=i(0),a=i.n(r),o=i(21),s=i.n(o),c=(i(61),i(29)),l=i(4),d=i(16),u=i(15),h=i(91),b=i(111);!function(e){e.Hidden="Hide trivia",e.Question="Show question",e.Answer="Show Answer"}(n||(n={}));var v=i(107),j={marginBottom:"100px",marginTop:"100px"},p=Object(v.a)({outerMostContainer:{height:"100vh",width:"100%"},controlPanelContainer:{display:"flex",justifyContent:"space-between",marginLeft:"100px",marginRight:"100px",height:"100%"},columnContainer:Object(u.a)({display:"flex",flexDirection:"column",overflow:"hidden",overflowX:"hidden"},j),columnScrollContainer:{overflowY:"scroll",height:"100%",width:"100%",paddingRight:"17px",boxSizing:"content-box",overflowX:"hidden"},wordColumnContainer:Object(u.a)({display:"flex",flexDirection:"column",justifyContent:"space-between"},j),pickSong:{display:"flex",flexDirection:"column",marginBottom:"10px",padding:"15px",borderLeft:"5px solid white",marginLeft:"1px",marginTop:"5px"},songTitle:{fontWeight:"bolder",fontSize:"18px"}}),m=function(e){console.log("building random stopwords");for(var t,i=[],n=0;i.length<2;){var r=(t=e.length,Math.floor(Math.random()*t));if(i.includes(r)||i.push(r),(n+=1)>100)break}return e.map((function(e,t){return{text:e,visible:!1,stopWord:i.includes(t)}}))},w=[{author:"Rollo & King",title:"Der st\xe5r et billede af dig p\xe5 mit bord",words:m(["der","st\xe5r","et","billede","af","dig"]),trivia:"Hvad var Rollo & Kings job f\xf8r de lavede musik?",triviaAnswer:"Skolel\xe6rer",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=EnG6OpagWEc&t=40",playtime:12},{author:"Shu-bi-dua",title:"Danmark",words:m(["den","der","siger","andet","lyver"]),trivia:"Hvor mange medlemmer har der v\xe6ret med i shubidua over \xe5rene: 3, 5, 9, 11 eller 16?",triviaAnswer:"16",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=xvq1__JFtrI&t=2m37s",playtime:14},{author:"Nick & Jay",title:"L\xe6kker",words:m(["har","jeg","set","dig","f\xf8r"]),trivia:"Hvor stor en procentdel af 15-30 \xe5rige danskere kendte i 2011 Nick & Jay?",triviaAnswer:"94%",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=GZL4oZI2Ro0&&t=59",playtime:14},{author:"Benny Jamz, Gilli, Kesi",title:"Ibiza",words:m(["bare","spis","for","ingen","skal","mangle"]),trivia:"Hvad st\xe5r B.O.C for?",triviaAnswer:"Bombs over copenhagen, Bomber over centrum, bars of crack",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=cmzh8BanYdg&t=21",playtime:12},{author:"Burhan G + Medina",title:"Mest ondt",words:m(["er","alt","det","jeg","savner","nu"]),trivia:" Inden en retssag omhandlende spiritus og narko i 2018 skiftede Medina navn. Efter retssagen skiftede hun tilbage til Medina. Hvad var hendes midlertidige navn under initialerne F.H?",triviaAnswer:"Frederikke Hansen",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=A1pXfcR2k9k&t=50",playtime:15},{author:"Drengene fra Angora",title:"Rejsesangen",words:m(["og","aben","er","deres","bedste","ven"]),trivia:"I hvilket \xe5r udkom drengene fra Angora?",triviaAnswer:"2004",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=-hhi2ACrlb0&t=24",playtime:16},{author:"Shakira",title:"Whenever, Wherever",words:m(["my","breasts","are","small","and","humble"]),trivia:"Hvem er Shakiras mand?",triviaAnswer:"Gerard Pique",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=weRHyjj34ZE&t=1m12sec",playtime:10},{author:"Joel Corry",title:"Head and Heart",words:m(["and","my","head","tells","me","to","stop"]),trivia:"Hvem er feature p\xe5 denne sang?",triviaAnswer:"MNEK",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=CRuOOxF-ENQ&t=1m18sec",playtime:12},{author:"Based Boys & Fissefred",title:"Giz pr\xe6sidenter",words:m(["regner","med","damer","s\xe5","g\xe5r","med","paraply"]),trivia:"Hvem er med i Based Boys som laver denne sang med Fissefred?",triviaAnswer:"G-lyfe & DJ Shuf",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=BjkLPlD_1mU&t=1m54sec",playtime:11},{author:"Pitpull",title:"Fireball",words:m(["I","saw","I","conquered","I","came"]),trivia:"Hvad var Pitbulls gennembrudssang?",triviaAnswer:"I Know You Want Me",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=HMqgVXSvwGo&t=45",playtime:9},{author:"Owl City",title:"Fireflies",words:m(["cause ","everything","is","never","as","it","seems"]),trivia:"Hvad for et socialt medie blev Owl City stort p\xe5?",triviaAnswer:"Myspace",showTrivia:n.Hidden,url:"https://www.youtube.com/watch?v=psuRGfAaju4&t=56",playtime:12}],g=Object(v.a)({toggleWord:function(e){return{width:"100px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",fontWeight:"bolder",marginBottom:"10px",backgroundColor:e.visible?"lightgreen":"pink",color:e.stopWord?"red":"black"}}}),f=i(2),x=function(e){var t=e.idx,i=e.visible,n=e.stopWord,r=e.handleWordClick,a=g({visible:i,stopWord:n});return Object(f.jsx)(h.a,{elevation:2,onClick:r,className:a.toggleWord,children:Object(f.jsx)("div",{children:t+1})})},O=i(109),y=i(110),C=i(49),k=i.n(C),S=i(50),H=i.n(S),T=Object(v.a)({container:{display:"flex",flexDirection:"column",marginBottom:"50px",alignItems:"center",padding:"10px"},teamName:{fontSize:"22px"}}),B=function(e){var t=e.points,i=e.name,n=e.handlePointChange,r=T();return Object(f.jsxs)(O.a,{className:r.container,children:[Object(f.jsxs)("span",{className:r.teamName,children:[" ",i," "]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(y.a,{"aria-label":"delete",onClick:function(){return n(-1)},children:Object(f.jsx)(k.a,{fontSize:"inherit"})}),t,Object(f.jsx)(y.a,{"aria-label":"delete",onClick:function(){return n(1)},children:Object(f.jsx)(H.a,{fontSize:"inherit"})})]})]})},N="hitMedSangen",W=function(e){console.log("start music",e);var t=new BroadcastChannel(N);t.postMessage({music:e}),t.close()},P=function(){return W({url:"Sound/intro.mp3",playtime:30})},A=Object(v.a)({toggleButton:{width:"250px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"30px",margin:"2px"}}),M=function(e){var t=e.children,i=e.onClick,n=A();return Object(f.jsx)(h.a,{elevation:2,className:n.toggleButton,onClick:i,style:{marginBottom:"25px"},children:t})},I="toggleWordVisiblity",F="setSong",z="toggleTrivia";function D(e,t){switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{words:(i=e.words,n=t.wordIndex,r=t.visibility,i.map((function(e,t){return n===t?Object(u.a)(Object(u.a)({},e),{},{visible:r}):Object(u.a)({},e)})))});case F:return t.song;case z:return Object(u.a)(Object(u.a)({},e),{},{showTrivia:t.triviaState});default:throw new Error}var i,n,r}var R={author:"",showTrivia:n.Hidden,title:"",trivia:"",triviaAnswer:"",words:[],url:"https://www.youtube.com/watch?v=rUPJPXkiMMY&t=7",playtime:15};var E=function(){var e=Object(r.useReducer)(D,R),t=Object(d.a)(e,2),i=t[0],a=t[1],o=Object(r.useState)(0),s=Object(d.a)(o,2),c=s[0],l=s[1],u=Object(r.useState)(0),v=Object(d.a)(u,2),j=v[0],m=v[1],g=function(e,t,i,n){t&&n&&function(e){var t=e.isStopWord;W({url:t?"Sound/wrong_guess.mp3":"Sound/correct_guess.mp3",playtime:2})}({isStopWord:i}),a({type:I,wordIndex:e,visibility:t})};Object(r.useEffect)((function(){!function(e){var t=new BroadcastChannel(N);t.postMessage({song:e}),t.close()}(i)}),[i]),Object(r.useEffect)((function(){!function(e){var t=new BroadcastChannel(N);t.postMessage({points:e}),t.close()}({team1Points:c,team2Points:j})}),[c,j]);var O=p();return Object(f.jsx)("div",{className:O.outerMostContainer,children:Object(f.jsxs)("div",{className:O.controlPanelContainer,children:[Object(f.jsx)("div",{className:O.columnContainer,children:Object(f.jsx)("div",{className:O.columnScrollContainer,children:w.map((function(e,t){return Object(f.jsxs)(h.a,{elevation:1,className:O.pickSong,onClick:function(){return a({type:F,song:w[t]})},style:{borderLeft:e.title===i.title?"5px solid green":""},children:[Object(f.jsx)("span",{className:O.songTitle,children:e.author}),Object(f.jsx)("span",{children:e.title}),Object(f.jsx)("i",{children:e.words.flatMap((function(e){return[e.text," "]}))})]},e.title)}))})}),Object(f.jsx)("div",{className:O.wordColumnContainer,children:i.words.map((function(e,t){return Object(f.jsx)(x,{idx:t,handleWordClick:function(){return g(t,!e.visible,e.stopWord,!0)},stopWord:e.stopWord,visible:e.visible,text:e.text},Object(b.a)())}))}),Object(f.jsxs)("div",{className:O.columnContainer,children:[Object(f.jsx)(M,{onClick:P,children:Object(f.jsx)("div",{children:"Play intro"})}),Object(f.jsx)(M,{onClick:function(){return W({url:i.url,playtime:i.playtime})},children:Object(f.jsx)("div",{children:"Play song"})}),Object(f.jsx)(M,{onClick:function(){i.words.flatMap((function(e,t){return e.visible?[]:[t]})).forEach((function(e,t){setTimeout((function(){g(e,!0,!1,!1)}),500*t)}))},children:Object(f.jsx)("div",{children:"Show all words"})}),Object.keys(n).map((function(e){return Object(f.jsx)(M,{onClick:function(){return t=n[e],a({type:z,triviaState:t});var t},children:Object(f.jsx)("div",{style:{color:i.showTrivia===n[e]?"green":"red"},children:n[e]})},Object(b.a)())}))]}),Object(f.jsxs)("div",{className:O.columnContainer,children:[Object(f.jsx)(B,{name:"Sasha Dupont",points:c,handlePointChange:function(e){return l(c+e)}}),Object(f.jsx)(B,{name:"Sigurd Bertet",points:j,handlePointChange:function(e){return m(j+e)}})]})]})})},L=i(51),G=i.n(L),J=i(52),q=i.n(J),K=Object(v.a)({cardFlipContainer:{borderLeft:"solid 1px white",borderRight:"solid 1px white",borderTop:"solid 5px white",borderBottom:"solid 5px white"},wordsContainer:{display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"100vh",backgroundColor:"#373737"},triviaContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",backgroundColor:"#373737",color:"white",fontSize:"60px"},triviaText:{marginLeft:"10%",marginRight:"10%"},pointsContainer:{position:"absolute",color:"white",fontSize:"26px",left:"10px"}}),X=Object(v.a)({wordContainer:function(e){return{backgroundColor:e.stopWord?"#d34249":"#000fe7",color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"250px",fontSize:e.visible?"100px":"150px"}},wordStyle:function(e){return{marginBottom:e.visible?"0":"25px"}}}),Y=function(e){var t=e.text,i=e.visible,n=e.stopWord,r=X({stopWord:n,visible:i,textLength:t.length});return Object(f.jsx)("div",{className:r.wordContainer,children:Object(f.jsx)("span",{className:r.wordStyle,children:i?t:"\ud834\udd1e"})},t)},_={words:[],trivia:"",triviaAnswer:"",showTrivia:n.Hidden};var Q=function(){var e=Object(r.useState)(_),t=Object(d.a)(e,2),i=t[0],a=t[1],o=Object(r.useState)({team1Points:0,team2Points:0}),s=Object(d.a)(o,2),c=s[0],l=s[1],u=Object(r.useState)(!1),h=Object(d.a)(u,2),b=h[0],v=h[1],j=Object(r.useState)(""),p=Object(d.a)(j,2),m=p[0],w=p[1],g=Object(r.useState)(0),x=Object(d.a)(g,2),O=x[0],y=x[1],C=function(e){w(e.url),y(e.playtime),v(!0)};Object(r.useEffect)((function(){var e=function(e,t,i){var n=new BroadcastChannel(N);return n.onmessage=function(n){var r=n.data;console.log("got some broadcast data",r),r.song&&e(r.song),r.points&&t(r.points),r.music&&i(r.music)},function(){return n.close()}}(a,l,C);return function(){e()}}),[]);var k=K(),S=i.showTrivia!==n.Hidden?Object(f.jsx)("div",{className:k.triviaContainer,children:Object(f.jsx)("span",{className:k.triviaText,children:i.showTrivia===n.Question?i.trivia:i.triviaAnswer})}):Object(f.jsx)("div",{className:k.wordsContainer,children:i.words.map((function(e){return Object(f.jsx)("div",{className:k.cardFlipContainer,style:{flexGrow:(t=e.text.length,t>9?.1:1-parseFloat("0.".concat(t)))},children:Object(f.jsxs)(q.a,{isFlipped:e.visible,flipDirection:"horizontal",children:[Object(f.jsx)(Y,{visible:!1,text:e.text,stopWord:e.stopWord&&e.visible}),Object(f.jsx)(Y,{visible:!0,text:e.text,stopWord:e.stopWord&&e.visible})]})});var t}))});return Object(f.jsxs)("div",{style:{overflowY:"hidden"},children:[Object(f.jsxs)("div",{className:k.pointsContainer,style:{display:i.words.length?"block":"none"},children:[Object(f.jsxs)("div",{children:["Sasha Dupont: ",c.team1Points]}),Object(f.jsxs)("div",{children:["Sigurd Bertet: ",c.team2Points]})]}),S,Object(f.jsx)(G.a,{playing:b,url:m,onPlay:function(){setTimeout((function(){v(!1)}),1e3*O)}})]})},Z=Object(v.a)({landingPageContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh",width:"100%"}});var U=function(){var e=Z();return Object(f.jsxs)("div",{className:e.landingPageContainer,children:[Object(f.jsx)(c.b,{to:"/control-panel",children:"Control panel"}),Object(f.jsx)(c.b,{to:"/dashboard",children:"Dashboard"})]})};var V=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(c.a,{basename:"/hit-me-with-that-song",children:Object(f.jsx)("div",{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/control-panel",children:Object(f.jsx)(E,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/dashboard",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(l.a,{path:"/",children:Object(f.jsx)(U,{})})]})})})})},$=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,113)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),r(e),a(e),o(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root")),$()}},[[89,1,2]]]);
//# sourceMappingURL=main.0893ece5.chunk.js.map