import { Bluefish, Group, StackH, Circle, Text, Ref, Background, Arrow, StackV, Align, Distribute } from "@bluefish-js/solid";
import { For, Switch, Match } from "solid-js";
const planets = [{ name: "Mercury", radius: 15, color: "#EBE3CF" }, { name: "Venus", radius: 36, color: "#DC933C" }, { name: "Earth", radius: 38, color: "#179DD7" }, { name: "Mars", radius: 21, color: "#F1CF8E" }];

export default () => (
  <Bluefish>
    <StackH name="planets" spacing={50}>
      <For each={planets}>{(planet) => <Circle name={planet.name} r={planet.radius} fill={planet.color} />}</For>
    </StackH>
    <For each={planets}>
      {(planet, index) => (
        <>
          <Align alignment="centerX">
            <Text name={`label-${index()}`}>{planet.name}</Text>
            <Ref select={planet.name} />
          </Align>
          <Distribute direction="vertical" spacing={60}>
            <Ref select={`label-${index()}`} />
            <Ref select={planet.name} />
          </Distribute>
          <Arrow>
            <Ref select={`label-${index()}`} />
            <Ref select={planet.name} />
          </Arrow>
        </>
      )}
    </For>
  </Bluefish>
);
