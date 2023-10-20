import { Bluefish, Group, Row, Col, Circle, Text, Ref, Background, Arrow, Align, Distribute, Rect } from "@bluefish-js/solid";

const App = () => {
  return (
    <Bluefish>
      <Background padding={20}>
        <Row spacing={50}>
          <Circle id="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
          <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
          <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
          <Circle r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
        </Row>
      </Background>
      <Align alignment="centerX">
        <Text id="label">Mercury</Text>
        <Ref refId="mercury" />
      </Align>
      <Distribute direction="vertical" spacing={60}>
        <Ref refId="label" />
        <Ref refId="mercury" />
      </Distribute>
      <Arrow>
        <Ref refId="label" />
        <Ref refId="mercury" />
      </Arrow>
    </Bluefish>
  );
};

export default App;
