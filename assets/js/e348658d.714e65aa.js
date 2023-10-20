"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3674],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,u=f["".concat(c,".").concat(d)]||f[d]||b[d]||l;return t?o.createElement(u,r(r({ref:n},p),{},{components:t})):o.createElement(u,r({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const l={},r="Python Tutor: A Bluefish Case Study",i={unversionedId:"example-gallery/python-tutor",id:"example-gallery/python-tutor",title:"Python Tutor: A Bluefish Case Study",description:"Introduction",source:"@site/docs/example-gallery/python-tutor.md",sourceDirName:"example-gallery",slug:"/example-gallery/python-tutor",permalink:"/docs/example-gallery/python-tutor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/example-gallery/python-tutor.md",tags:[],version:"current",frontMatter:{},sidebar:"exampleGallery"},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"The Global Frame",id:"the-global-frame",level:2},{value:"The Variable Sub-Component",id:"the-variable-sub-component",level:3},{value:"Constructing the Global Frame",id:"constructing-the-global-frame",level:3},{value:"The Objects",id:"the-objects",level:2},{value:"Putting The Diagram Together",id:"putting-the-diagram-together",level:2},{value:"Generalizing Python Tutor",id:"generalizing-python-tutor",level:2},{value:"Redefining the Components of the Object Type",id:"redefining-the-components-of-the-object-type",level:3},{value:"Creating Objects of Arbitrary Length",id:"creating-objects-of-arbitrary-length",level:3}],p={toc:s};function b(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-tutor-a-bluefish-case-study"},"Python Tutor: A Bluefish Case Study"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this section, we will explore how to use Bluefish to build complex domain specific diagrams like Python Tutor visualizations."),(0,a.kt)("p",null,"First, let's breakdown the parts of a Python Tutor visualization. Below is an example of a Python Tutor diagram that we will recreate in this section:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Python Tutor Diagram",src:t(2005).Z,width:"852",height:"350"})),(0,a.kt)("p",null,"We can divide the components of this diagram into two groups: the components associated with the Global Frame and the Objects. Let's build these two parts of the diagram separately, and then compose the two parts to create the entire Python Tutor visualization."),(0,a.kt)("h2",{id:"the-global-frame"},"The Global Frame"),(0,a.kt)("p",null,"The Global Frame itself is a composition of various other components. In particular, the Global Frame contains some text components, some variables, and some components responsible for the styling of the output."),(0,a.kt)("h3",{id:"the-variable-sub-component"},"The Variable Sub-Component"),(0,a.kt)("p",null,"First, let's construct a component for the variable label and value pairs at the right edge of the global frame. We will call this component ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable")," component requires four pieces of information: the pointer of the object it references (which could be null), the variable name, the variable value, and the variable ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const Variable = forwardRef(function _Variable({ data }, ref) {\n  const { pointObject, name, value, opId } = data;\n\n  // References\n  const textRef = useRef(null);\n  const valueRef = useRef(null);\n  const boxRef = useRef(null);\n  const boxRefBorderLeft = useRef(null);\n  const boxRefBorderBottom = useRef(null);\n  const variableRef = useRef(null);\n\n  // Declares font used in Python Tutor Diagrams\n  const fontFamily = "verdana, arial, helvetica, sans-serif";\n\n  return (\n    <Group ref={ref} name={opId}>\n      // Creates frame of Variable component (text label & box for value)\n      <Space name={variableRef} horizontally by={5}>\n        <Text\n          ref={textRef}\n          contents={name}\n          fontSize={"24px"}\n          fontFamily={fontFamily}\n          fill={"black"}\n        />\n        <Rect ref={boxRef} height={40} width={40} fill={"#e2ebf6"} />\n      </Space>\n      // Creates left and bottom edge borders\n      <Rect ref={boxRefBorderLeft} height={40} width={2} fill={"#a6b3b6"} />\n      <Rect ref={boxRefBorderBottom} height={2} width={40} fill={"#a6b3b6"} />\n      // Creates text labels of variable\n      <Text\n        ref={valueRef}\n        contents={value}\n        fontFamily={fontFamily}\n        fontSize={"24px"}\n        fill={"black"}\n      />\n      // Align text and border components to variable frame\n      <Align bottomCenter>\n        <Ref to={boxRefBorderBottom} />\n        <Ref to={boxRef} />\n      </Align>\n      <Align centerLeft>\n        <Ref to={boxRefBorderLeft} />\n        <Ref to={boxRef} />\n      </Align>\n      <Align topCenter>\n        <Ref to={valueRef} />\n        <Ref to={boxRef} />\n      </Align>\n    </Group>\n  );\n});\n\nrender(\n  <SVG width={300} height={50}>\n    <Variable data={{ pointObject: null, name: "x", value: "5", opId: "v3" }} />\n  </SVG>\n);\n')),(0,a.kt)("h3",{id:"constructing-the-global-frame"},"Constructing the Global Frame"),(0,a.kt)("p",null,"Now, we are ready to put together the global frame component. The Bluefish component takes a list of Variables as input and generates the global frame with the appropriate text, styling, and variable label and value components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const GlobalFrame = forwardRef(function _GlobalFrame({ variables, opId }, ref) {\n  // References\n  const frame = useRef(null);\n  const opIdLabel = useRef(null);\n  const frameVariables = useRef(null);\n  const frameBorder = useRef(null);\n\n  // Font declaration\n  const fontFamily = "Andale mono, monospace";\n\n  return (\n    <Group ref={ref} name={opId}>\n      {/* Global Frame and relevant text */}\n      <Rect ref={frame} height={300} width={200} fill={"#e2ebf6"} />\n      <Rect ref={frameBorder} height={300} width={5} fill={"#a6b3b6"} />\n      <Text\n        ref={opIdLabel}\n        contents={"Global Frame"}\n        fontSize={"24px"}\n        fontFamily={fontFamily}\n        fill={"black"}\n      />\n      <Align topCenter>\n        <Ref to={opIdLabel} />\n        <Ref to={frame} />\n      </Align>\n      {/* TODO: this Space and Align should be a Col, but Col overwrites *all* placeable positions\n            even though opIdLabel has already been placed */}\n      <Space vertically by={50}>\n        <Ref to={opIdLabel} />\n        <Col\n          name={`frameVariables`}\n          ref={frameVariables}\n          spacing={20}\n          alignment={"right"}\n        >\n          {variables.map((variable) => (\n            <Variable data={variable} />\n          ))}\n        </Col>\n      </Space>\n      <Align right>\n        <Ref to={frameVariables} />\n        <Ref to={opIdLabel} />\n      </Align>\n      <Align centerLeft>\n        <Ref to={frameBorder} />\n        <Ref to={frame} />\n      </Align>\n    </Group>\n  );\n});\n\nrender(\n  // Try adding more data or changing the data here!\n  <SVG width={500} height={300}>\n    <GlobalFrame\n      variables={[\n        { pointObject: { opId: "list1" }, name: "c", value: null, opId: "cID" },\n        { pointObject: { opId: "list2" }, name: "d", value: null, opId: "dID" },\n        { pointObject: { opId: "list3" }, name: "x", value: "5", opId: "xID" },\n      ]}\n      opId={"globalFrame"}\n    />\n  </SVG>\n);\n')),(0,a.kt)("p",null,"And with that, our global frame is complete! Let's now create the other part of our Python Tutor diagram: the objects that our global frame variables reference."),(0,a.kt)("h2",{id:"the-objects"},"The Objects"),(0,a.kt)("p",null,"In the Python Tutor diagram, the objects that the global frame variables reference are represented as rectangles with a value and pointer to the next object in the sequence. First, let's create a subcomponent to represent the objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const Objects = forwardRef(function _Objects({ nextObject, objectType, value, opId }, ref) {\n  const itemRef = useRef(null);\n  const boxRef = useRef(null);\n  const valueRef = useRef(null);\n  const labelRef = useRef(null);\n  const zeroRef = useRef(null);\n  const oneRef = useRef(null);\n  const elemRef = useRef(null);\n\n  const fontFamily = "verdana, arial, helvetica, sans-serif";\n\n  return (\n    <Group ref={ref} name={opId}>\n      <Text\n        ref={labelRef}\n        contents={objectType}\n        fontFamily={fontFamily}\n        fontSize={"16px"}\n        fill={"grey"}\n      />\n\n      {/* separate names for each rectangle so that the arrow can go from the center of pointer to the center left of pointed */}\n      <Group ref={elemRef}>\n        <Rect\n          ref={boxRef}\n          name={`pointer${opId}`}\n          height={60}\n          width={70}\n          fill={"#ffffc6"}\n          stroke={"grey"}\n        />\n        <Rect\n          ref={itemRef}\n          name={`pointed${opId}`}\n          height={60}\n          width={70}\n          fill={"#ffffc6"}\n          stroke={"grey"}\n        />\n        <Text\n          ref={valueRef}\n          contents={value}\n          fontSize={"24px"}\n          fill={"black"}\n        />\n        <Text\n          ref={zeroRef}\n          contents={"0"}\n          fontFamily={fontFamily}\n          fontSize={"16px"}\n          fill={"grey"}\n        />\n        <Text\n          ref={oneRef}\n          contents={"1"}\n          fontFamily={fontFamily}\n          fontSize={"16px"}\n          fill={"grey"}\n        />\n\n        <Align center>\n          <Ref to={valueRef} />\n          <Ref to={itemRef} />\n        </Align>\n\n        <Align left to={"centerRight"}>\n          <Ref to={boxRef} />\n          <Ref to={itemRef} />\n        </Align>\n\n        <Align topLeft>\n          <Ref to={oneRef} />\n          <Ref to={boxRef} />\n        </Align>\n      </Group>\n\n      <Space vertically by={10}>\n        <Ref to={labelRef} />\n        <Ref to={elemRef} />\n      </Space>\n    </Group>\n  );\n});\n\nrender(\n  <SVG width={500} height={100}>\n    <Objects\n      nextObject={{ opId: "object2" }}\n      objectType={"tuple"}\n      value={"1"}\n      opId={"object1"}\n    />\n  </SVG>\n);\n')),(0,a.kt)("p",null,"We can imagine that the objects are located in a grid, and we can specify the contents of each grid with a series of ",(0,a.kt)("inlineCode",{parentName:"p"},"Row")," components. Therefore, our set of Objects is essentially a matrix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const ObjectsMatrix = forwardRef(function _ObjectsMatrix({ objects, rows }, ref) {\n  // lookup map for the yellow objects\n  const objMap = new Map();\n  const objIdByCol = new Map();\n\n  rows.forEach((rowObject) => {\n    rowObject.nodes.forEach((node, index) => {\n      objIdByCol.set(index, (objIdByCol.has(index) ? objIdByCol.get(index) : []).concat([(node === "")? `row${rowObject.depth}_col${index}` : node]))\n      });\n  });\n\n  const cols = [];\n  objIdByCol.forEach((values, keys) => {\n    const columnObject = {depth: keys, nodes: values};\n    cols.push(columnObject);\n  });\n\n  objects.forEach((obj) => objMap.set(obj.opId, obj));\n\n  return (\n    <Group ref={ref} name={"matrix-rows"}>\n      {rows.map((level, index) => (\n          <Row name={`row${index}`} spacing={50} alignment={"middle"}>\n            {level.nodes.map((obj, objIndex) =>\n              obj == "" ? (\n                <Rect\n                  name={`row${level.depth}_col${objIndex}`}\n                  height={60}\n                  width={140}\n                  fill={"none"}\n                  stroke={"none"}\n                />\n              ) : (\n                <Objects {...objMap.get(obj)} />\n              )\n            )}\n          </Row>\n        ))}\n      {cols.map((columns, index) => (\n        <Col name={`col${index}`} spacing={50}>\n          {columns.nodes.map((objectId) => (\n            <Ref to={objectId} />\n          ))}     \n        </Col>\n      ))}\n    </Group>\n  );\n});\n\nrender(\n  // Try changing the objects or the arrangement of the matrix!\n  <SVG width={700} height={300}>\n    <ObjectsMatrix\n      objects={[\n        {\n          nextObject: { opId: "o2" },\n          objectType: "tuple",\n          value: "1",\n          opId: "o1",\n        },\n        {\n          nextObject: { opId: "o3" },\n          objectType: "tuple",\n          value: "2",\n          opId: "o2",\n        },\n        { nextObject: null, objectType: "tuple", value: "3", opId: "o3" },\n      ]}\n      rows={[\n        { depth: 0, nodes: ["", "o2", "o3"] },\n        { depth: 1, nodes: ["o1", "", ""] },\n      ]}\n    />\n  </SVG>\n);\n')),(0,a.kt)("h2",{id:"putting-the-diagram-together"},"Putting The Diagram Together"),(0,a.kt)("p",null,"Now that we've created the two halves of our Python Tutor diagram, let's compose them together and add links between the global frame variables and the objects to complete our visualization!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const PythonTutor = forwardRef(function _PythonTutor({ variables, objects, rows, opId }, ref) {\n  const globalFrame = useRef(null);\n  const rowRef = useRef(null);\n\n  // lookup map for the yellow objects\n  const objMap = new Map();\n  objects.forEach((obj) => objMap.set(obj.opId, obj));\n\n\n  // Lookup map for yellow objects by column\n  const objIdByCol = new Map();\n\n  rows.forEach((rowObject) => {\n    rowObject.nodes.forEach((node, index) => {\n      objIdByCol.set(index, (objIdByCol.has(index) ? objIdByCol.get(index) : []).concat([(node === "")? `row${rowObject.depth}_col${index}` : node]))\n      });\n  });\n\n  const cols = [];\n  objIdByCol.forEach((values, keys) => {\n    const columnObject = {depth: keys, nodes: values};\n    cols.push(columnObject);\n  });\n\n  // find start and end location for links between objects and objects\n  const objectLinks = objects\n    .filter((object) => object.nextObject !== null)\n    .map((object, index) => {\n      return {\n        opId: `objectLink${index}`,\n        start: { opId: `pointer${object.opId}` },\n        end: { opId: `pointed${object.nextObject.opId}` },\n      };\n    });\n\n  // find start and end locations for links between global frame and objects\n  const variableLinks = variables\n    .filter((variable) => variable.pointObject !== null)\n    .map((variable, index) => {\n      return {\n        opId: `variableLink${index}`,\n        start: { opId: variable.opId },\n        end: { opId: `pointed${variable.pointObject.opId}` },\n      };\n    });\n\n  return (\n    <Group ref={ref} name={opId}>\n      <GlobalFrame\n        variables={variables}\n        opId={"globalFrame"}\n        ref={globalFrame}\n      />\n\n      <Group ref={rowRef} name={"objects-matrix"}>\n        {rows.map((level, index) => (\n            <Row name={`row${index}`} spacing={50} alignment={"middle"}>\n              {level.nodes.map((obj, objIndex) =>\n                obj == "" ? (\n                  <Rect\n                    name={`row${level.depth}_col${objIndex}`}\n                    height={60}\n                    width={140}\n                    fill={"none"}\n                    stroke={"none"}\n                  />\n                ) : (\n                  <Objects {...objMap.get(obj)} />\n                )\n              )}\n            </Row>\n          ))}\n        {cols.map((columns, index) => (\n          <Col name={`col${index}`} spacing={50}>\n            {columns.nodes.map((objectId) => (\n              <Ref to={objectId} />\n            ))}     \n          </Col>\n        ))}\n      </Group>\n\n      <Space name={"space1"} horizontally by={60}>\n        <Ref to={globalFrame} />\n        <Ref to={rowRef} />\n      </Space>\n\n      <Space name={"space2"} vertically by={-250}>\n        <Ref to={globalFrame} />\n        <Ref to={rowRef} />\n      </Space>\n\n      {objectLinks.map((link) => (\n        <Group>\n          <Link {...link} />\n        </Group>\n      ))}\n\n      {variableLinks.map((link) => (\n        <Group>\n          <Link {...link} />\n        </Group>\n      ))}\n    </Group>\n  );\n});\n\nrender(\n  // Try changing the objects or the arrangement of the matrix!\n  <SVG width={800} height={400}>\n    <PythonTutor\n      variables={[\n        { pointObject: { opId: "o1" }, value: "", name: "c", opId: "v1" },\n        { pointObject: { opId: "o2" }, value: "", name: "d", opId: "v2" },\n        { pointObject: null, name: "x", value: "5", opId: "v3" },\n      ]}\n      opId={"pythonTutorFrame"}\n      objects={[\n        {\n          nextObject: { opId: "o2" },\n          objectType: "tuple",\n          value: "1",\n          opId: "o1",\n        },\n        {\n          nextObject: { opId: "o3" },\n          objectType: "tuple",\n          value: "2",\n          opId: "o2",\n        },\n        { nextObject: null, objectType: "tuple", value: "3", opId: "o3" },\n      ]}\n      rows={[\n        { depth: 0, nodes: ["", "o2", "o3"] },\n        { depth: 1, nodes: ["o1", "", ""] },\n      ]}\n    />\n  </SVG>\n);\n')),(0,a.kt)("h2",{id:"generalizing-python-tutor"},"Generalizing Python Tutor"),(0,a.kt)("p",null,"Python Tutor diagrams are very flexible, and the content represented in the diagram can be very diverse. For example, objects could have arbitrary length. Objects themselves could simply store pointers to other primitive types. In the following sections, we will explore how to generalize the Bluefish Python Tutor diagram to handle these situations."),(0,a.kt)("h3",{id:"redefining-the-components-of-the-object-type"},"Redefining the Components of the Object Type"),(0,a.kt)("p",null,"First, let's modify our tuple Objects. We see that there are two cases we should consider: when the tuple is a pointer to another object, or when the tuple contains a value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const ObjectsV2 = forwardRef(function _Objects({ objectType, objectValues, objectId }, ref) {\n  // objectValues: list with two entries; first entry is type of first box, second entry is type of second box\n\n  const objectTypeRef = useRef(null);\n  const objectRef = useRef(null);\n\n  const boxZeroRef = useRef(null);\n  const boxOneRef = useRef(null);\n  const boxZeroValueRef = useRef(null);\n  const boxOneValueRef = useRef(null);\n  const zeroRef = useRef(null);\n  const oneRef = useRef(null);\n\n  const fontFamily = "verdana, arial, helvetica, sans-serif";\n\n  return (\n    <Group ref={ref} name={objectId}>\n      <Text\n        ref={objectTypeRef}\n        contents={objectType}\n        fontFamily={fontFamily}\n        fontSize={"16px"}\n        fill={"grey"}\n      />\n\n      {/* separate names for each rectangle so that the arrow can go from the center of pointer to the center left of pointed */}\n      <Group ref={objectRef}>\n        <Rect\n          ref={boxOneRef}\n          name={`elm_1_${objectId}`}\n          height={60}\n          width={70}\n          fill={"#ffffc6"}\n          stroke={"grey"}\n        />\n        <Rect\n          ref={boxZeroRef}\n          name={`elm_0_${objectId}`}\n          height={60}\n          width={70}\n          fill={"#ffffc6"}\n          stroke={"grey"}\n        />\n\n        {/* Generate Text in Object based on whether it is a string or a pointer */}\n        {objectValues[0].type == "string" ? (\n          <Text\n            ref={boxZeroValueRef}\n            contents={objectValues[0].value}\n            fontSize={"24px"}\n            fill={"black"}\n          />\n        ) : (\n          <Text ref={boxZeroValueRef} contents={""} fill={"none"} />\n        )}\n\n        {objectValues[1].type == "string" ? (\n          <Text\n            ref={boxOneValueRef}\n            contents={objectValues[1].value}\n            fontSize={"24px"}\n            fill={"black"}\n          />\n        ) : (\n          <Text ref={boxOneValueRef} contents={""} fill={"none"} />\n        )}\n\n        {/* Labels in top left corner*/}\n        <Text\n          ref={zeroRef}\n          contents={"0"}\n          fontFamily={fontFamily}\n          fontSize={"16px"}\n          fill={"grey"}\n        />\n        <Text\n          ref={oneRef}\n          contents={"1"}\n          fontFamily={fontFamily}\n          fontSize={"16px"}\n          fill={"grey"}\n        />\n\n        <Align center>\n          <Ref to={boxZeroValueRef} />\n          <Ref to={boxZeroRef} />\n        </Align>\n\n        <Align left to={"centerRight"}>\n          <Ref to={boxOneRef} />\n          <Ref to={boxZeroRef} />\n        </Align>\n\n        <Align center>\n          <Ref to={boxOneValueRef} />\n          <Ref to={boxOneRef} />\n        </Align>\n\n        <Align topLeft>\n          <Ref to={oneRef} />\n          <Ref to={boxOneRef} />\n        </Align>\n      </Group>\n\n      <Space vertically by={10}>\n        <Ref to={objectTypeRef} />\n        <Ref to={objectRef} />\n      </Space>\n    </Group>\n  );\n});\nrender(\n  <SVG width={500} height={100}>\n    <ObjectsV2\n      objectType={"tuple"}\n      objectValues={[\n        { type: "string", value: "1" },\n        { type: "string", value: "2" },\n      ]}\n      objectId={"object1"}\n    />\n  </SVG>\n);\n')),(0,a.kt)("p",null,"Now let's build Python Tutor again with our updated Object type!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const PythonTutorV2 = forwardRef(function _PythonTutor({ variables, objects, rows, opId }, ref) {\n  const globalFrame = useRef(null);\n  const rowRef = useRef(null);\n\n  // lookup map for the yellow objects\n  const objMap = new Map();\n  objects.forEach((obj) => objMap.set(obj.objectId, obj));\n\n  // lookup map for yellow objects grouped in columns\n  const objIdByCol = new Map();\n\n  rows.forEach((rowObject) => {\n    rowObject.nodes.forEach((node, index) => {\n      objIdByCol.set(index, (objIdByCol.has(index) ? objIdByCol.get(index) : []).concat([(node === "")? `row${rowObject.depth}_col${index}` : node]))\n      });\n  });\n\n  const cols = [];\n  objIdByCol.forEach((values, keys) => {\n    const columnObject = {depth: keys, nodes: values};\n    cols.push(columnObject);\n  });\n\n  const objectValues = objects.map((object) => {\n    const objectWithPointerInfo = object.objectValues.map((element, index) => {\n      return { ...element, objectId: object.objectId, objectOrder: index };\n    });\n    return objectWithPointerInfo;\n  });\n\n  const objectValuesFlat = objectValues.flat();\n\n  // find start and end location for links between objects and objects\n  const objectLinks = objectValuesFlat\n    .filter((boxObject) => boxObject.type == "pointer")\n    .map((element, index) => {\n      return {\n        opId: `objectLink${index}`,\n        start: { opId: `elm_${element.objectOrder}_${element.objectId}` },\n        end: { opId: `elm_0_${element.pointId}` },\n      };\n    });\n\n  // find start and end locations for links between global frame and objects\n  const variableLinks = variables\n    .filter((variable) => variable.pointObject !== null)\n    .map((variable, index) => {\n      return {\n        opId: `variableLink${index}`,\n        start: { opId: variable.opId },\n        end: { opId: `elm_0_${variable.pointObject.opId}` },\n      };\n    });\n\n  return (\n    <Group ref={ref} name={opId}>\n      <GlobalFrame\n        variables={variables}\n        opId={"globalFrame"}\n        ref={globalFrame}\n      />\n\n      <Group ref={rowRef} name={"objects-matrix"}>\n        {rows.map((level, index) => (\n            <Row name={`row${index}`} spacing={50} alignment={"middle"}>\n              {level.nodes.map((obj, objIndex) =>\n                obj == "" ? (\n                  <Rect\n                    name={`row${level.depth}_col${objIndex}`}\n                    height={60}\n                    width={140}\n                    fill={"none"}\n                    stroke={"none"}\n                  />\n                ) : (\n                  <ObjectsV2 {...objMap.get(obj)} />\n                )\n              )}\n            </Row>\n          ))}\n        {cols.map((columns, index) => (\n          <Col name={`col${index}`} spacing={50}>\n            {columns.nodes.map((objectId) => (\n              <Ref to={objectId} />\n            ))}     \n          </Col>\n        ))}\n      </Group>\n\n      <Space name={"space1"} horizontally by={60}>\n        <Ref to={globalFrame} />\n        <Ref to={rowRef} />\n      </Space>\n\n      <Space name={"space2"} vertically by={-250}>\n        <Ref to={globalFrame} />\n        <Ref to={rowRef} />\n      </Space>\n\n      {objectLinks.map((link) => (\n        <Group>\n          <Link {...link} />\n        </Group>\n      ))}\n\n      {variableLinks.map((link) => (\n        <Group>\n          <Link {...link} />\n        </Group>\n      ))}\n    </Group>\n  );\n});\n\nrender(\n  // Try changing the objects or the arrangement of the matrix!\n  <SVG width={800} height={400}>\n    <PythonTutorV2\n      variables={[\n        { pointObject: { opId: "o1" }, value: "", name: "c", opId: "v1" },\n        { pointObject: { opId: "o2" }, value: "", name: "d", opId: "v2" },\n        { pointObject: null, name: "x", value: "5", opId: "v3" },\n      ]}\n      opId={"pythonTutorFrameV2"}\n      objects={[\n        {\n          objectType: "tuple",\n          objectId: "o1",\n          objectValues: [\n            { type: "string", value: "1" },\n            { type: "pointer", pointId: "o2" },\n          ],\n        },\n        {\n          objectType: "tuple",\n          objectId: "o2",\n          objectValues: [\n            { type: "pointer", pointId: "o4" },\n            { type: "pointer", pointId: "o3" },\n          ],\n        },\n        {\n          objectType: "tuple",\n          objectId: "o3",\n          objectValues: [\n            { type: "string", value: "3" },\n            { type: "string", value: "6" },\n          ],\n        },\n        {\n          objectType: "tuple",\n          objectId: "o4",\n          objectValues: [\n            { type: "string", value: "5" },\n            { type: "string", value: "7" },\n          ],\n        },\n      ]}\n      rows={[\n        { depth: 0, nodes: ["", "o2", "o3"] },\n        { depth: 1, nodes: ["o1", "", "o4"] },\n      ]}\n    />\n  </SVG>\n);\n')),(0,a.kt)("h3",{id:"creating-objects-of-arbitrary-length"},"Creating Objects of Arbitrary Length"),(0,a.kt)("p",null,"In our implementation so far, we've been restricted to using tuple objects of length two (typically with a value in the first part of the object and a pointer in the second half). In this section, we will extend our concept of Objects even further by allowing Objects of arbitrary length."),(0,a.kt)("p",null,"First, since we are creating tuple objects of arbitrary length, let's refactor our code so that each tuple element is a Bluefish element. This will reduce the number of alignments and mappings in our implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const ElmTuple = forwardRef(function _ElmTuple({ tupleIndex, tupleData, objectId }, ref) {\n  const fontFamily = "verdana, arial, helvetica, sans-serif";\n  return (\n    <Group ref={ref} name={`elm_${tupleIndex}_${objectId}`}>\n      <Rect\n        name={`elmBox_${tupleIndex}_${objectId}`}\n        height={60}\n        width={70}\n        fill={"#ffffc6"}\n        stroke={"grey"}\n      />\n      <Text\n        name={`elmLabel_${tupleIndex}_${objectId}`}\n        contents={`${tupleIndex}`}\n        fontFamily={fontFamily}\n        fontSize={"16px"}\n        fill={"grey"}\n      />\n      {tupleData.type == "string" ? (\n        <Text\n          name={`elmVal_${tupleIndex}_${objectId}`}\n          contents={tupleData.value}\n          fontSize={"24px"}\n          fill={"black"}\n        />\n      ) : (\n        <Text\n          name={`elmVal_${tupleIndex}_${objectId}`}\n          contents={""}\n          fill={"none"}\n        />\n      )}\n\n      <Align center>\n        <Ref to={`elmVal_${tupleIndex}_${objectId}`} />\n        <Ref to={`elmBox_${tupleIndex}_${objectId}`} />\n      </Align>\n\n      <Align topLeft>\n        <Ref to={`elmLabel_${tupleIndex}_${objectId}`} />\n        <Ref to={`elmBox_${tupleIndex}_${objectId}`} />\n      </Align>\n    </Group>\n  );\n});\n\nrender(\n  <SVG width={100} height={100}>\n    <ElmTuple\n      tupleIndex={"0"}\n      tupleData={{ type: "string", value: "3" }}\n      objectId={"object1"}\n    />\n  </SVG>\n);\n')),(0,a.kt)("p",null,"Now that we've refactored the tuple element into a Bluefish element, let's rewrite Objects so that it can have an arbitrary length."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const ObjectsV3 = forwardRef(function _Objects({ objectType, objectValues, objectId }, ref) {\n  // objectValues: list of values for different parts of object\n\n  const objectTypeRef = useRef(null);\n  const objectRef = useRef(null);\n\n  const fontFamily = "verdana, arial, helvetica, sans-serif";\n\n  return (\n    <Group ref={ref} name={objectId}>\n      <Text \n        ref={objectTypeRef}\n        contents={objectType}\n        fontFamily={fontFamily}\n        fontSize={"16px"}\n        fill={"grey"}\n      />\n      <Row ref={objectRef} spacing={0} alignment={\'middle\'}>\n        {objectValues.map((elementData, index) => (\n          <ElmTuple tupleIndex={index} tupleData={elementData} objectId={objectId}/>\n        ))}\n      </Row>\n\n      <Space vertically by={10}>\n        <Ref to={objectTypeRef} />\n        <Ref to={objectRef} />\n      </Space>\n    </Group>\n  );\n});\n\nrender(\n  <SVG width={500} height={100}>\n    <ObjectsV3\n      objectType={"tuple"}\n      objectValues={[\n        { type: "string", value: "1" },\n        { type: "string", value: "2" },\n        { type: "pointer", pointId: "object1" },\n        { type: "string", value: "30" },\n      ]}\n      objectId={"object1"}\n    />\n  </SVG>\n);\n')),(0,a.kt)("p",null,"Once again, let's build Python Tutor with tuples of various types and lengths!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const PythonTutorV3 = forwardRef(function _PythonTutor({ variables, objects, rows, opId }, ref) {\n  const globalFrame = useRef(null);\n  const rowRef = useRef(null);\n\n  // lookup map for the yellow objects\n  const objMap = new Map();\n  objects.forEach((obj) => objMap.set(obj.objectId, obj));\n\n  // lookup map for yellow objects grouped in columns\n  const objIdByCol = new Map();\n\n  rows.forEach((rowObject) => {\n    rowObject.nodes.forEach((node, index) => {\n      objIdByCol.set(index, (objIdByCol.has(index) ? objIdByCol.get(index) : []).concat([(node === "")? `row${rowObject.depth}_col${index}` : node]))\n      });\n  });\n\n  const cols = [];\n  objIdByCol.forEach((values, keys) => {\n    const columnObject = {depth: keys, nodes: values};\n    cols.push(columnObject);\n  });\n\n  const objectValues = objects.map((object) => {\n    const objectWithPointerInfo = object.objectValues.map((element, index) => {\n      return { ...element, objectId: object.objectId, objectOrder: index };\n    });\n    return objectWithPointerInfo;\n  });\n\n  const objectValuesFlat = objectValues.flat();\n\n  // find start and end location for links between objects and objects\n  const objectLinks = objectValuesFlat\n    .filter((boxObject) => boxObject.type == "pointer")\n    .map((element, index) => {\n      return {\n        opId: `objectLink${index}`,\n        start: { opId: `elm_${element.objectOrder}_${element.objectId}` },\n        end: { opId: `elm_0_${element.pointId}` },\n      };\n    });\n\n  // find start and end locations for links between global frame and objects\n  const variableLinks = variables\n    .filter((variable) => variable.pointObject !== null)\n    .map((variable, index) => {\n      return {\n        opId: `variableLink${index}`,\n        start: { opId: variable.opId },\n        end: { opId: `elm_0_${variable.pointObject.opId}` },\n      };\n    });\n\n  return (\n    <Group ref={ref} name={opId}>\n      <GlobalFrame variables={variables} opId={"globalFrame"} ref={globalFrame}/>\n\n      <Group ref={rowRef} name={"objects-matrix"}>\n        {rows.map((level, index) => (\n            <Row name={`row${index}`} spacing={50} alignment={"middle"}>\n              {level.nodes.map((obj, objIndex) =>\n                obj == "" ? (\n                  <Rect\n                    name={`row${level.depth}_col${objIndex}`}\n                    height={60}\n                    width={140}\n                    fill={"none"}\n                    stroke={"none"}\n                  />\n                ) : (\n                  <ObjectsV3 {...objMap.get(obj)} />\n                )\n              )}\n            </Row>\n          ))}\n        {cols.map((columns, index) => (\n          <Col name={`col${index}`} spacing={50}>\n            {columns.nodes.map((objectId) => (\n              <Ref to={objectId} />\n            ))}     \n          </Col>\n        ))}\n      </Group>\n\n      <Space name={"space1"} horizontally by={60}>\n        <Ref to={globalFrame} />\n        <Ref to={rowRef} />\n      </Space>\n\n      <Space name={"space2"} vertically by={-250}>\n        <Ref to={globalFrame} />\n        <Ref to={rowRef} />\n      </Space>\n\n      {objectLinks.map((link) => (\n        <Group>\n          <Link {...link} />\n        </Group>\n      ))}\n\n      {variableLinks.map((link) => (\n        <Group>\n          <Link {...link} />\n        </Group>\n      ))}\n    </Group>\n  );\n});\n\nrender(\n  // Try changing the objects or the arrangement of the matrix!\n  <SVG width={800} height={400}>\n    <PythonTutorV3\n      variables={[\n        { pointObject: { opId: "o1" }, value: "", name: "c", opId: "v1" },\n        { pointObject: { opId: "o2" }, value: "", name: "d", opId: "v2" },\n        { pointObject: null, name: "x", value: "5", opId: "v3" },\n      ]}\n      opId={"pythonTutorFrameV2"}\n      objects={[\n        {\n          objectType: "tuple",\n          objectId: "o1",\n          objectValues: [\n            { type: "string", value: "1" },\n            { type: "pointer", pointId: "o2" },\n            { type: "string", value: "30" },\n            { type: "pointer", pointId: "o3" },\n          ],\n        },\n        {\n          objectType: "tuple",\n          objectId: "o2",\n          objectValues: [\n            { type: "string", value: "1" },\n            { type: "string", value: "4" },\n          ],\n        },\n        {\n          objectType: "tuple",\n          objectId: "o3",\n          objectValues: [\n            { type: "string", value: "3" },\n            { type: "string", value: "10" },\n          ],\n        },\n      ]}\n      rows={[\n        { depth: 0, nodes: ["", "o2", "o3"] },\n        { depth: 1, nodes: ["o1", "", ""] },\n      ]}\n    />\n  </SVG>\n);\n')))}b.isMDXComponent=!0},2005:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/python-tutor-ed1da2de53788003cd3ea68d6fdddc8c.png"}}]);