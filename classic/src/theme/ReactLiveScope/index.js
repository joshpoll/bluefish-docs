import React from "react";
// import * as Bluefish from "@bluefish-js/core";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
const Bluefish = ExecutionEnvironment.canUseDOM ? require("@bluefish-js/core") : null;

const Node = React.forwardRef(function _Node({ name, value }, ref) {
  return (
    <Bluefish.Group name={name} ref={ref}>
      <Bluefish.Text name={name + '-value'} contents={value} fontSize={'30px'} />
      <Bluefish.Rect name={name + '-background'} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
      <Bluefish.Text name={name + '-label'} contents={name} fontSize={'12px'} />
      <Bluefish.Align center>
        <Bluefish.Ref to={name + '-value'} />
        <Bluefish.Ref to={name + '-background'} />
      </Bluefish.Align>
      <Bluefish.Align center to={'topCenter'}>
        <Bluefish.Ref to={name + '-label'} />
        <Bluefish.Ref to={name + '-background'} />
      </Bluefish.Align>
    </Bluefish.Group>
  );
});

const Variable = React.forwardRef(function _Variable({ data }, ref) {
  const { pointObject, name, value, opId } = data;
  
  return (
    <Bluefish.Group ref={ref} name={opId}>
    
        <Bluefish.Space name={opId + `-variableRef`} horizontally by={5}>
            <Bluefish.Text name={opId + '-textRef'} contents={name} fontSize={'24px'} fontFamily={'verdana, arial, helvetica, sans-serif'} fill={'black'} />
            <Bluefish.Rect name={opId + '-boxRef'} height={40} width={40} fill={'#e2ebf6'} />
        </Bluefish.Space>

        <Bluefish.Rect name={opId + '-boxRefBorderLeft'} height={40} width={2} fill={'#a6b3b6'} />
        <Bluefish.Rect name={opId + '-boxRefBorderBottom'} height={2} width={40} fill={'#a6b3b6'} />

        <Bluefish.Text
            name={opId + '-valueRef'}
            contents={value}
            fontFamily={'verdana, arial, helvetica, sans-serif'}
            fontSize={'24px'}
            fill={'black'}
        />

        <Bluefish.Align bottomCenter>
            <Bluefish.Ref to={opId + '-boxRefBorderBottom'} />
            <Bluefish.Ref to={opId + '-boxRef'} />
        </Bluefish.Align>
        <Bluefish.Align centerLeft>
            <Bluefish.Ref to={opId + '-boxRefBorderLeft'} />
            <Bluefish.Ref to={opId + '-boxRef'} />
        </Bluefish.Align>
        <Bluefish.Align topCenter>
            <Bluefish.Ref to={opId + '-valueRef'} />
            <Bluefish.Ref to={opId + '-boxRef'} />
        </Bluefish.Align>
    </Bluefish.Group>
  )
})

const Objects = React.forwardRef(function _Objects({nextObject, objectType, value, opId}, ref) {
  const itemRef = React.useRef(null);
  const boxRef = React.useRef(null);
  const valueRef = React.useRef(null);
  const labelRef = React.useRef(null);
  const zeroRef = React.useRef(null);
  const oneRef = React.useRef(null);
  const elemRef = React.useRef(null);
  const fontFamily = 'verdana, arial, helvetica, sans-serif';

  return (
    <Bluefish.Group ref={ref} name={opId}>
      <Bluefish.Text ref={labelRef} contents={objectType} fontFamily={fontFamily} fontSize={'16px'} fill={'grey'} />
      <Bluefish.Group ref={elemRef}>
        <Bluefish.Rect ref={boxRef} name={`pointer${opId}`} height={60} width={80} fill={'#ffffc6'} stroke={'grey'} />
        <Bluefish.Rect ref={itemRef} name={`pointed${opId}`} height={60} width={80} fill={'#ffffc6'} stroke={'grey'} />
        <Bluefish.Text ref={valueRef} contents={value} fontSize={'24px'} fill={'black'} />
        <Bluefish.Text ref={zeroRef} contents={'0'} fontFamily={fontFamily} fontSize={'16px'} fill={'grey'} />
        <Bluefish.Text ref={oneRef} contents={'1'} fontFamily={fontFamily} fontSize={'16px'} fill={'grey'} />

        <Bluefish.Align center><Bluefish.Ref to={valueRef} /><Bluefish.Ref to={itemRef} /></Bluefish.Align>
        <Bluefish.Align left to={'centerRight'}><Bluefish.Ref to={boxRef} /><Bluefish.Ref to={itemRef} /></Bluefish.Align>
        <Bluefish.Align topLeft><Bluefish.Ref to={oneRef} /><Bluefish.Ref to={boxRef} /></Bluefish.Align>
      </Bluefish.Group>

      <Bluefish.Space vertically by={10}><Bluefish.Ref to={labelRef} /><Bluefish.Ref to={elemRef} /></Bluefish.Space>
    </Bluefish.Group>
  );
});

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...Bluefish,
  Node,
  Variable,
  Objects,
};
export default ReactLiveScope;
