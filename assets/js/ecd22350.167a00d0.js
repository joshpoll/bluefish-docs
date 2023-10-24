"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4341],{9715:(e,n,t)=>{t.d(n,{p:()=>o});var a=t(6319),l=t(7294);const i=e=>{const{sandpack:n}=(0,a.X3)();return(0,l.useEffect)((()=>{e.onCodeChange&&e.onCodeChange(n.files["/App.js"].code)}),[n.files["/App.js"].code]),l.createElement("div",null,e.flip?l.createElement(l.Fragment,null,e.hideCode?null:l.createElement(a._V,null),l.createElement(a.Gj,{style:{height:300,width:500}})):l.createElement(l.Fragment,null,l.createElement(a.Gj,{style:{height:210,width:445}}),e.hideCode?null:l.createElement(a._V,null)))},o=e=>l.createElement(a.oT,{dependencies:{"@bluefish-js/solid":"latest","babel-preset-solid":"latest","solid-js":"latest"},devDependencies:{"@babel/core":"7.2.0","parcel-bundler":"^1.6.1"},environment:"parcel",options:{visibleFiles:["/App.js"],activeFile:"/App.js"},files:{"/App.js":e.code,"/index.js":'import { render } from "solid-js/web";\nimport App from "./App";\n\nrender(App, document.getElementById("app"));',"/index.html":'<!DOCTYPE html>\n<html>\n\n<head>\n\t<title>Solid Demo</title>\n\t<meta charset="UTF-8" />\n</head>\n\n<body>\n\t<div id="app"></div>\n\n\t<script src="index.js">\n\t<\/script>\n</body>\n\n</html>',"/package.json":{code:JSON.stringify({name:"solid-hello-world",version:"1.0.0",description:"",main:"index.html",scripts:{start:"parcel index.html --open",build:"parcel build index.html"},dependencies:{"@bluefish-js/solid":"latest","babel-preset-solid":"latest","solid-js":"latest"},devDependencies:{"@babel/core":"7.2.0","parcel-bundler":"^1.6.1"},keywords:[]})},"/.babelrc":{code:JSON.stringify({presets:["babel-preset-solid"]})}}},l.createElement(i,e))},6084:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),l=t(897),i=t(9715);const o=(0,a.memo)(i.p),r=e=>{let{starterCode:n,children:t}=e;const[i,r]=(0,a.useState)(n),[s,d]=(0,a.useState)(0),p=a.Children.map(t,((e,n)=>a.isValidElement(e)?a.cloneElement(e,{setCode:r}):e));return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"50% 50%",marginTop:"10vh"}},a.createElement("div",null,a.createElement(l.k,{offset:.3,onStepEnter:e=>{let{data:n}=e;d(n)}},a.Children.map(p,((e,n)=>a.createElement(l.h,{data:n,key:n},a.createElement("div",{style:{marginTop:0===n?"10vh":"0",marginBottom:"20vh",opacity:s===n?1:.2}},e)))))),a.createElement("div",{style:{position:"sticky",top:"7vh",height:"100vh"}},a.createElement(o,{code:i,flip:!0})))}},9033:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);const l=e=>{let{children:n,showMe:t,setCode:l}=e;return a.createElement(a.Fragment,null,n,t?a.createElement("button",{className:"button button--secondary button--md",onClick:()=>{l&&l(t)}},"Show Me"):null)}},5979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=t(7462),l=(t(7294),t(3905));t(6319);const i='import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Col, Align, Distribute } from "@bluefish-js/solid";\nimport { For, Switch, Match } from "solid-js";\nconst planets = [{ name: "Mercury", radius: 15, color: "#EBE3CF" }, { name: "Venus", radius: 36, color: "#DC933C" }, { name: "Earth", radius: 38, color: "#179DD7" }, { name: "Mars", radius: 21, color: "#F1CF8E" }];\n\nexport default () => (\n  <Bluefish>\n    <Row id="planets" spacing={50}>\n      <For each={planets}>{(planet) => <Circle id={planet.name} r={planet.radius} fill={planet.color} />}</For>\n    </Row>\n    <For each={planets}>\n      {(planet, index) => (\n        <>\n          <Align alignment="centerX">\n            <Text id={`label-${index()}`}>{planet.name}</Text>\n            <Ref refId={planet.name} />\n          </Align>\n          <Distribute direction="vertical" spacing={60}>\n            <Ref refId={`label-${index()}`} />\n            <Ref refId={planet.name} />\n          </Distribute>\n          <Arrow>\n            <Ref refId={`label-${index()}`} />\n            <Ref refId={planet.name} />\n          </Arrow>\n        </>\n      )}\n    </For>\n  </Bluefish>\n);\n';var o=t(9715),r=(t(4866),t(5162),t(6084)),s=t(9033);const d={sidebar_position:3,hide_table_of_contents:!0},p="Intermediate Bluefish",c={unversionedId:"get-started/intermediate",id:"get-started/intermediate",title:"Intermediate Bluefish",description:"<div",source:"@site/docs/get-started/intermediate.mdx",sourceDirName:"get-started",slug:"/get-started/intermediate",permalink:"/docs/get-started/intermediate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/get-started/intermediate.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0},sidebar:"getStarted",previous:{title:"Learn Bluefish",permalink:"/docs/get-started/learn"}},m={},h=[{value:"1. For Loops",id:"1-for-loops",level:2},{value:"2. Modifying Properties in a Loop",id:"2-modifying-properties-in-a-loop",level:3},{value:"3. Annotate Each Planet",id:"3-annotate-each-planet",level:2},{value:"4. Use <code>index</code> to make unique labels.",id:"4-use-index-to-make-unique-labels",level:2},{value:"5. Align the Labels",id:"5-align-the-labels",level:2},{value:"6. Conditionals with <code>Switch</code> and <code>Match</code>",id:"6-conditionals-with-switch-and-match",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:h};function f(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"intermediate-bluefish"},"Intermediate Bluefish"),(0,l.kt)("div",{style:{display:"grid",gridTemplateColumns:"50% 50%",marginBottom:"10vh"}},(0,l.kt)("div",null,"In this tutorial, we cover how to use conditionals and loops with Bluefish as well as how to make more advanced layouts.",(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The tutorial assumes you've completed the ",(0,l.kt)("a",{parentName:"p",href:"/docs/get-started/learn"},"Learn Bluefish")," tutorial."))),(0,l.kt)("div",null,(0,l.kt)(o.p,{code:i,hideCode:!0,mdxType:"CodeEditor"}),(0,l.kt)(o.p,{code:'import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Col, Align, Distribute } from "@bluefish-js/solid";\nimport { For, Switch, Match } from "solid-js";\nconst planets = [\n  { name: "Mercury", radius: 15, color: "#EBE3CF" },\n  { name: "Venus", radius: 36, color: "#DC933C" },\n  { name: "Earth", radius: 38, color: "#179DD7" },\n  { name: "Mars", radius: 21, color: "#F1CF8E" },\n];\n\nexport default () => (\n  <Bluefish>\n    <Row id="planets" spacing={50}>\n      <For each={planets}>{(planet) => <Circle id={planet.name} r={planet.radius} fill={planet.color} />}</For>\n    </Row>\n    <Align id="labels" alignment="centerY">\n      <For each={planets}>{(planet, index) => <Text id={`label-${index()}`}>{planet.name}</Text>}</For>\n    </Align>\n    <Distribute direction="vertical" spacing={40}>\n      <Ref refId="labels" />\n      <Ref refId="planets" />\n    </Distribute>\n    <For each={planets}>\n      {(planet, index) => (\n        <>\n          <Align alignment="centerX">\n            <Ref refId={`label-${index()}`} />\n            <Ref refId={planet.name} />\n          </Align>\n          <Switch>\n            <Match when={planet.radius > 30}>\n              <Background>\n                <Ref refId={`label-${index()}`} />\n                <Ref refId={planet.name} />\n              </Background>\n            </Match>\n            <Match when={true}>\n              <Arrow>\n                <Ref refId={`label-${index()}`} />\n                <Ref refId={planet.name} />\n              </Arrow>\n            </Match>\n          </Switch>\n        </>\n      )}\n    </For>\n  </Bluefish>\n);\n',hideCode:!0,mdxType:"CodeEditor"}))),(0,l.kt)("hr",null),(0,l.kt)(r.Z,{starterCode:'import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Col, Align, Distribute } from "@bluefish-js/solid";\nimport { For, Switch, Match } from "solid-js";\nconst planets = [{ name: "Mercury", radius: 15, color: "#EBE3CF" }, { name: "Venus", radius: 36, color: "#DC933C" }, { name: "Earth", radius: 38, color: "#179DD7" }, { name: "Mars", radius: 21, color: "#F1CF8E" }];\n\nexport default () => (\n  <Bluefish>\n    <Row id="planets" spacing={50}>\n      {/* Put the For component here! */}\n    </Row>\n  </Bluefish>\n);\n',mdxType:"Scrolly"},(0,l.kt)(s.Z,{mdxType:"Step"},(0,l.kt)("h2",{id:"1-for-loops"},"1. For Loops"),(0,l.kt)("p",null,"For loops in Bluefish are written with the ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," component. The ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," component takes one prop,\n",(0,l.kt)("inlineCode",{parentName:"p"},"each"),", which is an array of items to loop over. It also takes one child, which is a function that\ntakes an item from the array and returns a component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<For each={planets}>\n  {(planet) => <Circle id={planet.name} r={planet.radius} fill={planet.color} stroke-width={3} stroke="black" />}\n</For>\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"For")," works like ",(0,l.kt)("inlineCode",{parentName:"p"},"Array.map"),", but it's reactive. If the array changes, the ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," component will\nupdate only the items that changed."))),(0,l.kt)(s.Z,{mdxType:"Step"},(0,l.kt)("h3",{id:"2-modifying-properties-in-a-loop"},"2. Modifying Properties in a Loop"),(0,l.kt)("p",null,"By using a loop, you can easily change properties of the planets all at once. For example, you can\nremove the border by deleting the ",(0,l.kt)("inlineCode",{parentName:"p"},"stroke-width")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stroke")," props from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Circle")," component."),(0,l.kt)("p",null,"Try using this definition for each planet instead:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<Circle id={planet.name} r={planet.radius} fill={planet.color} />\n"))),(0,l.kt)(s.Z,{mdxType:"Step"},(0,l.kt)("h2",{id:"3-annotate-each-planet"},"3. Annotate Each Planet"),(0,l.kt)("p",null,"In addition to changing properties of each planet, we can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," loops to add annotations to\neach planet. In the previous tutorial, we used this code to add the Mercury label:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Align alignment="centerX">\n  <Text id="label">Mercury</Text>\n  <Ref refId="Mercury" />\n</Align>\n<Distribute direction="vertical" spacing={60}>\n  <Ref refId="label" />\n  <Ref refId="Mercury" />\n</Distribute>\n<Arrow>\n  <Ref refId="label" />\n  <Ref refId="Mercury" />\n</Arrow>\n')),(0,l.kt)("p",null,"Let's try using a ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," loop to repeat this code for each planet. Replace the code above with this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<For each={planets}>\n  {(planet) => (\n    <>\n      <Align alignment="centerX">\n        <Text id="label">{planet.name}</Text>\n        <Ref refId={planet.name} />\n      </Align>\n      <Distribute direction="vertical" spacing={60}>\n        <Ref refId="label" />\n        <Ref refId={planet.name} />\n      </Distribute>\n      <Arrow>\n        <Ref refId="label" />\n        <Ref refId={planet.name} />\n      </Arrow>\n    </>\n  )}\n</For>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Uh oh! Something's not quite right..."))),(0,l.kt)(s.Z,{mdxType:"Step"},(0,l.kt)("h2",{id:"4-use-index-to-make-unique-labels"},"4. Use ",(0,l.kt)("inlineCode",{parentName:"h2"},"index")," to make unique labels."),(0,l.kt)("p",null,'The problem with the code in the previous step is that we\'ve reused the "label" id. We can fix this\nby using the ',(0,l.kt)("inlineCode",{parentName:"p"},"index")," variable that's passed to the function in the ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<For each={planets}>\n  {(planet, index) => (\n    <>\n      <Align alignment="centerX">\n        <Text id={`label-${index()}`}>{planet.name}</Text>\n        <Ref refId={planet.name} />\n      </Align>\n      <Distribute direction="vertical" spacing={60}>\n        <Ref refId={`label-${index()}`} />\n        <Ref refId={planet.name} />\n      </Distribute>\n      <Arrow>\n        <Ref refId={`label-${index()}`} />\n        <Ref refId={planet.name} />\n      </Arrow>\n    </>\n  )}\n</For>\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Unlike the first argument to the function, ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," is a function, so it needs to be called with\nparentheses when it's used.")))),(0,l.kt)("p",null,"Great! We've now seen some basic usage of the ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," component for loops. Let's take it to the next\nlevel by making some more complex layouts and introducing conditionals."),(0,l.kt)(r.Z,{starterCode:i,mdxType:"Scrolly"},(0,l.kt)(s.Z,{mdxType:"Step"},(0,l.kt)("h2",{id:"5-align-the-labels"},"5. Align the Labels"),(0,l.kt)("p",null,"Even though we've labeled each planet, the labels are unevenly spaced with respect to each other.\nInstead of distributing each label relative to each individual planet, let's align the labels to each\nother and distribute them as a group."),(0,l.kt)("p",null,"To start thinking about this, it helps to describe what you want to do in words, and then translate\nthat to Bluefish code. For example, currently each label is ",(0,l.kt)("em",{parentName:"p"},"aligned")," to its planet, ",(0,l.kt)("em",{parentName:"p"},"distributed"),"\n60 pixels vertically from that planet, and there is an ",(0,l.kt)("em",{parentName:"p"},"arrow")," connecting the label to the planet."),(0,l.kt)("p",null,"We now want to ",(0,l.kt)("em",{parentName:"p"},"vertically align")," the labels to each other, ",(0,l.kt)("em",{parentName:"p"},"distribute")," them vertically from the entire\nplanets row, and ",(0,l.kt)("em",{parentName:"p"},"horizontally align")," and draw an ",(0,l.kt)("em",{parentName:"p"},"arrow")," from each\nlabel to its planet. First delete the ",(0,l.kt)("inlineCode",{parentName:"p"},"For")," loop from the previous step. Let's start with the\nalignment. As with ",(0,l.kt)("inlineCode",{parentName:"p"},"Row"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Align")," can take multiple children. Let's put all the labels in an ",(0,l.kt)("inlineCode",{parentName:"p"},"Align"),"\ncomponent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Align id="labels" alignment="centerY">\n  <For each={planets}>{(planet, index) => <Text id={`label-${index()}`}>{planet.name}</Text>}</For>\n</Align>\n')),(0,l.kt)("p",null,'Next, let\'s distribute the labels vertically from the entire planets row. We\'ve already named the\nplanets row "planets" and the labels grouping "labels," so we can refer to those names in the\n',(0,l.kt)("inlineCode",{parentName:"p"},"Distribute")," component:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Distribute direction="vertical" spacing={40}>\n  <Ref refId="labels" />\n  <Ref refId="planets" />\n</Distribute>\n')),(0,l.kt)("p",null,"Finally, let's horizontally align and draw an arrow from each label to its planet. We can use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"For")," loop again to do this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<For each={planets}>\n  {(planet, index) => (\n    <>\n      <Align alignment="centerX">\n        <Ref refId={`label-${index()}`} />\n        <Ref refId={planet.name} />\n      </Align>\n      <Arrow>\n        <Ref refId={`label-${index()}`} />\n        <Ref refId={planet.name} />\n      </Arrow>\n    </>\n  )}\n</For>\n'))),(0,l.kt)(s.Z,{mdxType:"Step"},(0,l.kt)("h2",{id:"6-conditionals-with-switch-and-match"},"6. Conditionals with ",(0,l.kt)("inlineCode",{parentName:"h2"},"Switch")," and ",(0,l.kt)("inlineCode",{parentName:"h2"},"Match")),(0,l.kt)("p",null,"The arrows seem kind of close to the big planets. Let's use a background instead of an arrow for\nplanets with a radius more than 30. We can do this with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Switch")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Match")," components.\n",(0,l.kt)("inlineCode",{parentName:"p"},"Switch")," takes children, which all must be ",(0,l.kt)("inlineCode",{parentName:"p"},"Match")," components. Each ",(0,l.kt)("inlineCode",{parentName:"p"},"Match")," component takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"when"),"\nprop, which is a boolean. The first ",(0,l.kt)("inlineCode",{parentName:"p"},"Match")," component whose ",(0,l.kt)("inlineCode",{parentName:"p"},"when")," prop is true will be rendered.\nReplace the ",(0,l.kt)("inlineCode",{parentName:"p"},"Arrow")," component with this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<Switch>\n  <Match when={planet.radius > 30}>\n    <Background>\n      <Ref refId={`label-${index()}`} />\n      <Ref refId={planet.name} />\n    </Background>\n  </Match>\n  <Match when={true}>\n    <Arrow>\n      <Ref refId={`label-${index()}`} />\n      <Ref refId={planet.name} />\n    </Arrow>\n  </Match>\n</Switch>\n")))),(0,l.kt)("h2",{id:"next-steps"},"Next Steps"),(0,l.kt)("p",null,"Congratulations on completing the intermediate tutorial! You can now make more complex layouts with\nloops and conditionals."),(0,l.kt)("p",null,"You are now ready to read some of the more complex examples in the Examples (coming soon)\nsection. You can also check out the API Reference (coming soon) to learn about all the\ncomponents and properties available in Bluefish."),(0,l.kt)("p",null,"We recommend you take a look at the SolidJS tutorial to learn more about components, signals, and\ncontrol flow in Solid: ",(0,l.kt)("a",{parentName:"p",href:"https://www.solidjs.com/tutorial/introduction_basics"},"https://www.solidjs.com/tutorial/introduction_basics"),"."),(0,l.kt)("p",null,"You can also check out the Advanced Bluefish (coming soon) tutorial to learn about the layout\nsystem."))}f.isMDXComponent=!0}}]);