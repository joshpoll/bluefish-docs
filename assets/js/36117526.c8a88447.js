"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3209],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:3},i="3. A Tree Diagram Grammar",s={unversionedId:"tutorial-diagrams/bluefish-3",id:"tutorial-diagrams/bluefish-3",title:"3. A Tree Diagram Grammar",description:"Passing Custom Nodes and Connectors",source:"@site/docs/tutorial-diagrams/bluefish-3.md",sourceDirName:"tutorial-diagrams",slug:"/tutorial-diagrams/bluefish-3",permalink:"/docs/tutorial-diagrams/bluefish-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-diagrams/bluefish-3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. A Tree Diagram Component",permalink:"/docs/tutorial-diagrams/bluefish-2"},next:{title:"Reference Guide",permalink:"/docs/category/reference-guide"}},l={},c=[{value:"Passing Custom Nodes and Connectors",id:"passing-custom-nodes-and-connectors",level:2},{value:"Customizing the Layout",id:"customizing-the-layout",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-a-tree-diagram-grammar"},"3. A Tree Diagram Grammar"),(0,r.kt)("h2",{id:"passing-custom-nodes-and-connectors"},"Passing Custom Nodes and Connectors"),(0,r.kt)("p",null,"Let's start by letting users provide their own node and connector shapes. To do so, we'll make a new\nfield on our ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree")," component called ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," that will store these custom component constructors."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must use ",(0,r.kt)("inlineCode",{parentName:"p"},".")," notation when passing a component into JSX. That is, you must write something like\n",(0,r.kt)("inlineCode",{parentName:"p"},"encoding.node"),", NOT ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding['node']"),", or even ",(0,r.kt)("inlineCode",{parentName:"p"},"(encoding['node'])"),".")),(0,r.kt)("p",null,"Let's start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const Tree = forwardRef(function _Tree({ data, encoding }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <encoding.node name={name + '-node'} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Tree data={child} encoding={encoding} />\n        ))}\n      </Row>\n      {subtrees ? (\n        <Col alignment={'center'} spacing={10}>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </Col>\n      ) : null}\n      {(subtrees || []).map((child, i) => (\n        <Connector $from={'bottomCenter'} $to={'topCenter'} stroke={'black'} strokeWidth={2}>\n          <Ref to={name + '-node'} />\n          <Ref to={child.name + '-node'} />\n        </Connector>\n      ))}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={500} height={500}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n          subtrees: [\n            { name: 'C', value: 2, },\n            { name: 'D', value: 2, },\n          ],\n        },\n        {\n          name: 'E',\n          value: 3,\n          subtrees: [\n            { name: 'F', value: 2, },\n            { name: 'G', value: 1, },\n          ],\n        },\n      ],\n    }} encoding={{\n      node: Node,\n    }} />\n  </SVG>\n)\n")),(0,r.kt)("p",null,"Now let's take out ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector"),". Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", we're giving ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector")," some default arguments\n(",(0,r.kt)("inlineCode",{parentName:"p"},"stroke")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strokeWidth"),") that we'd like to keep outside the component. To do so, we can wrap our\n",(0,r.kt)("inlineCode",{parentName:"p"},"Connector")," component like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyConnector = forwardRef(function _MyConnector(props, ref) {\n  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />\n})\n")),(0,r.kt)("p",null,"We are passing through all the props and overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"stroke")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strokeWidth")," fields."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," is also a prop, so the children will get passed correctly.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," is not a proper, though, and so we need to define it.")),(0,r.kt)("p",null,"Without generalizing any further, we can start by simply replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"MyConnector"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const MyConnector = forwardRef(function _MyConnector(props, ref) {\n  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />\n})\n\nconst Tree = forwardRef(function _Tree({ data, encoding }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <encoding.node name={name + '-node'} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Tree data={child} encoding={encoding} />\n        ))}\n      </Row>\n      {subtrees ? (\n        <Col alignment={'center'} spacing={10}>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </Col>\n      ) : null}\n      {(subtrees || []).map((child, i) => (\n        <MyConnector $from={'bottomCenter'} $to={'topCenter'}>\n          <Ref to={name + '-node'} />\n          <Ref to={child.name + '-node'} />\n        </MyConnector>\n      ))}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={500} height={500}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n          subtrees: [\n            { name: 'C', value: 2, },\n            { name: 'D', value: 2, },\n          ],\n        },\n        {\n          name: 'E',\n          value: 3,\n          subtrees: [\n            { name: 'F', value: 2, },\n            { name: 'G', value: 1, },\n          ],\n        },\n      ],\n    }} encoding={{\n      node: Node,\n    }} />\n  </SVG>\n)\n")),(0,r.kt)("p",null,"Now finally we can place it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const MyConnector = forwardRef(function _MyConnector(props, ref) {\n  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />\n})\n\nconst Tree = forwardRef(function _Tree({ data, encoding }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <encoding.node name={name + '-node'} value={value} />\n      <Row name={name + '-subtree'} alignment={'top'} spacing={10}>\n        {(subtrees || []).map((child, i) => (\n          <Tree data={child} encoding={encoding} />\n        ))}\n      </Row>\n      {subtrees ? (\n        <Col alignment={'center'} spacing={10}>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </Col>\n      ) : null}\n      {(subtrees || []).map((child, i) => (\n        <encoding.link $from={'bottomCenter'} $to={'topCenter'}>\n          <Ref to={name + '-node'} />\n          <Ref to={child.name + '-node'} />\n        </encoding.link>\n      ))}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={500} height={500}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n          subtrees: [\n            { name: 'C', value: 2, },\n            { name: 'D', value: 2, },\n          ],\n        },\n        {\n          name: 'E',\n          value: 3,\n          subtrees: [\n            { name: 'F', value: 2, },\n            { name: 'G', value: 1, },\n          ],\n        },\n      ],\n    }} encoding={{\n      node: Node,\n      link: MyConnector,\n    }} />\n  </SVG>\n)\n")),(0,r.kt)("h2",{id:"customizing-the-layout"},"Customizing the Layout"),(0,r.kt)("p",null,"Since layouts are just components, we can let users customize them as well! Just as above, we'll\nwrite some thin wrappers around existing components (this time they're layout components). Notice\nthat we don't have to restrict users to this set! They can pass in their own as long as they conform\nto the internal specification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const MyConnector = forwardRef(function _MyConnector(props, ref) {\n  return <Connector ref={ref} {...props} stroke={'black'} strokeWidth={2} />\n})\n\nconst row = (props) => {\n  let { alignment, spacing } = props || {};\n  alignment = alignment || 'top';\n  spacing = spacing || 10;\n  return forwardRef(function _Row(props, ref) {\n    return <Row ref={ref} {...props} alignment={alignment} spacing={spacing} />\n  })\n}\n\nconst col = (props) => {\n  let { alignment, spacing } = props || {};\n  alignment = alignment || 'center';\n  spacing = spacing || 10;\n  return forwardRef(function _Col(props, ref) {\n    return <Col ref={ref} {...props} alignment={alignment} spacing={spacing} />\n  })\n}\n\nconst Tree = forwardRef(function _Tree({ data, encoding }, ref) {\n  const { name, value, subtrees } = data;\n  return (\n    <Group ref={ref}>\n      <encoding.node name={name + '-node'} value={value} />\n      <encoding.subtreeSubtree name={name + '-subtree'}>\n        {(subtrees || []).map((child, i) => (\n          <Tree data={child} encoding={encoding} />\n        ))}\n      </encoding.subtreeSubtree>\n      {subtrees ? (\n        <encoding.rootSubtree>\n          <Ref to={name + '-node'} />\n          <Ref to={name + '-subtree'} />\n        </encoding.rootSubtree>\n      ) : null}\n      {(subtrees || []).map((child, i) => (\n        <encoding.link $from={'bottomCenter'} $to={'topCenter'}>\n          <Ref to={name + '-node'} />\n          <Ref to={child.name + '-node'} />\n        </encoding.link>\n      ))}\n    </Group>\n  )\n})\n\nrender(\n  <SVG width={500} height={500}>\n    <Tree data={{\n      name: 'A',\n      value: 7,\n      subtrees: [\n        {\n          name: 'B',\n          value: 4,\n          subtrees: [\n            { name: 'C', value: 2, },\n            { name: 'D', value: 2, },\n          ],\n        },\n        {\n          name: 'E',\n          value: 3,\n          subtrees: [\n            { name: 'F', value: 2, },\n            { name: 'G', value: 1, },\n          ],\n        },\n      ],\n    }} encoding={{\n      node: Node,\n      link: MyConnector,\n      subtreeSubtree: row(),\n      // try col({ alignment: 'left', })\n      rootSubtree: col(),\n    }} />\n  </SVG>\n)\n")))}d.isMDXComponent=!0}}]);