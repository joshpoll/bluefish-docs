import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Col, Align, Distribute } from "@bluefish-js/solid";
import { For, Switch, Match } from "solid-js";
const planets = [{ name: "Mercury", radius: 15, color: "#EBE3CF" }, { name: "Venus", radius: 36, color: "#DC933C" }, { name: "Earth", radius: 38, color: "#179DD7" }, { name: "Mars", radius: 21, color: "#F1CF8E" }];

export default () => (
  <Bluefish>
    <Row id="planets" spacing={50}>
      {/* Put the For component here! */}
    </Row>
  </Bluefish>
);
