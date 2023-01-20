"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1695],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||c;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5435:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const c={},a="Ref",s={unversionedId:"reference/components/ref",id:"reference/components/ref",title:"Ref",description:"The Ref component allows users to reference other Bluefish components using their name.",source:"@site/docs/reference/components/ref.md",sourceDirName:"reference/components",slug:"/reference/components/ref",permalink:"/docs/reference/components/ref",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/components/ref.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Rect",permalink:"/docs/reference/components/rect"},next:{title:"Row",permalink:"/docs/reference/components/row"}},p={},i=[],l={toc:i};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ref"},"Ref"),(0,o.kt)("p",null,"The Ref component allows users to reference other Bluefish components using their name. "),(0,o.kt)("p",null,"This is done by using the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," to specify the name of the component to reference. "),(0,o.kt)("p",null,"An example usage looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Rect name={'rectangle'} />\n<Ref to={'rectangle'} />\n")))}f.isMDXComponent=!0}}]);