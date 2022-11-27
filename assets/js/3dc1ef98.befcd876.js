"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[923],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="2. A Tree Diagram Component",l={unversionedId:"tutorial-plot/bluefish-2",id:"tutorial-plot/bluefish-2",title:"2. A Tree Diagram Component",description:"In this section, we'll take the node component we built in the previous section and use it to build",source:"@site/docs/tutorial-plot/bluefish-2.md",sourceDirName:"tutorial-plot",slug:"/tutorial-plot/bluefish-2",permalink:"/docs/tutorial-plot/bluefish-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-plot/bluefish-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Your First Bluefish Component",permalink:"/docs/tutorial-plot/bluefish-1"},next:{title:"3. A Tree Diagram Grammar",permalink:"/docs/tutorial-plot/bluefish-3"}},s={},u=[{value:"2-Level Tree",id:"2-level-tree",level:2},{value:"Positioning Subtrees Relative to the Root",id:"positioning-subtrees-relative-to-the-root",level:2},{value:"Now Let&#39;s Generalize to Arbitrary Depth!",id:"now-lets-generalize-to-arbitrary-depth",level:2},{value:"Adding Connectors",id:"adding-connectors",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-a-tree-diagram-component"},"2. A Tree Diagram Component"),(0,a.kt)("p",null,"In this section, we'll take the node component we built in the previous section and use it to build\na larger tree diagram component."),(0,a.kt)("h2",{id:"2-level-tree"},"2-Level Tree"),(0,a.kt)("p",null,"Let's start by just rendering everything out. We'll make a new group which contains the root node as\nwell as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Row")," of subtrees. For now, we'll assume each subtree is just a single node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const Tree = forwardRef(function _Tree({ data }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <Node name={name} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Node name={child.name} value={child.value} />\n        ))}\n      </Row>\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={200} height={200}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n        },\n        {\n          name: 'E',\n          value: 3,\n        },\n      ],\n    }} />\n  </SVG>\n)\n")),(0,a.kt)("h2",{id:"positioning-subtrees-relative-to-the-root"},"Positioning Subtrees Relative to the Root"),(0,a.kt)("p",null,"We'd like to position these subtrees below the root. So we can use a ",(0,a.kt)("inlineCode",{parentName:"p"},"Col")," component and ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"s to\nposition these elements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const Tree = forwardRef(function _Tree({ data }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <Node name={name + '-node'} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Node name={child.name} value={child.value} />\n        ))}\n      </Row>\n      {subtrees ? (\n        <Col alignment={'center'} spacing={10}>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </Col>\n      ) : null}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={200} height={200}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n        },\n        {\n          name: 'E',\n          value: 3,\n        },\n      ],\n    }} />\n  </SVG>\n)\n")),(0,a.kt)("h2",{id:"now-lets-generalize-to-arbitrary-depth"},"Now Let's Generalize to Arbitrary Depth!"),(0,a.kt)("p",null,"Now, by replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," with a recursive call to ",(0,a.kt)("inlineCode",{parentName:"p"},"Tree"),", we can generalize our component to trees\nof any depth!"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Naming our internal function ",(0,a.kt)("inlineCode",{parentName:"p"},"_Tree")," and not ",(0,a.kt)("inlineCode",{parentName:"p"},"Tree")," is important here, because otherwise the\nrecursive call will refer to the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"Tree")," rather than the external one."),(0,a.kt)("p",{parentName:"admonition"},"Try renaming it and you'll see an error!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const Tree = forwardRef(function _Tree({ data }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <Node name={name + '-node'} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Tree data={child} />\n        ))}\n      </Row>\n      {subtrees ? (\n        <Col alignment={'center'} spacing={10}>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </Col>\n      ) : null}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={500} height={500}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n          subtrees: [\n            { name: 'C', value: 2, },\n            { name: 'D', value: 2, },\n          ],\n        },\n        {\n          name: 'E',\n          value: 3,\n          subtrees: [\n            { name: 'F', value: 2, },\n            { name: 'G', value: 1, },\n          ],\n        },\n      ],\n    }} />\n  </SVG>\n)\n")),(0,a.kt)("h2",{id:"adding-connectors"},"Adding Connectors"),(0,a.kt)("p",null,"Now that we've placed the nodes, it's time to place some connectors!"),(0,a.kt)("p",null,"For every subtree, we want to make a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," component linking the parent node to the subtree's\nroot node. To do this we'll ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," over the ",(0,a.kt)("inlineCode",{parentName:"p"},"subtrees")," array and use ",(0,a.kt)("inlineCode",{parentName:"p"},"child.name")," to grab the\nreference to the child."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const Tree = forwardRef(function _Tree({ data }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <Node name={name + '-node'} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Tree data={child} />\n        ))}\n      </Row>\n      {subtrees ? (\n        <Col alignment={'center'} spacing={10}>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </Col>\n      ) : null}\n      {(subtrees || []).map((child, i) => (\n        <Connector $from={'bottomCenter'} $to={'topCenter'} stroke={'black'} strokeWidth={2}>\n          <Ref to={name + '-node'} />\n          <Ref to={child.name + '-node'} />\n        </Connector>\n      ))}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={500} height={500}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n          subtrees: [\n            { name: 'C', value: 2, },\n            { name: 'D', value: 2, },\n          ],\n        },\n        {\n          name: 'E',\n          value: 3,\n          subtrees: [\n            { name: 'F', value: 2, },\n            { name: 'G', value: 1, },\n          ],\n        },\n      ],\n    }} />\n  </SVG>\n)\n")))}c.isMDXComponent=!0}}]);