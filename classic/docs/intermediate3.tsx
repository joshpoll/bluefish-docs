import { Bluefish, Group, Row, Circle, Text, Ref, Background, Arrow, Col, Align, Distribute } from "@bluefish-js/solid";
import { For, Switch, Match } from "solid-js";
const planets = [
  { name: "Mercury", radius: 15, color: "#EBE3CF" },
  { name: "Venus", radius: 36, color: "#DC933C" },
  { name: "Earth", radius: 38, color: "#179DD7" },
  { name: "Mars", radius: 21, color: "#F1CF8E" },
];

export default () => (
  <Bluefish>
    <Row id="planets" spacing={50}>
      <For each={planets}>{(planet) => <Circle id={planet.name} r={planet.radius} fill={planet.color} />}</For>
    </Row>
    <Align id="labels" alignment="centerY">
      <For each={planets}>{(planet, index) => <Text id={`label-${index()}`}>{planet.name}</Text>}</For>
    </Align>
    <Distribute direction="vertical" spacing={40}>
      <Ref refId="labels" />
      <Ref refId="planets" />
    </Distribute>
    <For each={planets}>
      {(planet, index) => (
        <>
          <Align alignment="centerX">
            <Ref refId={`label-${index()}`} />
            <Ref refId={planet.name} />
          </Align>
          <Switch>
            <Match when={planet.radius > 30}>
              <Background>
                <Ref refId={`label-${index()}`} />
                <Ref refId={planet.name} />
              </Background>
            </Match>
            <Match when={true}>
              <Arrow>
                <Ref refId={`label-${index()}`} />
                <Ref refId={planet.name} />
              </Arrow>
            </Match>
          </Switch>
        </>
      )}
    </For>
  </Bluefish>
);
