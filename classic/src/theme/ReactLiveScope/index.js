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

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...Bluefish,
  Node,
};
export default ReactLiveScope;
