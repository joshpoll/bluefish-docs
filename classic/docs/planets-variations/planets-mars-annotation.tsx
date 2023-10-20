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
      <Row spacing={50}>
        <Circle r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
        <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
        <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
        <Circle id="mars" r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
      </Row>
      <Align alignment="centerX">
        <Text id="label">Mars</Text>
        <Ref refId="mars" />
      </Align>
      <Distribute direction="vertical" spacing={60}>
        <Ref refId="label" />
        <Ref refId="mars" />
      </Distribute>
      <Arrow>
        <Ref refId="label" />
        <Ref refId="mars" />
      </Arrow>
    </Bluefish>
  );
};

export default App;
