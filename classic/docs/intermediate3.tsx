import { Bluefish, Group, StackH, Circle, Text, Ref, Background, Arrow, StackV, Align, Distribute } from "@bluefish-js/solid";
import { For, Switch, Match } from "solid-js";
const planets = [
  { name: "Mercury", radius: 15, color: "#EBE3CF" },
  { name: "Venus", radius: 36, color: "#DC933C" },
  { name: "Earth", radius: 38, color: "#179DD7" },
  { name: "Mars", radius: 21, color: "#F1CF8E" },
];

export default () => (
  <Bluefish>
    <StackH name="planets" spacing={50}>
      <For each={planets}>{(planet) => <Circle name={planet.name} r={planet.radius} fill={planet.color} />}</For>
    </StackH>
    <Align name="labels" alignment="centerY">
      <For each={planets}>{(planet, index) => <Text name={`label-${index()}`}>{planet.name}</Text>}</For>
    </Align>
    <Distribute direction="vertical" spacing={40}>
      <Ref select="labels" />
      <Ref select="planets" />
    </Distribute>
    <For each={planets}>
      {(planet, index) => (
        <>
          <Align alignment="centerX">
            <Ref select={`label-${index()}`} />
            <Ref select={planet.name} />
          </Align>
          <Switch>
            <Match when={planet.radius > 30}>
              <Background>
                <Ref select={`label-${index()}`} />
                <Ref select={planet.name} />
              </Background>
            </Match>
            <Match when={true}>
              <Arrow>
                <Ref select={`label-${index()}`} />
                <Ref select={planet.name} />
              </Arrow>
            </Match>
          </Switch>
        </>
      )}
    </For>
  </Bluefish>
);
