(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectDescription",(function(){return o}));var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"project-description col-lg-9 no-padding container"},r.a.createElement("p",{className:e.projectContent},e.description))};t.default=o},102:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectName",(function(){return o}));var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"col-lg-3 no-padding"},r.a.createElement("span",{className:"project-name"},e.name))};t.default=o},106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),s=n.n(o),c=(n(218),n(81)),i=n(159),l=n(63),u=n(160);s.a.render(r.a.createElement(l.a,{store:u.default},r.a.createElement(c.default,null)),document.getElementById("root")),i.unregister()},125:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=125},131:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(132),u=n(133),m=n(134),d=n(135),p=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).collapseExpand=function(e){r.setState({collapsed:e})},r.state={collapsed:"collapsed"},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement(l.default,{collapsed:this.state.collapsed,returnToParent:this.collapseExpand}),i.a.createElement(u.default,{collapsed:this.state.collapsed,returnToParent:this.collapseExpand}),i.a.createElement("div",{className:"anchor"},i.a.createElement(m.default,null),i.a.createElement(d.default,null)))}}]),n}(c.Component);t.default=p},132:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=(n(220),function(e){Object(o.a)(c,e);var t=Object(s.a)(c);function c(e){var n;return Object(a.a)(this,c),(n=t.call(this,e)).expandCollapse=function(){var e;e="collapsed"===n.props.collapsed?"expanded":"collapsed",n.props.returnToParent(e)},n.state={expanded:!1},n}return Object(r.a)(c,[{key:"render",value:function(){return i.a.createElement("div",{className:"icon"},i.a.createElement("img",{className:"logo",src:n(169),alt:"Profile Pic"}),i.a.createElement("img",{className:"expand",src:n(170),alt:"Borger",onClick:this.expandCollapse}))}}]),c}(c.Component));t.default=l},133:function(e,t,n){"use strict";n.r(t),n.d(t,"Tabs",(function(){return l}));var a=n(0),r=n.n(a),o=n(48),s=n(4),c=n(23),i=n(24),l=function(e){return console.log(e),r.a.createElement("ul",{className:"".concat(e.collapsed)},r.a.createElement("li",{className:"cancel tab"},r.a.createElement("div",{onClick:function(){return e.returnToParent("collapsed")}},r.a.createElement(c.a,{icon:i.h}))),r.a.createElement(o.b,{exact:!0,to:"/",activeClassName:"sidebar__Link--active",className:"sidebar__Link list-padding"},r.a.createElement("li",{className:"tab"},"Home")),r.a.createElement(o.b,{exact:!0,to:"/bio",className:"sidebar__Link list-padding",activeClassName:"sidebar__Link--active"},r.a.createElement("li",{className:"tab"},"Bio")),r.a.createElement(o.b,{to:"/projects",className:"sidebar__Link list-padding",activeClassName:"sidebar__Link--active"},r.a.createElement("li",{className:"tab"},"Projects")),r.a.createElement(o.b,{to:"/skills",className:"sidebar__Link list-padding",activeClassName:"sidebar__Link--active"},r.a.createElement("li",{className:"tab"},"Skills")),r.a.createElement(o.b,{to:"/resume",className:"sidebar__Link list-padding",activeClassName:"sidebar__Link--active"},r.a.createElement("li",{className:"tab"},"Resume")),r.a.createElement(o.b,{to:"/experiments",className:"sidebar__Link list-padding",activeClassName:"sidebar__Link--active"},r.a.createElement("li",{className:"tab"},"Experiments")))};t.default=Object(s.f)(l)},134:function(e,t,n){"use strict";n.r(t),n.d(t,"Contact",(function(){return o}));var a=n(0),r=n.n(a),o=(n(223),function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h4",null,"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,"Phone: 973-647-5093"),r.a.createElement("li",null,"Email: joseph.ganning@gmail.com")))});t.default=o},135:function(e,t,n){"use strict";n.r(t),n.d(t,"MediaLinks",(function(){return s}));var a=n(0),r=n.n(a),o=n(215),s=(n(224),function(){return r.a.createElement("div",{className:"media-links"},r.a.createElement("a",{className:"media-icon",href:"https://github.com/JGanning"},r.a.createElement(o.a,null)),r.a.createElement("a",{className:"media-icon",href:"https://www.linkedin.com/in/joseph-ganning/"},r.a.createElement(o.b,null)))});t.default=s},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n(137),c=n(138),i=n(139),l=n(153),u=n(154),m=n(157),d=n(146);t.default=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:s.default}),r.a.createElement(o.a,{path:"/bio",component:c.default}),r.a.createElement(o.a,{path:"/experiments",component:d.default}),r.a.createElement(o.a,{path:"/music-lounge",component:i.default}),r.a.createElement(o.a,{path:"/projects",component:l.default}),r.a.createElement(o.a,{path:"/resume",component:u.default}),r.a.createElement(o.a,{path:"/skills",component:m.default}))}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return l}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=(n(225),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"home col-lg-9 no-padding"},i.a.createElement("h2",{className:"header"},"Welcome to my Website"))}}]),n}(c.Component));t.default=l},138:function(e,t,n){"use strict";n.r(t),n.d(t,"About",(function(){return u}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(86),u=function(e){Object(o.a)(c,e);var t=Object(s.a)(c);function c(e){var n;return Object(a.a)(this,c),(n=t.call(this,e)).state={},n}return Object(r.a)(c,[{key:"render",value:function(){return i.a.createElement("div",{className:"about col-lg-9 no-padding"},i.a.createElement("h2",{className:"header"},"About Me"),i.a.createElement("img",{src:n(171),alt:"Profile Pic"}),i.a.createElement("div",{className:"about-desc"},i.a.createElement("p",null,l.p1),i.a.createElement("p",null,l.p2),i.a.createElement("p",null,l.p3)))}}]),c}(c.Component);t.default=u},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(140),s=n(141),c=n(143),i=n(144),l=n(145),u=n(150);t.default=function(){return r.a.createElement(u.default,null,r.a.createElement("div",{className:"test-main music-lounge"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"row no-margin"},r.a.createElement("div",{className:"left col-lg-9 no-padding"},r.a.createElement("h2",{className:"header no-margin"},"The Music Lounge"),r.a.createElement(s.default,null),r.a.createElement(o.default,null),r.a.createElement("div",{className:"controls-container"},r.a.createElement(l.default,null))),r.a.createElement("div",{className:"right col-lg-3 no-padding"},r.a.createElement(c.default,null),r.a.createElement(i.default,null))))))}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return s}));var a=n(0),r=n.n(a),o=n(32),s=function(){var e=Object(a.useContext)(o.default),t=e.currentSong,n=e.songs;return r.a.createElement("div",null,n&&n[t]?r.a.createElement("h2",{className:"musicroom-header no-margin"},"Now Playing: ",n[t].title):"")};t.default=s},141:function(e,t,n){"use strict";n.r(t),n.d(t,"Graphics",(function(){return s}));var a=n(0),r=n.n(a),o=n(32),s=function(e){var t=Object(a.useContext)(o.default),s=t.currentSong,c=t.songs;return r.a.createElement("div",{className:"graphics"},r.a.createElement("img",{src:n(364)("./"+c[s].album),alt:"album",width:"80%",height:"500px",className:"album"}))};t.default=s},142:function(e,t,n){e.exports=n.p+"static/media/josephganning_resume.17f56e8c.pdf"},143:function(e,t,n){"use strict";n.r(t),n.d(t,"Actions",(function(){return o}));var a=n(0),r=n.n(a),o=function(){return r.a.createElement("div",null)};t.default=o},144:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(0),o=n.n(r),s=n(32),c=n(82),i=n(23),l=n(24);t.default=function(){var e=Object(r.useContext)(s.default),t=e.SetCurrent,n=e.currentSong,u=Object(r.useState)(0),m=Object(a.a)(u,2);return m[0],m[1],o.a.createElement("div",{className:"playlist"},o.a.createElement("div",{className:"header"},o.a.createElement("i",{className:"fas fa-list-ul"}),o.a.createElement("h2",{className:"playlist-header no-margin"},o.a.createElement(i.a,{className:"fa-margin",icon:l.b}),"Playlist")),o.a.createElement("div",{className:"songs"},o.a.createElement("ul",{className:"song-list"},c.songsArr.map((function(e,a){return o.a.createElement("li",{className:"song "+(n===a?"active":""),key:a,onClick:function(){t(a)}},o.a.createElement("div",null,o.a.createElement(i.a,{className:"fa-margin",icon:l.c}),o.a.createElement("span",{className:"song-info"},e.title)),o.a.createElement("div",null,o.a.createElement(i.a,{className:"fa-margin",icon:l.i}),o.a.createElement("span",{className:"song-info"},e.artist)))})))))}},145:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(0),o=n.n(r),s=n(32),c=n(23),i=n(24);t.default=function(){var e=Object(r.useContext)(s.default),t=e.currentSong,l=e.songs,u=e.nextSong,m=e.prevSong,d=(e.repeat,e.random,e.playing),p=(e.toggleRandom,e.toggleRepeat,e.togglePlaying),f=e.handleEnd,g=Object(r.useRef)("audio_tag"),v=Object(r.useState)(.5),E=Object(a.a)(v,2),b=E[0],h=E[1],j=Object(r.useState)(0),N=Object(a.a)(j,2),k=N[0],C=N[1],P=Object(r.useState)(0),O=Object(a.a)(P,2),y=O[0],_=O[1],M=function(e){return(e-(e%=60))/60+(9<e?":":":0")+~~e},S=function(){return g.current.paused?g.current.play():g.current.pause()};return Object(r.useEffect)((function(){g.current.volume=b,d&&S()}),[t]),o.a.createElement("div",{className:"controls"},o.a.createElement("audio",{ref:g,type:"audio/mpeg",src:n(365)("./"+l[t].song),onCanPlay:function(e){return C(e.target.duration)},onTimeUpdate:function(e){return _(e.target.currentTime)},onEnded:f,preload:"true"}),o.a.createElement("div",{className:"volume"},o.a.createElement(c.a,{icon:i.j}),o.a.createElement("input",{value:Math.round(100*b),type:"range",name:"volBar",id:"volBar",onChange:function(e){return t=e.target.value/100,h(t),void(g.current.volume=t);var t}})),o.a.createElement("div",{className:"music-controls"},o.a.createElement("button",{onClick:m,className:"button btn btn-primary"},o.a.createElement(c.a,{icon:i.f})),o.a.createElement("button",{className:"button btn btn-primary",onClick:function(){p(),S()}},d?o.a.createElement(c.a,{icon:i.d}):o.a.createElement(c.a,{icon:i.e})),o.a.createElement("button",{onClick:u,className:"button btn btn-primary"},o.a.createElement(c.a,{icon:i.g}))),o.a.createElement("div",{className:"progressbar"},o.a.createElement("span",{className:"time current-time"},M(y)),o.a.createElement("input",{onChange:function(e){var t=e.target.value*k/100;_(t),g.current.currentTime=t},value:k?100*y/k:0,type:"range",name:"progresBar",id:"prgbar"}),o.a.createElement("span",{className:"time total-time"},M(k))))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"Experiments",(function(){return d}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(147),u=(n(193),n(194),n(148)),m=(n(203),n(149)),d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"module col-lg-9 no-padding"},i.a.createElement("h2",{className:"header"},"Experiments"),i.a.createElement("div",{className:"experiments-body"},i.a.createElement(l.default,null),i.a.createElement(u.default,null),i.a.createElement(m.default,null)))}}]),n}(c.Component);t.default=d},147:function(e,t,n){"use strict";n.r(t),n.d(t,"ExperimentsDescription",(function(){return l}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,"This is the tab where I experiment with new react concepts and ideas before I implement them into a bigger project")}}]),n}(c.Component);t.default=l},148:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(880),u=n(879),m=n(347),d=n.n(m),p=n(348),f=n.n(p),g=function(e){var t=e.treeItems;return console.log(t),i.a.createElement(l.a,{defaultCollapseIcon:i.a.createElement(d.a,null),defaultExpandIcon:i.a.createElement(f.a,null)},function e(t){return console.log(t),t.map((function(t){var n=void 0;return t.children&&t.children.length>0&&(n=e(t.children)),i.a.createElement(u.a,{key:t.nodeId,nodeId:t.nodeId,label:t.label,children:n})}))}(t))},v=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={treeItems:[{nodeId:"1",label:"parent 1",children:[{nodeId:"2",label:"child 1"},{nodeId:"3",label:"child 2"},{nodeId:"4",label:"child 3"}]},{nodeId:"5",label:"parent 2",children:[{nodeId:"6",label:"child 4"},{nodeId:"7",label:"child 5",children:[{nodeId:"8",label:"grandchild 1"},{nodeId:"9",label:"grandchild 2"}]}]}]},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,{treeItems:this.state.treeItems}))}}]),n}(c.Component);t.default=v},149:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(350),u=n.n(l),m=(n(743),[{value:"mars",label:"Mars",children:[{value:"phobos",label:"Phobos"},{value:"deimos",label:"Deimos"}]},{value:"earth",label:"Earth",children:[{value:"moon",label:"Moon"}]}]),d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={checked:[],expanded:[]},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{nodes:m,checked:this.state.checked,expanded:this.state.expanded,onCheck:function(t){return e.setState({checked:t})},onExpand:function(t){return e.setState({expanded:t})}})}}]),n}(i.a.Component);t.default=d},150:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(0),o=n.n(r),s=n(32),c=n(83),i=n(82),l=n(29);t.default=function(e){var t={currentSong:0,songs:i.songsArr,repeat:!1,random:!1,playing:!1,audio:null},n=Object(r.useReducer)(c.default,t),u=Object(a.a)(n,2),m=u[0],d=u[1],p=function(e){return d({type:l.SET_CURRENT_SONG,data:e})},f=function(){m.currentSong===m.songs.length-1?p(0):p(m.currentSong+1)};return o.a.createElement(s.default.Provider,{value:{currentSong:m.currentSong,songs:m.songs,repeat:m.repeat,random:m.random,playing:m.playing,audio:m.audio,nextSong:f,prevSong:function(){0===m.currentSong?p(m.songs.length-1):p(m.currentSong-1)},SetCurrent:p,toggleRandom:function(e){return d({type:l.TOGGLE_RANDOM,data:!m.random})},toggleRepeat:function(e){return d({type:l.TOGGLE_REPEAT,data:!m.repeat})},togglePlaying:function(){return d({type:l.TOGGLE_PLAYING,data:!m.playing})},handleEnd:function(){if(m.random)return d({type:l.SET_CURRENT_SONG,data:~~(Math.random()*m.songs.length)});if(m.repeat)f();else{if(m.currentSong===m.songs.length-1)return;f()}}}},e.children)}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"getProjects",(function(){return s}));var a=n(103),r=n.n(a),o=(n(877),n(85));function s(){console.log("getting projects");return function(e){return r.a.get("http://localhost:8084/api/getProjects").then((function(t){var n=t&&t.data&&t.data.response;e({type:o.GET_PROJECTS,payload:{getProjects:n}})})).catch((function(e){console.log(e)}))}}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(34),r=n(85),o={};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.GET_PROJECTS:return Object(a.a)(Object(a.a)({},e),{},{getProjects:t.payload.getProjects});default:return e}}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"Projects",(function(){return f}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(20),u=n(63),m=(n(308),n(101)),d=n(102),p=n(151),f=(n(103),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={projectsArray:[{name:"JGanning Backend",image:"",description:"Java code for this website",link:""},{name:"Kois R Us",image:"",description:"School Project in PHP",link:""},{name:"Bissy Bot",image:"",description:"Chat Bot in Python",link:""},{name:"Music Player Extension",image:"",description:"Javascript Chrome extension to play music",link:""},{name:"Magic 8 Ball",image:"",description:"First small project on Android in Java",link:""},{name:"Magic 8 Ball",image:"",description:"First small project on Android in Java",link:""},{name:"Magic 8 Ball",image:"",description:"First small project on Android in Java",link:""}]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.getProjects()}},{key:"render",value:function(){return console.log(this.props.getProjects),i.a.createElement("div",{className:"projects col-lg-12 no-padding"},i.a.createElement("div",{className:"col-lg-12 no-padding black-bg"},i.a.createElement("div",{className:"col-lg-9 no-padding"},i.a.createElement("h2",{className:"header no-margin"},"Projects"))),i.a.createElement("div",{className:"projects-body"},this.props.getProjects&&this.props.getProjects?this.props.getProjects.map((function(e,t){return i.a.createElement("div",{key:t,className:"project row no-margin"},i.a.createElement(d.default,{name:e.name}),i.a.createElement(m.default,{projectContent:"db-project-content",description:e.description}))})):this.state.projectsArray.map((function(e,t){return i.a.createElement("div",{key:t,className:"project row no-margin"},i.a.createElement(d.default,{name:e.name}),i.a.createElement(m.default,{projectContent:"project-content",description:e.description}))}))))}}]),n}(c.Component));t.default=Object(u.b)((function(e){return{getProjects:e.projectReducer.getProjects}}),(function(e){return{actions:Object(l.b)(p,e)}}))(f)},154:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(0),o=n.n(r),s=n(142),c=n.n(s),i=(n(309),n(105)),l=n(23),u=n(24);i.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(i.pdfjs.version,"/pdf.worker.js"),t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=(t[0],t[1]),s=Object(r.useState)(1),m=Object(a.a)(s,2),d=m[0];return m[1],o.a.createElement("div",{className:"resume col-lg-9 no-padding"},o.a.createElement("h2",{className:"header no-margin"},"Resume"),o.a.createElement("div",{className:"download"},o.a.createElement("a",{className:"dl-button",href:"../../assets/img/josephganning_resume.pdf",download:!0},o.a.createElement(l.a,{className:"dl-icon",icon:u.a}),"Download Resume")),o.a.createElement("div",{className:"doc-body"},o.a.createElement(i.Document,{file:c.a,onDocumentLoadSuccess:function(e){var t=e.numPages;n(t)},className:"resume-pdf"},o.a.createElement(i.Page,{pageNumber:d}))))}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"Descriptions",(function(){return o}));var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"skills-list"},r.a.createElement("span",{className:"skill-text"},e.text))};t.default=o},156:function(e,t,n){"use strict";n.r(t),n.d(t,"Devicons",(function(){return o}));var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"devicons-list"},r.a.createElement("div",null,e.devicon))};t.default=o},157:function(e,t,n){"use strict";n.r(t),n.d(t,"Skills",(function(){return m}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=(n(319),n(156)),u=n(155),m=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={skillObjArray:[{text:"Worked at GE building Angular Apps",icon:i.a.createElement("i",{className:"devicon-angularjs-plain"})},{text:"Working at Wells Fargo building React Apps",icon:i.a.createElement("i",{className:"devicon-react-original-wordmark"})},{text:"Use Javascript in frontend dev work",icon:i.a.createElement("i",{className:"devicon-javascript-plain"})},{text:"Use HTML in frontend dev work",icon:i.a.createElement("i",{className:"devicon-html5-plain-wordmark"})},{text:"Use CSS in frontend dev work",icon:i.a.createElement("i",{className:"devicon-css3-plain-wordmark"})},{text:"Use Java for service programming at GE and Wells Fargo",icon:i.a.createElement("i",{className:"devicon-java-plain-wordmark"})},{text:"Used NodeJS for Service programming at GE",icon:i.a.createElement("i",{className:"devicon-nodejs-plain-wordmark"})},{text:"Postgres DB at GE",icon:i.a.createElement("i",{className:"devicon-postgresql-plain-wordmark"})},{text:"Oracle DB at GE",icon:i.a.createElement("i",{className:"devicon-oracle-original"})},{text:"MySQL at Montclair",icon:i.a.createElement("i",{className:"devicon-mysql-plain-wordmark"})},{text:"Use Git as Source Control for every project",icon:i.a.createElement("i",{className:"devicon-git-plain"})},{text:"Built chat bots for charity events",icon:i.a.createElement("i",{className:"devicon-python-plain"})}]},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"skills col-lg-12 no-padding"},i.a.createElement("div",{className:"col-lg-12 no-padding black-bg"},i.a.createElement("div",{className:"col-lg-9 no-padding"},i.a.createElement("h2",{className:"header no-margin"},"Skills"))),i.a.createElement("div",{className:"skills-body"},this.state.skillObjArray.map((function(e,t){return i.a.createElement("div",{className:"skill row no-margin",key:t},i.a.createElement("div",{className:"col-lg-3 no-padding"},i.a.createElement(l.default,{devicon:e.icon})),i.a.createElement("div",{className:"col-lg-9 no-padding"},i.a.createElement(u.default,{text:e.text})))}))))}}]),n}(c.Component);t.default=m},158:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(83),o=n(152),s=Object(a.c)({playerReducer:r.default,projectReducer:o.default});t.default=s},159:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return r})),n.d(t,"unregister",(function(){return s}));var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("/Personal-Website-2.0",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Personal-Website-2.0","/service-worker.js");a?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function s(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},160:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(351),o=n(158),s=("object"===typeof window&&window.__REDUX__DEVTOOLS__EXTENTION__COMPOSE__?window.__REDUX__DEVTOOLS__EXTENTION__COMPOSE__({}):a.d)(Object(a.a)(r.a)),c=Object(a.e)(o.default,s);t.default=c},169:function(e,t,n){e.exports=n.p+"static/media/Logo.e1139216.png"},170:function(e,t,n){e.exports=n.p+"static/media/Hamburger_icon.86595150.svg"},171:function(e,t,n){e.exports=n.p+"static/media/shrek.dc2853f6.PNG"},193:function(e,t,n){"use strict";n.r(t),n.d(t,"DragDrop",(function(){return u}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(168),u=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).names=function(){var e=[{id:1,name:"venusaur"},{id:2,name:"charizard"},{id:3,name:"blastoise"}];return r.setState({namesList:e}),e},r.state={namesList:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.names()}},{key:"render",value:function(){var e=this;return console.log(this.state.namesList),i.a.createElement(l.a,null,i.a.createElement(l.c,{droppableId:"characters"},(function(t){return i.a.createElement("ul",Object.assign({className:"characters"},t.droppableProps,{ref:t.innerRef}),e.state.namesList.map((function(e,t){return i.a.createElement(l.b,{key:e.id,draggableId:e.id&&e.id.toString(),index:t},(function(t){return i.a.createElement("li",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),e.name)}))})))})))}}]),n}(c.Component);t.default=u},194:function(e,t,n){"use strict";n.r(t),n.d(t,"PieChart",(function(){return u}));var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(346),u=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={chartData:{}},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({chartData:{labels:["Boston","Worcester","Springfield","Lowell","Cambridge","New Bedford"],datasets:[{label:"population",data:["1234","5678","9012","3456","7890","1235"],backgroundColor:["rgba(9, 154, 96, 1)","rgba(9, 111, 154, 1)","rgba(26, 9, 154, 1)","rgba(154, 9, 152, 1)","rgba(154, 9, 45, 1)","rgba(174, 144, 10, 1)"]}]}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(l.Pie,{data:this.state.chartData}))}}]),n}(c.Component);t.default=u},203:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),o=n(9),s=n(8),c=n(0),i=n.n(c),l=n(349),u=n.n(l),m={id:1,filename:"All Categories",children:[{id:2,filename:"For Sale",children:[{id:3,filename:"Audio & Stereo",children:[{id:4,filename:"For Sale",children:[{id:5,filename:"Audio & Stereo"},{id:6,filename:"Baby & Kids Stuff"},{id:7,filename:"Music, Films, Books & Games"}]},{id:8,filename:"Motors",children:[{id:9,filename:"Car Parts & Accessories"},{id:10,filename:"Cars"},{id:11,filename:"Motorbike Parts & Accessories"}]},{id:12,filename:"Jobs",children:[{id:13,filename:"Accountancy"},{id:14,filename:"Financial Services & Insurance"},{id:15,filename:"Bar Staff & Management"}]}]},{id:16,filename:"Baby & Kids Stuff"},{id:17,filename:"Music, Films, Books & Games"}]},{id:18,filename:"Motors",children:[{id:19,filename:"Car Parts & Accessories"},{id:20,filename:"Cars"},{id:21,filename:"Motorbike Parts & Accessories"}]},{id:22,filename:"Jobs",children:[{id:23,filename:"Accountancy"},{id:24,filename:"Financial Services & Insurance"},{id:25,filename:"Bar Staff & Management"}]}]},d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,{data:m}))}}]),n}(c.Component);t.default=d},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){e.exports=n.p+"static/media/DKWallpaper.f8f0ff60.jpg"},227:function(e,t,n){e.exports=n.p+"static/media/Guzma - Pokemon.281a4fb2.PNG"},228:function(e,t,n){e.exports=n.p+"static/media/Pallet - Pokemon.66f75e5f.PNG"},229:function(e,t,n){e.exports=n.p+"static/media/Zinnia - Pokemon.facbbfd1.PNG"},230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(340),s=n(81);test("renders learn react link",(function(){var e=(0,Object(o.a)(r.a.createElement(s.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},29:function(e,t,n){"use strict";n.r(t),n.d(t,"SET_CURRENT_SONG",(function(){return a})),n.d(t,"TOGGLE_RANDOM",(function(){return r})),n.d(t,"TOGGLE_REPEAT",(function(){return o})),n.d(t,"TOGGLE_PLAYING",(function(){return s}));var a="SET_CURRENT_SONG",r="TOGGLE_RANDOM",o="TOGGLE_OPTIONS",s="TOGGLE_PLAYING"},308:function(e,t,n){},309:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t),n.d(t,"Frameworks",(function(){return o}));var a=n(0),r=n.n(a),o=function(){return r.a.createElement("div",{className:"icons frameworks row no-margin"},r.a.createElement("div",{className:"framework-title col-lg-2 no-padding"},r.a.createElement("h4",{className:"category"},"Frameworks")),r.a.createElement("div",{className:"framework-title col-lg-2"},r.a.createElement("i",{className:"devicon-angularjs-plain"}),r.a.createElement("i",{className:"devicon-react-original-wordmark"})),r.a.createElement("div",{className:"icons frameworks col-lg-9"}))};t.default=o},319:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.createContext)();t.default=r},320:function(e,t,n){"use strict";n.r(t),n.d(t,"UNDER_CONSTRUCTION",(function(){return a}));var a="Under construction..."},321:function(e,t,n){"use strict";n.r(t);var a=n(103),r=n.n(a).a.create({baseURL:"http://localhost:8084/"});t.default=r},322:function(e,t,n){"use strict";n.r(t);n(805)},356:function(e,t,n){e.exports=n(106)},364:function(e,t,n){var a={"./DKWallpaper.jpg":226,"./Guzma - Pokemon.PNG":227,"./Hamburger_icon.svg":170,"./Logo.png":169,"./Pallet - Pokemon.PNG":228,"./Zinnia - Pokemon.PNG":229,"./josephganning_resume.pdf":142,"./shrek.PNG":171};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=364},365:function(e,t,n){var a={"./":106,"./App":81,"./App.css":219,"./App.js":81,"./App.test":230,"./App.test.js":230,"./Components/About/About":138,"./Components/About/About-Constants":86,"./Components/About/About-Constants.js":86,"./Components/About/About.js":138,"./Components/Experiments/DragDrop/DragDrop":193,"./Components/Experiments/DragDrop/DragDrop.js":193,"./Components/Experiments/Experiments":146,"./Components/Experiments/Experiments.js":146,"./Components/Experiments/ExperimentsDescription/ExperimentsDescription":147,"./Components/Experiments/ExperimentsDescription/ExperimentsDescription.js":147,"./Components/Experiments/PieChart/PieChart":194,"./Components/Experiments/PieChart/PieChart.js":194,"./Components/Experiments/Trees/CheckboxFolders":149,"./Components/Experiments/Trees/CheckboxFolders.js":149,"./Components/Experiments/Trees/FileTree":203,"./Components/Experiments/Trees/FileTree.js":203,"./Components/Experiments/Trees/Hierarchy":148,"./Components/Experiments/Trees/Hierarchy.js":148,"./Components/Home/Home":137,"./Components/Home/Home.css":225,"./Components/Home/Home.js":137,"./Components/MusicLounge/Controls":145,"./Components/MusicLounge/Controls.js":145,"./Components/MusicLounge/Graphics/Graphics":141,"./Components/MusicLounge/Graphics/Graphics.js":141,"./Components/MusicLounge/Graphics/Header":140,"./Components/MusicLounge/Graphics/Header.js":140,"./Components/MusicLounge/MusicLounge":139,"./Components/MusicLounge/MusicLounge.js":139,"./Components/MusicLounge/MusicLounge_State_MGMT/player-types":29,"./Components/MusicLounge/MusicLounge_State_MGMT/player-types.js":29,"./Components/MusicLounge/MusicLounge_State_MGMT/playerContext":32,"./Components/MusicLounge/MusicLounge_State_MGMT/playerContext.js":32,"./Components/MusicLounge/MusicLounge_State_MGMT/playerReducer":83,"./Components/MusicLounge/MusicLounge_State_MGMT/playerReducer.js":83,"./Components/MusicLounge/MusicLounge_State_MGMT/playerState":150,"./Components/MusicLounge/MusicLounge_State_MGMT/playerState.js":150,"./Components/MusicLounge/MusicLounge_State_MGMT/songs":82,"./Components/MusicLounge/MusicLounge_State_MGMT/songs.js":82,"./Components/MusicLounge/Playlist/Actions":143,"./Components/MusicLounge/Playlist/Actions.js":143,"./Components/MusicLounge/Playlist/Playlist":144,"./Components/MusicLounge/Playlist/Playlist.js":144,"./Components/Nav/Contact/Contact":134,"./Components/Nav/Contact/Contact.css":223,"./Components/Nav/Contact/Contact.js":134,"./Components/Nav/Icon/Icon":132,"./Components/Nav/Icon/Icon.css":220,"./Components/Nav/Icon/Icon.js":132,"./Components/Nav/MediaLinks/MediaLinks":135,"./Components/Nav/MediaLinks/MediaLinks.css":224,"./Components/Nav/MediaLinks/MediaLinks.js":135,"./Components/Nav/NavComponent":131,"./Components/Nav/NavComponent.js":131,"./Components/Nav/Tabs/Tabs":133,"./Components/Nav/Tabs/Tabs.js":133,"./Components/Projects/ProjectDescription/ProjectDescription":101,"./Components/Projects/ProjectDescription/ProjectDescription.js":101,"./Components/Projects/ProjectName/ProjectName":102,"./Components/Projects/ProjectName/ProjectName.js":102,"./Components/Projects/Project_State_MGMT/Project-ActionCreator":151,"./Components/Projects/Project_State_MGMT/Project-ActionCreator.js":151,"./Components/Projects/Project_State_MGMT/Project-ActionTypes":85,"./Components/Projects/Project_State_MGMT/Project-ActionTypes.js":85,"./Components/Projects/Project_State_MGMT/Project-Reducer":152,"./Components/Projects/Project_State_MGMT/Project-Reducer.js":152,"./Components/Projects/Projects":153,"./Components/Projects/Projects.css":308,"./Components/Projects/Projects.js":153,"./Components/Resume/Resume":154,"./Components/Resume/Resume.css":309,"./Components/Resume/Resume.js":154,"./Components/Skills/Descriptions/Descriptions":155,"./Components/Skills/Descriptions/Descriptions.js":155,"./Components/Skills/Devicons/Devicons":156,"./Components/Skills/Devicons/Devicons.js":156,"./Components/Skills/Frameworks/Frameworks":318,"./Components/Skills/Frameworks/Frameworks.js":318,"./Components/Skills/Skills":157,"./Components/Skills/Skills.css":319,"./Components/Skills/Skills.js":157,"./Constants/Generic_Constants":320,"./Constants/Generic_Constants.js":320,"./assets/img/DKWallpaper.jpg":226,"./assets/img/Guzma - Pokemon.PNG":227,"./assets/img/Hamburger_icon.svg":170,"./assets/img/Logo.png":169,"./assets/img/Pallet - Pokemon.PNG":228,"./assets/img/Zinnia - Pokemon.PNG":229,"./assets/img/josephganning_resume.pdf":142,"./assets/img/shrek.PNG":171,"./assets/music/Bensound - Hey.mp3":797,"./assets/music/Bensound - Sunny.mp3":798,"./assets/music/Castle of Glass - Linkin Park.mp3":799,"./assets/music/Famous for Nothing - Dropkick Murphys.mp3":800,"./assets/music/Guzma - Pokemon.mp3":801,"./assets/music/Pallet - Pokemon.mp3":802,"./assets/music/Zinnia - Pokemon.mp3":803,"./axios-base":321,"./axios-base.js":321,"./index":106,"./index.css":218,"./index.js":106,"./logo.svg":804,"./rootReducers":158,"./rootReducers.js":158,"./routes":136,"./routes.js":136,"./serviceWorker":159,"./serviceWorker.js":159,"./setupTests":322,"./setupTests.js":322,"./store":160,"./store.js":160};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=365},763:function(e,t){},765:function(e,t){},766:function(e,t){},767:function(e,t){},768:function(e,t){},797:function(e,t,n){e.exports=n.p+"static/media/Bensound - Hey.21f4f5d2.mp3"},798:function(e,t,n){e.exports=n.p+"static/media/Bensound - Sunny.15e0ab24.mp3"},799:function(e,t,n){e.exports=n.p+"static/media/Castle of Glass - Linkin Park.c3fe3f45.mp3"},800:function(e,t,n){e.exports=n.p+"static/media/Famous for Nothing - Dropkick Murphys.5d30b1be.mp3"},801:function(e,t,n){e.exports=n.p+"static/media/Guzma - Pokemon.27dd1934.mp3"},802:function(e,t,n){e.exports=n.p+"static/media/Pallet - Pokemon.ea1ca771.mp3"},803:function(e,t,n){e.exports=n.p+"static/media/Zinnia - Pokemon.8da7ae63.mp3"},804:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(219),n(48)),s=n(131),c=n(136);n(876);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row no-margin no-padding"},r.a.createElement("div",{className:"col-lg-2 no-padding"},r.a.createElement(s.default,null)),r.a.createElement("div",{className:"main col-lg-10 no-padding"},r.a.createElement(c.default,null))))))}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"songsArr",(function(){return a})),n.d(t,"songs",(function(){return r}));var a=[{title:"Zinnia - Pokemon",artist:"Pokemon",album:"Zinnia - Pokemon.PNG",song:"assets/music/Zinnia - Pokemon.mp3"},{title:"Guzma - Pokemon",artist:"Pokemon",album:"Guzma - Pokemon.PNG",song:"assets/music/Guzma - Pokemon.mp3"},{title:"Pallet - Pokemon",artist:"Pokemon",album:"Pallet - Pokemon.PNG",song:"assets/music/Pallet - Pokemon.mp3"},{title:"Famous for Nothing - Dropkick Murphys",artist:"Dropkick Murphys",album:"DKWallpaper.jpg",song:"assets/music/Famous for Nothing - Dropkick Murphys.mp3"}],r=[{title:"Zinnia - Pokemon",artist:"Pokemon",album:"Zinnia - Pokemon.PNG",song:"assets/music/Zinnia - Pokemon.mp3"}]},83:function(e,t,n){"use strict";n.r(t);var a=n(34),r=n(29),o={};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_CURRENT_SONG:return Object(a.a)(Object(a.a)({},e),{},{currentSong:t.data,playing:!0});case r.TOGGLE_RANDOM:return Object(a.a)(Object(a.a)({},e),{},{random:t.data});case r.TOGGLE_REPEAT:return Object(a.a)(Object(a.a)({},e),{},{repeat:t.data});case r.TOGGLE_PLAYING:return Object(a.a)(Object(a.a)({},e),{},{playing:t.data});default:return e}}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"GET_PROJECTS",(function(){return a}));var a="GET_PROJECTS"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"p1",(function(){return a})),n.d(t,"p2",(function(){return r})),n.d(t,"p3",(function(){return o}));var a="My name is Joseph Ganning and I am a full-time software developer, currently living in Schenectady, New York. I have three years of experience building complex, web-based applications and leading development teams. I joined TATA Consultancy Service in 2018 as a software developer. Prior to my current position at Wells Fargo, I was at General Electric. I helped the company build web apps, widgets, lead development teams, and structured the foundations of internal applications.",r="I am a graduate of Montclair State University, where I majored in computer science. During college, I pursued software development because I enjoy problem solving and critical thinking. I believe that this field is full of the possibilities for technological innovation, the development of individual and collective ideas, and the realization of dreams.",o="I grew up in Morristown, New Jersey surrounded by endless running trails and the outdoors. When I am not busy annoying my neighbors with my guitar-strumming, you can find me stuffing popcorn down my face, chugging beer, collecting Yu-Gi-Oh cards, training Pokemon, and exercising."}},[[356,1,2]]]);
//# sourceMappingURL=main.4578fd53.chunk.js.map