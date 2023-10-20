import {
  Bluefish,
  Group,
  Row,
  Col,
  Circle,
  Text,
  Ref,
  Background,
  Arrow,
  Align,
  Distribute,
  Rect,
} from "@bluefish-js/solid";

const App = () => {
  return (
    <Bluefish>
      {/* Bluefish is a diagramming library for SolidJS */}
      <Group>
        {/* You can specify UI-like components such as Row and Background */}
        <Row id="planets" spacing={50}>
          <Circle id="Mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
          <Circle id="Venus" r={36} fill="#DC933C" stroke-width={3} stroke="black" />
          <Circle id="Earth" r={38} fill="#179DD7" stroke-width={3} stroke="black" />
          <Circle id="Mars" r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
        </Row>
        <Align id="labels" alignment="centerY">
          <For each={["Mercury", "Venus", "Earth", "Mars"]}>
            {(planet, id) => <Text id={`label${id()}`}>{planet}</Text>}
          </For>
        </Align>
        <Distribute direction="vertical" spacing={40}>
          <Ref refId="labels" />
          <Ref refId="planets" />
        </Distribute>
        <For each={["Mercury", "Venus", "Earth", "Mars"]}>
          {(planet, id) => {
            return (
              <>
                <Align alignment="centerX">
                  <Ref refId={`label${id()}`} />
                  {/* Bluefish lets you refer to previous components using a special `Ref` component. */}
                  <Ref refId={planet} />
                </Align>
                {planet === "Mercury" || planet === "Mars" ? (
                  <Arrow>
                    <Ref refId={`label${id()}`} />
                    <Ref refId={planet} />
                  </Arrow>
                ) : (
                  <Background>
                    <Ref refId={`label${id()}`} />
                    <Ref refId={planet} />
                  </Background>
                )}
              </>
            );
          }}
        </For>
      </Group>
    </Bluefish>
  );
};

export default App;
