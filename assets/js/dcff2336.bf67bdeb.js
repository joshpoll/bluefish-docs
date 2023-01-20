"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Space",c={unversionedId:"reference/components/space",id:"reference/components/space",title:"Space",description:"The Space component spaces its children out evenly in either the vertical or horizontal direction.",source:"@site/docs/reference/components/space.md",sourceDirName:"reference/components",slug:"/reference/components/space",permalink:"/docs/reference/components/space",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/components/space.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Row",permalink:"/docs/reference/components/row"},next:{title:"SVG",permalink:"/docs/reference/components/svg"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"space"},"Space"),(0,o.kt)("p",null,"The Space component spaces its children out evenly in either the vertical or horizontal direction."),(0,o.kt)("p",null,"It takes either the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"vertically")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontally")," in order to determine which direction to propagate the spacing."),(0,o.kt)("p",null,"It also takes either ",(0,o.kt)("strong",{parentName:"p"},"one")," of the two following attribute to specify how much to space its children:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"by")," - how much space to put between each child"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"height"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"width")," - the total height or width, respectively, that the children should take up after being spaced out (with ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"vertically")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontally"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"by")," attribute takes precedence over the ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," attributes."),(0,o.kt)("p",null,"An example of the syntax looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Space vertically by={20}>\n    <BluefishComponent1 />\n    <BluefishComponent2 />\n</Space>\n")),(0,o.kt)("p",null,"or this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Space horizontally width={20}>\n    <BluefishComponent1 />\n    <BluefishComponent2 />\n</Space>\n")))}u.isMDXComponent=!0}}]);