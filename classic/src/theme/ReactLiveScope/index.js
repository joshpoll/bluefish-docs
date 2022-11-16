import React from "react";
import { Rect, SVG, Align, Text, Ref, Group, Row, Col, Connector } from "@bluefish-js/core";

const Node = React.forwardRef(function _Node({ name, value }, ref) {
  return (
    <Group name={name} ref={ref}>
      <Text name={name + '-value'} contents={value} fontSize={'30px'} />
      <Rect name={name + '-background'} width={50} height={65} rx={5} fill={'none'} stroke={'cornflowerblue'} />
      <Text name={name + '-label'} contents={name} fontSize={'12px'} />
      <Align center>
        <Ref to={name + '-value'} />
        <Ref to={name + '-background'} />
      </Align>
      <Align center to={'topCenter'}>
        <Ref to={name + '-label'} />
        <Ref to={name + '-background'} />
      </Align>
    </Group>
  );
});

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Rect,
  SVG,
  Align,
  Text,
  Ref,
  Group,
  Row,
  Col,
  Node,
  Connector,
};
export default ReactLiveScope;
