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

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...Bluefish,
  Node,
  Variable,
};
export default ReactLiveScope;
