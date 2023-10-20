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
        <Background padding={20}>
          <Col spacing={50}>
            <Circle id="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
            <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
            <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
            <Circle r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
          </Col>
        </Background>
        {/* But you can also use *relations* like Align and Distribute */}
        <Align alignment="centerY">
          <Text id="label">Mercury</Text>
          {/* Bluefish lets you refer to previous components using a special `Ref` component. */}
          <Ref refId="mercury" />
        </Align>
        <Distribute direction="horizontal" spacing={60}>
          <Ref refId="label" />
          <Ref refId="mercury" />
        </Distribute>
        {/* In addition to performing layout, Bluefish relations can also draw objects. */}
        <Arrow>
          <Ref refId="label" />
          <Ref refId="mercury" />
        </Arrow>
      </Group>
    </Bluefish>
  );
};

export default App;
