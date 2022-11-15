import React from "react";
import { Rect, SVG } from "@bluefish-js/core";

const ExampleComponent = (props) => (
  <SVG width={1000} height={1000}>
    <Rect fill={"red"} width={100} height={100} />
  </SVG>
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Rect,
  SVG,
};
export default ReactLiveScope;
