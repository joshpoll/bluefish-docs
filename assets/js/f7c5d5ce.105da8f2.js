"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9426],{6437:(e,t,r)=>{r.d(t,{p:()=>a});var n=r(6319),i=r(7294),l=r(3215);const o=e=>{const{sandpack:t}=(0,n.X3)();return(0,i.useEffect)((()=>{e.onCodeChange&&e.onCodeChange(t.files["/App.js"].code)}),[t.files["/App.js"].code]),i.createElement("div",null,e.flip?i.createElement(i.Fragment,null,e.hideCode?null:i.createElement(n._V,null),i.createElement(n.Gj,{style:{height:300}})):i.createElement(i.Fragment,null,i.createElement(n.Gj,{style:{height:300}}),e.hideCode?null:i.createElement(n._V,null)))},a=e=>i.createElement(n.oT,{dependencies:{"@bluefish-js/solid":"latest","babel-preset-solid":"latest","solid-js":"latest"},devDependencies:{"@babel/core":"7.2.0","parcel-bundler":"^1.6.1"},environment:"parcel",options:{visibleFiles:["/App.js"],activeFile:"/App.js"},files:{"/App.js":e.code,"/index.js":l.Ks,"/index.html":l.Ck,"/package.json":{code:JSON.stringify({name:"solid-hello-world",version:"1.0.0",description:"",main:"index.html",scripts:{start:"parcel index.html --open",build:"parcel build index.html"},dependencies:{"@bluefish-js/solid":"latest","babel-preset-solid":"latest","solid-js":"latest"},devDependencies:{"@babel/core":"7.2.0","parcel-bundler":"^1.6.1"},keywords:[]})},"/.babelrc":{code:JSON.stringify({presets:["babel-preset-solid"]})}}},i.createElement(o,e))},3215:(e,t,r)=>{r.d(t,{Ck:()=>l,Ks:()=>i,nf:()=>n});const n='import { Bluefish, Group, Row, Circle,\n  Text, Ref, Background, Arrow,\n  Align, Distribute } from "@bluefish-js/solid";\n\nconst App = () => {\n  return (\n    <Bluefish id="bluefish-planets" padding={20}>\n      <Group x={10} y={10}>\n        <Text>TODO: Starting writing your code here!</Text>\n      </Group>\n    </Bluefish>\n  );\n};\n\nexport default App;\n',i='import { render } from "solid-js/web";\nimport App from "./App";\n\nrender(App, document.getElementById("app"));',l='<!DOCTYPE html>\n<html>\n\n<head>\n\t<title>Solid Demo</title>\n\t<meta charset="UTF-8" />\n</head>\n\n<body>\n\t<div id="app"></div>\n\n\t<script src="index.js">\n\t<\/script>\n</body>\n\n</html>'},1749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>R,contentTitle:()=>B,default:()=>P,frontMatter:()=>I,metadata:()=>O,toc:()=>M});var n=r(7462),i=r(7294),l=r(3905),o=(r(6319),r(4621)),a=r(6437);r(4866),r(5162);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,l=[],o=!0,a=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e){return"string"==typeof e&&e.includes("px")},h={position:"fixed",left:0,width:"100%",height:0,borderTop:"2px dashed black",zIndex:9999},m={fontSize:"12px",fontFamily:"monospace",margin:0,padding:6},g=function(e){var t=e.offset,r=function(e){return p(e)?e:"".concat(100*e,"%")}(t);return i.createElement("div",{style:c(c({},h),{},{top:r})},i.createElement("p",{style:m},"trigger: ",t))},b=function(e){var t=e.debug,r=e.children,n=e.offset,l=void 0===n?.3:n,o=e.onStepEnter,a=void 0===o?function(){}:o,s=e.onStepExit,c=void 0===s?function(){}:s,d=e.onStepProgress,f=void 0===d?null:d,h=e.threshold,m=void 0===h?4:h,b=p(l),x=u((0,i.useState)(0),2),y=x[0],v=x[1],k=u((0,i.useState)(null),2),w=k[0],E=k[1],S=function(e){v(e)},C=function(e){E(window.innerHeight)};i.useEffect((function(){if(b)return window.addEventListener("resize",C),function(){window.removeEventListener("resize",C)}}),[]);var A="undefined"!=typeof window?w||window.innerHeight:0,T=b?+l.replace("px","")/A:l,j=(0,i.useMemo)((function(){return function(e,t){for(var r=Math.ceil(t/e),n=[],i=1/r,l=0;l<=r;l+=1)n.push(l*i);return n}(m,A)}),[A]);return i.createElement(i.Fragment,null,t&&i.createElement(g,{offset:l}),i.Children.map(r,(function(e,t){return i.cloneElement(e,{scrollamaId:"react-scrollama-".concat(t),offset:T,onStepEnter:a,onStepExit:c,onStepProgress:f,lastScrollTop:y,handleSetLastScrollTop:S,progressThreshold:j,innerHeight:A})})))};const x=new Map,y=new WeakMap;let v,k=0;function w(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(y.has(r)||(k+=1,y.set(r,k.toString())),y.get(r)):"0"):e[t]}`;var r})).toString()}function E(e,t,r={},n=v){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:l,elements:o}=function(e){let t=w(e),r=x.get(t);if(!r){const n=new Map;let i;const l=new IntersectionObserver((t=>{t.forEach((t=>{var r;const l=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(r=n.get(t.target))||r.forEach((e=>{e(l,t)}))}))}),e);i=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:l,elements:n},x.set(t,r)}return r}(r);let a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),l.unobserve(e)),0===o.size&&(l.disconnect(),x.delete(i))}}function S({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:l,triggerOnce:o,skip:a,initialInView:s,fallbackInView:c,onChange:d}={}){const u=i.useRef(),f=i.useRef(),[p,h]=i.useState({inView:!!s});f.current=d;const m=i.useCallback((i=>{void 0!==u.current&&(u.current(),u.current=void 0),a||i&&(u.current=E(i,((e,t)=>{h({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&o&&u.current&&(u.current(),u.current=void 0)}),{root:l,rootMargin:n,threshold:e,trackVisibility:r,delay:t},c))}),[Array.isArray(e)?e.toString():e,l,n,o,a,r,c,t]);i.useEffect((()=>{u.current||!p.entry||o||a||h({inView:!!s})}));const g=[m,p.inView,p.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var C=function(e){var t=e.children,r=e.data,n=e.handleSetLastScrollTop,l=e.lastScrollTop,o=e.onStepEnter,a=void 0===o?function(){}:o,s=e.onStepExit,c=void 0===s?function(){}:s,d=e.onStepProgress,f=void 0===d?null:d,p=e.offset,h=e.scrollamaId,m=e.progressThreshold,g=e.innerHeight,b="undefined"!=typeof window?document.documentElement.scrollTop:0,x=l<b?"down":"up",y=function(e){return"-".concat(100*e,"% 0px -").concat(100-100*e,"% 0px")}(p),v=(0,i.useRef)(null),k=u((0,i.useState)(!1),2),w=k[0],E=k[1],C=S({rootMargin:y,threshold:0}),A=C.ref,T=C.entry,j=S({rootMargin:(0,i.useMemo)((function(){return function(e,t,r,n){if(!r.current)return"0px";var i=r.current.offsetHeight/n;return"down"===e?"".concat(100*(i-t),"% 0px ").concat(100*t-100,"% 0px"):"-".concat(100*t,"% 0px ").concat(100*i-(100-100*t),"% 0px")}(x,p,v,g)}),[x,p,v,g]),threshold:m}),I=j.ref,B=j.entry,O=(0,i.useCallback)((function(e){v.current=e,A(e),I(e)}),[A,I]);return i.useEffect((function(){if(w){var e=B.target.getBoundingClientRect(),t=e.height,n=e.top,i=Math.min(1,Math.max(0,(window.innerHeight*p-n)/t));f&&f({progress:i,scrollamaId:h,data:r,element:B.target,entry:B,direction:x})}}),[B]),i.useEffect((function(){T&&!T.isIntersecting&&w?(c({element:T.target,scrollamaId:h,data:r,entry:T,direction:x}),E(!1),n(b)):T&&T.isIntersecting&&!w&&(E(!0),a({element:T.target,scrollamaId:h,data:r,entry:T,direction:x}),n(b))}),[T]),i.cloneElement(i.Children.only(t),{"data-react-scrollama-id":h,ref:O,entry:T})},A=r(3215);const T=e=>{let{children:t}=e;const[r,n]=(0,i.useState)(0),[l,o]=(0,i.useState)(A.nf);return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"50% 50%",marginTop:"10vh"}},i.createElement("div",null,i.createElement(b,{offset:.3,onStepEnter:e=>{let{data:t}=e;n(t)}},i.Children.map(t,((e,t)=>i.createElement(C,{data:t,key:t},i.createElement("div",{style:{marginTop:0===t?"10vh":"0",marginBottom:"20vh",opacity:r===t?1:.2}},e)))))),i.createElement("div",{style:{position:"sticky",top:"7vh",height:"100vh"}},i.createElement(a.p,{code:l,onCodeChange:e=>{o(e)},flip:!0})))},j=e=>{let{children:t}=e;return i.createElement(i.Fragment,null,t)},I={sidebar_position:2,hide_table_of_contents:!0},B="Learn Bluefish",O={unversionedId:"get-started/learn",id:"get-started/learn",title:"Learn Bluefish",description:"<div",source:"@site/docs/get-started/learn.mdx",sourceDirName:"get-started",slug:"/get-started/learn",permalink:"/docs/get-started/learn",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/get-started/learn.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Run Bluefish",permalink:"/docs/get-started/run"},next:{title:"What Is Bluefish?",permalink:"/docs/what-is-bluefish"}},R={},M=[{value:"1. Make a Circle",id:"1-make-a-circle",level:2},{value:"2. Put Circles in a Row",id:"2-put-circles-in-a-row",level:2},{value:"3. Name Mercury",id:"3-name-mercury",level:2},{value:"4. Add a Label",id:"4-add-a-label",level:2},{value:"5. Add a Background",id:"5-add-a-background",level:2},{value:"6. Add an Arrow",id:"6-add-an-arrow",level:2}],D={toc:M};function P(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"learn-bluefish"},"Learn Bluefish"),(0,l.kt)("div",{style:{display:"grid",gridTemplateColumns:"50% 50%",marginBottom:"10vh"}},(0,l.kt)("div",null,"In this short tutorial, you'll learn how to use Bluefish to make the planets diagram!",(0,l.kt)("p",null,"The planets diagram consists of a row of four circles that represent the first four terrestrial\nplanets. There is box behind them and a label for Mercury. There is also an arrow pointing from the\nlabel to Mercury.")),(0,l.kt)("div",null,(0,l.kt)(a.p,{code:o.Z,hideCode:!0,mdxType:"CodeEditor"}))),(0,l.kt)("hr",null),(0,l.kt)(T,{mdxType:"Scrolly"},(0,l.kt)(j,{mdxType:"Step"},(0,l.kt)("h2",{id:"1-make-a-circle"},"1. Make a Circle"),(0,l.kt)("p",null,"It's time to add your first Bluefish component!\nThe first thing we'll do is draw the planet Mercury.\nReplace the ",(0,l.kt)("inlineCode",{parentName:"p"},"Text")," component in the editor with the code below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Circle cx={20} cy={30} r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />\n'))),(0,l.kt)(j,{mdxType:"Step"},(0,l.kt)("h2",{id:"2-put-circles-in-a-row"},"2. Put Circles in a Row"),(0,l.kt)("p",null,"filler text filler text filler text filler text\nfiller text filler text filler text filler text\nfiller text filler text filler text filler text")),(0,l.kt)(j,{mdxType:"Step"},(0,l.kt)("h2",{id:"3-name-mercury"},"3. Name Mercury"),(0,l.kt)("p",null,"filler text filler text filler text filler text\nfiller text filler text filler text filler text\nfiller text filler text filler text filler text")),(0,l.kt)(j,{mdxType:"Step"},(0,l.kt)("h2",{id:"4-add-a-label"},"4. Add a Label"),(0,l.kt)("p",null,"filler text filler text filler text filler text\nfiller text filler text filler text filler text\nfiller text filler text filler text filler text")),(0,l.kt)(j,{mdxType:"Step"},(0,l.kt)("h2",{id:"5-add-a-background"},"5. Add a Background"),(0,l.kt)("p",null,"filler text filler text filler text filler text\nfiller text filler text filler text filler text\nfiller text filler text filler text filler text")),(0,l.kt)(j,{mdxType:"Step"},(0,l.kt)("h2",{id:"6-add-an-arrow"},"6. Add an Arrow"),(0,l.kt)("p",null,"filler text filler text filler text filler text\nfiller text filler text filler text filler text\nfiller text filler text filler text filler text"))))}P.isMDXComponent=!0},4621:(e,t,r)=>{r.d(t,{Z:()=>n});const n='import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Align, Distribute } from "@bluefish-js/solid";\n\nconst App = () => {\n  return (\n    <Bluefish id="bluefish-planets" padding={20}>\n      {/* Bluefish is a diagramming library for SolidJS */}\n      <Group x={10} y={10}>\n        {/* You can specify UI-like components such as Row */}\n        <Row x={0} y={0} spacing={50}>\n          <Circle id="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />\n          <Circle id="venus" r={36} fill="#DC933C" stroke-width={3} stroke="black" />\n          <Circle id="earth" r={38} fill="#179DD7" stroke-width={3} stroke="black" />\n          <Circle id="mars" r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />\n        </Row>\n        {/* But you can also use *relations* like Align and Distribute */}\n        <Align alignment="centerX">\n          <Text id="label" vertical-anchor="start" width={500}>\n            Mercury\n          </Text>\n          {/* Bluefish lets you refer to previous components using a special `Ref` component. */}\n          <Ref refId="mercury" />\n        </Align>\n        <Distribute direction="vertical" spacing={60}>\n          <Ref refId="label" />\n          <Ref refId="mercury" />\n        </Distribute>\n        {/* In addition to performing layout, Bluefish relations can also draw objects. */}\n        <Background id="background">\n          <Ref refId="mercury" />\n          <Ref refId="venus" />\n          <Ref refId="earth" />\n          <Ref refId="mars" />\n        </Background>\n        <Arrow id="arrow">\n          <Ref refId="label" />\n          <Ref refId="mercury" />\n        </Arrow>\n      </Group>\n    </Bluefish>\n  );\n};\n\nexport default App;\n'}}]);